/* Guias Clínicos APS — app offline (PWA) sem dependências.
   Rotas (hash):  #/                      biblioteca de guias
                  #/<guia>                página inicial do guia (índice por grupos)
                  #/<guia>/<topico>?q=..  tópico (q destaca o termo buscado) */
(function () {
  "use strict";

  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
  const app = $("#app");
  const GUIAS = self.GUIAS || [];
  const TOPICOS = () => window.GUIA_TOPICOS || {};

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const norm = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const textoPuro = (html) => String(html).replace(/<br\s*\/?>/gi, " ").replace(/<[^>]+>/g, " ").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
  const slug = (s) => norm(textoPuro(s)).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const guia = (id) => GUIAS.find((g) => g.id === id);
  const topicosDe = (g) => TOPICOS()[g.id] || [];
  const grupoDe = (g, id) => g.grupos.find((x) => x.id === id) || { nome: id, sigla: "?" };

  /* ---------- carregamento dos arquivos de cada guia ---------- */
  function carregarScript(src) {
    return new Promise((ok, falha) => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = ok;
      s.onerror = () => falha(new Error("Falha ao carregar " + src));
      document.body.appendChild(s);
    });
  }
  async function carregarGuias() {
    for (const g of GUIAS) for (const arq of g.arquivos) await carregarScript(arq);
  }

  /* ---------- rotas ---------- */
  function rotaAtual() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    const [caminho, qs] = h.split("?");
    const partes = caminho.split("/").filter(Boolean);
    const q = new URLSearchParams(qs || "").get("q") || "";
    return { guiaId: partes[0], topicoId: partes[1], q };
  }

  function render() {
    const { guiaId, topicoId, q } = rotaAtual();
    const g = guiaId && guia(guiaId);
    montarTopo(g);
    if (!g) return renderBiblioteca();
    const t = topicoId && topicosDe(g).find((x) => x.id === topicoId);
    if (topicoId && !t) { app.innerHTML = `<div class="card bloco"><h2>Tópico não encontrado</h2><p><a href="#/${g.id}">Voltar ao guia</a></p></div>`; return; }
    if (t) renderTopico(g, t, q); else renderGuia(g);
  }

  function montarTopo(g) {
    $("#topo-eyebrow").textContent = g ? "Guia clínico · offline" : "Guias clínicos · offline";
    $("#topo-titulo").textContent = g ? g.titulo : "Guias Clínicos APS";
    document.title = g ? `${g.titulo} · Guias Clínicos APS` : "Guias Clínicos APS";
    const nav = $("#atalhos");
    nav.innerHTML = g && g.atalhos
      ? `<span class="rotulo">Acessos rápidos</span>` + g.atalhos.map((a) => `<a class="chip-topo" href="#/${g.id}/${a.topico}">${esc(a.rotulo)}</a>`).join("")
      : "";
  }

  /* ---------- biblioteca ---------- */
  function renderBiblioteca() {
    app.innerHTML = `
      <section class="card hero">
        <div>
          <p class="eyebrow">Biblioteca</p>
          <h1>Guias Clínicos para a Atenção Primária</h1>
          <p>Consulta rápida de protocolos, condutas e posologias — funciona <b>sem internet</b> depois do primeiro acesso. Instale no celular para abrir como um aplicativo.</p>
          <div class="acoes-hero"><button class="btn primario" data-abrir-busca>Pesquisar em todos os guias</button></div>
        </div>
        <aside class="como-usar">
          <strong>Como usar na rotina</strong>
          <ol><li><span>Escolha um guia abaixo.</span></li><li><span>Navegue pelos grupos clínicos ou use a busca (tecla <b>/</b>).</span></li><li><span>No celular: menu do navegador → “Adicionar à tela inicial”.</span></li></ol>
        </aside>
      </section>
      <div class="biblioteca">
        ${GUIAS.map((g) => `
          <a class="card guia-card" href="#/${g.id}" style="--cor:${g.cor || "var(--accent)"}">
            <span class="sigla-g">${esc(g.sigla)}</span>
            <p class="eyebrow">${esc(g.fonte)}</p>
            <h2>${esc(g.titulo)}</h2>
            <p class="muted" style="margin:0">${esc(g.subtitulo)}</p>
            <span class="contador" style="align-self:flex-start">${topicosDe(g).length} tópicos</span>
          </a>`).join("")}
        <div class="card guia-card em-breve">
          <span class="sigla-g" style="background:var(--ink-3)">+</span>
          <h2>Novos documentos</h2>
          <p class="muted" style="margin:0">Outros guias e protocolos serão adicionados aqui.</p>
        </div>
      </div>`;
  }

  /* ---------- índice lateral ---------- */
  function indiceLateral(g, ativoTopico) {
    const tops = topicosDe(g);
    return `
      <aside class="card indice so-desktop" aria-label="Índice clínico">
        <div class="indice-cab"><span class="ico">≡</span><div><p class="eyebrow">Índice clínico</p><strong>Grupos clínicos</strong></div></div>
        ${g.grupos.map((gr) => {
          const ts = tops.filter((t) => t.grupo === gr.id);
          if (!ts.length) return "";
          const aberto = ativoTopico && ativoTopico.grupo === gr.id;
          return `
            <a class="grupo-btn ${aberto ? "ativo" : ""}" href="#/${g.id}" data-grupo="${gr.id}">
              <span class="sigla">${esc(gr.sigla)}</span>
              <span><small>${esc(gr.eyebrow)}</small>${esc(gr.nome)}</span>
            </a>
            ${ativoTopico && aberto ? `<ul class="indice-topicos">${ts.map((t) => `<li><a class="${t.id === ativoTopico.id ? "ativo" : ""}" href="#/${g.id}/${t.id}">${esc(t.titulo)}</a></li>`).join("")}</ul>` : ""}`;
        }).join("")}
      </aside>`;
  }

  /* ---------- página do guia ---------- */
  function renderGuia(g) {
    const tops = topicosDe(g);
    app.innerHTML = `
      <div class="grade">
        ${indiceLateral(g)}
        <div>
          <section class="card hero">
            <div>
              <p class="eyebrow">Índice clínico</p>
              <h1>${esc(g.titulo)}</h1>
              <p>Interface de consulta rápida baseada no guia <b>${esc(g.titulo.toUpperCase())}: ${esc(g.subtitulo.toUpperCase())}</b> para busca de diagnósticos, condutas e protocolos durante o atendimento.</p>
              <p class="muted"><small>Fonte: ${esc(g.fonte)}.</small></p>
              <div class="acoes-hero">
                <button class="btn primario" data-abrir-busca>Pesquisar no guia</button>
                ${g.pdf ? `<a class="btn" href="${g.pdf}" target="_blank" rel="noopener">Abrir PDF original</a>` : ""}
              </div>
            </div>
            <aside class="como-usar">
              <strong>Como usar na rotina</strong>
              <ol><li>Busca rápida por diagnóstico, conduta, medicamento ou tópico.</li><li>Navegação por grupos clínicos.</li><li>Calculadoras de apoio em Utilitários clínicos.</li></ol>
            </aside>
          </section>
          ${g.grupos.map((gr) => {
            const ts = tops.filter((t) => t.grupo === gr.id);
            if (!ts.length) return "";
            return `
              <section class="secao-grupo" id="grupo-${gr.id}">
                <div class="secao-grupo-cab"><div><p class="eyebrow">${esc(gr.eyebrow)}</p><h2>${esc(gr.nome)}</h2></div><span class="contador">${ts.length} ${ts.length > 1 ? "protocolos" : "protocolo"}</span></div>
                <div class="lista-topicos">
                  ${ts.map((t) => `
                    <a class="card topico-card" href="#/${g.id}/${t.id}">
                      <span class="linha"><span class="num">${esc(t.num)}</span><strong>${esc(t.titulo)}</strong></span>
                      <p>${esc(t.resumo)}</p>
                      <span class="ver">Ver tópico ›</span>
                    </a>`).join("")}
                </div>
              </section>`;
          }).join("")}
        </div>
      </div>`;
    $$("[data-grupo]", app).forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const alvo = $("#grupo-" + a.dataset.grupo);
      if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
  }

  /* ---------- página do tópico ---------- */
  function renderTopico(g, t, q) {
    const tops = topicosDe(g);
    const i = tops.indexOf(t);
    const ant = tops[i - 1], prox = tops[i + 1];
    const gr = grupoDe(g, t.grupo);
    const ids = new Set();
    const secoes = t.secoes.map((s, n) => {
      let id = s.titulo ? slug(s.titulo) : "s" + n;
      while (ids.has(id)) id += "-" + n;
      ids.add(id);
      return { s, id };
    });
    app.innerHTML = `
      <div class="grade">
        ${indiceLateral(g, t)}
        <article>
          <a class="voltar" href="#/${g.id}">‹ ${esc(g.titulo)}</a>
          <header class="card topico-cab">
            <div class="titulo-linha"><span class="num">${esc(t.num)}</span><h1>${esc(t.titulo)}</h1><span class="badge">${esc(gr.nome)}</span></div>
            <nav class="navsec" aria-label="Seções do tópico">${secoes.filter((x) => x.s.titulo).map((x) => `<a href="#${x.id}" data-sec="${x.id}">${esc(textoPuro(x.s.titulo))}</a>`).join("")}</nav>
            <div class="fonte-pag">Fonte: ${esc(g.titulo)} — pág. ${t.pag} do guia.</div>
          </header>
          ${secoes.map(({ s, id }) => renderSecao(s, id)).join("")}
          <nav class="prox-ant">
            ${ant ? `<a class="card" href="#/${g.id}/${ant.id}"><small>‹ Anterior</small>${esc(ant.titulo)}</a>` : "<span></span>"}
            ${prox ? `<a class="card" href="#/${g.id}/${prox.id}"><small>Próximo ›</small>${esc(prox.titulo)}</a>` : "<span></span>"}
          </nav>
        </article>
      </div>`;
    // links internos de seção não devem trocar a rota
    $$("[data-sec]", app).forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const alvo = document.getElementById(a.dataset.sec);
      if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }));
    ligarFerramentas(app);
    if (q) destacar(q);
  }

  /* ---------- renderização das seções ---------- */
  const ROTULO_BOX = { diag: "🩺", trat: "💊", alerta: "⚠️", info: "ℹ️" };

  function renderSecao(s, id) {
    const h2 = s.titulo ? `<h2>${s.titulo}</h2>` : "";
    switch (s.t) {
      case "texto":
        return `<section class="card bloco" id="${id}">${h2}${s.html}</section>`;
      case "lista": {
        const tag = s.numerada ? "ol" : "ul";
        return `<section class="card bloco" id="${id}">${h2}<${tag}>${s.itens.map((x) => `<li>${x}</li>`).join("")}</${tag}></section>`;
      }
      case "box":
        return `<section class="callout ${s.v}" id="${id}"><h2><span aria-hidden="true">${ROTULO_BOX[s.v] || ""}</span>${s.titulo || ""}</h2>${s.html}</section>`;
      case "esquemas": return renderEsquemas(s, id);
      case "tabela": return renderTabela(s, id);
      case "fluxo": return renderFluxo(s, id);
      case "duas": return renderDuas(s, id);
      case "decisao": return renderDecisao(s, id);
      case "centor": return renderCentor(s, id);
      case "sepse": return renderSepse(s, id);
      case "calc": return renderCalcPed(s, id);
      case "ccr": return renderCcr(s, id);
      default: return "";
    }
  }

  function vias(txt) {
    const v = [];
    if (/\bVO\b/.test(txt)) v.push("Via oral (VO)");
    if (/\bIM\b/.test(txt)) v.push("IM");
    if (/\bIV\b/.test(txt)) v.push("IV");
    if (/vaginal/i.test(txt)) v.push("Via vaginal");
    return v;
  }

  function renderEsquemas(s, id) {
    const cols = s.cols || ["Adulto", "Criança"];
    return `
      <section class="card esquemas" id="${id}">
        <div class="esq-cab"><p class="eyebrow">Esquemas terapêuticos</p><h2>${s.titulo}</h2></div>
        ${s.intro ? `<div class="esq-intro">${s.intro}</div>` : ""}
        ${s.grupos.map((gr) => `
          <div class="esq-grupo-cab"><small>Farmacoterapia</small><strong>${gr.nome}</strong></div>
          ${gr.itens.map((it) => {
            const valores = [it.a, it.c].slice(0, cols.length);
            return `
              <div class="farmaco">
                <div class="farmaco-nome"><h3>${it.f}</h3><span class="vias">${vias(textoPuro(it.a + " " + (it.c || ""))).map((v) => `<span class="via">${v}</span>`).join("")}</span></div>
                <div class="doses">
                  ${valores.map((val, k) => val === undefined ? "" : `<div class="dose ${/^(Não se aplica|-)$/.test(textoPuro(val)) ? "na" : ""}"><small>${cols[k]}</small><div>${val}</div></div>`).join("")}
                </div>
              </div>`;
          }).join("")}`).join("")}
        ${s.nota ? `<div class="esq-nota">${s.nota}</div>` : ""}
      </section>`;
  }

  function renderTabela(s, id) {
    const head = s.head;
    return `
      <section class="card bloco" id="${id}">
        ${s.titulo ? `<h2>${s.titulo}</h2>` : ""}
        ${s.intro || ""}
        ${s.busca ? `<input class="filtro-tabela" type="search" placeholder="Filtrar medicamento…" data-filtro="${id}-t" aria-label="Filtrar tabela">` : ""}
        <div class="tabela-wrap">
          <table class="empilha" id="${id}-t">
            <thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead>
            <tbody>
              ${s.rows.map((r) => r[0] && r[0].grupo
                ? `<tr class="grupo"><td colspan="${head.length}">${r[0].grupo}</td></tr>`
                : `<tr>${r.map((c, k) => `<td data-label="${esc(textoPuro(head[k] || ""))}">${c}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
        ${s.nota ? `<p class="nota">${s.nota}</p>` : ""}
      </section>`;
  }

  const ROTULO_RAMO = { atb: "Sim", alerta: "Sim", "nao-atb": "Não", talvez: "Avaliar" };
  function ramo(r, rotulo) {
    return `<div class="ramo ${r.tipo}"><b>${rotulo}</b>${r.html}</div>`;
  }
  function renderFluxo(s, id) {
    return `
      <section class="card bloco" id="${id}">
        <h2>${s.titulo}</h2>
        <div class="fluxo">
          ${s.passos.map((p, k) => {
            const ramos = [];
            if (p.sim) ramos.push(ramo(p.sim, p.nao ? "Sim" : ROTULO_RAMO[p.sim.tipo] || "Conduta"));
            if (p.nao) ramos.push(ramo(p.nao, "Não"));
            const ultimo = k === s.passos.length - 1;
            const continua = !ultimo && (!p.nao || !p.sim) ? (p.sim && !p.nao ? "Não" : "Sim") : "";
            return `
              <div class="passo">
                <h3>${p.pergunta}</h3>
                ${p.itens ? `<ul>${p.itens.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}
                ${p.obs ? `<p class="nota">${p.obs}</p>` : ""}
                <div class="ramos ${ramos.length === 1 ? "unico" : ""}">${ramos.join("")}</div>
              </div>
              ${!ultimo ? `<div class="seta">${continua ? "Se " + continua.toLowerCase() : ""}</div>` : ""}`;
          }).join("")}
        </div>
        ${s.nota ? `<p class="nota">${s.nota}</p>` : ""}
      </section>`;
  }

  function renderDuas(s, id) {
    const lado = (l) => `<div class="ramo ${l.tipo}"><b>${l.rotulo}</b><ul>${l.passos.map((x) => `<li>${x}</li>`).join("")}</ul></div>`;
    return `
      <section class="card bloco" id="${id}">
        <h2>${s.titulo}</h2>
        <div class="ramos">${lado(s.a)}${lado(s.b)}</div>
        ${s.nota ? `<p class="nota">${s.nota}</p>` : ""}
      </section>`;
  }

  /* ---------- ferramentas interativas ---------- */
  function renderDecisao(s, id) {
    return `
      <section class="card bloco" id="${id}">
        <h2>${s.titulo}</h2>
        <div class="ferramenta" data-ferramenta="decisao">
          <p class="muted" style="margin-top:0">Marque o que o paciente apresenta:</p>
          ${s.criterios.map((c) => `
            <h3 style="margin:10px 0 6px">${c.nome}</h3>
            <div class="checks">
              ${(c.itens.length ? c.itens : [c.nome]).map((x) => `<label class="check"><input type="checkbox">${x}</label>`).join("")}
            </div>`).join("")}
          <div class="ramos" style="margin-top:14px">
            <div class="ramo atb" data-lado="sim"><b>Sim — algum critério presente</b>${s.sim}</div>
            <div class="ramo nao-atb" data-lado="nao"><b>Não — nenhum critério</b>${s.nao}</div>
          </div>
        </div>
      </section>`;
  }

  const CENTOR = [
    ["Febre > 38°C", 1], ["Ausência de tosse", 1], ["Adenopatia cervical anterior", 1], ["Exsudato ou edema amigdaliano", 1]
  ];
  function renderCentor(s, id) {
    return `
      <section class="card bloco" id="${id}">
        <h2>${s.titulo}</h2>
        <p class="muted">Definir a conduta com base nos Critérios de Centor Modificado.</p>
        <div class="ferramenta" data-ferramenta="centor">
          <div class="checks">
            ${CENTOR.map(([r, p]) => `<label class="check"><input type="checkbox" value="${p}">${r}<span class="pts">+${p}</span></label>`).join("")}
          </div>
          <div class="radios" role="radiogroup" aria-label="Idade">
            <label><input type="radio" name="${id}-idade" value="1">Idade 3-14 anos (+1)</label>
            <label><input type="radio" name="${id}-idade" value="0" checked>Idade 15-44 anos (0)</label>
            <label><input type="radio" name="${id}-idade" value="-1">Idade ≥ 45 anos (-1)</label>
          </div>
          <div class="resultado" data-saida></div>
        </div>
        <table class="empilha" style="margin-top:14px">
          <thead><tr><th>Escore</th><th>Probabilidade de infecção estreptocócica</th><th>Conduta</th></tr></thead>
          <tbody>
            <tr><td data-label="Escore">0, 1 ou 2</td><td data-label="Probabilidade">≤ 1 ponto: baixa · 2-3 pontos: moderada</td><td data-label="Conduta">❌ Não precisa prescrever antimicrobiano. Tratamento com sintomático.</td></tr>
            <tr><td data-label="Escore">3</td><td data-label="Probabilidade">Moderada</td><td data-label="Conduta">❓ Considerar tratamento com antimicrobiano, caso paciente apresente outros sinais e sintomas sugestivos de infecção bacteriana.</td></tr>
            <tr><td data-label="Escore">≥ 4</td><td data-label="Probabilidade">Alta</td><td data-label="Conduta">❗ Tratamento com antimicrobiano e sintomáticos.</td></tr>
          </tbody>
        </table>
      </section>`;
  }

  function renderSepse(s, id) {
    const disf = ["Hipotensão: PAS < 90mmHg", "Alteração do nível de consciência", "SatO<sub>2</sub> < 90%, necessidade de O<sub>2</sub> ou dispneia importante", "Oligúria (diurese < 0,5 ml/kg/h)",
      "Lab.: creatinina > 2mg/dL", "Lab.: lactato acima do valor normal", "Lab.: plaquetas < 100.000", "Lab.: INR > 1,5", "Lab.: bilirrubinas > 2mg/dL"];
    const sirs = ["Febre (Tax > 37,5°C) ou hipotermia (temperatura central < 35°C)", "Taquicardia (FC > 90bpm)", "Taquipneia (FR > 20 irpm)", "Leucocitose (> 12.000/mm³) ou leucopenia (< 4.000/mm³)"];
    return `
      <section class="card bloco" id="${id}">
        <h2>${s.titulo}</h2>
        <div class="ferramenta" data-ferramenta="sepse">
          <div class="colunas-2">
            <div><h3 style="margin:0 0 6px">Paciente apresenta UMA disfunção orgânica?</h3>
              <div class="checks">${disf.map((x) => `<label class="check"><input type="checkbox" data-tipo="disf">${x}</label>`).join("")}</div>
              <p class="nota">Exames laboratoriais: se disponível.</p></div>
            <div><h3 style="margin:0 0 6px">…OU pelo menos DOIS sinais de SIRS?</h3>
              <div class="checks">${sirs.map((x) => `<label class="check"><input type="checkbox" data-tipo="sirs">${x}</label>`).join("")}</div></div>
          </div>
          <h3 style="margin:14px 0 6px">Suspeita ou confirmação de infecção?</h3>
          <div class="radios">
            <label><input type="radio" name="${id}-inf" value="sim">Sim</label>
            <label><input type="radio" name="${id}-inf" value="nao">Não</label>
          </div>
          <div class="resultado" data-saida></div>
        </div>
      </section>`;
  }

  // Doses da tabela "Posologia em pediatria" (pág. 46). Só entram itens expressos em mg/kg/dia com divisão definida.
  const CALC_PED = [
    { f: "Amoxicilina", min: 50, max: 90, maxDose: 500, ops: [[3, "8/8h"]] },
    { f: "Amoxicilina-clavulanato (componente amoxicilina)", min: 50, max: 90, ops: [[3, "8/8h"]] },
    { f: "Azitromicina", min: 5, max: 12, maxDia: 500, ops: [[1, "1x/dia"]] },
    { f: "Cefalexina", min: 25, max: 100, maxDose: 1000, ops: [[4, "6/6h"]] },
    { f: "Claritromicina", min: 15, max: 15, maxDose: 500, ops: [[2, "12/12h"]] },
    { f: "Clindamicina", min: 30, max: 40, maxDia: 1800, ops: [[4, "6/6h"], [3, "8/8h"]] },
    { f: "Nitrofurantoína", min: 5, max: 7, ops: [[4, "6/6h"]] },
    { f: "Penicilina V", min: 25, max: 75, ops: [[4, "6/6h"], [3, "8/8h"]] },
    { f: "Sulfametoxazol-trimetoprim (dose do trimetoprim)", min: 6, max: 12, ops: [[2, "12/12h"]] }
  ];
  function renderCalcPed(s, id) {
    return `
      <section class="card bloco" id="${id}">
        <h2>${s.titulo}</h2>
        <div class="ferramenta" data-ferramenta="ped">
          <div class="campos">
            <div class="campo"><label for="${id}-peso">Peso (kg)</label><input id="${id}-peso" type="number" min="1" max="150" step="0.1" inputmode="decimal" placeholder="ex.: 18"></div>
            <div class="campo" style="grid-column: span 2"><label for="${id}-f">Antimicrobiano</label>
              <select id="${id}-f">${CALC_PED.map((c, k) => `<option value="${k}">${c.f} — ${c.min === c.max ? c.min : c.min + "-" + c.max} mg/kg/dia</option>`).join("")}</select></div>
            <div class="campo"><label for="${id}-int">Intervalo</label><select id="${id}-int"></select></div>
          </div>
          <div class="resultado" data-saida>Informe o peso.</div>
          <p class="nota">Cálculo de apoio a partir da tabela do guia: dose diária = mg/kg/dia × peso, dividida pelo número de tomadas e limitada aos máximos indicados. Confira sempre a apresentação disponível e a indicação clínica.</p>
        </div>
      </section>`;
  }

  function renderCcr(s, id) {
    return `
      <section class="card bloco" id="${id}">
        <h2>${s.titulo}</h2>
        <div class="ferramenta" data-ferramenta="ccr">
          <div class="campos">
            <div class="campo"><label for="${id}-idade">Idade (anos)</label><input id="${id}-idade" type="number" min="18" max="120" inputmode="numeric"></div>
            <div class="campo"><label for="${id}-peso">Peso (kg)</label><input id="${id}-peso" type="number" min="20" max="300" step="0.1" inputmode="decimal"></div>
            <div class="campo"><label for="${id}-cr">Creatinina (mg/dL)</label><input id="${id}-cr" type="number" min="0.1" max="20" step="0.01" inputmode="decimal"></div>
            <div class="campo"><label for="${id}-sexo">Sexo</label><select id="${id}-sexo"><option value="m">Masculino</option><option value="f">Feminino</option></select></div>
          </div>
          <div class="resultado" data-saida>Preencha os campos para estimar o clearance.</div>
          <p class="nota">Cockcroft-Gault: ClCr = [(140 − idade) × peso] ÷ (72 × creatinina), × 0,85 se feminino. Estimativa de apoio; não substitui avaliação clínica. A calculadora não faz parte do guia original.</p>
        </div>
      </section>`;
  }

  const fmt = (n) => (Math.round(n * 10) / 10).toLocaleString("pt-BR");

  function ligarFerramentas(raiz) {
    $$('[data-ferramenta="decisao"]', raiz).forEach((el) => {
      const upd = () => {
        const algum = $$("input:checked", el).length > 0;
        const sim = $('[data-lado="sim"]', el), nao = $('[data-lado="nao"]', el);
        sim.style.opacity = algum ? 1 : 0.45; nao.style.opacity = algum ? 0.45 : 1;
      };
      el.addEventListener("change", upd); upd();
    });

    $$('[data-ferramenta="centor"]', raiz).forEach((el) => {
      const out = $("[data-saida]", el);
      const upd = () => {
        let pts = $$('input[type="checkbox"]:checked', el).reduce((a, i) => a + +i.value, 0);
        pts += +($('input[type="radio"]:checked', el) || { value: 0 }).value;
        let cls, txt;
        if (pts <= 2) { cls = "baixo"; txt = "❌ Não precisa prescrever antimicrobiano. Tratamento com sintomático."; }
        else if (pts === 3) { cls = "medio"; txt = "❓ Considerar tratamento com antimicrobiano, caso paciente apresente outros sinais e sintomas sugestivos de infecção bacteriana."; }
        else { cls = "alto"; txt = "❗ Tratamento com antimicrobiano e sintomáticos."; }
        const prob = pts <= 1 ? "baixa" : pts <= 3 ? "moderada" : "alta";
        out.className = "resultado " + cls;
        out.innerHTML = `<span class="grande">${pts} ${Math.abs(pts) === 1 ? "ponto" : "pontos"}</span> · probabilidade ${prob} de infecção estreptocócica<br>${txt}`;
      };
      el.addEventListener("change", upd); upd();
    });

    $$('[data-ferramenta="sepse"]', raiz).forEach((el) => {
      const out = $("[data-saida]", el);
      const upd = () => {
        const d = $$('[data-tipo="disf"]:checked', el).length;
        const s = $$('[data-tipo="sirs"]:checked', el).length;
        const inf = ($('input[type="radio"]:checked', el) || {}).value;
        const crit = d >= 1 || s >= 2;
        if (!crit) { out.className = "resultado"; out.innerHTML = `Critérios: ${d} disfunção(ões) orgânica(s), ${s} sinal(is) de SIRS. <b>Sem critérios → NÃO É SEPSE.</b> Reavalie se o quadro mudar.`; return; }
        if (!inf) { out.className = "resultado medio"; out.innerHTML = "Critérios presentes. Responda: há <b>suspeita ou confirmação de infecção</b>?"; return; }
        if (inf === "nao") { out.className = "resultado baixo"; out.innerHTML = "Sem suspeita de infecção → <b>NÃO É SEPSE</b>."; return; }
        out.className = "resultado alto";
        out.innerHTML = '<span class="grande">SEPSE ou CHOQUE SÉPTICO</span><br>Siga a conduta abaixo: antibioticoterapia conforme o foco provável, reposição volêmica precoce quando indicada e encaminhamento para UPA ou hospital.';
      };
      el.addEventListener("change", upd); upd();
    });

    $$('[data-ferramenta="ped"]', raiz).forEach((el) => {
      const [peso] = $$("input", el);
      const [sf, si] = $$("select", el);
      const out = $("[data-saida]", el);
      const preencherInt = () => {
        const c = CALC_PED[+sf.value];
        si.innerHTML = c.ops.map(([n, r], k) => `<option value="${k}">${r} (${n}x/dia)</option>`).join("");
      };
      const upd = () => {
        const c = CALC_PED[+sf.value];
        const [n, rot] = c.ops[+si.value || 0];
        const p = parseFloat(String(peso.value).replace(",", "."));
        if (!(p > 0)) { out.className = "resultado"; out.textContent = "Informe o peso."; return; }
        let dMin = c.min * p, dMax = c.max * p;
        const avisos = [];
        if (c.maxDia) { if (dMax > c.maxDia) avisos.push(`máx. ${fmt(c.maxDia)} mg/dia`); dMin = Math.min(dMin, c.maxDia); dMax = Math.min(dMax, c.maxDia); }
        let tMin = dMin / n, tMax = dMax / n;
        if (c.maxDose) { if (tMax > c.maxDose) avisos.push(`máx. ${fmt(c.maxDose)} mg/dose`); tMin = Math.min(tMin, c.maxDose); tMax = Math.min(tMax, c.maxDose); }
        const faixa = (a, b) => (Math.abs(a - b) < 0.05 ? fmt(a) : `${fmt(a)} a ${fmt(b)}`);
        out.className = "resultado";
        out.innerHTML = `<b>${c.f}</b> · ${fmt(p)} kg<br>` +
          `<span class="grande">${faixa(tMin, tMax)} mg</span> por dose, de ${rot}<br>` +
          `<small>Total diário: ${faixa(tMin * n, tMax * n)} mg/dia (${c.min === c.max ? c.min : c.min + "-" + c.max} mg/kg/dia)${avisos.length ? " — limitado: " + avisos.join(", ") : ""}</small>`;
      };
      sf.addEventListener("change", () => { preencherInt(); upd(); });
      si.addEventListener("change", upd);
      peso.addEventListener("input", upd);
      preencherInt(); upd();
    });

    $$('[data-ferramenta="ccr"]', raiz).forEach((el) => {
      const [idade, peso, cr] = $$("input", el);
      const sexo = $("select", el);
      const out = $("[data-saida]", el);
      const num = (i) => parseFloat(String(i.value).replace(",", "."));
      const upd = () => {
        const a = num(idade), p = num(peso), c = num(cr);
        if (!(a > 0 && p > 0 && c > 0)) { out.className = "resultado"; out.textContent = "Preencha os campos para estimar o clearance."; return; }
        let v = ((140 - a) * p) / (72 * c);
        if (sexo.value === "f") v *= 0.85;
        const cls = v >= 60 ? "baixo" : v >= 30 ? "medio" : "alto";
        out.className = "resultado " + cls;
        out.innerHTML = `<span class="grande">${fmt(v)} mL/min</span><br>Use a faixa correspondente na coluna “Insuficiência renal” da tabela abaixo (ex.: 30-50, 10-30, &lt;10).`;
      };
      el.addEventListener("input", upd); el.addEventListener("change", upd); upd();
    });

    $$("[data-filtro]", raiz).forEach((inp) => {
      const tab = document.getElementById(inp.dataset.filtro);
      inp.addEventListener("input", () => {
        const q = norm(inp.value.trim());
        $$("tbody tr", tab).forEach((tr) => tr.classList.toggle("oculto", !!q && !norm(tr.textContent).includes(q)));
      });
    });
  }

  /* ---------- busca ---------- */
  let indice = null;
  function montarIndice() {
    indice = [];
    for (const g of GUIAS) for (const t of topicosDe(g)) {
      const partes = [t.titulo, t.resumo];
      for (const s of t.secoes) {
        partes.push(s.titulo || "", s.html || "", s.intro || "", s.nota || "", s.sim || "", s.nao || "");
        (s.itens || []).forEach((x) => partes.push(x));
        (s.grupos || []).forEach((gr) => { partes.push(gr.nome); gr.itens.forEach((it) => partes.push(it.f, it.a || "", it.c || "")); });
        (s.rows || []).forEach((r) => r.forEach((c) => partes.push(typeof c === "string" ? c : c.grupo)));
        (s.passos || []).forEach((p) => partes.push(p.pergunta, ...(p.itens || []), p.sim ? p.sim.html : "", p.nao ? p.nao.html : ""));
        (s.criterios || []).forEach((c) => partes.push(c.nome, ...c.itens));
        if (s.a && s.a.passos) partes.push(...s.a.passos, ...s.b.passos);
      }
      const texto = textoPuro(partes.join(" · "));
      indice.push({ g, t, texto, ntexto: norm(texto), ntitulo: norm(t.titulo + " " + t.resumo) });
    }
  }

  function buscar(q) {
    if (!indice) montarIndice();
    const termos = norm(q).split(/\s+/).filter((x) => x.length > 1);
    if (!termos.length) return [];
    return indice
      .filter((e) => termos.every((x) => e.ntexto.includes(x) || e.ntitulo.includes(x)))
      .map((e) => {
        let score = 0;
        termos.forEach((x) => { if (norm(e.t.titulo).includes(x)) score += 10; if (e.ntitulo.includes(x)) score += 3; score += Math.min(5, e.ntexto.split(x).length - 1); });
        return { ...e, score };
      })
      .sort((a, b) => b.score - a.score);
  }

  function trecho(e, termos) {
    const pos = Math.max(0, e.ntexto.indexOf(termos[0]));
    const ini = Math.max(0, pos - 60), fim = Math.min(e.texto.length, pos + 110);
    let s = esc((ini > 0 ? "…" : "") + e.texto.slice(ini, fim) + (fim < e.texto.length ? "…" : ""));
    termos.forEach((x) => { s = destacarSemAcento(s, x); });
    return s;
  }
  // Marca o termo ignorando acentos; só mexe no texto fora de tags.
  // (norm() preserva o comprimento para caracteres latinos pré-compostos, então os índices batem.)
  function destacarSemAcento(html, termo) {
    return html.replace(/(^|>)([^<]+)/g, (m, a, txt) => {
      const n = norm(txt);
      const t = norm(termo);
      let out = "", i = 0, k;
      while ((k = n.indexOf(t, i)) !== -1) { out += txt.slice(i, k) + "<mark>" + txt.slice(k, k + t.length) + "</mark>"; i = k + t.length; }
      return a + out + txt.slice(i);
    });
  }

  const busca = $("#busca"), bInput = $("#busca-input"), bRes = $("#busca-resultados");
  let sel = 0;
  function abrirBusca() {
    busca.hidden = false;
    bInput.value = "";
    desenharResultados();
    setTimeout(() => bInput.focus(), 10);
  }
  function fecharBusca() { busca.hidden = true; }
  function desenharResultados() {
    const q = bInput.value.trim();
    if (!q) {
      bRes.innerHTML = `<div class="busca-vazio">Digite um diagnóstico, medicamento ou tópico.<br><small>Ex.: “sífilis”, “amoxicilina”, “gestante”, “raiva”.</small></div>`;
      return;
    }
    const termos = norm(q).split(/\s+/).filter((x) => x.length > 1);
    const res = buscar(q).slice(0, 30);
    sel = 0;
    bRes.innerHTML = res.length
      ? res.map((e, k) => `<a class="res ${k === 0 ? "sel" : ""}" href="#/${e.g.id}/${e.t.id}?q=${encodeURIComponent(q)}"><span class="onde">${esc(e.g.sigla)} · ${esc(grupoDe(e.g, e.t.grupo).nome)}</span><strong>${destacarSemAcento(esc(e.t.titulo), termos[0] || "")}</strong><span class="trecho">${trecho(e, termos)}</span></a>`).join("")
      : `<div class="busca-vazio">Nenhum resultado para “${esc(q)}”.</div>`;
  }
  bInput.addEventListener("input", desenharResultados);
  bInput.addEventListener("keydown", (e) => {
    const itens = $$(".res", bRes);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (!itens.length) return;
      itens[sel].classList.remove("sel");
      sel = (sel + (e.key === "ArrowDown" ? 1 : itens.length - 1)) % itens.length;
      itens[sel].classList.add("sel");
      itens[sel].scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter" && itens[sel]) { location.hash = itens[sel].getAttribute("href"); fecharBusca(); }
  });
  bRes.addEventListener("click", (e) => { if (e.target.closest(".res")) fecharBusca(); });
  $("#busca-fechar").addEventListener("click", fecharBusca);
  busca.addEventListener("click", (e) => { if (e.target === busca) fecharBusca(); });
  $("#btn-busca").addEventListener("click", abrirBusca);
  document.addEventListener("click", (e) => { if (e.target.closest("[data-abrir-busca]")) abrirBusca(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !busca.hidden) fecharBusca();
    const digitando = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if (!digitando && (e.key === "/" || (e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey)))) { e.preventDefault(); abrirBusca(); }
  });

  // destaca o termo buscado dentro do tópico e rola até a primeira ocorrência
  function destacar(q) {
    const termos = norm(q).split(/\s+/).filter((x) => x.length > 1);
    if (!termos.length) return;
    const art = $("article", app);
    const walker = document.createTreeWalker(art, NodeFilter.SHOW_TEXT, { acceptNode: (n) => n.parentElement.closest("script,style,input,select,.navsec,.topico-cab h1") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
    const nos = [];
    while (walker.nextNode()) nos.push(walker.currentNode);
    let primeiro = null;
    for (const no of nos) {
      const n = norm(no.nodeValue);
      const achados = [];
      termos.forEach((t) => { let i = 0, k; while ((k = n.indexOf(t, i)) !== -1) { achados.push([k, k + t.length]); i = k + t.length; } });
      if (!achados.length) continue;
      achados.sort((a, b) => a[0] - b[0]);
      const frag = document.createDocumentFragment();
      let pos = 0;
      for (const [a, b] of achados) {
        if (a < pos) continue;
        frag.append(no.nodeValue.slice(pos, a));
        const m = document.createElement("mark");
        m.className = "destaque";
        m.textContent = no.nodeValue.slice(a, b);
        frag.append(m);
        primeiro = primeiro || m;
        pos = b;
      }
      frag.append(no.nodeValue.slice(pos));
      no.replaceWith(frag);
    }
    if (primeiro) setTimeout(() => primeiro.scrollIntoView({ behavior: "smooth", block: "center" }), 60);
  }

  /* ---------- PWA ---------- */
  let promptInstalar = null;
  window.addEventListener("beforeinstallprompt", (e) => { e.preventDefault(); promptInstalar = e; $("#btn-instalar").hidden = false; });
  $("#btn-instalar").addEventListener("click", async () => {
    if (!promptInstalar) return;
    promptInstalar.prompt();
    await promptInstalar.userChoice;
    promptInstalar = null;
    $("#btn-instalar").hidden = true;
  });
  const statusRede = () => { $("#status-offline").hidden = navigator.onLine; };
  window.addEventListener("online", statusRede);
  window.addEventListener("offline", statusRede);
  statusRede();

  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    navigator.serviceWorker.register("sw.js").then((reg) => {
      reg.addEventListener("updatefound", () => {
        const nw = reg.installing;
        nw && nw.addEventListener("statechange", () => {
          if (nw.state === "installed" && navigator.serviceWorker.controller) {
            $("#rodape-versao").innerHTML = 'Nova versão disponível — <a href="#" id="recarregar">atualizar agora</a>.';
            $("#recarregar").addEventListener("click", (e) => { e.preventDefault(); location.reload(); });
          }
        });
      });
    }).catch(() => {});
    navigator.serviceWorker.addEventListener("message", (e) => {
      if (e.data && e.data.versao) $("#rodape-versao").textContent = "Versão " + e.data.versao + " · disponível offline";
    });
    navigator.serviceWorker.ready.then((r) => r.active && r.active.postMessage("versao"));
  }

  /* ---------- início ---------- */
  window.addEventListener("hashchange", () => { render(); if (!rotaAtual().q) window.scrollTo(0, 0); });
  carregarGuias()
    .then(() => { render(); })
    .catch((err) => { app.innerHTML = `<div class="card bloco"><h2>Não foi possível carregar o conteúdo</h2><p>${esc(err.message)}</p><p>Conecte-se à internet uma vez para baixar os guias.</p></div>`; });
})();
