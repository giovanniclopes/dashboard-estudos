const questions = [
  {
    id: 1,
    category: "Conceitos Fundamentais",
    question: "O que significa a sigla PHP?",
    answer: "b",
    options: {
      a: "Personal Hypertext Processor",
      b: "PHP: Hypertext Preprocessor",
      c: "Preprocessed Home Pages",
      d: "Public Home Programming",
    },
    explanation:
      "PHP originalmente significava 'Personal Home Page', mas atualmente é um acrônimo recursivo que significa 'PHP: Hypertext Preprocessor'. É uma linguagem de script open source de uso geral, muito utilizada para desenvolvimento web.",
  },
  {
    id: 2,
    category: "Conceitos Fundamentais",
    question: "Quem criou a linguagem PHP?",
    answer: "a",
    options: {
      a: "Rasmus Lerdorf",
      b: "Tim Berners-Lee",
      c: "Brendan Eich",
      d: "Guido van Rossum",
    },
    explanation:
      "O PHP foi criado por Rasmus Lerdorf em 1994. Inicialmente, a ideia era apenas deixar o HTML dinâmico, sem a pretensão de se tornar a linguagem de programação completa que é hoje.",
  },
  {
    id: 3,
    category: "Conceitos Fundamentais",
    question:
      "Quais tags são utilizadas para delimitar o código PHP em um documento HTML?",
    answer: "a",
    options: {
      a: "&lt;?php ?&gt;",
      b: "&lt;php&gt; &lt;/php&gt;",
      c: "&lt;script_php&gt; &lt;/script_php&gt;",
      d: "&lt;!-- php --&gt;",
    },
    explanation:
      "As tags <?php e ?> são utilizadas para delimitar o código PHP em um documento HTML. Elas permitem a transição entre o 'modo PHP' e o HTML.",
  },
  {
    id: 4,
    category: "Sintaxe Básica",
    question: "Como é feita a declaração de uma variável em PHP?",
    answer: "b",
    options: {
      a: "var $nome = 'João';",
      b: "$nome = 'João';",
      c: "nome = 'João';",
      d: "let nome = 'João';",
    },
    explanation:
      "Em PHP, as variáveis são declaradas com o símbolo de cifrão ($) seguido do nome da variável. Por exemplo: $nome = 'João'.",
  },
  {
    id: 5,
    category: "Conceitos Fundamentais",
    question: "Qual servidor web NÃO é comumente usado para executar PHP?",
    answer: "d",
    options: {
      a: "Apache",
      b: "Nginx",
      c: "IIS",
      d: "Tomcat",
    },
    explanation:
      "Embora o Tomcat possa ser configurado para executar PHP, ele é primariamente um servidor de aplicações Java. Apache, Nginx e IIS são os servidores web mais comumente usados para executar PHP.",
  },
  {
    id: 6,
    category: "Sintaxe Básica",
    question:
      "Qual é o escopo de uma variável declarada dentro de uma função PHP?",
    answer: "c",
    options: {
      a: "Global - a variável fica disponível em todo o script",
      b: "Static - a variável mantém seu valor entre chamadas da função",
      c: "Local - a variável só existe dentro da função",
      d: "External - a variável pode ser acessada por outras funções",
    },
    explanation:
      "Em PHP, quando uma variável é declarada dentro de uma função, ela tem escopo local, ou seja, só é acessível dentro da própria função. Para acessá-la fora da função, seria necessário retornar seu valor ou usar a palavra-chave 'global'.",
  },
  {
    id: 7,
    category: "Formulários",
    question:
      "Quais são os dois métodos mais comuns utilizados em formulários HTML?",
    answer: "a",
    options: {
      a: "GET e POST",
      b: "PUT e DELETE",
      c: "SEND e RECEIVE",
      d: "READ e WRITE",
    },
    explanation:
      "GET e POST são os dois métodos HTTP mais comuns usados em formulários HTML. GET envia os dados pela URL, visíveis na barra de endereços, e tem limitações de tamanho. POST envia os dados no corpo da requisição, não exibe na URL, e é mais adequado para dados sensíveis ou formulários grandes.",
  },
  {
    id: 8,
    category: "Sintaxe Básica",
    question: "Qual é a função do comando return em uma função PHP?",
    answer: "c",
    options: {
      a: "Encerrar a execução do script",
      b: "Imprimir um valor na tela",
      c: "Retornar um valor para quem chamou a função",
      d: "Criar uma nova variável",
    },
    explanation:
      "O comando return é usado para encerrar a execução de uma função e retornar um valor específico para o código que chamou a função. Este valor pode ser de qualquer tipo, incluindo arrays e objetos.",
  },
  {
    id: 9,
    category: "Funções",
    question: "Como se define corretamente uma função em PHP?",
    answer: "a",
    options: {
      a: "function nomeDaFuncao() { // código }",
      b: "def nomeDaFuncao() { // código }",
      c: "function = nomeDaFuncao() { // código }",
      d: "func nomeDaFuncao() { // código }",
    },
    explanation:
      "Em PHP, uma função é definida usando a palavra-chave 'function', seguida pelo nome da função, parênteses (que podem conter parâmetros) e um bloco de código entre chaves.",
  },
  {
    id: 10,
    category: "Funções",
    question: "O que é uma função recursiva em PHP?",
    answer: "b",
    options: {
      a: "Uma função que não retorna nenhum valor",
      b: "Uma função que chama a si mesma",
      c: "Uma função que só pode ser chamada uma vez",
      d: "Uma função definida dentro de outra função",
    },
    explanation:
      "Uma função recursiva é aquela que chama a si mesma durante sua execução. Isso é útil para resolver problemas que podem ser divididos em casos menores do mesmo problema, como o cálculo do fatorial ou números de Fibonacci.",
  },
  {
    id: 11,
    category: "Funções",
    question:
      "Qual a diferença entre passar um parâmetro por valor e por referência em PHP?",
    answer: "d",
    options: {
      a: "Não há diferença, são apenas nomenclaturas diferentes",
      b: "Passagem por valor utiliza mais memória, enquanto passagem por referência é mais rápida",
      c: "Passagem por valor só funciona com tipos primitivos, enquanto passagem por referência funciona com qualquer tipo",
      d: "Na passagem por valor, a função recebe uma cópia do valor; na passagem por referência, a função pode modificar a variável original",
    },
    explanation:
      "Quando um parâmetro é passado por valor, a função recebe uma cópia do valor original, e qualquer modificação feita dentro da função não afeta a variável original. Quando passado por referência (usando o símbolo &), a função pode modificar diretamente a variável original.",
  },
  {
    id: 12,
    category: "Operadores",
    question:
      "Qual operador é usado para verificar se duas variáveis são idênticas em valor e tipo em PHP?",
    answer: "c",
    options: {
      a: "==",
      b: "=",
      c: "===",
      d: "!=",
    },
    explanation:
      "O operador === (três sinais de igual) verifica se duas variáveis são idênticas, ou seja, se possuem o mesmo valor e são do mesmo tipo. Por exemplo, 5 === '5' retornará false, enquanto 5 === 5 retornará true.",
  },
  {
    id: 13,
    category: "Funções",
    question: "Qual é a finalidade do escopo de variáveis em funções PHP?",
    answer: "b",
    options: {
      a: "Permitir que todas as variáveis sejam acessadas em qualquer parte do código",
      b: "Limitar a visibilidade das variáveis dentro da função onde foram declaradas",
      c: "Permitir apenas a utilização de variáveis globais em funções",
      d: "Eliminar a necessidade de parâmetros em funções",
    },
    explanation:
      "O escopo de variáveis em funções PHP determina onde uma variável pode ser acessada. As variáveis declaradas dentro de uma função têm escopo local e só podem ser acessadas dentro dessa função. Isso ajuda a evitar conflitos de nomes e torna o código mais modular e seguro.",
  },
  {
    id: 14,
    category: "Funções",
    question:
      "Como podemos acessar variáveis externas dentro de uma função PHP?",
    answer: "c",
    options: {
      a: "Não é possível acessar variáveis externas em funções PHP",
      b: "Declarando a função como 'public'",
      c: "Usando a palavra-chave 'global' ou o array superglobal $GLOBALS",
      d: "Todas as variáveis são automaticamente acessíveis dentro de funções",
    },
    explanation:
      "Em PHP, para acessar variáveis definidas fora de uma função, podemos usar a palavra-chave 'global' antes do nome da variável dentro da função ou acessá-la através do array superglobal $GLOBALS['nome_da_variavel']. Isso permite que a função manipule variáveis que estão em um escopo externo.",
  },
  {
    id: 15,
    category: "Arrays",
    question: "Como se define um array associativo em PHP?",
    answer: "b",
    options: {
      a: "array[chave] = valor;",
      b: "$array = array('chave' => 'valor');",
      c: "Array.push({chave: valor});",
      d: "new Array('chave', 'valor');",
    },
    explanation:
      "Em PHP, um array associativo é um array onde cada chave é uma string (ou um valor não-inteiro) associada a um valor. A sintaxe utiliza o operador => para mapear chaves a valores.",
  },
  {
    id: 16,
    category: "Arrays",
    question:
      "Qual função PHP é usada para juntar elementos de um array em uma única string?",
    answer: "c",
    options: {
      a: "join_array()",
      b: "concat()",
      c: "implode()",
      d: "merge()",
    },
    explanation:
      "A função implode() é usada para juntar elementos de um array em uma única string. Ela recebe dois parâmetros: o delimitador (string que será inserida entre os elementos) e o array que será juntado.",
  },
  {
    id: 17,
    category: "Estruturas de Controle",
    question:
      "Qual estrutura de controle deve ser usada quando precisamos executar um bloco de código enquanto uma condição for verdadeira?",
    answer: "a",
    options: {
      a: "while",
      b: "if",
      c: "for",
      d: "switch",
    },
    explanation:
      "A estrutura 'while' executa um bloco de código enquanto a condição especificada for verdadeira. É útil quando não sabemos antecipadamente quantas iterações serão necessárias.",
  },
  {
    id: 18,
    category: "Estruturas de Controle",
    question: "Qual é a diferença entre while e do-while em PHP?",
    answer: "c",
    options: {
      a: "Não há diferença, são apenas formas diferentes de escrever o mesmo código",
      b: "while executa o bloco de código pelo menos duas vezes, enquanto do-while executa pelo menos uma vez",
      c: "while verifica a condição antes de executar o bloco, enquanto do-while executa o bloco pelo menos uma vez",
      d: "do-while só pode ser usado com números, enquanto while pode ser usado com qualquer condição",
    },
    explanation:
      "A principal diferença entre while e do-while é que o while verifica a condição antes de executar o bloco de código, então se a condição for falsa desde o início, o bloco não será executado. Já o do-while executa o bloco primeiro e depois verifica a condição, garantindo que o bloco seja executado pelo menos uma vez.",
  },
  {
    id: 19,
    category: "Estruturas de Controle",
    question: "O que é uma instrução 'break' em PHP?",
    answer: "b",
    options: {
      a: "Uma instrução que inicia um novo loop",
      b: "Uma instrução que encerra a execução de um loop ou switch",
      c: "Uma instrução que define o término de um arquivo PHP",
      d: "Uma instrução que divide uma string em partes",
    },
    explanation:
      "A instrução 'break' é usada para encerrar a execução de uma estrutura de controle como for, foreach, while, do-while ou switch. Quando encontrado, o PHP encerra imediatamente a execução da estrutura atual.",
  },
  {
    id: 20,
    category: "Estruturas de Controle",
    question:
      "Para percorrer cada elemento de um array em PHP, qual estrutura de controle é mais adequada?",
    answer: "d",
    options: {
      a: "if-else",
      b: "switch",
      c: "while",
      d: "foreach",
    },
    explanation:
      "A estrutura foreach é especialmente projetada para percorrer arrays em PHP. Ela itera sobre cada elemento do array, atribuindo o valor atual a uma variável em cada iteração, sem necessidade de controlar índices manualmente.",
  },
  {
    id: 21,
    category: "Formulários",
    question:
      "Qual método HTTP é mais adequado para enviar dados sensíveis (como senhas) em um formulário?",
    answer: "b",
    options: {
      a: "GET",
      b: "POST",
      c: "REQUEST",
      d: "SEND",
    },
    explanation:
      "O método POST é mais adequado para enviar dados sensíveis, pois os dados não aparecem na URL. Além disso, o método POST não tem limitações de tamanho e pode ser usado para enviar grandes quantidades de dados.",
  },
  {
    id: 22,
    category: "Formulários",
    question:
      "Como acessar os dados enviados por um formulário usando o método POST no PHP?",
    answer: "a",
    options: {
      a: "$_POST['campo']",
      b: "$POST['campo']",
      c: "REQUEST.POST['campo']",
      d: "$GET['campo']",
    },
    explanation:
      "No PHP, a variável superglobal $_POST contém todos os dados enviados por um formulário usando o método POST. Para acessar um campo específico, usa-se $_POST['nome_do_campo'].",
  },
  {
    id: 23,
    category: "Formulários",
    question:
      "Qual tag HTML é usada para criar um campo de entrada em um formulário?",
    answer: "c",
    options: {
      a: "<field>",
      b: "<entry>",
      c: "<input>",
      d: "<textbox>",
    },
    explanation:
      "A tag <input> é usada para criar campos de entrada em formulários HTML. Ela pode representar diferentes tipos de controles de entrada, dependendo do atributo 'type', como text, password, checkbox, radio, etc.",
  },
  {
    id: 24,
    category: "Banco de Dados",
    question:
      "Qual extensão PHP é comumente usada para conectar-se a bancos de dados MySQL?",
    answer: "a",
    options: {
      a: "mysqli",
      b: "sqlite",
      c: "oracle",
      d: "mongodb",
    },
    explanation:
      "A extensão mysqli (MySQL Improved) é uma melhoria da antiga extensão mysql e é comumente usada para se conectar e interagir com bancos de dados MySQL em PHP. Também existe a PDO (PHP Data Objects), que é uma interface para acessar diversos bancos de dados.",
  },
  {
    id: 25,
    category: "Segurança",
    question:
      "Qual técnica é recomendada para armazenar senhas de usuários em PHP?",
    answer: "c",
    options: {
      a: "Armazenar em texto puro para facilitar a recuperação",
      b: "Usar criptografia reversível como base64_encode()",
      c: "Usar funções de hash seguras como password_hash()",
      d: "Armazenar apenas os primeiros 4 caracteres por segurança",
    },
    explanation:
      "É altamente recomendado usar a função password_hash() para gerar um hash seguro de senhas. Esta função implementa o algoritmo bcrypt e adiciona automaticamente um 'salt' aleatório, tornando as senhas armazenadas seguras contra ataques de força bruta e tabelas rainbow.",
  },
  {
    id: 26,
    category: "Conceitos Avançados",
    question: "O que é um namespace em PHP?",
    answer: "d",
    options: {
      a: "Um tipo de variável para armazenar múltiplos valores",
      b: "Um servidor dedicado para aplicações PHP",
      c: "Um recurso para limitar o uso de memória das aplicações",
      d: "Um meio de encapsular itens como classes, funções e constantes",
    },
    explanation:
      "Em PHP, namespaces são uma forma de encapsular itens relacionados, como classes, interfaces, funções e constantes, evitando conflitos de nomes. Eles foram introduzidos no PHP 5.3 e são especialmente úteis em projetos grandes ou quando se utiliza bibliotecas de terceiros.",
  },
  {
    id: 27,
    category: "Conceitos Avançados",
    question: "O que é injeção de dependência em PHP?",
    answer: "a",
    options: {
      a: "Uma técnica onde as dependências de uma classe são injetadas ao invés de criadas internamente",
      b: "Um método para injetar código malicioso em uma aplicação",
      c: "Uma função que adiciona automaticamente variáveis globais em uma classe",
      d: "Um recurso para importar extensões PHP automaticamente",
    },
    explanation:
      "Injeção de dependência é um padrão de design onde as dependências de um objeto são injetadas através do construtor, método setter ou propriedade, ao invés de serem criadas dentro do objeto. Isso promove uma maior modularidade, testabilidade e desacoplamento de código.",
  },
  {
    id: 28,
    category: "Performance",
    question:
      "Qual é a principal diferença entre include() e require() em PHP?",
    answer: "b",
    options: {
      a: "include() é mais rápido que require()",
      b: "require() gera um erro fatal se o arquivo não for encontrado, include() apenas emite um aviso",
      c: "include() funciona apenas com arquivos PHP, require() pode incluir qualquer tipo de arquivo",
      d: "require() carrega o arquivo apenas uma vez, include() carrega todas as vezes que é chamado",
    },
    explanation:
      "A principal diferença entre include() e require() é como eles lidam com falhas. Quando um arquivo não é encontrado, require() gera um erro fatal (E_COMPILE_ERROR) e interrompe o script, enquanto include() apenas emite um aviso (E_WARNING) e o script continua executando.",
  },
  {
    id: 29,
    category: "Conceitos Avançados",
    question: "O que são Traits em PHP?",
    answer: "c",
    options: {
      a: "Variáveis globais disponíveis em todo o escopo da aplicação",
      b: "Funções nativas do PHP que manipulam strings",
      c: "Mecanismos de reutilização de código em classes",
      d: "Métodos especiais para validação de formulários",
    },
    explanation:
      "Traits são um mecanismo de reutilização de código em linguagens de herança única como PHP. Um Trait destina-se a reduzir algumas limitações de herança permitindo que desenvolvedores reutilizem conjuntos de métodos livremente em várias classes independentes.",
  },
  {
    id: 30,
    category: "Formulários",
    question:
      "Qual atributo da tag <form> especifica para onde os dados do formulário serão enviados?",
    answer: "a",
    options: {
      a: "action",
      b: "method",
      c: "target",
      d: "destination",
    },
    explanation:
      "O atributo 'action' da tag <form> especifica o URL para onde os dados do formulário serão enviados quando o usuário submeter o formulário. Por exemplo: <form action='processa.php'>.",
  },
];
