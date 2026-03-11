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
        difficulty: "Essencial"
      },
      {
        id: "atom-02",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Tabela Periódica e Propriedades",
        description: "Famílias, períodos, raio atômico, eletronegatividade e energia de ionização.",
        duration: "22 min",
        difficulty: "Essencial"
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
        difficulty: "Essencial"
      },
      {
        id: "lig-02",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Geometria Molecular e Polaridade",
        description: "VSEPR, geometrias, moléculas polares e apolares, forças intermoleculares.",
        duration: "20 min",
        difficulty: "Frequente"
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
        difficulty: "Essencial"
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
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Concentração e Diluição",
        description: "Molaridade, concentração comum, diluição (C₁V₁ = C₂V₂) e mistura.",
        duration: "24 min",
        difficulty: "Frequente"
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
        difficulty: "Essencial"
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
        title: "Revisão: Reações de Oxirredução",
        description: "Introdução ao Nox, transferência de elétrons e identificação de agentes.",
        duration: "25 min",
        difficulty: "Essencial"
      },
      {
        id: "eletro-02",
        youtubeId: "NnA2x4YAylQ",
        title: "Revisão: Pilhas Eletroquímicas",
        description: "Ânodo, cátodo, potencial de redução, ddp e a importância da ponte salina.",
        duration: "26 min",
        difficulty: "Frequente"
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
        difficulty: "Essencial"
      },
      {
        id: "org-02",
        youtubeId: "ID_DO_VIDEO",
        title: "Revisão: Petróleo, Polímeros e Reações",
        description: "Destilação fracionada, polímeros, esterificação e saponificação.",
        duration: "28 min",
        difficulty: "Frequente"
      }
    ]
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
      text: "A concentração molar (molaridade) de uma solução é definida como:",
      options: [
        "Massa do soluto dividida pelo volume da solução em litros.",
        "Número de mols do soluto dividido pelo volume da solução em litros.",
        "Volume do soluto dividido pelo volume do solvente.",
        "Massa do soluto dividida pela massa do solvente.",
        "Número de elétrons do soluto por litro."
      ],
      answer: 1,
      explanation: "Molaridade (M) = n/V, onde n é o número de mols do soluto e V é o volume da solução em litros."
    },
    {
      text: "Ao dissolver 117 g de NaCl (MM = 58,5 g/mol) em água até completar 2 litros de solução, a concentração molar é:",
      options: ["0,5 mol/L", "1,0 mol/L", "2,0 mol/L", "4,0 mol/L", "0,25 mol/L"],
      answer: 1,
      explanation: "n = 117 / 58,5 = 2 mols. M = n/V = 2/2 = 1,0 mol/L."
    },
    {
      text: "Se diluímos uma solução usando a fórmula C₁V₁ = C₂V₂, o que acontece com a concentração ao adicionar água?",
      options: [
        "Aumenta proporcionalmente.",
        "Permanece constante.",
        "Diminui, pois o volume aumenta e o soluto permanece o mesmo.",
        "O soluto precipita.",
        "O volume diminui."
      ],
      answer: 2,
      explanation: "Ao adicionar água (diluir), o volume da solução aumenta, mas a quantidade de soluto permanece a mesma. Logo, a concentração diminui."
    },
    {
      text: "100 mL de uma solução de NaOH 4 mol/L são diluídos para 400 mL. A nova concentração é:",
      options: ["1 mol/L", "2 mol/L", "0,5 mol/L", "4 mol/L", "8 mol/L"],
      answer: 0,
      explanation: "C₁V₁ = C₂V₂ → 4 × 100 = C₂ × 400 → C₂ = 400/400 = 1 mol/L."
    },
    {
      text: "A concentração comum (C) de uma solução é expressa em:",
      options: ["mol/L", "g/L", "g/mL", "mol/mL", "%"],
      answer: 1,
      explanation: "A concentração comum (C) é a razão entre a massa do soluto (em gramas) e o volume da solução (em litros): C = m/V, medida em g/L."
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
