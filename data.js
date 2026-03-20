// ============================================
// Química Revisada — Dados Centralizados
// ============================================
// Para adicionar um novo vídeo: basta adicionar um objeto em "videos"
// com o youtubeId correspondente. As questões ficam em VIDEO_QUESTIONS.

const TRILHAS = [
  {
    id: "atomistica",
    title: "Atomística e Tabela Periódica",
    icon: "fas fa-atom",
    color: "#00d4aa",
    hue: 160,
    description: "Modelos atômicos, número atômico, massa, íons, isótopos e propriedades periódicas.",
    videos: [
      {
        id: "atom-01",
        youtubeId: "4XXpptyjRGI",
        title: "Revisão: Modelos Atômicos",
        description: "De Dalton a Bohr — tudo que o ENEM cobra sobre modelos atômicos.",
        duration: "18 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-02",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Tabela Periódica e Propriedades",
        description: "Famílias, períodos, raio atômico, eletronegatividade e energia de ionização.",
        duration: "22 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-03",
        youtubeId: "YJr65BzgqQE",
        title: "Estrutura Atômica I Modelos Atômicos: O modelo de Dalton",
        description: "Abordagem completa sobre o modelo atômico de Dalton.",
        duration: "11:59",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-04",
        youtubeId: "Axz-cIMNzl8",
        title: "Estrutura Atômica II Modelo Atômico de Thomson",
        description: "Descoberta do elétron e o modelo 'pudim de passas'.",
        duration: "15:49",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-05",
        youtubeId: "vmgugJvLjE4",
        title: "Estrutura Atômica III Experimento de Millikan",
        description: "A determinação da carga do elétron via gota de óleo.",
        duration: "10:24",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-06",
        youtubeId: "li9viIcWwAY",
        title: "Estrutura Atômica IV Descoberta dos prótons",
        description: "Como os prótons foram identificados no núcleo.",
        duration: "12:56",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-07",
        youtubeId: "PCh0yU33r2U",
        title: "Estrutura Atômica V Modelo de Ernest Rutherford",
        description: "O experimento da folha de ouro e o modelo nuclear.",
        duration: "17:56",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-08",
        youtubeId: "U19G4L4xz6Y",
        title: "Estrutura Atômica VI Descoberta dos nêutrons",
        description: "A partícula neutra de Chadwick e o núcleo completo.",
        duration: "15:42",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-09",
        youtubeId: "OmK6AJPsyts",
        title: "Estrutura Atômica VII Semelhanças Atômicas",
        description: "Isótopos, Isóbaros, Isótonos e Isodiáferos.",
        duration: "15:45",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-10",
        youtubeId: "0VrBmk0fIjs",
        title: "Estrutura Atômica VIII Radiação Eletromagnética",
        description: "Espectro eletromagnético e propriedades da luz.",
        duration: "16:32",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-11",
        youtubeId: "35ToUXw3BFM",
        title: "Estrutura Atômica IX Fluorescência e Fosforescência",
        description: "Diferenças entre brilhar no escuro e emitir luz.",
        duration: "13:24",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-12",
        youtubeId: "3RjAqH-MYF8",
        title: "Estrutura Atômica X Efeito Fotoelétrico",
        description: "Espectros descontínuos e o início da quântica.",
        duration: "13:50",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-13",
        youtubeId: "-b9DZgThi-k",
        title: "Estrutura Atômica XI Modelo de Niels Bohr",
        description: "Postulados de Bohr e a quantização de energia.",
        duration: "21:05",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-14",
        youtubeId: "f9l0kp35IP0",
        title: "Estrutura Atômica XII Modelo de Sommerfeld",
        description: "Órbitas elípticas e a evolução do átomo de Bohr.",
        duration: "8:33",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-15",
        youtubeId: "MQuptFvx2oc",
        title: "Estrutura Atômica XIII Mecânica Quântica",
        description: "Dualidade, Incerteza e o conceito de Orbital.",
        duration: "11:34",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-16",
        youtubeId: "y2N9idQaEGM",
        title: "Estrutura Atômica XIV Números Quânticos",
        description: "Descrição completa do estado dos elétrons.",
        duration: "18:38",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-17",
        youtubeId: "jyH8XeKERnk",
        title: "Estrutura Atômica XV Números Quânticos - Parte II",
        description: "Aprofundamento em spin e magnético.",
        duration: "11:40",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-18",
        youtubeId: "B5R08gKKic8",
        title: "Estrutura Atômica XVI Formas dos Orbitais",
        description: "Visualização espacial dos orbitais s, p, d e f.",
        duration: "14:04",
        difficulty: "Complementar",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "atom-19",
        youtubeId: "dVsk69ubFY8",
        title: "Estrutura Atômica XVII Configurações Eletrônicas",
        description: "Distribuição eletrônica nos subníveis de energia.",
        duration: "6:05",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      }
    ],
    resolutions: [
      {
        id: "res-atom-01",
        youtubeId: "vB-oTjI5YwM",
        title: "Resolução de Questões: Atomística",
        description: "O professor Josué resolve questões fundamentais sobre modelos atômicos e tabela periódica.",
        duration: "15 min"
      }
    ]
  },
  {
    id: "ligacoes",
    title: "Ligações Químicas",
    icon: "fas fa-link",
    color: "#7c5cfc",
    hue: 255,
    description: "Iônica, covalente e metálica. Geometria molecular, polaridade e forças intermoleculares.",
    videos: [
      {
        id: "lig-01",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Ligações Iônica, Covalente e Metálica",
        description: "Diferenças, propriedades e como identificar cada tipo de ligação.",
        duration: "25 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "lig-02",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Geometria Molecular e Polaridade",
        description: "VSEPR, geometrias, moléculas polares e apolares, forças intermoleculares.",
        duration: "20 min",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      }
    ],
    resolutions: [
      {
        id: "res-lig-01",
        youtubeId: "wX85K9Pq2-w",
        title: "Resolução de Questões: Ligações Químicas",
        description: "Aprofunde seu conhecimento com a resolução comentada de questões de vestibulares.",
        duration: "12 min"
      }
    ]
  },
  {
    id: "estequiometria",
    title: "Estequiometria",
    icon: "fas fa-balance-scale",
    color: "#ff6b6b",
    hue: 0,
    description: "Balanceamento, mol, massa molar, cálculos estequiométricos, rendimento e pureza.",
    videos: [
      {
        id: "est-01",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Cálculos Estequiométricos",
        description: "Mol, massa molar, volume molar, balanceamento e cálculos passo a passo.",
        duration: "30 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      }
    ],
    resolutions: [
      {
        id: "res-est-01",
        youtubeId: "mX-qM5s5Bf4",
        title: "Resolução de Questões: Estequiometria",
        description: "Cálculos estequiométricos resolvidos detalhadamente para o ENEM.",
        duration: "20 min"
      }
    ]
  },
  {
    id: "solucoes",
    title: "Soluções e Concentrações",
    icon: "fas fa-flask",
    color: "#ffa64d",
    hue: 35,
    description: "Concentração comum, molaridade, diluição, mistura de soluções e propriedades coligativas.",
    videos: [
      {
        id: "sol-01",
        youtubeId: "r8YyJLfuYpM",
        title: "Perdendo o Medo de Soluções — Ep 01",
        description: "Introdução a soluções: mistura homogênea, soluto, solvente e classificações.",
        duration: "15 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-02",
        youtubeId: "ZdeDtZ9alBk",
        title: "Perdendo o Medo de Soluções — Ep 02",
        description: "Coeficiente de solubilidade e curvas de solubilidade.",
        duration: "14 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-03",
        youtubeId: "ZRkLPNm_T_8",
        title: "Colóides: Uma Visão Completa",
        description: "Sistemas coloidais, efeito Tyndall, sol, gel e emulsão.",
        duration: "12 min",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-04",
        youtubeId: "WorXRPZqjeI",
        title: "Vidrarias de Laboratório",
        description: "Principais vidrarias e equipamentos usados no preparo de soluções.",
        duration: "10 min",
        difficulty: "Complementar",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-05",
        youtubeId: "ej1DiGo0N0o",
        title: "Diluição de Soluções",
        description: "Conceito de diluição e uso da fórmula C₁V₁ = C₂V₂.",
        duration: "13 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-06",
        youtubeId: "tDJQjYYND2A",
        title: "Mistura de Soluções: Solutos Iguais",
        description: "Como calcular a concentração ao misturar soluções de mesmo soluto.",
        duration: "11 min",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-07",
        youtubeId: "5Y19aC5tZQs",
        title: "Titulação Ácido-Base",
        description: "Procedimento de titulação, ponto de equivalência e indicadores.",
        duration: "16 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-08",
        youtubeId: "edflEPN9-7Y",
        title: "Dica 1: Saturada, Insaturada e Supersaturada",
        description: "Classificação de soluções quanto à quantidade de soluto.",
        duration: "8 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-09",
        youtubeId: "sShI6t-8zkM",
        title: "Dica 2: Unidades de Concentração",
        description: "Concentração comum (g/L), molaridade (mol/L) e título.",
        duration: "10 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-10",
        youtubeId: "zh05AqbnY6Q",
        title: "Dissolução ou Diluição?",
        description: "Diferença entre dissolver um soluto e diluir uma solução pronta.",
        duration: "9 min",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-11",
        youtubeId: "auGAGT92Ooc",
        title: "Dica 4: Unidades de Soluções",
        description: "Molalidade, fração molar, ppm e conversão entre unidades.",
        duration: "12 min",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-12",
        youtubeId: "aGADEgwQDtc",
        title: "Soluções: Saturada, Insaturada ou Supersaturada!",
        description: "Revisão completa com exercícios sobre classificação de soluções.",
        duration: "14 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-13",
        youtubeId: "Hm2ckXkJnIE",
        title: "Soluções: Agora a Gente Aprende!",
        description: "Revisão geral de soluções com resolução de exercícios do ENEM.",
        duration: "18 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "sol-14",
        youtubeId: "t_lTRmOIDz8",
        title: "Unidades de Concentração — Você Vai Achar Fácil!",
        description: "Resumo completo e prático de todas as unidades de concentração.",
        duration: "20 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      }
    ],
    resolutions: [
      {
        id: "res-sol-01",
        youtubeId: "K9pP0QnQ2Gk",
        title: "Resolução de Questões: Soluções",
        description: "Passo a passo das principais questões de concentrações e diluições.",
        duration: "18 min"
      }
    ]
  },
  {
    id: "termoquimica",
    title: "Termoquímica",
    icon: "fas fa-fire-alt",
    color: "#00b4d8",
    hue: 195,
    description: "Entalpia, Lei de Hess, energia de ligação, processos endo e exotérmicos.",
    videos: [
      {
        id: "term-01",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Entalpia e Lei de Hess",
        description: "ΔH, processos endo e exotérmicos, Lei de Hess e energia de ligação.",
        duration: "28 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      }
    ],
    resolutions: [
      {
        id: "res-term-01",
        youtubeId: "uXpQqQpQ2Gk",
        title: "Resolução de Questões: Termoquímica",
        description: "Pratique Lei de Hess e Entalpia com questões comentadas pelo professor.",
        duration: "14 min"
      }
    ]
  },
  {
    id: "eletroquimica",
    title: "Eletroquímica",
    icon: "fas fa-car-battery",
    color: "#ffd93d",
    hue: 50,
    description: "Pilhas, eletrólise, potencial de redução, oxi-redução e aplicações no cotidiano.",
    videos: [
      {
        id: "eletro-01",
        youtubeId: "4anogFFC_BI",
        title: "Revisão: Número de Oxidação",
        description: "Introdução ao Nox, transferência de elétrons e identificação de agentes.",
        duration: "25 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1gJXxrlY9WSDT5V2dD5P3FooJCmcuyHmx/preview"
      },
      {
        id: "eletro-02",
        youtubeId: "NnA2x4YAylQ",
        title: "Revisão: Pilhas Eletroquímicas",
        description: "Ânodo, cátodo, potencial de redução, ddp e a importância da ponte salina.",
        duration: "26 min",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1AXUPEOGi1GKDbNeEfoA2dClKLICMBGli/preview"
      }
    ],
    resolutions: [
      {
        id: "res-eletro-nox-01",
        youtubeId: "Djv7NCNkiDs",
        title: "Resolução de Questões: NOx",
        description: "Determine o NOx do átomo de cloro nas substâncias.",
        duration: "5:23"
      },

      {
        id: "res-eletro-nox-02",
        youtubeId: "G5aeIgbD0kM",
        title: "NOx: Átomo de Enxofre",
        description: "Determine o NOx do átomo de enxofre nas substâncias.",
        duration: "4:15"
      },
      {
        id: "res-eletro-nox-03",
        youtubeId: "B5hpgebspvw",
        title: "NOx: Átomo de Nitrogênio",
        description: "Determine o NOx do átomo de nitrogênio nas substâncias.",
        duration: "3:45"
      },
      {
        id: "res-eletro-nox-04",
        youtubeId: "BF8T8zi7Xos",
        title: "NOx: Átomo de Fósforo",
        description: "Determine o NOx do átomo de fósforo nas substâncias.",
        duration: "4:30"
      },
      {
        id: "res-eletro-nox-05",
        youtubeId: "frD6ekd3LSk",
        title: "Oxidação, Redução e Agentes",
        description: "Conceitos fundamentais de oxidação, redução e agentes.",
        duration: "8:12"
      },
      {
        id: "res-eletro-nox-06",
        youtubeId: "NLB7nXYeyt0",
        title: "Identificando Oxidação e Redução",
        description: "Como determinar o elemento que oxida e o que reduz.",
        duration: "7:45"
      },
      {
        id: "res-eletro-nox-07",
        youtubeId: "XlVcEKEnb9g",
        title: "Agentes Oxidante e Redutor I",
        description: "Prática na identificação de agentes em reações.",
        duration: "6:30"
      },
      {
        id: "res-eletro-nox-08",
        youtubeId: "0eAWh42C0eE",
        title: "Agentes Oxidante e Redutor II",
        description: "Aprofundamento na descoberta de agentes oxidante e redutor.",
        duration: "9:15"
      },
      {
        id: "res-eletro-nox-09",
        youtubeId: "4fLzGa8wcbM",
        title: "Cálculo de NOx e Agentes",
        description: "Calculando NOx para descobrir substâncias e agentes.",
        duration: "10:20"
      },
      {
        id: "res-eletro-nox-10",
        youtubeId: "es1NZGXBoBw",
        title: "Oxidou ou Reduziu?",
        description: "Revisão final sobre identificação de processos redox.",
        duration: "5:50"
      },
      {
        id: "res-eletro-pilhas-playlist",
        youtubeId: "_XSiOckEq4o",
        playlistId: "PL2ieA2EFIpiYkB8QZDwdSQehc53HhX0vj",
        title: "Playlist: Pilhas e Eletrólise",
        description: "Sequência completa de resoluções passo a passo sobre pilhas, eletrólise e leis de Faraday.",
        duration: "17 vídeos",
        showOnMain: true
      }
    ]
  },
  {
    id: "organica",
    title: "Química Orgânica",
    icon: "fas fa-leaf",
    color: "#6bcb77",
    hue: 130,
    description: "Funções orgânicas, nomenclatura, reações orgânicas, petróleo e polímeros.",
    videos: [
      {
        id: "org-01",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Funções Orgânicas",
        description: "Álcool, aldeído, cetona, ácido, éster, amina e amida.",
        duration: "32 min",
        difficulty: "Essencial",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      },
      {
        id: "org-02",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Petróleo, Polímeros e Reações",
        description: "Destilação fracionada, polímeros, esterificação e saponificação.",
        duration: "28 min",
        difficulty: "Frequente",
        pdfLink: "https://drive.google.com/file/d/1hV2EDc22_fyY_LKkbP5-fEIYata1u5pJ/preview"
      }
    ],
    resolutions: [
      {
        id: "res-org-01",
        youtubeId: "zXpQqQpQ2Gk",
        title: "Resolução de Questões: Orgânica",
        description: "Revisão prática de funções e reações orgânicas com exercícios.",
        duration: "22 min"
      }
    ]
  },
  {
    id: "resolucoes-comentadas",
    title: "Resoluções Comentadas",
    icon: "fas fa-video",
    color: "#ff8c42",
    hue: 25,
    description: "Assista a resolução detalhada de questões de todas as trilhas para reforçar seu aprendizado.",
    videos: [], // Special track, links to resolutions page
    isSpecial: true
  }
];

// ============================================
// Questões por vídeo (5 questões cada)
// Chave = videoId do vídeo acima
// ============================================
const VIDEO_QUESTIONS = {
  "atom-01": [
    {
      text: "O modelo atômico que propõe que o átomo é uma esfera maciça, indivisível e indestrutível é o modelo de:",
      options: ["Thomson", "Rutherford", "Bohr", "Dalton", "Sommerfeld"],
      answer: 3,
      explanation: "O modelo de Dalton (1803) propõe o átomo como uma esfera maciça, indivisível e indestrutível, sendo o primeiro modelo atômico da era científica moderna."
    },
    {
      text: "No modelo atômico de Thomson, também conhecido como 'pudim de passas', o átomo é descrito como:",
      options: [
        "Uma esfera com carga positiva e elétrons incrustados nela.",
        "Um núcleo positivo com elétrons orbitando ao redor.",
        "Uma nuvem de probabilidade onde estão os elétrons.",
        "Uma esfera maciça e indivisível.",
        "Um núcleo com prótons e nêutrons."
      ],
      answer: 0,
      explanation: "Thomson propôs que o átomo seria uma esfera de carga positiva com elétrons (cargas negativas) distribuídos uniformemente, como passas em um pudim."
    },
    {
      text: "O experimento de Rutherford, com bombardeamento de uma lâmina de ouro por partículas alfa, demonstrou que:",
      options: [
        "O átomo é uma esfera maciça.",
        "Os elétrons ocupam órbitas definidas.",
        "O átomo possui um núcleo pequeno e denso, com carga positiva.",
        "O átomo é indivisível.",
        "O elétron se comporta como onda."
      ],
      answer: 2,
      explanation: "A maioria das partículas alfa atravessou a lâmina sem desvio, mas algumas foram desviadas ou refletidas, provando a existência de um núcleo pequeno, denso e positivo."
    },
    {
      text: "Segundo o modelo de Bohr, quando um elétron absorve energia, ele:",
      options: [
        "Permanece na mesma órbita.",
        "Salta para uma órbita mais interna (menor energia).",
        "Salta para uma órbita mais externa (maior energia).",
        "É ejetado do átomo imediatamente.",
        "Para de se mover."
      ],
      answer: 2,
      explanation: "No modelo de Bohr, elétrons absorvem energia e saltam para níveis mais externos (excitação). Ao retornar, emitem energia na forma de luz (fóton)."
    },
    {
      text: "Dois átomos são isótopos quando possuem:",
      options: [
        "Mesmo número de massa e diferente número atômico.",
        "Mesmo número atômico e diferente número de massa.",
        "Mesmo número de nêutrons.",
        "Mesmo número de elétrons e diferente número de prótons.",
        "Mesma massa atômica e mesmo número atômico."
      ],
      answer: 1,
      explanation: "Isótopos são átomos do MESMO elemento (mesmo Z = número atômico) com diferente número de massa (A), pois possuem diferentes quantidades de nêutrons. Ex: ¹H, ²H, ³H."
    }
  ],
  "atom-02": [
    {
      text: "Os elementos químicos de um mesmo grupo (família) da Tabela Periódica possuem em comum:",
      options: [
        "O mesmo número de camadas eletrônicas.",
        "O mesmo número de elétrons na camada de valência.",
        "A mesma massa atômica.",
        "O mesmo número de nêutrons.",
        "A mesma eletronegatividade."
      ],
      answer: 1,
      explanation: "Elementos de um mesmo grupo possuem o mesmo número de elétrons na camada de valência, o que lhes confere propriedades químicas semelhantes."
    },
    {
      text: "A propriedade periódica que AUMENTA de baixo para cima e da esquerda para a direita na Tabela Periódica é:",
      options: [
        "Raio atômico",
        "Caráter metálico",
        "Eletronegatividade",
        "Reatividade dos metais",
        "Volume atômico"
      ],
      answer: 2,
      explanation: "A eletronegatividade aumenta de baixo para cima (menos camadas, maior atração) e da esquerda para a direita (mais prótons, maior carga nuclear efetiva). O flúor é o mais eletronegativo."
    },
    {
      text: "O elemento com configuração eletrônica 1s² 2s² 2p⁶ 3s² 3p⁵ está localizado no:",
      options: [
        "Grupo 15, 3º período.",
        "Grupo 5, 3º período.",
        "Grupo 17, 3º período.",
        "Grupo 7, 2º período.",
        "Grupo 17, 2º período."
      ],
      answer: 2,
      explanation: "A camada de valência (nível 3) tem 7 elétrons (3s² 3p⁵), colocando o elemento no grupo 17 (halogênios). Nível mais externo = 3, logo 3º período. É o Cloro (Cl)."
    },
    {
      text: "Sobre o raio atômico, é CORRETO afirmar que:",
      options: [
        "Aumenta ao longo de um período (da esquerda para a direita).",
        "Diminui ao longo de um grupo (de cima para baixo).",
        "Aumenta ao longo de um grupo (de cima para baixo).",
        "É igual para todos os elementos do mesmo período.",
        "Não depende do número de camadas eletrônicas."
      ],
      answer: 2,
      explanation: "O raio atômico AUMENTA de cima para baixo no grupo (mais camadas eletrônicas) e DIMINUI da esquerda para a direita no período (maior carga nuclear efetiva atrai os elétrons)."
    },
    {
      text: "Os gases nobres são conhecidos por sua estabilidade química porque:",
      options: [
        "Possuem alta eletronegatividade.",
        "Possuem 8 elétrons na camada de valência (exceto He, com 2), atingindo a estabilidade.",
        "Possuem apenas 1 elétron na camada de valência.",
        "São todos metais de transição.",
        "Possuem grande raio atômico."
      ],
      answer: 1,
      explanation: "Os gases nobres possuem a camada de valência completa (octeto ou dueto no caso do He), o que os torna extremamente estáveis e pouco reativos."
    }
  ],
  "lig-01": [
    {
      text: "A ligação iônica é formada entre:",
      options: [
        "Dois átomos de ametais.",
        "Um átomo de metal e um átomo de ametal.",
        "Dois átomos metálicos.",
        "Dois átomos de gases nobres.",
        "Um ametal e um gás nobre."
      ],
      answer: 1,
      explanation: "A ligação iônica ocorre pela transferência de elétrons de um metal (baixa eletronegatividade) para um ametal (alta eletronegatividade), formando cátions e ânions que se atraem."
    },
    {
      text: "A ligação covalente se diferencia da iônica porque, na covalente:",
      options: [
        "Os elétrons são transferidos de um átomo para outro.",
        "Os elétrons são compartilhados entre os átomos.",
        "Só ocorre entre metais.",
        "Forma-se um retículo cristalino.",
        "Os átomos perdem todos os elétrons."
      ],
      answer: 1,
      explanation: "Na ligação covalente, os átomos COMPARTILHAM pares de elétrons para atingir a estabilidade. Ocorre tipicamente entre ametais."
    },
    {
      text: "A ligação metálica é caracterizada por:",
      options: [
        "Compartilhamento de elétrons entre dois átomos.",
        "Transferência de elétrons do metal para o ametal.",
        "Elétrons livres ('mar de elétrons') que se movem entre cátions metálicos.",
        "Interações intermoleculares do tipo Van der Waals.",
        "Formação de moléculas definidas."
      ],
      answer: 2,
      explanation: "Na ligação metálica, os elétrons da camada de valência ficam deslocalizados, formando um 'mar de elétrons' que se move entre os cátions metálicos do retículo, explicando condutividade."
    },
    {
      text: "Uma substância com alto ponto de fusão, solúvel em água e que conduz eletricidade quando dissolvida é provavelmente formada por ligações:",
      options: [
        "Covalentes apolares.",
        "Metálicas.",
        "Iônicas.",
        "Covalentes polares.",
        "Van der Waals."
      ],
      answer: 2,
      explanation: "Compostos iônicos possuem alto ponto de fusão (fortes atrações eletrostáticas), são solúveis em água (solvente polar) e conduzem eletricidade quando dissolvidos (íons livres)."
    },
    {
      text: "O composto HCl possui ligação covalente polar. Isso significa que:",
      options: [
        "Os elétrons são igualmente compartilhados entre H e Cl.",
        "Há transferência total de elétrons do H para o Cl.",
        "Os elétrons ficam mais próximos do Cl (mais eletronegativo), gerando polos.",
        "A molécula não possui momento dipolar.",
        "A molécula é apolar."
      ],
      answer: 2,
      explanation: "Na ligação covalente polar, os elétrons são compartilhados desigualmente. Como Cl é mais eletronegativo que H, os elétrons ficam mais próximos do Cl, criando um dipolo (δ⁺ no H, δ⁻ no Cl)."
    }
  ],
  "lig-02": [
    {
      text: "De acordo com a teoria VSEPR, a geometria da molécula de metano (CH₄) é:",
      options: ["Linear", "Angular", "Trigonal plana", "Tetraédrica", "Octaédrica"],
      answer: 3,
      explanation: "O carbono central faz 4 ligações com H e não possui pares de elétrons não ligantes, resultando em geometria tetraédrica com ângulos de 109,5°."
    },
    {
      text: "A molécula de CO₂ possui geometria linear e é classificada como:",
      options: [
        "Polar, pois o oxigênio é eletronegativo.",
        "Apolar, pois os dipolos se cancelam (simetria).",
        "Polar, pois possui pares de elétrons livres.",
        "Apolar, pois não possui ligações polares.",
        "Polar, pois é uma molécula grande."
      ],
      answer: 1,
      explanation: "Apesar de cada ligação C=O ser polar, a geometria linear e simétrica faz com que os vetores de dipolo se cancelem, resultando em uma molécula apolar."
    },
    {
      text: "As forças de Van der Waals (dipolo induzido) estão presentes em:",
      options: [
        "Apenas substâncias polares.",
        "Apenas compostos iônicos.",
        "Todas as substâncias, sendo a única força em substâncias apolares.",
        "Apenas substâncias com ligações de hidrogênio.",
        "Apenas em metais."
      ],
      answer: 2,
      explanation: "As forças de London (dipolo induzido) existem em TODAS as substâncias. Em substâncias apolares, são a única força intermolecular presente."
    },
    {
      text: "A ligação de hidrogênio ocorre quando o hidrogênio está ligado a:",
      options: [
        "Qualquer elemento da Tabela Periódica.",
        "Apenas oxigênio.",
        "F, O ou N (elementos muito eletronegativos e pequenos).",
        "Apenas carbono.",
        "Metais de transição."
      ],
      answer: 2,
      explanation: "A ligação de hidrogênio (ponte de hidrogênio) é uma interação forte que ocorre quando H está ligado covalentemente a F, O ou N, e interage com outro F, O ou N de molécula vizinha."
    },
    {
      text: "A água (H₂O) tem ponto de ebulição anormalmente alto comparado ao H₂S porque:",
      options: [
        "A água tem maior massa molecular.",
        "A água forma ligações de hidrogênio intensas entre suas moléculas.",
        "A água é apolar.",
        "O H₂S é iônico.",
        "A água possui ligações metálicas."
      ],
      answer: 1,
      explanation: "A água forma ligações de hidrogênio (O-H...O), que são muito mais fortes que as forças de London do H₂S, exigindo mais energia para romper e elevando o ponto de ebulição."
    }
  ],
  "est-01": [
    {
      text: "A massa molar da água (H₂O) é: (H = 1 g/mol, O = 16 g/mol)",
      options: ["16 g/mol", "17 g/mol", "18 g/mol", "20 g/mol", "32 g/mol"],
      answer: 2,
      explanation: "Massa molar H₂O = 2×(1) + 1×(16) = 2 + 16 = 18 g/mol."
    },
    {
      text: "Quantos mols existem em 88 g de CO₂? (C = 12 g/mol, O = 16 g/mol)",
      options: ["1 mol", "2 mols", "3 mols", "4 mols", "0,5 mol"],
      answer: 1,
      explanation: "Massa molar CO₂ = 12 + 2×16 = 44 g/mol. n = massa/MM = 88/44 = 2 mols."
    },
    {
      text: "Na reação 2H₂ + O₂ → 2H₂O, se reagirem 4 mols de H₂ com O₂ em excesso, quantos mols de H₂O serão formados?",
      options: ["2 mols", "4 mols", "6 mols", "8 mols", "1 mol"],
      answer: 1,
      explanation: "Pela proporção estequiométrica: 2 mol H₂ → 2 mol H₂O. Logo, 4 mol H₂ → 4 mol H₂O."
    },
    {
      text: "Uma reação com rendimento de 80% produz teoricamente 100 g de produto. A massa real obtida é:",
      options: ["80 g", "100 g", "120 g", "60 g", "20 g"],
      answer: 0,
      explanation: "Rendimento = (massa real / massa teórica) × 100. 80% = (massa real / 100) × 100 → massa real = 80 g."
    },
    {
      text: "Nas CNTP (Condições Normais de Temperatura e Pressão), 1 mol de qualquer gás ideal ocupa:",
      options: ["11,2 L", "22,4 L", "44,8 L", "1,0 L", "100 L"],
      answer: 1,
      explanation: "O volume molar nas CNTP é de 22,4 L/mol para qualquer gás ideal, independente de sua natureza química."
    }
  ],
  "sol-01": [
    {
      text: "Uma solução é definida como:",
      options: [
        "Uma mistura heterogênea de duas substâncias.",
        "Uma mistura homogênea formada por soluto e solvente.",
        "Uma substância pura em estado líquido.",
        "Qualquer mistura que contenha água.",
        "Um composto iônico dissolvido em óleo."
      ],
      answer: 1,
      explanation: "Solução é uma mistura HOMOGÊNEA de duas ou mais substâncias. O componente em maior quantidade é o solvente e o em menor quantidade é o soluto."
    },
    {
      text: "Em uma solução de sal de cozinha dissolvido em água, o soluto e o solvente são, respectivamente:",
      options: [
        "Água e sal.", "Sal e água.", "Ambos são solutos.",
        "Ambos são solventes.", "Nenhum deles, pois não é solução."
      ],
      answer: 1,
      explanation: "O sal (NaCl) é o soluto (componente em menor quantidade) e a água é o solvente (componente em maior quantidade, também chamado de solvente universal)."
    },
    {
      text: "Uma solução aquosa de açúcar é classificada como:",
      options: [
        "Mistura heterogênea.", "Substância composta.",
        "Mistura homogênea (solução verdadeira).",
        "Suspensão.", "Colóide."
      ],
      answer: 2,
      explanation: "Açúcar dissolvido em água forma uma mistura homogênea (uma única fase visível), classificada como solução verdadeira."
    },
    {
      text: "Sobre soluções aquosas, é CORRETO afirmar que:",
      options: [
        "A água nunca pode ser solvente de gases.",
        "Soluções podem ser formadas por sólido, líquido ou gás dissolvidos em um solvente.",
        "Toda solução é necessariamente líquida.",
        "O soluto é sempre o componente em maior quantidade.",
        "Soluções não conduzem corrente elétrica."
      ],
      answer: 1,
      explanation: "Soluções podem ter solutos nos três estados: sólido (sal em água), líquido (álcool em água) ou gasoso (CO₂ em água = refrigerante)."
    },
    {
      text: "O ar atmosférico é um exemplo de:",
      options: [
        "Substância pura simples.", "Mistura heterogênea.",
        "Solução gasosa (mistura homogênea de gases).",
        "Colóide.", "Suspensão."
      ],
      answer: 2,
      explanation: "O ar é uma mistura homogênea de gases (N₂, O₂, Ar, CO₂, etc.), portanto é uma solução gasosa."
    }
  ],
  "sol-02": [
    {
      text: "O coeficiente de solubilidade (Cs) indica:",
      options: [
        "A massa de solvente necessária para dissolver 1 g de soluto.",
        "A quantidade máxima de soluto que pode ser dissolvida em uma quantidade fixa de solvente, a uma dada temperatura.",
        "A velocidade com que o soluto se dissolve.",
        "A densidade da solução.",
        "O pH da solução resultante."
      ],
      answer: 1,
      explanation: "O Cs indica a quantidade máxima de soluto que se dissolve em uma quantidade padrão de solvente (geralmente 100 g de água) a uma determinada temperatura."
    },
    {
      text: "Para a maioria dos sólidos, ao aumentar a temperatura da água, a solubilidade:",
      options: [
        "Diminui sempre.", "Permanece constante.",
        "Aumenta.", "Primeiro aumenta, depois diminui.",
        "Não tem relação com a temperatura."
      ],
      answer: 2,
      explanation: "Para a maioria dos sólidos, a solubilidade AUMENTA com o aumento da temperatura, pois a agitação molecular facilita a dissolução."
    },
    {
      text: "A curva de solubilidade é um gráfico que relaciona:",
      options: [
        "Concentração e pH.", "Volume e pressão.",
        "Coeficiente de solubilidade e temperatura.",
        "Massa molar e densidade.", "Ponto de fusão e pressão."
      ],
      answer: 2,
      explanation: "A curva de solubilidade é um gráfico Cs × T (coeficiente de solubilidade em função da temperatura) que mostra como a solubilidade varia."
    },
    {
      text: "Se a 60°C o Cs de um sal é 40 g/100 g de água e eu dissolvi 30 g em 100 g de água a 60°C, a solução é:",
      options: [
        "Saturada.", "Supersaturada.", "Insaturada.",
        "Impossível de classificar.", "Heterogênea."
      ],
      answer: 2,
      explanation: "A solução é insaturada porque a quantidade de soluto (30 g) é MENOR que o coeficiente de solubilidade (40 g). Ainda cabe mais soluto."
    },
    {
      text: "Para gases dissolvidos em líquidos, a solubilidade AUMENTA com:",
      options: [
        "Aumento da temperatura.", "Diminuição da pressão.",
        "Aumento da pressão e diminuição da temperatura.",
        "Redução do volume do solvente.", "Adição de outro soluto."
      ],
      answer: 2,
      explanation: "Para gases, a solubilidade aumenta com o AUMENTO da pressão (Lei de Henry) e a DIMINUIÇÃO da temperatura. Por isso refrigerantes quentes perdem gás mais rápido."
    }
  ],
  "sol-03": [
    {
      text: "Um colóide (ou dispersão coloidal) é:",
      options: [
        "Uma mistura heterogênea com partículas visíveis a olho nu.",
        "Uma solução verdadeira com partículas menores que 1 nm.",
        "Um sistema com partículas entre 1 nm e 1000 nm, intermediário entre solução e suspensão.",
        "Um tipo de substância pura.", "Uma mistura que sempre se separa por filtração."
      ],
      answer: 2,
      explanation: "Colóides têm partículas de tamanho intermediário (1–1000 nm), maiores que em soluções verdadeiras mas menores que em suspensões. Parecem homogêneos a olho nu."
    },
    {
      text: "O efeito Tyndall é observado em:",
      options: [
        "Soluções verdadeiras.", "Substâncias puras.",
        "Dispersões coloidais, pela dispersão de um feixe de luz.",
        "Apenas suspensões.", "Apenas misturas gasosas."
      ],
      answer: 2,
      explanation: "O efeito Tyndall é a dispersão da luz ao atravessar um colóide. As partículas coloidais são grandes o suficiente para desviar a luz, diferenciando-o de uma solução verdadeira."
    },
    {
      text: "Leite é um exemplo de colóide do tipo:",
      options: ["Sol.", "Gel.", "Emulsão.", "Aerossol.", "Espuma."],
      answer: 2,
      explanation: "O leite é uma emulsão (líquido disperso em líquido). Gotículas de gordura estão dispersas na água do leite."
    },
    {
      text: "A neblina é um exemplo de colóide classificado como:",
      options: ["Emulsão.", "Gel.", "Espuma.", "Aerossol líquido.", "Sol."],
      answer: 3,
      explanation: "A neblina é um aerossol líquido: gotículas de água (líquido) dispersas no ar (gás)."
    },
    {
      text: "A gelatina, quando pronta, é classificada como um colóide do tipo:",
      options: ["Aerossol.", "Emulsão.", "Sol.", "Gel.", "Espuma sólida."],
      answer: 3,
      explanation: "A gelatina é um GEL: um sistema coloidal onde um sólido forma uma rede tridimensional que aprisiona o líquido (água)."
    }
  ],
  "sol-04": [
    {
      text: "Para medir com PRECISÃO o volume de uma solução durante o preparo, devemos usar:",
      options: [
        "Béquer.", "Erlenmeyer.", "Balão volumétrico.",
        "Proveta.", "Tubo de ensaio."
      ],
      answer: 2,
      explanation: "O balão volumétrico é a vidraria mais precisa para medir e preparar soluções com volume exato. Possui um traço de aferição no gargalo."
    },
    {
      text: "A bureta é uma vidraria utilizada principalmente em:",
      options: [
        "Aquecimento de soluções.", "Armazenamento de reagentes.",
        "Titulações, para adicionar volume preciso de solução.",
        "Filtração a vácuo.", "Destilação simples."
      ],
      answer: 2,
      explanation: "A bureta é usada em titulações para adicionar volumes precisos e controlados de solução titulante, gotejando lentamente."
    },
    {
      text: "O Erlenmeyer é um frasco cônico usado em laboratório. Sua principal vantagem é:",
      options: [
        "Medir volumes com alta precisão.",
        "Permite agitar soluções sem derramar facilmente.",
        "É usado apenas para armazenar sólidos.",
        "Suporta temperaturas acima de 1000°C.", "Serve como conta-gotas."
      ],
      answer: 1,
      explanation: "O formato cônico do Erlenmeyer permite agitar o líquido em seu interior sem que ele derrame facilmente, sendo ideal para titulações e reações."
    },
    {
      text: "Para transferir líquidos entre frascos com segurança, utiliza-se como vidraria auxiliar:",
      options: [
        "Cadinho.", "Funil de vidro.", "Dessecador.",
        "Condensador.", "Cápsula de porcelana."
      ],
      answer: 1,
      explanation: "O funil de vidro é utilizado para transferir líquidos entre recipientes e também para realizar filtrações simples com papel de filtro."
    },
    {
      text: "A pipeta volumétrica é utilizada para:",
      options: [
        "Aquecer soluções.", "Pesar substâncias sólidas.",
        "Medir e transferir um volume fixo e preciso de líquido.",
        "Armazenar ácidos concentrados.", "Medir a temperatura."
      ],
      answer: 2,
      explanation: "A pipeta volumétrica mede e transfere um ÚNICO volume fixo com alta precisão (ex: 10,00 mL, 25,00 mL). Diferente da pipeta graduada, que mede volumes variáveis."
    }
  ],
  "sol-05": [
    {
      text: "Diluir uma solução significa:",
      options: [
        "Adicionar mais soluto à solução.",
        "Adicionar solvente à solução, reduzindo sua concentração.",
        "Aquecer a solução para evaporar o solvente.",
        "Misturar duas soluções diferentes.",
        "Filtrar a solução para remover impurezas."
      ],
      answer: 1,
      explanation: "Diluir é adicionar SOLVENTE (geralmente água) a uma solução pronta. A quantidade de soluto não muda, mas o volume aumenta, então a concentração diminui."
    },
    {
      text: "A fórmula utilizada para cálculos de diluição é:",
      options: [
        "C = m/V", "n = m/MM", "C₁V₁ = C₂V₂",
        "PV = nRT", "pH = -log[H⁺]"
      ],
      answer: 2,
      explanation: "C₁V₁ = C₂V₂ expressa que a quantidade de soluto se mantém constante na diluição. C₁ e V₁ são a concentração e volume iniciais; C₂ e V₂ são os finais."
    },
    {
      text: "200 mL de uma solução 2 mol/L é diluída para 800 mL. A nova concentração é:",
      options: ["0,25 mol/L", "0,5 mol/L", "1 mol/L", "4 mol/L", "8 mol/L"],
      answer: 1,
      explanation: "C₁V₁ = C₂V₂ → 2 × 200 = C₂ × 800 → C₂ = 400/800 = 0,5 mol/L."
    },
    {
      text: "Ao diluir uma solução, o que permanece CONSTANTE?",
      options: [
        "A concentração.", "O volume da solução.",
        "A quantidade de soluto (em mols ou gramas).",
        "A temperatura.", "A densidade."
      ],
      answer: 2,
      explanation: "Na diluição, adicionamos apenas solvente. A quantidade de soluto é a mesma antes e depois — só o volume muda, alterando a concentração."
    },
    {
      text: "Um farmacêutico precisa preparar 500 mL de soro fisiológico a 0,9 g/L a partir de uma solução estoque a 9 g/L. O volume da solução estoque necessário é:",
      options: ["5 mL", "50 mL", "100 mL", "250 mL", "450 mL"],
      answer: 1,
      explanation: "C₁V₁ = C₂V₂ → 9 × V₁ = 0,9 × 500 → V₁ = 450/9 = 50 mL de solução estoque, completando com água até 500 mL."
    }
  ],
  "sol-06": [
    {
      text: "Ao misturar duas soluções de MESMO soluto, a concentração final é:",
      options: [
        "Sempre a soma das concentrações.",
        "Sempre a média aritmética das concentrações.",
        "Calculada por (C₁V₁ + C₂V₂) / (V₁ + V₂).",
        "Sempre igual à menor concentração.",
        "Calculada por C₁ × C₂."
      ],
      answer: 2,
      explanation: "Na mistura de soluções de mesmo soluto: Cf = (C₁V₁ + C₂V₂) / (V₁ + V₂). É a média ponderada das concentrações pelos volumes."
    },
    {
      text: "100 mL de NaCl 2 mol/L são misturados com 300 mL de NaCl 4 mol/L. A concentração final é:",
      options: ["1,5 mol/L", "2 mol/L", "3 mol/L", "3,5 mol/L", "6 mol/L"],
      answer: 3,
      explanation: "Cf = (2×100 + 4×300)/(100+300) = (200+1200)/400 = 1400/400 = 3,5 mol/L."
    },
    {
      text: "Se misturarmos volumes iguais de duas soluções de mesmo soluto, uma com C₁ = 2 mol/L e outra C₂ = 6 mol/L, a concentração final será:",
      options: ["2 mol/L", "3 mol/L", "4 mol/L", "6 mol/L", "8 mol/L"],
      answer: 2,
      explanation: "Com volumes iguais, Cf = (C₁ + C₂)/2 = (2+6)/2 = 4 mol/L. É a média aritmética simples."
    },
    {
      text: "Na mistura de soluções de mesmo soluto, a quantidade total de soluto é:",
      options: [
        "A diferença dos solutos individuais.",
        "A soma das quantidades de soluto de cada solução.",
        "Sempre constante independente dos volumes.",
        "O produto das concentrações.",
        "Sempre zero."
      ],
      answer: 1,
      explanation: "Ao misturar, o soluto total = n₁ + n₂ (soma dos mols). Nenhum soluto é criado ou destruído, apenas combinamos tudo no mesmo recipiente."
    },
    {
      text: "200 mL de HCl 1 mol/L são misturados com 800 mL de água pura. A concentração final de HCl é:",
      options: ["0,1 mol/L", "0,2 mol/L", "0,5 mol/L", "1 mol/L", "5 mol/L"],
      answer: 1,
      explanation: "Água pura tem C = 0. Cf = (1×200 + 0×800)/(200+800) = 200/1000 = 0,2 mol/L. Misturar com água é o mesmo que diluir."
    }
  ],
  "sol-07": [
    {
      text: "A titulação ácido-base é uma técnica para determinar:",
      options: [
        "O ponto de fusão de uma substância.",
        "A concentração desconhecida de um ácido ou base.",
        "A massa molar de um composto.",
        "A velocidade de uma reação.", "A temperatura de ebulição."
      ],
      answer: 1,
      explanation: "A titulação permite determinar a concentração desconhecida de uma solução (titulado) usando uma solução de concentração conhecida (titulante)."
    },
    {
      text: "O ponto de equivalência na titulação é atingido quando:",
      options: [
        "O pH da solução é 7.",
        "O número de mols do ácido é igual ao número de mols da base (neutralização completa).",
        "Todo o titulante foi consumido.",
        "A solução muda de cor de forma permanente para vermelho.",
        "O volume do titulante é o dobro do titulado."
      ],
      answer: 1,
      explanation: "No ponto de equivalência, o número de equivalentes-grama (ou mols × valência) do ácido é igual ao da base, ocorrendo neutralização completa."
    },
    {
      text: "Na titulação, o indicador (como a fenolftaleína) serve para:",
      options: [
        "Acelerar a reação de neutralização.",
        "Sinalizar visualmente o ponto de equivalência pela mudança de cor.",
        "Medir a temperatura da solução.",
        "Aumentar a concentração do ácido.",
        "Reduzir o pH da solução."
      ],
      answer: 1,
      explanation: "O indicador ácido-base muda de cor em uma faixa de pH específica, sinalizando que o ponto de equivalência foi atingido ou ultrapassado."
    },
    {
      text: "Em uma titulação, a vidraria usada para adicionar o titulante gota a gota é:",
      options: ["Pipeta.", "Béquer.", "Bureta.", "Balão volumétrico.", "Proveta."],
      answer: 2,
      explanation: "A bureta é a vidraria utilizada para adicionar volumes precisos e controlados de titulante, gota a gota, durante a titulação."
    },
    {
      text: "20 mL de HCl são neutralizados por 40 mL de NaOH 0,5 mol/L. A concentração do HCl é:",
      options: ["0,25 mol/L", "0,5 mol/L", "1,0 mol/L", "2,0 mol/L", "4,0 mol/L"],
      answer: 2,
      explanation: "No ponto de equivalência: C_a × V_a = C_b × V_b → C_a × 20 = 0,5 × 40 → C_a = 20/20 = 1,0 mol/L."
    }
  ],
  "sol-08": [
    {
      text: "Uma solução SATURADA é aquela que:",
      options: [
        "Contém pouco soluto dissolvido.",
        "Atingiu o limite máximo de dissolução do soluto naquela temperatura.",
        "Contém mais soluto do que o solvente pode dissolver.",
        "Não contém soluto.", "Está em ebulição."
      ],
      answer: 1,
      explanation: "Solução saturada é aquela onde o soluto atingiu o coeficiente de solubilidade — não é possível dissolver mais soluto naquela temperatura."
    },
    {
      text: "Uma solução INSATURADA contém:",
      options: [
        "Quantidade de soluto IGUAL ao Cs.",
        "Quantidade de soluto MAIOR que o Cs.",
        "Quantidade de soluto MENOR que o Cs.",
        "Corpo de fundo.", "Apenas solvente puro."
      ],
      answer: 2,
      explanation: "Solução insaturada: a quantidade de soluto dissolvido é MENOR que o coeficiente de solubilidade. Ainda é possível dissolver mais soluto."
    },
    {
      text: "Uma solução SUPERSATURADA é instável porque:",
      options: [
        "Contém menos soluto que o permitido.",
        "Contém mais soluto dissolvido do que o Cs permite, podendo cristalizar a qualquer momento.",
        "Está sempre em ebulição.",
        "Nunca pode ser preparada em laboratório.",
        "Contém dois solventes diferentes."
      ],
      answer: 1,
      explanation: "Na solução supersaturada, há MAIS soluto dissolvido do que o Cs. É instável: qualquer perturbação (agitação, semente de cristal) pode causar cristalização."
    },
    {
      text: "Ao adicionar soluto a uma solução saturada (com corpo de fundo), sem alterar a temperatura:",
      options: [
        "O soluto se dissolve totalmente.",
        "A concentração da solução aumenta.",
        "O corpo de fundo aumenta, pois o excesso não se dissolve.",
        "A solução se torna insaturada.",
        "O solvente evapora."
      ],
      answer: 2,
      explanation: "Em uma solução saturada, o solvente já está no limite. Ao adicionar mais soluto, este se deposita no fundo (corpo de fundo), sem alterar a concentração."
    },
    {
      text: "Para transformar uma solução saturada em insaturada (sem corpo de fundo), pode-se:",
      options: [
        "Diminuir a temperatura.", "Adicionar mais soluto.",
        "Adicionar mais solvente (diluir).",
        "Filtrar a solução.", "Congelar a solução."
      ],
      answer: 2,
      explanation: "Adicionando mais solvente, a quantidade de soluto dissolvido fica abaixo do novo Cs total, tornando a solução insaturada."
    }
  ],
  "sol-09": [
    {
      text: "A concentração comum (C) de uma solução é expressa como:",
      options: [
        "Número de mols por litro (mol/L).",
        "Massa do soluto em gramas por litro de solução (g/L).",
        "Massa do soluto por massa do solvente.",
        "Volume do soluto por volume da solução.", "Mols por quilograma."
      ],
      answer: 1,
      explanation: "Concentração comum: C = m₁/V (massa do soluto em gramas dividida pelo volume da solução em litros), expressa em g/L."
    },
    {
      text: "A molaridade (M) de uma solução representa:",
      options: [
        "A massa do soluto por litro.", "O número de mols do soluto por litro de solução.",
        "O volume do soluto por litro de solvente.",
        "A massa do solvente por litro.", "A quantidade de íons por litro."
      ],
      answer: 1,
      explanation: "Molaridade (M) = n/V = número de mols do soluto dividido pelo volume da solução em litros. Unidade: mol/L."
    },
    {
      text: "Uma solução contém 40 g de NaOH (MM = 40 g/mol) em 500 mL de solução. Sua molaridade é:",
      options: ["0,5 mol/L", "1,0 mol/L", "2,0 mol/L", "4,0 mol/L", "0,1 mol/L"],
      answer: 2,
      explanation: "n = 40/40 = 1 mol. V = 500 mL = 0,5 L. M = n/V = 1/0,5 = 2,0 mol/L."
    },
    {
      text: "O título em massa (τ) de uma solução é:",
      options: [
        "A razão entre a massa do soluto e a massa total da solução.",
        "A razão entre o volume do soluto e o volume do solvente.",
        "O número de mols por litro.",
        "A massa do solvente por litro.", "A pressão osmótica da solução."
      ],
      answer: 0,
      explanation: "Título em massa: τ = m₁/m (massa do soluto / massa da solução). É adimensional e varia de 0 a 1 (ou 0% a 100%)."
    },
    {
      text: "A relação entre concentração comum (C), molaridade (M) e massa molar (MM) é:",
      options: [
        "C = M × MM", "C = M / MM", "C = M + MM",
        "C = MM / M", "Não existe relação entre elas."
      ],
      answer: 0,
      explanation: "C = M × MM. Como C = m₁/V e M = n₁/V, e sabendo que m₁ = n₁ × MM, temos C = M × MM."
    }
  ],
  "sol-10": [
    {
      text: "A diferença entre DISSOLUÇÃO e DILUIÇÃO é que:",
      options: [
        "São o mesmo processo.",
        "Na dissolução, adicionamos soluto ao solvente; na diluição, adicionamos solvente à solução pronta.",
        "Na dissolução, removemos soluto; na diluição, adicionamos soluto.",
        "Dissolução só ocorre com sólidos; diluição, com líquidos.",
        "Dissolução é irreversível; diluição é reversível."
      ],
      answer: 1,
      explanation: "Dissolução: misturar soluto + solvente para CRIAR a solução. Diluição: adicionar mais solvente a uma solução JÁ PRONTA para reduzir a concentração."
    },
    {
      text: "Ao preparar um suco em pó, adicionando o pó à água, estou realizando uma:",
      options: ["Diluição.", "Dissolução.", "Titulação.", "Destilação.", "Filtração."],
      answer: 1,
      explanation: "Adicionar o pó (soluto) à água (solvente) é DISSOLUÇÃO — estamos criando uma nova solução."
    },
    {
      text: "Ao adicionar mais água a um suco já pronto (para ficar menos concentrado), estou realizando uma:",
      options: ["Dissolução.", "Diluição.", "Neutralização.", "Precipitação.", "Evaporação."],
      answer: 1,
      explanation: "Adicionar água (solvente) a um suco JÁ PRONTO é DILUIÇÃO — estamos reduzindo a concentração sem alterar a quantidade de soluto."
    },
    {
      text: "Na dissolução, a quantidade de SOLUTO:",
      options: [
        "Permanece constante.", "Diminui.", "Aumenta (é o soluto sendo adicionado).",
        "É sempre zero.", "É irrelevante."
      ],
      answer: 2,
      explanation: "Na dissolução, estamos justamente ADICIONANDO o soluto ao solvente, então a quantidade de soluto aumenta no sistema."
    },
    {
      text: "Na diluição, o que permanece constante é:",
      options: [
        "A concentração.", "O volume total.",
        "A quantidade de soluto.", "A temperatura.", "A pressão."
      ],
      answer: 2,
      explanation: "Na diluição, apenas adicionamos solvente. A quantidade de soluto (em gramas ou mols) não muda — só o volume e a concentração mudam."
    }
  ],
  "sol-11": [
    {
      text: "A molalidade (W) de uma solução é definida como:",
      options: [
        "Mols de soluto por litro de solução.",
        "Mols de soluto por quilograma de SOLVENTE.",
        "Gramas de soluto por litro de solução.",
        "Mols de solvente por litro.", "Volume de soluto por volume de solvente."
      ],
      answer: 1,
      explanation: "Molalidade (W) = n₁/m₂(kg) = número de mols do soluto dividido pela massa do SOLVENTE em quilogramas. Diferente da molaridade, que usa o volume da solução."
    },
    {
      text: "A fração molar do soluto (x₁) em uma solução é:",
      options: [
        "A massa do soluto dividida pela massa total.",
        "O número de mols do soluto dividido pelo número total de mols (soluto + solvente).",
        "A concentração em g/L.",
        "O número de mols do solvente.",
        "A razão entre as massas molares."
      ],
      answer: 1,
      explanation: "Fração molar: x₁ = n₁/(n₁ + n₂). É a razão entre os mols do soluto e os mols totais da solução. É adimensional e x₁ + x₂ = 1."
    },
    {
      text: "A unidade ppm (partes por milhão) é usada para:",
      options: [
        "Soluções muito concentradas.", "Apenas soluções gasosas.",
        "Soluções muito diluídas, como poluentes em água.",
        "Medir a temperatura de soluções.", "Calcular a pressão osmótica."
      ],
      answer: 2,
      explanation: "ppm é usado para concentrações muito pequenas. 1 ppm = 1 mg/L = 1 mg de soluto em 1 000 000 mg de solução. Comum para poluentes e minerais na água."
    },
    {
      text: "A principal diferença entre MOLARIDADE e MOLALIDADE é que:",
      options: [
        "São a mesma coisa.",
        "A molaridade usa o volume da SOLUÇÃO; a molalidade usa a massa do SOLVENTE.",
        "A molalidade usa o volume da solução; a molaridade usa a massa do solvente.",
        "A molaridade é medida em g/L.", "A molalidade não depende do soluto."
      ],
      answer: 1,
      explanation: "Molaridade (M) = n/V(solução). Molalidade (W) = n/m(solvente em kg). A molalidade não varia com a temperatura, pois usa massa (não volume)."
    },
    {
      text: "Se 2 mols de glicose estão dissolvidos em 500 g de água, a molalidade é:",
      options: ["1 mol/kg", "2 mol/kg", "4 mol/kg", "0,5 mol/kg", "0,004 mol/kg"],
      answer: 2,
      explanation: "W = n₁/m₂(kg) = 2/0,5 = 4 mol/kg. (500 g = 0,5 kg de solvente)."
    }
  ],
  "sol-12": [
    {
      text: "Se o Cs de um sal a 25°C é 36 g/100 g de água e uma solução contém 40 g desse sal em 100 g de água a 25°C, a solução é:",
      options: [
        "Insaturada.", "Saturada sem corpo de fundo.",
        "Saturada com corpo de fundo.", "Supersaturada sem cristais.", "Diluída."
      ],
      answer: 2,
      explanation: "40 g > 36 g (Cs). O excesso (4 g) não se dissolve e se deposita como corpo de fundo. A solução é SATURADA com corpo de fundo."
    },
    {
      text: "Uma solução supersaturada pode ser obtida por:",
      options: [
        "Adicionando água fria ao soluto.",
        "Dissolvendo o soluto a quente e resfriando lentamente sem perturbar.",
        "Filtrando uma solução saturada.", "Evaporando todo o solvente.",
        "Adicionando mais solvente."
      ],
      answer: 1,
      explanation: "Dissolve-se o soluto em temperatura alta (onde o Cs é maior) e resfria-se lentamente. Sem perturbação, o excesso permanece dissolvido — supersaturação."
    },
    {
      text: "O 'corpo de fundo' é:",
      options: [
        "O solvente que precipita.", "O excesso de soluto que não se dissolveu.",
        "Um tipo de reação química.", "O recipiente usado para armazenar soluções.",
        "O gás liberado durante a dissolução."
      ],
      answer: 1,
      explanation: "Corpo de fundo é o excesso de soluto sólido que se deposita no fundo do recipiente quando a solução atinge a saturação."
    },
    {
      text: "Ao aquecer uma solução saturada com corpo de fundo, geralmente o corpo de fundo:",
      options: [
        "Aumenta.", "Permanece igual.", "Se dissolve (parcial ou totalmente).",
        "Evapora junto com o solvente.", "Muda de cor."
      ],
      answer: 2,
      explanation: "Como a solubilidade geralmente aumenta com a temperatura, o corpo de fundo se dissolve parcial ou totalmente ao aquecer."
    },
    {
      text: "Um ponto acima da curva de solubilidade no gráfico Cs × T representa uma solução:",
      options: [
        "Insaturada.", "Saturada.", "Supersaturada.",
        "Em ebulição.", "Em equilíbrio."
      ],
      answer: 2,
      explanation: "Acima da curva = mais soluto que o Cs permite = supersaturada. Na curva = saturada. Abaixo da curva = insaturada."
    }
  ],
  "sol-13": [
    {
      text: "Uma solução aquosa de NaCl conduz corrente elétrica porque:",
      options: [
        "O NaCl é molecular.",
        "Os íons Na⁺ e Cl⁻ se movem livremente em solução.",
        "A água pura conduz eletricidade.",
        "O sal é um isolante elétrico.",
        "Os elétrons fluem pelo sal sólido."
      ],
      answer: 1,
      explanation: "Em solução aquosa, o NaCl se dissocia em Na⁺ e Cl⁻. Esses íons livres conduzem corrente elétrica (solução eletrolítica)."
    },
    {
      text: "Qual das seguintes soluções é a mais concentrada?",
      options: [
        "10 g de sal em 500 mL de solução.",
        "20 g de sal em 500 mL de solução.",
        "10 g de sal em 1000 mL de solução.",
        "5 g de sal em 200 mL de solução.",
        "1 g de sal em 100 mL de solução."
      ],
      answer: 1,
      explanation: "C = m/V. A: 20 g/L, B: 40 g/L, C: 10 g/L, D: 25 g/L, E: 10 g/L. A solução B (40 g/L) é a mais concentrada."
    },
    {
      text: "A propriedade coligativa que explica por que se adiciona sal nas estradas com gelo é:",
      options: [
        "Ebulioscopia.", "Tonoscopia.", "Crioscopia (abaixamento do ponto de congelamento).",
        "Osmose.", "Pressão de vapor."
      ],
      answer: 2,
      explanation: "A crioscopia é o abaixamento do ponto de congelamento. O sal dissolvido na água diminui o ponto de congelamento, derretendo o gelo."
    },
    {
      text: "Em uma solução, ao aumentar a quantidade de soluto (sem ultrapassar o Cs), a concentração:",
      options: [
        "Permanece constante.", "Diminui.", "Aumenta.",
        "Depende do solvente.", "Se torna zero."
      ],
      answer: 2,
      explanation: "Mais soluto dissolvido em mesmo volume de solvente = maior concentração. C = m₁/V — se m₁ aumenta com V constante, C aumenta."
    },
    {
      text: "A osmose é o fenômeno onde:",
      options: [
        "O soluto migra do meio mais concentrado para o menos concentrado.",
        "O solvente migra do meio menos concentrado para o mais concentrado através de uma membrana semipermeável.",
        "Todo o soluto evapora.",
        "Os íons se neutralizam.",
        "A pressão da solução chega a zero."
      ],
      answer: 1,
      explanation: "Na osmose, o SOLVENTE passa de onde está em maior quantidade (solução diluída) para onde está em menor quantidade (solução concentrada), buscando o equilíbrio."
    }
  ],
  "sol-14": [
    {
      text: "Qual a concentração em g/L de uma solução preparada dissolvendo 20 g de soluto em água suficiente para 250 mL de solução?",
      options: ["40 g/L", "80 g/L", "20 g/L", "5 g/L", "100 g/L"],
      answer: 1,
      explanation: "C = m/V = 20 g / 0,25 L = 80 g/L."
    },
    {
      text: "A molaridade de uma solução que contém 98 g de H₂SO₄ (MM = 98 g/mol) em 2 L de solução é:",
      options: ["0,5 mol/L", "1,0 mol/L", "2,0 mol/L", "49 mol/L", "0,25 mol/L"],
      answer: 0,
      explanation: "n = 98/98 = 1 mol. M = n/V = 1/2 = 0,5 mol/L."
    },
    {
      text: "Uma solução tem título (τ) igual a 0,05. Isso significa que:",
      options: [
        "5% da massa da solução é soluto.",
        "50% da massa da solução é soluto.",
        "O soluto representa 0,05 g.",
        "O solvente representa 5%.",
        "A solução está saturada."
      ],
      answer: 0,
      explanation: "τ = 0,05 significa que 5% da massa total da solução é soluto. Em 100 g de solução, há 5 g de soluto e 95 g de solvente."
    },
    {
      text: "Para converter concentração comum (g/L) em molaridade (mol/L), usa-se:",
      options: [
        "M = C × MM", "M = C / MM", "M = C + MM", "M = C - MM", "Não é possível converter."
      ],
      answer: 1,
      explanation: "M = C / MM. Se C = 40 g/L e MM = 40 g/mol, então M = 40/40 = 1 mol/L."
    },
    {
      text: "Uma solução de 500 mL contém 5,85 g de NaCl (MM = 58,5 g/mol). A concentração em g/L e em mol/L são, respectivamente:",
      options: [
        "11,7 g/L e 0,2 mol/L", "5,85 g/L e 0,1 mol/L",
        "11,7 g/L e 0,1 mol/L", "23,4 g/L e 0,4 mol/L", "5,85 g/L e 0,2 mol/L"
      ],
      answer: 0,
      explanation: "C = 5,85/0,5 = 11,7 g/L. n = 5,85/58,5 = 0,1 mol. M = 0,1/0,5 = 0,2 mol/L."
    }
  ],
  "term-01": [
    {
      text: "Uma reação exotérmica é aquela que:",
      options: [
        "Absorve calor do ambiente, com ΔH > 0.",
        "Libera calor para o ambiente, com ΔH < 0.",
        "Não troca calor com o ambiente.",
        "Absorve calor, com ΔH < 0.",
        "Precisa de catalisador para ocorrer."
      ],
      answer: 1,
      explanation: "Reações exotérmicas LIBERAM calor para o ambiente. Isso significa que a entalpia dos produtos é menor que a dos reagentes, resultando em ΔH negativo (< 0)."
    },
    {
      text: "A Lei de Hess afirma que:",
      options: [
        "A variação de entalpia de uma reação depende do caminho percorrido.",
        "A variação de entalpia de uma reação depende apenas dos estados inicial e final, independe do caminho.",
        "Todas as reações são endotérmicas.",
        "A entalpia é sempre positiva.",
        "A Lei de Hess só vale para gases."
      ],
      answer: 1,
      explanation: "A Lei de Hess é uma função de estado: o ΔH de uma reação depende apenas dos estados inicial e final, nunca do caminho (número de etapas) percorrido."
    },
    {
      text: "Para calcular o ΔH de uma reação usando energias de ligação, usamos:",
      options: [
        "ΔH = Σ(ligações formadas) − Σ(ligações rompidas)",
        "ΔH = Σ(ligações rompidas) − Σ(ligações formadas)",
        "ΔH = Σ(ligações rompidas) + Σ(ligações formadas)",
        "ΔH = Σ(ligações formadas) × Σ(ligações rompidas)",
        "ΔH = Σ(ligações rompidas) / Σ(ligações formadas)"
      ],
      answer: 1,
      explanation: "ΔH = Energia das ligações rompidas (reagentes) − Energia das ligações formadas (produtos). Romper ligações consome energia; formar ligações libera energia."
    },
    {
      text: "Em uma reação endotérmica, a entalpia dos produtos é:",
      options: [
        "Menor que a dos reagentes.",
        "Igual à dos reagentes.",
        "Maior que a dos reagentes.",
        "Zero.",
        "Negativa."
      ],
      answer: 2,
      explanation: "Em reações endotérmicas, o sistema absorve energia. Portanto, os produtos possuem mais energia (maior entalpia) que os reagentes, resultando em ΔH > 0."
    },
    {
      text: "A combustão do etanol (C₂H₅OH) é uma reação que libera grande quantidade de calor. Ela é classificada como:",
      options: [
        "Endotérmica, com ΔH > 0.",
        "Exotérmica, com ΔH < 0.",
        "Atérmica.",
        "Endotérmica, com ΔH < 0.",
        "Reação nuclear."
      ],
      answer: 1,
      explanation: "A combustão é uma reação que libera grande quantidade de calor (exotérmica), com ΔH negativo. É por isso que usamos etanol como combustível."
    }
  ],
  "eletro-01": [
    {
      text: "O Número de Oxidação (Nox) de um elemento químico em uma substância simples (ex: O₂, Fe, H₂) é sempre:",
      options: ["+1", "-1", "0", "+2", "Igual à sua família na Tabela Periódica"],
      answer: 2,
      explanation: "Por definição, o Nox de qualquer elemento em uma substância simples é zero, pois não há diferença de eletronegatividade entre os átomos."
    },
    {
      text: "Em uma reação de oxirredução, o agente REDUTOR é a espécie química que:",
      options: [
        "Sofre redução e ganha elétrons.",
        "Sofre oxidação e perde elétrons.",
        "Não sofre alteração no seu Nox.",
        "Aumenta a massa de um eletrodo.",
        "Diminui sua carga elétrica total."
      ],
      answer: 1,
      explanation: "O agente REDUTOR causa a redução de outra espécie sofrendo OXIDAÇÃO (perda de elétrons). Quem oxida 'reduz' o outro."
    },
    {
      text: "Na reação: Zn + 2 HCl → ZnCl₂ + H₂, o zinco metálico sofreu:",
      options: [
        "Redução, pois seu Nox diminuiu.",
        "Oxidação, pois seu Nox aumentou de 0 para +2.",
        "Neutralização, pois reagiu com um ácido.",
        "Precipitação, saindo da solução.",
        "Nenhuma alteração de carga."
      ],
      answer: 1,
      explanation: "O zinco (Zn) passa de Nox 0 para +2, perdendo elétrons (oxidação). O hidrogênio do HCl passa de +1 para 0, ganhando elétrons (redução)."
    },
    {
      text: "Qual dos elementos abaixo possui Nox fixo igual a +1 em todos os seus compostos?",
      options: ["Oxigênio (O)", "Hidrogênio (H)", "Metais Alcalinos (Família 1A)", "Cloro (Cl)", "Enxofre (S)"],
      answer: 2,
      explanation: "Os metais alcalinos (Líbio, Sódio, Potássio, etc.) possuem Nox fixo +1 em seus compostos. O Hidrogênio é +1 na maioria, mas pode ser -1 em hidretos metálicos."
    },
    {
      text: "Para que uma reação de oxirredução ocorra espontaneamente, é necessário que:",
      options: [
        "Haja transferência de prótons.",
        "O Nox dos elementos permaneça constante.",
        "Haja transferência de elétrons entre os átomos.",
        "Os reagentes sejam todos gasosos.",
        "A energia de ativação seja negativa."
      ],
      answer: 2,
      explanation: "Toda reação de oxirredução é definida pela transferência de elétrons de uma espécie (que oxida) para outra (que reduz)."
    }
  ],
  "eletro-02": [
    {
      text: "Em uma pilha de Daniell (Zn/Cu), no ânodo ocorre a:",
      options: [
        "Redução do cobre metálico.",
        "Oxidação do zinco metálico perdendo elétrons.",
        "Migração de elétrons pelo eletrólito.",
        "Deposição de metal na placa.",
        "Absorção de luz solar."
      ],
      answer: 1,
      explanation: "No ânodo das pilhas sempre ocorre a OXIDAÇÃO. No caso da pilha de Daniell, o zinco metálico se dissolve liberando elétrons e íons Zn²⁺."
    },
    {
      text: "Qual a função fundamental da PONTE SALINA em uma pilha eletroquímica?",
      options: [
        "Conduzir os elétrons de um eletrodo para o outro.",
        "Aumentar o potencial de oxidação dos metais.",
        "Manter a neutralidade elétrica das soluções permitindo a migração de íons.",
        "Impedir que a pilha aqueça demais.",
        "Funcionar como um isolante elétrico."
      ],
      answer: 2,
      explanation: "A ponte salina permite que ânions e cátions migrem entre as cubas para equilibrar as cargas, mantendo a neutralidade elétrica e fechando o circuito."
    },
    {
      text: "A ddp (Diferença de Potencial) de uma pilha é o resultado de:",
      options: [
        "Soma dos potenciais de redução.",
        "Diferença entre o potencial de redução do cátodo e do ânodo (ΔE = Ecat - Ean).",
        "Multiplicação das massas dos eletrodos.",
        "Um valor sempre negativo para reações espontâneas.",
        "Razão entre o volume das soluções."
      ],
      answer: 1,
      explanation: "A ddp ou força eletromotriz é calculada pela diferença dos potenciais de redução: ΔE° = E°redução(maior) - E°redução(menor)."
    },
    {
      text: "Numa pilha, o fluxo de elétrons pelo circuito externo (fio condutor) ocorre sempre:",
      options: [
        "Do cátodo para o ânodo.",
        "Das soluções para os metais.",
        "Do ânodo para o cátodo.",
        "No sentido da ponte salina.",
        "De forma aleatória."
      ],
      answer: 2,
      explanation: "Os elétrons são liberados no ânodo (oxidação) e 'puxados' pelo cátodo (redução). Portanto, o fluxo é Ânodo → Cátodo."
    },
    {
      text: "Se um metal A tem E°redução = +0,80V e um metal B tem E°redução = -0,44V, ao montarmos uma pilha:",
      options: [
        "O metal B será o cátodo.",
        "A ddp será de 0,36V.",
        "O metal A sofrerá redução (será o cátodo).",
        "A reação não será espontânea.",
        "O metal A será o ânodo."
      ],
      answer: 2,
      explanation: "O metal com maior potencial de redução (+0,80V) reduz-se (Cátodo). O metal com menor potencial (-0,44V) oxida-se (Ânodo). ΔE = 0,80 - (-0,44) = 1,24V."
    }
  ],
  "org-01": [
    {
      text: "A função orgânica que possui o grupo funcional —OH ligado a carbono saturado é:",
      options: ["Fenol", "Éter", "Álcool", "Ácido carboxílico", "Aldeído"],
      answer: 2,
      explanation: "Álcool: grupo —OH ligado a carbono saturado (sp³). Ex: CH₃CH₂OH (etanol). No fenol, —OH está ligado a anel aromático."
    },
    {
      text: "A substância CH₃—CO—CH₃ pertence à função:",
      options: ["Aldeído", "Álcool", "Cetona", "Éster", "Éter"],
      answer: 2,
      explanation: "O grupo C=O (carbonila) entre dois carbonos caracteriza a função cetona. CH₃—CO—CH₃ é a propanona (acetona)."
    },
    {
      text: "A fórmula R—COOH representa um:",
      options: ["Álcool", "Éster", "Aldeído", "Ácido carboxílico", "Amina"],
      answer: 3,
      explanation: "O grupo —COOH (carboxila) é a marca do ácido carboxílico. É a combinação de carbonila (C=O) com hidroxila (—OH) ligadas ao mesmo carbono."
    },
    {
      text: "As aminas são derivadas da amônia (NH₃) pela substituição de hidrogênios por grupos orgânicos. Uma amina primária possui:",
      options: [
        "Três grupos orgânicos ligados ao N.",
        "Dois grupos orgânicos ligados ao N.",
        "Um grupo orgânico ligado ao N.",
        "Nenhum grupo orgânico (é a amônia pura).",
        "Quatro grupos orgânicos ligados ao N."
      ],
      answer: 2,
      explanation: "Na amina primária, apenas um H do NH₃ é substituído por um grupo orgânico (R—NH₂). Ex: CH₃NH₂ (metilamina)."
    },
    {
      text: "O grupo funcional —CHO (ou —COH) terminal caracteriza a função:",
      options: ["Cetona", "Álcool", "Ácido carboxílico", "Aldeído", "Éster"],
      answer: 3,
      explanation: "O aldeído possui o grupo carbonila (C=O) na extremidade da cadeia, sempre ligado a pelo menos um hidrogênio: R—CHO. Ex: metanal (formaldeído)."
    }
  ],
  "org-02": [
    {
      text: "A destilação fracionada do petróleo separa os componentes com base na diferença de:",
      options: [
        "Densidades.",
        "Temperaturas de ebulição.",
        "Cores dos líquidos.",
        "Massas atômicas.",
        "Solubilidade em água."
      ],
      answer: 1,
      explanation: "A destilação fracionada separa os componentes do petróleo aproveitando suas diferentes temperaturas de ebulição. As frações mais leves (menor PE) saem primeiro."
    },
    {
      text: "Polímeros de adição são formados por:",
      options: [
        "Reação entre ácido e álcool.",
        "Adição sucessiva de monômeros sem perda de átomos.",
        "Condensação com liberação de água.",
        "Oxidação de metais.",
        "Hidrólise de ésteres."
      ],
      answer: 1,
      explanation: "Na polimerização por adição, monômeros com dupla ligação (C=C) se unem sucessivamente, abrindo a dupla, SEM perda de átomos. Ex: polietileno."
    },
    {
      text: "A reação de esterificação produz:",
      options: [
        "Um álcool e um ácido.",
        "Um éster e água.",
        "Um aldeído e água.",
        "Uma cetona e CO₂.",
        "Uma amina e HCl."
      ],
      answer: 1,
      explanation: "Esterificação: ácido carboxílico + álcool → éster + água. R-COOH + R'-OH → R-COO-R' + H₂O. É uma reação reversível."
    },
    {
      text: "A saponificação é a reação de um éster (gordura) com uma base forte, produzindo:",
      options: [
        "Um ácido e um álcool.",
        "Um polímero e água.",
        "Sabão (sal de ácido graxo) e glicerol.",
        "Um aldeído e uma cetona.",
        "CO₂ e H₂O."
      ],
      answer: 2,
      explanation: "Saponificação: gordura (triéster de glicerol) + NaOH → sabão (sal de ácido graxo) + glicerol. É a reação inversa da esterificação, em meio básico."
    },
    {
      text: "O gás liquefeito de petróleo (GLP), usado como gás de cozinha, é formado principalmente por:",
      options: [
        "Metano e etano.",
        "Propano e butano.",
        "Gasolina e diesel.",
        "Etanol e metanol.",
        "Querosene e nafta."
      ],
      answer: 1,
      explanation: "O GLP é composto principalmente por propano (C₃H₈) e butano (C₄H₁₀), hidrocarbonetos leves obtidos na destilação fracionada do petróleo."
    }
  ]
};

// ============================================
// Configuração de Gamificação
// ============================================
const GAMIFICATION = {
  xpPerVideoWatch: 10,
  xpPerCorrectAnswer: 20,
  xpBonusAllCorrect: 50,
  xpBonusTrailComplete: 100,
  xpPerMaterialAccess: 5,
  levels: [
    { name: "Iniciante", icon: "🧪", minXP: 0, color: "#8b95b0" },
    { name: "Estudante", icon: "📚", minXP: 100, color: "#00b4d8" },
    { name: "Avançado", icon: "⚗️", minXP: 300, color: "#00d4aa" },
    { name: "Mestre", icon: "🏆", minXP: 600, color: "#ffd93d" },
    { name: "Gênio da Química", icon: "🧬", minXP: 1000, color: "#7c5cfc" }
  ],
  achievements: [
    { id: "first_video", title: "Primeira Aula", desc: "Assista seu primeiro vídeo de revisão.", icon: "🎬", condition: "videosCompleted >= 1" },
    { id: "first_trail", title: "Trilha Concluída", desc: "Complete sua primeira trilha de estudos.", icon: "🏁", condition: "trailsCompleted >= 1" },
    { id: "perfect_quiz", title: "Nota Máxima", desc: "Acerte todas as 5 questões de um vídeo.", icon: "💯", condition: "perfectQuiz" },
    { id: "streak_3", title: "Estudante Dedicado", desc: "Estude 3 dias seguidos.", icon: "🔥", condition: "streak >= 3" },
    { id: "streak_7", title: "Uma Semana de Foco", desc: "Estude 7 dias seguidos.", icon: "⚡", condition: "streak >= 7" },
    { id: "xp_500", title: "Meio Milhar", desc: "Alcance 500 XP.", icon: "⭐", condition: "xp >= 500" },
    { id: "xp_1000", title: "Mil de XP", desc: "Alcance 1000 XP — você é um Gênio!", icon: "🧬", condition: "xp >= 1000" },
    { id: "videos_5", title: "Maratonista", desc: "Complete 5 vídeos de revisão.", icon: "📺", condition: "videosCompleted >= 5" },
    { id: "videos_10", title: "Veterano", desc: "Complete 10 vídeos de revisão.", icon: "🎓", condition: "videosCompleted >= 10" },
    { id: "all_trails", title: "Mestre Completo", desc: "Complete TODAS as trilhas do ENEM.", icon: "👑", condition: "allTrailsCompleted" },
    { id: "simulado_80", title: "Simulado Aprovado", desc: "Tire 80% ou mais no Simulado ENEM.", icon: "📋", condition: "simulado80" }
  ]
};
