interface IMenuList {
  id: number;
  label: string;
  slug: string;
}

const menuList: Array<IMenuList> = [
  {
    id: 0,
    label: "Start",
    slug: "start",
  },
  {
    id: 1,
    label: "About",
    slug: "about",
  },
  {
    id: 2,
    label: "Skills",
    slug: "skills",
  },
  {
    id: 3,
    label: "Works",
    slug: "jobs",
  },
  {
    id: 4,
    label: "Portifolios",
    slug: "portifolios",
  },
  {
    id: 5,
    label: "Services",
    slug: "services",
  },
  {
    id: 6,
    label: "Contacts",
    slug: "contacts",
  },
];

export { menuList };
