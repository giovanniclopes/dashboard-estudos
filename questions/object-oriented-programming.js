const questions = [
  {
    id: 1,
    category: "Conceitos Fundamentais",
    question: "O que é uma classe em Programação Orientada a Objetos?",
    answer: "b",
    options: {
      a: "Uma instância de um objeto em tempo de execução",
      b: "Um modelo ou template que define atributos e métodos que objetos desse tipo terão",
      c: "Um método especial para inicializar variáveis",
      d: "Um conjunto de funções relacionadas a um tipo específico de dado",
    },
    explanation:
      "Uma classe em POO é um modelo ou template que define a estrutura (atributos) e o comportamento (métodos) que os objetos criados a partir dela terão. A classe funciona como uma 'planta baixa' para a criação de objetos.",
  },
  {
    id: 2,
    category: "Conceitos Fundamentais",
    question: "O que é um objeto na Programação Orientada a Objetos?",
    answer: "c",
    options: {
      a: "Um bloco de código executável",
      b: "Uma variável local declarada dentro de um método",
      c: "Uma instância de uma classe que possui estado e comportamento",
      d: "Um tipo primitivo de dados como int ou double",
    },
    explanation:
      "Um objeto é uma instância concreta de uma classe. Quando criamos um objeto, estamos alocando memória para ele baseado no modelo definido pela classe. O objeto possui estado (valores dos atributos) e comportamento (métodos que podem ser executados).",
  },
  {
    id: 3,
    category: "Conceitos Fundamentais",
    question:
      "Qual a diferença entre um atributo de classe e uma variável local?",
    answer: "a",
    options: {
      a: "Atributos são declarados na classe e têm escopo mais amplo, enquanto variáveis locais são declaradas dentro de métodos e têm escopo limitado ao método",
      b: "Não há diferença, ambos são termos intercambiáveis em Java",
      c: "Atributos só podem ser do tipo primitivo, enquanto variáveis locais podem ser de qualquer tipo",
      d: "Atributos são sempre estáticos, enquanto variáveis locais nunca são",
    },
    explanation:
      "Atributos são declarados no escopo da classe, representam o estado dos objetos e são acessíveis por todos os métodos da classe. Variáveis locais são declaradas dentro de métodos e seu escopo é limitado ao bloco em que foram declaradas, sendo destruídas ao final da execução do método.",
  },
  {
    id: 4,
    category: "Construtores",
    question: "Qual é a função principal de um construtor em Java?",
    answer: "b",
    options: {
      a: "Destruir objetos quando não são mais necessários",
      b: "Inicializar objetos no momento de sua criação",
      c: "Definir os métodos que uma classe pode ter",
      d: "Restringir o acesso a determinados membros da classe",
    },
    explanation:
      "Um construtor é um método especial que é chamado automaticamente quando um objeto é criado usando a palavra-chave 'new'. Sua função principal é inicializar o objeto, definindo valores iniciais para seus atributos.",
  },
  {
    id: 5,
    category: "Construtores",
    question:
      "Considere o seguinte código:<pre>class Pessoa {\n    String nome;\n    int idade;\n    \n    Pessoa(String n, int i) {\n        nome = n;\n        idade = i;\n    }\n}</pre>\nSe tentarmos criar um objeto com: \n<pre>Pessoa p = new Pessoa();</pre>\nO que acontecerá?",
    answer: "c",
    options: {
      a: "O objeto será criado normalmente com valores padrão",
      b: "O objeto será criado, mas com nome e idade como null",
      c: "Erro de compilação, pois não há construtor sem parâmetros",
      d: "Um erro de execução (RuntimeException)",
    },
    explanation:
      "Quando definimos explicitamente um construtor na classe (como o construtor com parâmetros no exemplo), o Java não fornece mais o construtor padrão sem parâmetros automaticamente. Portanto, tentar criar um objeto sem passar os parâmetros exigidos resultará em erro de compilação.",
  },
  {
    id: 6,
    category: "Métodos",
    question:
      "Qual será o resultado da execução do seguinte código?\n\n<pre>public class TesteMetodo {\n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(dobrar(x));\n        System.out.println(x);\n    }\n    \n    static int dobrar(int num) {\n        return num * 2;\n    }\n}</pre>",
    answer: "a",
    options: {
      a: "10\n5",
      b: "10\n10",
      c: "5\n10",
      d: "5\n5",
    },
    explanation:
      "O método 'dobrar' retorna o dobro do valor passado como parâmetro, que é 10. Entretanto, em Java os tipos primitivos são passados por valor, não por referência, então o valor original da variável 'x' no método main permanece inalterado (5).",
  },
  {
    id: 7,
    category: "Números Aleatórios",
    question:
      "Considere o código a seguir:\n\n<pre>import java.util.Random;\n\npublic class TesteRandom {\n    public static void main(String[] args) {\n        Random r = new Random(10);\n        System.out.println(r.nextInt(5));\n        System.out.println(r.nextInt(5));\n        \n        Random r2 = new Random(10);\n        System.out.println(r2.nextInt(5));\n    }\n}</pre>\n\nQual será a saída do programa?",
    answer: "c",
    options: {
      a: "Três números diferentes entre 0 e 4",
      b: "O mesmo número repetido três vezes",
      c: "O primeiro e terceiro números serão iguais, o segundo será diferente",
      d: "Erro de compilação",
    },
    explanation:
      "Usando a mesma semente (seed) para o gerador de números pseudoaleatórios (valor 10 no exemplo), a sequência de números gerados será determinística. Assim, como r e r2 são inicializados com a mesma semente, o primeiro número gerado por r2 será igual ao primeiro número gerado por r.",
  },
  {
    id: 8,
    category: "Entrada de Dados",
    question:
      "Qual das seguintes afirmações sobre a classe Scanner em Java é FALSA?",
    answer: "d",
    options: {
      a: "A classe Scanner pode ser usada para ler entrada do teclado através de System.in",
      b: "O método nextInt() lê um valor inteiro da entrada",
      c: "O método nextLine() lê uma linha completa de texto",
      d: "A classe Scanner é thread-safe e pode ser compartilhada entre threads sem problemas",
    },
    explanation:
      "A classe Scanner não é thread-safe, ou seja, não é seguro compartilhá-la entre múltiplas threads sem sincronização adicional. Se múltiplas threads tentarem ler de um mesmo objeto Scanner simultaneamente, podem ocorrer comportamentos inesperados.",
  },
  {
    id: 9,
    category: "Strings",
    question:
      'Considere o seguinte código:\n\n<pre>public class TesteString {\n    public static void main(String[] args) {\n        String s1 = "Java";\n        String s2 = "Java";\n        String s3 = new String("Java");\n        \n        System.out.println(s1 == s2);\n        System.out.println(s1 == s3);\n        System.out.println(s1.equals(s3));\n    }\n}</pre>\n\nQual será a saída?',
    answer: "a",
    options: {
      a: "true\nfalse\ntrue",
      b: "true\ntrue\ntrue",
      c: "false\nfalse\ntrue",
      d: "false\nfalse\nfalse",
    },
    explanation:
      "Em Java, strings literais como 's1' e 's2' são internalizadas no pool de strings, referenciando o mesmo objeto (por isso s1 == s2 é true). Já s3 foi criado explicitamente com 'new', então é um objeto diferente no heap (por isso s1 == s3 é false). O método equals() compara o conteúdo das strings, que é igual (\"Java\"), portanto s1.equals(s3) é true.",
  },
  {
    id: 10,
    category: "Arrays",
    question:
      "Qual será o resultado da execução do seguinte código?\n\n<pre>public class TesteArray {\n    public static void main(String[] args) {\n        int[] numeros = new int[3];\n        numeros[0] = 10;\n        numeros[1] = 20;\n        \n        System.out.println(numeros[0] + numeros[1] + numeros[2]);\n    }\n}</pre>",
    answer: "b",
    options: {
      a: "0",
      b: "30",
      c: "Erro de compilação",
      d: "ArrayIndexOutOfBoundsException",
    },
    explanation:
      "Em Java, ao criar um array de inteiros, seus elementos são inicializados automaticamente com o valor padrão 0. Assim, numeros[2] vale 0, e a soma 10 + 20 + 0 resulta em 30.",
  },
  {
    id: 11,
    category: "TAD e Listas",
    question:
      "Considerando a implementação da classe Lista fornecida nos exemplos, o que acontece quando tentamos inserir um item na lista quando ela já atingiu sua capacidade máxima?",
    answer: "c",
    options: {
      a: "A lista é expandida automaticamente",
      b: "O item mais antigo é removido para abrir espaço",
      c: "O método inserir() retorna false",
      d: "Uma exceção é lançada",
    },
    explanation:
      "Na implementação da classe Lista fornecida, o método inserir() verifica se a quantidade atual (qtd) é menor que a capacidade máxima (tamanho_max). Se for, insere o item e retorna true; caso contrário, retorna false sem inserir.",
  },
  {
    id: 12,
    category: "Exceções",
    question:
      'Considere o método abaixo da classe Lista:\n\n<pre>String exibirInicio() throws Exception {\n    if(this.qtd >= 1)\n        return this.nomes[0];\n    else\n        throw new Exception("Lista está vazia!!");\n}</pre>\n\nQual afirmação é verdadeira sobre este método?',
    answer: "b",
    options: {
      a: "O método sempre lançará uma exceção quando chamado",
      b: "O método declara que pode lançar uma exceção do tipo Exception",
      c: "A exceção lançada é do tipo RuntimeException",
      d: "O método deve ser chamado dentro de um bloco try-catch obrigatoriamente",
    },
    explanation:
      "A cláusula 'throws Exception' na assinatura do método indica que ele pode lançar uma exceção do tipo Exception. Esta é uma exceção verificada (checked), o que significa que o código que chama este método deve tratar a exceção ou propagar a declaração 'throws'.",
  },
  {
    id: 13,
    category: "Tratamento de Exceções",
    question:
      "Qual das seguintes afirmações sobre o bloco try-catch em Java é FALSA?",
    answer: "d",
    options: {
      a: "O bloco try contém o código que pode lançar uma exceção",
      b: "O bloco catch captura e trata uma exceção específica",
      c: "Pode haver múltiplos blocos catch para tratar diferentes tipos de exceções",
      d: "O bloco finally nunca é executado se uma exceção for lançada no bloco try",
    },
    explanation:
      "O bloco finally, quando presente, é SEMPRE executado, independentemente de uma exceção ter sido lançada ou não. É usado para código de limpeza (como fechar recursos) que deve ser executado independentemente do fluxo normal ou excepcional.",
  },
  {
    id: 14,
    category: "Tratamento de Exceções",
    question:
      'Considere o código a seguir:\n\n<pre>public class TesteExcecao {\n    public static void main(String[] args) {\n        try {\n            System.out.print("A");\n            metodo();\n            System.out.print("B");\n        } catch (Exception e) {\n            System.out.print("C");\n        } finally {\n            System.out.print("D");\n        }\n    }\n    \n    static void metodo() throws Exception {\n        throw new Exception();\n    }\n}</pre>\n\nQual será a saída?',
    answer: "c",
    options: {
      a: "ABD",
      b: "ACD",
      c: "ACD",
      d: "AB",
    },
    explanation:
      "O programa imprime 'A', depois chama o método que lança uma exceção. Como uma exceção é lançada, o fluxo de execução pula para o bloco catch (imprimindo 'C') e depois para o bloco finally (imprimindo 'D'). O 'B' nunca é impresso porque ocorre após o lançamento da exceção.",
  },
  {
    id: 15,
    category: "Métodos e Parâmetros",
    question:
      "Considerando o código abaixo da classe CachorroV2:\n\n<pre>void comer(int quantidade) {\n    energia = energia + quantidade;\n    if(energia >= 6)\n        faminto = false;\n}</pre>\n\nO que acontecerá se um objeto cachorro com energia=3 e faminto=true executar o método comer(2)?",
    answer: "a",
    options: {
      a: "energia=5, faminto=true",
      b: "energia=5, faminto=false",
      c: "energia=3, faminto=true",
      d: "energia=6, faminto=false",
    },
    explanation:
      "O método comer(2) aumentará a energia em 2 unidades, passando de 3 para 5. Como 5 não é maior ou igual a 6, a condição para mudar faminto para false não será satisfeita, permanecendo como true.",
  },
  {
    id: 16,
    category: "Modificadores de Acesso",
    question:
      "Na classe CachorroV2, o método 'morrer()' é declarado como private. O que isso significa?",
    answer: "a",
    options: {
      a: "O método só pode ser chamado por outros métodos da mesma classe",
      b: "O método não pode ser sobrescrito em subclasses",
      c: "O método pode ser acessado apenas por classes do mesmo pacote",
      d: "O método deve ser implementado por qualquer subclasse",
    },
    explanation:
      "O modificador de acesso 'private' indica que o método só pode ser acessado dentro da própria classe em que foi definido. No caso, o método 'morrer()' só pode ser chamado por outros métodos da classe CachorroV2, como o método 'passear()'.",
  },
  {
    id: 17,
    category: "Palavra-chave this",
    question:
      "Para que serve a palavra-chave 'this' no construtor abaixo?\n\n<pre>CachorroV2(String nome, String raca, int nascimento, boolean dormindo, boolean faminto, String cor) {\n    this.nome = nome;\n    this.raca = raca;\n    this.nascimento = nascimento;\n    this.dormindo = dormindo;\n    this.faminto = faminto;\n    this.cor = cor;\n    energia = 5;\n}</pre>",
    answer: "b",
    options: {
      a: "Para chamar outro construtor da mesma classe",
      b: "Para diferenciar atributos da classe de parâmetros com o mesmo nome",
      c: "Para indicar que o método é estático",
      d: "Para tornar os atributos públicos",
    },
    explanation:
      "A palavra-chave 'this' é usada para se referir ao objeto atual. No contexto do construtor, ela é usada para diferenciar os atributos da classe (this.nome, this.raca, etc.) dos parâmetros do construtor que têm o mesmo nome (nome, raca, etc.).",
  },
  {
    id: 18,
    category: "Métodos Estáticos",
    question:
      "Qual é a diferença entre um método estático e um método de instância em Java?",
    answer: "c",
    options: {
      a: "Métodos estáticos são mais rápidos que métodos de instância",
      b: "Métodos estáticos podem acessar atributos de instância diretamente",
      c: "Métodos estáticos pertencem à classe e não a objetos específicos",
      d: "Métodos estáticos sempre retornam um valor, enquanto métodos de instância são sempre void",
    },
    explanation:
      "Métodos estáticos (declarados com a palavra-chave 'static') pertencem à classe e não a instâncias específicas. Eles podem ser chamados diretamente através da classe, sem precisar criar um objeto. Métodos de instância, por outro lado, pertencem a objetos específicos e podem acessar atributos do objeto.",
  },
  {
    id: 19,
    category: "Classes e Objetos",
    question:
      'Dado o código abaixo:\n\n<pre>public class TesteObjeto {\n    public static void main(String[] args) {\n        Ponto p1 = new Ponto(2, 3);\n        Ponto p2 = p1;\n        p2.x = 5;\n        \n        System.out.println(p1.x + "," + p1.y);\n    }\n}\n\nclass Ponto {\n    int x, y;\n    \n    Ponto(int x, int y) {\n        this.x = x;\n        this.y = y;\n    }\n}</pre>\n\nQual será a saída?',
    answer: "a",
    options: {
      a: "5,3",
      b: "2,3",
      c: "5,0",
      d: "2,0",
    },
    explanation:
      "Em Java, objetos são manipulados por referência. Quando fazemos p2 = p1, ambas as variáveis estão referenciando o mesmo objeto na memória. Assim, quando alteramos p2.x para 5, estamos alterando o valor do objeto referenciado por ambas as variáveis. Por isso, p1.x também será 5.",
  },
  {
    id: 20,
    category: "Strings e Métodos",
    question:
      'Considere o seguinte código:\n\n<pre>public class TesteStringMetodo {\n    public static void main(String[] args) {\n        String s = "programacao";\n        System.out.println(s.substring(3, 7));\n    }\n}</pre>\n\nQual será a saída?',
    answer: "b",
    options: {
      a: "prog",
      b: "gram",
      c: "grama",
      d: "ogramac",
    },
    explanation:
      "O método substring(int beginIndex, int endIndex) retorna uma parte da string original que começa no índice beginIndex e termina antes do índice endIndex. Neste caso, s.substring(3, 7) retorna os caracteres dos índices 3, 4, 5 e 6 da string \"programacao\", que são 'g', 'r', 'a', 'm'.",
  },
  {
    id: 21,
    category: "Formatação de Saída",
    question:
      'Considere o código a seguir:\n\n<pre>public class TesteFormatacao {\n    public static void main(String[] args) {\n        double valor = 123.456789;\n        System.out.printf("%.2f", valor);\n    }\n}</pre>\n\nQual será a saída?',
    answer: "c",
    options: {
      a: "123.456789",
      b: "123.45678",
      c: "123.46",
      d: "123.45",
    },
    explanation:
      "O formato '%.2f' indica que o número float/double deve ser impresso com 2 casas decimais. O valor é arredondado, então 123.456789 se torna 123.46 (e não 123.45, pois o arredondamento ocorre para cima quando o dígito seguinte é >= 5).",
  },
  {
    id: 22,
    category: "Classes e Métodos",
    question:
      "Considere o código abaixo:\n\n<pre>public class TesteRetorno {\n    public static void main(String[] args) {\n        System.out.println(teste());\n    }\n    \n    static int teste() {\n        try {\n            return 1;\n        } finally {\n            return 2;\n        }\n    }\n}</pre>\n\nQual será a saída?",
    answer: "b",
    options: {
      a: "1",
      b: "2",
      c: "Erro de compilação",
      d: 'Exception in thread "main"',
    },
    explanation:
      "O bloco finally é sempre executado, mesmo quando há um return no bloco try. Neste caso, o método tentará retornar 1, mas o finally será executado logo em seguida, substituindo o valor de retorno por 2. Este padrão não é recomendado na prática, pois torna o código confuso.",
  },
  {
    id: 23,
    category: "Estruturas de Controle",
    question:
      'Qual será o resultado da execução do seguinte código?\n\n<pre>public class TesteLoop {\n    public static void main(String[] args) {\n        int x = 0;\n        while (x < 10) {\n            x++;\n            if (x % 2 == 0) continue;\n            if (x == 7) break;\n            System.out.print(x + " ");\n        }\n    }\n}</pre>',
    answer: "c",
    options: {
      a: "1 2 3 4 5 6 7 8 9",
      b: "1 3 5 7 9",
      c: "1 3 5",
      d: "2 4 6 8 10",
    },
    explanation:
      "A variável x começa em 0 e é incrementada no início do loop. Quando x é par (x % 2 == 0), o 'continue' pula para a próxima iteração. Quando x é ímpar, ele é impresso, exceto quando x == 7, momento em que o loop é interrompido pelo 'break'. Assim, os valores impressos são 1, 3 e 5.",
  },
  {
    id: 24,
    category: "Arrays e Métodos",
    question:
      "Considere o código a seguir:\n\n<pre>public class TesteArrayMetodo {\n    public static void main(String[] args) {\n        int[] nums = {1, 2, 3};\n        duplicar(nums);\n        System.out.println(nums[0] + nums[1] + nums[2]);\n    }\n    \n    static void duplicar(int[] array) {\n        for (int i = 0; i < array.length; i++) {\n            array[i] *= 2;\n        }\n    }\n}</pre>\n\nQual será a saída?",
    answer: "d",
    options: {
      a: "6",
      b: "1 2 3",
      c: "2 4 6",
      d: "12",
    },
    explanation:
      "Em Java, arrays são passados por referência para métodos. Assim, quando o método 'duplicar' modifica o array, ele está modificando o array original. Cada elemento é multiplicado por 2, então o array se torna {2, 4, 6}. A soma desses elementos é 12.",
  },
  {
    id: 25,
    category: "Programação Orientada a Objetos",
    question: "Quais são os quatro pilares da Programação Orientada a Objetos?",
    answer: "b",
    options: {
      a: "Abstração, Associação, Herança, Polimorfismo",
      b: "Abstração, Encapsulamento, Herança, Polimorfismo",
      c: "Agregação, Composição, Herança, Polimorfismo",
      d: "Abstração, Encapsulamento, Composição, Associação",
    },
    explanation:
      "Os quatro pilares fundamentais da Programação Orientada a Objetos são: Abstração (modelar entidades do mundo real), Encapsulamento (esconder detalhes de implementação), Herança (criar novas classes a partir de existentes) e Polimorfismo (mesma interface, comportamentos diferentes).",
  },
  {
    id: 26,
    category: "TAD e Implementação",
    question:
      "Na implementação da classe Lista fornecida nos exemplos, qual a função do atributo 'qtd'?",
    answer: "a",
    options: {
      a: "Controlar quantos elementos foram inseridos na lista",
      b: "Definir o tamanho máximo da lista",
      c: "Servir como índice para o próximo elemento a ser inserido",
      d: "Todas as alternativas anteriores",
    },
    explanation:
      "O atributo 'qtd' mantém o controle de quantos elementos foram inseridos na lista até o momento. Ele também serve como índice para inserção do próximo elemento (nomes[qtd] = nome) e é incrementado após cada inserção bem-sucedida.",
  },
  {
    id: 27,
    category: "Encapsulamento",
    question: "Qual das seguintes NÃO é uma vantagem do encapsulamento em POO?",
    answer: "d",
    options: {
      a: "Proteger os dados de acessos indevidos",
      b: "Permitir alterar a implementação sem afetar o código cliente",
      c: "Controlar como os dados são acessados e modificados",
      d: "Aumentar a eficiência de memória dos programas",
    },
    explanation:
      "O encapsulamento é um princípio de POO que visa esconder os detalhes de implementação e expor apenas o necessário. Ele traz vantagens como proteção de dados, controle de acesso e independência de implementação. Entretanto, não tem como objetivo principal melhorar a eficiência de memória dos programas.",
  },
  {
    id: 28,
    category: "Strings",
    question:
      'Considere o código abaixo:\n\npublic class TesteStringBuilder {\n    public static void main(String[] args) {\n        StringBuilder sb = new StringBuilder("Java");\n        sb.append(" é").append(" divertido");\n        sb.insert(5, "não");\n        System.out.println(sb.toString());\n    }\n}\n\nQual será a saída?',
    answer: "b",
    options: {
      a: "Java é divertido",
      b: "Java não é divertido",
      c: "Java é não divertido",
      d: "Javanão é divertido",
    },
    explanation:
      'Inicialmente, sb contém "Java". Após append(" é").append(" divertido"), temos "Java é divertido". Então insert(5, "não") insere "não" na posição 5, resultando em "Java não é divertido". StringBuilder é mutável, então todas as operações modificam o mesmo objeto.',
  },
  {
    id: 29,
    category: "Escopo de Variáveis",
    question:
      "Considere o código abaixo:\n\npublic class TesteEscopo {\n    static int x = 10;\n    \n    public static void main(String[] args) {\n        int x = 5;\n        System.out.println(x);\n        metodo();\n    }\n    \n    static void metodo() {\n        System.out.println(x);\n    }\n}\n\nQual será a saída?",
    answer: "a",
    options: {
      a: "5\n10",
      b: "10\n10",
      c: "5\n5",
      d: "10\n5",
    },
    explanation:
      "No método main, a variável local x com valor 5 esconde (shadowing) a variável estática x da classe. Assim, System.out.println(x) dentro de main imprime 5. No método metodo(), não há variável local x, então ele acessa a variável estática x da classe, que tem valor 10.",
  },
  {
    id: 30,
    category: "Entrada e Saída",
    question:
      "Ao utilizar o Scanner para ler entrada do usuário, qual problema pode ocorrer ao usar nextInt() seguido de nextLine()?",
    answer: "b",
    options: {
      a: "O programa pode entrar em loop infinito",
      b: "nextLine() pode ler uma linha vazia",
      c: "nextInt() não funciona corretamente",
      d: "O Scanner não fecha corretamente",
    },
    explanation:
      "Quando usamos nextInt(), ele lê apenas o número e deixa o caractere de nova linha (Enter) no buffer. Quando chamamos nextLine() logo em seguida, ele lê esse caractere de nova linha como uma linha vazia. Para evitar isso, é comum adicionar um nextLine() após nextInt() para consumir a nova linha remanescente.",
  },
];
