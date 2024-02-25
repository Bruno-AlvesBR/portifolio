interface IMenuList {
  id: number;
  label: string;
  slug: string;
}

const menuList: Array<IMenuList> = [
  "about",
  "skills",
  "jobs",
  "portifolios",
  "services",
  "contacts",
].map((item, index) => ({
  id: index,
  label: item,
  slug: item,
}));

export { menuList };
