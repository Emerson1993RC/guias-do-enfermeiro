/* Guia: Insulinoterapia na APS — Ministério da Saúde · CONASEMS, 2026.
   Tópicos 01–11: "Introdução ao diabetes mellitus" (Módulo 1, caderno 1).
   `fonte` + `pag` = caderno de origem e página impressa. */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).insulinoterapia = (window.GUIA_TOPICOS.insulinoterapia || []).concat([
{
  id: "dm-conceitos", num: "01", titulo: "DM1, DM2 e LADA: o que diferencia", grupo: "diabetes", pag: 17,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026)",
  resumo: "DM1: deficiência absoluta de insulina, insulina obrigatória. DM2: resistência à insulina e perda progressiva da secreção. LADA: autoimune do adulto.",
  secoes: [
    { t: "tabela", titulo: "Características", head: ["Tipo", "O que acontece", "Tratamento"], rows: [
      ["<b>DM1</b> (~5% dos casos)", "Destruição autoimune das células beta (anticorpos anti-ICA, IAA, anti-GAD, anti-IA2). Maior incidência entre 10 e 14 anos, mas pode surgir em qualquer idade. Tendência à hiperglicemia grave e cetoacidose.", "Insulina <b>obrigatória</b>: basal (NPH ou análoga de ação prolongada) + bolus (regular ou análoga de ação rápida)."],
      ["<b>DM2</b> (~95% dos casos)", "Resistência à insulina + perda progressiva da secreção, com alteração das incretinas. Evolução lenta, frequentemente assintomática.", "Mudança de modo de vida + antidiabéticos orais; insulina (NPH e regular) quando as metas não são alcançadas."],
      ["<b>LADA</b> (diabetes autoimune latente do adulto)", "Destruição autoimune das células beta no adulto, de avanço lento; pode ser confundido com DM2.", "Momento de iniciar insulina individualizado. Na suspeita: peptídeo C + ao menos um marcador de autoimunidade."]
    ]},
    { t: "lista", titulo: "Fatores de risco para DM2", itens: [
      "Sobrepeso e obesidade;", "Sedentarismo;", "Idade igual ou superior a 35 anos;",
      "Histórico familiar de diabetes em parentes de primeiro grau;", "Hipertensão arterial;",
      "Uso de antipsicóticos atípicos (clozapina, olanzapina, quetiapina, risperidona)."
    ]},
    { t: "box", v: "alerta", titulo: "Reavaliar o diagnóstico de DM2 quando", html: "<p>Há piora rápida e deterioração das células beta: muitos desses casos são DM1. Solicitar <b>autoanticorpos e peptídeo C</b>. Lembre: na infância e adolescência a maioria é DM1; no adulto, costuma ser DM2.</p>" },
    { t: "box", v: "info", titulo: "Complicações", html: "<p><b>Agudas:</b> hipoglicemia, descompensação hiperglicêmica (cetoacidose, estado hiperosmolar). <b>Crônicas:</b> retinopatia, neuropatia, doença renal, infarto e AVC. O controle glicêmico adequado é essencial para evitá-las.</p>" }
  ]
},
{
  id: "rastreamento-dm2", num: "02", titulo: "Rastreamento e diagnóstico do DM2", grupo: "diabetes", pag: 41,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026), conforme PCDT do DM2",
  resumo: "Rastrear a partir dos 35 anos ou com sobrepeso + fator de risco. Glicemia de jejum ≥ 126, HbA1c ≥ 6,5% ou TTGO-1h ≥ 209 mg/dL.",
  secoes: [
    { t: "box", v: "diag", titulo: "Quem rastrear", html:
      "<ul><li>Pessoas <b>a partir dos 35 anos</b>;</li><li>Qualquer idade com <b>sobrepeso ou obesidade + um ou mais fatores de risco</b>;</li><li>Condições associadas à resistência insulínica (obesidade grave, acantose nigricans);</li><li>Pessoas sintomáticas;</li><li>Também: pessoas vivendo com HIV/aids, fibrose cística (usar TTGO) e transplantados.</li></ul>" +
      "<p><b>Fatores de risco:</b> parente de 1º grau com diabetes; doença cardiovascular; sedentarismo; dislipidemia (HDL &lt; 35 ou triglicerídeos &gt; 250 mg/dL); SOP; acantose nigricans; doença hepática esteatótica; hipertensão; pré-diabetes prévio; diabetes gestacional ou bebê &gt; 4 kg; antipsicóticos; apneia do sono; privação crônica do sono; trabalho noturno.</p>" },
    { t: "fluxo", titulo: "Fluxograma de rastreamento e diagnóstico (Figura 1)", passos: [
      { pergunta: "Apresenta sinais e sintomas clínicos de hiperglicemia? (poliúria, polidipsia, perda de peso, noctúria, polifagia)",
        sim: { tipo: "alerta", html: "Solicitar glicemia aleatória, glicemia de jejum ou HbA1c. <b>Glicemia aleatória ≥ 200 mg/dL ou jejum ≥ 126 mg/dL e/ou HbA1c ≥ 6,5% → DM2 confirmado.</b> Se não: solicitar <b>TTGO-1h</b> (≥ 209 confirma; 155–208 pré-diabetes; &lt; 155 excluído)." },
        nao: { tipo: "talvez", html: "Solicitar <b>glicemia de jejum e/ou HbA1c</b> (conforme disponibilidade local)." } },
      { pergunta: "Assintomático: glicemia de jejum ≥ 126 mg/dL <b>e</b> HbA1c ≥ 6,5%?",
        sim: { tipo: "atb", html: "Ambos alterados → <b>diagnóstico de DM2</b>. Se apenas um alterado: confirmar com glicemia de jejum, HbA1c ou TTGO-1h (≥ 126 / ≥ 6,5% / ≥ 209 mg/dL)." },
        nao: { tipo: "nao-atb", html: "Diagnóstico excluído → monitorar e rastrear conforme a periodicidade." } }
    ], nota: "Na ausência de hiperglicemia inequívoca, são necessários dois resultados alterados. Hiperglicemia em estresse agudo (infecção, trauma) não serve para diagnóstico: reavaliar fora do quadro agudo." },
    { t: "tabela", titulo: "Quadro 1 — Critérios diagnósticos (≥ 18 anos)", head: ["Critério", "Normal", "Pré-diabetes", "DM2"], rows: [
      ["Glicemia plasmática de jejum (mg/dL)*", "&lt; 100", "100–125", "≥ 126"],
      ["Glicemia aleatória + sintomas (mg/dL)", "–", "–", "≥ 200"],
      ["Glicemia de 1 h no TTGO (mg/dL)**", "&lt; 155", "155–208", "≥ 209"],
      ["Glicemia de 2 h no TTGO (mg/dL)**", "&lt; 140", "140–199", "≥ 200"],
      ["HbA1c (%)", "&lt; 5,7", "5,7–6,4", "≥ 6,5"]
    ], nota: "*Jejum de 8 a 12 horas. **75 g de glicose anidra diluída em água. HbA1c para diagnóstico só com método certificado (NGSP)." },
    { t: "tabela", titulo: "Periodicidade", head: ["Situação", "Conduta"], rows: [
      ["Glicemia de jejum normal", "Repetir rastreamento a cada <b>3 anos</b>"],
      ["Pré-diabetes (jejum 100–125 mg/dL)", "Orientar mudança no modo de vida e reavaliar <b>anualmente</b>; considerar medicamentos para prevenção"],
      ["Três ou mais fatores de risco, exames normais", "Reavaliar <b>anualmente</b>"],
      ["Gestação", "Protocolo próprio: glicemia desde a 1ª consulta de pré-natal e investigação de diabetes gestacional entre 24 e 28 semanas"]
    ]},
    { t: "box", v: "alerta", titulo: "DM2 em crianças e adolescentes", html: "<p>Suspeitar em jovens com sobrepeso (IMC ≥ percentil 85) ou obesidade com ao menos um fator: diabetes materno, DM2 em parente de 1º/2º grau, acantose nigricans, HAS/dislipidemia/SOP, baixo peso ao nascer, hiperglicemia em exame de rotina (≥ 10 anos ou após a puberdade). Mesmos valores de referência do adulto. Na dúvida, especialmente em adolescentes, encaminhar ao endocrinologista.</p>" }
  ]
},
{
  id: "diagnostico-dm1", num: "03", titulo: "Diagnóstico do DM1 e sinais de alerta", grupo: "diabetes", pag: 47,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026)",
  resumo: "Glicemia aleatória ≥ 200 mg/dL + sintomas clássicos. Risco de cetoacidose: iniciar insulina imediatamente.",
  secoes: [
    { t: "box", v: "diag", titulo: "Como confirmar", html: "<p><b>Glicemia aleatória ≥ 200 mg/dL + sintomas clássicos de hiperglicemia</b> (poliúria, polidipsia, polifagia, noctúria, perda de peso inexplicada). Glicemia de jejum, TTGO e HbA1c podem ser usados em quem não tem sintomas (o TTGO pode trazer risco quando a glicemia já está elevada).</p>" },
    { t: "box", v: "alerta", titulo: "Cetoacidose diabética (CAD)", html: "<p>Pode evoluir rapidamente com cetose, desidratação e acidose metabólica: <b>náusea, vômitos, sonolência, torpor e coma</b>, especialmente com infecção ou estresse agudo. Nessas situações, <b>não há dúvida: a insulina deve ser iniciada imediatamente</b>. Conforme a gravidade, encaminhar ao serviço de emergência pelos fluxos de regulação locais.</p>" },
    { t: "box", v: "info", titulo: "LADA", html: "<p>Adultos podem apresentar quadro semelhante ao DM1 com CAD. Na suspeita, dosar <b>peptídeo C</b> e pesquisar ao menos um marcador de autoimunidade (anti-ICA, anti-IAA ou outros disponíveis).</p>" }
  ]
},
{
  id: "metas-glicemicas", num: "04", titulo: "Metas glicêmicas", grupo: "diabetes", pag: 114,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026), conforme PCDT do DM2 (2026) e SBD",
  resumo: "HbA1c < 7% para a maioria; idoso comprometido < 7,5%; muito comprometido < 8%. Jejum 80–130 mg/dL e 2 h pós-prandial < 180.",
  secoes: [
    { t: "tabela", titulo: "Quadro 5 — Metas no tratamento do DM2 (PCDT)", head: ["Exame", "Pessoa com DM2", "Idoso saudável", "Idoso comprometido", "Idoso muito comprometido", "Criança e adolescente"], rows: [
      ["HbA1c (%)", "&lt; 7,0", "&lt; 7,0", "&lt; 7,5", "&lt; 8,0", "Evitar sintomas de hiper ou hipoglicemia"],
      ["Glicemia de jejum (mg/dL)", "80–130", "80–130", "90–150", "100–180", "70–130"],
      ["Glicemia 2 h pós-prandial (mg/dL)", "&lt; 180", "&lt; 180", "&lt; 180", "—", "&lt; 180"],
      ["Glicemia ao deitar (mg/dL)", "90–150", "90–150", "100–180", "110–200", "90–150"]
    ], nota: "Idoso saudável: poucas comorbidades, funções cognitiva e funcional preservadas. Comprometido: múltiplas comorbidades, comprometimento funcional leve a moderado, cognitivo moderado. Muito comprometido: doença terminal (câncer metastático, insuficiência cardíaca NYHA IV, pneumopatia em oxigenoterapia, diálise), comprometimento funcional e cognitivo grave." },
    { t: "tabela", titulo: "Quadro 3 — Tempo no alvo (SBD), quando há monitorização contínua", head: ["Parâmetro", "DM1 ou DM2", "Idoso saudável", "Idoso comprometido", "Idoso muito comprometido", "Criança e adolescente"], rows: [
      ["TIR 70–180 mg/dL", "&gt; 70%", "&gt; 70%", "&gt; 50%", "–", "&gt; 70%"],
      ["Tempo &lt; 70 mg/dL", "&lt; 4%", "&lt; 4%", "&lt; 1%", "0", "&lt; 4%"],
      ["Tempo &lt; 54 mg/dL", "&lt; 1%", "&lt; 1%", "0", "0", "&lt; 1%"]
    ]},
    { t: "box", v: "info", titulo: "Por que importa", html: "<p>HbA1c &lt; 7% reduz complicações microvasculares (UKPDS, ADVANCE). Cada 1% de redução da HbA1c: −14% no risco de infarto e −12% no de AVC. O benefício é maior quando o controle começa cedo, sobretudo no 1º ano após o diagnóstico: combater a inércia terapêutica.</p><p>Em idosos (≥ 60 anos), HbA1c entre 7,5% e 8,0% é aceitável conforme expectativa de vida e comorbidades; metas agressivas são desencorajadas nos vulneráveis.</p>" }
  ]
},
{
  id: "tratamento-dm2", num: "05", titulo: "Tratamento do DM2: fluxograma e antidiabéticos", grupo: "diabetes", pag: 69,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026), conforme PCDT do DM2 (2026)",
  resumo: "Metformina primeiro; depois sulfonilureia; dapagliflozina se critérios; insulina (preferir NPH) se não atingir a meta.",
  secoes: [
    { t: "fluxo", titulo: "Fluxograma do tratamento do DM2 (Figura 3)", passos: [
      { pergunta: "Diagnóstico há menos de 3 meses e sem fator de risco?",
        sim: { tipo: "talvez", html: "<b>Somente mudança de modo de vida</b> (peso, alimentação, atividade física); avaliar resposta em 3 meses. Sem resposta → metformina." },
        nao: { tipo: "atb", html: "Diagnóstico há 3 meses ou mais, ou com fator de risco → <b>metformina + mudança de modo de vida</b> desde o início." } },
      { pergunta: "Atingiu a meta e tolerou a metformina? (avaliar em 3 a 6 meses)",
        sim: { tipo: "nao-atb", html: "Manter e monitorar." },
        nao: { tipo: "atb", html: "<b>Adicionar sulfonilureia</b> (glibenclamida ou gliclazida)." } },
      { pergunta: "Atingiu a meta e tolerou a sulfonilureia?",
        sim: { tipo: "nao-atb", html: "Manter e monitorar." },
        nao: { tipo: "atb", html: "Tem critérios para dapagliflozina? <b>Sim → adicionar dapagliflozina. Não → insulinoterapia.</b>" } },
      { pergunta: "Atingiu a meta e tolerou a dapagliflozina?",
        sim: { tipo: "nao-atb", html: "Manter e monitorar." },
        nao: { tipo: "alerta", html: "<b>Insulinoterapia</b> — iniciar preferencialmente com insulina NPH." } }
    ], nota: "Hiperglicemia grave (HbA1c &gt; 9% ou jejum ≥ 300 mg/dL), sintomas de hiperglicemia aguda ou intercorrências: considerar insulina já. HbA1c &gt; 7,5% ao diagnóstico: considerar terapia combinada. <b>Dapagliflozina:</b> ≥ 40 anos com doença cardiovascular estabelecida, ou homens ≥ 55 e mulheres ≥ 60 anos com alto risco cardiovascular. Metas individualizadas conforme idade, comorbidades e risco de hipoglicemia." },
    { t: "tabela", titulo: "Quadro 4 — Medicamentos do SUS para DM2 (PCDT 2026)", head: ["Medicamento", "Dose habitual", "Dose máxima", "Frequência"], rows: [
      ["<b>Metformina</b> (biguanida)", "500 mg ou 850 mg", "2.550 mg/dia", "2 a 3 vezes ao dia"],
      ["<b>Glibenclamida</b> (sulfonilureia)", "5 mg", "20 mg/dia", "1 a 2 vezes ao dia"],
      ["<b>Gliclazida</b> (sulfonilureia)", "30 mg ou 60 mg", "120 mg/dia", "1 vez ao dia"],
      ["<b>Dapagliflozina</b> (iSGLT2)", "10 mg", "10 mg/dia", "1 vez ao dia"],
      ["<b>Insulina NPH</b>", "Inicial 0,1–0,2 UI/kg/dia (ajustar 2 UI a cada 3 dias até a meta de jejum; manutenção 0,3–0,5 UI/kg). Obesidade com resistência importante: 0,5–0,75 UI/kg/dia", "0,5 UI/kg/dia (0,75 UI/kg/dia na obesidade com resistência importante)", "1 a 2 vezes ao dia (ajuste a cada 3 dias)"],
      ["<b>Insulina análoga de ação prolongada</b>", "Inicial 0,1–0,2 UI/kg/dia (mesmo ajuste da NPH). Obesidade com resistência importante: 0,5–0,75 UI/kg/dia", "0,5 UI/kg/dia (0,75 UI/kg/dia na obesidade com resistência importante)", "1 vez ao dia"],
      ["<b>Insulina regular / análoga de ação rápida</b>", "Inicial 3–4 UI, titular pela glicemia pós-prandial (+1 UI, 2 vezes/semana)", "&gt; 50% da dose total diária", "Antes das refeições"]
    ]}
  ]
},
{
  id: "insulina-dm2", num: "06", titulo: "Insulinização no DM2: início e titulação", grupo: "diabetes", pag: 101,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026), conforme PCDT do DM2 (2026)",
  resumo: "NPH à noite: 10 UI ou 0,1–0,2 UI/kg, +2 UI a cada 3 dias até jejum 80–130. Segunda dose, bolus e sinais de excesso de basal.",
  secoes: [
    { t: "box", v: "trat", titulo: "Início — NPH antes de dormir", html:
      "<ul><li>Aplicar no período noturno, <b>antes de dormir (de preferência perto das 22 h, ou ~8 h antes do desjejum)</b>, mantendo o antidiabético oral (sobretudo a metformina), salvo contraindicação;</li>" +
      "<li><b>Dose inicial: 10 UI ou 0,1 a 0,2 UI/kg</b>;</li><li>Ajustar <b>+2 UI a cada 3 dias</b> até a glicemia de jejum de <b>80 a 130 mg/dL</b>;</li>" +
      "<li>Jejum &lt; 70 mg/dL ou hipoglicemia noturna → <b>reduzir 2 a 4 UI</b>;</li><li>Idosos comprometidos ou muito comprometidos: meta de jejum até 180 mg/dL.</li></ul>" },
    { t: "box", v: "trat", titulo: "Segunda dose de NPH (HbA1c fora da meta com jejum na meta)", html:
      "<p>Usar <b>80% da dose noturna</b>, dividida em <b>2/3 pela manhã (antes do desjejum) e 1/3 antes de dormir</b>.</p><p>Exemplo do documento: dose noturna de 30 UI → 80% = 24 UI → <b>16 UI de manhã e 8 UI à noite</b>. Ajustar a dose da manhã +1 a 3 UI a cada 3 dias até a glicemia antes do jantar de 80–130 mg/dL. Monitorar glicemia em jejum e antes do jantar.</p>" },
    { t: "box", v: "trat", titulo: "Insulina bolus (prandial)", html:
      "<p>Indicada com HbA1c acima da meta mesmo com jejum adequado, e em quem usa duas doses de NPH. Fazer <b>6 medidas</b> (antes e 2 h após café, almoço e jantar) e adicionar a 1ª dose de bolus na refeição com a maior glicemia pós-prandial: <b>3 a 4 UI</b>, aumentando <b>1 UI duas vezes por semana</b> até 2 h pós-prandial entre 90 e 180 mg/dL. 2ª e 3ª doses nas refeições com pós-prandial &gt; 180 mg/dL.</p>" +
      "<p><b>Horário:</b> insulina regular <b>30 minutos antes</b> das refeições; análogas de ação rápida até 15 minutos antes ou imediatamente antes.</p>" },
    { t: "box", v: "info", titulo: "Fator de correção (FC) — para quem usa bolus e faz automonitorização", html: "<p><b>FC inicial = 50:</b> 1 UI de insulina regular para cada 50 mg/dL acima do valor máximo do objetivo glicêmico. Ou <b>FC = 1.800 ÷ dose total diária de insulina</b>. Titulação e FC devem ser individualizados, ensinados pela equipe e com plano para hipoglicemia. Ver <a href=\"#/insulinoterapia/calc-insulina\">calculadora</a>.</p>" },
    { t: "lista", titulo: "Doses de referência no DM2", itens: [
      "Dose total diária: <b>0,5 a 1,0 UI/kg/dia</b>, até 1,5 UI/kg/dia em obesos com maior resistência;",
      "Divisão: <b>50% basal e 50% bolus</b>;",
      "Basal máxima: <b>&lt; 0,5 UI/kg/dia</b> em plenamente insulinizados (0,75 UI/kg/dia só na obesidade com resistência importante)."
    ]},
    { t: "box", v: "alerta", titulo: "Sinais de dose excessiva de insulina basal", html: "<ul><li>Basal &gt; 0,5 UI/kg/dia;</li><li>Queda da glicemia entre dormir e despertar &gt; 50 mg/dL;</li><li>Pós-prandial &gt; 180 mg/dL;</li><li>HbA1c acima da meta com jejum na meta;</li><li>Hipoglicemia (com ou sem sintomas) e grande variabilidade.</li></ul><p>Nesses casos, não aumentar a basal: avaliar o perfil com 7 a 8 medidas/dia (antes e 2 h após as refeições, ao deitar, madrugada e jejum seguinte) e considerar bolus.</p>" }
  ]
},
{
  id: "analogos-dm2", num: "07", titulo: "Insulinas análogas no DM2", grupo: "diabetes", pag: 74,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026)",
  resumo: "Glargina, degludeca e análogas rápidas: quem priorizar e como trocar NPH por glargina (1:1 ou −20%).",
  secoes: [
    { t: "duas", titulo: "Populações prioritárias", a: { tipo: "atb", rotulo: "Análogas de ação prolongada (IAAP)", passos: [
        "Hipoglicemias noturnas e graves (especialmente degludeca);", "IMC &lt; 30 kg/m²;", "Pessoas idosas;", "Grande variabilidade glicêmica;", "Redução das funções renal e hepática;", "Mulheres com DM2 gestantes;", "Dificuldade para múltiplas doses diárias de basal." ] },
      b: { tipo: "atb", rotulo: "Análogas de ação rápida (IAAR)", passos: [
        "Hipoglicemias graves ou assintomáticas;", "Pessoas idosas;", "IMC &lt; 30 kg/m²;", "Redução das funções renal e hepática;", "Controle pós-prandial inadequado;", "Mulheres com DM2 gestantes;", "Grande variabilidade glicêmica." ] } },
    { t: "box", v: "trat", titulo: "Trocar NPH por glargina", html:
      "<ul><li>NPH <b>uma vez ao dia</b> → glargina na <b>mesma dose (1 UI : 1 UI)</b>;</li><li>NPH <b>duas ou mais vezes ao dia</b> → glargina com a dose total <b>reduzida em 20%</b>, uma vez ao dia (manhã ou noite);</li><li>Iniciar e titular as IAAP como a NPH; geralmente não precisa de 2ª dose no DM2.</li></ul>" +
      "<p><b>Escolha:</b> glargina para quem tem hipoglicemias noturnas e graves; degludeca para quem continua com hipoglicemias mesmo com glargina.</p>" },
    { t: "box", v: "info", titulo: "Incorporação", html: "<p>Análogas de ação rápida e prolongada foram incorporadas ao tratamento do DM2 no SUS pelas Portarias SECTICS/MS nº 58 e 59/2024. Ver também <a href=\"#/insulinoterapia/transicao-glargina\">Transição NPH → glargina</a>.</p>" }
  ]
},
{
  id: "dm1-tratamento", num: "08", titulo: "Tratamento do DM1", grupo: "diabetes", pag: 81,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026), conforme PCDT do DM1",
  resumo: "Basal-bolus com pelo menos 3 aplicações. Doses por kg conforme fase, critérios do PCDT para análogas e manutenção a cada 6 meses.",
  secoes: [
    { t: "tabela", titulo: "Quadro 2 — Doses de insulina no DM1", head: ["Situação", "Dose total diária (UI/kg/dia)", "Dose basal (UI/kg/dia)"], rows: [
      ["Diagnóstico recente (lua de mel)", "&lt; 0,5", "&lt; 0,25"],
      ["Após remissão parcial / adultos", "0,7 a 1,0", "0,3 a 0,5"],
      ["Lactentes", "0,2 a 0,4", "0,1 a 0,2"],
      ["Pré-púberes", "0,5 a 0,8", "0,2 a 0,4"],
      ["Púberes", "0,8 a 2,0", "0,4 a 1,0"]
    ], nota: "Na resistência à insulina: 1,2 a 1,5 UI/kg/dia de insulina total. Doses maiores em estresse físico ou emocional." },
    { t: "lista", titulo: "Cinco componentes do tratamento", numerada: true, itens: ["Educação sobre diabetes;", "Insulinoterapia;", "Automonitorização glicêmica;", "Orientação nutricional;", "Prática monitorada de exercício físico."] },
    { t: "box", v: "trat", titulo: "Esquemas", html: "<p>Insulina basal (NPH ou IAAP) + bolus (regular ou IAAR), em <b>pelo menos três aplicações diárias</b>: NPH + regular; NPH + IAAR; ou IAAR + IAAP. Automonitorização no mínimo 3 vezes ao dia e acompanhamento regular (pelo menos 2 vezes ao ano, com endocrinologista sempre que possível). Crianças: 60 min de atividade física por dia; adultos: 150 min/semana.</p>" },
    { t: "fluxo", titulo: "Fluxograma do PCDT do DM1 (Figura 2)", passos: [
      { pergunta: "DM1 com critérios de inclusão", sim: { tipo: "atb", html: "<b>NPH + regular</b>, automonitorização no mínimo 3 vezes ao dia e acompanhamento médico regular." } },
      { pergunta: "Critério para análoga de ação rápida? (NPH + regular há ≥ 3 meses e, nos últimos 6 meses: hipoglicemia grave; ou não graves &gt; 2/semana; ou noturnas &gt; 1/semana; ou mau controle persistente pela HbA1c)",
        sim: { tipo: "atb", html: "Iniciar <b>análoga de ação rápida + NPH</b>." }, nao: { tipo: "nao-atb", html: "Manter NPH + regular." } },
      { pergunta: "Critério para análoga de ação prolongada? (NPH + IAAR há ≥ 3 meses e, nos últimos 6 meses: hipoglicemias noturnas ou graves, grande variabilidade, IMC &lt; 30, idoso, redução renal/hepática ou outra necessidade)",
        sim: { tipo: "atb", html: "Iniciar <b>análoga de ação prolongada + análoga de ação rápida</b>." }, nao: { tipo: "nao-atb", html: "Manter IAAR + NPH conforme critérios de manutenção." } }
    ], nota: "Antes de indicar análogas, excluir causas de hipoglicemia: alimentação reduzida sem ajuste da dose, exercício sem redução da dose, aplicação inadequada, doses excessivas, álcool. <b>Manutenção (reavaliar a cada 6 meses):</b> automonitorização ≥ 3x/dia, acompanhamento regular e, nos últimos 6 meses, atingir metas OU reduzir HbA1c ≥ 0,5% OU melhorar hipoglicemias OU condição clínica transitória. Hipoglicemia grave = precisou de atendimento emergencial ou ajuda de terceiros; não grave = &lt; 54 mg/dL, ou &lt; 70 mg/dL com sintomas." }
  ]
},
{
  id: "idosos", num: "09", titulo: "Pessoa idosa: metas e prevenção de hipoglicemia", grupo: "diabetes", pag: 110,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026)",
  resumo: "Metas menos rígidas, esquemas simples e atenção à fragilidade: hipoglicemia aumenta quedas, demência e eventos cardiovasculares.",
  secoes: [
    { t: "lista", titulo: "Recomendações", itens: [
      "Individualizar o cuidado, priorizando terapias de menor risco e <b>esquemas simplificados</b>;",
      "Avaliar capacidade cognitiva e funcional para administrar medicamentos, regularidade da alimentação, uso de dispositivos de monitorização e função renal;",
      "Baixo peso com hiperglicemia que compromete a nutrição: insulina basal com cautela, monitorização próxima e ajustes graduais;",
      "Exercício resistido 3 vezes por semana + adequação de calorias e proteínas melhora o desempenho físico em idosos frágeis;",
      "Avaliar a excursão glicêmica noturna (dormir, madrugada, despertar): queda &gt; 60 mg/dL indica risco de hipoglicemia noturna;",
      "Preferir análogas de ação prolongada nos mais propensos à hipoglicemia."
    ]},
    { t: "box", v: "alerta", titulo: "Por que a hipoglicemia é tão perigosa no idoso", html: "<p>Resposta contrarreguladora diminuída e limiar de percepção reduzido. A hipoglicemia aumenta o risco de <b>demência, arritmias, isquemia miocárdica e quedas</b> (sarcopenia, neuropatia, baixa visão), além de incontinência, desidratação, isolamento e dependência. O medo da hipoglicemia é uma das principais causas de abandono do tratamento.</p>" }
  ]
},
{
  id: "complicacoes", num: "10", titulo: "Complicações crônicas e rastreamentos", grupo: "diabetes", pag: 119,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026), conforme PCDT do DM2",
  resumo: "Doença renal (RAC + TFG), neuropatia, retinopatia e pé diabético: quando rastrear e quando encaminhar.",
  secoes: [
    { t: "tabela", titulo: "Rastreamentos", head: ["Complicação", "Como", "Quando"], rows: [
      ["<b>Doença renal do diabetes</b>", "Razão albumina/creatinina em urina aleatória + TFG estimada pela creatinina (CKD-EPI 2021)", "DM2: ao diagnóstico. DM1: após 5 anos do diagnóstico. Repetir 1 a 4 vezes ao ano conforme o risco"],
      ["<b>Neuropatia periférica</b>", "Clínico: 2 ou mais testes/sinais alterados (melhores para rastreio: biotesiômetro e sensibilidade térmica); excluir B12, álcool, hipotireoidismo etc.", "Ao diagnóstico do DM2; se negativo, anualmente"],
      ["<b>Retinopatia</b>", "Exame oftalmológico", "Ao diagnóstico do DM2; normal ou leve: anual; moderada/grave: mais frequente. Gestante ou planejando gravidez: aconselhar e encaminhar"],
      ["<b>Pé diabético</b>", "Monofilamento de 10 g + um segundo teste (preferencialmente diapasão 128 Hz; ou picada, reflexo aquileu); estratificação de risco, ITB, SINBAD, WIfI", "Em todas as consultas de acompanhamento"],
      ["<b>Risco cardiovascular</b>", "Estimar o RCV", "Na avaliação inicial e anualmente"]
    ]},
    { t: "box", v: "alerta", titulo: "Pé diabético — encaminhar", html: "<p><b>Maior complexidade:</b> deformidades importantes, ausência de pulsos, suspeita de isquemia ou quando a APS não tiver recursos para a úlcera.</p><p><b>Urgência imediata:</b> úlcera infectada, infecção em expansão, isquemia crítica, gangrena, suspeita de Charcot agudo, edema e rubor não explicados do pé.</p><p><b>Autocuidado:</b> inspeção diária dos pés e do interior dos calçados, lavar e secar entre os dedos, cortar as unhas corretamente, usar calçados e não andar descalço.</p>" },
    { t: "box", v: "info", titulo: "Encaminhar à Atenção Especializada", html: "<p>Alterações na fundoscopia, albuminúria e diminuição da sensibilidade nos pés, com plano de cuidado conjunto — a APS mantém a gestão do cuidado. Dor neuropática: analgésicos não opioides, tricíclicos ou antiepilépticos conforme o PCDT de Dor Crônica.</p>" }
  ]
},
{
  id: "autocuidado", num: "11", titulo: "Modo de vida e autocuidado", grupo: "diabetes", pag: 61,
  fonte: "Introdução ao diabetes mellitus (MS/CONASEMS, 2026)",
  resumo: "Perda de peso, alimentação, 150 min de atividade física, cessar tabagismo e automonitorização como pilar do autocuidado apoiado.",
  secoes: [
    { t: "lista", titulo: "Recomendações", itens: [
      "<b>Peso:</b> perda de 3–7% já melhora glicemia e fatores de risco; com excesso de peso, reduzir no mínimo 5%; &gt; 10% sustentada pode levar à remissão do DM2;",
      "<b>Alimentação:</b> variada e equilibrada, individualizada, com base no Guia Alimentar para a População Brasileira;",
      "<b>Atividade física:</b> ≥ 150 min/semana (ou 75 min vigorosos) + exercícios resistidos 2 a 3 vezes/semana em dias não consecutivos; evitar o sedentarismo (levantar-se a cada hora);",
      "<b>Tabagismo:</b> cessação é prioridade (abordagem cognitivo-comportamental, com ou sem medicamento);",
      "<b>PICS</b> como complemento, sem substituir terapias efetivas."
    ]},
    { t: "lista", titulo: "Pontos do autocuidado a observar", itens: [
      "Compreensão da própria condição;", "Capacitação na automonitorização e na aplicação de insulina;", "Como lida com as repercussões físicas e emocionais;",
      "Mudanças necessárias no modo de vida;", "Uso adequado do tratamento;", "Quando procurar consultas e exames;", "Avaliação regular dos pés;", "Reconhecer sinais de descompensação e onde buscar ajuda."
    ]},
    { t: "box", v: "info", titulo: "Momentos-chave da abordagem", html: "<p>Ao diagnóstico; nas consultas periódicas; quando a pessoa sinaliza dificuldades; e quando muda a equipe responsável. A frequência da automonitorização é prescrita de forma individualizada.</p>" }
  ]
}
]);
