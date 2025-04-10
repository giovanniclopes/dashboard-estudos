const quizzes = [
  {
    id: "wan-quiz",
    title: "Redes WAN",
    description:
      "Exercícios essenciais para sua preparação na prova de Redes WAN.",
    icon: "fa-network-wired",
    questionsCount: 30,
    lastAccess: "2024-04-10",
    progress: 65,
    url: "wan-quiz-page.html",
  },
];

function renderQuizCards() {
  const container = document.getElementById("quiz-cards-container");
  container.innerHTML = "";

  quizzes.forEach((quiz) => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.innerHTML = `
      <div class="quiz-icon">
        <i class="fas ${quiz.icon}"></i>
      </div>
      <div class="quiz-info">
        <h3>${quiz.title}</h3>
        <p>${quiz.description}</p>
        <div class="quiz-meta">
          <span><i class="fas fa-question-circle"></i> ${
            quiz.questionsCount
          } questões</span>
          <span><i class="fas fa-calendar-alt"></i> Último acesso: ${formatDate(
            quiz.lastAccess
          )}</span>
        </div>
        <div class="progress-container">
          <div class="progress-bar" style="width: ${quiz.progress}%"></div>
          <span class="progress-text">${quiz.progress}% completo</span>
        </div>
        <div class="quiz-actions">
          <a href="${quiz.url}" class="btn btn-primary">Continuar</a>
          <button class="btn btn-secondary" onclick="resetQuizProgress('${
            quiz.id
          }')">Reiniciar</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}

function resetQuizProgress(quizId) {
  if (
    confirm(
      `Tem certeza que deseja reiniciar o progresso do quiz ${quizId}? Esta ação não pode ser desfeita.`
    )
  ) {
    if (quizId === "wan-quiz") {
      localStorage.removeItem("wanQuizData");
      alert("Progresso reiniciado com sucesso!");
      const quizIndex = quizzes.findIndex((q) => q.id === quizId);
      if (quizIndex !== -1) {
        quizzes[quizIndex].progress = 0;
        renderQuizCards();
      }
    }
  }
}

function addNewQuiz() {
  const newQuizName = prompt("Digite o nome do novo quiz:");
  if (newQuizName) {
    alert(
      `Quiz "${newQuizName}" seria adicionado aqui (implementação futura).`
    );
  }
}

function syncQuizData() {
  quizzes.forEach((quiz, index) => {
    if (quiz.id === "wan-quiz") {
      const savedData = localStorage.getItem("wanQuizData");
      if (savedData) {
        const data = JSON.parse(savedData);
        if (data.completedQuestions && quiz.questionsCount) {
          const progress = Math.round(
            (data.completedQuestions.length / quiz.questionsCount) * 100
          );
          quizzes[index].progress = progress;
        }
        quizzes[index].lastAccess = new Date().toISOString().split("T")[0];
      }
    }
  });
  renderQuizCards();
}

document.addEventListener("DOMContentLoaded", () => {
  syncQuizData();
  renderQuizCards();

  document.getElementById("add-quiz-btn").addEventListener("click", addNewQuiz);

  document.getElementById("sort-name").addEventListener("click", () => {
    quizzes.sort((a, b) => a.title.localeCompare(b.title));
    renderQuizCards();
  });

  document.getElementById("sort-progress").addEventListener("click", () => {
    quizzes.sort((a, b) => b.progress - a.progress);
    renderQuizCards();
  });

  document.getElementById("sort-recent").addEventListener("click", () => {
    quizzes.sort((a, b) => new Date(b.lastAccess) - new Date(a.lastAccess));
    renderQuizCards();
  });
});
