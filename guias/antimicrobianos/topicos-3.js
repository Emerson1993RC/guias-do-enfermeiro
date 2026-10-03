/* Capítulo 09 — Infecção do Trato Urinário (págs. 28–32) */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).antimicrobianos = (window.GUIA_TOPICOS.antimicrobianos || []).concat([
{
  id: "itu-gestante-homem-crianca", num: "09", titulo: "ITU: bacteriúria, gestantes, homens e crianças", grupo: "urinario", pag: 28,
  resumo: "Bacteriúria assintomática (rastreio em gestantes) e ITU em gestantes, homens e crianças. Sempre solicitar sumário de urina e urocultura nesses grupos.",
  secoes: [
    { t: "texto", titulo: "Bacteriúria assintomática", html:
      "<p>Caracterizada pela presença de bactérias na urocultura com ≥ 10<sup>5</sup> UFC/mL e ausência de sintomas clínicos de infecção.</p>" +
      "<p><b>NÃO</b> há indicação de coleta indiscriminada de urocultura em pacientes assintomáticos.</p>" +
      "<p>A coleta de urocultura e o tratamento de bacteriúria assintomática estão indicados somente em:</p><ul><li>Gestantes;</li><li>Pré-operatório de cirurgia urológica.</li></ul>" },
    { t: "box", v: "alerta", titulo: "Atenção!", html: "<p>A escolha do antimicrobiano deve ser baseada no resultado da urocultura.</p>" },
    { t: "duas", titulo: "Rastreio de urocultura em gestantes (1ª consulta)",
      a: { rotulo: "Urocultura positiva", tipo: "atb", passos: ["Tratamento conforme resultado de antibiograma", "Repetir urocultura 2 semanas após o fim do tratamento nas gestantes de alto risco", "Urocultura de controle positiva: Retratar"] },
      b: { rotulo: "Urocultura negativa", tipo: "nao-atb", passos: ["Não prescrever antimicrobianos", "Não repetir urocultura, exceto se apresentar sintomas"] } },
    { t: "texto", titulo: "ITU em gestantes, homens ou crianças", html:
      "<p>Em homens, cistite não é frequente. Realizar exame clínico da próstata e considerar hipótese de uretrite (ver uretrite/IST).</p>" +
      "<p>Em crianças, a distinção entre infecção urinária baixa e pielonefrite pode ser difícil, especialmente em menores de 2 meses. Em caso de dúvida, encaminhar para serviço de referência.</p>" +
      "<p>Em gestantes, atenção para os antimicrobianos que podem ser utilizados.</p>" },
    { t: "box", v: "alerta", titulo: "Exames", html: "<p><b>SOLICITAR SUMÁRIO DE URINA E UROCULTURA EM TODOS OS CASOS SUSPEITOS PARA ESSES GRUPOS.</b></p>" },
    { t: "texto", titulo: "Infecções sintomáticas", html: "<p>No primeiro episódio, os exames laboratoriais não são mandatórios e a terapia pode ser empírica a depender do grupo do paciente, conforme descrições a seguir.</p>" },
    { t: "esquemas", titulo: "Antimicrobiano empírico em gestantes", cols: ["Posologia"], grupos: [{ nome: "Opções (uma delas)", itens: [
      { f: "Cefalexina", a: "500mg VO, de 6/6h por 5-7 dias" },
      { f: "OU Amoxicilina", a: "500mg VO, de 8/8h por 5-7 dias" },
      { f: "OU Fosfomicina", a: "3g VO, dose única*" }
    ]}], nota: "*A fosfomicina não deve ser utilizada como primeira escolha de forma rotineira. Seu uso está reservado para situações específicas, como pacientes com contraindicação a betalactâmicos ou quando não houver resposta ao tratamento inicial." },
    { t: "esquemas", titulo: "Antimicrobiano empírico em homens", cols: ["Posologia"], grupos: [{ nome: "Opções (uma delas)", itens: [
      { f: "Sulfametoxazol-Trimetoprim", a: "(800/160mg) VO, de 12/12h por 5-7 dias" },
      { f: "OU Ciprofloxacino", a: "500mg VO, de 12/12h por 5-7 dias" },
      { f: "OU Nitrofurantoína", a: "100mg VO, de 6/6h por 5-7 dias" }
    ]}] },
    { t: "esquemas", titulo: "Antimicrobiano empírico em crianças > 2 meses", cols: ["Posologia"], grupos: [{ nome: "Opções (uma delas)", itens: [
      { f: "Cefalexina", a: "50-100mg/kg/dia VO, dividido de 8/8h por 5-7 dias" },
      { f: "OU Sulfametoxazol-Trimetoprim", a: "6-12mg/kg/dia de Trimetoprim VO, dividido de 12/12h por 5-7 dias" },
      { f: "OU Amoxicilina", a: "50-90mg/kg/dia VO, dividido de 8/8h (máx. 500mg/dose) por 5-7 dias" }
    ]}] },
    { t: "lista", titulo: "Orientações do tratamento", itens: [
      "A melhora dos sintomas ocorrerá após 24 a 48 horas do início do tratamento.",
      "Possibilidade de efeitos adversos com uso de antimicrobianos.",
      "Necessidade reavaliação para ajustar o tratamento de acordo com o resultado de urocultura e antibiograma (terapia direcionada ao patógeno).",
      "Retorno em caso de não melhora."
    ]}
  ]
},
{
  id: "itu-mulher-nao-gestante", num: "09", titulo: "ITU em mulheres não gestantes", grupo: "urinario", pag: 30,
  resumo: "Cistite é muito frequente em mulheres. No primeiro episódio, geralmente não é necessário solicitar sumário de urina e urocultura.",
  secoes: [
    { t: "texto", html: "<p>Cistite é muito frequente em mulheres.</p><p>Sinal de Giordano positivo ou febre pode ser indício de cistite complicada.</p><p>Caso a paciente tenha coletado urocultura, considerar resultado para escolha da terapia antimicrobiana.</p>" },
    { t: "box", v: "alerta", titulo: "Atenção!", html: "<ul><li><b>NÃO</b> é necessário solicitar Sumário de urina e Urocultura.</li><li>Solicitar Sumário de urina e Urocultura se ITU há menos de 1 mês ou de repetição.</li><li>Iniciar antimicrobiano empírico.</li></ul>" },
    { t: "esquemas", titulo: "Antimicrobiano empírico em mulheres não gestantes", cols: ["Posologia"], grupos: [{ nome: "Opções (uma delas)", itens: [
      { f: "Nitrofurantoína", a: "100mg VO, de 6/6h por 3-5 dias" },
      { f: "OU Sulfametoxazol-Trimetoprim", a: "(800/160mg) VO, de 12/12h por 3 dias" },
      { f: "OU Ciprofloxacino", a: "500mg VO, de 12/12h por 5-7 dias" }
    ]}] },
    { t: "lista", titulo: "Orientações do tratamento", itens: [
      "A melhora dos sintomas ocorrerá após 24 a 48 horas do início do tratamento.",
      "Possibilidade de efeitos adversos com uso de antimicrobianos.",
      "Retorno em caso de não melhora."
    ]},
    { t: "lista", titulo: "Conduta em caso de não resposta à terapia empírica", numerada: true, itens: [
      "Solicitar Sumário de urina e Urocultura com antibiograma.",
      "Ajustar tratamento de acordo com resultado de antibiograma."
    ]}
  ]
},
{
  id: "pielonefrite", num: "09", titulo: "Pielonefrite aguda", grupo: "urinario", pag: 31,
  resumo: "Suspeitar quando sinais e sintomas de ITU estiverem associados à febre ou Sinal de Giordano. Iniciar antimicrobiano empírico e reavaliar após urocultura.",
  secoes: [
    { t: "texto", html: "<p>Suspeitar de infecção do trato urinário alto (pielonefrite aguda) quando houver sinais e sintomas sugestivos de infecção do trato urinário associados à febre ou Sinal de Giordano.</p>" },
    { t: "box", v: "alerta", titulo: "Atenção!", html: "<p>Iniciar antimicrobiano empírico e reavaliar a escolha após o resultado da urocultura.</p><p>Se suspeita de sepse, administrar primeira dose de antimicrobiano e conduzir conforme fluxograma de <a href=\"#/antimicrobianos/sepse\"><b>“Identificação de sepse”</b></a>.</p>" },
    { t: "box", v: "info", titulo: "Avaliar necessidade de internação", html: "<p>A decisão deve ser individualizada. A decisão de internar é mandatória quando há sepse. Outras indicações incluem febre persistentemente alta ou dor intensa, incapacidade de realizar tratamento medicamento oral ou suspeita de obstrução do trato urinário.</p>" },
    { t: "esquemas", titulo: "Inicia antimicrobiano empírico", cols: ["Posologia"], grupos: [{ nome: "Opções (uma delas)", itens: [
      { f: "Ciprofloxacino", a: "400mg IV (ou 500 mg VO), de 12/12h" },
      { f: "OU Levofloxacino", a: "500-750mg 1x dia" },
      { f: "OU Ceftriaxona", a: "1g IV ou IM, de 12/12h (ou 2g IV ou IM, 1x / dia)" }
    ]}], nota: "Reavaliar e ajustar o tratamento conforme resultado de cultura. <b>Tratar por 7 a 10 dias.</b>" }
  ]
},
{
  id: "itu-repeticao", num: "09", titulo: "ITU de repetição e profilaxia", grupo: "urinario", pag: 31,
  resumo: "≥ 2 episódios em 6 meses ou ≥ 3 em 12 meses. Sempre solicitar urocultura. Profilaxia por 6-12 meses ou dose pós-coito.",
  secoes: [
    { t: "texto", html: "<p><b>Definição:</b> ocorrência de ≥ 2 episódios em 6 meses <b>OU</b> ≥ 3 episódios em 12 meses.</p><p><b>Fatores de risco:</b> relações sexuais frequentes, fatores mecânicos ou fisiológicos que impedem o esvaziamento da bexiga e menopausa.</p>" },
    { t: "box", v: "alerta", titulo: "Atenção!", html: "<ul><li>Solicitar Sumário de urina e Urocultura em todos os casos de ITU de repetição.</li><li>Iniciar antimicrobiano empírico e ajustar tratamento conforme resultado de antibiograma.</li></ul>" },
    { t: "esquemas", titulo: "Opções de tratamento", cols: ["Posologia"], grupos: [{ nome: "Opções (uma delas)", itens: [
      { f: "Fosfomicina", a: "3g VO, dose única" },
      { f: "OU Sulfametoxazol-trimetoprim", a: "(800/160mg) VO, de 12/12h por 3 dias" },
      { f: "OU Norfloxacino", a: "400mg VO, de 12/12h por 3 dias" },
      { f: "OU Nitrofurantoína", a: "100mg VO, de 6/6h por 3-5 dias" }
    ]}] },
    { t: "texto", titulo: "Profilaxia", html: "<p>Para mulheres na menopausa, considerar uso de estrogênio tópico vaginal. Não há embasamento científico para recomendar o uso de Cranberry ou probióticos como medida preventiva de ITU de repetição. Não usar rotineiramente a profilaxia antimicrobiana como estratégia preventiva, devido ao risco de efeitos colaterais e resistência antimicrobiana. A profilaxia antimicrobiana pode ser utilizada de forma contínua ou pós-coito (quando há relação entre os episódios de ITU e relação sexual).</p>" },
    { t: "esquemas", titulo: "Opções para profilaxia", cols: ["Posologia"], grupos: [{ nome: "Por 6 a 12 meses ou dose pós-coito", itens: [
      { f: "Nitrofurantoína", a: "100mg/dia" },
      { f: "OU Fosfomicina", a: "3g a cada 10 dias" },
      { f: "OU Cefalexina", a: "250 mg/dia (se gestante)" }
    ]}] }
  ]
}
]);
