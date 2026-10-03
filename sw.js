/* Service worker: deixa o app 100% offline.
   Ao alterar qualquer conteúdo, suba VERSAO para os aparelhos baixarem a atualização. */
const VERSAO = "1.1.3";
const CACHE = "guias-aps-" + VERSAO;

importScripts("guias/registro.js");

const BASE = [
  "./",
  "index.html",
  "app.css",
  "app.js",
  "manifest.webmanifest",
  "guias/registro.js",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-512.png"
];
// O PDF original (grande) não entra no pré-cache: fica salvo na primeira vez que for aberto.
const ARQUIVOS = BASE.concat(...(self.GUIAS || []).map((g) => g.arquivos));

// cache: "reload" ignora o cache HTTP do navegador, para não guardar arquivos da versão anterior.
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS.map((u) => new Request(u, { cache: "reload" })))).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k.startsWith("guias-aps-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", (e) => {
  if (e.data === "versao" && e.source) e.source.postMessage({ versao: VERSAO });
});

// Cache primeiro; o que não estiver no cache é buscado na rede e guardado.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res.ok && res.type === "basic") {
          const copia = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copia));
        }
        return res;
      }).catch(() => (req.mode === "navigate" ? caches.match("index.html") : Response.error()));
    })
  );
});
