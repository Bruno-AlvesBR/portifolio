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
      "JS based library. I applied it to the development of company systems and personal websites.",
  },
  {
    id: "nextjs",
    label: "Next.JS",
    progress: 80,
    description:
      "Framework based on JS. I applied it to the development of company systems and personal websites.",
  },
  {
    id: "typescriptjs",
    label: "Typescript.JS",
    progress: 85,
    description:
      "JS code typing tool. I applied it to the development of company systems and personal websites.",
  },
  {
    id: "ingles",
    label: "English",
    progress: 50,
    description: "Intermediate communication, reading, and writing in English.",
  },
  {
    id: "expressjs",
    label: "Express.JS",
    progress: 70,
    description:
      "JS-based framework that runs in a Node environment. I applied it to the development of company systems and personal websites.",
  },
  {
    id: "mongodb",
    label: "MongoDB",
    progress: 65,
    description:
      "Non-relational document-oriented database. I applied it to the development of company systems and personal websites.",
  },
  {
    id: "nodejs",
    label: "NodeJS",
    progress: 65,
    description:
      "Execution environment that interprets and executes scripts. I applied it to the development of company systems and personal websites.",
  },
  {
    id: "front-end",
    label: "Front-End",
    progress: 80,
    description:
      "Stack related to user interface. I honed my skills in the development of company systems and personal websites.",
  },
  {
    id: "back-end",
    label: "Back-End",
    progress: 65,
    description:
      "Stack related to the 'background' of a site/project. I honed my skills in the development of company systems and personal websites.",
  },
  {
    id: "testes-de-software",
    label: "Software Testing",
    progress: 70,
    description:
      "Stack related to unit/integration testing of interfaces and internal systems. I honed my skills in the development of company systems and personal websites.",
  },
  {
    id: "mvc-solid-tdd",
    label: "MVC, SOLID, TDD",
    progress: 70,
    description:
      "Structural concepts of 'clear' and 'clean' code. I honed my skills in the development of company systems and personal websites.",
  },
];

export { skillsList };
