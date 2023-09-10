export interface ISkillsList {
  id: string;
  label: string;
  progress: number;
  description?: string;
}

const skillsList: Array<ISkillsList> = [
  {
    id: "reactjs",
    label: "React.JS",
    progress: 85,
    description:
      "Biblioteca baseada em JS. Apliquei no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "nextjs",
    label: "Next.JS",
    progress: 80,
    description:
      "Framework baseada em JS. Apliquei no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "typescriptjs",
    label: "Typescript.JS",
    progress: 85,
    description:
      "Ferramenta de tipagem de código JS. Apliquei no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "ingles",
    label: "Inglês",
    progress: 50,
    description: "Intermediária comunicação, leitura e escrita em inglês.",
  },
  {
    id: "expressjs",
    label: "Express.JS",
    progress: 70,
    description:
      "Framework baseado em JS que roda em ambiente Node. Apliquei no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    progress: 65,
    description:
      "Banco de dados não relacional orientado a documentos. Apliquei no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "nodejs",
    label: "NodeJS",
    progress: 65,
    description:
      "Ambiente de execução que interpreta e executa scripts. Apliquei no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "front-end",
    label: "Front-End",
    progress: 80,
    description:
      "Stack relacionada a interface do usuário. Aprimorei minhas técnicas no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "back-end",
    label: "Back-End",
    progress: 65,
    description:
      "Stack relacionada ao 'background' de um site/projeto. Aprimorei minhas técnicas no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "testes-de-software",
    label: "Testes de Software",
    progress: 70,
    description:
      "Stack relacionada a testes unitários/integrais de interface e sistemas internos. Aprimorei minhas técnicas no desenvolvimento do sistema de empresa e sites pessoais.",
  },
  {
    id: "mvc-solid-tdd",
    label: "MVC, SOLID, TDD",
    progress: 70,
    description:
      "Conceitos estruturais de código 'claro' e 'limpo'. Aprimorei minhas técnicas no desenvolvimento do sistema de empresa e sites pessoais.",
  },
];

export { skillsList };
