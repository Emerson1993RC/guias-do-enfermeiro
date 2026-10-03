/* Guia: Hanseníase — PCDT da Hanseníase (Ministério da Saúde, 2022).
   Tópicos 11–23: reações hansênicas, acompanhamento, vigilância e utilitários. */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).hanseniase = (window.GUIA_TOPICOS.hanseniase || []).concat([
{
  id: "reacao-tipo1", num: "11", titulo: "Reação tipo 1 (reação reversa)", grupo: "reacoes", pag: 60,
  resumo: "Piora abrupta das lesões e neurite. Prednisona 1 mg/kg/dia com redução gradual, mínimo de 6 meses, e profilaxia para estrongiloidíase.",
  secoes: [
    { t: "box", v: "diag", titulo: "Quadro clínico", html:
      "<p>Acomete especialmente as formas dimorfas (pode ocorrer em PB e MB), antes, durante ou após o tratamento. Início abrupto:</p>" +
      "<ul><li>Lesões preexistentes mais visíveis, eritemato-vinhosas, edemaciadas, às vezes dolorosas; surgimento de lesões aparentemente novas;</li>" +
      "<li><b>Neurite</b>: dor aguda espontânea ou à palpação dos nervos, com perda de função sensitiva, motora e/ou autonômica;</li>" +
      "<li>Atentar para queixas de piora da dor nos membros, queda frequente de objetos das mãos e aumento da dormência nas mãos e pés.</li></ul>" },
    { t: "box", v: "alerta", titulo: "Tratar imediatamente", html: "<p>Pelo risco de dano neural, o tratamento deve ser instituído <b>imediatamente</b>, com monitoramento clínico e da função neural (ANS). <b>Manter a PQT-U</b> se o paciente ainda não completou os critérios de alta.</p>" },
    { t: "esquemas", titulo: "Corticoterapia", cols: ["Posologia"], grupos: [
      { nome: "Medicamento de escolha", itens: [
        { f: "Prednisona", a: "<b>1 mg/kg/dia</b> VO. Reduzir em torno de <b>10 mg a cada 15 dias</b>; ao atingir <b>20 mg/dia</b>, reduzir <b>5 mg a cada 15 dias</b>; ao atingir <b>5 mg/dia</b>, manter por 15 dias e depois <b>5 mg em dias alternados</b> por mais 15 dias. Manter, em média, por <b>no mínimo seis meses</b>, monitorando a função neural e os efeitos colaterais." }
      ]},
      { nome: "Profilaxia da estrongiloidíase disseminada (no início da corticoterapia)", itens: [
        { f: "Albendazol", a: "400 mg/dia, dose única diária, por 3 dias consecutivos" },
        { f: "OU Ivermectina", a: "Dose única de 200 mcg/kg" }
      ]}
    ], nota: "Monte o cronograma de redução na <a href=\"#/hanseniase/desmame-prednisona\"><b>calculadora de desmame</b></a>." }
  ]
},
{
  id: "reacao-tipo2", num: "12", titulo: "Reação tipo 2 (eritema nodoso hansênico)", grupo: "reacoes", pag: 61,
  resumo: "Nódulos dolorosos e sintomas sistêmicos em MB. Talidomida 100–400 mg/dia; corticoide se neurite, orquite ou episclerite.",
  secoes: [
    { t: "box", v: "diag", titulo: "Quadro clínico", html:
      "<p>Exclusiva de <b>multibacilares</b> (virchowianos e dimorfos com alta carga bacilar). Nódulos subcutâneos dolorosos, geralmente múltiplos, em qualquer área (podem necrosar). Pode haver febre, artralgias, mialgias, dor óssea, edema, linfadenomegalia, neurite, irite/episclerite, orquite e nefrite.</p>" +
      "<p><b>Evolução:</b> aguda (&lt; 6 meses), recorrente (novo episódio ≥ 28 dias após suspender o antirreacional) ou crônica (&gt; 6 meses ou remissões &lt; 28 dias).</p>" },
    { t: "esquemas", titulo: "Tratamento", cols: ["Posologia"], grupos: [
      { nome: "Preferencial", itens: [
        { f: "Talidomida", a: "<b>100 a 400 mg/dia</b> VO, conforme a intensidade do quadro, com redução gradativa conforme a resposta. <b>Uso exclusivo em adultos.</b>" }
      ]},
      { nome: "Com orquite, episclerite e/ou neurite aguda", itens: [
        { f: "Prednisona", a: "Mesmas doses da reação tipo 1 (1 mg/kg/dia com redução gradual)." },
        { f: "+ Ácido acetilsalicílico", a: "100 mg/dia como profilaxia de tromboembolismo <b>quando associar talidomida e corticoide</b>." }
      ]},
      { nome: "Alternativa (contraindicação à talidomida e sem indicação de corticoide — ex.: mulheres com potencial reprodutivo sem neurite)", itens: [
        { f: "Pentoxifilina", a: "Comprimido de 400 mg. Corrigir a dose na insuficiência renal; após regressão, reduzir paulatinamente até suspender. <b>Contraindicada em menores de 18 anos.</b>" }
      ]}
    ]},
    { t: "box", v: "alerta", titulo: "Talidomida — teratogenicidade", html:
      "<p>Teratogênica <b>mesmo em dose única de 50 mg</b>. Proibida para grávidas ou lactantes. Em pessoas com potencial reprodutivo, apenas se indispensável e esgotados os outros recursos:</p>" +
      "<ul><li><b>Dois métodos contraceptivos</b>, ao menos um de alta eficácia (injetável, implante, DIU) + um de barreira;</li>" +
      "<li>Iniciar a contracepção ao menos <b>4 semanas antes</b>, manter durante e por ao menos <b>4 semanas após</b>;</li>" +
      "<li><b>Teste de gravidez</b> 24 h antes de iniciar, a cada retirada e semanalmente no 1º mês; dispensação condicionada a teste recente (até 24 h);</li>" +
      "<li>Homens: preservativo nas relações com mulheres com risco de engravidar, mesmo vasectomizados, até 4 semanas após a última dose.</li></ul>" +
      "<p>Suspeita de exposição fetal: notificar à Anvisa (Vigimed).</p>" }
  ]
},
{
  id: "neurite-dor", num: "13", titulo: "Neurite e dor neuropática", grupo: "reacoes", pag: 38,
  resumo: "Neurite aguda exige imobilização e corticoide supervisionado. Neurite silenciosa só é detectada pela ANS periódica.",
  secoes: [
    { t: "tabela", titulo: "Tipos de comprometimento neural", head: ["Situação", "Características", "Conduta"], rows: [
      ["<b>Neurite aguda</b>", "Dor espontânea ou à palpação dos nervos, por vezes com limitação dos cotovelos e tornozelos, com perda funcional sensitiva, motora e/ou autonômica. Pode ocorrer até 5 anos após o tratamento.", "<b>Imobilização</b> do membro afetado e uso <b>supervisionado de corticosteroides</b>."],
      ["<b>Neurite silenciosa</b>", "Inflamação insidiosa sem dor; perda de sensibilidade e força instala-se lentamente.", "Reconhecida pela <b>ANS periódica</b>; piora da função neural indica corticoterapia, independentemente de dor ou lesões na pele."],
      ["<b>Dor neuropática aguda</b>", "Dor com perda sensorial no contexto das reações.", "Indicação precisa de corticoterapia."],
      ["<b>Dor neuropática crônica</b>", "Formigamento e queimação, sem inflamação ou dano funcional, especialmente 3 a 5 anos após o tratamento.", "Tratar conforme o PCDT da Dor Crônica."]
    ]},
    { t: "box", v: "info", titulo: "Encaminhamento cirúrgico — considerar quando", html: "<p>Contraindicação formal a corticosteroides, abscesso de nervo, neurite que não responde ao tratamento clínico em <b>quatro semanas</b>, reações recorrentes ou subentrantes, subluxação do nervo ulnar e neuropatia crônica com déficit neural tardio e dor.</p>" },
    { t: "box", v: "alerta", titulo: "Olhos", html: "<p>O comprometimento ocular costuma ser insidioso (lagoftalmo, anestesia de córnea, irite/iridociclite nas reações, com risco de cegueira). A avaliação dos olhos deve fazer parte da rotina de todas as consultas.</p>" }
  ]
},
{
  id: "reacoes-criancas", num: "14", titulo: "Reações hansênicas em crianças", grupo: "reacoes", pag: 62,
  resumo: "Tipo 1: corticoide adaptado ao peso, orientação pediátrica se > 3 meses ou > 1 mg/kg. Tipo 2: clofazimina; talidomida proibida < 18 anos.",
  secoes: [
    { t: "box", v: "trat", titulo: "Reação tipo 1", html:
      "<ul><li>Corticoide baseado nos regimes de adultos, <b>adaptado ao peso e idade</b>;</li>" +
      "<li>Buscar <b>orientação pediátrica</b> se precisar de mais de 3 meses de tratamento ou doses acima de 1 mg/kg;</li>" +
      "<li>Dias alternados podem reduzir a supressão adrenal;</li>" +
      "<li>Alertar os pais sobre o risco de <b>insuficiência adrenal aguda</b> se suspender de repente e sobre doses não prescritas; guardar fora do alcance das crianças;</li>" +
      "<li>Anti-helmíntico (estrongiloides) no início da corticoterapia.</li></ul>" },
    { t: "esquemas", titulo: "Reação tipo 2 (ENH) em crianças", cols: ["Posologia"], grupos: [
      { nome: "Tratamento", itens: [
        { f: "Clofazimina", a: "1º mês: 1,5 a 2 mg/kg, <b>3 vezes ao dia</b><br>2º mês: 1,5 a 2 mg/kg, <b>2 vezes ao dia</b><br>3º mês: 1,5 a 2 mg/kg, <b>1 vez ao dia</b><br><b>Dose máxima diária: 300 mg.</b> Fracionar, administrar com alimentos e suspender por alguns dias em gastroenterite aguda." }
      ]}
    ], nota: "Risco de dor abdominal aguda por sobrecarga de clofazimina — escolha avaliada por clínicos experientes. <b>Talidomida não autorizada em menores de 18 anos.</b> Pentoxifilina contraindicada em menores de 18 anos." }
  ]
},
{
  id: "monitoramento-alta", num: "15", titulo: "Acompanhamento durante e após a PQT-U", grupo: "seguimento", pag: 103,
  resumo: "Consulta e dose supervisionada mensais, ANS trimestral, orientações na alta e seguimento das reações por até 5 anos.",
  secoes: [
    { t: "lista", titulo: "Durante a PQT-U", itens: [
      "<b>Dose mensal supervisionada</b>: atesta a adesão e permite avaliar queixas, eventos adversos, reações e função neural;",
      "<b>ANS</b> no diagnóstico, a cada 3 meses e na última dose; repetir sempre que surgirem queixas de dano neural;",
      "Hemograma nos primeiros meses (dapsona), sempre que possível;",
      "Avaliação odontológica (focos dentários associam-se a reações) e avaliação ampla de comorbidades;",
      "Atualizar a <b>caderneta de saúde</b> da pessoa acometida pela hanseníase."
    ]},
    { t: "box", v: "diag", titulo: "Na alta por cura", html: "<p>Informar que o <b>risco de reações e neurite continua</b> após a alta, por período variável conforme a forma clínica e o IB inicial; orientar retorno à unidade diante de qualquer intercorrência ou dúvida.</p>" },
    { t: "lista", titulo: "Após a PQT-U", itens: [
      "Alta na vigência de reação: manter consultas regulares na UBS, com medicação e ANS enquanto persistirem as reações (até cerca de 5 anos);",
      "Lesões persistentes com dúvida sobre a resposta: investigar resistência; acompanhar em intervalos regulares (ex.: trimestrais), fora do registro ativo e sem antibiótico;",
      "Baciloscopia de seguimento com intervalo não inferior a 1 ano, nos mesmos locais de coleta;",
      "Continuar monitorando comorbidades."
    ]}
  ]
},
{
  id: "contatos", num: "16", titulo: "Investigação de contatos e BCG", grupo: "seguimento", pag: 101,
  resumo: "Avaliar todos os contatos domiciliares dos últimos 5 anos. BCG para maiores de 1 ano sem vacina ou com 1 dose. Teste rápido orienta o seguimento.",
  secoes: [
    { t: "box", v: "info", titulo: "Quem é contato", html: "<p>Toda pessoa que <b>resida ou tenha residido, conviva ou tenha convivido</b> com o doente, no âmbito domiciliar, nos <b>últimos cinco anos</b> anteriores ao diagnóstico, familiar ou não. <b>Todos os contatos domiciliares devem passar por avaliação clínica.</b></p>" },
    { t: "fluxo", titulo: "Fluxograma 3 — Contatos na APS", passos: [
      { pergunta: "Avaliação dermatológica e neurológica do contato — confirma um caso de hanseníase?",
        sim: { tipo: "atb", html: "<b>Caso definido</b> → classificar, avaliar GIF e reações, notificar no Sinan e iniciar PQT-U (PB 6 meses / MB 12 meses)." },
        nao: { tipo: "talvez", html: "Alterações suspeitas inconclusivas → passo seguinte. Caso descartado → último passo." } },
      { pergunta: "Alterações suspeitas inconclusivas (sensibilidade duvidosa com avaliação neurológica normal/inconclusiva, OU comprometimento neural sem lesões de pele) — realizar teste rápido",
        sim: { tipo: "talvez", html: "<b>Reagente:</b> solicitar <b>baciloscopia</b> — positiva (IB &gt; 0,0) → caso definido; negativa (IB = 0,0) → encaminhar à Atenção Especializada (Fluxograma 4)." },
        nao: { tipo: "talvez", html: "<b>Não reagente:</b> encaminhar à Atenção Especializada (Fluxograma 4)." } },
      { pergunta: "Caso descartado — realizar teste rápido",
        sim: { tipo: "alerta", html: "<b>Reagente:</b> não iniciar PQT-U; <b>vigilância ativa com avaliação anual na APS por 5 anos</b>; BCG conforme histórico; educação em saúde." },
        nao: { tipo: "nao-atb", html: "<b>Não reagente:</b> educação em saúde sobre sinais e sintomas; BCG conforme histórico vacinal; vigilância passiva por meio do autoexame e retorno se necessário." } }
    ], nota: "Fonte: Fluxograma 3 — Apêndice A do PCDT (pág. 129)." },
    { t: "box", v: "trat", titulo: "Imunoprofilaxia com BCG", html: "<p>Ofertar aos contatos <b>maiores de 1 ano</b>, <b>não vacinados ou que receberam apenas uma dose</b> da BCG. Comprovar a vacinação prévia pelo cartão de vacina ou pela cicatriz vacinal. Orientar automonitoramento e relato imediato de sinais sugestivos.</p>" },
    { t: "lista", titulo: "Revacinação com BCG contraindicada", itens: [
      "Imunodeficiência primária ou adquirida;",
      "Neoplasias malignas;",
      "Corticosteroide em dose elevada (equivalente a prednisona 2 mg/kg/dia para crianças até 10 kg, ou 20 mg/dia ou mais para quem tem mais de 10 kg) por mais de duas semanas;",
      "Gestantes."
    ]}
  ]
},
{
  id: "casos-especiais", num: "17", titulo: "Casos especiais", grupo: "seguimento", pag: 95,
  resumo: "Gestação e amamentação (manter PQT-U e aleitamento), menores de 15 anos, imunossupressão e comorbidades a investigar.",
  secoes: [
    { t: "tabela", titulo: "Situações especiais", head: ["Situação", "Orientação"], rows: [
      ["<b>Concepção</b>", "Abordar contracepção rotineiramente. Adiar a gravidez pode ser aconselhável durante reações e é <b>mandatório durante o uso de talidomida</b>."],
      ["<b>Amamentação</b>", "Orientar a <b>não suspender a amamentação</b>, nem por medo da PQT-U, nem pelo receio de transmitir a doença; o uso de PQT-U pela mãe é seguro para o bebê."],
      ["<b>Reações na gestação e pós-parto</b>", "Reação tipo 1 mais frequente nos primeiros meses após o parto; ENH mais frequente no 1º e 3º trimestres e no pós-parto. Corticoide geralmente seguro (monitorar glicemia e PA). Na amamentação, adiar a mamada até 4 h após a prednisona reduz a exposição do bebê. Talidomida nunca na gravidez."],
      ["<b>Menores de 15 anos</b>", "Indica transmissão recente. Sempre que possível, avaliação por profissional experiente, sem retardar o tratamento dos casos típicos. Preferir avaliação clínica minuciosa e investigação de contatos aos exames invasivos (baciloscopia/biópsia apenas se dificuldade diagnóstica)."],
      ["<b>Imunossupressão (HIV, transplante, anti-TNF)</b>", "Tratamento da hanseníase não difere do convencional. Atenção a infecções oportunistas (tuberculose, estrongiloidíase) durante o tratamento das reações."]
    ]},
    { t: "box", v: "diag", titulo: "Avaliar também (comorbidades)", html: "<p>Tuberculose, hepatites B e C, HIV/aids, HTLV-1, parasitas intestinais (incluindo <i>Strongyloides</i>), diabetes mellitus, leishmaniose e doença de Chagas (em áreas endêmicas), tabagismo, etilismo e uso de outros medicamentos que possam interferir na farmacoterapia.</p>" }
  ]
},
{
  id: "prevencao-incapacidades", num: "18", titulo: "Prevenção de incapacidades e autocuidado", grupo: "seguimento", pag: 85,
  resumo: "Autocuidado desde o diagnóstico, curativos de lesões neuropáticas, calçados adaptados e acesso à reabilitação (RCPD).",
  secoes: [
    { t: "lista", titulo: "Ações de prevenção de incapacidades", itens: [
      "Diagnóstico precoce, tratamento e acompanhamento das reações e da função neural;",
      "Orientar o <b>autocuidado logo após o diagnóstico</b>: proteção da face, olhos, nariz, pele, mãos e pés, e exercícios de fortalecimento dos membros superiores e inferiores;",
      "Grupos de autocuidado para estimular consciência de risco e autonomia;",
      "Curativos de úlceras traumáticas e neuropáticas (especialmente plantares), escolhidos conforme extensão, exsudato, odor ou infecção — na atenção domiciliar ou nas unidades;",
      "Inspecionar marcha e calçado (tamanho, bico, salto, solado, desgaste); calçados e palmilhas adaptados via Rede de Cuidados à Pessoa com Deficiência (RCPD);",
      "Fisioterapia, cirurgias preventivas e reabilitadoras e acesso a órteses e próteses (CER e Oficinas Ortopédicas)."
    ]},
    { t: "box", v: "info", titulo: "Caderneta de saúde", html: "<p>A caderneta da pessoa acometida pela hanseníase auxilia a gestão do cuidado e a comunicação entre paciente, equipe e família. O usuário deve levá-la sempre ao serviço, durante o tratamento e no pós-alta.</p>" }
  ]
},
{
  id: "psicossocial", num: "19", titulo: "Abordagem psicossocial e estigma", grupo: "seguimento", pag: 79,
  resumo: "Comunicação sensível do diagnóstico, escala EMIC no 2º mês, acolhimento pelo ACS e articulação com RAPS e CRAS.",
  secoes: [
    { t: "lista", titulo: "Papel da equipe", itens: [
      "Comunicar de forma sensível e clara o diagnóstico, o tratamento e a evolução; orientar sobre a divulgação voluntária a terceiros e a comunicação com a família;",
      "Aplicar a <b>Escala de Estigma (EMIC-AP)</b> no <b>segundo mês de tratamento</b> (também no pós-alta recente e durante reações) e a <b>Escala de Participação</b>;",
      "Acolhimento e escuta são atribuições de toda a equipe — inclusive do <b>agente comunitário de saúde</b> nas visitas;",
      "Grupos de autocuidado e apoio de pares."
    ]},
    { t: "box", v: "info", titulo: "Rede de apoio", html: "<p><b>RAPS</b> (CAPS e ambulatórios de saúde mental) para sofrimento psíquico; <b>CRAS/SUAS</b> para proteção social de pessoas em vulnerabilidade (PAIF, SCFV, Cadastro Único e benefícios).</p>" },
    { t: "box", v: "alerta", titulo: "Atenção", html: "<p>O impacto psicológico do diagnóstico pode ser grave, levando à depressão e até ao suicídio. Estigma e discriminação causam subnotificação, abandono e incapacidades.</p>" }
  ]
},
{
  id: "notificacao", num: "20", titulo: "Notificação e indicadores", grupo: "seguimento", pag: 107,
  resumo: "Doença de notificação compulsória no Sinan. Indicadores de detecção, GIF 2, cura, abandono e contatos examinados.",
  secoes: [
    { t: "box", v: "diag", titulo: "Notificação", html: "<p>A hanseníase é de <b>notificação compulsória</b> no Sinan. A APS deve ser a principal instância de atendimento, com referência e contrarreferência quando aplicáveis. Este PCDT substitui as orientações anteriores do Ministério da Saúde, que devem ser consideradas desatualizadas.</p>" },
    { t: "lista", titulo: "Indicadores de avaliação da qualidade dos serviços", itens: [
      "Proporção de cura entre os casos novos das coortes;",
      "Proporção de abandono de tratamento entre os casos novos das coortes;",
      "<b>Proporção de contatos examinados</b> de casos novos;",
      "Proporção de casos novos com grau de incapacidade física avaliado no diagnóstico;",
      "Proporção de curados com grau de incapacidade física avaliado;",
      "Proporção de casos segundo classificação operacional;",
      "Proporção de recidivas entre os casos notificados no ano."
    ]},
    { t: "lista", titulo: "Indicadores epidemiológicos", itens: [
      "Taxa de detecção anual de casos novos/100 mil habitantes (geral e de 0 a 14 anos);",
      "Taxa e proporção de casos novos com GIF 2 no diagnóstico;",
      "Proporção de curados com GIF 2 na alta."
    ]}
  ]
},
{
  id: "calc-pqtu", num: "21", titulo: "Calculadora de dose da PQT-U", grupo: "utilitarios", pag: 58,
  resumo: "Informe o peso e veja a apresentação e as doses mensais e diárias conforme o Quadro 1 do PCDT.",
  secoes: [
    { t: "pqtu", titulo: "Dose da PQT-U pelo peso" }
  ]
},
{
  id: "desmame-prednisona", num: "22", titulo: "Desmame de prednisona (reações)", grupo: "utilitarios", pag: 61,
  resumo: "Gera o cronograma de redução da prednisona a partir de 1 mg/kg/dia, conforme o esquema do PCDT.",
  secoes: [
    { t: "desmame", titulo: "Cronograma de redução da prednisona" }
  ]
},
{
  id: "calc-gif", num: "23", titulo: "Grau de incapacidade física e escore OMP", grupo: "utilitarios", pag: 148,
  resumo: "Marque o grau de cada olho, mão e pé para obter o GIF (maior grau) e a soma OMP.",
  secoes: [
    { t: "gif", titulo: "Calculadora de GIF e OMP" }
  ]
}
]);
