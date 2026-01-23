export interface ISkillsList {
  id: string;
  label: string;
  progress: number;
  description?: string;
  featured?: boolean;
}

const skillsList: Array<ISkillsList> = [
  {
    id: "javascript",
    label: "JavaScript",
    progress: 90,
    description:
      "Linguagem de programação principal utilizada no desenvolvimento front-end e back-end. Aplicada em sistemas de alto tráfego e produtos escaláveis.",
  },
  {
    id: "java",
    label: "Java",
    progress: 85,
    description:
      "Linguagem de programação utilizada no desenvolvimento back-end com Spring Boot. Aplicada em sistemas críticos e de alta performance.",
  },
  {
    id: "reactjs",
    label: "React.js",
    progress: 90,
    description:
      "Biblioteca JavaScript para construção de interfaces. Aplicada no desenvolvimento de sistemas escaláveis e de alto desempenho.",
  },
  {
    id: "nextjs",
    label: "Next.js",
    progress: 85,
    description:
      "Framework React para aplicações full-stack. Utilizado em projetos com foco em performance e SEO.",
  },
  {
    id: "angularjs",
    label: "AngularJS",
    progress: 80,
    description:
      "Framework JavaScript para desenvolvimento front-end. Utilizado na integração de interfaces com serviços backend.",
  },
  {
    id: "nodejs",
    label: "Node.js",
    progress: 90,
    description:
      "Ambiente de execução JavaScript no servidor. Utilizado no desenvolvimento de APIs e sistemas backend escaláveis.",
  },
  {
    id: "expressjs",
    label: "Express.js",
    progress: 85,
    description:
      "Framework Node.js para construção de APIs e aplicações web. Utilizado em sistemas de produção de alto tráfego.",
  },
  {
    id: "spring-boot",
    label: "Spring Boot",
    progress: 80,
    description:
      "Framework Java para desenvolvimento de aplicações enterprise. Utilizado em sistemas críticos e de alta performance.",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    progress: 85,
    description:
      "Banco de dados não relacional orientado a documentos. Utilizado em sistemas que requerem escalabilidade horizontal.",
  },
  {
    id: "postgresql",
    label: "PostgreSQL",
    progress: 80,
    description:
      "Banco de dados relacional de código aberto. Utilizado em sistemas que requerem consistência e integridade de dados.",
  },
  {
    id: "mysql",
    label: "MySQL",
    progress: 80,
    description:
      "Banco de dados relacional. Utilizado em sistemas de produção com modelagem e integração eficiente.",
  },
  {
    id: "aws",
    label: "AWS",
    progress: 75,
    description:
      "Serviços de infraestrutura em nuvem. Utilizado para hospedagem, escalabilidade e serviços como SQS e SNS.",
  },
  {
    id: "aws-lambda",
    label: "AWS Lambda",
    progress: 80,
    description:
      "Serviço de computação serverless. Utilizado para execução de funções sem gerenciamento de servidores, ideal para processamento assíncrono e APIs.",
    featured: true,
  },
  {
    id: "aws-sqs",
    label: "AWS SQS",
    progress: 80,
    description:
      "Serviço de filas de mensagens gerenciado. Utilizado para desacoplamento de componentes e processamento assíncrono de tarefas.",
    featured: true,
  },
  {
    id: "aws-s3",
    label: "AWS S3",
    progress: 85,
    description:
      "Armazenamento de objetos escalável. Utilizado para armazenar e recuperar dados, backups e arquivos estáticos com alta disponibilidade.",
    featured: true,
  },
  {
    id: "aws-ec2",
    label: "AWS EC2",
    progress: 75,
    description:
      "Serviço de computação em nuvem. Utilizado para provisionar servidores virtuais escaláveis e configuráveis conforme a demanda.",
    featured: true,
  },
  {
    id: "aws-sns",
    label: "AWS SNS",
    progress: 80,
    description:
      "Serviço de notificações pub/sub. Utilizado para enviar mensagens e notificações para múltiplos assinantes de forma eficiente.",
    featured: true,
  },
  {
    id: "docker",
    label: "Docker",
    progress: 85,
    description:
      "Plataforma de contenerização. Utilizado para padronização de ambientes e deploy de aplicações.",
  },
  {
    id: "tdd",
    label: "TDD",
    progress: 80,
    description:
      "Desenvolvimento Orientado a Testes. Prática aplicada para garantir qualidade e manutenibilidade do código.",
  },
  {
    id: "solid",
    label: "SOLID",
    progress: 85,
    description:
      "Princípios de design de software. Aplicados na arquitetura de sistemas escaláveis e manuteníveis.",
  },
  {
    id: "arquitetura",
    label: "Arquitetura de Software",
    progress: 85,
    description:
      "Conceitos de arquitetura aplicados na evolução de sistemas críticos, redução de churn e melhoria de performance.",
  },
  {
    id: "testes",
    label: "Testes (Jest, Vitest)",
    progress: 80,
    description:
      "Ferramentas de teste para JavaScript. Utilizadas em testes unitários e de integração.",
  },
  {
    id: "ci-cd",
    label: "CI/CD",
    progress: 75,
    description:
      "Integração e entrega contínua. Utilizado para automação de processos de deploy e qualidade de código.",
  },
];

export { skillsList };
