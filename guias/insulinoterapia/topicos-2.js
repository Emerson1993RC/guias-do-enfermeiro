/* Guia: Insulinoterapia na APS — Ministério da Saúde · CONASEMS, 2026.
   Tópicos 12–16: "Panorama das insulinas no SUS" (Módulo 1, caderno 2). */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).insulinoterapia = (window.GUIA_TOPICOS.insulinoterapia || []).concat([
{
  id: "tipos-insulina", num: "12", titulo: "Tipos de insulina: humanas e análogas", grupo: "insulinas", pag: 68,
  fonte: "Panorama das insulinas no SUS (MS/CONASEMS, 2026)",
  resumo: "Regular (curta, límpida), NPH (intermediária, turva), análogas rápidas (5–15 min) e prolongadas (sem pico).",
  secoes: [
    { t: "tabela", titulo: "Classificação", head: ["Insulina", "Origem", "Ação", "Características para a prática"], rows: [
      ["<b>Regular</b>", "Humana", "Curta", "Solução <b>límpida</b>. Início em 30–60 min (hexâmeros precisam se dissociar). Cobertura prandial: aplicar ~30 min antes da refeição."],
      ["<b>NPH</b>", "Humana", "Intermediária", "Suspensão <b>turva</b> (protamina + zinco). Início em 2–4 h, pico pronunciado (maior risco de hipoglicemia) e absorção variável. <b>Homogeneizar</b> rolando frasco/caneta ~20 vezes. Nunca por via intravenosa."],
      ["<b>Asparte, lispro, glulisina</b>", "Análogas", "Rápida", "Início em 5–15 min; maior previsibilidade e flexibilidade em relação à refeição."],
      ["<b>Glargina (100 e 300 UI), detemir, degludeca</b>", "Análogas", "Prolongada", "Cobertura basal estável, <b>sem pico</b>, por até 24 h ou mais; menor risco de hipoglicemia grave/noturna. Glargina é <b>límpida</b>."]
    ]},
    { t: "box", v: "alerta", titulo: "Erros a evitar", html:
      "<ul><li><b>Não confundir as insulinas límpidas</b>: regular (ação curta, prandial) × glargina/degludeca (basais). Nunca usar insulina basal para corrigir hiperglicemia pós-prandial aguda;</li>" +
      "<li>As análogas de ação prolongada (especialmente a glargina, pH ácido) <b>não devem ser misturadas</b> na mesma seringa com outras insulinas;</li>" +
      "<li>NPH mal homogeneizada → dose com concentração errada → hiper ou hipoglicemias inesperadas.</li></ul>" },
    { t: "box", v: "info", titulo: "Na prática", html: "<p>Uma mesma insulina tem duas classificações complementares: a NPH é humana e de ação intermediária; a glargina é análoga e de ação prolongada. A absorção também depende de temperatura, fluxo sanguíneo local e atividade física. Conhecer o perfil de ação orienta horários, relação com as refeições e prevenção de hipoglicemia.</p>" }
  ]
},
{
  id: "apresentacoes", num: "13", titulo: "Apresentações e insumos", grupo: "insulinas", pag: 87,
  fonte: "Panorama das insulinas no SUS (MS/CONASEMS, 2026)",
  resumo: "Frasco 10 mL U-100, tubete 3 mL para caneta reutilizável, caneta descartável, seringas, agulhas de 4 mm, lancetas, tiras e glicosímetro.",
  secoes: [
    { t: "tabela", titulo: "Apresentações", head: ["Apresentação", "Características", "Atenção"], rows: [
      ["<b>Frasco</b> 10 mL, 100 UI/mL", "Aspiração com seringa. Menor custo; uso institucional (hospitais, UPA).", "Exige destreza e visão; validade limitada após aberto (geralmente 4 a 6 semanas, conforme o fabricante)."],
      ["<b>Tubete (carpule/refil)</b> 3 mL = 300 UI", "Inserido em <b>caneta reutilizável</b> (dura anos; seletor de 1 em 1 unidade).", "Conferir compatibilidade refil × caneta do mesmo fabricante."],
      ["<b>Caneta descartável pré-preenchida</b> 3 mL", "Medicamento e dispositivo num sistema único.", "Descartar ao acabar a insulina ou ao fim do prazo de uso, mesmo que reste insulina."]
    ]},
    { t: "lista", titulo: "Insumos (Rename; aquisição descentralizada)", itens: [
      "<b>Seringas</b> de 0,3 mL (30 UI), 0,5 mL (50 UI) e 1 mL (100 UI), marcadas em UI; SBD recomenda agulha fixa e curta (≤ 6 mm);",
      "<b>Agulhas para caneta</b>: o SUS disponibiliza agulhas de <b>4 mm</b> (mais seguras e menos dolorosas);",
      "<b>Lancetas</b> estéreis de uso único;",
      "<b>Tiras reagentes</b> compatíveis com o glicosímetro;",
      "<b>Glicosímetros</b>."
    ]},
    { t: "box", v: "alerta", titulo: "Uso seguro", html: "<p>Conferir tipo, concentração e apresentação; verificar compatibilidade entre carpule e caneta; <b>não usar dispositivos de fabricantes diferentes de forma intercambiável</b>; insulina de frasco só com seringa apropriada; conferir rótulo, validade e conservação. Diferencie o medicamento da apresentação: trocar frasco por tubete não troca a insulina.</p>" }
  ]
},
{
  id: "acesso-sus", num: "14", titulo: "Acesso às insulinas no SUS", grupo: "insulinas", pag: 106,
  fonte: "Panorama das insulinas no SUS (MS/CONASEMS, 2026)",
  resumo: "UBS (Componente Básico), Farmácia de Medicamentos Especializados (CEAF, DM1) e Farmácia Popular: o que cada um fornece e quais documentos levar.",
  secoes: [
    { t: "tabela", titulo: "Onde a pessoa retira", head: ["Componente", "O que fornece para diabetes", "Onde e como"], rows: [
      ["<b>Componente Básico (CBAF)</b>", "Metformina, glibenclamida, gliclazida; insulinas humanas NPH e regular (frasco e caneta); <b>glargina</b> para DM1 e DM2 conforme a Nota Técnica Conjunta nº 169/2026 e PCDT; tiras, lancetas, seringas, agulhas e canetas.", "Farmácia da UBS. Levar <b>receita</b> e <b>documento com foto ou Cartão SUS</b> (confirmar exigências do município)."],
      ["<b>Componente Especializado (CEAF)</b>", "DM1: análogas de ação rápida (asparte, glulisina, lispro) e prolongada (glargina, detemir), conforme PCDT.", "Farmácia de Medicamentos Especializados do estado, após autorização."],
      ["<b>Farmácia Popular (PFPB)</b>", "Metformina 500 mg (inclusive de ação prolongada) e 850 mg, glibenclamida 5 mg, insulinas humanas regular e NPH; dapagliflozina 10 mg (diabetes + doença cardiovascular).", "Farmácia credenciada: <b>documento com foto e CPF</b> + <b>receita válida (180 dias)</b>, do SUS ou particular."],
      ["Componente Estratégico (CESAF)", "Nenhum medicamento ou insumo para diabetes.", "—"]
    ]},
    { t: "fluxo", titulo: "Como solicitar no CEAF (ex.: DM1 com indicação de glargina + asparte)", passos: [
      { pergunta: "1ª etapa — Consulta médica", sim: { tipo: "atb", html: "Sair com <b>LME</b> (Laudo de Solicitação, Avaliação e Autorização de Medicamentos) e <b>prescrição</b> preenchidos + documentos/exames exigidos pelo PCDT." } },
      { pergunta: "2ª etapa — Solicitação", sim: { tipo: "atb", html: "Na farmácia de referência indicada pela SES ou por plataforma digital, com cópias do <b>Cartão SUS, documento de identidade e comprovante de residência</b>." } },
      { pergunta: "3ª etapa — Avaliação e autorização", sim: { tipo: "talvez", html: "Análise técnica conforme o PCDT; a secretaria autoriza ou não a dispensação." } },
      { pergunta: "4ª etapa — Dispensação", sim: { tipo: "atb", html: "Retirar com LME, prescrição, CNS, identidade e comprovante de residência. Se a solicitação foi eletrônica sem assinatura qualificada, levar LME e prescrição em papel na 1ª dispensação. Renovação periódica." } }
    ]},
    { t: "box", v: "info", titulo: "Vínculo com a UBS", html: "<p>Mesmo retirando no CEAF, a pessoa permanece vinculada à UBS para acompanhamento multiprofissional, prevenção de complicações e renovação dos itens do CBAF. A operacionalização pode variar entre os estados.</p>" }
  ]
},
{
  id: "transicao-glargina", num: "15", titulo: "Transição da NPH para a glargina na APS", grupo: "insulinas", pag: 117,
  fonte: "Panorama das insulinas no SUS e Implementação da insulinoterapia na APS (MS/CONASEMS, 2026), conforme Nota Técnica Conjunta nº 169/2026",
  resumo: "Migração gradual no Componente Básico: crianças e adolescentes com DM1 e pessoas idosas primeiro. Conversão 1:1 ou −20%.",
  secoes: [
    { t: "box", v: "diag", titulo: "Quem entra primeiro", html:
      "<ul><li><b>Etapa inicial da estratégia nacional</b> (Nota Técnica Conjunta nº 169/2026): crianças e adolescentes de <b>2 a menos de 18 anos com DM1</b> e pessoas com <b>70 anos ou mais</b> com DM1 ou DM2, conforme a organização da oferta local;</li>" +
      "<li><b>Projeto-piloto 2026</b> (Amapá, Distrito Federal, Paraíba e Paraná): 2 a &lt; 18 anos com DM1 e pessoas de <b>80 anos ou mais</b> com DM1 ou DM2.</li></ul>" +
      "<p>Confirme sempre a elegibilidade pelo fluxo local. Não se aplica a quem já recebe glargina pelo CEAF.</p>" },
    { t: "box", v: "trat", titulo: "Como converter", html:
      "<ul><li>NPH <b>1 vez ao dia</b> → glargina na mesma dose (<b>1:1</b>);</li><li>NPH <b>2 ou mais vezes ao dia</b> → glargina com <b>~20% a menos</b> da dose total diária, em dose única, de preferência no horário da maior dose anterior de NPH;</li><li>Ajuste individualizado pela glicemia de jejum; titulação em intervalos de até 3 dias.</li></ul>" +
      "<p>A troca da basal <b>não troca a insulina prandial</b>: quem usa NPH + regular passa a usar <b>glargina + regular</b>. Use a <a href=\"#/insulinoterapia/calc-insulina\">calculadora</a>.</p>" },
    { t: "lista", titulo: "Cuidados na transição", itens: [
      "Transição gradual, com avaliação clínica individualizada e acompanhamento longitudinal;",
      "Orientar <b>horário fixo</b> de aplicação da glargina;",
      "Monitoramento mais próximo nas <b>semanas iniciais</b>, com avaliação cuidadosa de hipoglicemias;",
      "Na entrega da caneta reutilizável, o farmacêutico formaliza o Termo de Recebimento e Orientação e verifica a integridade do dispositivo e dos carpules;",
      "Garantir que toda a equipe entenda o componente basal × prandial, para não gerar orientações conflitantes."
    ]}
  ]
},
{
  id: "marcos-sus", num: "16", titulo: "Marcos da insulinoterapia no SUS", grupo: "insulinas", pag: 27,
  fonte: "Panorama das insulinas no SUS (MS/CONASEMS, 2026)",
  resumo: "Da Lei 11.347/2006 (insulina e insumos gratuitos) às canetas, análogas no DM2 (2024) e migração para glargina (2026).",
  secoes: [
    { t: "tabela", titulo: "Linha do tempo", head: ["Ano", "Marco"], rows: [
      ["2004", "Criação do Programa Farmácia Popular do Brasil (insulinas NPH e regular)."],
      ["2006", "<b>Lei nº 11.347</b>: distribuição gratuita de insulina e insumos para aplicação e monitoração da glicemia (seringas, agulhas, tiras)."],
      ["2007", "Portaria GM/MS nº 2.583: direito a seringas, tiras reagentes, lancetas, glicosímetros e lancetadores para quem usa insulina."],
      ["2011", "Criação da CONITEC; gratuidade no PFPB (Saúde Não Tem Preço)."],
      ["2013", "Aquisição centralizada pelo Ministério da Saúde das insulinas NPH e regular."],
      ["2017", "Incorporação das canetas de NPH e regular; análogas de ação rápida para DM1 no CEAF."],
      ["2019", "Início da substituição gradual de frascos por canetas (prioridade: até 19 anos e 45 anos ou mais). Hoje: 70% canetas e 30% frascos."],
      ["2021–2022", "Notas Técnicas nº 84/2021 e 169/2022: critérios de acesso a canetas e agulhas de 4 mm."],
      ["2024", "Análogas de ação rápida e prolongada incorporadas para DM2 (Portarias SECTICS/MS nº 58 e 59/2024)."],
      ["2025", "Análogas na aquisição centralizada (Portaria GM/MS nº 6.685); GT Insulina (Portaria GM/MS nº 8.171)."],
      ["2026", "Projeto-piloto de substituição da NPH pela glargina na APS; Nota Técnica Conjunta nº 169/2026."]
    ]}
  ]
}
]);
