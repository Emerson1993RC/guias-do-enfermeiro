/* Guia: Insulinoterapia na APS — Ministério da Saúde · CONASEMS, 2026.
   Tópicos 28–34: "Preparação e técnica de aplicação" (Módulo 1, caderno 5). */
(window.GUIA_TOPICOS = window.GUIA_TOPICOS || {}).insulinoterapia = (window.GUIA_TOPICOS.insulinoterapia || []).concat([
{
  id: "agulhas", num: "28", titulo: "Agulhas: tamanho, ângulo e prega cutânea", grupo: "tecnica", pag: 17,
  fonte: "Preparação e técnica de aplicação (MS/CONASEMS, 2026)",
  resumo: "No SUS: agulha de 4 mm para caneta (90°, prega dispensável na maioria) e seringa de 6 mm (prega indispensável). Uma agulha por dia por tipo de insulina.",
  secoes: [
    { t: "box", v: "info", titulo: "Por que importa", html: "<p>A insulina deve ir no <b>tecido subcutâneo</b>. Muito superficial (intradérmica): absorção lenta e incompleta. Muito profunda (intramuscular): absorção acelerada, oscilações e mais risco de hipoglicemia. A pele (epiderme + derme) tem cerca de 2 a 2,2 mm; o subcutâneo varia com o local, a postura e o IMC.</p><p>SBD e PCDT do DM1 indicam agulhas de <b>4 e 5 mm para canetas</b> e <b>6 mm para seringas</b>. <b>No SUS: agulhas de 4 mm para canetas e seringas com agulha fixa de 6 mm.</b></p>" },
    { t: "tabela", titulo: "Quadro 1 — Uso de agulhas na aplicação subcutânea", head: ["Agulha", "Indicação", "Prega subcutânea", "Ângulo", "Observações"], rows: [
      ["<b>4 e 5 mm</b>", "Adultos e crianças", "Dispensável, exceto em crianças &lt; 6 anos e pessoas com pouco tecido subcutâneo", "90° em adultos e crianças", "Com escassez de tecido SC, fazer prega nos locais de aplicação"],
      ["<b>6 mm</b>", "Adultos e crianças", "<b>Indispensável</b>", "90° em adultos; 45° em crianças e adolescentes", "Adultos com escassez de tecido SC: 45° para evitar aplicação IM"],
      ["<b>8 mm</b>", "Adultos", "<b>Indispensável</b>", "90° em adultos; 45° em crianças e adolescentes", "Adultos com escassez de tecido SC: 45°. Evitar em pessoas magras e crianças"]
    ], nota: "Fonte do quadro: Sparapani et al. (2025). Agulhas mais finas (32G) e bisel de cinco facetas reduzem dor; agulha reutilizada perde a afiação." },
    { t: "box", v: "trat", titulo: "Prega cutânea — técnica correta", html: "<p>Elevar suavemente pele e subcutâneo com <b>dois ou três dedos</b>, sem pegar o músculo. Quando indicada, <b>manter a prega durante toda a aplicação</b> e aguardar <b>pelo menos 10 segundos</b> após injetar a dose antes de retirar a agulha e soltar a prega (seguir as instruções do fabricante).</p><p><b>Erros comuns:</b> fazer a prega com a mão inteira (pega o músculo) e soltar a prega antes de terminar.</p>" },
    { t: "box", v: "alerta", titulo: "Uma agulha por dia (Nota Técnica Conjunta nº 169/2026)", html: "<p>A dispensação prevista é de <b>uma agulha por dia, por tipo de insulina</b>, com troca diária. Combine com a pessoa o melhor horário do dia para a troca e <b>não limpe a agulha com álcool ou outro produto</b>.</p><p>Quando houver reutilização nessas condições, a orientação (opinião de especialistas) é <b>manter a agulha acoplada à caneta e tampada</b> durante o dia, evitando tirar e recolocar a cada aplicação — especialmente importante para quem tem baixa visão ou pouca destreza (menos manipulação, menos agulha torta e menos contaminação).</p>" }
  ]
},
{
  id: "locais-rodizio", num: "29", titulo: "Locais de aplicação, rodízio e lipohipertrofia", grupo: "tecnica", pag: 28,
  fonte: "Preparação e técnica de aplicação (MS/CONASEMS, 2026)",
  resumo: "Abdome, braços, coxas e glúteos. Um quadrante por semana, 1,5 cm entre aplicações e nunca sobre lipohipertrofia.",
  secoes: [
    { t: "tabela", titulo: "Locais de aplicação (pele íntegra, sem cicatrizes ou estrias)", head: ["Região", "Onde aplicar", "Absorção"], rows: [
      ["<b>Abdome</b>", "Entre 1,5 cm acima da sínfise púbica e 1 cm abaixo da última costela, a pelo menos 3 dedos (3–5 cm) do umbigo, até os flancos. Em crianças, 2 dedos adultos do umbigo", "Mais rápida"],
      ["<b>Braços</b>", "Face posterior (tríceps), terço médio", "Intermediária"],
      ["<b>Coxas</b>", "Faces anterior e lateral externa, terço médio", "Mais lenta"],
      ["<b>Glúteos</b>", "Quadrante superior externo (face lateral posterior e flancos superiores)", "Mais lenta"]
    ], nota: "Não aplicar na parte interna das coxas e dos braços." },
    { t: "lista", titulo: "Rodízio", numerada: true, itens: [
      "Dividir a região em <b>quadrantes ou metades</b> e usar <b>uma subárea por semana</b> (PCDT do DM2);",
      "O rodízio pode ser de uma região para outra (ex.: abdome → coxas → flancos → braços);",
      "Cada nova aplicação a <b>pelo menos 1,5 cm</b> da anterior (cerca da largura de um dedo), sem repetir o mesmo ponto por <b>15 a 20 dias</b>;",
      "<b>Evitar locais com lipohipertrofia.</b>"
    ]},
    { t: "box", v: "alerta", titulo: "Lipohipertrofia", html: "<p>É a complicação subcutânea mais comum: aumento ou endurecimento do tecido, com “caroços”. Aplicar ali causa absorção errática, variabilidade, hiperglicemia e hipoglicemias inexplicáveis.</p><p><b>Inspecionar e palpar os locais em toda consulta</b> e registrar o tamanho da lesão. Se encontrada: não aplicar na área até o tecido se recuperar (meses a anos), <b>intensificar a monitorização e reavaliar a dose</b> ao migrar para tecido saudável (a absorção melhora e pode causar hipoglicemia).</p>" },
    { t: "tabela", titulo: "Gestação", head: ["Trimestre", "Orientação"], rows: [
      ["1º", "Sem necessidade de mudar o local ou a técnica"],
      ["2º", "Áreas laterais ou centrais do abdome, com prega cutânea"],
      ["3º", "Priorizar as áreas laterais do abdome, com prega cutânea"]
    ], nota: "Não é preciso trocar o comprimento da agulha por causa da gravidez." }
  ]
},
{
  id: "caneta-passo-a-passo", num: "30", titulo: "Passo a passo da aplicação com caneta", grupo: "tecnica", pag: 35,
  fonte: "Preparação e técnica de aplicação (MS/CONASEMS, 2026)",
  resumo: "16 passos: homogeneizar a NPH, teste de escorva antes de cada aplicação, dose, aplicar e aguardar 10 segundos com o botão pressionado.",
  secoes: [
    { t: "lista", titulo: "Caneta descartável (a reutilizável segue a mesma técnica)", numerada: true, itens: [
      "Lavar e secar as mãos.",
      "Reunir caneta, agulha, algodão e álcool 70% líquido.",
      "<b>NPH:</b> homogeneizar com <b>20 movimentos suaves</b> de rolamento ou inversão, até ficar uniformemente branca e turva, <b>sem agitar</b>. Insulinas límpidas (regular, glargina) não precisam.",
      "Fazer assepsia com álcool 70% no local da caneta onde a agulha será acoplada; esperar secar.",
      "Retirar o lacre da agulha e rosqueá-la na caneta.",
      "Retirar a tampa externa e depois a tampa interna da agulha.",
      "<b>Teste de escorva:</b> caneta com a agulha para cima, leves batidas no reservatório para as bolhas subirem; selecionar as unidades indicadas pelo fabricante (bula ANVISA); pressionar o botão até o seletor voltar a zero e ver a insulina sair na ponta da agulha.",
      "Selecionar a dose prescrita.",
      "Fazer antissepsia com álcool 70% no local de aplicação e aguardar secar.",
      "Fazer a prega cutânea, se necessário, e introduzir a agulha.",
      "Pressionar o botão injetor até o indicador na janela de dose voltar a zero.",
      "<b>Aguardar no mínimo 10 segundos</b>, mantendo o botão pressionado.",
      "Manter o botão pressionado até retirar completamente a agulha da pele.",
      "Remover a agulha da caneta usando a tampa externa.",
      "Descartar a agulha em recipiente para perfurocortantes.",
      "Recolocar a tampa da caneta e guardar em local adequado."
    ]},
    { t: "box", v: "alerta", titulo: "Teste de escorva", html: "<p>Fazer <b>antes de cada aplicação</b>: tira o ar da caneta e confirma que a agulha funciona. Se a insulina não sair, repetir. <b>Após até 6 tentativas sem sair insulina, trocar a agulha</b> e fazer novo teste.</p>" },
    { t: "box", v: "info", titulo: "Agulha ao longo do dia", html: "<p>Os passos 14 e 15 descrevem o descarte após a aplicação. Com a dispensação de <b>uma agulha por dia por tipo de insulina</b> (Nota Técnica Conjunta nº 169/2026), quando houver reutilização naquele dia, a orientação é manter a agulha acoplada e tampada, trocando-a diariamente. Ver <a href=\"#/insulinoterapia/agulhas\">Agulhas</a>.</p>" }
  ]
},
{
  id: "caneta-reutilizavel", num: "31", titulo: "Caneta reutilizável: refil, limpeza e travamento", grupo: "tecnica", pag: 39,
  fonte: "Preparação e técnica de aplicação (MS/CONASEMS, 2026)",
  resumo: "Como trocar o carpule, não lavar a caneta, usar só refil do mesmo fabricante e o que fazer quando a caneta trava antes de completar a dose.",
  secoes: [
    { t: "box", v: "info", titulo: "Características", html: "<p>A pessoa recebe a caneta e retira na farmácia apenas os <b>carpules (tubetes)</b>. As canetas do SUS duram <b>3 anos</b> (conforme bula) e têm graduação de <b>1 unidade</b>. Partes: corpo (janela de dosagem, seletor, botão de injeção, cursor) e suporte do carpule, além da tampa. Exemplos: Biopemm (glargina) e GlobalX U2 (NPH e regular). Siga sempre as instruções do fabricante.</p>" },
    { t: "lista", titulo: "Troca do carpule", numerada: true, itens: [
      "Desenroscar o suporte do carpule do corpo da caneta e retirar o carpule vazio;",
      "Recuar o cursor, que estará estendido (na maioria dos modelos, basta empurrá-lo delicadamente até parar);",
      "Pegar um carpule novo, retirado da geladeira, e colocá-lo no suporte — <b>conferir o rótulo (tipo de insulina) e a validade</b>;",
      "Enroscar firmemente o suporte de volta, sem deixar espaço entre o cursor e o êmbolo de borracha do carpule."
    ]},
    { t: "tabela", titulo: "Cuidados", head: ["Cuidado", "Orientação"], rows: [
      ["Limpeza", "Não lavar com água, não mergulhar em líquidos e não lubrificar. Limpar só com pano úmido"],
      ["Compatibilidade", "Refil só da mesma marca da caneta (o carpule da marca A não encaixa na caneta da marca B). Conferir também a compatibilidade da agulha"],
      ["Uso individual", "Caneta nunca é compartilhada, nem trocando a agulha (risco de refluxo de sangue para o carpule)"]
    ]},
    { t: "box", v: "trat", titulo: "A caneta travou antes de completar a dose", html: "<p>Acontece quando o carpule não tem insulina suficiente. <b>Exemplo:</b> programou 20 UI e a caneta parou com o visor mostrando 5 → foram aplicadas 15 UI e faltam 5 UI. <b>Trocar o carpule por um novo e aplicar as 5 UI que ficaram no visor</b>, completando a dose.</p>" }
  ]
},
{
  id: "erros-aplicacao", num: "32", titulo: "Erros de aplicação e de dose: como prevenir", grupo: "tecnica", pag: 48,
  fonte: "Preparação e técnica de aplicação (MS/CONASEMS, 2026)",
  resumo: "Os erros mais comuns com caneta, fatores que levam a erro de dose e estratégias como dupla checagem e técnica de retorno.",
  secoes: [
    { t: "lista", titulo: "Erros mais frequentes", itens: [
      "Não fazer o teste de escorva;", "Selecionar dose errada por dificuldade de ler o visor;", "Não pressionar completamente o botão injetor;",
      "Retirar a agulha logo após injetar (refluxo de insulina);", "Reutilizar a agulha em desacordo com as instruções;", "Não fazer rodízio dos locais;",
      "Aplicar repetidamente sobre lipohipertrofia;", "Armazenar a insulina em temperatura inadequada;", "Usar agulha inadequada para o perfil da pessoa;",
      "<b>Compartilhar canetas</b> — contraindicado mesmo trocando a agulha."
    ]},
    { t: "duas", titulo: "Erros de dose", a: { tipo: "alerta", rotulo: "Fatores associados", passos: [
        "Déficits visuais;", "Limitações cognitivas;", "Baixo letramento em saúde;", "Redução da habilidade manual;",
        "Uso de vários tipos de insulina;", "Embalagens e dispositivos parecidos;", "Prescrições complexas ou incompletas." ] },
      b: { tipo: "atb", rotulo: "Estratégias de prevenção", passos: [
        "Confirmar o tipo de insulina antes de cada aplicação;", "Dupla checagem da dose quando depende de cuidador;", "Etiquetas ou identificações diferentes para cada insulina;",
        "Demonstração prática nas consultas;", "Reavaliar a técnica periodicamente, mesmo em usuários experientes;", "Simplificar o esquema sempre que possível." ] } },
    { t: "lista", titulo: "A pessoa deve saber", itens: [
      "Identificar cada insulina que usa;", "Horários e relação com as refeições;", "Executar todas as etapas da aplicação;",
      "Reconhecer hipoglicemia e hiperglicemia;", "Armazenar corretamente;", "Identificar alterações nos locais de aplicação;", "Quando procurar o serviço."
    ]},
    { t: "box", v: "info", titulo: "Técnica de retorno", html: "<p>A pessoa <b>demonstra o procedimento</b> ao profissional: é uma das estratégias mais eficazes para achar erros e reforçar o aprendizado. A educação em insulinoterapia é contínua, não uma orientação pontual na prescrição. Insulina é medicamento <b>potencialmente perigoso</b> (ISMP).</p>" }
  ]
},
{
  id: "populacoes-especiais", num: "33", titulo: "Técnica em populações especiais", grupo: "tecnica", pag: 52,
  fonte: "Preparação e técnica de aplicação (MS/CONASEMS, 2026)",
  resumo: "Idosos, crianças e adolescentes, gestantes, pessoas com obesidade e com limitações motoras ou visuais.",
  secoes: [
    { t: "tabela", titulo: "Orientações", head: ["População", "Ações recomendadas"], rows: [
      ["<b>Idosos</b> (baixa visão, tremor, artrite, menos força)", "Avaliar periodicamente a capacidade funcional e a leitura do visor; agulhas curtas; dispositivos de fácil acionamento; envolver família ou cuidador"],
      ["<b>Crianças e adolescentes</b> (medo, ansiedade, dependência do cuidador)", "Linguagem adequada à idade; participação progressiva no autocuidado; supervisão dos responsáveis; <b>rodízio rigoroso</b> (menor área corporal)"],
      ["<b>Gestantes</b> (sensibilidade à insulina muda rápido)", "Monitorização glicêmica intensiva; revisar a técnica com frequência; rodízio conforme a evolução da gestação; preferir o abdome lateral"],
      ["<b>Obesidade</b>", "Agulha de 4 mm é eficaz para a maioria, independentemente do IMC; evitar pressionar demais a caneta na pele; rodízio sistemático"],
      ["<b>Limitações motoras ou visuais</b> (neuropatia, sequelas, artrite, baixa visão)", "Dispositivos com melhor contraste e “cliques” audíveis; auxílio para estabilizar a caneta; cuidador treinado; avaliar com o prescritor simplificar o esquema"]
    ]}
  ]
},
{
  id: "rever-tecnica", num: "34", titulo: "Quando rever a técnica de aplicação", grupo: "tecnica", pag: 58,
  fonte: "Preparação e técnica de aplicação (MS/CONASEMS, 2026)",
  resumo: "Dor incomum, vazamento, sangramento, hematoma, botão duro, glicemias imprevisíveis ou retirada irregular de insumos.",
  secoes: [
    { t: "box", v: "alerta", titulo: "Sinais de alerta — orientar a pessoa a relatar", html: "<ul><li>Dor incomum (ou ausência incomum de dor);</li><li>Vazamento de insulina;</li><li>Sangramento ou hematoma;</li><li>Precisar de mais força para pressionar o botão da caneta.</li></ul><p>Podem indicar aplicação em lipohipertrofia ou dispositivo com defeito: <b>examinar os locais de aplicação e revisar a técnica</b>.</p>" },
    { t: "lista", titulo: "O profissional também deve investigar", itens: [
      "Glicemias instáveis, imprevisíveis ou incompatíveis com o esquema em uso (possível lipohipertrofia);",
      "Atrasos ou inconsistências na retirada de insulina e agulhas (dificuldade de acesso, falha de fornecimento, necessidade de apoio, reutilização de agulhas);",
      "Avaliar presencialmente os locais de aplicação sempre que possível, inclusive em quem é acompanhado por telessaúde."
    ]}
  ]
}
]);
