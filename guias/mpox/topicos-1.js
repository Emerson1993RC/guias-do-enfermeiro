/* Guia: Mpox — Nota Técnica Mpox 2026 (SESA-CE / SEVIG), fichas e-SUS Sinan (MS), Ficha de Investigação Complementar (SESA-CE)
   e Formulário FOR.545.011 (Lacen-CE). `fonte` + `pag` = documento de origem e página do PDF. */
const NT_MPOX = "Nota Técnica Mpox 2026 — SESA-CE";
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).mpox = (window.GUIA_TOPICOS.mpox || []).concat([
{
  id: "definicao-caso", num: "01", titulo: "Definição de caso", grupo: "clinica", pag: 7, fonte: NT_MPOX,
  resumo: "Suspeito: lesão em mucosa e/ou erupção sugestiva, proctite ou edema peniano. Provável, confirmado (PCR detectável) e descartado.",
  secoes: [
    { t: "box", v: "diag", titulo: "Caso suspeito", html: "<p>Indivíduo de qualquer idade com <b>início súbito de lesão em mucosas E/OU erupção cutânea aguda sugestiva de mpox</b> (geralmente lesões profundas e bem circunscritas, muitas vezes com <b>umbilicação central</b>), única ou múltipla, em qualquer parte do corpo (incluindo região genital/perianal e oral) <b>E/OU proctite</b> (ex.: dor ou sangramento anorretal) <b>E/OU edema peniano</b>, podendo estar associada a outros sinais e sintomas.</p>" },
    { t: "box", v: "alerta", titulo: "Caso provável", html: "<p>Atende à definição de suspeito e tem <b>um ou mais</b> critérios abaixo, com investigação laboratorial <b>não realizada ou inconclusiva</b> e sem outro diagnóstico clínico-laboratorial que descarte mpox:</p><ul>" +
      "<li>Exposição próxima e prolongada sem proteção respiratória, OU contato físico direto (inclusive sexual) com <b>parcerias múltiplas e/ou desconhecidas</b> nos 21 dias anteriores aos sintomas;</li>" +
      "<li>Exposição próxima e prolongada sem proteção respiratória, OU contato íntimo (inclusive sexual) com <b>caso provável ou confirmado</b> nos 21 dias anteriores;</li>" +
      "<li>Contato com <b>materiais contaminados</b> (roupas de cama e banho, utensílios) de caso provável ou confirmado nos 21 dias anteriores;</li>" +
      "<li><b>Trabalhador de saúde sem EPI adequado</b> com contato com caso provável ou confirmado nos 21 dias anteriores.</li></ul>" },
    { t: "tabela", titulo: "Confirmação e descarte", head: ["Classificação", "Critério"], rows: [
      ["<b>Confirmado</b>", "Caso suspeito com resultado <b>Positivo/Detectável</b> para MPXV por diagnóstico molecular (PCR em tempo real e/ou sequenciamento)"],
      ["<b>Descartado</b>", "Caso suspeito com resultado <b>Negativo/Não detectável</b> para MPXV por diagnóstico molecular, OU sem resultado laboratorial para MPXV e com diagnóstico complementar que descarta mpox como principal hipótese"]
    ]}
  ]
},
{
  id: "doenca", num: "02", titulo: "Transmissão, quadro clínico e tratamento", grupo: "clinica", pag: 5, fonte: NT_MPOX,
  resumo: "Incubação de 6 a 16 dias (até 21). Transmite do início dos sintomas até a cicatrização completa. Lesões de mácula a crosta; cura em 2 a 4 semanas.",
  secoes: [
    { t: "tabela", titulo: "Características", head: ["Aspecto", "Nota técnica"], rows: [
      ["<b>Agente</b>", "Mpox vírus (MPXV), gênero <i>Orthopoxvirus</i>; doença zoonótica"],
      ["<b>Incubação</b>", "<b>6 a 16 dias</b>, podendo chegar a <b>21 dias</b>"],
      ["<b>Transmissibilidade</b>", "Do <b>início dos sintomas até a cicatrização completa das lesões</b>"],
      ["<b>Transmissão</b>", "Contato direto com lesões de pele ou mucosas, secreções respiratórias (gotículas), fluidos corporais, superfícies e objetos contaminados (roupas de cama, toalhas, utensílios). Exige contato próximo e prolongado (pele a pele, mucosa a mucosa); transmissão sexual também observada"],
      ["<b>Pródromo (1 a 5 dias)</b>", "Pode ou não ocorrer: febre, cefaleia, mialgia, adenomegalia e astenia"],
      ["<b>Período clínico</b>", "Erupção que evolui de <b>máculas → pápulas → vesículas → pústulas → crostas</b>, em qualquer parte do corpo (face, tronco, genitais, extremidades)"],
      ["<b>Evolução</b>", "Maioria autolimitada, recuperação em <b>2 a 4 semanas</b>; prognóstico geralmente bom. Graves: infecção bacteriana secundária, sepse, encefalite, pneumonia"]
    ]},
    { t: "box", v: "diag", titulo: "Diagnóstico", html: "<p>Confirmado por <b>PCR em tempo real</b>, principalmente em amostras de lesões cutâneas ou crostas. Diferenciais: varicela, herpes zoster, sífilis e outras erupções. <b>Na suspeita, testar para HIV e outras IST.</b></p>" },
    { t: "box", v: "trat", titulo: "Tratamento", html: "<p>Casos leves: <b>analgesia quando necessário</b> e vigilância de sinais de gravidade. Grupos de maior risco — <b>gestantes, idosos e pessoas vivendo com HIV/aids com LT-CD4 ≤ 200</b> — devem ser avaliados quanto à gravidade e à necessidade de hospitalização. Infecções bacterianas secundárias: antibióticos apropriados. Manejo detalhado: manual do Ministério da Saúde (link abaixo).</p>" },
    { t: "links", titulo: "Manejo clínico", itens: [
      { titulo: "Mpox — orientações técnicas para a assistência à saúde (Ministério da Saúde)", desc: "Manual citado pela nota técnica para o manejo clínico.", url: "https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/m/mpox/protocolos/mpox-orientacoes-tecnicas-para-a-assistencia-a-saude" }
    ]}
  ]
},
{
  id: "prevencao-isolamento", num: "03", titulo: "Prevenção, isolamento e EPI", grupo: "clinica", pag: 6, fonte: NT_MPOX,
  resumo: "Isolamento até a cicatrização completa das lesões. Precaução padrão + contato + gotículas nos serviços. Luvas, avental, máscara cirúrgica e óculos.",
  secoes: [
    { t: "lista", titulo: "Medidas", itens: [
      "Evitar contato direto com lesões, fluidos corporais e objetos contaminados de pessoas infectadas;",
      "<b>Profissionais de saúde e cuidadores:</b> EPI — luvas, avental, máscara cirúrgica e óculos de proteção;",
      "Lavar as mãos com água e sabão ou usar álcool em gel com regularidade;",
      "<b>Casos suspeitos ou confirmados devem ficar em isolamento até a cicatrização completa das lesões</b>, com restrição de contato próximo;",
      "Serviços de saúde: <b>precaução padrão + precauções para contato e gotículas</b>;",
      "Objetos pessoais, roupas de cama e superfícies: higienizar com água e detergente; desinfetar superfícies com saneante regularizado pela Anvisa (concentração e tempo de contato do fabricante); lavar roupas e tecidos separadamente."
    ]},
    { t: "box", v: "info", titulo: "Contatos", html: "<p><b>Contatos assintomáticos não precisam de isolamento.</b> Se surgirem sintomas sugestivos, fazer avaliação clínica e seguir o fluxo de caso suspeito. Ver <a href=\"#/mpox/contatos\">Contatos</a>.</p>" }
  ]
},
{
  id: "cenario-ceara", num: "04", titulo: "Cenário no Ceará (2026)", grupo: "clinica", pag: 4, fonte: NT_MPOX,
  resumo: "Até 05/11/2026: 113 notificados, 40 confirmados (concentrados em outubro e novembro), todos homens de 24 a 51 anos, 87,5% em Fortaleza.",
  secoes: [
    { t: "lista", titulo: "Situação até 05/11/2026", itens: [
      "<b>113</b> residentes notificados com suspeita: <b>40 confirmados</b> (35,4%), 60 descartados, 1 provável e 12 em investigação;",
      "Concentração em <b>outubro (18)</b> e <b>novembro (17)</b>, contra 5 de janeiro a setembro;",
      "Confirmados: todos do sexo masculino, de 24 a 51 anos; 35 (87,5%) em Fortaleza; 2 internações por necessidade clínica; nenhum óbito; 1 caso provável em mulher (critério clínico-epidemiológico);",
      "Clado II identificado (Fiocruz) em amostra de um paciente, com resultado de 04/11/2026;",
      "Histórico: 567 confirmados em 2022, 8 em 2023, 25 em 2024 e 13 em 2025."
    ]},
    { t: "links", titulo: "Dados atualizados", itens: [
      { titulo: "Painel de monitoramento de mpox — IntegraSUS", desc: "Situação epidemiológica atualizada no Ceará (pode divergir da nota conforme a data).", url: "https://integrasus.saude.ce.gov.br/#/indicadores/indicadores-vigilancia-saude/situacao-epidemiologica/monkeypox" }
    ]}
  ]
},
{
  id: "como-notificar", num: "05", titulo: "Como notificar: fluxo e fichas", grupo: "notificacao", pag: 8, fonte: NT_MPOX + " e fichas e-SUS Sinan (MS)",
  resumo: "Notificação compulsória imediata: e-SUS Sinan em até 24 h + comunicação imediata à vigilância municipal. Coleta com cadastro no GAL. Plantão CIEVS nos fins de semana.",
  secoes: [
    { t: "box", v: "alerta", titulo: "Notificação compulsória imediata", html: "<p>Registrar o caso suspeito no <b>e-SUS Sinan em até 24 horas</b> e <b>comunicar à vigilância epidemiológica municipal</b> (Portaria de Consolidação GM/MS nº 4/2017). A investigação começa na suspeita e o caso é acompanhado até a confirmação ou o descarte, atualizando o sistema.</p>" },
    { t: "fluxo", titulo: "Fluxograma de notificação, comunicação e investigação (item 4.4)", passos: [
      { pergunta: "Identificar caso suspeito (definição de caso do MS)", sim: { tipo: "atb", html: "<b>Notificação imediata:</b> até 24 h no e-SUS Sinan." } },
      { pergunta: "Comunicação imediata", itens: ["Unidade notificadora comunica à Vigilância Epidemiológica Municipal → COADS → Superintendência → SESA", "<b>Notificado em hospital?</b> Encaminhar DAE em 24 h para GT VEH e GT IST"],
        sim: { tipo: "atb", html: "<b>Coleta</b> com cadastro no GAL → <b>diagnóstico</b> (exame molecular no laboratório)." } },
      { pergunta: "Resultado do exame",
        sim: { tipo: "alerta", html: "<b>Positivo:</b> confirmar o caso; aplicar a ficha de investigação complementar; <b>rastrear e monitorar contatos por 21 dias</b> após a última exposição (registrar na planilha); vacinação seletiva conforme critério." },
        nao: { tipo: "nao-atb", html: "<b>Negativo:</b> descartar o caso." } },
      { pergunta: "Encerramento", sim: { tipo: "atb", html: "Atualizar o e-SUS Sinan." } }
    ], nota: "Ficha complementar: prioridade para casos graves, óbitos e agrupamentos de casos." },
    { t: "fichas", titulo: "Fichas para baixar e imprimir", guia: "mpox" },
    { t: "box", v: "info", titulo: "Plantão epidemiológico (CIEVS Estadual)", html: "<p>Fins de semana e feriados, <b>das 8h às 17h</b>: <a href=\"tel:+5585987240455\"><b>(85) 98724-0455</b></a> · <a href=\"mailto:cievs.ce@saude.ce.gov.br\">cievs.ce@saude.ce.gov.br</a>.</p>" }
  ]
},
{
  id: "ficha-investigacao", num: "06", titulo: "Ficha de investigação: o que cada bloco pede", grupo: "notificacao", pag: 1,
  fonte: "Ficha de Investigação de Mpox, e-SUS Sinan, V003 (25/06/2025)",
  resumo: "Hospitalização e tratamento, laboratório, diagnósticos complementares, informações individuais, exposição de 21 dias, classificação e evolução.",
  secoes: [
    { t: "tabela", titulo: "Blocos da ficha (V003 — 25/06/2025)", head: ["Bloco", "Campos", "O que registrar"], rows: [
      ["<b>Ficha individual de notificação</b>", "1–45", "Dados da notificação, identificação, gestação (23), endereço, agravo com CID (41), sinais e sintomas MedDRA (42) e <b>data de início dos sintomas</b> (43)."],
      ["<b>Hospitalização e tratamento</b>", "46–52", "Hospitalização (necessidade clínica ou isolamento), data, UTI, hospital. Tratamento antiviral: tecovirimat, brincidofovir, cidofovir, não conhecido, sem tratamento ou outro."],
      ["<b>Diagnóstico molecular (qPCR)</b>", "53–61", "Coleta e data; tipo de amostra; método; resultado; valor de CT; caracterização genômica e clado; número de adesão."],
      ["<b>Diagnóstico complementar</b>", "62–75", "Resultado de cada diagnóstico diferencial (ver <a href=\"#/mpox/diagnostico-diferencial\">Diagnóstico diferencial</a>)."],
      ["<b>Informações individuais</b>", "76–84", "Comportamento sexual e parcerias múltiplas; imunossupressão; HIV e CD4; IST ativa; vacinação contra varíola humana."],
      ["<b>Exposição provável</b>", "85–105", "Nos <b>21 dias anteriores</b> aos sintomas: exposição próxima sem proteção respiratória; contato físico/sexual com desconhecidos ou parcerias múltiplas; contato íntimo com caso; local do contato; viagem com sintomas; materiais contaminados; profissional de saúde sem EPI; relação com o trabalho; forma de transmissão; vínculo epidemiológico."],
      ["<b>Classificação do caso</b>", "106–109", "Classificação final, conclusão, evolução (ver <a href=\"#/mpox/classificacao\">Classificação e encerramento</a>)."]
    ]},
    { t: "lista", titulo: "Forma provável de transmissão (campo 103)", itens: ["Do animal para o homem;", "Drogas intravenosas e transfusão;", "Associada ao cuidado de saúde;", "Vertical (mãe-filho);", "Laboratório (exposição profissional);", "Sexual;", "Material contaminado (roupas, lençóis, objetos);", "Desconhecida;", "Outra."] }
  ]
},
{
  id: "coleta-laboratorio", num: "07", titulo: "Coleta, transporte e cadastro no GAL", grupo: "laboratorio", pag: 11, fonte: NT_MPOX + " e FOR.545.011 (Lacen-CE)",
  resumo: "Swab forte de 2 ou mais lesões num frasco seco sem meio; até 4 crostas em frasco seco separado. 4 a 8 °C, até 24 h no Lacen. Ficha do Sinan + FOR.545.011.",
  secoes: [
    { t: "box", v: "info", titulo: "O exame", html: "<p>O Lacen-CE faz <b>qPCR multiplex</b>: detecta o mpox vírus (MPXV), sem distinguir cepas, e também <b>Varicela zoster (VZV)</b> e <b>Orthopoxvírus (OPXV)</b>. Indicado para secreção vesicular, crosta e exsudato de lesão. Amostras com bom valor de Ct podem seguir para o laboratório de referência (tipagem e sequenciamento). <b>O teste é diagnóstico e não serve como controle de cura.</b></p>" },
    { t: "tabela", titulo: "Tipos de amostra", head: ["Amostra", "Como coletar"], rows: [
      ["<b>Secreção de vesícula e lesões de mucosa</b> (oral, perianal, genital)", "Na <b>fase aguda</b> (maior carga viral). Swab estéril de <b>nylon, poliéster, Dacron ou Rayon</b>, com <b>esfregaço forte e intenso</b>, de preferência em vesículas ou pústulas. Com mais de uma lesão: <b>um swab por lesão, no mínimo dois</b>, todos num <b>único frasco estéril sem meio de transporte viral</b> (pool do mesmo paciente)."],
      ["<b>Crosta de lesão</b>", "Com lesões secas, colher as crostas <b>menos ressecadas</b>. Frasco <b>seco e estéril, sem líquido preservante</b> (fornecido pelo Lacen). Com mais de uma lesão, se possível <b>4 crostas</b> no mesmo frasco. <b>Não misturar crostas com swabs</b> no mesmo frasco."]
    ], nota: "Identificar no frasco o nome do paciente, a origem do material e a data da coleta." },
    { t: "box", v: "alerta", titulo: "Acondicionamento e transporte", html: "<p>Caixa térmica rígida com baterias de gelo, mantendo <b>4 °C a 8 °C</b>, até o Lacen em no máximo <b>24 horas</b>.</p>" },
    { t: "lista", titulo: "Documentação obrigatória", itens: [
      "<b>Ficha de notificação do Sinan</b> preenchida;",
      "<b>Formulário de solicitação FOR.545.011</b> preenchido, com dados clínicos e epidemiológicos (viagens, situação vacinal, ocupação etc.);",
      "Informações compatíveis com a amostra enviada."
    ]},
    { t: "tabela", titulo: "Cadastro no GAL (deve corresponder ao material coletado)", head: ["Campo", "Preencher"], rows: [
      ["Finalidade", "Investigação"], ["Descrição", "Monkeypox vírus"], ["Agravo/Doença", "Varíola"],
      ["Nova amostra (material)", "Secreção de vesícula e/ou crosta de lesão"],
      ["Pesquisa", "Monkeypox vírus – secreção de vesícula; Monkeypox vírus – crosta"], ["Metodologia", "qPCR"]
    ], nota: "Recomenda-se coletar secreção de vesícula e crosta e registrar os dois tipos de amostra no GAL." },
    { t: "links", titulo: "Kits de coleta e formulários", itens: [
      { titulo: "Solicitação de kits de coleta para mpox (Lacen-CE)", desc: "Formulário on-line para a unidade pedir kits, com identificação e quantidade.", url: "https://docs.google.com/forms/d/1NE38UUcmPsStblRTuiVz-03jZFI22qVseBog4tJsSaM/viewform" },
      { titulo: "Formulários GAL (inclui o FOR.545.011)", desc: "Pasta indicada pela nota técnica.", url: "https://drive.google.com/drive/folders/1W2S5wbQ0pPR9Yh_UnXQXlEdRtk02TYhJ" }
    ]}
  ]
},
{
  id: "diagnostico-ampliado", num: "08", titulo: "Critérios para o diagnóstico ampliado (OPV, MPXV, VZV)", grupo: "laboratorio", pag: 1,
  fonte: "Formulário para Diagnóstico de Mpox Ampliado — FOR.545.011, rev. 00 (Lacen-CE)",
  resumo: "Quando marcar o diagnóstico ampliado: imunossuprimidos, gestante de risco, Kawasaki, IST disseminada, graves sem definição de caso e outros.",
  secoes: [
    { t: "lista", titulo: "Critérios de inclusão (marcar no formulário)", itens: [
      "Ordenhadores com lesão localizada nas mãos;",
      "HIV positivo em abandono de TARV, RT-qPCR Não Detectável para Mpox, com forte suspeita de outros Orthopoxvírus e/ou Varicela zoster;",
      "Transplantado (fígado, rim, TMO);", "Paciente oncológico (LLA, LLC, outros);", "Gestante em situação de risco;", "Criança em investigação de doença de Kawasaki;",
      "Suspeita de IST disseminada com teste molecular de CT/NG Não Detectável;",
      "HIV positivo em TARV com RT-qPCR Não Detectável para Mpox e forte suspeita de outros Orthopoxvírus e/ou Varicela zoster;",
      "Mpox confirmado por RT-qPCR com forte suspeita de coinfecção por outros Orthopoxvírus e/ou Varicela zoster;",
      "Sistema penitenciário em situação de surto, com RT-qPCR Não Detectável para Mpox;",
      "Hospitalizado grave (em ventilação mecânica ou não) com forte suspeita de Mpox, outros Orthopoxvírus e/ou Varicela zoster sem definição de caso;",
      "Outros (descrever)."
    ]},
    { t: "box", v: "info", titulo: "O formulário também pede", html: "<p>Nome e nome social, leito, unidade, início dos sintomas, uso de antimicrobiano e antiviral (quais e dias), data da coleta, tipo de amostra (swab de lesão vesicular, fragmento de crosta, swab perianal), origem nosocomial ou comunitária e breve história clínica.</p>" }
  ]
},
{
  id: "diagnostico-diferencial", num: "09", titulo: "Diagnóstico diferencial", grupo: "laboratorio", pag: 1,
  fonte: "Ficha de Investigação de Mpox (e-SUS Sinan, V003) — campos 64 a 82; " + NT_MPOX,
  resumo: "Varicela/herpes zoster, herpes simples, infecções bacterianas de pele, sífilis, LGV, cancroide, molusco, gonococo disseminado, granuloma inguinal e reação alérgica.",
  secoes: [
    { t: "lista", titulo: "Diagnósticos que a ficha pede para registrar", itens: [
      "Varicela/herpes zoster;", "Herpes simples;", "Infecções bacterianas de pele;", "Sífilis primária ou secundária;", "Linfogranuloma venéreo;",
      "Cancroide;", "Molusco contagioso (poxvírus);", "Infecção gonocócica disseminada;", "Granuloma inguinal;", "Reação alérgica;", "Outras causas de erupção papular ou vesicular."
    ]},
    { t: "box", v: "info", titulo: "Resultado de cada diferencial", html: "<p>1. Confirmado clinicamente · 2. Descartado clinicamente · 3. Confirmado laboratorialmente · 4. Descartado laboratorialmente · 5. Não realizado · 6. Aguardando resultado.</p><p>A nota técnica recomenda <b>testar HIV e outras IST</b> em todo caso suspeito.</p>" }
  ]
},
{
  id: "contatos", num: "10", titulo: "Contatos: rastreamento e monitoramento (21 dias)", grupo: "investigacao", pag: 8, fonte: NT_MPOX + " e Ficha de Investigação Complementar (SESA-CE)",
  resumo: "Quem é contato, monitorar a cada 24 h com temperatura 2 vezes ao dia por 21 dias após a última exposição. Assintomático não isola. Planilha e ficha complementar.",
  secoes: [
    { t: "lista", titulo: "É contato quem, nos últimos 21 dias, teve com caso suspeito, provável ou confirmado", itens: [
      "Contato físico direto, inclusive sexual;", "Exposição próxima e prolongada sem proteção respiratória adequada;",
      "Contato com materiais potencialmente contaminados (roupas de cama, toalhas, objetos pessoais);", "Exposição ocupacional sem EPI adequado."
    ]},
    { t: "box", v: "trat", titulo: "Monitoramento", html: "<ul><li>Começa <b>ainda na suspeita</b>, com acompanhamento <b>a cada 24 horas</b>;</li><li><b>Temperatura 2 vezes ao dia</b> e comunicação imediata à equipe se surgirem sintomas;</li><li>Caso confirmado: manter por <b>21 dias após a última exposição</b>; resultado negativo: reavaliar conforme critérios de descarte;</li><li><b>Contatos assintomáticos não precisam de isolamento</b>; com sintomas, avaliar e seguir o fluxo de caso suspeito;</li><li><b>Atenção especial:</b> gestantes, crianças &lt; 8 anos e imunossuprimidos — se adoecerem, acompanhar até a resolução dos sintomas e a cicatrização completa.</li></ul>" },
    { t: "box", v: "info", titulo: "Ficha de Investigação Complementar", html: "<p>Recomendada para <b>casos confirmados</b>, para aprofundar exposições, vínculos e cadeias de transmissão e orientar o rastreamento — <b>prioridade para casos graves, óbitos e agrupamentos</b>, conforme a capacidade dos serviços. Período investigado: de 21 dias antes do primeiro sintoma até o início do isolamento.</p><p>Blocos: notificação; identificação; HIV/PrEP/PEP/sífilis/vacinação; quadro clínico; percurso assistencial e isolamento; laboratório (GAL); exposições; viagens; parceiros; moradores; outros contatos; ações (orientação de isolamento, busca de contatos, comunicação ao município e ao estado). Para cada contato: sintomas, fatores de risco (<b>gestação, imunossupressão, HIV, criança &lt; 12 anos, dermatopatia</b>) e indicação de vacina.</p>" },
    { t: "box", v: "alerta", titulo: "Confidencialidade", html: "<p>As informações são <b>sigilosas</b>, de uso exclusivo da vigilância epidemiológica, com acesso restrito a profissionais autorizados (LGPD — Lei nº 13.709/2018).</p>" },
    { t: "links", titulo: "Ficha complementar e planilha", itens: [
      { titulo: "Ficha de Investigação Complementar — versão Word (Google Docs)", desc: "Disponibilizada pela nota técnica.", url: "https://docs.google.com/document/d/1k2swXdsnxHWz-I67rlkAxjqf62j5QLKF/edit" },
      { titulo: "Ficha de Investigação Complementar — versão PDF", desc: "Disponibilizada pela nota técnica.", url: "https://drive.google.com/file/d/1hlZMYHZ-eJ1UQO0PNVjPrsgjIh7lBPqL/view" },
      { titulo: "Modelo de planilha de monitoramento de contatos", desc: "Cada município baixa uma cópia e mantém seu próprio banco, com sigilo.", url: "https://drive.google.com/file/d/1oKeJOdqnjemqdmsk4dqGaO6g6Nc58Zl-/view" }
    ]}
  ]
},
{
  id: "classificacao", num: "11", titulo: "Classificação final e encerramento", grupo: "investigacao", pag: 3,
  fonte: "Ficha de Investigação de Mpox, e-SUS Sinan, V003 (25/06/2025) — campos 106 a 109",
  resumo: "Confirmado (laboratorialmente), descartado, provável, suspeito, perda de seguimento ou exclusão; evolução para cura ou óbito.",
  secoes: [
    { t: "tabela", titulo: "Encerramento do caso", head: ["Campo", "Opções"], rows: [
      ["106 — Classificação final", "1. Confirmado (laboratorialmente) · 2. Descartado · 3. Provável · 4. Suspeito · 5. Perda de seguimento · 6. Exclusão"],
      ["107 — Data de conclusão da investigação", "Data"],
      ["108 — Evolução do caso", "1. Óbito por Mpox · 2. Cura · 3. Óbito por outra causa · 9. Ignorado"],
      ["109 — Data da evolução", "Data"]
    ], nota: "Critérios de cada classificação: ver <a href=\"#/mpox/definicao-caso\">Definição de caso</a>. Ao encerrar, atualizar o e-SUS Sinan." }
  ]
},
{
  id: "vacinacao", num: "12", titulo: "Vacinação (Jynneos)", grupo: "vacinacao", pag: 13, fonte: NT_MPOX + " (Nota Técnica Conjunta nº 403/2026-DPNI/SVSA/MS)",
  resumo: "Prioridade pós-exposição: 18 a 49 anos com contato de médio ou alto risco, até 4 dias (até 14). Pré-exposição: PVHIV ≥ 18 anos com CD4 < 100. ID 0,1 mL ou SC 0,5 mL, 2 doses com 28 dias.",
  secoes: [
    { t: "box", v: "info", titulo: "Estratégia 2026", html: "<p>Retomada da vacinação, <b>condicionada à disponibilidade de doses</b>, diante do aumento de casos (Ceará, DF, RJ e SP, SE 41 a 45). <b>Não é vacinação em massa nem de rotina</b>: oferta seletiva. Adotada a via <b>intradérmica com 0,1 mL</b> para ampliar o uso das doses. A vacina não substitui as demais medidas de proteção.</p>" },
    { t: "tabela", titulo: "Indicações", head: ["Esquema", "Quem", "Onde"], rows: [
      ["<b>Pós-exposição</b> (prioritário)", "Pessoas de <b>18 a 49 anos</b> com contato de <b>médio ou alto risco</b> com caso suspeito, provável ou confirmado. De preferência <b>até 4 dias</b> após a exposição; pode ser feita até <b>14 dias</b> (aí o objetivo é reduzir formas graves)", "UBS, após avaliação da vigilância epidemiológica pela ficha complementar"],
      ["<b>Pré-exposição</b> (excepcional)", "Pessoas vivendo com HIV/aids com <b>LT-CD4 &lt; 100 células/mm³</b>, a partir de 18 anos", "UBS via Rede de Imunobiológicos Especiais (CRIE): documentação enviada por e-mail ao CRIE, validação, envio da vacina e agendamento"]
    ]},
    { t: "tabela", titulo: "Risco de exposição", head: ["Risco", "Situações"], rows: [
      ["<b>Alto</b>", "Contato físico direto (sexual, pele a pele, boca a pele); contato com lesões, secreções e fluidos; mucosas expostas a respingos; morar com pessoa diagnosticada ou contato com materiais contaminados, sem proteção"],
      ["<b>Médio</b>", "Permanência próxima, no mesmo ambiente fechado, com pessoa sintomática com mpox confirmada, sem EPI adequado"]
    ]},
    { t: "tabela", titulo: "Dose, via e esquema", head: ["Dose", "Via", "Esquema", "Para quem"], rows: [
      ["<b>0,1 mL</b>", "Intradérmica (ID)", "2 doses, intervalo de 28 dias", "Adultos elegíveis (pré e pós-exposição)"],
      ["<b>0,5 mL</b>", "Subcutânea (SC)", "2 doses, intervalo de 28 dias", "Pessoas com HIV (qualquer estado imunológico) ou com imunodeficiência congênita/adquirida, inclusive em uso de imunossupressores"]
    ]},
    { t: "lista", titulo: "A vacina", itens: [
      "<b>Jynneos</b> (vacina varíola símia atenuada, MVA-BN): viva, não replicante; frasco monodose de 0,5 mL;",
      "Conservação: congelada entre <b>−25 °C e −15 °C</b>; descongelada, <b>+2 °C a +8 °C por até 4 semanas</b>;",
      "Via ID: após abrir o frasco, usar em até <b>8 horas</b>. Atenção às datas de descongelamento e de abertura."
    ]},
    { t: "box", v: "alerta", titulo: "Contraindicações e precauções", html: "<p><b>Contraindicações:</b> anafilaxia a dose anterior; pessoa já diagnosticada com mpox e/ou com lesões compatíveis no momento do atendimento.</p><p><b>Precauções (avaliação individual):</b> alergia grave a gentamicina, ciprofloxacino ou proteína do ovo/galinha; gestantes e lactantes; doença febril aguda (quadros leves podem vacinar; ideal aguardar a recuperação).</p><p><b>Outras vacinas:</b> pré-exposição — intervalo de 30 dias de qualquer vacina; pós-exposição — vacinar independentemente de vacinas anteriores.</p>" },
    { t: "lista", titulo: "Registro e ESAVI", itens: [
      "Registrar com CPF ou CNS, vacina, lote, via, fabricante, estratégia e dose no SI-PNI, e-SUS APS ou sistema integrado à RNDS;",
      "Estratégia: <b>Intensificação</b> (pré-exposição) ou <b>Bloqueio</b> (pós-exposição); via SC ou ID; dose D1 ou D2;",
      "Notificar todo ESAVI, inclusive erros de imunização (cadeia de frio, preparo, via)."
    ]}
  ]
}
]);
