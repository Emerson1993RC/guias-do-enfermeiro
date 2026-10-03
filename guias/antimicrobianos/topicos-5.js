/* Capítulos 12–17 — Odontologia, Rinossinusite, Sepse, Posologias, Anexo I (págs. 40–48) */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).antimicrobianos = (window.GUIA_TOPICOS.antimicrobianos || []).concat([
{
  id: "odontologia", num: "12", titulo: "Profilaxia antimicrobiana em odontologia", grupo: "odonto", pag: 40,
  resumo: "Prevenção de infecção de sítio cirúrgico e de endocardite em indicações específicas. Dose única 30 a 60 min antes.",
  secoes: [
    { t: "texto", html: "<p>A profilaxia antimicrobiana em Odontologia pode ter o objetivo de prevenção de endocardite infecciosa ou prevenção de infecção do sítio cirúrgico.</p><p>O antimicrobiano profilático deve ser iniciado de <b>30 a 60 minutos antes</b> do início do procedimento.</p><p>Este tempo é necessário para que sejam atingidos níveis teciduais no momento da manipulação cirúrgica.</p><p>O uso de antimicrobianos deve ser por curto período: em geral dose única pré-procedimento. <b>Não ultrapassar 24h.</b></p>" },
    { t: "tabela", titulo: "Prevenção de infecção de sítio cirúrgico", head: ["Procedimento", "Recomendação"], rows: [
      ["Extração cirúrgica por osteotomia dos terceiros molares.", "Dose única de 2g de <b>amoxicilina</b> oral pré-operatória."],
      ["Implantes dentários; Implante único em pacientes saudáveis não comprometidos.", "Não se recomenda antibioticoprofilaxia."],
      ["Implantes dentários complexos.", "Dose única de 2g de <b>amoxicilina</b> oral pré-operatória."]
    ]},
    { t: "fluxo", titulo: "Prevenção de endocardite", passos: [
      { pergunta: "Paciente com condição cardíaca de alto risco?", itens: ["Próteses valvares;", "Endocardite prévia;", "Cardiopatias congênitas: a) cianóticas não corrigidas, incluindo “shunts” e condutos paliativos; b) com correção completa com prótese ou dispositivo nos primeiros 6 meses após procedimento (período de endotelização); c) corrigida com defeitos residuais locais ou adjacentes a retalhos ou dispositivos prostéticos (inibem a endotelização).", "Valvopatia reumática crônica;", "Receptores de transplante cardíaco com valvopatias."],
        nao: { tipo: "nao-atb", html: "Não é necessário realizar profilaxia de endocardite." } },
      { pergunta: "Procedimento odontológico invasivo?", itens: ["Manipulação de gengiva;", "Manipulação periapical dos dentes;", "Perfuração da mucosa oral, como extrações dentárias ou drenagem de um abscesso dentário."],
        obs: "<b>Obs.:</b> não é indicada em anestesia através de tecido não infectado, colocação, ajuste ou retirada de próteses e dispositivos ortodônticos, perda da 1ª dentição ou trauma aos lábios e mucosa oral.",
        sim: { tipo: "atb", html: "Realizar antibioticoprofilaxia conforme tabela abaixo." },
        nao: { tipo: "nao-atb", html: "Não é necessário realizar profilaxia de endocardite." } }
    ], nota: "<b>Obs.:</b> não está indicado uso rotineiro de profilaxia antimicrobiana em pacientes com próteses articulares submetidos a procedimentos odontológicos." },
    { t: "esquemas", titulo: "Profilaxia de endocardite — dose única 30 a 60 minutos antes do procedimento", grupos: [
      { nome: "Primeira opção", itens: [{ f: "Amoxicilina", a: "2g VO", c: "50mg/kg VO" }] },
      { nome: "Opções (em caso de alergia ou impossibilidade de uso)", itens: [
        { f: "Azitromicina", a: "500mg VO", c: "12mg/kg VO" },
        { f: "OU Claritromicina", a: "500mg VO", c: "12mg/kg VO" }
      ]}
    ]}
  ]
},
{
  id: "rinossinusite", num: "13", titulo: "Rinossinusite aguda (RSA)", grupo: "respiratorio", pag: 42,
  resumo: "A maioria dos casos é alérgica ou viral (> 80%), sem necessidade de antimicrobiano.",
  secoes: [
    { t: "texto", html: "<p>As causas mais comuns de rinossinusite são alergia e vírus respiratórios (> 80%).</p><p>Rinossinusites alérgicas costumam vir associadas à coriza hialina crônica, sibilância, congestão/prurido ocular.</p><p>Rinossinusites virais costumam melhorar espontaneamente em 7-10 dias. O indicativo de etiologia bacteriana é: duração dos sintomas por mais de 10 dias ou piora dos sintomas após 5º dia (RSA bacteriana pós-viral).</p><p><b>Agentes etiológicos bacterianos mais comuns:</b> <i>S. pneumoniae, H. influenzae</i> e <i>M. catarrhalis</i>; <b>Bactérias anaeróbias:</b> <i>Peptostreptococcus, Bacteroides</i> e <i>Fusobacterium</i>.</p>" },
    { t: "box", v: "trat", titulo: "Tratamento", html: "<ul><li>Hidratação adequada, umidificação do ambiente e evitar exposição a agentes que causem alergia.</li><li>Lavagem nasal com solução salina.</li><li>Não é necessário antimicrobiano na maior parte dos casos. Muitas vezes ocorre resolução espontânea dos sintomas.</li></ul>" },
    { t: "tabela", titulo: "Recomendar/orientar para alívio dos sintomas", head: ["Medida", "Orientação"], rows: [
      ["<b>Lavagem nasal</b>", "Colocar a solução na mão e aspirar pela narina até a solução atingir a cavidade oral (uma narina de cada vez). Repetir o procedimento várias vezes ao dia."],
      ["<b>Corticoesteroide nasal</b>", "Os corticosteroides nasais são eficazes na redução de sintomas de rinossinusite aguda pós-viral. No entanto, o efeito é pequeno. Apenas prescrever quando a redução dos sintomas é considerada necessária. <small>(*Consultar <a href=\"#/antimicrobianos/anexo-1\">Anexo 1</a>)</small>"]
    ]},
    { t: "fluxo", titulo: "Quando considerar antimicrobiano", passos: [
      { pergunta: "Rinossinusite: sintomas por menos de 10 dias E sem sinais de piora?",
        sim: { tipo: "nao-atb", html: "Não prescrever antimicrobiano." },
        nao: { tipo: "talvez", html: "<b>Sintomas por mais de 10 dias OU piora após o 5º dia.</b><br>Considerar antimicrobiano se:<ul><li>Piora após fase inicial mais branda;</li><li>Rinorreia predominantemente unilateral ou rinorreia posterior purulenta;</li><li>Dor facial intensa, principalmente unilateral;</li><li>Febre ≥ 37,8° C.</li></ul>" } }
    ]},
    { t: "esquemas", titulo: "Antimicrobianos", grupos: [
      { nome: "Primeira opção", itens: [{ f: "Amoxicilina", a: "500mg VO, de 8/8h por 5-7 dias", c: "50-90mg/kg/dia VO, dividido de 8/8h por 5-7 dias" }] },
      { nome: "Opções", itens: [{ f: "Doxiciclina", a: "100mg VO, de 12/12h por 5-7 dias", c: "2-4mg/kg, dividido de 12/12h (máx. 100mg/dose) por 5-7 dias" }] },
      { nome: "Em caso de não resposta", itens: [{ f: "Amoxicilina-clavulanato", a: "500/125mg VO, de 8/8h por 5-7 dias<br>OU<br>875/125mg VO, de 12/12h por 5-7 dias", c: "50mg/kg/dia VO, dividido de 8/8h por 5-7 dias" }] }
    ], nota: "Dados brasileiros apontam alta proporção de resistência de <i>S. pneumoniae</i> a macrolídeo (50%) e sulfametoxazol-trimetoprim (40%) e alta sensibilidade à penicilina (90%). Alta sensibilidade de <i>H. influenzae</i> à ampicilina/amoxicilina (80%)." }
  ]
},
{
  id: "sepse", num: "14", titulo: "Identificação de sepse", grupo: "utilitarios", pag: 44,
  resumo: "Reconhecimento precoce de sepse em suspeita ou confirmação de infecção.",
  secoes: [
    { t: "texto", html: "<p>A sepse é uma condição grave e potencialmente fatal. Este fluxograma visa o reconhecimento precoce deste agravo.</p>" },
    { t: "box", v: "alerta", titulo: "Importante", html: "<p><b>Deve ser aplicado para todos os pacientes com suspeita ou confirmação de infecção.</b></p>" },
    { t: "sepse", titulo: "Avaliação inicial" },
    { t: "lista", titulo: "Sepse ou choque séptico — conduta", numerada: true, itens: [
      "Prescrever antibioticoterapia conforme o foco provável;",
      "Iniciar reposição volêmica precoce em pacientes com hipotensão ou lactato acima de 20 mg/dL. Pelo menos <b>30 ml/kg de cristaloide</b>. Esse volume deve ser infundido o mais rápido possível, idealmente em 30 a 60 minutos.<br><b>Atenção:</b> cardiopatas podem necessitar de redução na velocidade de infusão, conforme a presença ou não de disfunção diastólica ou sistólica moderada/grave. Nesses pacientes, o uso de vasopressores para garantir pressão de perfusão adequada eventualmente necessita ser antecipado.",
      "Encaminhar para atendimento em UPA ou hospital."
    ]}
  ]
},
{
  id: "posologia-pediatria", num: "15", titulo: "Posologia em pediatria", grupo: "utilitarios", pag: 46,
  resumo: "Tabela de posologia pediátrica do guia, com calculadora de dose por peso.",
  secoes: [
    { t: "calc", titulo: "Calculadora rápida (mg/kg)" },
    { t: "tabela", titulo: "Posologia em pediatria", busca: true, head: ["Antimicrobiano", "Posologia em pediatria"], rows: [
      ["<b>Amoxicilina</b>", "50-90 mg/kg/dia (máx. 500 mg/dose) dividido de 8/8h"],
      ["<b>Amoxicilina-clavulanato</b>", "50-90 mg/kg/dia (componente amoxicilina) dividido de 8/8h"],
      ["<b>Azitromicina</b>", "5-12 mg/kg/dia (máx. 500 mg/dia)"],
      ["<b>Cefalexina</b>", "25-100mg/kg/dia, dividido de 6/6h (máx. 1g/dose)"],
      ["<b>Ciprofloxacino</b>", "<b>EVITAR.</b> Se necessário, 20-40 mg/kg/dia, dividido de 12/12h (máx. 500mg/dose)"],
      ["<b>Claritromicina</b>", "15 mg/kg/dia, dividido de 12/12h (máx. 500 mg/dose)"],
      ["<b>Clindamicina</b>", "30 a 40 mg/kg/dia divididas a cada 6 a 8 horas (máx. 1.800 mg/dia)"],
      ["<b>Doxiciclina</b>", "2-4 mg/kg, dividido de 12/12h (máx. 100mg/dose)"],
      ["<b>Fosfomicina</b>", "2g VO, 1x/dia"],
      ["<b>Metronidazol</b>", "30-40mg/kg, dividido de 8/8h (máx. 500mg/dose)"],
      ["<b>Nitrofurantoína</b>", "5-7 mg/kg/dia, dividido de 6/6h"],
      ["<b>Norfloxacino</b>", "5-12 mg/kg/dia (máx. 500 mg/dia)"],
      ["<b>Oseltamivir</b>", "<b>> 1 ano:</b> ≤ 15 Kg: 30 mg de 12/12h; > 15 a 23 Kg: 45 mg de 12/12h; > 23 a 40 Kg: 60 mg de 12/12h; > 40 Kg: 75 mg de 12/12h<br><b>< 1 ano:</b> 0 a 8 meses: 3 mg/Kg de 12/12h; 9 a 11 meses: 3,5 mg/Kg de 12/12h"],
      ["<b>Paxlovid®</b> (nirmatrelvir/ritonavir)", "<b>Não está liberado em < 18 anos</b>"],
      ["<b>Penicilina V</b>", "25-75 mg/kg/dia, dividido de 6/6h ou 8/8h"],
      ["<b>Sulfametoxazol-trimetoprim</b> (baseado no trimetoprim)", "6-12mg/kg/dia, dividido de 12/12h"]
    ]}
  ]
},
{
  id: "posologia-adulto-renal", num: "16", titulo: "Posologia em adultos e ajuste para insuficiência renal", grupo: "utilitarios", pag: 47,
  resumo: "Tabela de posologia em função renal normal, insuficiência renal (clearance de creatinina) e em diálise.",
  secoes: [
    { t: "ccr", titulo: "Calculadora de clearance de creatinina (Cockcroft-Gault)" },
    { t: "tabela", titulo: "Posologia em adultos e ajuste renal", busca: true, head: ["Antimicrobiano", "Função renal normal", "Insuficiência renal (ClCr em mL/min)", "Em diálise"], rows: [
      ["<b>Amoxicilina</b>", "500 mg VO, de 8/8h", "<b>10-30:</b> 500 mg de 12/12h<br><b><10:</b> 250-500 mg 1x/dia", "250-500 mg 1x/dia (em dias de diálise, após sessão)"],
      ["<b>Amoxicilina-clavulanato</b>", "500/125 mg VO, de 8/8h", "<b>10-30:</b> 500/125 mg VO de 12/12h<br><b><10:</b> 500/125 mg 1x/dia", "500/125 mg 1x/dia (em dias de diálise, após sessão)"],
      ["<b>Azitromicina</b>", "500mg VO, 1x/dia", "Sem ajuste", "Sem ajuste"],
      ["<b>Cefalexina</b>", "500-1.000 mg VO, de 6/6h", "<b>10-50:</b> 500-1.000 mg VO, de 8/8h ou 12/12h<br><b><10:</b> 500-1.000 mg VO, 1x/dia", "500mg VO, 1x/dia (em dias de diálise, após sessão)"],
      ["<b>Ciprofloxacino</b>", "500-750 mg VO, de 12/12h", "<b>30-50:</b> 250-500mg VO, de 12/12h<br><b><30:</b> 500 mg VO, 1x/dia", "500mg VO, 1x/dia (em dias de diálise, após sessão)"],
      ["<b>Claritromicina</b>", "500 mg VO, de 12/12h", "<b>10-50:</b> 500mg VO, de 12/12h ou 500mg 1x/dia<br><b><10:</b> 500 mg VO, 1x/dia", "500mg VO, 1x/dia (em dias de diálise, após sessão)"],
      ["<b>Clindamicina</b>", "300-450mg VO, de 6/6h ou 8/8h", "Sem ajuste", "Sem ajuste"],
      ["<b>Doxiciclina</b>", "100mg VO, de 12/12h", "Sem ajuste", "Sem ajuste"],
      ["<b>Fosfomicina</b>", "3g dose VO, 1x/dia", "Sem ajuste<br><b><10: EVITAR O USO</b>", "<b>EVITAR O USO</b>"],
      ["<b>Metronidazol</b>", "500mg VO, de 8/8h", "<b><10:</b> 500mg VO, de 12/12h", "500mg VO, de 12/12h (em dias de diálise, após sessão)"],
      ["<b>Nitrofurantoína</b>", "100mg VO, de 6/6h", "<b><60: EVITAR O USO</b>", "<b>EVITAR O USO</b>"],
      ["<b>Norfloxacino</b>", "400mg VO, de 12/12h", "<b>10-30:</b> 400mg VO, 1x/dia", "400mg VO, 1x/dia (em dias de diálise, após sessão)"],
      ["<b>Oseltamivir</b>", "75mg VO, de 12/12h", "<b>30-60:</b> 30mg VO, de 12/12h<br><b>10-30:</b> 30mg VO, 1x/dia<br><b><10:</b> não recomendado", "30mg VO, 1x/dia (em dias de diálise, após sessão)"],
      ["<b>Sulfametoxazol-trimetoprim</b>", "800/160mg VO, de 8/8h ou 12/12h", "<b>30-50:</b> sem ajuste<br><b>10-30:</b> 400/80mg de 12/12h", "<b>EVITAR O USO.</b> Se necessário, 400/80mg 1x/dia (em dias de diálise, após sessão)"]
    ]}
  ]
},
{
  id: "anexo-1", num: "17", titulo: "Anexo I — Sintomáticos", grupo: "utilitarios", pag: 48,
  resumo: "Sintomáticos: analgésicos/anti-inflamatórios/antipiréticos e corticoide inalatório disponíveis.",
  secoes: [
    { t: "lista", titulo: "Analgésicos / Anti-inflamatórios / Antipiréticos", itens: [
      "Dipirona 500 mg comp.", "Dipirona 500 mg/mL sol. oral", "Dipirona 500 mg/mL sol. inj", "Ibuprofeno 600 mg comp.", "Ibuprofeno 50 mg/mL susp. oral",
      "Paracetamol 500 mg comp.", "Paracetamol 200 mg/mL sol. oral", "Paracetamol 500mg + Codeína 30mg comp.", "Prednisolona (fosfato sódico de) 3 mg/mL sol. oral",
      "Prednisona 5 mg comp.", "Prednisona 20 mg comp."
    ]},
    { t: "lista", titulo: "Corticoide inalatório", itens: ["Budesonida 50 mcg suspensão para inalação nasal"] }
  ]
}
]);
