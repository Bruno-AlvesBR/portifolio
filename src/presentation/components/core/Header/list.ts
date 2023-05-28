interface IMenuList {
  id: number;
  label: string;
  slug: string;
}

const menuList: Array<IMenuList> = [
  {
    id: 0,
    label: "início",
    slug: "inicio",
  },
  {
    id: 1,
    label: "sobre",
    slug: "sobre",
  },
  {
    id: 2,
    label: "habilidades",
    slug: "habilidades",
  },
  {
    id: 3,
    label: "serviços",
    slug: "servicos",
  },
  {
    id: 4,
    label: "portifólio",
    slug: "portifolio",
  },
  {
    id: 5,
    label: "blog",
    slug: "blog",
  },
  {
    id: 6,
    label: "contatos",
    slug: "contatos",
  },
];

export { menuList };
