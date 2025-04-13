const questions = [
  {
    id: 1,
    category: "Conceitos Fundamentais",
    question:
      "Qual foi o principal evento que marcou oficialmente o uso da expressão 'Engenharia de Software'?",
    answer: "b",
    options: {
      a: "Publicação do primeiro livro sobre desenvolvimento de software em 1965.",
      b: "Conferência da OTAN sobre Engenharia de Software em Garmisch, Alemanha, em 1968.",
      c: "Primeira reunião do IEEE para padronização de software em 1970.",
      d: "Lançamento do primeiro sistema operacional comercial em 1964.",
    },
    explanation:
      "A expressão 'Engenharia de Software' foi utilizada oficialmente pela primeira vez em 1968 na Conferência da OTAN sobre Engenharia de Software, realizada em Garmisch, Alemanha. Este evento é considerado um marco histórico para a área, onde foram discutidas maneiras mais sistemáticas e controladas para o desenvolvimento de software.",
  },
  {
    id: 2,
    category: "Crise do Software",
    question:
      "De acordo com o material estudado, quais foram os principais fatores que contribuíram para a chamada 'Crise do Software' no final da década de 60?",
    answer: "c",
    options: {
      a: "Excesso de programadores e poucos projetos disponíveis no mercado.",
      b: "Simplicidade excessiva dos problemas a serem resolvidos por software.",
      c: "Aumento de complexidade dos problemas e inexistência de técnicas bem estabelecidas de desenvolvimento.",
      d: "Diminuição da demanda por novas aplicações de software.",
    },
    explanation:
      "A Crise do Software foi caracterizada pelo aumento de complexidade dos problemas a serem resolvidos, inexistência de técnicas bem estabelecidas de desenvolvimento, demanda crescente por novas aplicações e introdução de computadores mais poderosos, tornando a abordagem informal insuficiente para gerenciar projetos complexos.",
  },
  {
    id: 3,
    category: "Requisitos",
    question:
      "Segundo a definição do IEEE Standard Glossary of Software Engineering Terminology, o que é um requisito?",
    answer: "d",
    options: {
      a: "Apenas uma lista de funções que o software deve executar.",
      b: "Um contrato formal que descreve apenas o valor financeiro do projeto.",
      c: "A definição das tecnologias que serão utilizadas no desenvolvimento.",
      d: "Uma condição ou capacidade necessária para resolver um problema ou atingir um objetivo.",
    },
    explanation:
      "De acordo com o IEEE Standard Glossary of Software Engineering Terminology, um requisito é uma condição ou capacidade necessitada por um usuário para resolver um problema ou atingir um objetivo, ou uma condição ou capacidade que deve ser cumprida por um sistema para satisfazer um contrato, padrão ou especificação.",
  },
  {
    id: 4,
    category: "Requisitos Funcionais",
    question:
      "Quais das seguintes afirmações melhor define requisitos funcionais?",
    answer: "a",
    options: {
      a: "Definem o que o sistema deve fazer, as funcionalidades e serviços esperados.",
      b: "Definem quais tecnologias serão utilizadas no desenvolvimento.",
      c: "Estabelecem restrições de hardware para o sistema.",
      d: "Definem o tempo máximo de desenvolvimento do projeto.",
    },
    explanation:
      "Os requisitos funcionais definem detalhadamente as funcionalidades ou os serviços esperados do sistema, como o sistema deve reagir a entradas específicas e como deve se comportar em determinadas situações. São os requisitos que especificam 'o que' o sistema deve fazer.",
  },
  {
    id: 5,
    category: "Requisitos Não Funcionais",
    question:
      "Qual das opções abaixo representa um exemplo de requisito não funcional?",
    answer: "c",
    options: {
      a: "O sistema deve permitir o cadastro de usuários.",
      b: "O sistema deve gerar relatórios de vendas mensais.",
      c: "O sistema deve responder a consultas em menos de 5 segundos.",
      d: "O sistema deve permitir a edição de registros de produtos.",
    },
    explanation:
      "Requisitos não funcionais expressam condições que o software deve atender ou qualidades específicas que ele deve ter, em vez de informar o que ele fará. O tempo de resposta (menos de 5 segundos) é uma restrição de desempenho, portanto, um requisito não funcional relacionado à eficiência.",
  },
  {
    id: 6,
    category: "Análise de Requisitos",
    question:
      "De acordo com os estudos sobre falhas em projetos de software, qual é o impacto da correção de defeitos de requisitos encontrados tardiamente no ciclo de desenvolvimento?",
    answer: "a",
    options: {
      a: "O custo aumenta significativamente quando defeitos são encontrados em fases posteriores.",
      b: "O custo permanece o mesmo, independentemente da fase em que os defeitos são encontrados.",
      c: "O custo diminui à medida que o projeto avança, pois a equipe ganha experiência.",
      d: "O custo é fixo para correção de defeitos em qualquer fase do projeto.",
    },
    explanation:
      "Conforme demonstrado nos estudos apresentados, o custo para correção de defeitos de requisitos aumenta significativamente quando estes são encontrados em fases posteriores do desenvolvimento. A correção na fase de requisitos tem um custo muito menor do que quando encontrado em produção, por exemplo.",
  },
  {
    id: 7,
    category: "Chaos Report",
    question:
      "De acordo com o Chaos Report do Standish Group de 1995, qual era a porcentagem de projetos de software que eram mal-sucedidos (projetos com problemas de prazo, custo ou funcionalidades)?",
    answer: "c",
    options: {
      a: "28%",
      b: "31,1%",
      c: "52,7%",
      d: "16,2%",
    },
    explanation:
      "Segundo o Chaos Report de 1995, 52,7% dos projetos eram considerados problemáticos, ou seja, não cobriam todas as funcionalidades exigidas, apresentavam custo maior que o estimado e/ou tempo de conclusão significativamente maior do que o previsto (222% em média).",
  },
  {
    id: 8,
    category: "Engenharia de Software",
    question: "Segundo o IEEE, como podemos definir a Engenharia de Software?",
    answer: "d",
    options: {
      a: "O processo de escrever código de computador para resolver problemas específicos.",
      b: "O estudo exclusivo de linguagens de programação e suas aplicações.",
      c: "A manutenção contínua de sistemas legados para garantir seu funcionamento.",
      d: "A aplicação de uma abordagem sistemática, disciplinada e quantificável no desenvolvimento, operação e manutenção de software.",
    },
    explanation:
      "Segundo o IEEE, a Engenharia de Software é definida como a aplicação de uma abordagem sistemática, disciplinada e quantificável no desenvolvimento, operação e manutenção de software. Esta definição enfatiza o aspecto 'engenharia' da disciplina, com processos bem definidos e mensuráveis.",
  },
  {
    id: 9,
    category: "Fatores de Sucesso",
    question:
      "De acordo com o estudo do Standish Group sobre fatores críticos para sucesso de projetos de software, quais dos seguintes fatores relacionados a requisitos foram identificados entre os mais importantes?",
    answer: "b",
    options: {
      a: "Capacidade técnica da equipe e infraestrutura de desenvolvimento.",
      b: "Requisitos completos, envolvimento do usuário e gestão de mudanças de requisitos.",
      c: "Experiência do gerente de projeto e conhecimento da equipe sobre o domínio.",
      d: "Orçamento adequado e ferramentas de desenvolvimento avançadas.",
    },
    explanation:
      "O estudo do Standish Group identificou entre os principais fatores críticos para o sucesso dos projetos: 1) Requisitos completos; 2) Envolvimento do usuário; e 6) Gestão de mudanças de requisitos e especificações. Isso demonstra a importância crucial da engenharia de requisitos para o sucesso de projetos de software.",
  },
  {
    id: 10,
    category: "Tipos de Requisitos",
    question:
      "Qual das seguintes opções representa corretamente os principais tipos de requisitos em engenharia de software?",
    answer: "d",
    options: {
      a: "Funcionais, estruturais e operacionais.",
      b: "Primários, secundários e terciários.",
      c: "Técnicos, lógicos e físicos.",
      d: "Funcionais, não funcionais, restrições de projeto e restrições de processo.",
    },
    explanation:
      "Conforme apresentado no material, os principais tipos de requisitos são: funcionais (o que o sistema deve fazer), não funcionais (qualidades que o sistema deve ter), restrições de projeto (fatores externos ao sistema) e restrições de processo (forma como o desenvolvimento será conduzido).",
  },
  {
    id: 11,
    category: "Requisitos Não Funcionais",
    question:
      "De acordo com a ISO-9126, quais são os atributos de qualidade que se relacionam aos requisitos não funcionais?",
    answer: "a",
    options: {
      a: "Eficiência, Usabilidade, Confiabilidade, Segurança, Manutenabilidade e Portabilidade.",
      b: "Documentação, Performance, Complexidade, Economia, Testabilidade e Escalabilidade.",
      c: "Adaptabilidade, Compatibilidade, Simplicidade, Modularidade, Legibilidade e Durabilidade.",
      d: "Produtividade, Reusabilidade, Flexibilidade, Interoperabilidade, Estabilidade e Conformidade.",
    },
    explanation:
      "De acordo com a ISO-9126, os atributos de qualidade relacionados aos requisitos não funcionais são: Eficiência, Usabilidade, Confiabilidade, Segurança, Manutenabilidade e Portabilidade. Estes atributos ajudam a categorizar e avaliar os aspectos qualitativos do software.",
  },
  {
    id: 12,
    category: "Classificação de Requisitos",
    question:
      "Segundo a classificação IEEE 1998 quanto à importância dos requisitos, como são definidos os requisitos 'essenciais'?",
    answer: "b",
    options: {
      a: "Requisitos que podem ou não ser implementados, dependendo dos prazos e recursos disponíveis.",
      b: "Requisitos sem os quais o produto torna-se inaceitável.",
      c: "Requisitos cujo atendimento aumenta o valor do produto, mas sua ausência pode ser considerada em caso de necessidade.",
      d: "Requisitos que são definidos exclusivamente pelo cliente sem participação da equipe técnica.",
    },
    explanation:
      "Segundo a classificação IEEE 1998, os requisitos essenciais são aqueles sem os quais o produto torna-se inaceitável. Eles são indispensáveis para o funcionamento básico do sistema e devem ser obrigatoriamente implementados.",
  },
  {
    id: 13,
    category: "Perdas Financeiras",
    question:
      "Qual caso famoso de perda financeira relacionada a falhas de software envolveu um erro de conversão entre sistemas de medida?",
    answer: "a",
    options: {
      a: "Sonda Orbital de Marte (1999)",
      b: "Ariane 5 - Agência Espacial Europeia (1996)",
      c: "Sistema Therac-25 (1985-1987)",
      d: "Sistema de Ambulâncias de Londres (1992)",
    },
    explanation:
      "A Sonda Orbital de Marte, em 1999, resultou em uma perda de $29,2 milhões de dólares devido a um erro onde um componente usou escala métrica e outro usou escala imperial. Este caso exemplifica como erros de especificação podem levar a consequências catastróficas.",
  },
  {
    id: 14,
    category: "Perdas de Vidas",
    question:
      "Qual sistema médico causou a morte de 6 pessoas entre 1985 e 1987 devido a erros de software?",
    answer: "b",
    options: {
      a: "Sistema de Ambulâncias de Londres",
      b: "Therac-25",
      c: "Ariane 5",
      d: "Sistema de Administração de Medicamentos do Hospital Johns Hopkins",
    },
    explanation:
      "O Therac-25 era um sistema de radioterapia utilizado para tratar pacientes com câncer. Uma série de falhas no software e nos processos de desenvolvimento resultaram na morte de 6 pessoas entre 1985 e 1987. Este caso é frequentemente citado como exemplo da importância crítica da qualidade de software em sistemas de saúde.",
  },
  {
    id: 15,
    category: "Documento de Requisitos",
    question: "Qual é o principal objetivo de um documento de requisitos?",
    answer: "d",
    options: {
      a: "Apenas documentar o código fonte do sistema.",
      b: "Servir exclusivamente como base para testes de software.",
      c: "Substituir a comunicação direta com os stakeholders.",
      d: "Estabelecer um acordo entre todas as partes interessadas sobre o que o sistema deve fazer.",
    },
    explanation:
      "O documento de requisitos tem como principal objetivo estabelecer e manter uma concordância com os clientes e outros envolvidos sobre o que o sistema deve fazer. Ele serve como um contrato que define claramente as expectativas de todas as partes interessadas.",
  },
  {
    id: 16,
    category: "Requisitos Funcionais",
    question:
      "Qual dos seguintes é um exemplo correto de requisito funcional para um sistema de biblioteca?",
    answer: "c",
    options: {
      a: "O sistema deve ser fácil de usar para funcionários novos.",
      b: "O sistema deve estar disponível 24 horas por dia, 7 dias por semana.",
      c: "O usuário deve ser capaz de pesquisar todo o acervo da biblioteca por autor, título ou assunto.",
      d: "O sistema deve responder a consultas em menos de 3 segundos.",
    },
    explanation:
      "Um requisito funcional descreve o que o sistema deve fazer. No exemplo, 'O usuário deve ser capaz de pesquisar todo o acervo da biblioteca por autor, título ou assunto' especifica uma funcionalidade clara que o sistema deve oferecer, enquanto as outras opções descrevem características não funcionais como usabilidade, disponibilidade e desempenho.",
  },
  {
    id: 17,
    category: "Restrições de Projeto",
    question: "Qual das seguintes opções representa uma restrição de projeto?",
    answer: "a",
    options: {
      a: "O sistema deve ser desenvolvido para funcionar em dispositivos com pelo menos 2GB de RAM.",
      b: "O sistema deve permitir o cadastro de novos usuários.",
      c: "O sistema deve ser capaz de processar 1000 transações por hora.",
      d: "O sistema deve realizar backup diário dos dados às 23h.",
    },
    explanation:
      "As restrições de projeto são relacionadas a fatores externos ao sistema, como ambiente de desenvolvimento ou operação. A especificação de que o sistema deve funcionar em dispositivos com pelo menos 2GB de RAM é uma restrição clara sobre o ambiente de operação do sistema.",
  },
  {
    id: 18,
    category: "Restrições de Processo",
    question: "Qual alternativa representa uma restrição de processo?",
    answer: "b",
    options: {
      a: "O sistema deve ser compatível com navegadores Chrome e Firefox.",
      b: "O desenvolvimento deve seguir a metodologia Scrum com sprints de duas semanas.",
      c: "O sistema deve processar pagamentos em tempo real.",
      d: "O sistema deve permitir a edição de perfis de usuário.",
    },
    explanation:
      "Restrições de processo estão relacionadas à forma como o desenvolvimento do sistema será conduzido. A especificação de que o desenvolvimento deve seguir a metodologia Scrum com sprints de duas semanas é uma restrição clara sobre o processo de desenvolvimento a ser seguido.",
  },
  {
    id: 19,
    category: "Métricas em Requisitos",
    question:
      "Por que é importante definir métricas para requisitos não funcionais?",
    answer: "c",
    options: {
      a: "Para aumentar o número de funcionalidades do sistema.",
      b: "Para reduzir o tempo de desenvolvimento do software.",
      c: "Para permitir que os desenvolvedores testem objetivamente se o sistema cumpre as metas dos usuários.",
      d: "Para diminuir o custo total do projeto de software.",
    },
    explanation:
      "Métricas para requisitos não funcionais são importantes porque permitem que os desenvolvedores testem objetivamente se o sistema cumpre as metas dos usuários. Sem métricas específicas, requisitos como 'o sistema deve ser rápido' seriam vagos e difíceis de verificar, enquanto 'o sistema deve responder em menos de 3 segundos' é verificável objetivamente.",
  },
  {
    id: 20,
    category: "Eficiência",
    question:
      "Qual das seguintes questões está relacionada ao atributo de qualidade 'Eficiência' segundo a ISO-9126?",
    answer: "a",
    options: {
      a: "Qual é o volume de dados que o sistema deve ser capaz de processar?",
      b: "Quão fácil deve ser para um usuário compreender e usar o sistema?",
      c: "O sistema deve detectar e recuperar-se de falhas?",
      d: "O acesso ao sistema ou à informação deve ser controlado?",
    },
    explanation:
      "Segundo a ISO-9126, o atributo de qualidade 'Eficiência' está relacionado a questões como tempo de execução, volume de dados que o sistema deve processar, quantidade de acessos simultâneos e taxa de processamento esperada. Portanto, a pergunta sobre o volume de dados está diretamente relacionada à eficiência.",
  },
  {
    id: 21,
    category: "Usabilidade",
    question:
      "Qual requisito não funcional está associado ao atributo de qualidade 'Usabilidade'?",
    answer: "d",
    options: {
      a: "O sistema deve processar até 1000 transações por minuto.",
      b: "O sistema deve estar operacional 99,9% do tempo.",
      c: "O sistema deve implementar criptografia AES-256 para dados sensíveis.",
      d: "O sistema deve apresentar mensagens de erro claras e orientações para correção.",
    },
    explanation:
      "O requisito 'O sistema deve apresentar mensagens de erro claras e orientações para correção' está diretamente relacionado à facilidade de uso e compreensão do sistema pelo usuário, o que caracteriza o atributo de qualidade 'Usabilidade' conforme a ISO-9126.",
  },
  {
    id: 22,
    category: "Confiabilidade",
    question:
      "De acordo com a ISO-9126, qual característica está relacionada ao atributo de qualidade 'Confiabilidade'?",
    answer: "b",
    options: {
      a: "Velocidade de processamento do sistema.",
      b: "Tolerância a falhas e capacidade de recuperação.",
      c: "Facilidade de aprendizado para novos usuários.",
      d: "Controle de acesso a informações sensíveis.",
    },
    explanation:
      "Segundo a ISO-9126, o atributo de qualidade 'Confiabilidade' está relacionado à capacidade do sistema de detectar e/ou recuperar-se de falhas, tolerância para o tempo médio entre falhas e nível de tolerância a interrupções, ou seja, aspectos relacionados à consistência e disponibilidade do sistema.",
  },
  {
    id: 23,
    category: "Segurança",
    question:
      "Qual dos seguintes requisitos não funcionais está relacionado ao atributo de qualidade 'Segurança'?",
    answer: "c",
    options: {
      a: "O sistema deve ser capaz de atender 500 usuários simultâneos.",
      b: "O sistema deve ser compatível com sistemas operacionais Windows e Linux.",
      c: "O sistema deve exigir autenticação de dois fatores para acesso a módulos administrativos.",
      d: "O sistema deve permitir a geração de relatórios em formatos PDF e Excel.",
    },
    explanation:
      "O requisito 'O sistema deve exigir autenticação de dois fatores para acesso a módulos administrativos' está diretamente relacionado ao controle de acesso ao sistema, uma característica do atributo de qualidade 'Segurança' segundo a ISO-9126, que trata de precauções contra uso indevido e restrições de acesso.",
  },
  {
    id: 24,
    category: "Manutenabilidade",
    question:
      "Segundo a ISO-9126, qual aspecto está relacionado ao atributo de qualidade 'Manutenabilidade'?",
    answer: "a",
    options: {
      a: "Facilidade para adicionar novas funcionalidades ao sistema.",
      b: "Capacidade do sistema de processar grandes volumes de dados.",
      c: "Facilidade de uso para usuários novatos.",
      d: "Compatibilidade com diferentes navegadores web.",
    },
    explanation:
      "De acordo com a ISO-9126, o atributo de qualidade 'Manutenabilidade' está relacionado à facilidade de adicionar novas funcionalidades ao sistema, tempo para diagnóstico de problemas e tempo para resolução de problemas, ou seja, aspectos que facilitam a manutenção e evolução do software.",
  },
  {
    id: 25,
    category: "Classificação de Requisitos",
    question:
      "De acordo com a classificação de requisitos quanto à importância (IEEE 1998), como são definidos os requisitos 'condicionais'?",
    answer: "c",
    options: {
      a: "Requisitos sem os quais o produto se torna inaceitável.",
      b: "Requisitos que podem ou não ser implementados, dependendo dos recursos disponíveis.",
      c: "Requisitos cujo atendimento aumenta o valor do produto, mas sua ausência pode ser considerada em caso de necessidade.",
      d: "Requisitos que são obrigatórios por lei ou por normas regulatórias.",
    },
    explanation:
      "Segundo a classificação IEEE 1998, os requisitos condicionais são aqueles cujo atendimento aumenta o valor do produto, mas sua ausência pode ser considerada em caso de necessidade. Eles agregam valor ao sistema, mas não são absolutamente essenciais para sua aceitação básica.",
  },
  {
    id: 26,
    category: "Portabilidade",
    question:
      "Qual requisito não funcional está relacionado ao atributo de qualidade 'Portabilidade'?",
    answer: "d",
    options: {
      a: "O sistema deve responder a consultas em menos de 2 segundos.",
      b: "O sistema deve implementar controle de acesso baseado em papéis.",
      c: "O sistema deve detectar e recuperar-se de falhas de conexão.",
      d: "O sistema deve funcionar nos sistemas operacionais Windows, Linux e macOS.",
    },
    explanation:
      "O requisito 'O sistema deve funcionar nos sistemas operacionais Windows, Linux e macOS' está diretamente relacionado à capacidade do sistema de ser portável a outras plataformas, característica do atributo de qualidade 'Portabilidade' segundo a ISO-9126.",
  },
  {
    id: 27,
    category: "Importância dos Requisitos",
    question:
      "Por que a fase de requisitos é considerada crítica no desenvolvimento de software?",
    answer: "c",
    options: {
      a: "Porque é a fase mais longa do ciclo de desenvolvimento.",
      b: "Porque exige mais recursos financeiros que as outras fases.",
      c: "Porque erros nesta fase causam o maior impacto e custo para correção nas fases posteriores.",
      d: "Porque é a única fase onde o cliente participa ativamente.",
    },
    explanation:
      "A fase de requisitos é considerada crítica porque, embora seja relativamente barata comparada às demais fases, é onde a maioria dos defeitos são inseridos. Quando esses defeitos não são detectados e corrigidos imediatamente, o custo para sua correção aumenta drasticamente nas fases posteriores do desenvolvimento, conforme demonstrado nos estudos apresentados.",
  },
  {
    id: 28,
    category: "Levantamento de Requisitos",
    question:
      "Qual das seguintes dificuldades é comumente encontrada durante o levantamento de requisitos?",
    answer: "b",
    options: {
      a: "Excesso de conhecimento técnico dos usuários.",
      b: "Especialistas no domínio podem entender tão bem a área que não tornam todos os requisitos explícitos.",
      c: "Usuários normalmente possuem expectativas baixas sobre as capacidades do sistema.",
      d: "Excesso de documentação formal sobre os processos de negócio.",
    },
    explanation:
      "Uma dificuldade comum no levantamento de requisitos é que especialistas no domínio, por entenderem tão bem sua área de atuação, frequentemente não tornam todos os requisitos explícitos, pois muitos aspectos são considerados 'óbvios' para eles, mas podem não ser para a equipe de desenvolvimento, resultando em requisitos incompletos ou mal compreendidos.",
  },
  {
    id: 29,
    category: "Documento de Requisitos",
    question:
      "Quais são os principais objetivos de um documento de requisitos?",
    answer: "a",
    options: {
      a: "Estabelecer concordância sobre o que o sistema deve fazer, oferecer compreensão aos desenvolvedores e definir as fronteiras do sistema.",
      b: "Detalhar o código fonte, definir a arquitetura técnica e especificar os algoritmos a serem utilizados.",
      c: "Substituir a comunicação com o cliente, automatizar testes e gerar documentação final.",
      d: "Definir o cronograma, alocar recursos e estabelecer o orçamento do projeto.",
    },
    explanation:
      "Os principais objetivos de um documento de requisitos são: estabelecer e manter concordância com os clientes sobre o que o sistema deve fazer; oferecer aos desenvolvedores melhor compreensão dos requisitos; definir as fronteiras do sistema; fornecer base para estimativas de custo e tempo; e definir a interface do usuário.",
  },
  {
    id: 30,
    category: "Cenários de Aplicação",
    question:
      "No cenário 'Sistema para Controle de Vacinas em Unidades de Saúde', qual seria um requisito funcional adequado?",
    answer: "b",
    options: {
      a: "O sistema deve estar disponível 24 horas por dia, 7 dias por semana.",
      b: "O sistema deve enviar notificações aos pacientes sobre vacinas pendentes conforme calendário oficial.",
      c: "O sistema deve ter tempo de resposta inferior a 3 segundos para consultas de registros.",
      d: "O sistema deve utilizar certificados SSL para garantir a segurança das informações.",
    },
    explanation:
      "Um requisito funcional descreve o que o sistema deve fazer. No cenário de controle de vacinas, 'O sistema deve enviar notificações aos pacientes sobre vacinas pendentes conforme calendário oficial' representa uma funcionalidade específica que o sistema deve oferecer, enquanto as outras opções representam requisitos não funcionais de disponibilidade, desempenho e segurança.",
  },
];
