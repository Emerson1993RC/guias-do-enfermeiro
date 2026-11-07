/* Guia: Mpox — notificação, investigação e coleta.
   Base: Ficha Individual de Notificação e-SUS Sinan (v. 01/03/2023), Ficha de Investigação de Mpox e-SUS Sinan (V003, 25/06/2025),
   Ficha de Investigação Complementar de Mpox (SESA-CE, versão 1) e Formulário para Diagnóstico de Mpox Ampliado (FOR.545.011, rev. 00).
   `fonte` + `pag` = documento de origem e página. */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).mpox = (window.GUIA_TOPICOS.mpox || []).concat([
{
  id: "como-notificar", num: "01", titulo: "Como notificar: passo a passo e fichas", grupo: "notificacao", pag: 1,
  fonte: "Fichas e-SUS Sinan (MS), Ficha complementar (SESA-CE) e Formulário FOR.545.011",
  resumo: "Notificação no e-SUS Sinan (ficha individual + ficha de investigação de Mpox), investigação complementar e envio da amostra ao LACEN com cadastro no GAL.",
  secoes: [
    { t: "fichas", titulo: "Fichas para baixar e imprimir", guia: "mpox" },
    { t: "fluxo", titulo: "Passo a passo", passos: [
      { pergunta: "1. Ficha Individual de Notificação (e-SUS Sinan)", itens: [
          "Dados da notificação: UF, município, CNES e estabelecimento;",
          "Campos 1–40: data da notificação, CPF/CNS, identificação, gestação (campo 23), endereço e telefone;",
          "Campo 41: doença/agravo notificado com CID;", "Campo 42: sinais e sintomas (lista MedDRA — ex.: erupção cutânea, lesão genital, lesão anal, linfadenopatia, febre);",
          "Campo 43: <b>data de início dos sintomas</b>."],
        sim: { tipo: "atb", html: "Segue para a ficha de investigação." } },
      { pergunta: "2. Ficha de Investigação de Mpox (e-SUS Sinan, V003 — 2025)", itens: [
          "Hospitalização e tratamento (campos 46–52);", "Laboratório e diagnóstico complementar (53–75);",
          "Informações individuais: comportamento sexual, imunossupressão, HIV, IST ativa, vacinação (76–84);",
          "Exposição provável nos 21 dias anteriores aos sintomas (85–105);", "Classificação final e evolução (106–109)."],
        sim: { tipo: "atb", html: "Ver <a href=\"#/mpox/ficha-investigacao\">o que cada bloco pede</a>." } },
      { pergunta: "3. Houve coleta de amostra?",
        sim: { tipo: "alerta", html: "<b>Cadastro no GAL é obrigatório.</b> Notificar no Sinan e <b>enviar a ficha impressa acompanhando a amostra ao LACEN</b>. Após a coleta, manter a amostra <b>sob refrigeração</b> até o envio. Ver <a href=\"#/mpox/coleta-laboratorio\">Coleta e laboratório</a>." },
        nao: { tipo: "talvez", html: "Registrar no campo 53 e seguir a investigação." } },
      { pergunta: "4. Investigação complementar (vigilância)", itens: [
          "Ficha de Investigação Complementar de Mpox (SESA-CE): percurso assistencial, isolamento, exposições e contatos dos 21 dias anteriores;",
          "Ações registradas: orientação de isolamento, busca de contatos, comunicação a outro município e ao estado."],
        sim: { tipo: "atb", html: "Ver <a href=\"#/mpox/investigacao-contatos\">Investigação e contatos</a>." } }
    ], nota: "Os campos citados seguem a numeração das fichas do e-SUS Sinan. A ficha complementar é da Secretaria da Saúde do Ceará (uso da vigilância)." }
  ]
},
{
  id: "ficha-investigacao", num: "02", titulo: "Ficha de investigação: o que cada bloco pede", grupo: "notificacao", pag: 1,
  fonte: "Ficha de Investigação de Mpox, e-SUS Sinan, V003 (25/06/2025)",
  resumo: "Hospitalização e tratamento, laboratório, diagnósticos complementares, informações individuais, exposição de 21 dias, classificação e evolução.",
  secoes: [
    { t: "tabela", titulo: "Blocos da ficha (V003 — 25/06/2025)", head: ["Bloco", "Campos", "O que registrar"], rows: [
      ["<b>Hospitalização e tratamento</b>", "46–52", "Hospitalização (necessidade clínica ou isolamento), data, UTI, UF/município/CNES do hospital. Tratamento antiviral: tecovirimat, brincidofovir, cidofovir, não conhecido, sem tratamento ou outro."],
      ["<b>Diagnóstico molecular (qPCR)</b>", "53–61", "Coleta (sim/não) e data; tipo de amostra; método; resultado (detectável, inconclusivo, não detectável, pendente); valor de CT; caracterização genômica e clado (África Ocidental, Bacia do Congo, outro); número de adesão."],
      ["<b>Diagnóstico complementar</b>", "62–75", "Coleta para diagnóstico complementar e o resultado de cada diagnóstico diferencial (ver <a href=\"#/mpox/diagnostico-diferencial\">Diagnóstico diferencial</a>)."],
      ["<b>Informações individuais</b>", "76–84", "Comportamento sexual e parcerias múltiplas; imunossupressão (doença, medicação ou causa desconhecida); HIV e contagem de CD4; IST ativa e qual; histórico de vacinação contra varíola humana (smallpox) e data."],
      ["<b>Exposição provável</b>", "85–105", "Nos <b>21 dias anteriores</b> ao início dos sintomas: exposição próxima e prolongada sem proteção respiratória; contato físico direto (inclusive sexual) com desconhecidos ou parcerias múltiplas; contato íntimo com caso provável/confirmado; local do contato; nome e telefone do contato; viagem com sintomas; contato com materiais contaminados (roupas de cama, banho, utensílios); profissional de saúde sem EPI adequado; relação com o trabalho; forma provável de transmissão; contato com animais; vínculo epidemiológico."],
      ["<b>Classificação do caso</b>", "106–109", "Classificação final, data de conclusão da investigação, evolução e data (ver <a href=\"#/mpox/classificacao\">Classificação e encerramento</a>)."]
    ]},
    { t: "lista", titulo: "Local do contato (campo 94)", itens: ["Domicílio;", "Vizinhança;", "Trabalho;", "Creche/escola;", "Posto de saúde/hospital;", "Evento social sem contato sexual;", "Evento social com contato sexual;", "Outro;", "Ignorado."] },
    { t: "lista", titulo: "Forma provável de transmissão (campo 103)", itens: ["Do animal para o homem;", "Uso de drogas intravenosas e transfusão;", "Associada ao cuidado de saúde;", "Vertical (mãe-filho);", "Em laboratório, por exposição profissional;", "Sexual;", "Contato com material contaminado (roupas, lençóis, objetos);", "Desconhecida;", "Outra."] }
  ]
},
{
  id: "coleta-laboratorio", num: "03", titulo: "Coleta de amostra e diagnóstico laboratorial", grupo: "laboratorio", pag: 1,
  fonte: "Ficha de Investigação de Mpox (e-SUS Sinan, V003) e Formulário para Diagnóstico de Mpox Ampliado (FOR.545.011)",
  resumo: "Tipos de amostra, cadastro obrigatório no GAL, refrigeração até o LACEN, métodos e alvos do diagnóstico. O teste é diagnóstico, não controle de cura.",
  secoes: [
    { t: "box", v: "alerta", titulo: "Atenção (FOR.545.011)", html: "<ul><li><b>Cadastro no GAL é obrigatório;</b></li><li>Notificar o caso no Sinan e <b>enviar a ficha impressa acompanhando a amostra</b> ao LACEN;</li><li>Após a coleta, <b>acondicionar imediatamente sob refrigeração</b> até o envio ao LACEN;</li><li>Identificar no frasco o <b>nome do paciente, a origem do material biológico e a data da coleta</b>.</li></ul><p><b>O teste tem fins diagnósticos e NÃO de controle:</b> uma vez realizado, não deve ser repetido como controle de cura.</p>" },
    { t: "tabela", titulo: "Tipos de amostra", head: ["Documento", "Amostras previstas"], rows: [
      ["Ficha de investigação (campo 55)", "Swab de secreção de vesícula (superfície e/ou exsudato, de mais de uma erupção); crosta da erupção cutânea; swab orofaríngeo; soro; sêmen; urina; swab retal; swab genital; outro"],
      ["Formulário do diagnóstico ampliado", "Swab de lesão vesicular; fragmento de lesão de crosta; swab perianal"]
    ]},
    { t: "tabela", titulo: "Métodos e resultados registrados", head: ["Item", "Opções"], rows: [
      ["Método (campo 56)", "MPX PCR (específico para Mpox); sorologia; Ortho PCR (orthopoxvírus); Sanger; sequenciamento; NGS; outro"],
      ["Resultado (campo 57)", "Detectável; inconclusivo/indeterminado; não detectável; pendente — se detectável, registrar o valor de CT"],
      ["Clado (campo 60)", "WA — África Ocidental; CB — Bacia do Congo; outro"],
      ["Alvos do diagnóstico ampliado", "OPV — Orthopoxvírus; MPXV — Mpox vírus; VZV — Varicela zoster"]
    ]},
    { t: "lista", titulo: "O formulário do LACEN também pede", itens: [
      "Nome, nome social, leito, unidade de atendimento e data de início dos sintomas;",
      "Uso de antimicrobiano e de antiviral (quais e dias de vigência);",
      "Data da coleta e tipo de amostra;", "Origem: nosocomial ou comunitária;", "Critério de inclusão (ver <a href=\"#/mpox/diagnostico-ampliado\">Diagnóstico ampliado</a>);", "Breve história clínica."
    ]}
  ]
},
{
  id: "diagnostico-ampliado", num: "04", titulo: "Critérios para o diagnóstico ampliado (Orthopoxvírus, Mpox, Varicela zoster)", grupo: "laboratorio", pag: 1,
  fonte: "Formulário para Diagnóstico de Mpox Ampliado — FOR.545.011, rev. 00 (10/01/2023)",
  resumo: "Situações em que o formulário permite pedir a pesquisa ampliada: imunossuprimidos, gestante de risco, Kawasaki, IST disseminada, graves sem definição de caso, entre outras.",
  secoes: [
    { t: "lista", titulo: "Critérios de inclusão (marcar no formulário)", itens: [
      "Ordenhadores com lesão localizada nas mãos;",
      "Paciente HIV positivo em abandono de TARV, com RT-qPCR Não Detectável para Mpox, com forte suspeita de outros Orthopoxvírus e/ou Varicela zoster;",
      "Paciente transplantado (fígado, rim, TMO);",
      "Paciente oncológico (LLA, LLC, outros);",
      "Gestante em situação de risco;",
      "Criança em investigação de doença de Kawasaki;",
      "Suspeita de IST disseminada com teste molecular de CT/NG (Chlamydia trachomatis/Neisseria gonorrhoeae) Não Detectável;",
      "HIV positivo em uso de TARV com RT-qPCR Não Detectável para Mpox e forte suspeita de outros Orthopoxvírus e/ou Varicela zoster;",
      "Diagnóstico de Mpox por RT-qPCR, mas com forte suspeita de coinfecção por outros Orthopoxvírus e/ou Varicela zoster;",
      "Proveniente do sistema penitenciário em situação de surto, com RT-qPCR Não Detectável para Mpox;",
      "Hospitalizado em estado grave, em ventilação mecânica ou não, com forte suspeita de Mpox ou outros Orthopoxvírus e/ou Varicela zoster sem definição de caso;",
      "Outros (descrever)."
    ]}
  ]
},
{
  id: "diagnostico-diferencial", num: "05", titulo: "Diagnóstico diferencial registrado na ficha", grupo: "laboratorio", pag: 1,
  fonte: "Ficha de Investigação de Mpox, e-SUS Sinan, V003 (25/06/2025) — campos 64 a 75 e 81–82",
  resumo: "Varicela/herpes zoster, herpes simples, infecções bacterianas de pele, sífilis, LGV, cancroide, molusco, gonococo disseminado, granuloma inguinal e reação alérgica.",
  secoes: [
    { t: "lista", titulo: "Diagnósticos que a ficha pede para registrar", itens: [
      "Varicela/herpes zoster;", "Herpes simples;", "Infecções bacterianas de pele;", "Sífilis primária ou secundária;", "Linfogranuloma venéreo;",
      "Cancroide;", "Molusco contagioso (poxvírus);", "Infecção gonocócica disseminada;", "Granuloma inguinal;", "Reação alérgica;", "Outras causas de erupção papular ou vesicular (campo 75)."
    ]},
    { t: "box", v: "info", titulo: "Resultado de cada diferencial", html: "<p>1. Confirmado clinicamente · 2. Descartado clinicamente · 3. Confirmado laboratorialmente · 4. Descartado laboratorialmente · 5. Não realizado · 6. Aguardando resultado.</p>" },
    { t: "lista", titulo: "IST ativa (campo 82)", itens: ["Clamídia; gonorreia; herpes genital; cancro mole; donovanose; linfogranuloma venéreo; Mycoplasma genitalium; sífilis; HPV; HTLV; Trichomonas vaginalis; verruga genital; doença inflamatória pélvica; outras."] }
  ]
},
{
  id: "investigacao-contatos", num: "06", titulo: "Investigação complementar e contatos (21 dias)", grupo: "investigacao", pag: 1,
  fonte: "Ficha de Investigação Complementar de Caso de Mpox — SESA-CE, versão 1",
  resumo: "Período de investigação, percurso assistencial e isolamento, exposições, parceiros, coabitantes, fatores de risco dos contatos e ações da vigilância.",
  secoes: [
    { t: "box", v: "diag", titulo: "Período de investigação", html: "<p>De <b>21 dias antes da data de início de qualquer sintoma</b> até o <b>início do isolamento</b>. Modalidade: visita domiciliar, telefone ou presencial na unidade. Situação do paciente: isolamento domiciliar, hospitalizado ou óbito.</p>" },
    { t: "tabela", titulo: "Blocos da ficha complementar", head: ["Bloco", "Conteúdo"], rows: [
      ["1. Notificação e investigação", "Nº do e-SUS Sinan, datas, unidade notificadora, investigador, modalidade e situação do paciente"],
      ["2. Identificação", "Dados pessoais, gestação, residência, ocupação, local de trabalho/estudo, situação de rua, institucionalização (presídio, abrigos)"],
      ["3. Condições de saúde e vacinação", "HIV, PrEP, PEP nos últimos 3 meses, sífilis, Mpox anterior, vacinação contra Mpox (1 ou 2 doses)"],
      ["4. Quadro clínico", "Início dos sintomas e da lesão, sintomas, local das lesões (genital, perianal, anal, oral, face, tronco, membros, mãos, pés), internação e evolução"],
      ["5. Percurso assistencial e isolamento", "Serviços procurados em ordem (data, diagnóstico dado, se recebeu orientação de isolamento); se fez isolamento e onde; motivos para não isolar; atividades e locais frequentados após o início dos sintomas"],
      ["6. Laboratório", "Nº da requisição no GAL e data da coleta"],
      ["7. Exposição (21 dias)", "Locais (sauna, boate, bar, festa privada, evento aberto, teatro/cinema, transporte coletivo), tipo de contato (sexual, beijo, pele a pele não sexual, objetos ou roupas compartilhados), aglomeração, pessoa com lesões, contato com caso"],
      ["8. Viagens (21 dias)", "Destino, datas, locais frequentados, contato com pessoa com lesões tidas como outra doença (ex.: catapora)"],
      ["9. Parceiros e contatos íntimos", "Número e tipo de parceria (fixa, eventual identificável, anônima), uso de preservativo, relações após os sintomas; para cada contato: sintomas, fatores de risco, se foi avisado, se é caso, indicação de vacina"],
      ["10. Contatos domiciliares", "Número de moradores (0 se mora sozinho — não deixar em branco); convivência (cama, banheiro, toalha/roupa, utensílios, mesmo cômodo), sintomas, fatores de risco e indicação de vacina"],
      ["11. Outros contatos", "Contatos próximos no trabalho ou estudo; contato com crianças, gestantes ou imunossuprimidos fora do domicílio"],
      ["12. Considerações finais", "Vínculo com outro caso e ações realizadas"]
    ]},
    { t: "box", v: "alerta", titulo: "Fatores de risco dos contatos (marcar na ficha)", html: "<p><b>Gestação · imunossupressão · HIV · criança &lt; 12 anos · dermatopatia</b> · outros. A ficha registra também, para cada contato, a <b>indicação de vacina</b>.</p>" },
    { t: "lista", titulo: "Motivos para não manter o isolamento (bloco 5)", itens: ["Não recebeu atestado;", "Falta de local;", "Cuidado de outras pessoas;", "Falta de informação;", "Outro."] },
    { t: "lista", titulo: "Ações da vigilância (bloco 12)", itens: ["Orientação de isolamento;", "Busca de contatos;", "Comunicação a outro município;", "Comunicação ao estado."] }
  ]
},
{
  id: "classificacao", num: "07", titulo: "Classificação final e encerramento", grupo: "investigacao", pag: 3,
  fonte: "Ficha de Investigação de Mpox, e-SUS Sinan, V003 (25/06/2025) — campos 106 a 109",
  resumo: "Confirmado (laboratorialmente), descartado, provável, suspeito, perda de seguimento ou exclusão; evolução para cura ou óbito.",
  secoes: [
    { t: "tabela", titulo: "Encerramento do caso", head: ["Campo", "Opções"], rows: [
      ["106 — Classificação final", "1. Confirmado (laboratorialmente) · 2. Descartado · 3. Provável · 4. Suspeito · 5. Perda de seguimento · 6. Exclusão"],
      ["107 — Data de conclusão da investigação", "Data"],
      ["108 — Evolução do caso", "1. Óbito por Mpox · 2. Cura · 3. Óbito por outra causa · 9. Ignorado"],
      ["109 — Data da evolução", "Data"]
    ], nota: "Use o espaço “Informações complementares e observações” para o que não couber nos campos." },
    { t: "box", v: "info", titulo: "Protocolo clínico", html: "<p>Este guia foi montado a partir das fichas e formulários oficiais. A definição de caso, o tempo de isolamento e o manejo clínico devem seguir a nota técnica/guia vigente do Ministério da Saúde e da Secretaria da Saúde do estado.</p>" }
  ]
}
]);
