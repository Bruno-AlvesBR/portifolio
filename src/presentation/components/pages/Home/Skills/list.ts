interface ISkillsList {
  id: number;
  label: string;
  experience: "basic" | "median" | "advanced";
}

const skillsList: Array<ISkillsList> = [
  {
    id: 0,
    label: "React.JS",
    experience: "advanced",
  },
  {
    id: 1,
    label: "Next.JS",
    experience: "median",
  },
  {
    id: 2,
    label: "Typescript.JS",
    experience: "advanced",
  },
  {
    id: 3,
    label: "Express.JS",
    experience: "advanced",
  },
  {
    id: 3,
    label: "MongoDB",
    experience: "median",
  },
];

export { skillsList };
