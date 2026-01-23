import dayjs from "dayjs";

export const worksList = [
  {
    id: "senior-developer-cidadania4u",
    title: "Desenvolvedor Full Stack Sênior",
    description: {
      label:
        "Atuando como desenvolvedor Full Stack Sênior, participo do desenvolvimento de funcionalidades de gamificação e onboarding, com foco no aumento de conversão e engajamento de usuários. Implementação e evolução de sistemas de gerenciamento de documentos, garantindo escalabilidade, performance e confiabilidade.",
      lists: [
        {
          title: "Gamificação e Onboarding",
          description:
            "Desenvolvimento de funcionalidades de gamificação e onboarding, com foco no aumento de conversão e engajamento de usuários.",
        },
        {
          title: "Sistemas de Gerenciamento de Documentos",
          description:
            "Implementação e evolução de sistemas de gerenciamento de documentos, garantindo escalabilidade, performance e confiabilidade.",
        },
        {
          title: "Otimização de Fluxos Críticos",
          description:
            "Otimização de fluxos críticos da aplicação, contribuindo para redução de churn e melhoria de performance.",
        },
        {
          title: "Evolução da Arquitetura Backend",
          description:
            "Evolução da arquitetura backend para suportar crescimento da base de usuários e novas demandas de produto.",
        },
        {
          title: "Tecnologias",
          description:
            "Desenvolvimento com Node.js, Java, Angular, MongoDB, MySQL, AWS, Docker e práticas de arquitetura e performance.",
        },
      ],
    },
    company: {
      name: "Cidadania4u",
      url: "https://www.cidadania4u.com.br",
    },
    startedAt: dayjs("2024-04-01"),
    endedAt: dayjs(),
    isActing: true,
    color: "#630f2b",
  },
  {
    id: "developer-startse",
    title: "Desenvolvedor Full Stack",
    description: {
      label:
        "Atuei na reconstrução da plataforma da empresa junto a um time médio de 5 desenvolvedores, com foco no aumento de engajamento de usuários e intensificação da identificação destes. Participei do planejamento com as equipes de Design e Produto, implementando melhorias visuais e aprimorando a experiência do usuário em toda a plataforma.",
      lists: [
        {
          title: "Aumento de Engajamento",
          description:
            "Aumento do engajamento de usuários, atingindo cerca de 1 milhão de acessos mensais.",
        },
        {
          title: "Melhoria de Performance",
          description:
            "Melhoria de performance do sistema, elevando a pontuação de 40 para 90 no painel de desempenho da Vercel.",
        },
        {
          title: "Taxa de Identificação de Usuários",
          description:
            "Aumento da taxa de identificação de usuários de 0,5% para 4% do total de usuários ativos.",
        },
        {
          title: "Colaboração com Times",
          description:
            "Colaborei diretamente com os times de engajamento e aquisição, otimizando a experiência do usuário e a eficácia na captação de leads.",
        },
      ],
    },
    company: {
      name: "StartSe",
      url: "https://www.startse.com",
    },
    startedAt: dayjs("2021-09-01"),
    endedAt: dayjs("2024-04-01"),
    isActing: false,
    color: "#0080ed",
  },
];
