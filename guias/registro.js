/* Registro de guias/documentos do app.
   Para adicionar um novo documento:
   1. Crie a pasta guias/<id>/ com um ou mais arquivos topicos-N.js
      (cada um faz: (window.GUIA_TOPICOS ||= {})["<id>"] = [...].concat([...]))
   2. Adicione uma entrada abaixo, listando os arquivos em `arquivos`.
   3. Suba a versão em sw.js (VERSAO) para os aparelhos baixarem o conteúdo novo.
   Este arquivo também é lido pelo service worker (por isso usa `self`). */
self.GUIAS = [
  {
    id: "antimicrobianos",
    sigla: "ATB",
    titulo: "Antimicrobianos na Prática Clínica",
    subtitulo: "Um guia para profissionais da Atenção Primária do Ceará",
    fonte: "Secretaria da Saúde do Estado do Ceará (SESA-CE) · CAMO-NET Brasil",
    pdf: "guias/antimicrobianos/guia-antimicrobiano-pratica-clinica-ce.pdf",
    cor: "#1d6fd8",
    arquivos: [
      "guias/antimicrobianos/topicos-1.js",
      "guias/antimicrobianos/topicos-2.js",
      "guias/antimicrobianos/topicos-3.js",
      "guias/antimicrobianos/topicos-4.js",
      "guias/antimicrobianos/topicos-5.js"
    ],
    grupos: [
      { id: "pele", sigla: "PE", eyebrow: "Pele e partes moles", nome: "Infecções de pele" },
      { id: "respiratorio", sigla: "AR", eyebrow: "Vias aéreas", nome: "Respiratórias" },
      { id: "digestivo", sigla: "GI", eyebrow: "Eixo digestivo", nome: "Gastrointestinais" },
      { id: "genital", sigla: "GE", eyebrow: "Genital", nome: "Ginecológicas e ISTs" },
      { id: "urinario", sigla: "GU", eyebrow: "Trato urinário", nome: "Infecção urinária" },
      { id: "odonto", sigla: "OD", eyebrow: "Cuidados odontológicos", nome: "Odontologia" },
      { id: "utilitarios", sigla: "UC", eyebrow: "Apoio à decisão", nome: "Utilitários clínicos" }
    ],
    atalhos: [
      { rotulo: "Sepse", topico: "sepse" },
      { rotulo: "Dosagem pediátrica", topico: "posologia-pediatria" },
      { rotulo: "Ajuste renal", topico: "posologia-adulto-renal" },
      { rotulo: "Profilaxia odontologia", topico: "odontologia" }
    ]
  },
  {
    id: "hanseniase",
    sigla: "HAN",
    titulo: "Hanseníase",
    subtitulo: "Protocolo Clínico e Diretrizes Terapêuticas (PCDT) da Hanseníase — 2022",
    fonte: "Ministério da Saúde · Portaria SCTIE/MS nº 67/2022",
    pdf: "guias/hanseniase/pcdt-hanseniase-2022.pdf",
    cor: "#7b3fa0",
    arquivos: [
      "guias/hanseniase/topicos-1.js",
      "guias/hanseniase/topicos-2.js"
    ],
    grupos: [
      { id: "diagnostico", sigla: "DX", eyebrow: "Suspeição e classificação", nome: "Diagnóstico" },
      { id: "tratamento", sigla: "TX", eyebrow: "Poliquimioterapia", nome: "Tratamento (PQT-U)" },
      { id: "reacoes", sigla: "RE", eyebrow: "Reações e neurites", nome: "Reações hansênicas" },
      { id: "seguimento", sigla: "SG", eyebrow: "Acompanhamento e vigilância", nome: "Seguimento e contatos" },
      { id: "utilitarios", sigla: "UC", eyebrow: "Apoio à decisão", nome: "Utilitários clínicos" }
    ],
    atalhos: [
      { rotulo: "PQT-U", topico: "pqtu" },
      { rotulo: "Reação tipo 1", topico: "reacao-tipo1" },
      { rotulo: "Contatos e BCG", topico: "contatos" },
      { rotulo: "Grau de incapacidade", topico: "calc-gif" }
    ]
  }
];
