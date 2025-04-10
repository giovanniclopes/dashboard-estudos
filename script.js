// Configurações iniciais e variáveis globais
let currentMode = "study"; // Modos: "study", "test", "review"
let userScore = 100; // Pontuação inicial
let attemptCounts = {}; // Contagem de tentativas por questão
let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

// Carrega dados salvos do localStorage
function loadSavedData() {
  const savedData = localStorage.getItem("wanQuizData");
  if (savedData) {
    const data = JSON.parse(savedData);
    if (data.completedQuestions) {
      data.completedQuestions.forEach((id) => {
        const question = questions.find((q) => q.id === id);
        if (question) question.completed = true;
      });
    }
    if (data.score) userScore = data.score;
    if (data.attempts) attemptCounts = data.attempts;
    if (data.theme) {
      document.documentElement.setAttribute("data-theme", data.theme);
      updateThemeButton();
    }
  }
}

// Salva dados no localStorage
// Salva dados no localStorage
function saveData() {
  const completedQuestions = questions
    .filter((q) => q.completed)
    .map((q) => q.id);
  const data = {
    completedQuestions,
    score: userScore,
    attempts: attemptCounts,
    theme: document.documentElement.getAttribute("data-theme") || "light",
    timerSeconds: timerSeconds,
    currentMode: currentMode,
  };
  localStorage.setItem("wanQuizData", JSON.stringify(data));
}

// Atualiza a função loadSavedData para carregar o estado do cronômetro
function loadSavedData() {
  const savedData = localStorage.getItem("wanQuizData");
  if (savedData) {
    const data = JSON.parse(savedData);
    if (data.completedQuestions) {
      data.completedQuestions.forEach((id) => {
        const question = questions.find((q) => q.id === id);
        if (question) question.completed = true;
      });
    }
    if (data.score) userScore = data.score;
    if (data.attempts) attemptCounts = data.attempts;
    if (data.theme) {
      document.documentElement.setAttribute("data-theme", data.theme);
      updateThemeButton();
    }
    if (data.timerSeconds) {
      timerSeconds = data.timerSeconds;
      document.getElementById("timer").textContent = formatTime(timerSeconds);
    }
    if (data.currentMode) {
      setMode(data.currentMode);
    }
  }
}

// Gera as opções de categorias e configura o filtro
function setupCategoryFilter() {
  const categoryFilter = document.getElementById("category-filter");

  // Limpa as opções existentes, mantendo apenas a opção "Todas as categorias"
  while (categoryFilter.options.length > 1) {
    categoryFilter.remove(1);
  }

  // Coleta todas as categorias únicas
  const categories = new Set();

  questions.forEach((question) => {
    // Lidar com ambos os formatos de questões
    if (question.hasOwnProperty("category")) {
      categories.add(question.category);
    } else {
      // Para as questões do segundo formato, usamos uma categoria padrão
      categories.add("Redes WAN");
    }
  });

  // Adiciona as categorias como opções
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  // Adiciona o event listener para filtragem
  categoryFilter.addEventListener("change", filterQuestionsByCategory);
}

// Filtra as questões pela categoria selecionada
function filterQuestionsByCategory() {
  const selectedCategory = document.getElementById("category-filter").value;
  const allQuestions = document.querySelectorAll(".question");

  allQuestions.forEach((questionElement) => {
    const questionId = parseInt(questionElement.dataset.id);
    const question = questions.find((q) => q.id === questionId);

    // Verifica se a questão pertence à categoria selecionada ou se todas as categorias estão selecionadas
    const isOldFormat = question.hasOwnProperty("category");
    const questionCategory = isOldFormat ? question.category : "Redes WAN";

    if (selectedCategory === "" || questionCategory === selectedCategory) {
      questionElement.style.display = "block";
    } else {
      questionElement.style.display = "none";
    }
  });
}

// Alternância de tema (claro/escuro)
document.getElementById("theme-toggle").addEventListener("click", function () {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    this.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    this.innerHTML = '<i class="fas fa-sun"></i>';
  }
  saveData();
});

function updateThemeButton() {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

document.getElementById("start-timer").addEventListener("click", startTimer);

// Adicionar botão de reset para o cronômetro
const timerContainer = document.getElementById("timer-container");
if (!document.getElementById("reset-timer")) {
  const resetButton = document.createElement("button");
  resetButton.id = "reset-timer";
  resetButton.className = "timer-button";
  resetButton.textContent = "Zerar";
  resetButton.addEventListener("click", resetTimer);
  timerContainer.appendChild(resetButton);
}

// Configuração do seletor de modo
document
  .getElementById("mode-selector")
  .addEventListener("change", function () {
    setMode(this.value);
  });

// Inicializa o modo de estudo ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
  setMode("study");
  loadSavedData(); // Carrega dados salvos do localStorage
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

// Função para iniciar o cronômetro
function startTimer() {
  if (!timerRunning) {
    timerRunning = true;
    document.getElementById("start-timer").textContent = "Pausar";
    timerInterval = setInterval(() => {
      timerSeconds++;
      document.getElementById("timer").textContent = formatTime(timerSeconds);
    }, 1000);
  } else {
    pauseTimer();
  }
}

// Função para pausar o cronômetro
function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById("start-timer").textContent = "Retomar";
}

// Função para zerar o cronômetro
function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 0;
  document.getElementById("timer").textContent = "00:00";
  document.getElementById("start-timer").textContent = "Iniciar";
}

function setMode(mode) {
  currentMode = mode;

  // Configura a interface de acordo com o modo
  const timerContainer = document.getElementById("timer-container");

  if (mode === "test") {
    // No modo teste, exibir o timer e resetá-lo
    timerContainer.style.display = "flex";
    resetTimer();
    startTimer(); // Iniciar automaticamente no modo teste
  } else {
    // Nos outros modos, ocultar ou mostrar o timer conforme necessário
    if (mode === "study") {
      timerContainer.style.display = "flex";
      resetTimer();
    } else {
      // modo review
      timerContainer.style.display = "none";
      pauseTimer();
    }
  }
}

// Embaralhar questões
document
  .getElementById("shuffle-questions")
  .addEventListener("click", function () {
    // Algoritmo Fisher-Yates para embaralhar array
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    renderQuestions();
  });

// Reiniciar progresso
document
  .getElementById("reset-progress")
  .addEventListener("click", function () {
    if (
      confirm(
        "Tem certeza que deseja reiniciar todo o progresso? Esta ação não pode ser desfeita."
      )
    ) {
      questions.forEach((q) => (q.completed = false));
      userScore = 100;
      attemptCounts = {};
      saveData();
      renderQuestions();
      updateStats();
    }
  });

// Dados das questões
const questions = [
  {
    id: 1,
    category: "Conceitos Fundamentais",
    question: "O que é uma WAN (Wide Area Network)?",
    answer: "d",
    options: {
      a: "Uma rede que conecta dispositivos em uma única sala.",
      b: "Uma rede que conecta dispositivos em um único prédio.",
      c: "Uma rede que conecta dispositivos em uma cidade.",
      d: "Uma rede que conecta dispositivos em uma grande área geográfica.",
    },
    explanation:
      "WAN (Wide Area Network) é uma rede que conecta dispositivos distribuídos em grandes áreas geográficas, como países ou continentes. É a maior escala de rede, sendo a Internet o exemplo mais conhecido. As WANs são essenciais para conectar filiais de empresas, instituições de ensino e organizações distribuídas geograficamente.",
  },
  {
    id: 2,
    category: "Conceitos Fundamentais",
    question:
      "Qual das seguintes opções NÃO é uma característica típica de uma WAN?",
    answer: "a",
    options: {
      a: "Alta velocidade de transmissão.",
      b: "Alta taxa de erro.",
      c: "Alto custo.",
      d: "Grande área de cobertura.",
    },
    explanation:
      "Tradicionalmente, as WANs NÃO são caracterizadas por alta velocidade de transmissão (comparadas às LANs). Elas geralmente apresentam alta taxa de erro devido às grandes distâncias, alto custo de implementação e manutenção, e cobrem grandes áreas geográficas. Esta é uma característica importante que diferencia WANs de LANs, que normalmente oferecem maiores velocidades.",
  },
  {
    id: 3,
    category: "Histórico e Evolução",
    question:
      "Em que ano ocorreu a conexão pioneira entre dois computadores, marcando o início da história das WANs?",
    answer: "b",
    options: {
      a: "1955",
      b: "1965",
      c: "1975",
      d: "1985",
    },
    explanation:
      "A conexão pioneira entre dois computadores, que marcou o início da história das WANs, ocorreu em 1965. Esta foi uma das primeiras demonstrações de comunicação entre computadores distantes geograficamente, lançando as bases para o desenvolvimento da ARPANET, que veio alguns anos depois e é considerada a precursora da Internet moderna.",
  },
  {
    id: 4,
    category: "Histórico e Evolução",
    question: "Qual organização desenvolveu a ARPANET?",
    answer: "b",
    options: {
      a: "NASA",
      b: "Departamento de Defesa dos Estados Unidos",
      c: "União Europeia",
      d: "Nações Unidas",
    },
    explanation:
      "A ARPANET foi desenvolvida pelo Departamento de Defesa dos Estados Unidos, mais especificamente pela ARPA (Advanced Research Projects Agency), posteriormente renomeada para DARPA. O projeto inicial visava criar uma rede de comunicação descentralizada que pudesse sobreviver a ataques nucleares durante a Guerra Fria. Esta rede é considerada a precursora da Internet moderna.",
  },
  {
    id: 5,
    category: "Protocolos",
    question:
      "Qual protocolo foi fundamental para a comunicação em redes WAN e se tornou a base da internet?",
    answer: "c",
    options: {
      a: "HTTP",
      b: "FTP",
      c: "TCP/IP",
      d: "UDP",
    },
    explanation:
      "O protocolo TCP/IP (Transmission Control Protocol/Internet Protocol) foi fundamental para a comunicação em redes WAN e se tornou a base da Internet. Este conjunto de protocolos define como os dados são formatados, endereçados, transmitidos, roteados e recebidos. A adoção universal do TCP/IP permitiu a interconexão de diferentes tipos de redes, formando a rede global que conhecemos hoje como Internet.",
  },
  {
    id: 6,
    category: "Evolução Tecnológica",
    question:
      "Qual tecnologia proporcionou maior velocidade e flexibilidade nas redes WAN na década de 1990?",
    answer: "c",
    options: {
      a: "X.25",
      b: "Frame Relay",
      c: "ATM",
      d: "SD-WAN",
    },
    explanation:
      "Na década de 1990, a tecnologia ATM (Asynchronous Transfer Mode) proporcionou maior velocidade e flexibilidade nas redes WAN. O ATM utilizava células de tamanho fixo (53 bytes) para transmissão de dados, o que permitia uma comutação mais rápida e eficiente. Além disso, o ATM oferecia suporte a diferentes tipos de tráfego (voz, dados e vídeo) com garantias de QoS (Qualidade de Serviço).",
  },
  {
    id: 7,
    category: "Redes ATM",
    question: "O que significa a sigla ATM em redes de computadores?",
    answer: "c",
    options: {
      a: "Acesso Total à Mídia",
      b: "Alocação de Taxa Mínima",
      c: "Modo de Transferência Assíncrona",
      d: "Arquitetura de Transmissão Multicast",
    },
    explanation:
      'ATM significa Modo de Transferência Assíncrona (Asynchronous Transfer Mode). Esta tecnologia utiliza técnicas de comutação e multiplexação assíncrona, permitindo a transferência de diferentes tipos de tráfego (voz, dados e vídeo) em uma mesma rede, com garantias de Qualidade de Serviço (QoS). O "assíncrono" refere-se ao fato de que as células podem ser transmitidas em intervalos irregulares, dependendo da demanda.',
  },
  {
    id: 8,
    category: "Redes ATM",
    question:
      "Qual a principal característica do ATM em relação ao tamanho dos pacotes de dados?",
    answer: "b",
    options: {
      a: "Tamanho variável",
      b: "Tamanho fixo de 53 bytes",
      c: "Tamanho adaptável à largura de banda",
      d: "Tamanho determinado pelo tipo de aplicação",
    },
    explanation:
      "A principal característica do ATM em relação ao tamanho dos pacotes de dados é o uso de células com tamanho fixo de 53 bytes (5 bytes de cabeçalho e 48 bytes de dados). Este tamanho fixo permite um processamento mais rápido e eficiente nos comutadores, reduzindo a latência e o jitter (variação do atraso), o que é especialmente importante para aplicações sensíveis ao tempo, como voz e vídeo.",
  },
  {
    id: 9,
    category: "Redes ATM",
    question: "Qual o tamanho do cabeçalho de uma célula ATM?",
    answer: "b",
    options: {
      a: "3 bytes",
      b: "5 bytes",
      c: "8 bytes",
      d: "10 bytes",
    },
    explanation:
      "O cabeçalho de uma célula ATM tem 5 bytes de tamanho. Este cabeçalho contém informações essenciais para o roteamento da célula, incluindo os identificadores de circuito virtual (VPI/VCI), controle de fluxo, tipo de payload e detecção de erros. Os restantes 48 bytes da célula ATM são reservados para os dados propriamente ditos, formando o total de 53 bytes por célula.",
  },
  {
    id: 10,
    category: "Redes Móveis",
    question:
      "Qual tecnologia de rede móvel oferece velocidades de download de até 10 Gbps?",
    answer: "d",
    options: {
      a: "2G",
      b: "3G",
      c: "4G",
      d: "5G",
    },
    explanation:
      "A tecnologia de rede móvel 5G oferece velocidades de download de até 10 Gbps, o que representa um aumento significativo em relação à geração anterior (4G). Estas velocidades ultrarrápidas permitem novos casos de uso, como realidade aumentada/virtual, carros autônomos, cidades inteligentes e IoT em larga escala. O 5G também apresenta latência extremamente baixa, chegando a 1 milissegundo em condições ideais.",
  },
  {
    id: 11,
    category: "Protocolos",
    question:
      "Qual protocolo garante a entrega confiável e ordenada dos dados?",
    answer: "d",
    options: {
      a: "UDP",
      b: "IP",
      c: "ICMP",
      d: "TCP",
    },
    explanation:
      "O protocolo TCP (Transmission Control Protocol) garante a entrega confiável e ordenada dos dados. Ele estabelece uma conexão antes da transmissão de dados, confirma a recepção dos pacotes, reordena pacotes que chegam fora de ordem e solicita a retransmissão de pacotes perdidos. Por estas características, o TCP é utilizado em aplicações que requerem alta confiabilidade, como transferência de arquivos e navegação web.",
  },
  {
    id: 12,
    category: "Protocolos",
    question:
      "Qual protocolo oferece entrega rápida, mas não garante a confiabilidade dos dados?",
    answer: "c",
    options: {
      a: "TCP",
      b: "IP",
      c: "UDP",
      d: "PPP",
    },
    explanation:
      "O protocolo UDP (User Datagram Protocol) oferece entrega rápida, mas não garante a confiabilidade dos dados. Não há estabelecimento de conexão, confirmação de recebimento ou reordenação de pacotes. Esta simplicidade resulta em menor sobrecarga e latência, tornando o UDP ideal para aplicações como streaming de vídeo, jogos online e VoIP, onde a velocidade é mais importante que a entrega garantida de cada pacote.",
  },
  {
    id: 13,
    category: "Protocolos",
    question: 'Qual protocolo é utilizado pelo comando "ping"?',
    answer: "d",
    options: {
      a: "TCP",
      b: "UDP",
      c: "IP",
      d: "ICMP",
    },
    explanation:
      'O protocolo ICMP (Internet Control Message Protocol) é utilizado pelo comando "ping". Este protocolo é usado principalmente para diagnóstico e controle de erros na rede, enviando mensagens de erro e informações operacionais. O ping utiliza as mensagens Echo Request e Echo Reply do ICMP para verificar a conectividade entre dois hosts e medir o tempo de resposta (latência).',
  },
  {
    id: 14,
    category: "Modelos de Referência",
    question: "Qual modelo de referência possui 7 camadas?",
    answer: "b",
    options: {
      a: "TCP/IP",
      b: "OSI",
      c: "IP",
      d: "UDP",
    },
    explanation:
      "O modelo de referência OSI (Open Systems Interconnection) possui 7 camadas: Física, Enlace de Dados, Rede, Transporte, Sessão, Apresentação e Aplicação. Este modelo foi desenvolvido pela ISO para padronizar a comunicação entre sistemas diferentes. Embora o modelo TCP/IP seja mais utilizado na prática, o modelo OSI continua sendo uma referência importante para o entendimento conceitual das redes de computadores.",
  },
  {
    id: 15,
    category: "Modelos de Referência",
    question: "Qual modelo de referência possui 4 camadas?",
    answer: "c",
    options: {
      a: "OSI",
      b: "IP",
      c: "TCP/IP",
      d: "ICMP",
    },
    explanation:
      "O modelo de referência TCP/IP possui 4 camadas: Acesso à Rede, Internet, Transporte e Aplicação. Este modelo, também conhecido como modelo DoD, foi desenvolvido antes do modelo OSI e é o que realmente é implementado na Internet. Enquanto o modelo OSI é mais conceitual, o TCP/IP foi criado com base na experiência prática de implementação de redes, o que o tornou o padrão de facto para comunicação em redes.",
  },
  {
    id: 16,
    pergunta: "Qual a principal característica que define uma rede WAN?",
    alternativas: [
      "Abrange apenas o ambiente interno de uma empresa",
      "Conecta dispositivos dentro de um único edifício",
      "Abrange uma área geográfica extensa, como cidades ou países",
      "É limitada a no máximo 100 dispositivos conectados",
      "Funciona apenas com tecnologia Ethernet",
    ],
    resposta: 2,
    explicacao:
      "As WANs (Wide Area Networks) se caracterizam por cobrirem áreas geograficamente extensas, conectando redes menores separadas por grandes distâncias.",
  },
  {
    id: 17,
    pergunta: "Quais das tecnologias abaixo são consideradas tecnologias WAN?",
    alternativas: [
      "Bluetooth e Wi-Fi",
      "Frame Relay e ATM",
      "Ethernet e Token Ring",
      "USB e FireWire",
      "Zigbee e Z-Wave",
    ],
    resposta: 1,
    explicacao:
      "Frame Relay e ATM (Asynchronous Transfer Mode) são exemplos de tecnologias tradicionalmente utilizadas em redes WAN.",
  },
  {
    id: 18,
    pergunta:
      "O que significa a sigla ATM no contexto de redes de computadores?",
    alternativas: [
      "Advanced Transmission Method",
      "Automated Transfer Management",
      "Asynchronous Transfer Mode",
      "Advanced Terminal Multiplexer",
      "Area Transfer Management",
    ],
    resposta: 2,
    explicacao:
      "ATM significa Asynchronous Transfer Mode (Modo de Transferência Assíncrono), uma tecnologia de comutação e multiplexação baseada em células de tamanho fixo.",
  },
  {
    id: 19,
    pergunta: "Qual o tamanho padrão das células ATM?",
    alternativas: ["32 bytes", "48 bytes", "53 bytes", "64 bytes", "128 bytes"],
    resposta: 2,
    explicacao:
      "As células ATM possuem tamanho fixo de 53 bytes, sendo 5 bytes de cabeçalho e 48 bytes de dados (payload).",
  },
  {
    id: 20,
    pergunta: "Qual a principal vantagem da tecnologia ATM?",
    alternativas: [
      "Maior velocidade em relação a todas as outras tecnologias de rede",
      "Suporte integrado a diferentes tipos de tráfego (voz, dados e vídeo) com QoS",
      "Facilidade de implementação e baixo custo",
      "Compatibilidade nativa com redes Ethernet",
      "Criptografia incorporada em todos os pacotes",
    ],
    resposta: 1,
    explicacao:
      "Uma das principais vantagens do ATM é sua capacidade de transportar diferentes tipos de tráfego (como voz, dados e vídeo) em uma mesma infraestrutura com garantias de Qualidade de Serviço (QoS).",
  },
  {
    id: 21,
    pergunta:
      "Qual é a tecnologia que substituiu frequentemente o X.25 em implementações de WAN?",
    alternativas: [
      "Token Ring",
      "Frame Relay",
      "FDDI",
      "Ethernet",
      "Bluetooth",
    ],
    resposta: 1,
    explicacao:
      "Frame Relay foi amplamente adotado como substituto para X.25 por oferecer maior velocidade e menor overhead, sendo uma evolução tecnológica para redes WAN.",
  },
  {
    id: 22,
    pergunta: "Sobre as camadas do modelo ATM, é correto afirmar que:",
    alternativas: [
      "Possui apenas duas camadas: física e ATM",
      "É dividido em três camadas: física, ATM e adaptação ATM (AAL)",
      "Segue exatamente as mesmas camadas do modelo OSI",
      "Possui quatro camadas, igual ao modelo TCP/IP",
      "Não possui camadas definidas",
    ],
    resposta: 1,
    explicacao:
      "O modelo ATM é divido em três camadas: física (para transmissão), ATM (para comutação e multiplexação) e adaptação ATM (AAL - para interfacear com camadas superiores).",
  },
  {
    id: 23,
    pergunta:
      "Qual dessas tecnologias é conhecida por utilizar 'circuitos virtuais' para transmissão de dados em WANs?",
    alternativas: ["Ethernet", "TCP/IP puro", "Frame Relay", "Wi-Fi", "NFC"],
    resposta: 2,
    explicacao:
      "Frame Relay é uma tecnologia WAN que utiliza o conceito de circuitos virtuais para estabelecer conexões entre pontos da rede.",
  },
  {
    id: 24,
    pergunta:
      "Qual a diferença fundamental entre comutação de circuitos e comutação de pacotes em redes WAN?",
    alternativas: [
      "Comutação de circuitos usa TCP, enquanto a de pacotes usa UDP",
      "Comutação de circuitos estabelece um caminho dedicado, enquanto a de pacotes divide os dados em unidades que podem seguir rotas diferentes",
      "Comutação de circuitos é utilizada apenas em fibra óptica, enquanto a de pacotes só funciona em cabo coaxial",
      "Comutação de circuitos é mais recente que a de pacotes",
      "Não há diferença significativa, são apenas nomes diferentes para a mesma tecnologia",
    ],
    resposta: 1,
    explicacao:
      "Na comutação de circuitos, estabelece-se um caminho dedicado entre origem e destino para toda a comunicação. Já na comutação de pacotes, os dados são divididos em pacotes que podem seguir rotas diferentes e ser remontados no destino.",
  },
  {
    id: 25,
    pergunta: "O que significa QoS em redes WAN?",
    alternativas: [
      "Quick Operating System - sistema operacional específico para roteadores WAN",
      "Query of Sequences - método de endereçamento de pacotes",
      "Queue of Services - método de organização de servidores",
      "Quality of Service - mecanismo para garantir desempenho e priorizar tráfego",
      "Quantization of Signals - técnica de conversão analógico-digital",
    ],
    resposta: 3,
    explicacao:
      "QoS (Quality of Service) refere-se aos mecanismos que garantem certos níveis de desempenho para fluxos de dados, permitindo priorizar tráfego crítico em redes WAN.",
  },
  {
    id: 26,
    pergunta: "Qual das seguintes não é uma classe de adaptação ATM (AAL)?",
    alternativas: ["AAL1", "AAL2", "AAL3/4", "AAL5", "AAL7"],
    resposta: 4,
    explicacao:
      "As classes de adaptação ATM padronizadas são AAL1, AAL2, AAL3/4 e AAL5. AAL7 não existe como padrão.",
  },
  {
    id: 27,
    pergunta: "Quais são os principais elementos que compõem uma rede ATM?",
    alternativas: [
      "Switches ATM, adaptadores de terminal e conexões ATM",
      "Roteadores, switches e hubs",
      "Terminais, multiplexadores e transceivers",
      "PCs, servidores e repetidores",
      "Gateways, firewalls e proxies",
    ],
    resposta: 0,
    explicacao:
      "Uma rede ATM é composta principalmente por switches ATM (para comutação), adaptadores de terminal (para conectar equipamentos) e as conexões ATM (meio físico).",
  },
  {
    id: 28,
    pergunta:
      "Qual a principal diferença entre MPLS e outras tecnologias WAN tradicionais?",
    alternativas: [
      "MPLS utiliza apenas fibra óptica, enquanto outras podem usar cabo de cobre",
      "MPLS não suporta QoS, enquanto tecnologias como ATM sim",
      "MPLS combina roteamento IP com técnicas de comutação de pacotes, oferecendo mais flexibilidade",
      "MPLS é exclusivamente para conexões de curta distância",
      "MPLS só funciona com IPv6",
    ],
    resposta: 2,
    explicacao:
      "MPLS (Multiprotocol Label Switching) se diferencia por combinar o roteamento IP com a eficiência da comutação de pacotes, criando uma tecnologia que oferece maior flexibilidade e escalabilidade para redes WAN.",
  },
  {
    id: 29,
    pergunta:
      "O que caracteriza a tecnologia SONET/SDH utilizada em redes WAN?",
    alternativas: [
      "É um protocolo de roteamento específico para WANs",
      "É uma tecnologia para transmissão de dados em alta velocidade sobre fibra óptica com sincronização precisa",
      "É um sistema de endereçamento para células ATM",
      "É o padrão de criptografia utilizado em WANs seguras",
      "É um tipo de conexão exclusivo para backbones de internet",
    ],
    resposta: 1,
    explicacao:
      "SONET (Synchronous Optical Network) e SDH (Synchronous Digital Hierarchy) são padrões para transmissão de dados em alta velocidade sobre fibra óptica, caracterizados pela sincronização precisa e multiplexação síncrona.",
  },
  {
    id: 30,
    pergunta:
      "Qual o propósito da camada AAL (ATM Adaptation Layer) na arquitetura ATM?",
    alternativas: [
      "Gerenciar a conexão física entre dispositivos ATM",
      "Adaptar os diferentes tipos de tráfego dos protocolos de camadas superiores para o formato de células ATM",
      "Controlar o acesso a recursos da rede",
      "Criptografar o tráfego da rede",
      "Gerenciar endereços IP dentro da rede ATM",
    ],
    resposta: 1,
    explicacao:
      "A camada AAL (ATM Adaptation Layer) tem como função principal adaptar os dados de diferentes serviços e protocolos de camadas superiores para o formato adequado ao transporte em células ATM.",
  },
];

// Elementos DOM
const questionsContainer = document.getElementById("questions-container");
const completedCountElement = document.getElementById("completed-count");
const totalCountElement = document.getElementById("total-count");
const completionPercentageElement = document.getElementById(
  "completion-percentage"
);
const progressBarElement = document.getElementById("progress-bar");
const modalOverlay = document.getElementById("modal-overlay");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const modalClose = document.getElementById("modal-close");

// Configura total de questões
totalCountElement.textContent = questions.length;

// Renderiza as questões
function renderQuestions() {
  questionsContainer.innerHTML = "";

  questions.forEach((question) => {
    const questionElement = document.createElement("div");
    questionElement.className = question.completed
      ? "question completed"
      : "question";
    questionElement.dataset.id = question.id;

    // Determina qual formato o objeto da questão está usando
    const isOldFormat = question.hasOwnProperty("question");

    // Conteúdo HTML baseado no formato do objeto
    if (isOldFormat) {
      // Formato antigo (question, answer, options)
      questionElement.innerHTML = `
        <div class="question-card">
          <div class="question-number">${question.id}</div>
          <div class="question-category">${question.category || "Geral"}</div>
          <p class="question-text">${question.question}</p>
          
          <div class="options-container">
            <div class="option"><strong>a)</strong> ${question.options.a}</div>
            <div class="option"><strong>b)</strong> ${question.options.b}</div>
            <div class="option"><strong>c)</strong> ${question.options.c}</div>
            <div class="option"><strong>d)</strong> ${question.options.d}</div>
          </div>

          <div class="input-group">
            <input type="text" placeholder="Digite a alternativa (a, b, c ou d)" ${
              question.completed ? "disabled" : ""
            }>
            <button ${question.completed ? "disabled" : ""}>Verificar</button>
          </div>
          <div class="feedback"></div>
        </div>
      `;
    } else {
      // Novo formato (pergunta, alternativas, resposta)
      questionElement.innerHTML = `
        <div class="question-card">
          <div class="question-number">${question.id}</div>
          <div class="question-category">Redes WAN</div>
          <p class="question-text">${question.pergunta}</p>
          
          <div class="options-container">
            <div class="option"><strong>a)</strong> ${
              question.alternativas[0]
            }</div>
            <div class="option"><strong>b)</strong> ${
              question.alternativas[1]
            }</div>
            <div class="option"><strong>c)</strong> ${
              question.alternativas[2]
            }</div>
            <div class="option"><strong>d)</strong> ${
              question.alternativas[3]
            }</div>
            <div class="option"><strong>e)</strong> ${
              question.alternativas[4]
            }</div>
          </div>

          <div class="input-group">
            <input type="text" placeholder="Digite a alternativa (a, b, c, d ou e)" ${
              question.completed ? "disabled" : ""
            }>
            <button ${question.completed ? "disabled" : ""}>Verificar</button>
          </div>
          <div class="feedback"></div>
        </div>
      `;
    }

    questionsContainer.appendChild(questionElement);
  });

  // Adiciona event listeners aos botões
  document.querySelectorAll(".question button").forEach((button) => {
    button.addEventListener("click", checkAnswer);
  });

  // Adiciona event listeners aos campos de input para permitir envio com Enter
  document.querySelectorAll(".question input").forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const button = input.nextElementSibling;
        button.click();
      }
    });
  });

  updateStats();
  setupCategoryFilter();
}

// Verifica a resposta
function checkAnswer(e) {
  const questionElement = e.target.closest(".question");
  const questionId = parseInt(questionElement.dataset.id);
  const inputElement = questionElement.querySelector("input");
  const feedbackElement = questionElement.querySelector(".feedback");

  const question = questions.find((q) => q.id === questionId);
  const userAnswer = inputElement.value.toLowerCase().trim();

  // Determina qual formato o objeto da questão está usando
  const isOldFormat = question.hasOwnProperty("question");

  // Compara a resposta com base no formato
  let isCorrect = false;

  if (isOldFormat) {
    isCorrect = userAnswer === question.answer;
  } else {
    // Converte a resposta numérica (índice) para letra (a, b, c, d, e)
    const letterAnswers = ["a", "b", "c", "d", "e"];
    const correctAnswer = letterAnswers[question.resposta];
    isCorrect = userAnswer === correctAnswer;
  }

  if (isCorrect) {
    // Resposta correta
    question.completed = true;
    questionElement.classList.add("completed");
    inputElement.disabled = true;
    e.target.disabled = true;
    feedbackElement.textContent = "";

    // Atualiza estatísticas
    updateStats();

    // Mostra o modal com a explicação
    showExplanationModal(question);
  } else {
    // Resposta incorreta
    feedbackElement.textContent = "Resposta incorreta. Tente novamente.";
    inputElement.value = "";
    inputElement.focus();
  }
}

// Mostra o modal com a explicação
function showExplanationModal(question) {
  const isOldFormat = question.hasOwnProperty("question");

  modalTitle.textContent = `Questão ${question.id} - Resposta Correta!`;

  let content = "";

  if (isOldFormat) {
    content = `
      <p><strong>Alternativa correta: ${question.answer.toUpperCase()}</strong> - ${
      question.options[question.answer]
    }</p>
      <h4 class="explanation-title">Explicação:</h4>
      <p>${question.explanation}</p>
    `;
  } else {
    const letterAnswers = ["a", "b", "c", "d", "e"];
    const correctAnswer = letterAnswers[question.resposta];

    content = `
      <p><strong>Alternativa correta: ${correctAnswer.toUpperCase()}</strong> - ${
      question.alternativas[question.resposta]
    }</p>
      <h4 class="explanation-title">Explicação:</h4>
      <p>${question.explicacao}</p>
    `;
  }

  modalBody.innerHTML = content;
  modalOverlay.classList.add("show");
}

// Fecha o modal
modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("show");
});

// Fecha o modal ao clicar fora dele
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("show");
  }
});

// Atualiza estatísticas
function updateStats() {
  const completedQuestions = questions.filter((q) => q.completed).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((completedQuestions / totalQuestions) * 100);

  completedCountElement.textContent = completedQuestions;
  completionPercentageElement.textContent = `${percentage}%`;
  progressBarElement.style.width = `${percentage}%`;
}

window.addEventListener("beforeunload", function () {
  saveData();
});

// Inicializa a página
renderQuestions();
