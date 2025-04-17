const Components = {
  _cache: {},

  register: function (name, renderFunction) {
    this[name] = renderFunction;
    return this;
  },

  renderInto: function (componentName, element, data) {
    if (!this[componentName]) {
      console.error(`Componente "${componentName}" não encontrado`);
      return;
    }

    const html = this[componentName](data);
    element.innerHTML = html;
    return element;
  },
};

Components.register("header", (data) => {
  return `
    <div class="container">
      <div class="header-top">
        ${
          data.showBackButton
            ? '<a href="index.html" class="back-button icon-button" title="Voltar ao Dashboard"><i class="fas fa-arrow-left"></i></a>'
            : ""
        }
        <div class="header-content">
          <h1>${data.title}</h1>
          <p class="subtitle">${data.subtitle}</p>
        </div>
      </div>
      <div class="header-controls">
        <button id="theme-toggle" class="icon-button" title="Alternar tema">
          <i class="fas fa-moon"></i>
        </button>
        <button id="shuffle-questions" class="icon-button" title="Embaralhar questões">
          <i class="fas fa-random"></i>
        </button>
        <button id="reset-progress" class="icon-button" title="Reiniciar progresso">
          <i class="fas fa-redo-alt"></i>
        </button>
      </div>
    </div>
  `;
});

Components.register("stats", (data) => {
  return `
    <div class="stats">
      <div class="stat-box">
        <div class="stat-number" id="completed-count">0</div>
        <div class="stat-label">Completados</div>
      </div>
      <div class="stat-box">
        <div class="stat-number" id="total-count">${
          data.totalQuestions || 0
        }</div>
        <div class="stat-label">Total</div>
      </div>
      <div class="stat-box">
        <div class="stat-number" id="completion-percentage">0%</div>
        <div class="stat-label">Concluído</div>
      </div>
      <div class="stat-box">
        <div class="stat-number" id="score">100</div>
        <div class="stat-label">Pontuação</div>
      </div>
    </div>
  `;
});

Components.register("controls", () => {
  return `
    <div class="controls-container">
      <div class="controls-responsive-wrapper">
        <div class="filter-box">
          <label for="category-filter">Filtrar por categoria:</label>
          <select id="category-filter">
            <option value="">Todas as categorias</option>
            <!-- As categorias serão adicionadas pelo JavaScript -->
          </select>
        </div>

        <div class="mode-box">
          <label for="mode-selector">Modo de estudo:</label>
          <select id="mode-selector">
            <option value="study">Modo Estudo</option>
            <option value="test">Modo Teste</option>
            <option value="review">Modo Revisão</option>
          </select>
        </div>

        <div class="timer-container" id="timer-container">
          <span id="timer">00:00</span>
          <button id="start-timer" class="timer-button">Iniciar</button>
        </div>
      </div>
    </div>
    
    <div class="progress-bar">
      <div class="progress" id="progress-bar"></div>
    </div>
  `;
});

Components.register("explanationModal", () => {
  return `
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal">
        <button class="modal-close" id="modal-close">&times;</button>
        <h3 class="modal-title" id="modal-title">Resposta Correta!</h3>
        <div class="modal-body" id="modal-body">
          <!-- Conteúdo da modal será adicionado aqui pelo JavaScript -->
        </div>
      </div>
    </div>
  `;
});

Components.register("quizCard", (quiz) => {
  return `
    <div class="quiz-card" data-id="${quiz.id}">
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
          <a href="quiz.html?id=${
            quiz.id
          }" class="btn btn-primary">Continuar</a>
          <button class="btn btn-secondary reset-quiz-btn" data-id="${
            quiz.id
          }">Reiniciar</button>
        </div>
      </div>
    </div>
  `;
});

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR");
}
