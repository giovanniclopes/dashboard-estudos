const urlParams = new URLSearchParams(window.location.search);
const quizId = urlParams.get("id");

if (!quizId) {
  loadDashboard();
} else {
  loadQuiz(quizId);
}

function loadDashboard() {
  document.title = "Dashboard de Estudos";

  const headerData = {
    title: "Dashboard de Estudos",
    subtitle: "Organize seus estudos para diferentes matérias",
  };

  Components.renderInto(
    "header",
    document.getElementById("header-container"),
    headerData
  );

  const container = document.createElement("div");
  container.className = "quiz-cards";
  container.id = "quiz-cards-container";

  document.querySelector(".container").appendChild(container);

  allQuizzes.forEach((quiz) => {
    const quizCardHTML = Components.quizCard(quiz);
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = quizCardHTML;
    container.appendChild(tempDiv.firstElementChild);
  });

  document.querySelectorAll(".reset-quiz-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const quizId = this.getAttribute("data-id");
      resetQuizProgress(quizId);
    });
  });
}

function loadQuiz(quizId) {
  if (!quizConfig[quizId]) {
    alert("Quiz não encontrado!");
    window.location.href = "index.html";
    return;
  }

  const quiz = quizConfig[quizId];
  document.title = `Quiz - ${quiz.title}`;
  Components.renderInto("header", document.getElementById("header-container"), {
    title: quiz.title,
    subtitle: quiz.subtitle,
    showBackButton: true,
  });

  Components.renderInto("stats", document.getElementById("stats-container"), {
    totalQuestions: 0,
  });

  Components.renderInto(
    "controls",
    document.getElementById("controls-container")
  );
  Components.renderInto(
    "explanationModal",
    document.getElementById("modal-container")
  );
  window.currentQuizId = quiz.id;

  const scriptElement = document.createElement("script");
  scriptElement.src = quiz.questionsFile;

  scriptElement.onload = function () {
    if (typeof questions !== "undefined") {
      setupQuiz(quiz, questions);
    } else {
      console.error(
        'Formato de arquivo de questões não reconhecido. O arquivo deve definir uma variável "questions".'
      );
      setupQuiz(quiz, []);
    }
  };

  scriptElement.onerror = function () {
    console.error(
      "Erro ao carregar o arquivo de questões:",
      quiz.questionsFile
    );
    setupQuiz(quiz, []);
  };

  document.body.appendChild(scriptElement);
}

function setupQuiz(quiz, questions) {
  document.getElementById("total-count").textContent = questions.length;

  loadSavedData(quiz, questions);

  setupCategoryFilter(questions);
  renderQuestions(questions);

  setupEventListeners(quiz, questions);
}

function loadSavedData(quiz, questions) {
  const savedData = localStorage.getItem(quiz.localStorageKey);
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

function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
}

function resetQuizProgress(quizId) {
  if (
    confirm(
      `Tem certeza que deseja reiniciar o progresso do quiz ${quizId}? Esta ação não pode ser desfeita.`
    )
  ) {
    const quiz = quizConfig[quizId];
    if (quiz) {
      localStorage.removeItem(quiz.localStorageKey);
      alert("Progresso reiniciado com sucesso!");

      const quizCard = document.querySelector(
        `.quiz-card[data-id="${quizId}"]`
      );
      if (quizCard) {
        const progressBar = quizCard.querySelector(".progress-bar");
        const progressText = quizCard.querySelector(".progress-text");

        if (progressBar) progressBar.style.width = "0%";
        if (progressText) progressText.textContent = "0% completo";
      }
    }
  }
}

let currentMode = "study";
let userScore = 100;
let attemptCounts = {};
let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

function setupCategoryFilter(questions) {
  const categoryFilter = document.getElementById("category-filter");

  while (categoryFilter.options.length > 1) {
    categoryFilter.remove(1);
  }

  const categories = new Set();

  questions.forEach((question) => {
    if (question.hasOwnProperty("category")) {
      categories.add(question.category);
    } else {
      categories.add("Geral");
    }
  });

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  categoryFilter.addEventListener("change", function () {
    filterQuestionsByCategory(questions);
  });
}

function filterQuestionsByCategory(questions) {
  const selectedCategory = document.getElementById("category-filter").value;
  const allQuestions = document.querySelectorAll(".question");

  allQuestions.forEach((questionElement) => {
    const questionId = parseInt(questionElement.dataset.id);
    const question = questions.find((q) => q.id === questionId);

    const isOldFormat = question.hasOwnProperty("category");
    const questionCategory = isOldFormat ? question.category : "Geral";

    if (selectedCategory === "" || questionCategory === selectedCategory) {
      questionElement.style.display = "block";
    } else {
      questionElement.style.display = "none";
    }
  });
}

function renderQuestions(questions) {
  const questionsContainer = document.getElementById("questions-container");
  questionsContainer.innerHTML = "";

  questions.forEach((question) => {
    const questionElement = document.createElement("div");
    questionElement.className = question.completed
      ? "question completed"
      : "question";
    questionElement.dataset.id = question.id;

    const isOldFormat = question.hasOwnProperty("question");

    if (isOldFormat) {
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
      questionElement.innerHTML = `
        <div class="question-card">
          <div class="question-number">${question.id}</div>
          <div class="question-category">Geral</div>
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

  document.querySelectorAll(".question button").forEach((button) => {
    button.addEventListener("click", function (e) {
      checkAnswer(e, questions);
    });
  });

  document.querySelectorAll(".question input").forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const button = input.nextElementSibling;
        button.click();
      }
    });
  });

  updateStats(questions);
}

function setupEventListeners(quiz, questions) {
  document
    .getElementById("theme-toggle")
    .addEventListener("click", function () {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      if (currentTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
        this.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        this.innerHTML = '<i class="fas fa-sun"></i>';
      }
      saveData(quiz, questions);
    });

  document.getElementById("start-timer").addEventListener("click", startTimer);
  const timerContainer = document.getElementById("timer-container");
  if (!document.getElementById("reset-timer")) {
    const resetButton = document.createElement("button");
    resetButton.id = "reset-timer";
    resetButton.className = "timer-button";
    resetButton.textContent = "Zerar";
    resetButton.addEventListener("click", resetTimer);
    timerContainer.appendChild(resetButton);
  }

  document
    .getElementById("mode-selector")
    .addEventListener("change", function () {
      setMode(this.value);
    });

  document
    .getElementById("shuffle-questions")
    .addEventListener("click", function () {
      for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
      }
      renderQuestions(questions);
    });

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
        saveData(quiz, questions);
        renderQuestions(questions);
        updateStats(questions);
      }
    });

  document.getElementById("modal-close").addEventListener("click", () => {
    document.getElementById("modal-overlay").classList.remove("show");
  });

  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) {
      document.getElementById("modal-overlay").classList.remove("show");
    }
  });
}

function checkAnswer(e, questions) {
  const questionElement = e.target.closest(".question");
  const questionId = parseInt(questionElement.dataset.id);
  const inputElement = questionElement.querySelector("input");
  const feedbackElement = questionElement.querySelector(".feedback");

  const question = questions.find((q) => q.id === questionId);
  const userAnswer = inputElement.value.toLowerCase().trim();

  const isOldFormat = question.hasOwnProperty("question");

  let isCorrect = false;

  if (isOldFormat) {
    isCorrect = userAnswer === question.answer;
  } else {
    const letterAnswers = ["a", "b", "c", "d", "e"];
    const correctAnswer = letterAnswers[question.resposta];
    isCorrect = userAnswer === correctAnswer;
  }

  if (isCorrect) {
    question.completed = true;
    questionElement.classList.add("completed");
    inputElement.disabled = true;
    e.target.disabled = true;
    feedbackElement.textContent = "";

    updateStats(questions);

    showExplanationModal(question);
  } else {
    feedbackElement.textContent = "Resposta incorreta. Tente novamente.";
    inputElement.value = "";
    inputElement.focus();
  }
}

function showExplanationModal(question) {
  const isOldFormat = question.hasOwnProperty("question");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");

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
  document.getElementById("modal-overlay").classList.add("show");
}

function updateStats(questions) {
  const completedQuestions = questions.filter((q) => q.completed).length;
  const totalQuestions = questions.length;
  const percentage = Math.round((completedQuestions / totalQuestions) * 100);

  document.getElementById("completed-count").textContent = completedQuestions;
  document.getElementById(
    "completion-percentage"
  ).textContent = `${percentage}%`;
  document.getElementById("progress-bar").style.width = `${percentage}%`;

  if (completedQuestions === totalQuestions && totalQuestions > 0) {
    celebrateCompletion();
  }
}

function celebrateCompletion() {
  if (
    window.lastConfettiTime &&
    new Date().getTime() - window.lastConfettiTime < 3000
  ) {
    return;
  }

  window.lastConfettiTime = new Date().getTime();

  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
}

function saveData(quiz, questions) {
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
  localStorage.setItem(quiz.localStorageKey, JSON.stringify(data));
}

function updateThemeButton() {
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
}

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

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  document.getElementById("start-timer").textContent = "Retomar";
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 0;
  document.getElementById("timer").textContent = "00:00";
  document.getElementById("start-timer").textContent = "Iniciar";
}

function setMode(mode) {
  currentMode = mode;

  const timerContainer = document.getElementById("timer-container");

  if (mode === "test") {
    timerContainer.style.display = "flex";
    resetTimer();
    startTimer();
  } else {
    if (mode === "study") {
      timerContainer.style.display = "flex";
      resetTimer();
    } else {
      timerContainer.style.display = "none";
      pauseTimer();
    }
  }
}

window.addEventListener("beforeunload", function () {
  if (quizId) {
    const quiz = quizConfig[quizId];
    if (quiz && window.questions) {
      saveData(quiz, window.questions);
    }
  }
});
