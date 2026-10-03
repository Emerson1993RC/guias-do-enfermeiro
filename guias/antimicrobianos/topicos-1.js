/* Guia: Antimicrobianos na Prática Clínica (SESA-CE)
   Capítulos 01–07. Transcrição fiel ao PDF original — páginas indicadas em `pag`. */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).antimicrobianos = (window.GUIA_TOPICOS.antimicrobianos || []).concat([
{
  id: "impetigo", num: "01", titulo: "Impetigo", grupo: "pele", pag: 8,
  resumo: "Infecção superficial da pele causada por Streptococcus spp. e/ou Staphylococcus aureus.",
  secoes: [
    { t: "lista", titulo: "Quadro clínico", itens: [
      "Infecção superficial da pele causada por <i>Streptococcus</i> spp. e/ou <i>Staphylococcus aureus</i>;",
      "Afeta principalmente crianças, pode surgir em qualquer parte do corpo, sendo mais comum em face e extremidades;",
      "Impetigo não bolhoso é a forma mais comum. As lesões começam como pápulas que progridem para vesículas circundadas por eritema. Transformam-se em pústulas que evoluem para crostas espessas, com coloração amarelada. Esta evolução geralmente ocorre ao longo de uma semana. Lesões múltiplas podem ocorrer, mas tendem a permanecer localizadas;",
      "O impetigo bolhoso é similar, mas as lesões costumam aumentar rapidamente e formam bolhas maiores;",
      "Geralmente não há sintomas sistêmicos, mas pode ocorrer linfadenite regional;",
      "As crianças podem regressar à escola 24 horas após o início da terapia antimicrobiana eficaz."
    ]},
    { t: "box", v: "diag", titulo: "Diagnóstico", html: "<p>O diagnóstico <b>É CLÍNICO</b>.</p>" },
    { t: "esquemas", titulo: "Tratamento", grupos: [
      { nome: "Opções", itens: [
        { f: "Cefalexina", a: "500mg VO, de 6/6h por 7 dias", c: "25-50mg/kg/dia (máx 4 g/dia) VO, dividido de 6/6h por 7 dias" },
        { f: "Clindamicina", a: "300mg VO, de 8/8h por 7 dias", c: "30-40mg/kg/dia VO, dividido de 6/6h ou 8/8h por 7 dias" },
        { f: "Sulfametoxazol-trimetoprim", a: "800/160mg VO, de 12/12h por 7 dias", c: "6-12mg/kg/dia (componente trimetoprim) VO, dividido de 12/12h por 7 dias" }
      ]}
    ]}
  ]
},
{
  id: "celulite-erisipela", num: "02", titulo: "Celulite/Erisipela", grupo: "pele", pag: 9,
  resumo: "Eritema, edema, dor e calor; quadro agudo, em geral unilateral. Pode evoluir com gravidade.",
  secoes: [
    { t: "box", v: "diag", titulo: "Diagnóstico", html:
      "<p>O diagnóstico <b>É CLÍNICO</b>. <b>DISTINÇÃO CLÍNICA ENTRE CELULITE E ERISIPELA É DIFÍCIL</b> e na dúvida, tratar como celulite.</p>" +
      "<p>Podem causar quadro clínico grave e rapidamente progressivo – avaliar necessidade de hospitalização.</p>" +
      "<ul><li>Erisipela e celulite manifestam-se com eritema, edema, dor e calor;</li><li>Trata-se de quadro agudo, em geral <b>UNILATERAL</b>;</li><li>A erisipela clássica apresenta-se como uma mancha vermelha brilhante com borda elevada e claramente demarcada;</li><li>A celulite envolve camadas mais profundas e caracteriza-se por bordas indistintas e não elevadas.</li></ul>" +
      "<p><b>Agentes etiológicos mais comuns:</b> <i>Staphylococcus aureus</i> e <i>Streptococcus</i> spp.</p>" },
    { t: "box", v: "alerta", titulo: "Alertas", html:
      "<p>Atenção para <b>SITUAÇÕES DE ALERTA QUE JUSTIFICAM HOSPITALIZAÇÃO IMEDIATA E INTERVENÇÃO CIRÚRGICA:</b> sinais de sepse ou choque séptico, infecção rapidamente progressiva ou dor desproporcional aos achados do exame físico, sinais de infecção necrotizante.</p>" },
    { t: "lista", titulo: "Medidas gerais", itens: [
      "Procurar por portas de entrada como onicomicoses ou micoses superficiais (<i>Tinea pedis</i>) e tratar para evitar a recorrência das infecções.",
      "Para avaliar a progressão da lesão: considere marcar a extensão da infecção com caneta cirúrgica.",
      "Gerenciar condições subjacentes, como diabetes mellitus, insuficiência venosa, eczema e edema.",
      "Recomendar elevação do membro acometido."
    ]},
    { t: "esquemas", titulo: "Tratamento", grupos: [
      { nome: "Opções", itens: [
        { f: "Cefalexina", a: "500 a 1000mg VO, de 6/6h por 5 a 7 dias", c: "100mg/kg/dia, dividido de 6/6h (máx 1g/dose) por 5 a 7 dias" },
        { f: "Amoxicilina-clavulanato", a: "500/125mg VO, de 8/8h por 5 a 7 dias", c: "50-90mg/kg/dia (componente amoxicilina) VO, dividido de 8/8h por 5 a 7 dias" }
      ]},
      { nome: "Opções (em caso de alergia ou impossibilidade de uso)", itens: [
        { f: "Clindamicina", a: "300 a 600mg VO, de 6/6h por 5 a 7 dias", c: "30-40mg/kg/dia VO, dividido de 6/6h ou 8/8h por 7 dias" }
      ]},
      { nome: "Em caso de pé diabético", itens: [
        { f: "Ciprofloxacino + Clindamicina", a: "Ciprofloxacino 500mg VO, de 12/12h + Clindamicina 300 a 600mg VO, de 6/6h — por 7-14 dias para casos leves e 14-28 dias para casos moderado a grave*", c: "Não se aplica" }
      ]}
    ], nota: "*Avaliar necessidade de desbridamento cirúrgico." }
  ]
},
{
  id: "faringoamigdalite", num: "03", titulo: "Faringoamigdalite aguda", grupo: "respiratorio", pag: 11,
  resumo: "A maior parte é de etiologia viral; 20 a 40% dos casos é bacteriana (Streptococcus pyogenes). Use o Escore de Centor.",
  secoes: [
    { t: "lista", titulo: "Pontos-chave", itens: [
      "A maior parte é de etiologia viral. Presença concomitante de coriza, conjuntivite e tosse sugere etiologia viral.",
      "A presença de secreção purulenta nas tonsilas palatinas não necessariamente indica infecção bacteriana.",
      "20 a 40% dos casos é de etiologia bacteriana. Se infecção bacteriana, o agente etiológico mais comum é <i>Streptococcus pyogenes</i>.",
      "Penicilina é o único antimicrobiano com eficácia comprovada em reduzir taxas de febre reumática."
    ]},
    { t: "box", v: "diag", titulo: "Diagnóstico", html: "<ul><li>O diagnóstico é <b>CLÍNICO</b>.</li><li>Cultura de orofaringe é considerada o padrão ouro, mas é de pouca aplicabilidade clínica.</li></ul>" },
    { t: "centor", titulo: "Escore de Centor Modificado" },
    { t: "lista", titulo: "Observações", numerada: true, itens: [
      "Os objetivos do tratamento são a prevenção de febre reumática, prevenção de complicações supurativas locais, glomerulonefrite, redução da transmissão e melhora dos sintomas.",
      "A febre e os sintomas constitucionais geralmente desaparecem em um a três dias após o início do tratamento, mas é importante concluir o tempo de tratamento para erradicação do estreptococos.",
      "Consultas de seguimento não são necessárias para a maioria dos casos.",
      "A tonsilectomia não é indicada rotineiramente. Em casos de infecção de repetição (≥ 7 episódios/ano ou ≥ 5 episódios nos últimos 2 anos), encaminhar para otorrinolaringologista para avaliação."
    ]},
    { t: "esquemas", titulo: "Tratamento", grupos: [
      { nome: "Primeira opção", itens: [
        { f: "Penicilina Benzatina", a: "1,2 milhão unidade IM, dose única", c: "≤ 27 kg: 600 mil unidades IM<br>> 27 kg: 1,2 milhão de unidade IM, dose única" },
        { f: "Amoxicilina", a: "500mg VO, de 8/8h por 10 dias", c: "50mg/kg/dia (máx 500mg/dose) dividido de 8h/8h por 10 dias" }
      ]},
      { nome: "Opções (em caso de alergia ou impossibilidade de uso)", itens: [
        { f: "Azitromicina (alérgicos a beta-lactâmicos)", a: "500mg VO, 1 vez ao dia por 5 dias", c: "12mg/kg/dia 1 vez ao dia (máx 500mg) por 5 dias" }
      ]}
    ]}
  ]
},
{
  id: "gastroenterocolite", num: "04", titulo: "Gastroenterocolite aguda", grupo: "digestivo", pag: 14,
  resumo: "≥3 evacuações/dia, duração < 14 dias. A grande maioria é infecciosa e autolimitada; na maioria NÃO precisa antimicrobiano.",
  secoes: [
    { t: "texto", titulo: "Definição", html:
      "<p>Define-se gastroenterocolite aguda como aumento na frequência e quantidade das evacuações ou diminuição da consistência das fezes. Pode ocorrer com ou sem sintomas gástricos, como náuseas e vômitos, e é tipicamente marcada por 3 ou mais episódios evacuatórios por dia, com duração dos sintomas inferior a 14 dias.</p>" +
      "<p>A grande maioria dos casos de diarreia aguda é infecciosa e autolimitada. As principais causas são: vírus (norovírus, rotavírus, adenovírus, astrovírus e outros), bactérias (<i>Salmonella</i>, <i>Campylobacter</i>, <i>Shigella</i>, <i>Escherichia coli</i>, <i>Clostridioides difficile</i> e outros) e protozoários (<i>Cryptosporidium</i>, <i>Giardia</i>, <i>Cyclospora</i>, <i>Entamoeba</i> e outros).</p>" +
      "<p>Na avaliação de pacientes com gastroenterocolite aguda, deve-se investigar ativamente a presença de sinais de gravidade, como sangue ou muco nas fezes, febre elevada, dor abdominal intensa, vômitos persistentes, perda de peso ou manifestações neurológicas. É fundamental questionar sobre fatores de risco, incluindo uso recente de antimicrobianos, internações nos últimos três meses, exposição a água ou alimentos potencialmente contaminados, ocorrência de casos semelhantes no domicílio ou instituições e viagens recentes para áreas endêmicas.</p>" },
    { t: "box", v: "diag", titulo: "Diagnóstico", html: "<p>O diagnóstico é <b>CLÍNICO</b> e o principal objetivo do tratamento é prevenir a desidratação ou reidratar adequadamente.</p>" },
    { t: "box", v: "trat", titulo: "Conduta", html:
      "<p><b>NÃO</b> é necessário antimicrobiano para a maioria dos casos, mesmo que a etiologia seja bacteriana.</p>" +
      "<p>A maior parte dos episódios de gastroenterocolite é tratada empiricamente, sem identificação do agente causador, dado seu caráter autolimitado. Quando há necessidade de definição etiológica e terapia específica, trata-se geralmente de casos graves ou complicados, devendo ser conduzidos em ambiente hospitalar.</p>" +
      "<p>O benefício do uso de probióticos na gastroenterocolite aguda é discreto (redução da duração dos sintomas em algumas horas), não justificando o uso sistemático.</p>" },
    { t: "decisao", titulo: "Quando indicar antimicrobiano?",
      criterios: [
        { nome: "Quadro grave", itens: ["Febre > 38,5ºC persistente", "Sinais e sintomas de hipovolemia ou desidratação", "≥8 episódios de fezes amolecidas nas 24 horas", "Fezes com sangue"] },
        { nome: "Alto risco de gravidade", itens: ["Idade ≥ 70 anos", "Comorbidades graves, como cardiopatias, imunossuprimidos (incluindo infecção por HIV avançada)", "Doença inflamatória intestinal", "Gravidez"] },
        { nome: "Duração da diarreia > 7 dias", itens: [] }
      ],
      sim: "<b>INICIAR ANTIMICROBIANO EMPÍRICO CONFORME TABELA ABAIXO.</b><br><b>CONSIDERAR ENCAMINHAR PARA EMERGÊNCIA.</b><br><b>Hidratação:</b> oral ou endovenosa.<br><b>Sintomáticos:</b> antieméticos e analgésicos.*<br>Evitar antidiarreicos.<br><b>Dieta:</b> de acordo com a aceitação.<br><small>*Consulte antieméticos e analgésicos disponíveis na rede. Consulte o Anexo I.</small>",
      nao: "<b>SEM INDICAÇÃO DE ANTIMICROBIANO EMPÍRICO.</b><br><b>SEM INDICAÇÃO DE COPROCULTURA.</b><br><b>Hidratação:</b> oral ou endovenosa.<br><b>Sintomáticos:</b> antieméticos e analgésicos.<br>Evitar antidiarreicos.<br><b>Dieta:</b> de acordo com a aceitação." },
    { t: "esquemas", titulo: "Tratamento", grupos: [
      { nome: "Primeira opção (Azitromicina OU Ciprofloxacino)", itens: [
        { f: "Azitromicina", a: "500mg VO, 1x/dia por 3 dias", c: "10-12mg/kg/dia no primeiro dia 1x/dia seguido de 5-6mg/kg/dia por 2 dias" },
        { f: "Ciprofloxacino", a: "500mg VO, de 12/12h por 3-5 dias", c: "20mg/kg/dia dividido de 12/12h por 3-5 dias" }
      ]}
    ]}
  ]
},
{
  id: "h-pylori", num: "05", titulo: "Infecção por Helicobacter pylori", grupo: "digestivo", pag: 16,
  resumo: "Associada a gastrite crônica, úlcera péptica, linfoma MALT e câncer gástrico. Terapia tripla por 14 dias.",
  secoes: [
    { t: "texto", html: "<p>A infecção por <i>Helicobacter pylori</i> está associada a gastrite crônica, úlcera péptica, linfoma MALT e câncer gástrico.</p><p>O tratamento visa erradicar a bactéria, aliviar sintomas, prevenir recidiva e reduzir risco de neoplasia.</p>" },
    { t: "box", v: "diag", titulo: "Diagnóstico", html:
      "<p>A investigação diagnóstica com teste específico está indicada em casos:</p><ul>" +
      "<li>História atual ou pregressa de úlcera péptica;</li>" +
      "<li>Dispepsia persistente em pacientes acima de 45 anos ou presença de sinais de alarme (perda de peso involuntária, vômitos persistentes, sangramento digestivo, disfagia, anemia ferropriva);</li>" +
      "<li>Anemia ferropriva de causa não esclarecida após investigação inicial;</li>" +
      "<li>Púrpura trombocitopênica imune;</li>" +
      "<li>História familiar de câncer gástrico em parente de primeiro grau.</li></ul>" +
      "<p>Suspender inibidores de bombas de prótons por 2 semanas antes dos exames para <i>H. pylori</i>. Nesse período, em caso de sintomas, utilizar antiácidos, sucralfato ou bloqueadores H<sub>2</sub> como alternativa.</p>" },
    { t: "esquemas", titulo: "Tratamento", cols: ["Posologia Adulto", "Duração"], grupos: [
      { nome: "Primeira opção — 14 dias", itens: [
        { f: "Omeprazol OU Pantoprazol", a: "Omeprazol 20mg VO, de 12/12h OU Pantoprazol 40mg VO, de 12/12h", c: "14 dias" },
        { f: "+ Amoxicilina", a: "1g VO, de 12/12h", c: "14 dias" },
        { f: "+ Claritromicina", a: "500mg VO, de 12/12h", c: "14 dias" }
      ]}
    ]},
    { t: "lista", titulo: "Indicação de encaminhamento ao especialista", itens: [
      "Presença de sinais de alarme (sangramento digestivo, perda de peso inexplicada, vômitos persistentes, disfagia progressiva, anemia ferropriva sem causa definida);",
      "Pacientes com idade >45 anos com dispepsia de início recente;",
      "Falha terapêutica após duas tentativas de erradicação;",
      "Necessidade de endoscopia digestiva alta para investigação diagnóstica ou seguimento;",
      "Suspeita de complicações graves associadas à infecção, como linfoma MALT ou câncer gástrico."
    ]}
  ]
},
{
  id: "respiratorio-inferior", num: "06", titulo: "Infecções do trato respiratório inferior", grupo: "respiratorio", pag: 18,
  resumo: "Síndrome gripal, exacerbação de pneumopatia crônica e pneumonia adquirida na comunidade (PAC). Fluxograma da tosse aguda.",
  secoes: [
    { t: "texto", html: "<p>As infecções respiratórias constituem uma das afecções mais comuns na prática clínica, sendo na maioria das vezes autolimitadas e sem gravidade e, portanto, sem necessidade de antimicrobiano.</p><p>Fluxograma para o atendimento do paciente com quadro agudo de tosse produtiva (menor que 14 dias).</p>" },
    { t: "fluxo", titulo: "Fluxograma — tosse aguda", passos: [
      { pergunta: "Tosse aguda — avaliar gravidade:", itens: ["Confusão mental", "FR ≥ 30 irpm", "PAS < 90 ou PAD ≤ 60 mmHg", "Saturação ≤ 94% (exceto pneumopatia crônica com hipoxemia basal)"],
        sim: { tipo: "alerta", html: "<b>Encaminhamento para atendimento hospitalar</b>" } },
      { pergunta: "Síndrome gripal (febre + dor de garganta + congestão nasal ou mialgia ou artralgia)?",
        sim: { tipo: "nao-atb", html: "<ul><li><b>NÃO</b> prescrever antimicrobianos</li><li>Considerar antiviral (se fatores de risco*)</li><li>Considerar teste SARS-CoV-2 e influenza</li><li>Prescrever sintomáticos</li></ul>" } },
      { pergunta: "Algum destes?", itens: ["≥65 anos", "Alteração de ausculta pulmonar", "Comorbidades: DM, ICC, imunossupressão, neoplasia, insuficiência renal, cirrose", "Queda do estado geral", "FR > 25", "FC > 125", "Temperatura < 35 ou > 40°C"],
        sim: { tipo: "atb", html: "<ul><li>Radiografia de tórax se possível</li><li>Iniciar antimicrobiano conforme tabela a seguir</li></ul>" },
        nao: { tipo: "nao-atb", html: "<ul><li><b>NÃO</b> prescrever antimicrobianos</li><li>Prescrever sintomáticos</li><li>Reavaliar em 48h</li><li>Orientar sinais de alerta (dispneia, dor torácica, vômitos incoercíveis, confusão mental)</li></ul>" } }
    ]},
    { t: "esquemas", titulo: "Síndrome gripal", intro:
      "<p><b>Pontos-chave:</b> febre de início súbito acompanhada de tosse ou dor de garganta com pelo menos 1 dos seguintes: mialgia, cefaleia, artralgia, congestão nasal.</p><p><b>Conduta:</b> prescrever sintomáticos. Manter sem antibioticoterapia. Se disponível, realizar teste rápido COVID/influenza. Se fatores de risco* para Influenza ou COVID-19, prescrever Oseltamivir para Influenza e Paxlovid para COVID-19 por 5 dias.</p>",
      grupos: [{ nome: "Antivirais (se fatores de risco*) — por 5 dias", itens: [
        { f: "Oseltamivir", a: "75mg de 12/12h", c: "<b>> 1 ano:</b><br>≤ 15 Kg: 30 mg de 12/12h<br>> 15 a 23 Kg: 45 mg de 12/12h<br>> 23 a 40 Kg: 60 mg de 12/12h<br>> 40 Kg: 75 mg de 12/12h<br><b>< 1 ano:</b><br>0 a 8 meses: 3 mg/Kg de 12/12h<br>9 a 11 meses: 3,5 mg de 12/12h<br><small>Obs.: na tabela de Posologia em pediatria (pág. 46) consta 3,5 mg/Kg de 12/12h.</small>" },
        { f: "Paxlovid®", a: "300/100mg de 12/12h", c: "Paxlovid não está liberado para uso em < 18 anos." }
      ]}],
      nota: "*Fatores de risco para influenza: gestantes, adultos ≥ 60 anos, população indígena, pneumopatias, tuberculose, cardiovasculopatias, nefropatias, hepatopatias, doenças hematológicas, imunossupressão, diabetes, doenças metabólicas, IMC ≥ 40.<br>*Fatores de risco para COVID-19: ≥ 75 anos; ≥ 65 anos com comorbidades; ≥ 18 anos com imunossupressão." },
    { t: "esquemas", titulo: "Exacerbação aguda de pneumopatia crônica", intro:
      "<p><b>Pontos-chave:</b> prescrever antibiótico se aumento ou piora do aspecto de secreção. Manter saturação de O<sub>2</sub> entre 88-92%.</p><p><b>1ª opção:</b> amoxicilina/clavulanato + (azitromicina ou claritromicina). Avaliar fatores de risco para <i>Pseudomonas aeruginosa</i> (uso de corticosteroides, exacerbações prévias, hospitalização no último ano). Se fator de risco, acrescentar ciprofloxacino ao esquema. <b>Por 5 dias.</b></p>",
      grupos: [{ nome: "1ª opção — por 5 dias", itens: [
        { f: "Amoxicilina/clavulanato", a: "500/125 mg VO, de 8/8h", c: "50-90 mg/kg/dia (calculados pelo componente de amoxicilina) dividido de 8/8h" },
        { f: "+ Azitromicina", a: "500mg 01 vez ao dia", c: "12 mg/kg/dia, 1 vez ao dia (máx 500 mg)" },
        { f: "ou Claritromicina", a: "500mg VO, de 12/12h", c: "15 mg/kg/dia, dividido de 12/12h (máx 500 mg)" },
        { f: "Ciprofloxacino (se fator de risco para Pseudomonas)", a: "500mg VO, de 12/12h", c: "Ciprofloxacino deve ser evitado na pediatria" }
      ]}] },
    { t: "esquemas", titulo: "PAC — ausência de fatores de risco", intro: "<p>Pneumonia adquirida na comunidade: alteração de ausculta pulmonar e/ou radiografia de tórax. <b>1ª opção: Amoxicilina.</b> Em caso de alergia, <b>Doxiciclina</b>. Por 5-7 dias.</p>",
      grupos: [
        { nome: "1ª opção — por 5-7 dias", itens: [{ f: "Amoxicilina", a: "500 mg VO, de 8/8h", c: "50-90 mg/kg/dia, dividido de 8h/8h (máx 500mg/dose)" }] },
        { nome: "Em caso de alergia", itens: [{ f: "Doxiciclina", a: "100 mg VO, de 12/12h", c: "2-4 mg/kg/dia, dividido de 12/12h (máx 100mg dose)" }] }
      ] },
    { t: "esquemas", titulo: "PAC — presença de fatores de risco", intro:
      "<p><b>Fatores de risco:</b> ≥ 65 anos; hospitalização no último ano; insuficiência cardíaca; uso de corticoesteróides ≥ 20mg por ≥ 14 dias; neoplasia ativa; doença renal crônica; cirrose hepática (Child B/C).</p><p><b>1ª opção:</b> amoxicilina/clavulanato + (azitromicina ou claritromicina).</p>",
      grupos: [{ nome: "1ª opção", itens: [
        { f: "Amoxicilina/clavulanato", a: "500/125mg VO, de 8/8h", c: "50-90 mg/kg/dia (calculados pelo componente de amoxicilina) divididos de 8/8h" },
        { f: "+ Azitromicina", a: "500mg 01 vez ao dia", c: "12 mg/kg/dia, 1 vez ao dia (máx 500 mg)" },
        { f: "ou Claritromicina", a: "500mg VO, de 12/12h", c: "15 mg/kg/dia, dividido de 12/12h (máx 500 mg)" }
      ]}], nota: "Ciprofloxacino deve ser evitado na pediatria." }
  ]
},
{
  id: "ginecologicas", num: "07", titulo: "Infecções ginecológicas", grupo: "genital", pag: 20,
  resumo: "Corrimento vaginal (candidíase, vaginose bacteriana, tricomoníase) e doença inflamatória pélvica (DIP).",
  secoes: [
    { t: "box", v: "diag", titulo: "Corrimento vaginal — diagnóstico", html: "<p>Na história clínica, obter informações sobre comportamentos e práticas sexuais, data da última menstruação, práticas de higiene vaginal, uso de medicamentos tópicos ou sistêmicos e uso de outros possíveis agentes irritantes locais.</p>" },
    { t: "tabela", titulo: "Corrimento vaginal — tratamento", head: ["Condição", "Apresentação clínica", "Antimicrobiano de escolha", "Opções"], rows: [
      ["<b>Candidíase vulvovaginal</b>", "Prurido, ardência, corrimento geralmente grumoso, sem odor, dispareunia de intróito vaginal e disúria externa.<br><br>É comum durante a gestação, podendo haver recidivas pelas condições propícias do pH vaginal que se estabelecem nesse período.",
        "<b>Miconazol</b> creme (20mg/g) um aplicador cheio, à noite por 7 dias.<br><br><b>ATENÇÃO: Tratamento em gestantes e lactantes somente por via vaginal. O tratamento oral está contraindicado.</b><br><br>As parcerias sexuais NÃO precisam ser tratadas, exceto as sintomáticas.",
        "<b>Fluconazol</b> 150mg 1 cp VO, dose única<br><br>OU<br><br><b>Itraconazol</b> 100 mg 2 cp VO, de 12/12h por 1 dia"],
      ["<b>Vaginose bacteriana</b>", "Corrimento vaginal homogêneo, intensidade variável, coloração esbranquiçada, branco-acinzentada ou amarelada, com odor vaginal fétido (\"odor de peixe\" ou amoniacal) que piora com o intercurso sexual desprotegido e durante a menstruação.",
        "<b>Metronidazol</b> 500 mg VO, de 12/12h por 7 dias (esquema preferido)<br>OU<br><b>Metronidazol</b> gel vaginal (100mg/g), um aplicador cheio via vaginal por 5 dias <b>(tratamento inclui gestantes e lactantes)</b>.<br><br>As parcerias sexuais NÃO precisam ser tratadas, exceto as sintomáticas.",
        "<b>Clindamicina</b> 300mg, VO, de 12/12h por 7 dias"],
      ["<b>Tricomoníase</b>", "Corrimento vaginal intenso, amarelo-esverdeado, por vezes acinzentado, bolhoso e espumoso, acompanhado de odor fétido (na maioria dos casos, lembrando peixe) e prurido eventual, que pode constituir reação alérgica à afecção. Em caso de inflamação intensa, o corrimento aumenta e pode haver sinusiorragia e dispareunia. Também podem ocorrer edema vulvar e sintomas urinários, como disúria.",
        "<b>Metronidazol</b> 250 mg 8cp VO, dose única (dose total 2g).<br><br><b>(tratamento inclui gestantes e lactantes).</b><br><br>As parcerias sexuais devem sempre ser tratadas e, preferencialmente, com o mesmo esquema terapêutico.",
        "<b>Metronidazol</b> 500 mg VO, de 12/12h por 7 dias"]
    ]},
    { t: "box", v: "diag", titulo: "Doença inflamatória pélvica — diagnóstico", html:
      "<p>Mulher sexualmente ativa (independente de atividade sexual recente) com dor pélvica, apresentando no exame ginecológico:</p><ul><li>Dor à palpação de anexos + dor à mobilização de colo uterino</li></ul>" +
      "<p>Com pelo menos um dos seguintes achados:</p><ul><li>Febre</li><li>Corrimento vaginal mucopurulento anormal</li><li>Friabilidade do colo uterino</li><li>Leucocitose em sangue periférico</li><li>Presença de leucócitos no fluido vaginal (>10/campo)</li><li>Elevação de velocidade de hemossedimentação (VHS) ou proteína C reativa (PCR)</li><li>Massa pélvica</li><li>Comprovação laboratorial de infecção cervical por gonococo, clamídia ou micoplasma</li></ul>" },
    { t: "tabela", titulo: "Doença inflamatória pélvica — tratamento", head: ["Antimicrobiano de escolha", "Opções"], rows: [
      ["<b>Ceftriaxona</b> 500mg IM, dose única<br>+<br><b>Doxiciclina</b> 100mg VO, de 12/12h por 14 dias<br>+<br><b>Metronidazol</b> 500mg VO, de 12/12h por 14 dias",
       "<b>Ceftriaxona</b> 500mg IM, dose única<br>+<br><b>Azitromicina</b> 1g VO, 1 vez por semana, por 2 semanas<br>+<br><b>Metronidazol</b> 500mg VO, de 12/12h por 14 dias"]
    ]},
    { t: "box", v: "alerta", titulo: "Critérios para internação (DIP)", html: "<p>Abscesso tubo-ovariano; gravidez; ausência de resposta clínica após 72h do início do tratamento com antibioticoterapia oral; intolerância a antibióticos orais ou dificuldade de seguimento ambulatorial; estado geral grave, com náuseas, vômitos e febre; dificuldade na exclusão de emergência cirúrgica (ex.: apendicite, gravidez ectópica).</p>" }
  ]
}
]);
