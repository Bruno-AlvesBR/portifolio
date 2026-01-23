interface IMenuList {
  id: number;
  label: string;
  slug: string;
}

const menuList: Array<IMenuList> = [
  { label: "sobre", slug: "about" },
  { label: "habilidades", slug: "skills" },
  { label: "trabalhos", slug: "jobs" },
  { label: "portfólios", slug: "portifolios" },
  { label: "serviços", slug: "services" },
  { label: "contatos", slug: "contacts" },
].map((item, index) => ({
  id: index,
  label: item.label,
  slug: item.slug,
}));

export { menuList };
