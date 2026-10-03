/* Capítulos 10–11 — Mordeduras por animais; Otite média aguda (págs. 33–38) */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).antimicrobianos = (window.GUIA_TOPICOS.antimicrobianos || []).concat([
{
  id: "mordeduras", num: "10", titulo: "Mordeduras por animais (cães e gatos)", grupo: "pele", pag: 33,
  resumo: "Avaliar infecção local, risco de tétano e possibilidade de raiva.",
  secoes: [
    { t: "texto", html: "<p>Após uma mordedura animal, três preocupações imediatas se impõem: a infecção local, o risco de tétano e a possibilidade de raiva – cada uma com implicações potencialmente graves e abordagens específicas de prevenção e tratamento.</p>" },
    { t: "texto", titulo: "Infecções secundárias", html: "<p>Alto risco de evoluir com infecção, especialmente em mordeduras por gatos.</p><p><b>Agentes etiológicos mais comuns:</b> <i>Staphylococcus</i> spp., <i>Streptococcus</i> spp., <i>Pasteurella multocida</i>, <i>Pasteurella canis</i>, <i>Eikenella corrodens</i>, <i>Capnocytophaga</i> spp., <i>Bartonella henselae</i> e anaeróbios (<i>Bacteroides</i> spp., <i>Fusobacteria</i>, <i>Porphyromonas</i> spp., <i>Prevotella</i> spp., <i>Cutibacteria</i> e <i>Peptostreptococci</i>).</p>" },
    { t: "box", v: "trat", titulo: "Conduta", html:
      "<ul><li>Avaliar a extensão, profundidade da lesão e a presença de sinais de infecção, a espécie animal envolvida e as circunstâncias da mordida.</li>" +
      "<li><b>Cuidados locais:</b> realizar imediatamente limpeza vigorosa (com degermante ou sabão), irrigação com soro fisiológico, mesmo que o paciente já tenha realizado higienização prévia. Se houver necessidade de sutura, realizar este procedimento após a infiltração de soro ou imunoglobulina anti-rábica na ferida, quando indicado. <b>Lesões complexas ou em face:</b> encaminhar para avaliação com cirurgião.</li>" +
      "<li>Uso de antimicrobianos para profilaxia ou tratamento conforme fluxograma e tabela abaixo.</li></ul>" },
    { t: "duas", titulo: "Mordedura profunda*?",
      a: { rotulo: "SIM", tipo: "atb", passos: ["<b>Mordeduras profundas* sem sinais de infecção:</b> iniciar profilaxia com antimicrobiano.", "<b>Mordeduras com sinais de infecção:</b> iniciar tratamento com antimicrobiano."] },
      b: { rotulo: "NÃO", tipo: "nao-atb", passos: ["<b>Mordeduras superficiais*:</b> <b>NÃO</b> necessitam profilaxia com antimicrobiano."] },
      nota: "*<b>Mordeduras superficiais:</b> não atravessaram a epiderme, nem provocaram sangramento. <b>Mordeduras profundas:</b> não se encaixaram na definição de superficiais." },
    { t: "esquemas", titulo: "Profilaxia / tratamento antimicrobiano", grupos: [
      { nome: "Antimicrobiano de escolha", itens: [
        { f: "Amoxicilina-clavulanato", a: "500/125mg VO, de 8/8h<br>3 dias se profilaxia<br>5-7 dias se tratamento", c: "50-90mg/kg/dia (componente amoxicilina), VO, dividido de 8/8h<br>3 dias se profilaxia<br>5 dias se tratamento" }
      ]},
      { nome: "Opções (em caso de alergia)", itens: [
        { f: "Clindamicina + Ciprofloxacino", a: "Clindamicina 300-450mg VO, de 8/8h + Ciprofloxacino 500mg VO, de 12/12h<br>3 dias se profilaxia<br>5-7 dias se tratamento", c: "Preferir esquema abaixo" },
        { f: "Clindamicina + Sulfametoxazol-trimetoprim", a: "Clindamicina 300-450mg VO, de 8/8h + SMX-TMP 800-160mg VO, de 12/12h<br>3 dias se profilaxia<br>5-7 dias se tratamento", c: "Clindamicina 30-40mg/kg/dia dividido de 6/6h ou 8/8h + SMX-TMP 8-12mg/kg/dia (do trimetoprim) dividido de 12/12h<br>3 dias se profilaxia<br>5-7 dias se tratamento" }
      ]}
    ]},
    { t: "tabela", titulo: "Tétano", intro: "<p>Pacientes vítimas de mordedura devem ter seu status de proteção contra o tétano avaliado, conforme tabela e observações abaixo.</p>",
      head: ["História de imunização contra tétano", "Vacina", "Imunoglobulina humana antitetânica"], rows: [
      ["Menos de 3 doses ou incerta", "Sim", "Sim"],
      [{ grupo: "Vacinação primária completa (≥ 3 doses):" }],
      ["Última dose há menos de 5 anos", "Não", "Não"],
      ["Última dose entre 5 e 10 anos", "Sim", "Não"],
      ["Última dose há mais de 10 anos", "Sim", "Não"]
    ]},
    { t: "box", v: "info", titulo: "Observação (tétano)", html: "<ul><li>Abaixo de sete anos: tríplice (DPT) ou dupla tipo infantil (DT) se o componente pertussis for contra-indicado.</li><li>A partir dos sete anos: dupla tipo adulto (dT).</li><li>Imunoglobulina humana antitetânica, na dose de 250 unidades, pela via intramuscular (independe do peso). As doses de soro e imunoglobulina são as mesmas independentemente de idade ou peso.</li><li>Utilizar local diferente daquele no qual foi aplicada a vacina.</li></ul>" },
    { t: "tabela", titulo: "Raiva — profilaxia antirrábica", intro: "<p>O paciente vítima de mordedura animal deve ter sua profilaxia antirrábica avaliada conforme o quadro abaixo, que enfatiza a importância da avaliação do animal e tipo de exposição.</p>",
      head: ["Animal", "Contato indireto", "Exposição leve", "Exposição grave"], rows: [
      ["<b>Cão ou gato</b> — passível de observação por 10 dias e sem sinais sugestivos de raiva", "❌ Não indicado", "Se o animal morrer ou apresentar sinais de raiva, é indicada a <b>vacina</b>", "Se o animal morrer ou apresentar sinais de raiva, são indicados a <b>vacina e soro</b>"],
      ["<b>Cão ou gato</b> — não passível de observação por 10 dias e com sinais sugestivos de raiva", "❌ Não indicado", "💉 <b>Vacina</b>", "💉 <b>Vacina + soro/imunoglobulina</b>"],
      ["<b>Mamíferos domésticos de interesse econômico</b> (bois, cavalos, jumentos, bodes, carneiros e porcos)", "❌ Não indicado", "💉 <b>Vacina</b>", "💉 <b>Vacina + soro/imunoglobulina</b>"],
      ["<b>Animais silvestres</b>", "❌ Não indicado", "💉 <b>Vacina + soro/imunoglobulina</b>", "💉 <b>Vacina + soro/imunoglobulina</b>"],
      ["<b>Morcegos</b>", "💉 <b>Vacina + soro/imunoglobulina</b>", "💉 <b>Vacina + soro/imunoglobulina</b>", "💉 <b>Vacina + soro/imunoglobulina</b>"]
    ], nota: "<b>Contato indireto:</b> contato em pele sem lesões.<br><b>Leve:</b> lambedura de lesões superficiais ou ferimento superficial em tronco ou membros, exceto mãos e pés.<br><b>Grave:</b> ferimento em mucosas, cabeça, mãos ou pés; ferimentos múltiplos ou extensos em qualquer região do corpo; lambedura de lesões profundas ou de mucosas, mesmo que intactas.<br>*Protocolo baseado na Nota Técnica nº 8/2022-CGZV/DEIDT/SVS/MS." },
    { t: "box", v: "alerta", titulo: "Atenção (raiva)", html: "<p><b>Para todos os tipos de exposição, a primeira medida indicada é lavar com água e sabão.</b></p><ul><li>É mais importante lembrar que a primeira avaliação do paciente deve acontecer na Unidade de Atenção Primária à Saúde (UAPS), equipamento que disponibiliza a medida mais eficaz contra a raiva: a vacina. Além disso, o paciente deve ser acompanhado na atenção primária.</li><li>Para casos selecionados em que há a indicação do soro antirrábico, a rede de saúde deve ser consultada para indicação do local onde será administrado.</li></ul>" }
  ]
},
{
  id: "otite-media-aguda", num: "11", titulo: "Otite média aguda (OMA)", grupo: "respiratorio", pag: 37,
  resumo: "Diagnóstico clínico; abaulamento da membrana timpânica é o sinal mais fidedigno. Conduta por faixa etária.",
  secoes: [
    { t: "texto", html: "<p>Os sintomas de OMA em crianças incluem dor de ouvido (mais comum), fricção nos ouvidos, perda auditiva, drenagem do ouvido e febre. Outros sinais como hiperemia, diminuição da translucidez da membrana timpânica ou a presença de líquido retrotimpânico isoladamente, sem abaulamento ou otorreia não distinguem OMA de otite média secretora.</p><p>Em adultos, OMA geralmente é precedida de infecção do trato respiratório superior ou exacerbação de rinite. Mais frequentemente unilateral e está associada a otalgia e diminuição da acuidade auditiva.</p>" },
    { t: "box", v: "diag", titulo: "Diagnóstico", html: "<ul><li>O diagnóstico <b>É CLÍNICO</b>.</li><li>Abaulamento da membrana timpânica é o sinal mais fidedigno.</li></ul><p><b>Agentes etiológicos mais comuns:</b> <i>M. catarrhalis, H. influenzae, S. pneumoniae</i>.</p>" },
    { t: "tabela", titulo: "Quando iniciar antimicrobiano (por idade)", head: ["Idade", "Conduta"], rows: [
      ["<b>< 6 meses</b>", "Iniciar antimicrobiano sempre."],
      ["<b>Entre 6 e 24 meses</b>", "Iniciar antimicrobiano se: otorreia, otalgia intensa por mais de 48 horas ou de início rápido, acometimento bilateral, mau estado geral, sinais de toxemia e presença de doenças que predispõe a OMA (fenda palatina, síndromes genéticas, imunodeficiência)."],
      ["<b>> 24 meses</b>", "OMA é menos frequente nessa faixa etária. Iniciar antimicrobiano se: otorreia, otalgia intensa por mais de 48 horas ou de início rápido, acometimento bilateral, mal estado geral, sinais de toxemia e presença de doenças que predispõe a OMA (fenda palatina, síndromes genéticas, imunodeficiência)."]
    ]},
    { t: "box", v: "trat", titulo: "Tratamento — orientações", html: "<ul><li>A maior parte dos casos se resolve espontaneamente, sem uso de antimicrobianos.</li><li>O uso de antimicrobianos parece não prevenir complicações nem recorrência.</li><li>O uso de analgésicos e antitérmicos deve ser imediato para alívio da dor e da febre.</li><li>Orientar retorno para reavaliação se os sintomas piorarem ou persistirem após 48 a 72 horas.</li><li>Realizar lavagem nasal com objetivo de reduzir edema da tuba auditiva, facilitando funcionamento e drenagem da orelha média.</li></ul>" },
    { t: "fluxo", titulo: "O uso de antimicrobiano está indicado nas seguintes situações", passos: [
      { pergunta: "Otalgia — paciente < 6 meses?", sim: { tipo: "atb", html: "Iniciar tratamento com antimicrobiano, anti-inflamatório e lavagem nasal." } },
      { pergunta: "Entre 6 e 24 meses", sim: { tipo: "talvez", html: "<ul><li>Prescrever anti-inflamatório.</li><li>Lavagem nasal.</li><li>Iniciar antimicrobiano se: otalgia de início rápido, otalgia intensa > 48 horas, membrana timpânica hiperemiada, abaulada <b>OU</b> mau estado geral, Tax > 39°C, acometimento bilateral, sinais de toxemia <b>OU</b> presença de doenças que predispõe a OMA (fenda palatina, síndromes genéticas, imunodeficiência).</li></ul>" } },
      { pergunta: "> 24 meses", sim: { tipo: "talvez", html: "<ul><li>Prescrever anti-inflamatório.</li><li>Lavagem nasal.</li><li>Iniciar antimicrobiano se: otorreia, otalgia intensa por mais de 48 horas ou de início rápido, acometimento bilateral, mau estado geral, sinais de toxemia e presença de doenças que predispõe a OMA (fenda palatina, síndromes genéticas, imunodeficiência).</li></ul>" } }
    ]},
    { t: "esquemas", titulo: "Antimicrobianos", grupos: [
      { nome: "Primeira opção", itens: [
        { f: "Amoxicilina", a: "500mg VO, de 8/8h por 5-7 dias", c: "50-90mg/kg/dia VO, dividido de 8/8h (máx. 500mg/dose), 5-7 dias (em menores de 2 anos: 10 dias)" }
      ]},
      { nome: "Opções", itens: [
        { f: "Claritromicina* (alérgicos a beta-lactâmicos)", a: "500mg VO, de 12/12h por 5-7 dias", c: "15mg/kg/dia, dividido de 12/12h (máx. 500mg) por 5 dias" },
        { f: "Azitromicina* (alérgicos a beta-lactâmicos)", a: "500mg VO, 1 vez ao dia por 5 dias", c: "12mg/kg/dia 1 vez ao dia (máx. 500mg) por 5 dias" }
      ]},
      { nome: "Em caso de não resposta ou uso de antimicrobianos nos últimos 30 dias ou OMA recorrente", itens: [
        { f: "Amoxicilina-clavulanato", a: "500/125mg VO, de 8/8h por 7-10 dias<br>OU<br>875/125mg VO, de 12/12h por 5-7 dias", c: "50-90mg/kg/dia (calculados pelo componente de amoxicilina) dividido de 8/8h por 5-7 dias (em menores de 2 anos: 10 dias)" }
      ]}
    ], nota: "*Dados brasileiros apontam alta proporção de resistência de <i>S. pneumoniae</i> aos macrolídeos, não utilizar sistematicamente de forma empírica." }
  ]
}
]);
