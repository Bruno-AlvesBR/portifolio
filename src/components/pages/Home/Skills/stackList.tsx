const frontEndSkillsIcons = [
  {
    id: "react",
    name: "ReactJS",
    redirectUrl: "https://react.dev/",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: "next",
    name: "NextJS",
    redirectUrl: "https://nextjs.org/",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: "tailwind",
    name: "TailwindCSS",
    redirectUrl: "https://tailwindcss.com/",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: "axios",
    name: "Axios",
    redirectUrl: "https://axios-http.com/",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
  },
  {
    id: "mui",
    name: "MUI",
    redirectUrl: "https://mui.com/",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
];

enum STACK_STATUS {
  ADVANCED = "advanced",
  INTERMEDIATE = "intermediate",
  BEGINNER = "begginer",
}

export interface IStacksList {
  id: number;
  title: string;
  description: string;
  status: string;
  skills: Array<{
    id: string;
    name: string;
    redirectUrl: string;
    imageUrl: string;
  }>;
}

export const stacksList = [
  {
    id: 0,
    title: "Front End",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: STACK_STATUS.ADVANCED,
    skills: frontEndSkillsIcons,
  },
  {
    id: 1,
    title: "Back End",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: STACK_STATUS.ADVANCED,
    skills: frontEndSkillsIcons,
  },
  {
    id: 2,
    title: "Tests",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: STACK_STATUS.ADVANCED,
    skills: frontEndSkillsIcons,
  },
  {
    id: 3,
    title: "Architecture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    status: STACK_STATUS.ADVANCED,
    skills: frontEndSkillsIcons,
  },
];
