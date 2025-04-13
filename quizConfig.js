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
    lastAccess: "2024-04-11",
    localStorageKey: "softwareEngQuizData",
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
