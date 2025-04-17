const quizConfig = {
  "wan-quiz": {
    id: "wan-quiz",
    title: "Redes WAN",
    subtitle: "Exercícios essenciais para sua preparação",
    description:
      "Exercícios essenciais para sua preparação na prova de Redes WAN.",
    icon: "fa-network-wired",
    questionsFile: "questions/wan-questions.js",
    lastAccess: "2024-04-10",
    localStorageKey: "wanQuizData",
  },

  "software-eng": {
    id: "software-eng",
    title: "Engenharia de Software",
    subtitle: "Questões sobre fundamentos e requisitos",
    description:
      "Prepare-se para a prova de Engenharia de Software com estas questões.",
    icon: "fa-laptop-code",
    questionsFile: "questions/software-engineering-questions.js",
    lastAccess: "2024-04-13",
    localStorageKey: "softwareEngQuizData",
  },

  "oop-quiz": {
    id: "oop-quiz",
    title: "Programação Orientada a Objetos",
    subtitle: "Questões sobre conceitos de POO",
    description:
      "Teste seus conhecimentos sobre Programação Orientada a Objetos.",
    icon: "fa-code",
    questionsFile: "questions/object-oriented-programming.js",
    lastAccess: "2024-04-13",
    localStorageKey: "oopQuizData",
  },

  "php-quiz": {
    id: "php-quiz",
    title: "PHP",
    subtitle: "Questões sobre PHP",
    description: "Teste seus conhecimentos sobre PHP.",
    icon: "fa-file-code",
    questionsFile: "questions/php-questions.js",
    lastAccess: "2025-04-15",
    localStorageKey: "phpQuizData",
  },

  "app-design-quiz": {
    id: "app-design-quiz",
    title: "Design de Aplicações",
    subtitle: "Questões sobre design de aplicações",
    description:
      "Teste seus conhecimentos sobre design de aplicativos e interfaces.",
    icon: "fa-paint-brush",
    questionsFile: "questions/application-design-questions.js",
    lastAccess: "2025-04-17",
    localStorageKey: "appDesignQuizData",
  },
};

const allQuizzes = Object.values(quizConfig).map((quiz) => {
  const savedData = localStorage.getItem(quiz.localStorageKey);
  let progress = 0;

  if (savedData) {
    const data = JSON.parse(savedData);
    if (data.completedQuestions) {
      progress = Math.min(
        100,
        Math.round((data.completedQuestions.length / 30) * 100)
      );
    }
  }

  return {
    id: quiz.id,
    title: quiz.title,
    description: quiz.description,
    icon: quiz.icon,
    questionsCount: 30,
    lastAccess: quiz.lastAccess,
    progress: progress,
  };
});
