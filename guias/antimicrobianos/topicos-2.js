/* Capítulo 08 — Infecções Sexualmente Transmissíveis (págs. 22–27) */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).antimicrobianos = (window.GUIA_TOPICOS.antimicrobianos || []).concat([
{
  id: "ists", num: "08", titulo: "Infecções sexualmente transmissíveis", grupo: "genital", pag: 22,
  resumo: "Uretrite e úlceras genitais: sífilis, herpes genital, cancroide, linfogranuloma venéreo (LGV) e donovanose.",
  secoes: [
    { t: "box", v: "alerta", titulo: "Atenção!", html: "<ul><li>Aproveitar a oportunidade para investigar gestação e outras ISTs durante o atendimento (HIV, sífilis, Hepatite B e C);</li><li>Sempre solicitar sorologia anti-HIV;</li><li>Oferecer a profilaxia pré-exposição (PrEP) ou pós-exposição (PEP) ao HIV, quando indicado;</li><li>Orientar sobre vacinação para hepatite A, B e HPV.</li></ul>" },

    { t: "texto", titulo: "Uretrite", html:
      "<p>Caracterizadas por inflamação e corrimento uretral, associada a dor, disúria, prurido, eritema do meato uretral e micção lenta e dolorosa.</p>" +
      "<p><b>História clínica:</b> avaliar práticas sexuais e fatores de risco para IST bem como uso de produtos e/ou objetos na prática sexual, para auxiliar diagnóstico diferencial.</p>" +
      "<p><b>Aspecto do corrimento:</b> mucopurulento, com volume variável, associado a dor uretral (independentemente da micção), disúria, estrangúria (micção lenta e dolorosa), prurido uretral e eritema de meato uretral.</p>" +
      "<p><b>Agente etiológico:</b> <i>Neisseria gonorrhoeae, Chlamydia trachomatis, Ureaplasma urealyticum, Mycoplasma genitalium</i>.</p>" },
    { t: "box", v: "diag", titulo: "Uretrite — diagnóstico", html: "<p>Em muitos casos, o diagnóstico é sindrômico e não é possível identificar o agente etiológico.</p>" },
    { t: "esquemas", titulo: "Uretrite — tratamento", cols: ["Posologia Adulto"], grupos: [
      { nome: "Antimicrobiano de escolha", itens: [{ f: "Ceftriaxona + Azitromicina", a: "500mg IM, dose única + 1g VO, dose única" }] },
      { nome: "Alternativa (ou não resposta)", itens: [{ f: "Ceftriaxona + Doxiciclina", a: "500mg IM, dose única + 100mg VO, de 12/12h por 7 dias" }] }
    ], nota: "As parcerias sexuais devem ser testadas/tratadas." },

    { t: "texto", titulo: "Sífilis", html: "<p><b>Agente etiológico:</b> <i>Treponema pallidum</i>.</p>" },
    { t: "box", v: "diag", titulo: "Sífilis — diagnóstico", html:
      "<p>Exame direto (detecção de <i>T. pallidum</i> nas amostras biológicas).</p>" +
      "<p>Solicitar teste treponêmico (preferencialmente teste rápido) para investigação inicial.</p>" +
      "<p>Realização dos testes imunológicos (não treponêmicos): sempre recomendada para posterior monitoramento do tratamento, controle de cura e notificação de caso.</p>" +
      "<p>A detecção do treponema nas lesões primárias (cancro duro) pode ser anterior à soroconversão.</p>" },
    { t: "tabela", titulo: "Sífilis — estágios e manifestações clínicas", head: ["Estágio da Sífilis", "Manifestações Clínicas"], rows: [
      ["Sífilis primária", "<ul><li>Cancro duro (úlcera genital indolor);</li><li>Linfonodos regionais.</li></ul>"],
      ["Sífilis secundária", "<ul><li>Lesões cutâneo-mucosas (roséola, placas mucosas, sifílides papulosas, sifílides palmoplantares, condiloma plano, alopecia em clareira, madarose, rouquidão);</li><li>Micropoliadenopatia;</li><li>Linfadenopatia generalizada;</li><li>Sinais constitucionais;</li><li>Quadros neurológicos, oculares, hepáticos.</li></ul>"],
      ["Sífilis latente recente (até um ano de duração)", "Assintomática."],
      ["Sífilis latente tardia (mais de um ano de duração)", "Assintomática."],
      ["Sífilis terciária", "<ul><li>Cutâneas: lesões gomosas e nodulares, de caráter destrutivo.</li><li>Ósseas: periostite, osteíte gomosa ou esclerosante, artrites, sinovites e nódulos justa-articulares;</li><li>Cardiovasculares: estenose de coronárias, aortite e aneurisma da aorta, especialmente da porção torácica;</li><li>Neurológicas: meningite, gomas do cérebro ou da medula, atrofia do nervo óptico, lesão do sétimo par craniano, manifestações psiquiátricas, <i>tabes dorsalis</i> e quadros demenciais como o da paralisia geral.</li></ul>"]
    ]},
    { t: "tabela", titulo: "Sífilis — tratamento", head: ["Estágio da Sífilis", "Antimicrobiano de escolha"], rows: [
      ["RECENTE: sífilis primária, secundária e latente recente (até 1 ano de evolução)", "<b>Penicilina benzatina</b> 2,4 milhões UI IM, dose única (1,2 milhão UI em cada glúteo)."],
      ["TARDIA: sífilis latente tardia (mais de 1 ano de evolução) ou latente com duração ignorada e sífilis terciária", "<b>Penicilina benzatina</b> 2,4 milhões UI IM, 1x/semana (1,2 milhão UI em cada glúteo) por 3 semanas; (dose total: 7,2 milhões de UI IM)."],
      [{ grupo: "Alternativa" }],
      ["Alérgicos à penicilina (exceto para gestantes)", "<b>Doxiciclina</b> 100mg VO, de 12/12h por 15 dias (sífilis recente)<br>OU<br><b>Doxiciclina</b> 100mg VO, de 12/12h por 30 dias (sífilis tardia)<br><br><b>Gestantes alérgicas à penicilina devem ser encaminhadas para dessensibilização com profissionais com experiência nessa prática. Penicilina benzatina é a única opção segura e eficaz para o tratamento adequado das gestantes.</b>"]
    ]},
    { t: "box", v: "info", titulo: "Sífilis — comentários", html:
      "<p>O seguimento ideal deve ser feito com teste não treponêmicos (VDRL ou RPR) a cada 3 meses (3, 6, 9 e 12 meses). Testes treponêmicos (FTA-Abs, Teste rápido, por exemplo) costumam se manter positivos ao longo da vida. Por isso, não são úteis para acompanhamento de cura ou reinfecção. Em gestantes o controle deve ser mensal.</p>" +
      "<p>Espera-se que o VDRL/RPR caia, pelo menos, 2 diluições após 6 meses do tratamento para sífilis recente e, pelo menos, 2 diluições após 12 meses de tratamento para sífilis tardia.</p>" +
      "<p>No caso de sífilis recente em gestantes, alguns especialistas recomendam uma dose adicional de 2,4 milhões de unidades de penicilina G benzatina, IM, uma semana após a primeira dose.</p>" +
      "<p>As parcerias sexuais devem ser testadas/tratadas.</p>" },

    { t: "texto", titulo: "Herpes genital", html:
      "<p><b>História clínica:</b> primeira manifestação (primo-infecção) costuma ser bastante sintomática e, na maioria das vezes, é acompanhada de manifestações gerais, podendo cursar com febre, mal-estar, mialgia e disúria, com ou sem retenção urinária. Em especial, nas mulheres, pode simular quadro de infecção urinária baixa. A linfadenomegalia inguinal dolorosa bilateral está presente em 50% dos casos.</p>" +
      "<p><b>Episódios recorrentes:</b> sensibilidade local acompanhada de dor ou sensação de queimação que precedem o aparecimento das lesões. Linfadenomegalia inguinal dolorosa bilateral. Ao contrário de sífilis e cancro mole, casos de infecções por herpes têm o aparecimento de vesículas e bolhas antes de a lesão evoluir para úlcera.</p>" +
      "<p><b>Agente etiológico:</b> <i>Herpes simplex vírus</i> tipo 1 ou 2 (HSV 1 ou 2).</p>" },
    { t: "tabela", titulo: "Herpes genital — tratamento", head: ["Situação", "Tratamento"], rows: [
      ["Primeira manifestação", "<b>Aciclovir</b> 400mg VO, de 8/8h por 7 a 10 dias"],
      ["Episódios de herpes de repetição", "<b>Aciclovir</b> 400mg VO, de 8/8h por 5 dias"]
    ]},
    { t: "box", v: "info", titulo: "Herpes genital — comentários", html:
      "<p>Em pessoas que vivem com HIV, a apresentação clínica pode ser atípica (lesões hipertróficas). Idealmente, deve-se iniciar o tratamento no período prodrômico.</p>" +
      "<p>Pacientes com mais de 6 episódios ao ano são elegíveis para tratamento supressivo com Aciclovir 400mg VO 2x/dia, por até 6 meses, podendo o tratamento supressivo ser prolongado por até 2 anos (indica-se avaliação periódica de função renal e hepática).</p>" +
      "<p>O tratamento exclusivamente tópico costuma ter pouca eficácia na evolução da doença.</p>" +
      "<p>Não se recomenda tratar parcerias sexuais assintomáticas.</p>" },

    { t: "texto", titulo: "Cancroide", html:
      "<p>As lesões são dolorosas, geralmente múltiplas e devidas à autoinoculação. A borda é irregular, apresentando contornos eritematosos e edematosos e um fundo heterogêneo, recoberto por exsudato necrótico, amarelado, com odor fétido, que, quando removido, revela tecido de granulação com sangramento fácil. Em 50% dos casos pode ocorrer formação de fístulas nos linfonodos com drenagem de secreção por um único orifício.</p>" +
      "<p><b>Agente etiológico:</b> <i>Haemophilus ducreyi</i>.</p>" },
    { t: "esquemas", titulo: "Cancroide — tratamento", cols: ["Posologia Adulto"], grupos: [
      { nome: "Antimicrobiano 1ª opção", itens: [{ f: "Azitromicina", a: "1g VO, dose única" }] },
      { nome: "Alternativa", itens: [{ f: "Ceftriaxona", a: "250mg IM, dose única" }, { f: "OU Ciprofloxacino", a: "500mg VO, de 12/12h por 3 dias" }] }
    ], nota: "O tratamento sistêmico deve ser acompanhado de medidas locais de higiene.<br>O tratamento das parcerias sexuais é recomendado, mesmo quando estas forem assintomáticas.<br>Pessoas vivendo com HIV podem necessitar de tempo maior de tratamento." },

    { t: "texto", titulo: "Linfogranuloma venéreo (LGV)", html:
      "<p>Inicia-se por pápula, pústula ou exulceração indolor, que desaparece sem deixar sequela. Muitas vezes, não é notada. No homem, a linfadenopatia inguinal se desenvolve entre uma e seis semanas após a lesão inicial, geralmente é unilateral e costuma ser crônica. Na mulher, a localização da adenopatia depende do local da lesão de inoculação.</p>" +
      "<p>Pode ocorrer proctocolite grave na população de homens que fazem sexo com homens (HSH). O comprometimento ganglionar pode evoluir com supuração e fistulização por múltiplos orifícios.</p>" +
      "<p><b>Agente etiológico:</b> <i>Chlamydia trachomatis</i>.</p>" },
    { t: "esquemas", titulo: "LGV — tratamento", cols: ["Posologia Adulto"], grupos: [
      { nome: "Antimicrobiano 1ª opção", itens: [{ f: "Doxiciclina", a: "100mg VO, de 12/12h por 21 dias." }] },
      { nome: "Alternativa", itens: [{ f: "Azitromicina", a: "1g VO, 1x/semana por 21 dias (preferencialmente nas gestantes)." }] }
    ], nota: "As parcerias sexuais devem ser tratadas. Se a parceria for sintomática, o tratamento deve ser realizado com os mesmos medicamentos do caso-índice. Se a parceria for assintomática, recomenda-se um desses tratamentos: <b>azitromicina</b> 1g, VO, dose única OU <b>Doxiciclina</b> 100mg, VO, 2x/dia, por 7 dias.<br>Pessoas vivendo com HIV podem necessitar de tempo maior de tratamento." },

    { t: "texto", titulo: "Donovanose", html:
      "<p>Ulceração de borda plana ou hipertrófica, bem delimitada, com fundo granuloso, de aspecto vermelho vivo e de sangramento fácil. Evolui lenta e progressivamente, podendo se tornar vegetante ou úlcera-vegetante.</p>" +
      "<p>As lesões costumam ser múltiplas, sendo frequente a configuração em \"espelho\" nas bordas cutâneas e/ou mucosas.</p>" +
      "<p><b>Agente etiológico:</b> <i>Klebsiella granulomatis</i>.</p>" },
    { t: "esquemas", titulo: "Donovanose — tratamento", cols: ["Posologia Adulto"], grupos: [
      { nome: "Antimicrobiano 1ª opção", itens: [{ f: "Azitromicina", a: "1g VO, 1x/semana por pelo menos três semanas ou até cicatrização das lesões" }] },
      { nome: "Alternativa", itens: [
        { f: "Doxiciclina", a: "100mg 1 cp VO, de 12/12h por pelo menos 21 dias ou até o desaparecimento completo das lesões" },
        { f: "Ciprofloxacino", a: "750mg VO, de 12/12h por pelo menos 21 dias ou até a cicatrização das lesões" },
        { f: "Sulfametoxazol-trimetoprim", a: "800/160mg VO, de 12/12h por no mínimo 3 semanas ou até a cicatrização das lesões" }
      ]}
    ], nota: "As parcerias sexuais devem ser testadas/tratadas. Pode ocorrer recorrência entre 6 e 18 meses após, mesmo com tratamento adequado." }
  ]
}
]);
