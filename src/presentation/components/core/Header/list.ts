interface IMenuList {
  id: number;
  label: string;
  slug: string;
}

const menuList: Array<IMenuList> = [
  {
    id: 0,
    label: "início",
    slug: "start",
  },
  {
    id: 1,
    label: "sobre",
    slug: "about",
  },
  {
    id: 2,
    label: "habilidades",
    slug: "habilitties",
  },
  {
    id: 3,
    label: "serviços",
    slug: "services",
  },
  {
    id: 4,
    label: "portifólio",
    slug: "portifolios",
  },
  {
    id: 5,
    label: "contatos",
    slug: "contatos",
  },
];

export { menuList };
