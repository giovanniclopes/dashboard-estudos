const questions = [
  {
    id: 1,
    category: "Conceitos Fundamentais",
    question:
      "Qual princípio de design se refere à organização dos elementos visuais em uma ordem de importância?",
    answer: "b",
    options: {
      a: "Layout",
      b: "Hierarquia visual",
      c: "Tipografia",
      d: "Espaço negativo",
    },
    explanation:
      "Hierarquia visual organiza os elementos para destacar informações importantes e guiar o olhar do usuário.",
  },
  {
    id: 2,
    category: "Gestalt",
    question:
      "Qual teoria da Gestalt explora como os usuários agrupam elementos visuais semelhantes?",
    answer: "c",
    options: {
      a: "Proximidade",
      b: "Fechamento",
      c: "Similaridade",
      d: "Continuidade",
    },
    explanation:
      "A similaridade diz que elementos semelhantes são percebidos como relacionados, facilitando o agrupamento visual.",
  },
  {
    id: 3,
    category: "Padrões de Design",
    question:
      "Qual padrão de design foi desenvolvido pelo Google e enfatiza o uso de elementos visuais inspirados no mundo físico?",
    answer: "b",
    options: {
      a: "Human Interface Guidelines (HIG)",
      b: "Material Design",
      c: "Fluent Design System",
      d: "iOS Design Language",
    },
    explanation:
      "O Material Design do Google utiliza conceitos do mundo físico para criar interfaces modernas e consistentes.",
  },
  {
    id: 4,
    category: "Usabilidade",
    question:
      "Qual termo se refere à facilidade com que os usuários podem utilizar um produto ou serviço?",
    answer: "b",
    options: {
      a: "Experiência do usuário (UX)",
      b: "Usabilidade",
      c: "Design visual",
      d: "Arquitetura da informação",
    },
    explanation:
      "Usabilidade é a facilidade de uso de um produto, fundamental para a satisfação do usuário.",
  },
  {
    id: 5,
    category: "Ferramentas de UX",
    question:
      "Qual ferramenta de UX mapeia as etapas e emoções do usuário ao interagir com um produto?",
    answer: "b",
    options: {
      a: "Persona",
      b: "Mapa de jornada",
      c: "Wireframe",
      d: "Protótipo",
    },
    explanation:
      "O mapa de jornada representa visualmente as etapas e emoções do usuário na interação com o produto.",
  },
  {
    id: 6,
    category: "Design Visual",
    question: "O que é espaço negativo no design?",
    answer: "b",
    options: {
      a: "O espaço ocupado por elementos gráficos",
      b: "O espaço vazio ao redor dos elementos visuais",
      c: "A combinação de cores em um design",
      d: "O uso de tipografia em um design",
    },
    explanation:
      "Espaço negativo é o espaço vazio que ajuda no equilíbrio e na clareza visual da interface.",
  },
  {
    id: 7,
    category: "Gestalt",
    question:
      "Qual princípio da Gestalt descreve a tendência de perceber formas completas, mesmo quando estão incompletas?",
    answer: "c",
    options: {
      a: "Proximidade",
      b: "Similaridade",
      c: "Fechamento",
      d: "Continuidade",
    },
    explanation:
      "Fechamento é a tendência do cérebro de completar formas incompletas, facilitando a compreensão visual.",
  },
  {
    id: 8,
    category: "Padrões de Design",
    question: "Qual padrão de design é utilizado em dispositivos da Apple?",
    answer: "b",
    options: {
      a: "Material Design",
      b: "Human Interface Guidelines (HIG)",
      c: "Fluent Design System",
      d: "Bootstrap",
    },
    explanation:
      "O HIG da Apple define diretrizes para interfaces de iOS e macOS.",
  },
  {
    id: 9,
    category: "Usabilidade",
    question: "Qual é o objetivo principal da usabilidade?",
    answer: "b",
    options: {
      a: "Criar interfaces visualmente atraentes",
      b: "Garantir que os usuários possam usar um produto de forma eficaz",
      c: "Desenvolver personas de usuários",
      d: "Mapear a jornada do usuário",
    },
    explanation:
      "Usabilidade visa garantir o uso eficaz, eficiente e satisfatório do produto.",
  },
  {
    id: 10,
    category: "UX",
    question: "O que são personas em UX?",
    answer: "b",
    options: {
      a: "Representações visuais da jornada do usuário",
      b: "Representações fictícias de usuários típicos",
      c: "Testes de usabilidade com usuários reais",
      d: "Mapas de arquitetura da informação",
    },
    explanation:
      "Personas são perfis fictícios baseados em dados reais para orientar decisões de design.",
  },
  {
    id: 11,
    category: "Design Visual",
    question:
      "Qual elemento do design está relacionado à escolha e uso de fontes?",
    answer: "c",
    options: {
      a: "Layout",
      b: "Hierarquia visual",
      c: "Tipografia",
      d: "Cor",
    },
    explanation:
      "Tipografia trata da escolha, combinação e uso de fontes em um design.",
  },
  {
    id: 12,
    category: "Gestalt",
    question:
      "Qual teoria da Gestalt descreve a tendência de perceber elementos próximos como um grupo?",
    answer: "b",
    options: {
      a: "Similaridade",
      b: "Proximidade",
      c: "Fechamento",
      d: "Continuidade",
    },
    explanation:
      "Proximidade agrupa elementos próximos, facilitando a organização visual.",
  },
  {
    id: 13,
    category: "Padrões de Design",
    question:
      "Qual padrão de design foca em criar interfaces intuitivas e fáceis de usar?",
    answer: "c",
    options: {
      a: "Material Design",
      b: "Human Interface Guidelines (HIG)",
      c: "Design de interação",
      d: "Design visual",
    },
    explanation:
      "Design de interação visa criar interfaces intuitivas e fáceis para o usuário.",
  },
  {
    id: 14,
    category: "Usabilidade",
    question: "O que é um teste de usabilidade?",
    answer: "b",
    options: {
      a: "Uma pesquisa com usuários sobre suas preferências de design",
      b: "Uma avaliação da facilidade com que os usuários podem usar um produto",
      c: "Um mapa da jornada do usuário",
      d: "Uma representação visual da arquitetura da informação",
    },
    explanation:
      "Teste de usabilidade avalia como usuários reais interagem e encontram dificuldades em um produto.",
  },
  {
    id: 15,
    category: "UX",
    question:
      "Qual elemento da UX se concentra em como os usuários interagem com um produto?",
    answer: "c",
    options: {
      a: "Design visual",
      b: "Arquitetura da informação",
      c: "Design de interação",
      d: "Pesquisa com usuários",
    },
    explanation:
      "Design de interação foca nas ações do usuário e na resposta do sistema.",
  },
  {
    id: 16,
    category: "Design Visual",
    question: "Qual elemento de design está relacionado à paleta de cores?",
    answer: "d",
    options: {
      a: "Tipografia",
      b: "Layout",
      c: "Espaço Negativo",
      d: "Cor",
    },
    explanation:
      "A cor é responsável pela paleta cromática e pela comunicação visual.",
  },
  {
    id: 17,
    category: "Gestalt",
    question:
      "Qual teoria da Gestalt descreve a tendência de seguir um padrão contínuo?",
    answer: "d",
    options: {
      a: "Proximidade",
      b: "Similaridade",
      c: "Fechamento",
      d: "Continuidade",
    },
    explanation:
      "Continuidade é a tendência do olho de seguir linhas e padrões contínuos.",
  },
  {
    id: 18,
    category: "Padrões de Design",
    question:
      "Qual padrão de design é usado para criar interfaces consistentes e intuitivas?",
    answer: "d",
    options: {
      a: "Material Design",
      b: "Human Interface Guidelines (HIG)",
      c: "Padrões de design",
      d: "Todas as anteriores",
    },
    explanation:
      "Todos os padrões citados visam criar interfaces consistentes e intuitivas.",
  },
  {
    id: 19,
    category: "UX",
    question: "O que é necessário para criar uma boa UX?",
    answer: "d",
    options: {
      a: "Um layout visualmente atraente",
      b: "Uma arquitetura de informação bem definida",
      c: "Pesquisas com usuários e testes de usabilidade",
      d: "Todas as anteriores",
    },
    explanation:
      "Uma boa UX depende de vários fatores, incluindo layout, arquitetura e pesquisa com usuários.",
  },
  {
    id: 20,
    category: "Ferramentas de Design",
    question: "O que é um wireframe?",
    answer: "b",
    options: {
      a: "Um protótipo em alta fidelidade",
      b: "Um esboço de baixa fidelidade do layout de uma página ou tela",
      c: "Um mapa de jornada do usuário",
      d: "Uma persona de usuário",
    },
    explanation:
      "Wireframe é um esboço estrutural, sem detalhes visuais finais, usado para planejar a interface.",
  },
  {
    id: 21,
    category: "Design Thinking",
    question: "Qual das seguintes fases faz parte do Design Thinking?",
    answer: "b",
    options: {
      a: "Desenvolvimento",
      b: "Teste",
      c: "Implantação",
      d: "Manutenção",
    },
    explanation:
      "Teste é uma das fases do Design Thinking, essencial para validar soluções com usuários.",
  },
  {
    id: 22,
    category: "Scrum",
    question: "Qual é o objetivo principal do Scrum?",
    answer: "c",
    options: {
      a: "Gerenciar o fluxo de trabalho",
      b: "Melhorar a comunicação",
      c: "Entregar incrementos de valor",
      d: "Planejar o projeto",
    },
    explanation:
      "O Scrum visa entregar incrementos de valor em ciclos curtos e iterativos.",
  },
  {
    id: 23,
    category: "Kanban",
    question: "Qual é a função do Kanban?",
    answer: "b",
    options: {
      a: "Gerenciar o backlog do produto",
      b: "Visualizar o fluxo de trabalho",
      c: "Definir os requisitos do usuário",
      d: "Criar protótipos de alta fidelidade",
    },
    explanation:
      "Kanban é utilizado para visualizar e gerenciar o fluxo de trabalho de forma eficiente.",
  },
  {
    id: 24,
    category: "Ferramentas de Design",
    question: "O que são mockups?",
    answer: "b",
    options: {
      a: "Representações visuais de baixa fidelidade do layout e da estrutura",
      b: "Representações visuais de alta fidelidade do design visual",
      c: "Documentos de requisitos do usuário",
      d: "Planos de teste",
    },
    explanation:
      "Mockups mostram a aparência final da interface, incluindo cores e tipografia.",
  },
  {
    id: 25,
    category: "Design Thinking",
    question: "Qual das seguintes opções descreve melhor o Design Thinking?",
    answer: "b",
    options: {
      a: "Uma metodologia de gerenciamento de projetos",
      b: "Uma abordagem centrada no ser humano para a resolução de problemas",
      c: "Um framework para desenvolvimento de software",
      d: "Um método para visualização de fluxo de trabalho",
    },
    explanation:
      "Design Thinking foca na empatia e na solução criativa de problemas centrados no usuário.",
  },
  {
    id: 26,
    category: "Scrum",
    question: "Qual é o papel do Product Owner no Scrum?",
    answer: "c",
    options: {
      a: "Gerenciar o Sprint Backlog",
      b: "Facilitar as reuniões diárias",
      c: "Definir os requisitos do produto",
      d: "Testar o incremento do produto",
    },
    explanation:
      "O Product Owner é responsável por definir e priorizar os requisitos do produto.",
  },
  {
    id: 27,
    category: "Kanban",
    question: "Qual é a função dos limites de WIP no Kanban?",
    answer: "b",
    options: {
      a: "Priorizar as tarefas",
      b: "Limitar o trabalho em andamento",
      c: "Medir o desempenho do fluxo de trabalho",
      d: "Visualizar o fluxo de trabalho",
    },
    explanation:
      "Limites de WIP evitam sobrecarga e melhoram o fluxo de trabalho no Kanban.",
  },
  {
    id: 28,
    category: "Design Visual",
    question: "Qual é a principal diferença entre wireframes e mockups?",
    answer: "b",
    options: {
      a: "Wireframes são de alta fidelidade, enquanto mockups são de baixa fidelidade",
      b: "Wireframes são focados no layout e estrutura, enquanto mockups são focados no design visual",
      c: "Wireframes são usados para planejamento, enquanto mockups são usados para teste",
      d: "Não há diferença entre wireframes e mockups",
    },
    explanation:
      "Wireframes priorizam estrutura, mockups mostram o visual final da interface.",
  },
  {
    id: 29,
    category: "Design Thinking",
    question:
      "Qual das seguintes técnicas é comumente usada na fase de ideação do Design Thinking?",
    answer: "b",
    options: {
      a: "Análise de requisitos",
      b: "Brainstorming",
      c: "Teste de usabilidade",
      d: "Desenvolvimento iterativo",
    },
    explanation:
      "Brainstorming é usado para gerar ideias na fase de ideação do Design Thinking.",
  },
  {
    id: 30,
    category: "Padrões de Design",
    question:
      "Qual a importância de seguir padrões de design como Material Design e HIG?",
    answer: "c",
    options: {
      a: "Seguir padrões de design não é importante, o que importa é a criatividade.",
      b: "Seguir padrões de design é importante apenas para garantir a estética das interfaces.",
      c: "Seguir padrões de design é importante para garantir a consistência, a familiaridade e a qualidade das interfaces, facilitando o uso e a compreensão por parte dos usuários.",
      d: "Seguir padrões de design é importante apenas para sistemas operacionais móveis.",
    },
    explanation:
      "Padrões de design garantem interfaces consistentes, intuitivas e de fácil compreensão.",
  },
];
