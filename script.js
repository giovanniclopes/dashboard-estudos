let currentMode = "study";
let userScore = 100; 
let attemptCounts = {};
let timerInterval;
let timerSeconds = 0;
let timerRunning = false;

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

function setupCategoryFilter() {
  const categoryFilter = document.getElementById("category-filter");

  while (categoryFilter.options.length > 1) {
    categoryFilter.remove(1);
  }

  const categories = new Set();

  questions.forEach((question) => {
    if (question.hasOwnProperty("category")) {
      categories.add(question.category);
    } else {
      categories.add("Redes WAN");
    }
  });

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  categoryFilter.addEventListener("change", filterQuestionsByCategory);
}

function filterQuestionsByCategory() {
  const selectedCategory = document.getElementById("category-filter").value;
  const allQuestions = document.querySelectorAll(".question");

  allQuestions.forEach((questionElement) => {
    const questionId = parseInt(questionElement.dataset.id);
    const question = questions.find((q) => q.id === questionId);

    const isOldFormat = question.hasOwnProperty("category");
    const questionCategory = isOldFormat ? question.category : "Redes WAN";

    if (selectedCategory === "" || questionCategory === selectedCategory) {
      questionElement.style.display = "block";
    } else {
      questionElement.style.display = "none";
    }
  });
}

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

document.addEventListener("DOMContentLoaded", function () {
  setMode("study");
  loadSavedData();
});

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

document
  .getElementById("shuffle-questions")
  .addEventListener("click", function () {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    renderQuestions();
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
      saveData();
      renderQuestions();
      updateStats();
    }
  });

const questions = [
  
];

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

totalCountElement.textContent = questions.length;

function renderQuestions() {
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

  document.querySelectorAll(".question button").forEach((button) => {
    button.addEventListener("click", checkAnswer);
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

  updateStats();
  setupCategoryFilter();
}

function checkAnswer(e) {
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

    updateStats();

    showExplanationModal(question);
  } else {
    feedbackElement.textContent = "Resposta incorreta. Tente novamente.";
    inputElement.value = "";
    inputElement.focus();
  }
}

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

modalClose.addEventListener("click", () => {
  modalOverlay.classList.remove("show");
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("show");
  }
});

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

renderQuestions();
