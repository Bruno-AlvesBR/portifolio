import dayjs from "dayjs";

export const worksList = [
  {
    id: "intern-developer-startse",
    theme: "#FFFF00",
    title: "Intern Full Stack Developer",
    description: {
      label:
        "Acting as intern software developer from the company environment, I've participated of all processes of user's engage and acquisiction.",
      lists: [
        {
          title: "First Result",
          description:
            "Systems development using software tools with focus in performance and escalability.",
        },
        {
          title: "Second Result",
          description:
            "Our main results went in users engagement (1 milion of access p/monthly).",
        },
      ],
    },
    company: {
      name: "StartSe",
      url: "https://www.startse.com",
    },
    startedAt: dayjs("02-10-2022"),
    endedAt: dayjs("01-31-2023"),
    isActing: false,
  },
  {
    id: "junior-developer-startse",
    theme: "#55FFEE",
    title: "Junior Full Stack Developer",
    description: {
      label:
        "Acting as junior software developer from the company environment, I've participated of all processes of system performance and helpful customer experience and identification.",
      lists: [
        {
          title: "First Result",
          description:
            "System have increased of 40 points on Vercel Panel to 90 points of the company website performance",
        },
        {
          title: "Second Result",
          description:
            "Our main result is user's identifications (0.5% to 4% of total actives).",
        },
      ],
    },
    company: {
      name: "StartSe",
      url: "https://www.startse.com",
    },
    startedAt: dayjs("02-01-2023"),
    endedAt: dayjs(),
    isActing: true,
  },
];
