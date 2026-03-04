// Banco de Questões de Química — Estilo ENEM
const QUESTIONS_DB = [
  // ===== TABELA PERIÓDICA / ATOMÍSTICA =====
  {
    id: 1,
    topic: "Atomística",
    text: "Um átomo de um elemento químico possui 26 prótons, 30 nêutrons e 23 elétrons. Sobre esse átomo, é correto afirmar que:",
    options: [
      "Seu número atômico é 30.",
      "Seu número de massa é 56 e trata-se de um cátion.",
      "Seu número de massa é 53 e trata-se de um ânion.",
      "Ele é eletricamente neutro.",
      "Seu número atômico é 23."
    ],
    answer: 1,
    explanation: "Número atômico (Z) = 26 (prótons). Número de massa (A) = 26 + 30 = 56. Como tem 23 elétrons (menos que prótons), perdeu 3 elétrons, sendo um cátion (Fe³⁺)."
  },
  {
    id: 2,
    topic: "Tabela Periódica",
    text: "Os elementos X (Z = 12) e Y (Z = 17) pertencem, respectivamente, aos grupos e períodos da Tabela Periódica:",
    options: [
      "Grupo 2, 3º período e grupo 17, 3º período.",
      "Grupo 12, 2º período e grupo 17, 3º período.",
      "Grupo 2, 2º período e grupo 7, 3º período.",
      "Grupo 3, 2º período e grupo 3, 7º período.",
      "Grupo 12, 3º período e grupo 7, 2º período."
    ],
    answer: 0,
    explanation: "X (Z=12): 1s² 2s² 2p⁶ 3s² → Grupo 2 (2 elétrons na camada de valência), 3º período. Y (Z=17): 1s² 2s² 2p⁶ 3s² 3p⁵ → Grupo 17 (7 elétrons na camada de valência), 3º período."
  },
  {
    id: 3,
    topic: "Propriedades Periódicas",
    text: "Considere os elementos Na (Z=11), Mg (Z=12), K (Z=19) e Ca (Z=20). A ordem crescente de raio atômico desses elementos é:",
    options: [
      "Mg < Na < Ca < K",
      "K < Ca < Na < Mg",
      "Na < Mg < K < Ca",
      "Ca < K < Mg < Na",
      "Mg < Ca < Na < K"
    ],
    answer: 0,
    explanation: "O raio atômico aumenta de cima para baixo em um grupo (mais camadas) e da direita para a esquerda em um período (menor carga nuclear efetiva). Assim: Mg < Na (mesmo período, Mg tem mais prótons) e Ca < K (mesmo período). K e Ca > Na e Mg (período abaixo)."
  },

  // ===== LIGAÇÕES QUÍMICAS =====
  {
    id: 4,
    topic: "Ligações Químicas",
    text: "A ligação química presente no cloreto de sódio (NaCl) e a ligação presente na molécula de gás cloro (Cl₂) são, respectivamente:",
    options: [
      "Covalente e iônica.",
      "Iônica e covalente apolar.",
      "Metálica e iônica.",
      "Covalente polar e covalente apolar.",
      "Iônica e metálica."
    ],
    answer: 1,
    explanation: "NaCl é formado por um metal (Na) e um ametal (Cl), caracterizando ligação iônica (transferência de elétrons). Cl₂ é formado por dois átomos iguais, caracterizando ligação covalente apolar (compartilhamento igual de elétrons)."
  },
  {
    id: 5,
    topic: "Geometria Molecular",
    text: "A molécula de água (H₂O) possui geometria angular, e não linear, porque:",
    options: [
      "O oxigênio é mais eletronegativo que o hidrogênio.",
      "Existem dois pares de elétrons não ligantes no oxigênio que repelem os átomos de hidrogênio.",
      "A água é uma substância polar.",
      "O oxigênio forma ligações duplas com cada hidrogênio.",
      "A molécula de água é apolar."
    ],
    answer: 1,
    explanation: "O oxigênio possui 2 pares de elétrons ligantes (com H) e 2 pares não ligantes (lone pairs). A repulsão entre os pares não ligantes e ligantes força a geometria angular (~104,5°), de acordo com a teoria VSEPR."
  },

  // ===== REAÇÕES E ESTEQUIOMETRIA =====
  {
    id: 6,
    topic: "Estequiometria",
    text: "Na reação de combustão completa do metano: CH₄ + 2O₂ → CO₂ + 2H₂O, quantos litros de CO₂ (nas CNTP) são produzidos pela queima de 32 g de metano (massa molar CH₄ = 16 g/mol)?",
    options: [
      "11,2 L",
      "22,4 L",
      "33,6 L",
      "44,8 L",
      "67,2 L"
    ],
    answer: 3,
    explanation: "32 g de CH₄ ÷ 16 g/mol = 2 mol de CH₄. Pela estequiometria, 1 mol CH₄ → 1 mol CO₂. Logo, 2 mol de CO₂. Nas CNTP, 1 mol de gás = 22,4 L. Portanto, 2 × 22,4 = 44,8 L."
  },
  {
    id: 7,
    topic: "Balanceamento",
    text: "Para a reação de obtenção do ferro em alto-forno: Fe₂O₃ + CO → Fe + CO₂, os coeficientes estequiométricos que balanceiam a equação são, respectivamente:",
    options: [
      "1, 3, 2, 3",
      "2, 3, 4, 3",
      "1, 2, 2, 1",
      "2, 6, 4, 6",
      "1, 1, 2, 1"
    ],
    answer: 0,
    explanation: "Fe₂O₃ + 3CO → 2Fe + 3CO₂. Fe: 2 = 2 ✓ | O: 3 + 3 = 6, e 3×2 = 6 ✓ | C: 3 = 3 ✓. Os coeficientes são 1, 3, 2, 3."
  },

  // ===== SOLUÇÕES =====
  {
    id: 8,
    topic: "Soluções",
    text: "Uma solução aquosa foi preparada dissolvendo-se 40 g de NaOH (massa molar = 40 g/mol) em água suficiente para formar 500 mL de solução. A concentração molar dessa solução é:",
    options: [
      "0,5 mol/L",
      "1,0 mol/L",
      "2,0 mol/L",
      "4,0 mol/L",
      "0,8 mol/L"
    ],
    answer: 2,
    explanation: "n = massa / massa molar = 40 / 40 = 1 mol. Volume = 500 mL = 0,5 L. Concentração molar (M) = n / V = 1 / 0,5 = 2,0 mol/L."
  },
  {
    id: 9,
    topic: "Diluição",
    text: "Ao diluir 200 mL de uma solução de HCl 3 mol/L adicionando-se água até completar 600 mL, a nova concentração molar será:",
    options: [
      "0,5 mol/L",
      "1,0 mol/L",
      "1,5 mol/L",
      "2,0 mol/L",
      "9,0 mol/L"
    ],
    answer: 1,
    explanation: "Pela fórmula da diluição: C₁V₁ = C₂V₂ → 3 × 200 = C₂ × 600 → C₂ = 600/600 = 1,0 mol/L."
  },

  // ===== TERMOQUÍMICA =====
  {
    id: 10,
    topic: "Termoquímica",
    text: "A reação de formação da água a partir de seus elementos é representada por: H₂(g) + ½O₂(g) → H₂O(l) ΔH = −286 kJ/mol. Essa reação é classificada como:",
    options: [
      "Endotérmica, pois absorve calor.",
      "Exotérmica, pois libera calor para o ambiente.",
      "Endotérmica, pois o ΔH é negativo.",
      "Atérmica, pois não há troca de calor.",
      "Exotérmica, pois absorve calor do ambiente."
    ],
    answer: 1,
    explanation: "ΔH negativo indica que a reação libera energia na forma de calor para o ambiente, sendo classificada como exotérmica. Reações exotérmicas têm ΔH < 0."
  },
  {
    id: 11,
    topic: "Lei de Hess",
    text: "Dadas as reações:\n(I) C(s) + O₂(g) → CO₂(g) ΔH₁ = −394 kJ\n(II) CO(g) + ½O₂(g) → CO₂(g) ΔH₂ = −283 kJ\nA variação de entalpia da reação C(s) + ½O₂(g) → CO(g) é:",
    options: [
      "−677 kJ",
      "−111 kJ",
      "+111 kJ",
      "+677 kJ",
      "−394 kJ"
    ],
    answer: 1,
    explanation: "Pela Lei de Hess: ΔH = ΔH₁ − ΔH₂ = −394 − (−283) = −394 + 283 = −111 kJ. Invertemos a reação II e somamos com a reação I."
  },

  // ===== ELETROQUÍMICA =====
  {
    id: 12,
    topic: "Eletroquímica",
    text: "Em uma pilha de Daniell, o zinco (E° = −0,76 V) atua como ânodo e o cobre (E° = +0,34 V) como cátodo. A diferença de potencial (ddp) dessa pilha é:",
    options: [
      "0,42 V",
      "1,10 V",
      "−1,10 V",
      "−0,42 V",
      "0,76 V"
    ],
    answer: 1,
    explanation: "ΔE° = E°(cátodo) − E°(ânodo) = (+0,34) − (−0,76) = +0,34 + 0,76 = +1,10 V. O valor positivo confirma que a reação é espontânea."
  },
  {
    id: 13,
    topic: "Eletroquímica",
    text: "Na eletrólise da água, ocorre a decomposição da água em hidrogênio e oxigênio. A semirreação que ocorre no cátodo é:",
    options: [
      "2H₂O(l) → O₂(g) + 4H⁺(aq) + 4e⁻",
      "2H⁺(aq) + 2e⁻ → H₂(g)",
      "O₂(g) + 4H⁺(aq) + 4e⁻ → 2H₂O(l)",
      "H₂(g) → 2H⁺(aq) + 2e⁻",
      "4OH⁻(aq) → O₂(g) + 2H₂O(l) + 4e⁻"
    ],
    answer: 1,
    explanation: "No cátodo ocorre redução (cátodo = redução). Os íons H⁺ ganham elétrons e formam gás hidrogênio: 2H⁺(aq) + 2e⁻ → H₂(g)."
  },

  // ===== QUÍMICA ORGÂNICA =====
  {
    id: 14,
    topic: "Química Orgânica",
    text: "A substância de fórmula CH₃—CH₂—OH pertence à função orgânica:",
    options: [
      "Aldeído",
      "Ácido carboxílico",
      "Éter",
      "Álcool",
      "Cetona"
    ],
    answer: 3,
    explanation: "A presença do grupo hidroxila (—OH) ligado a um carbono saturado caracteriza a função álcool. O composto em questão é o etanol (álcool etílico), CH₃CH₂OH."
  },
  {
    id: 15,
    topic: "Química Orgânica",
    text: "A reação de um ácido carboxílico com um álcool, na presença de um catalisador ácido, produz:",
    options: [
      "Um aldeído e água.",
      "Uma cetona e água.",
      "Um éster e água.",
      "Um éter e água.",
      "Um ácido e um álcool."
    ],
    answer: 2,
    explanation: "A reação entre ácido carboxílico e álcool é chamada esterificação (de Fischer) e produz um éster e água: R—COOH + R'—OH → R—COO—R' + H₂O."
  },
  {
    id: 16,
    topic: "Química Orgânica",
    text: "O petróleo é uma mistura complexa de hidrocarbonetos. O processo de separação de seus componentes em frações com diferentes faixas de temperatura de ebulição é chamado de:",
    options: [
      "Filtração simples.",
      "Destilação fracionada.",
      "Cristalização.",
      "Decantação.",
      "Centrifugação."
    ],
    answer: 1,
    explanation: "A destilação fracionada é o método utilizado para separar os componentes do petróleo, aproveitando as diferentes temperaturas de ebulição de cada fração (gasolina, diesel, querosene, etc.)."
  },

  // ===== REAÇÕES INORGÂNICAS =====
  {
    id: 17,
    topic: "Reações Químicas",
    text: "A chuva ácida é causada principalmente pela dissolução de óxidos ácidos na água da chuva. Qual das seguintes equações representa corretamente a formação de ácido sulfúrico a partir do trióxido de enxofre?",
    options: [
      "SO₂ + H₂O → H₂SO₃",
      "SO₃ + H₂O → H₂SO₄",
      "SO₃ + 2H₂O → H₂SO₄ + H₂",
      "S + O₂ + H₂O → H₂SO₄",
      "SO₂ + O₂ + H₂O → H₂SO₄"
    ],
    answer: 1,
    explanation: "O trióxido de enxofre (SO₃) é um óxido ácido que reage com a água formando ácido sulfúrico: SO₃ + H₂O → H₂SO₄. Este é um dos processos que contribuem para a chuva ácida."
  },
  {
    id: 18,
    topic: "pH e Equilíbrio",
    text: "Uma solução aquosa com pH = 3 é adicionada a outra solução com pH = 5. Sobre a concentração de íons H⁺, é correto afirmar que a solução de pH 3 possui uma concentração de H⁺:",
    options: [
      "2 vezes maior que a de pH 5.",
      "100 vezes maior que a de pH 5.",
      "10 vezes maior que a de pH 5.",
      "2 vezes menor que a de pH 5.",
      "1000 vezes maior que a de pH 5."
    ],
    answer: 1,
    explanation: "A escala de pH é logarítmica. Cada unidade de pH corresponde a uma variação de 10 vezes na concentração de H⁺. Diferença de 2 unidades: 10² = 100 vezes. pH 3 → [H⁺] = 10⁻³ mol/L; pH 5 → [H⁺] = 10⁻⁵ mol/L. A razão é 10⁻³/10⁻⁵ = 100."
  }
];
