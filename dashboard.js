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
  // Você pode adicionar mais quizzes posteriormente seguindo o mesmo modelo
];

// Renderiza os cards dos quizzes
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

// Formata a data para exibição
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}

// Reinicia o progresso de um quiz específico
function resetQuizProgress(quizId) {
  if (
    confirm(
      `Tem certeza que deseja reiniciar o progresso do quiz ${quizId}? Esta ação não pode ser desfeita.`
    )
  ) {
    // Implementação do reset de progresso
    // Aqui seria necessário acessar o localStorage e limpar os dados do quiz específico

    // Exemplo de como poderia ser feito:
    if (quizId === "wan-quiz") {
      localStorage.removeItem("wanQuizData");
      alert("Progresso reiniciado com sucesso!");
      // Atualiza o progresso na interface
      const quizIndex = quizzes.findIndex((q) => q.id === quizId);
      if (quizIndex !== -1) {
        quizzes[quizIndex].progress = 0;
        renderQuizCards();
      }
    }
  }
}

// Adiciona um novo quiz
function addNewQuiz() {
  // Este é um exemplo simplificado - em um sistema real, você teria um formulário
  // para inserir os detalhes do novo quiz
  const newQuizName = prompt("Digite o nome do novo quiz:");
  if (newQuizName) {
    alert(
      `Quiz "${newQuizName}" seria adicionado aqui (implementação futura).`
    );
    // Aqui você adicionaria lógica para realmente criar um novo quiz
  }
}

// Sincroniza os dados de progresso do quiz com o localStorage
function syncQuizData() {
  // Para cada quiz, verifique se há dados salvos no localStorage
  quizzes.forEach((quiz, index) => {
    if (quiz.id === "wan-quiz") {
      const savedData = localStorage.getItem("wanQuizData");
      if (savedData) {
        const data = JSON.parse(savedData);
        // Calculando o progresso com base nas questões completadas
        if (data.completedQuestions && quiz.questionsCount) {
          const progress = Math.round(
            (data.completedQuestions.length / quiz.questionsCount) * 100
          );
          quizzes[index].progress = progress;
        }
        // Atualizando a data de último acesso
        quizzes[index].lastAccess = new Date().toISOString().split("T")[0];
      }
    }
    // Adicione lógica semelhante para outros quizzes quando eles forem criados
  });
  renderQuizCards();
}

// Inicializa o dashboard
document.addEventListener("DOMContentLoaded", () => {
  syncQuizData();
  renderQuizCards();

  // Event listener para o botão de adicionar novo quiz
  document.getElementById("add-quiz-btn").addEventListener("click", addNewQuiz);

  // Event listener para os botões de ordenação
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
