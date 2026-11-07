/* Guia: Insulinoterapia na APS — Ministério da Saúde · CONASEMS, 2026.
   Tópicos 17–21: "Implementação da insulinoterapia na APS" (caderno 3).
   Tópicos 22–26: "Dispositivos injetores de insulina: as diferentes canetas" (caderno 4).
   Tópico 27: utilitário de cálculo. */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).insulinoterapia = (window.GUIA_TOPICOS.insulinoterapia || []).concat([
{
  id: "fluxo-ubs", num: "17", titulo: "Quem acompanhar e o fluxo em 8 momentos", grupo: "aps", pag: 35,
  fonte: "Implementação da insulinoterapia na APS (MS/CONASEMS, 2026)",
  resumo: "Dez situações para acompanhamento mais próximo e o fluxo identificação → avaliação → plano → orientação → dispensação → registro → retorno → busca ativa.",
  secoes: [
    { t: "lista", titulo: "Priorizar acompanhamento mais próximo de quem tiver ao menos uma destas situações", numerada: true, itens: [
      "DM1 em qualquer idade, em uso de insulina;", "DM2 em uso de NPH, regular ou glargina;", "DM2 que iniciou insulina recentemente (em ajuste);",
      "Em transição de NPH para glargina;", "Hipoglicemia suspeita ou confirmada, sintomática ou não;", "Dificuldade para preparar, aplicar ou armazenar a insulina;",
      "Pessoa idosa frágil, com baixa visão, declínio cognitivo ou sem cuidador;", "Retirada irregular de insulina ou insumos;",
      "Faltas a consultas ou perda de seguimento;", "Glicemias persistentemente fora da meta ou sem registros de glicemia."
    ]},
    { t: "tabela", titulo: "Os 8 momentos do fluxo (podem acontecer num mesmo encontro)", head: ["Momento", "O que fazer"], rows: [
      ["1º Identificação", "Reconhecer quem usa insulina em qualquer ponto: consultas, farmácia, acolhimento, procedimentos, visita domiciliar, grupos, busca ativa do ACS."],
      ["2º Avaliação inicial", "Tipo de diabetes, idade, insulina, dose e horários, outros hipoglicemiantes (glibenclamida, gliclazida), registros de glicemia, hipoglicemias, rotina (alimentação, atividade, sono), autocuidado, rede de apoio, acesso a insumos, armazenamento em casa, faltas/internações, comorbidades, complicações e saúde bucal."],
      ["3º Plano de cuidados", "Pactuar entre os profissionais: seguimento de rotina, revisão do esquema, orientação adicional, grupo, visita domiciliar, eSB/eMulti ou cuidado compartilhado com a RAS. Registrar."],
      ["4º Orientação inicial", "Objetiva, centrada no uso seguro, adaptada a cada pessoa. Orientações apressadas comprometem a segurança."],
      ["5º Dispensação articulada", "Dúvidas, queixas de hipoglicemia, dificuldade com o dispositivo e retirada irregular voltam para a equipe; orientar e avaliar o manuseio do dispositivo."],
      ["6º Registro", "No prontuário/e-SUS APS, em SOAP com CID-10 ou CIAP-2: insulina, dose, horários, orientações, eventos adversos, plano de retorno, busca ativa e encaminhamentos."],
      ["7º Retorno programado", "Todos em início, ajuste ou transição saem com plano de reavaliação. Transição NPH → glargina: monitoramento mais próximo nas primeiras semanas (titulação em intervalos de até 3 dias)."],
      ["8º Busca ativa", "ACS, enfermagem, farmácia e eMulti identificam faltas e retirada irregular e recuperam quem perdeu seguimento."]
    ]},
    { t: "tabela", titulo: "Quadro 1 — Situação × conduta esperada", head: ["Situação na UBS ou no território", "Conduta esperada"], rows: [
      ["Uso de insulina sem retorno programado", "Inserir em acompanhamento longitudinal com retorno definido"],
      ["Relato de hipoglicemia, sintomática ou suspeita", "Se em curso: avaliar e tratar imediatamente; nos graves, acionar urgência. Depois, revisar esquema e fatores associados"],
      ["70 anos ou mais em uso de NPH", "Verificar elegibilidade para glargina, conforme fluxo local"],
      ["Retirada irregular na farmácia", "Busca ativa pelo ACS e avaliar barreiras de acesso"],
      ["Não sabe explicar dose ou horário", "Reorientar com método estruturado e checar a compreensão"],
      ["Idoso que mora sozinho ou com limitação funcional", "Avaliar suporte familiar, acionar ACS/TACS, eMulti e Projeto Terapêutico Singular; Padi se restrito ao domicílio"],
      ["Jejum na meta, mas HbA1c elevada", "<b>Discutir em equipe antes de aumentar a basal</b> (investigar hiperglicemias pós-prandiais, técnica, alimentação, adesão)"]
    ]}
  ]
},
{
  id: "papeis-equipe", num: "18", titulo: "Papéis da equipe e quando acionar", grupo: "aps", pag: 58,
  fonte: "Implementação da insulinoterapia na APS (MS/CONASEMS, 2026)",
  resumo: "Prescritor, enfermeiro, técnico, farmacêutico, apoio da farmácia, eMulti, saúde bucal e ACS: o que cabe a cada um.",
  secoes: [
    { t: "tabela", titulo: "Atribuições", head: ["Profissional", "No cuidado em insulinoterapia"], rows: [
      ["<b>Prescritor</b> (médico ou profissional habilitado)", "Avaliação clínica integral, indicação, prescrição, ajuste de doses, revisão de eventos adversos, metas individualizadas e decisão de compartilhar com a Atenção Especializada."],
      ["<b>Enfermeiro</b>", "Consulta de enfermagem, barreiras ao autocuidado, avaliação contínua de risco, reforço das orientações pactuadas e articulação com ACS, farmácia e eMulti. Costuma ser quem mais conhece a trajetória da pessoa. A consulta de enfermagem e a médica se complementam."],
      ["<b>Técnico de enfermagem</b>", "Glicemia capilar, parâmetros clínicos, sinais de alerta, reforço de orientações e comunicação imediata de intercorrências conforme protocolo."],
      ["<b>Farmacêutico</b>", "Análise da prescrição, dispensação orientada, uso irregular, armazenamento e manuseio, apoio matricial, farmacovigilância e tecnovigilância; Termo de Recebimento e Orientação da caneta."],
      ["<b>Apoio técnico da farmácia</b>", "Identifica atrasos e irregularidades na retirada e dúvidas; comunica ao farmacêutico/equipe, sem avaliação clínica."],
      ["<b>eMulti</b>", "Nutricionista (plano alimentar, manejo nutricional de hipo/hiperglicemia), psicólogo (medo da insulina, sofrimento), assistente social, fisioterapeuta, educação física — apoio matricial, não destino fixo de encaminhamentos."],
      ["<b>Saúde Bucal</b>", "Necessidades de saúde bucal integradas ao plano de cuidado."],
      ["<b>ACS</b>", "Sensor do território: observa e comunica. <b>Não prescreve, não ajusta dose e não substitui avaliação clínica</b>. O TACS pode fazer glicemia capilar conforme formação e protocolos."]
    ]},
    { t: "lista", titulo: "O que o ACS observa no domicílio", itens: [
      "Se há insulina em casa e se está armazenada adequadamente;", "Se sabe o horário e descreve a aplicação com coerência;",
      "Episódios de tontura, tremores, suor frio ou desmaio;", "Se mora sozinho, rede familiar e cuidador disponível;",
      "Dificuldade visual, motora ou cognitiva para usar o dispositivo;", "Faltas a consultas e falhas na retirada de insumos;",
      "Barreiras de alimentação, transporte ou compreensão."
    ]},
    { t: "tabela", titulo: "Quadro 3 — Quem acionar", head: ["Situação", "Quem acionar"], rows: [
      ["Hipoglicemia recorrente ou de difícil controle; troca de insulina; suspeita de erro de medicação", "Médico, enfermeiro, técnico de enfermagem e farmacêutico"],
      ["Dúvidas sobre insumos, validade ou retirada", "Farmacêutico e/ou apoio técnico da farmácia"],
      ["Pessoa que não comparece às consultas", "ACS e equipe de referência da APS"],
      ["Dificuldade alimentar importante ou insegurança alimentar", "Equipe de referência + eMulti (assistência social e nutrição), com ação intersetorial"],
      ["Medo intenso de aplicar insulina ou sofrimento psíquico", "Equipe de referência + eMulti"],
      ["Idoso com pouca rede de apoio", "ACS, enfermeiro, técnico, eMulti e família/cuidador"],
      ["Esquema complexo, controle difícil ou alta variabilidade", "Prescritor da APS e avaliar compartilhamento com a Atenção Especializada"]
    ], nota: "Acionar outro profissional não transfere a responsabilidade: amplia o olhar e compartilha o cuidado." }
  ]
},
{
  id: "sinais-alerta", num: "19", titulo: "Sinais de alerta e excesso de insulina basal", grupo: "aps", pag: 89,
  fonte: "Implementação da insulinoterapia na APS (MS/CONASEMS, 2026), conforme Nota Técnica nº 169/2026",
  resumo: "Situações que exigem reavaliação sem esperar a consulta de rotina e critérios objetivos de excesso de basal (DM2 e DM1 pediátrico).",
  secoes: [
    { t: "lista", titulo: "Situações de maior risco", itens: [
      "Hipoglicemia confirmada ou suspeita, ainda que assintomática;", "Quedas, desmaios ou confusão mental em quem usa insulina;", "Aplicação de insulina sem alimentação regular;",
      "Idoso frágil, com declínio cognitivo ou sem suporte;", "Baixa visão ou dificuldade motora não compensada;", "Retirada irregular de insulina;", "Armazenamento inadequado;",
      "Doses basais elevadas sem melhora do controle;", "Jejum na meta com HbA1c acima da meta;", "Internação recente por descompensação;",
      "Sem registros de glicemia após ajuste recente;", "Transição recente entre tipos de insulina;", "Grande variabilidade glicêmica em crianças e adolescentes com DM1."
    ]},
    { t: "box", v: "alerta", titulo: "Excesso de insulina basal — Nota Técnica nº 169/2026", html:
      "<p><b>DM2:</b> basal &gt; 0,5 UI/kg/dia; HbA1c acima da meta com jejum adequado; hipoglicemias (com ou sem sintomas); queda da glicemia &gt; 50 mg/dL entre dormir e despertar.</p>" +
      "<p><b>Crianças e adolescentes com DM1:</b> basal &gt; 50% da dose total diária; queda noturna &gt; 30 mg/dL (crianças) ou &gt; 50 mg/dL (adolescentes); hipoglicemia com grande variabilidade.</p>" +
      "<p><b>Conduta:</b> reavaliar o esquema, <b>evitar aumentar a basal</b> e, se necessário, compartilhar o cuidado com a Atenção Especializada.</p>" },
    { t: "tabela", titulo: "Quadro 5 — Sinal × resposta da equipe", head: ["Sinal de alerta", "Resposta esperada"], rows: [
      ["Hipoglicemia, sintomática ou suspeita", "Avaliação clínica imediata e revisão do esquema"],
      ["Queda noturna importante da glicemia", "Reavaliar a dose basal antes de qualquer aumento"],
      ["Jejum na meta com HbA1c elevada", "Não aumentar a basal automaticamente; discutir em equipe"],
      ["Idoso sozinho em uso de insulina", "Acionar ACS, família ou cuidador e eMulti"],
      ["Dúvida sobre dose ou horário", "Reorientar com método estruturado e registrar"],
      ["Retirada irregular na farmácia", "Busca ativa e avaliar barreiras de acesso"],
      ["Armazenamento incorreto no domicílio", "Reavaliar o domicílio e orientar o armazenamento"]
    ]},
    { t: "tabela", titulo: "Implicação de cada insulina para a UBS (Quadro 4)", head: ["Insulina", "Atenção da equipe"], rows: [
      ["NPH", "Hipoglicemia, horários, regularidade alimentar compatível com o pico, padrão de retirada"],
      ["Regular", "Compreensão da relação aplicação × refeição (~30 min antes); atrasar/omitir refeição aumenta o risco"],
      ["Glargina", "Elegibilidade, prescrição válida, horário fixo, acompanhamento das primeiras semanas"],
      ["NPH + Regular / Glargina + Regular", "Entender basal × prandial; não trocar nem suspender automaticamente a prandial"]
    ]}
  ]
},
{
  id: "longitudinal-ras", num: "20", titulo: "Acompanhamento longitudinal, registro e RAS", grupo: "aps", pag: 92,
  fonte: "Implementação da insulinoterapia na APS (MS/CONASEMS, 2026)",
  resumo: "Itens mínimos de registro, como recuperar quem perdeu seguimento e quando compartilhar o cuidado com a Atenção Especializada.",
  secoes: [
    { t: "lista", titulo: "Registro mínimo em cada atendimento", itens: [
      "Tipo de insulina em uso;", "Dose e horários; motivo da mudança, se houver;", "Glicemias disponíveis e padrão observado;", "Ocorrência de hipoglicemia;",
      "Orientações realizadas;", "Insumos fornecidos ou pendentes;", "Data e tipo do retorno programado;", "Profissional responsável;",
      "Necessidade de busca ativa;", "Necessidade de compartilhar com a Atenção Especializada."
    ]},
    { t: "box", v: "trat", titulo: "Retorno após início ou mudança de esquema", html: "<p>Retorno ou contato em <b>curto prazo</b>, conforme o risco: revisar glicemias, checar hipoglicemia, conferir dose e horário, avaliar a técnica, verificar retirada de insumos e registrar. Pessoas estáveis: consultas periódicas, exames conforme protocolo, revisão da prescrição, avaliação de complicações e reforço do autocuidado.</p><p><b>Perda de seguimento:</b> acionar ACS, verificar dispensação com a farmácia, entender o motivo, reorganizar o retorno e discutir em reunião. É sinal de que algum elo do fluxo precisa ser reorganizado, não culpa do usuário.</p>" },
    { t: "lista", titulo: "Quando discutir ou compartilhar com a Atenção Especializada", itens: [
      "DM1 recém-diagnosticado;", "Criança ou adolescente com grande variabilidade glicêmica;", "Hipoglicemias recorrentes ou graves;",
      "Suspeita de excesso de basal sem controle global adequado;", "Dificuldade persistente de controle apesar de acompanhamento estruturado;",
      "Gestação;", "Doença renal avançada;", "Doença cardiovascular;", "Múltiplas comorbidades com fragilidade importante;",
      "Dúvidas sobre esquema complexo;", "Eventos adversos ou situações não usuais."
    ]},
    { t: "box", v: "info", titulo: "Compartilhar não é transferir", html: "<p>A APS continua como referência longitudinal: ler a contrarreferência, incorporá-la ao plano e dar continuidade. Prescrições da Atenção Especializada devem ser avaliadas e ter a continuidade organizada conforme validade, competências e fluxos locais, evitando interrupções. Evite os dois extremos: encaminhar só porque usa insulina, ou assumir casos complexos sem apoio da rede.</p>" }
  ]
},
{
  id: "checklist-equipe", num: "21", titulo: "Checklist da equipe para a insulinoterapia", grupo: "aps", pag: 108,
  fonte: "Implementação da insulinoterapia na APS (MS/CONASEMS, 2026)",
  resumo: "Oito perguntas para usar na reunião de equipe e verificar se o cuidado está organizado, seguro e contínuo.",
  secoes: [
    { t: "box", v: "info", titulo: "Pergunta orientadora", html: "<p><b>Se uma pessoa que vive com diabetes em insulinoterapia chegar hoje à UBS, existe um caminho seguro para acolher, acompanhar e manter no cuidado?</b> Use na reunião de equipe; os itens são interdependentes e não têm sequência fixa.</p>" },
    { t: "checklist", titulo: "Checklist (Figura 4)", itens: [
      ["Mapear o território", "A UBS sabe quem usa insulina? O prontuário identifica tipo de insulina, esquema e pessoas em maior risco ou vulnerabilidade?"],
      ["Definir entrada e prioridade no fluxo", "Há critérios pactuados para quem requer acompanhamento mais próximo (DM1, DM2 em insulina, hipoglicemia, fragilidades, faltas, retirada irregular)?"],
      ["Pactuar papéis e responsabilidades", "Médico, enfermeiro, técnico, ACS, farmacêutico, farmácia, eSB e eMulti sabem o que observar, registrar e quando acionar outro profissional?"],
      ["Integrar farmacêutico e equipe da farmácia", "Dúvidas na dispensação, retirada irregular, queixas de hipoglicemia, problemas com dispositivos e suspeitas de eventos adversos voltam à equipe?"],
      ["Registrar para dar continuidade", "O prontuário registra insulina, dose, horários, orientações, eventos adversos, plano de retorno, busca ativa e compartilhamento com a RAS?"],
      ["Programar reavaliação", "Toda pessoa em início, ajuste ou transição sai com plano de reavaliação, com periodicidade conforme o risco?"],
      ["Realizar busca ativa", "ACS, enfermagem, técnicos, farmacêutico e farmácia reconhecem faltas, perda de seguimento e retirada irregular e ajudam a reorganizar o retorno?"],
      ["Reavaliar riscos e discutir em equipe", "Hipoglicemia, quedas, idoso sem apoio, armazenamento inadequado, perda de seguimento e jejum na meta com HbA1c elevada entram na pauta e geram plano?"]
    ]}
  ]
},
{
  id: "hipoglicemia", num: "22", titulo: "Hipoglicemia: níveis e tratamento", grupo: "dispositivos", pag: 22,
  fonte: "Dispositivos injetores de insulina: as diferentes canetas (MS/CONASEMS, 2026)",
  resumo: "Nível 1: 15 g de carboidrato; nível 2: 30 g; nível 3: emergência (SAMU 192). Reavaliar em 15 minutos. Criança: 0,3 g/kg.",
  secoes: [
    { t: "tabela", titulo: "Níveis e conduta (adultos)", head: ["Nível", "Definição", "Como tratar"], rows: [
      ["<b>Nível 1</b>", "Glicemia ≥ 54 e &lt; 70 mg/dL", "<b>15 g</b> de carboidrato de absorção rápida"],
      ["<b>Nível 2</b>", "Glicemia &lt; 54 mg/dL", "<b>30 g</b> de carboidrato de absorção rápida (mel, açúcar ou gel)"],
      ["<b>Nível 3</b>", "Qualquer valor, com alteração mental ou física que exige ajuda de terceiros", "<b>Emergência médica</b>: acionar SAMU 192"]
    ], nota: "Reavaliar a glicemia capilar após <b>15 minutos</b>; se persistir, repetir o tratamento. Gordura e proteína não servem para corrigir (retardam a resposta)." },
    { t: "lista", titulo: "15 g de carboidrato equivalem a (uma das opções)", itens: [
      "150 mL de refrigerante comum (não zero);", "150 mL de suco de fruta sem adição de açúcar (ou de laranja);", "1 colher de sopa de açúcar diluída em água;",
      "3 sachês de açúcar;", "1 colher de sopa de mel;", "3 balas."
    ]},
    { t: "box", v: "alerta", titulo: "Segurança", html: "<p><b>Só dar algo pela boca se a pessoa estiver consciente e conseguir engolir com segurança.</b> Com alteração de consciência ou incapacidade de engolir: não oferecer alimentos, líquidos, açúcar ou mel (risco de aspiração) e acionar o <b>SAMU 192</b>. Inconsciente e respirando: <b>posição lateral de segurança</b>. Se houver <b>glucagon</b> prescrito, pessoa previamente treinada (familiar ou cuidador) pode aplicá-lo conforme as instruções, sem atrasar a emergência.</p>" },
    { t: "hipo", titulo: "Crianças: quantidade de carboidrato pelo peso (ISPAD 2022)" },
    { t: "box", v: "info", titulo: "Depois de corrigir", html: "<p><b>Prevenir novo episódio:</b> avaliar medicamentos, horário da insulina, atividade nas próximas horas e distância da próxima refeição; fazer um lanche com carboidratos, fibras e proteínas ou antecipar a refeição.</p><p><b>Investigar a causa:</b> aplicou insulina em excesso? Reduziu a alimentação ou pulou refeições? Aumentou a atividade física? Bebeu álcool? Teve vômitos ou diarreia?</p>" }
  ]
},
{
  id: "educacao-adces7", num: "23", titulo: "Educação em diabetes: os 7 comportamentos", grupo: "dispositivos", pag: 12,
  fonte: "Dispositivos injetores de insulina: as diferentes canetas (MS/CONASEMS, 2026)",
  resumo: "Modelo ADCES7: alimentação, atividade física, monitorização, resolução de problemas, redução de riscos, enfrentamento e tomar medicamentos.",
  secoes: [
    { t: "tabela", titulo: "Os 7 comportamentos de autocuidado (ADCES7)", head: ["Comportamento", "Inclui"], rows: [
      ["1. Alimentação adequada e saudável", "Distribuição de carboidratos, alimentos que afetam a glicemia, rótulos, planejamento, contagem de carboidratos quando indicada — com base no Guia Alimentar"],
      ["2. Ser fisicamente ativo", "Atividade na rotina: melhora a sensibilidade à insulina, reduz glicemia, peso e risco cardiovascular"],
      ["3. Monitorização", "Glicemia capilar, sensores, variações ao longo do tempo e uso dos dados para ajustes"],
      ["4. Resolução de problemas", "Manejo da hipoglicemia, doenças intercorrentes, ajuste de doses conforme orientação, causas de hiperglicemia persistente"],
      ["5. Redução de riscos", "Vacinação, pés, olhos, pressão e lipídios, risco cardiovascular, rastreamento renal e cardiovascular"],
      ["6. Enfrentamento saudável", "Estresse, sofrimento emocional, burnout do diabetes, apoio familiar, social e profissional"],
      ["7. Tomar medicamentos", "Técnica correta de aplicação, <b>rodízio dos locais</b>, adesão, conhecer ação, horários e efeitos adversos"]
    ]},
    { t: "lista", titulo: "Guia Alimentar — recomendações para quem vive com diabetes", itens: [
      "Basear a alimentação em alimentos in natura ou minimamente processados;", "Usar açúcar, sal, óleos e gorduras em pequenas quantidades (individualizar);",
      "Limitar processados;", "Evitar ultraprocessados (refrigerantes, biscoitos recheados, salgadinhos, macarrão instantâneo);",
      "Comer com regularidade e atenção, evitando “beliscar”;", "Ambientes adequados para as refeições;", "Valorizar a comida feita em casa;",
      "Ao comer fora, preferir refeições preparadas na hora."
    ]}
  ]
},
{
  id: "seringas-canetas", num: "24", titulo: "Seringas e canetas", grupo: "dispositivos", pag: 37,
  fonte: "Dispositivos injetores de insulina: as diferentes canetas (MS/CONASEMS, 2026)",
  resumo: "Seringa de 100 UI marca de 2 em 2; de 30/50 UI, de 1 em 1. Glargina e degludeca nunca misturar. Canetas descartáveis e reutilizáveis.",
  secoes: [
    { t: "tabela", titulo: "Seringas", head: ["Aspecto", "Orientação"], rows: [
      ["Capacidades", "100 UI (escala de <b>2 em 2</b> unidades); 50 UI e 30 UI (escala de <b>1 em 1</b>, mais precisas para doses menores)"],
      ["Agulha", "Preferir agulha fixa (sem espaço morto). No SUS, a partir de 6 mm: aplicar com <b>prega cutânea</b>; ângulo conforme comprimento da agulha, idade, biotipo e local"],
      ["Misturas", "NPH pode ser associada à regular ou às análogas rápidas lispro/asparte (conforme prescrição e bula); misturas com análogas: aplicar imediatamente. <b>Glargina e degludeca não devem ser misturadas</b>"],
      ["Limitações", "Exigem destreza manual e acuidade visual"]
    ]},
    { t: "tabela", titulo: "Canetas", head: ["Tipo", "Características"], rows: [
      ["<b>Descartável</b>", "Vem preenchida de fábrica (geralmente 300 UI = 3 mL); descartada inteira ao terminar ou ao vencer o prazo"],
      ["<b>Reutilizável</b>", "Troca-se o refil de 3 mL. Partes: corpo (janela de dose, seletor, botão de injeção, êmbolo), suporte do carpule e tampa. Exemplos no SUS: Biopemm (glargina) e GlobalX U2 (NPH e regular)"]
    ], nota: "Usar só refis compatíveis com o modelo da caneta e nunca transferir insulina entre dispositivos. A oferta de canetas reutilizáveis ou descartáveis depende das aquisições do Ministério da Saúde. Bomba de insulina não está incorporada ao SUS." },
    { t: "box", v: "info", titulo: "Lembre", html: "<p>Erros de técnica comprometem a absorção, aumentam a variabilidade e desmotivam a adesão, mesmo com a melhor caneta. Passo a passo, troca do refil e solução de falhas: ver <a href=\"#/insulinoterapia/caneta-passo-a-passo\">Passo a passo com caneta</a> e <a href=\"#/insulinoterapia/caneta-reutilizavel\">Caneta reutilizável</a>.</p>" }
  ]
},
{
  id: "armazenamento", num: "25", titulo: "Armazenamento, validade e transporte", grupo: "dispositivos", pag: 49,
  fonte: "Dispositivos injetores de insulina: as diferentes canetas (MS/CONASEMS, 2026)",
  resumo: "Lacrada: 2–8 °C sem congelar. Em uso: até 30 °C, longe da luz e do calor, 28 dias (degludeca 56). Anotar a data de abertura.",
  secoes: [
    { t: "duas", titulo: "Lacrada × em uso", a: { tipo: "atb", rotulo: "Lacrada (nunca usada)", passos: [
        "Geladeira <b>2 °C a 8 °C</b>, sem congelar, na embalagem original;", "Prateleiras centrais ou inferiores, longe das paredes, da porta e do congelador;",
        "Válida até a data impressa (geralmente 2 a 3 anos);", "<b>Se congelar, descartar.</b>" ] },
      b: { tipo: "atb", rotulo: "Em uso (aberta)", passos: [
        "Temperatura ambiente <b>até 30 °C</b>, protegida da luz solar e do calor (fogão, carro fechado);", "Fora da geladeira a aplicação dói menos;",
        "Prazo conta do <b>primeiro uso</b>, conforme a bula; refrigerar não prolonga o prazo;", "<b>Anotar a data do primeiro uso</b> no rótulo." ] } },
    { t: "tabela", titulo: "Figura 10 — Validade após aberta", head: ["Insulina", "Apresentação", "Antes de aberta (2–8 °C)", "Após aberta"], rows: [
      ["Humana NPH", "Frasco, refil/carpule ou caneta", "Até a validade da embalagem", "<b>28 dias</b>"],
      ["Humana Regular", "Frasco, refil/carpule ou caneta", "Até a validade da embalagem", "<b>28 dias</b>"],
      ["Análoga lispro / asparte", "Frasco, refil/carpule ou caneta", "Até a validade da embalagem", "<b>28 dias</b>"],
      ["Análoga ultrarrápida (Faster aspart)", "Frasco, refil/carpule ou caneta", "Até a validade da embalagem", "<b>28 dias</b>"],
      ["Análoga degludeca", "Caneta preenchida", "Até a validade da embalagem", "<b>56 dias</b>"],
      ["Análoga glargina", "Frasco, refil/carpule ou caneta", "Até a validade da embalagem", "<b>28 dias</b>"]
    ], nota: "Baseado nas bulas das insulinas distribuídas pelo SUS; sempre confirme na bula do produto e no manual do dispositivo." },
    { t: "lista", titulo: "Situações especiais e transporte", itens: [
      "<b>Regiões &gt; 30 °C:</b> refrigerar ou usar bolsa térmica com gel reutilizável, sem contato direto e sem congelar; tirar da geladeira 15 a 30 min antes da aplicação;",
      "<b>Pessoas em situação de rua:</b> articular com Consultório na Rua/APS um local seguro para guardar a insulina;",
      "<b>Sem geladeira</b> (algumas populações indígenas e ribeirinhas): plano local de conservação e dispensação; reforçar a monitorização (a glicemia, sozinha, não comprova a conservação);",
      "<b>Dia a dia:</b> bolsa comum protegida do sol; acima de 30 °C, bolsa térmica;",
      "<b>Viagens:</b> bolsa térmica ou isopor com gel, <b>nunca em contato direto com gelo</b> (usar barreira: plástico bolha, toalha, papelão);",
      "<b>Avião:</b> sempre na <b>bagagem de mão</b> (o porão pode congelar)."
    ]},
    { t: "box", v: "alerta", titulo: "Por que importa", html: "<p>Calor ou congelamento desnaturam a insulina, muitas vezes sem mudar o aspecto: a pessoa continua aplicando uma insulina ineficaz, com hiperglicemia inexplicável e risco de cetoacidose.</p>" }
  ]
},
{
  id: "descarte", num: "26", titulo: "Descarte de resíduos", grupo: "dispositivos", pag: 61,
  fonte: "Dispositivos injetores de insulina: as diferentes canetas (MS/CONASEMS, 2026)",
  resumo: "Agulhas, seringas, lancetas e refis em coletor rígido (até ¾) entregue no ponto indicado pelo município. Nunca no lixo comum.",
  secoes: [
    { t: "lista", titulo: "No domicílio", itens: [
      "Nunca reencapar com a mão livre, dobrar ou quebrar agulhas e seringas;",
      "Agulhas, seringas e lancetas: logo após o uso, em <b>coletor para perfurocortantes</b> ou, na falta, <b>recipiente rígido, resistente à perfuração e com tampa</b>;",
      "Coletor específico (caixa amarela): trocar ao atingir a marca de segurança; recipiente doméstico: encher até no máximo <b>¾</b>;",
      "<b>Refis de vidro vazios:</b> no mesmo tipo de recipiente, com cuidado para não quebrar;",
      "<b>Caneta descartável vazia:</b> sem a agulha, conforme a orientação local para materiais contaminados por medicamentos;",
      "<b>Caneta reutilizável</b> (alguns modelos duram 3 anos — conferir o manual): ao fim do prazo ou com defeito, substituir; descartar sem agulha e sem carpule, conforme fabricante e fluxo municipal;",
      "Entregar o recipiente fechado no ponto indicado pela UBS, Vigilância Sanitária ou gestão municipal. <b>Nunca</b> em lixo comum, reciclável ou via pública."
    ]},
    { t: "box", v: "info", titulo: "Na UBS", html: "<p>Todo estabelecimento de saúde deve ter <b>PGRSS</b> atualizado (RDC Anvisa nº 222/2018), com segregação no momento da geração e recipientes resistentes, identificados e de capacidade compatível.</p>" }
  ]
},
{
  id: "calc-insulina", num: "27", titulo: "Calculadoras de insulina", grupo: "utilitarios", pag: 103,
  fonte: "Introdução ao diabetes mellitus e Implementação da insulinoterapia na APS (MS/CONASEMS, 2026)",
  resumo: "Dose inicial de NPH, divisão em duas doses, conversão NPH → glargina, fator de correção e limites de dose por kg.",
  secoes: [
    { t: "insulina", titulo: "Calculadoras de apoio" }
  ]
}
]);
