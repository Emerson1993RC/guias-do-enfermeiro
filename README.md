# Guias do Enfermeiro — Guias Clínicos APS (offline)

App web instalável (PWA) para consulta rápida de guias clínicos na Atenção Primária.
Depois do primeiro acesso, funciona **sem internet**.

Primeiro documento incluído:
**Antimicrobianos na Prática Clínica: um guia para profissionais da Atenção Primária do Ceará** (SESA-CE / CAMO-NET Brasil) — 17 capítulos, com:

- índice por grupos clínicos e acessos rápidos (Sepse, Dosagem pediátrica, Ajuste renal, Odontologia);
- busca em todo o conteúdo (tecla `/` ou `Ctrl+K`), ignorando acentos, com destaque do termo no tópico;
- esquemas terapêuticos em cartões (adulto / criança);
- ferramentas: Escore de Centor, critérios de antimicrobiano na diarreia, triagem de sepse, calculadora de dose pediátrica (mg/kg) e clearance de creatinina (Cockcroft-Gault);
- PDF original disponível para abrir.

> Ferramenta de apoio. O conteúdo foi transcrito do PDF oficial; confirme sempre a conduta conforme o quadro do paciente e as diretrizes vigentes.

## Como usar no celular

1. Abra o endereço do app no navegador (Chrome no Android / Safari no iPhone).
2. Toque em **Instalar app** (ou menu → “Adicionar à tela inicial”).
3. Pronto: abre como aplicativo e funciona offline.

## Estrutura

```
index.html            página única
app.css / app.js      visual e lógica (sem dependências, sem build)
sw.js                 service worker (cache offline) — suba VERSAO a cada mudança
manifest.webmanifest  dados de instalação
guias/registro.js     lista de documentos do app
guias/<id>/topicos-N.js  conteúdo de cada documento
```

## Como adicionar um novo documento

1. Crie a pasta `guias/<novo-id>/` e um ou mais arquivos `topicos-1.js`, seguindo o formato de `guias/antimicrobianos/topicos-1.js`:

   ```js
   (window.GUIA_TOPICOS = window.GUIA_TOPICOS || {})["novo-id"] =
     (window.GUIA_TOPICOS["novo-id"] || []).concat([
       { id: "meu-topico", num: "01", titulo: "…", grupo: "grupo-x", pag: 5,
         resumo: "…",
         secoes: [ { t: "texto", titulo: "…", html: "<p>…</p>" } ] }
     ]);
   ```

   Tipos de seção disponíveis: `texto`, `lista`, `box` (`v`: diag | trat | alerta | info), `esquemas`, `tabela`, `fluxo`, `duas`, `decisao`, `centor`, `sepse`, `calc`, `ccr`.

2. Registre o documento em `guias/registro.js` (id, título, grupos, atalhos e a lista `arquivos`).
3. Em `sw.js`, aumente `VERSAO` (ex.: `1.0.0` → `1.1.0`) para os aparelhos baixarem a novidade.
4. Faça commit e push — o GitHub Pages publica sozinho.

## Rodar localmente

Qualquer servidor estático serve, por exemplo:

```bash
npx serve .
```
