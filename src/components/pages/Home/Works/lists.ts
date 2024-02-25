import dayjs from "dayjs";

export const worksList = [
  {
    id: "junior-developer-startse",
    title: "Junior Full Stack Developer",
    description: {
      label:
        "Acting as junior software developer from the company environment, I've participated of all processes of system performance and helpful customer experience and identification.",
      lists: [
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
          title: "Users identification",
          description:
            "Increased the users identification (0.5% to 4% of total actives).",
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
    endedAt: dayjs(),
    isActing: true,
  },
];
