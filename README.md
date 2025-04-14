# Dashboard de Estudos

Uma aplicação web interativa para ajudar estudantes a aprender e testar conhecimentos em diferentes disciplinas através de quizzes personalizados.
O projeto é ideal para quem deseja revisar conteúdos de forma dinâmica e divertida, com recursos que facilitam o aprendizado e a retenção de informações.

## ✨ Funcionalidades

- **Dashboard Principal**: Visualize todos os seus quizzes, progresso e estatísticas em um único lugar.
- **Múltiplos Quizzes**: Atualmente inclui quizzes sobre:
  - Redes WAN
  - Engenharia de Software
  - Programação Orientada a Objetos
- **Modos de Estudo**:
  - **Modo Estudo**: Responda questões no seu próprio ritmo com timer opcional.
  - **Modo Teste**: Simule uma experiência de prova com cronômetro ativo.
- **Recursos Avançados**:
  - Cronômetro integrado para controlar o tempo de estudo
  - Filtros por categoria de questões
  - Embaralhamento de questões
  - Explicações detalhadas para cada resposta
  - Acompanhamento de progresso e pontuação
  - Tema claro/escuro
- **Armazenamento Local**: Seu progresso é automaticamente salvo no navegador.

## 🚀 Como Usar

1. Abra o arquivo `index.html` em seu navegador para acessar o Dashboard principal.
2. Escolha um quiz clicando em "Continuar".
3. Selecione o modo de estudo (Estudo ou Teste) no painel de controle.
4. Responda as questões digitando a letra da alternativa correta (a, b, c, d).
5. Veja explicações detalhadas para cada resposta correta.
6. Acompanhe seu progresso através das estatísticas no topo da página.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS para temas)
- JavaScript (Vanilla)
- Armazenamento Local (localStorage)
- FontAwesome para ícones

## 📁 Estrutura do Projeto

```
dashboard-estudos/
├── components.js         # Sistema de componentes reutilizáveis
├── dashboard-style.css   # Estilos para o dashboard principal
├── dashboard.js          # Lógica do dashboard principal
├── index.html            # Página inicial com dashboard
├── quiz.html             # Template de página para quizzes
├── quizConfig.js         # Configuração dos quizzes disponíveis
├── quizLoader.js         # Carregador dinâmico de quizzes
├── script.js             # Scripts principais da aplicação
├── styles.css            # Estilos globais da aplicação
├── wan-quiz-page.css     # Estilos específicos para o quiz de WAN
├── wan-quiz-page.html    # Página específica do quiz de WAN
└── questions/            # Diretório com os bancos de questões
    ├── object-oriented-programming.js
    ├── software-engineering-questions.js
    └── wan-questions.js
```

## 🔧 Como Adicionar um Novo Quiz

1. Crie um novo arquivo de questões em formato JavaScript na pasta `questions/`.
2. Adicione a configuração do novo quiz no arquivo `quizConfig.js`.
3. O sistema detectará automaticamente o novo quiz e o adicionará ao dashboard.

Formato do arquivo de questões:

```javascript
const questions = [
  {
    id: 1,
    category: "Nome da Categoria",
    question: "Texto da questão aqui?",
    answer: "a",
    options: {
      a: "Alternativa A",
      b: "Alternativa B",
      c: "Alternativa C",
      d: "Alternativa D",
    },
    explanation: "Explicação detalhada da resposta correta aqui.",
  },
  // Adicione mais questões seguindo o mesmo formato
];
```

## 📊 Sistema de Pontuação

- Cada quiz começa com 100 pontos.
- A cada resposta incorreta, são deduzidos pontos.
- A pontuação é salva localmente e pode ser reiniciada a qualquer momento.

## 📝 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 👨‍💻 Autor

Criado por [Giovanni Lopes](https://github.com/giovanniclopes)

---

Feito com ❤️ para ajudar estudantes a dominarem seus estudos.
