/* Guia: Hanseníase — Protocolo Clínico e Diretrizes Terapêuticas (PCDT) da Hanseníase, Ministério da Saúde, 2022
   (Portaria SCTIE/MS nº 67, de 7 de julho de 2022). Transcrição fiel ao PDF — `pag` = página impressa do PCDT.
   Tópicos 01–10: diagnóstico e tratamento com PQT-U. */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).hanseniase = (window.GUIA_TOPICOS.hanseniase || []).concat([
{
  id: "suspeita-definicao", num: "01", titulo: "Suspeição diagnóstica e definição de caso", grupo: "diagnostico", pag: 25,
  resumo: "Quando suspeitar e os três sinais cardinais que definem um caso de hanseníase. O diagnóstico é eminentemente clínico.",
  secoes: [
    { t: "lista", titulo: "Quando suspeitar", itens: [
      "Manchas hipocrômicas ou avermelhadas na pele;",
      "Perda ou diminuição da sensibilidade em mancha(s) da pele;",
      "Dormência ou formigamento de mãos/pés;",
      "Dor ou hipersensibilidade em nervos;",
      "Edema ou nódulos na face ou nos lóbulos auriculares;",
      "Ferimentos ou queimaduras indolores nas mãos ou pés."
    ]},
    { t: "box", v: "diag", titulo: "Definição de caso — sinais cardinais", html:
      "<p>O Ministério da Saúde define um caso de hanseníase pela presença de <b>pelo menos um</b> dos seguintes critérios:</p>" +
      "<ol><li>Lesão(ões) e/ou área(s) da pele com <b>alteração de sensibilidade térmica e/ou dolorosa e/ou tátil</b>;</li>" +
      "<li><b>Espessamento de nervo periférico</b>, associado a alterações sensitivas e/ou motoras e/ou autonômicas;</li>" +
      "<li>Presença do <i>M. leprae</i>, confirmada na <b>baciloscopia</b> de esfregaço intradérmico ou na biópsia de pele.</li></ol>" +
      "<p>O diagnóstico é <b>eminentemente clínico</b> e a maioria dos casos pode ser confirmada na Atenção Primária à Saúde.</p>" },
    { t: "lista", titulo: "Anamnese e exame físico", itens: [
      "Indagar sobre queixas neurológicas, <b>valorizando-as mesmo quando vagas ou imprecisas</b>;",
      "Levar em conta a área de residência, o convívio em territórios endêmicos nas últimas décadas e, especialmente, o <b>convívio com pessoas acometidas</b> pela doença;",
      "Observar cuidadosamente <b>toda a superfície cutânea</b>, sob boa iluminação;",
      "Testar a sensibilidade nas lesões e/ou em áreas referidas como de sensibilidade alterada, ainda que sem lesões dermatológicas;",
      "Avaliação neurológica: <b>palpação dos nervos periféricos</b> e testes de sensibilidade e de força muscular nas mãos, pés e olhos."
    ]},
    { t: "box", v: "info", titulo: "Dúvida diagnóstica na APS", html:
      "<p>Quando houver dúvida sobre o diagnóstico no nível da Atenção Primária, referenciar para a Atenção Especializada, conforme os fluxogramas do PCDT (ver <a href=\"#/hanseniase/fluxo-aps\"><b>Fluxograma na APS</b></a>).</p>" }
  ]
},
{
  id: "classificacao", num: "02", titulo: "Classificação operacional e formas clínicas", grupo: "diagnostico", pag: 26,
  resumo: "PB: 1 a 5 lesões e baciloscopia negativa. MB: mais de 5 lesões e/ou baciloscopia positiva. Na dúvida, tratar como MB.",
  secoes: [
    { t: "tabela", titulo: "Classificação operacional (para fins de tratamento)", head: ["Classificação", "Critérios"], rows: [
      ["<b>Paucibacilar (PB)</b>", "Uma a cinco lesões cutâneas e baciloscopia <b>obrigatoriamente negativa</b>."],
      ["<b>Multibacilar (MB)</b>", "Mais de cinco lesões de pele <b>e/ou</b> baciloscopia positiva. Também MB: mais de um nervo periférico comprometido, desde que documentada a perda ou diminuição de sensibilidade nos respectivos territórios."]
    ]},
    { t: "box", v: "alerta", titulo: "Atenção", html:
      "<p><b>Todos os casos que suscitem dúvida sobre a classificação operacional devem ser tratados como MB.</b></p>" +
      "<p>Comprometimento de um único nervo periférico: a OMS recomenda classificar como MB. É aceitável classificar e tratar como PB apenas quando avaliado em unidade com profissionais experientes no cuidado em hanseníase.</p>" },
    { t: "tabela", titulo: "Formas clínicas (Classificação de Madri)", head: ["Forma", "Características principais"], rows: [
      ["<b>Indeterminada</b>", "Forma inicial. Manchas hipocrômicas em pequeno número, sem alteração de relevo ou textura. Sensibilidade: geralmente hipoestesia térmica apenas; tátil preservada. Sem comprometimento de nervos periféricos. Baciloscopia negativa."],
      ["<b>Tuberculoide</b>", "Lesão geralmente única e bem delimitada: placa de bordas nítidas, elevadas, eritematosas e micropapulosas. Acentuada hipoestesia ou anestesia, hipo/anidrose e diminuição dos pelos. Pode haver o “sinal da raquete”. Baciloscopia negativa."],
      ["<b>Dimorfa</b>", "Lesões em número variável: manchas e placas hipocrômicas, acastanhadas ou violáceas; lesões “foveolares” típicas. Comprometimento neural múltiplo e assimétrico (espessamento, dor e choque). Forma clínica mais incapacitante. Bacilos em número moderado."],
      ["<b>Virchowiana</b>", "Infiltração difusa da face (madarose, aumento dos pavilhões auriculares, congestão nasal), mãos e pés; hansenomas. Lesões podem ter sensibilidade normal. Nervos espessados de forma difusa e simétrica. Baciloscopia com alta carga bacilar."],
      ["<b>Neural pura</b>", "Apresentação exclusivamente neural, sem lesões cutâneas e com baciloscopia negativa. Diagnóstico pelo 2º sinal cardinal. Encaminhar para investigação na Atenção Especializada (diagnóstico diferencial com outras neuropatias)."]
    ]},
    { t: "texto", titulo: "CID-10", html:
      "<p>A30.0 Indeterminada · A30.1 Tuberculoide · A30.2 Tuberculoide borderline · A30.3 Dimorfa · A30.4 Virchowiana borderline · A30.5 Virchowiana · A30.8 Outras formas · A30.9 Não especificada · B92 Sequelas da hanseníase.</p>" }
  ]
},
{
  id: "exames", num: "03", titulo: "Exames de apoio ao diagnóstico", grupo: "diagnostico", pag: 43,
  resumo: "Baciloscopia, teste rápido (só para contatos), histopatologia, qPCR, ultrassom e eletroneuromiografia: quando usar cada um.",
  secoes: [
    { t: "box", v: "info", titulo: "Princípio", html: "<p>Apesar dos avanços, o diagnóstico permanece <b>essencialmente clínico</b>. A avaliação minuciosa da pele e dos nervos periféricos, na maioria dos casos, é suficiente.</p>" },
    { t: "tabela", titulo: "Exames e indicações", head: ["Exame", "Indicação / observações"], rows: [
      ["<b>Avaliação Neurológica Simplificada (ANS)</b>", "<b>Obrigatória.</b> No diagnóstico, a cada 3 meses e ao final do tratamento; repetir em novas queixas e nas reações. Ver <a href=\"#/hanseniase/ans-gif\">ANS e grau de incapacidade</a>."],
      ["<b>Baciloscopia (BAAR) — raspado intradérmico</b>", "Dúvida no diagnóstico; diagnóstico diferencial; dúvida na classificação operacional e na definição do esquema; suspeita de recidiva. Coleta em lesões e sítios padronizados (lóbulos auriculares e cotovelos). Índice baciloscópico (IB) de 0 a 6+. <b>Negativa não exclui hanseníase</b>; positiva classifica como MB. Deve estar disponível na APS."],
      ["<b>Histopatologia</b>", "Quando o diagnóstico persiste indefinido após avaliação clínica e baciloscópica. Atenção Especializada."],
      ["<b>Teste rápido (anticorpos IgM anti-PGL-1)</b>", "<b>Uso exclusivo na investigação de contatos</b> de casos confirmados. Não pode ser usado isoladamente como teste diagnóstico. Ver <a href=\"#/hanseniase/contatos\">Contatos</a>."],
      ["<b>qPCR em biópsia de pele ou nervo</b>", "Uso exclusivo na investigação de contatos, na Atenção Especializada."],
      ["<b>Ultrassom de nervos / eletroneuromiograma</b>", "Exames complementares para avaliar dano neural e diagnóstico diferencial."]
    ]}
  ]
},
{
  id: "ans-gif", num: "04", titulo: "Avaliação neurológica simplificada e grau de incapacidade", grupo: "diagnostico", pag: 43,
  resumo: "ANS no diagnóstico, a cada 3 meses e na alta. Grau 0, 1 ou 2 de incapacidade física e escore OMP.",
  secoes: [
    { t: "lista", titulo: "O que a ANS inclui", itens: [
      "Anamnese: queixas relativas ao nariz, olhos, mãos e pés; limitações nas atividades diárias; fatores de risco para incapacidades;",
      "Inspeção minuciosa das mãos, pés e olhos;",
      "Palpação dos nervos: <b>ulnar, mediano, radial, fibular e tibial posterior</b>;",
      "Testes de sensibilidade (monofilamentos) e de força muscular; acuidade visual."
    ]},
    { t: "box", v: "diag", titulo: "Quando realizar", html:
      "<ul><li>No <b>diagnóstico</b>;</li><li><b>A cada três meses</b> durante a PQT-U;</li><li>Na <b>última dose</b> supervisionada (alta);</li><li>Sempre que houver <b>novas queixas</b> e nas <b>reações hansênicas</b>;</li><li>Antes e após cirurgias preventivas ou reabilitadoras.</li></ul>" +
      "<p>Registrar no formulário padronizado pelo Ministério da Saúde e atualizar a caderneta de saúde da pessoa acometida pela hanseníase.</p>" },
    { t: "tabela", titulo: "Classificação do grau de incapacidade física (GIF)", head: ["Grau", "Olhos", "Mãos", "Pés"], rows: [
      ["<b>0</b>", "Força das pálpebras preservada; sensibilidade da córnea preservada; acuidade visual ≥ 0,1 ou conta dedos a 6 metros.", "Força muscular preservada <b>e</b> sensibilidade palmar preservada (sente o monofilamento 2 g — violeta).", "Força muscular preservada <b>e</b> sensibilidade plantar preservada (sente o monofilamento 2 g — violeta)."],
      ["<b>1</b>", "Diminuição da força das pálpebras sem deficiências visíveis <b>e/ou</b> diminuição ou perda da sensibilidade da córnea.", "Diminuição da força muscular sem deficiências visíveis <b>e/ou</b> não sente o monofilamento 2 g.", "Diminuição da força muscular sem deficiências visíveis <b>e/ou</b> não sente o monofilamento 2 g."],
      ["<b>2</b>", "Deficiência(s) visível(eis): lagoftalmo, ectrópio, triquíase, iridociclite, opacidade corneana <b>e/ou</b> acuidade visual &lt; 0,1 ou não conta dedos a 6 metros (excluídas outras causas).", "Deficiência(s) visível(eis): garras, reabsorção óssea, atrofia muscular, mão caída, lesões tróficas e/ou traumáticas.", "Deficiência(s) visível(eis): garras, reabsorção óssea, atrofia muscular, pé caído, lesões tróficas e/ou traumáticas."]
    ], nota: "Deficiências de grau 1 e/ou 2 somente são atribuídas à hanseníase quando excluídas outras causas. Lesões tróficas/traumáticas: considerar as que estão em áreas com alteração de sensibilidade (não sente 2 g)." },
    { t: "box", v: "info", titulo: "Escore OMP (olhos, mãos e pés)", html:
      "<p>Soma do grau de incapacidade de cada olho, mão e pé. Exemplo do PCDT: mãos 0 e 0, pé direito 1, pé esquerdo 2, olho direito 0, olho esquerdo 2 → <b>OMP = 5</b>. O GIF do paciente é o <b>maior grau</b> encontrado.</p>" +
      "<p>Use a <a href=\"#/hanseniase/calc-gif\"><b>calculadora de GIF e OMP</b></a>.</p>" },
    { t: "box", v: "alerta", titulo: "Atenção", html: "<p>GIF 2 no diagnóstico indica <b>detecção tardia</b>. Corticosteroides podem ter efeito analgésico, mas <b>não protegem do dano neurológico</b> — por isso a ANS periódica é essencial, inclusive para detectar a neurite silenciosa.</p>" }
  ]
},
{
  id: "fluxo-aps", num: "05", titulo: "Fluxograma: diagnóstico e tratamento na APS", grupo: "diagnostico", pag: 127,
  resumo: "Do caso suspeito à alta: avaliação dermatoneurológica, baciloscopia quando houver dúvida, classificação e PQT-U.",
  secoes: [
    { t: "fluxo", titulo: "Fluxograma 1 — Caso suspeito (indivíduo não contactante)", passos: [
      { pergunta: "Avaliação dermatológica e neurológica", itens: [
          "Inspeção da pele em toda a superfície corporal",
          "Sensibilidade térmica, dolorosa e tátil nas lesões e/ou áreas dormentes",
          "Palpação dos nervos periféricos + avaliação sensitiva e motora nas mãos, pés e olhos"] ,
        sim: { tipo: "atb", html: "Seguir conforme os achados clínicos abaixo." } },
      { pergunta: "Achados clínicos 1: lesão(ões)/área(s) com alteração de sensibilidade e/ou espessamento de nervo com alterações sensitivas, motoras e/ou autonômicas?",
        sim: { tipo: "atb", html: "<b>CASO DE HANSENÍASE DEFINIDO</b>: definir classificação operacional + grau de incapacidade física + avaliar reações hansênicas + <b>notificar no Sinan</b>." },
        nao: { tipo: "talvez", html: "Avaliar achados clínicos 2 e 3." } },
      { pergunta: "Achados clínicos 2 ou 3: teste de sensibilidade duvidoso com avaliação neurológica normal/inconclusiva, OU comprometimento neural comprovado sem lesões cutâneas?",
        sim: { tipo: "talvez", html: "<b>Solicitar baciloscopia.</b><br>Positiva (IB &gt; 0,0) → caso definido (MB).<br>Negativa (IB = 0,0) → encaminhar para a Atenção Especializada (Fluxograma 2)." },
        nao: { tipo: "nao-atb", html: "<b>Descartado</b>: investigar outras causas." } },
      { pergunta: "Classificação e tratamento", itens: [
          "<b>PB</b> (até 5 lesões e baciloscopia negativa): PQT-U por 6 meses + tratamento das reações, se houver",
          "<b>MB</b> (mais de 5 lesões e/ou 2 ou mais nervos comprometidos e/ou baciloscopia positiva): PQT-U por 12 meses + tratamento das reações, se houver",
          "Caso novo com IB ≥ 2,0: encaminhar para investigação de resistência"],
        sim: { tipo: "atb", html: "<b>Seguimento:</b> avaliação clínica mensal + dose supervisionada mensal + ANS trimestral.<br><b>Alta:</b> confirmação de todas as doses supervisionadas + avaliação clínica + ANS." } }
    ], nota: "Fonte: Fluxograma 1 — Apêndice A do PCDT (pág. 127)." }
  ]
},
{
  id: "pqtu", num: "06", titulo: "Poliquimioterapia única (PQT-U)", grupo: "tratamento", pag: 58,
  resumo: "Rifampicina + clofazimina + dapsona para todos os casos: 6 doses (PB) ou 12 doses (MB). Doses por peso.",
  secoes: [
    { t: "box", v: "trat", titulo: "Esquema de primeira linha", html:
      "<p>Associação de <b>rifampicina, dapsona e clofazimina</b> para <b>todos os casos</b>, independentemente da classificação operacional (adotada no Brasil em 2021 como PQT-U). <b>PB: 6 doses mensais · MB: 12 doses mensais.</b></p>" },
    { t: "tabela", titulo: "Quadro 1 — Esquemas por faixa etária e peso", head: ["Faixa etária e peso", "Apresentação", "Dose mensal supervisionada", "Dose diária autoadministrada", "Duração"], rows: [
      ["<b>Peso acima de 50 kg</b>", "PQT-U Adulto", "Rifampicina 600 mg<br>Clofazimina 300 mg<br>Dapsona 100 mg", "Clofazimina 50 mg diariamente<br>Dapsona 100 mg diariamente", "MB: 12 meses<br>PB: 6 meses"],
      ["<b>Crianças ou adultos com peso entre 30 e 50 kg</b>", "PQT-U Infantil", "Rifampicina 450 mg<br>Clofazimina 150 mg<br>Dapsona 50 mg", "Clofazimina 50 mg em dias alternados<br>Dapsona 50 mg diariamente", "MB: 12 meses<br>PB: 6 meses"],
      ["<b>Crianças com peso abaixo de 30 kg</b>", "Adaptação da PQT-U Infantil", "Rifampicina 10 mg/kg<br>Clofazimina 6 mg/kg<br>Dapsona 2 mg/kg", "Clofazimina 1 mg/kg/dia<br>Dapsona 2 mg/kg/dia", "MB: 12 meses<br>PB: 6 meses"]
    ], nota: "Rifampicina também disponível no SUS em suspensão oral 20 mg/mL. Para crianças &lt; 30 kg, a clofazimina diária é dificultada (cápsulas de 50 e 100 mg): calcular a dose semanal e dividir em 2 ou 3 tomadas. Ex.: criança de 15 kg → 1 mg/kg × 15 kg × 7 dias = 105 mg/semana → uma cápsula de 50 mg duas vezes por semana. Use a <a href=\"#/hanseniase/calc-pqtu\"><b>calculadora de dose</b></a>." },
    { t: "box", v: "diag", titulo: "Critério de alta por cura", html:
      "<ul><li><b>PB:</b> 6 doses mensais supervisionadas em intervalo de <b>até 9 meses</b>;</li><li><b>MB:</b> 12 doses mensais supervisionadas em intervalo de <b>até 18 meses</b>.</li></ul>" +
      "<p>Ao completar, o paciente recebe alta por cura e sai do registro ativo do Sinan. Alta = confirmação de todas as doses supervisionadas + avaliação clínica + ANS.</p>" },
    { t: "box", v: "alerta", titulo: "Não prolongar a PQT-U", html:
      "<p><b>Não está autorizada a extensão do tratamento com PQT-U por mais de 12 meses.</b> A regressão das lesões pode levar meses ou anos (mais lenta nos MB com hansenomas, lesões infiltradas e IB elevado). Se houver suspeita de persistência de infecção ativa ao final, investigar resistência (ver <a href=\"#/hanseniase/resistencia\">Resistência</a>). Só casos com resistência comprovada recebem novo ciclo, com esquema de segunda linha.</p>" },
    { t: "box", v: "info", titulo: "Reações durante o tratamento", html: "<p>Durante os episódios reacionais, a PQT-U deve ser <b>mantida</b>. Se a reação ocorrer após a alta, a PQT-U <b>não</b> deve ser reintroduzida, exceto quando houver critérios de recidiva.</p>" }
  ]
},
{
  id: "medicamentos", num: "07", titulo: "Medicamentos: orientações de uso", grupo: "tratamento", pag: 63,
  resumo: "Apresentações disponíveis e cuidados com rifampicina, clofazimina e dapsona (jejum, gestação, pigmentação, hemólise).",
  secoes: [
    { t: "lista", titulo: "Apresentações disponíveis no SUS", itens: [
      "<b>PQT-U Adulto</b> (rifampicina 300 + 300 mg + clofazimina 100 mg + dapsona 100 mg + clofazimina 50 mg);",
      "<b>PQT-U Infantil</b> (rifampicina 300 + 150 mg + clofazimina 50 mg + dapsona 50 mg);",
      "Rifampicina: suspensão oral 20 mg/mL (2%); cápsula 300 mg;",
      "Clofazimina: cápsulas de 50 mg e de 100 mg;",
      "Minociclina: comprimido 100 mg · Ofloxacino: comprimido 400 mg · Claritromicina: comprimido 500 mg;",
      "Prednisona: comprimidos de 5 mg e 20 mg · Pentoxifilina: comprimido 400 mg · Talidomida: comprimido 100 mg."
    ]},
    { t: "tabela", titulo: "Orientações por medicamento", head: ["Medicamento", "Orientações"], rows: [
      ["<b>Rifampicina</b>", "Único bactericida potente da PQT-U; sempre associada a outros hansenostáticos. Absorção reduzida em ~30% com alimentos: administrar <b>em jejum, 1 hora antes ou 2 horas após as refeições</b>. Gestação: uso nas últimas semanas pode causar hemorragia pós-natal na mãe e no neonato — recomenda-se vitamina K nesses casos."],
      ["<b>Clofazimina</b>", "Também atua na reação tipo 2. Absorção aumenta com alimentos. Causa pigmentação da pele (vermelho a castanho-escuro), que desaparece em 6 a 12 meses após a suspensão; urina, suor e expectoração rosados. Gestação e aleitamento: <b>manter</b> o tratamento (pigmentação no bebê regride)."],
      ["<b>Dapsona</b>", "Fracamente bactericida. Monitorar sinais de <b>hemólise</b> (risco maior com antimaláricos e deficiência de G6PD). Gestação: em pacientes com hanseníase, recomenda-se <b>manter</b> a dapsona."]
    ]},
    { t: "box", v: "info", titulo: "Contracepção", html: "<p>A rifampicina pode reduzir o efeito dos anticoncepcionais orais; abordar contracepção rotineiramente em mulheres com potencial reprodutivo (efeito pouco provável, pois a rifampicina é mensal na PQT-U).</p>" }
  ]
},
{
  id: "eventos-adversos", num: "08", titulo: "Eventos adversos e interações", grupo: "tratamento", pag: 71,
  resumo: "Hemólise e anemia pela dapsona, pigmentação pela clofazimina, cuidados com corticoide, talidomida e pentoxifilina.",
  secoes: [
    { t: "tabela", titulo: "Quadro 2 — Eventos adversos", busca: true, head: ["Medicamento", "Eventos adversos"], rows: [
      ["<b>Rifampicina</b>", "Hepatotoxicidade com leve aumento transitório das transaminases; rara nas doses da hanseníase e <b>não é indicação para interromper</b> o tratamento."],
      ["<b>Dapsona</b>", "Geralmente bem tolerada, mas pode causar <b>hemólise</b> e, mais raramente, anemia significativa. Não é necessário testar G6PD de rotina. Monitorar hemograma nos primeiros meses, sempre que possível. Raros: hepatopatia, nefropatia, agranulocitose, psicose. Reação mais grave: <b>síndrome sulfônica</b>."],
      ["<b>Clofazimina</b>", "Pigmentação da pele; coloração rosada de urina, suor e expectoração; ictiose em pernas e antebraços; efeitos gastrointestinais (cólicas, diarreia, perda de peso). A pigmentação <b>não</b> é critério para suspensão, exceto insatisfação extrema com risco de abandono."],
      ["<b>Minociclina</b>", "Prurido, erupção, urticária, fotossensibilidade, tontura, descoloração dos dentes, hipertensão intracraniana, hiperpigmentação com uso prolongado, entre outros."],
      ["<b>Ofloxacino</b>", "Tendinites (raramente ruptura do tendão de Aquiles; risco maior em idosos e com corticoide); fotossensibilização; risco de aneurisma/dissecção da aorta; tonturas e sonolência."],
      ["<b>Prednisona</b>", "Ganho de peso, retenção de líquido, hipertensão, hiperglicemia/diabetes, osteoporose, úlcera péptica, catarata, glaucoma, alterações de humor, Cushing, insuficiência suprarrenal, entre outros."],
      ["<b>Talidomida</b>", "Neuropatia periférica (pode ser irreversível); sedação; neutropenia — <b>não iniciar se neutrófilos &lt; 750/mm³</b>; teratogênica."],
      ["<b>Pentoxifilina</b>", "Elevação de transaminases, hipotensão, arritmia, tontura, cefaleia, distúrbios gastrointestinais, reações alérgicas, entre outros."]
    ]},
    { t: "tabela", titulo: "Quadro 3 — Principais interações", head: ["Medicamento", "Interações"], rows: [
      ["<b>Rifampicina</b>", "Pode reduzir o efeito dos anticoncepcionais orais (usar método adicional)."],
      ["<b>Dapsona</b>", "Antimaláricos e outros causadores de hemólise ou depressores da medula aumentam o risco de hemólise; probenecida, trimetoprima, amprenavir, saquinavir aumentam eventos adversos; zidovudina aumenta neutropenia."],
      ["<b>Clofazimina</b>", "Antiácidos e suco de laranja podem reduzir os níveis plasmáticos."],
      ["<b>Prednisona</b>", "Rifampicina, fenitoína e fenobarbital reduzem o efeito; cetoconazol, itraconazol, claritromicina e ritonavir aumentam. Atenção a diuréticos (hipopotassemia), anticoagulantes, AINE/álcool (úlcera) e hipoglicemiantes."],
      ["<b>Talidomida</b>", "Potencializa sedativos e álcool; cuidado com medicamentos que causam bradicardia ou neuropatia. Com corticoide: risco tromboembólico (ver reação tipo 2)."],
      ["<b>Pentoxifilina</b>", "Potencializa insulina/hipoglicemiantes, anticoagulantes e anti-hipertensivos; aumenta teofilina."]
    ]},
    { t: "box", v: "alerta", titulo: "Notificação", html: "<p>Toda reação adversa a medicamento deve ser notificada para fins de farmacovigilância. A anemia pela dapsona é mais frequente em <b>mulheres</b>, e as reações adversas são mais relatadas em <b>idosos</b> — vigilância mais cuidadosa.</p>" }
  ]
},
{
  id: "segunda-linha", num: "09", titulo: "Esquemas de 2ª linha por reação adversa e ROM", grupo: "tratamento", pag: 76,
  resumo: "Substituições quando há reação adversa grave à rifampicina, dapsona ou clofazimina, e esquema ROM para dificuldade de adesão.",
  secoes: [
    { t: "box", v: "alerta", titulo: "Antes de substituir", html: "<p>As reações adversas devem ser avaliadas criteriosamente para evitar troca inadequada da PQT-U, que pode gerar resistência medicamentosa. Substituir quando a reação é relevante e considerada irreversível (falha terapêutica). Critérios de monitoramento e alta permanecem os mesmos da PQT-U, <b>exceto MB com intolerância à rifampicina: 24 doses supervisionadas</b>.</p>" },
    { t: "tabela", titulo: "Quadros 4, 5 e 6 — Esquemas alternativos", head: ["Situação", "Classificação", "Dose mensal supervisionada", "Dose diária autoadministrada", "Duração"], rows: [
      [{ grupo: "Reação adversa à rifampicina" }],
      ["Rifampicina", "PB ou MB", "Clofazimina 300 mg + ofloxacino 400 mg + minociclina 100 mg", "Clofazimina 50 mg + ofloxacino 400 mg + minociclina 100 mg", "6 meses"],
      ["Rifampicina", "MB (após os 6 meses)", "Clofazimina 300 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "Clofazimina 50 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "18 meses subsequentes"],
      [{ grupo: "Reação adversa à dapsona" }],
      ["Dapsona", "PB", "Rifampicina 600 mg + clofazimina 300 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "Clofazimina 50 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "6 meses"],
      ["Dapsona", "MB", "Rifampicina 600 mg + clofazimina 300 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "Clofazimina 50 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "12 meses"],
      [{ grupo: "Reação adversa à clofazimina" }],
      ["Clofazimina", "PB", "Rifampicina 600 mg + dapsona 100 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "Dapsona 100 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "6 meses"],
      ["Clofazimina", "MB", "Rifampicina 600 mg + dapsona 100 mg + ofloxacino 400 mg", "Dapsona 100 mg + ofloxacino 400 mg (ou minociclina 100 mg)", "12 meses"]
    ]},
    { t: "tabela", titulo: "Quadro 9 — Esquema ROM (dificuldade de adesão)", intro: "<p>Em situações extremas — graves transtornos mentais, alcoolismo grave, dependência química avançada, doentes terminais com múltiplos medicamentos, intolerância grave a múltiplos fármacos da PQT-U e outras situações especiais — administrar <b>somente uma dose mensal supervisionada</b>:</p>", head: ["Classificação", "Dose mensal supervisionada", "Duração"], rows: [
      ["PB", "Rifampicina 600 mg + ofloxacino 400 mg + minociclina 100 mg", "6 meses"],
      ["MB", "Rifampicina 600 mg + ofloxacino 400 mg + minociclina 100 mg", "24 meses"]
    ]}
  ]
},
{
  id: "resistencia", num: "10", titulo: "Resistência do M. leprae: quando investigar", grupo: "tratamento", pag: 89,
  resumo: "Investigar caso novo com IB ≥ 2,0 e casos com suspeita de falha ou recidiva. Diagnóstico e tratamento na Atenção Especializada.",
  secoes: [
    { t: "box", v: "diag", titulo: "Resistência primária — investigar", html: "<p>Todo <b>caso novo</b> de hanseníase que, no diagnóstico inicial, apresente <b>IB ≥ 2,0</b>. Iniciar a PQT-U (12 doses) e encaminhar à Atenção Especializada para biópsia (preferência por hansenomas ou lesões infiltradas), com amostra enviada ao Lacen.</p>" },
    { t: "lista", titulo: "Resistência secundária (após PQT-U) — critérios", numerada: true, itens: [
      "Persistência de hansenomas e/ou lesões infiltradas após o término da PQT-U, com aspecto inalterado em relação ao diagnóstico;",
      "IB inalterado ou aumentado em relação ao exame anterior (mesmos sítios e intervalo mínimo de 1 ano);",
      "Reações hansênicas reentrantes por mais de 3 anos após a alta, não responsivas a corticosteroides ou talidomida;",
      "Abandono da PQT-U por mais de 6 meses (casos MB);",
      "Recidiva comprovada (reaparecimento de lesões cutâneas e/ou neurológicas) após 5 anos de tratamento prévio com PQT-U."
    ]},
    { t: "box", v: "info", titulo: "Papel da APS", html: "<p>A comprovação laboratorial, o tratamento de segunda linha e o acompanhamento dos casos resistentes são feitos na <b>Atenção Especializada</b> (consultas mensais e registro no SIRH). Sem resistência ou teste inconclusivo: contrarreferência à APS mantendo a PQT-U.</p>" },
    { t: "tabela", titulo: "Quadros 7 e 8 — Esquemas para resistência comprovada (referência)", head: ["Resistência", "Primeiros 6 meses (diariamente)", "Próximos 18 meses (diariamente)"], rows: [
      ["Rifampicina — esquema 1", "Ofloxacino 400 mg + minociclina 100 mg + clofazimina 50 mg", "Clofazimina 50 mg + ofloxacino 400 mg (ou minociclina 100 mg)"],
      ["Rifampicina — esquema 2", "Ofloxacino 400 mg + claritromicina 500 mg + clofazimina 50 mg", "Ofloxacino 400 mg + clofazimina 50 mg"],
      ["Rifampicina e ofloxacino", "Claritromicina 500 mg + minociclina 100 mg + clofazimina 50 mg", "Clofazimina 50 mg + claritromicina 500 mg (ou minociclina 100 mg)"]
    ], nota: "Resistência isolada ao ofloxacino não indica falha da PQT-U: excluir do protocolo e investigar na Atenção Especializada." }
  ]
}
]);
