import dayjs from "dayjs";

export const worksList = [
  {
    id: "developer-startse",
    title: "Full Stack Developer",
    description: {
      label:
        "Acting as software developer from the company environment, I've participated of all processes of system performance and helpful customer experience and identification.",
      lists: [
        {
          title: "Users identification",
          description:
            "Increased the users identification (0.5% to 4% of total actives).",
        },
        {
          title: "Website's Performance Result",
          description:
            "System have increased of 40 points on Vercel Panel to 90 points of the company website performance",
        },
        {
          title: "Users engagement",
          description:
            "Increased the users engagement (1 milion of access p/monthly).",
        },
        {
          title: "Development Architecture",
          description:
            "Systems development using software tools with focus in performance and escalability.",
        },
      ],
    },
    company: {
      name: "StartSe",
      url: "https://www.startse.com",
    },
    startedAt: dayjs("02-10-2022"),
    endedAt: dayjs("05-04-2024"),
    isActing: false,
    color: "#0080ed",
  },
  {
    id: "mid-developer-cidadania4u",
    title: "Mid Full Stack Developer",
    description: {
      label:
        "Acting as mid software developer from the company environment, I've participated of all processes of system performance and helpful customer experience and gamification.",
      lists: [
        {
          title: "Internal users gamification",
          description:
            "Increase employees satisfaction with gamification techniques!",
        },
      ],
    },
    company: {
      name: "Cidadania4u",
      url: "https://www.cidadania4u.com.br",
    },
    startedAt: dayjs("04-15-2024"),
    endedAt: dayjs(),
    isActing: true,
    color: "#630f2b",
  },
];
