import { IGithubRepository } from "@/domain/github/entities";

const repositoriesMappers = (repositories: Array<IGithubRepository>) => {
  const mainRepositories = [
    "portifolio",
    "ecommerce",
    "dash-apis",
    "general-api",
  ];

  const selectedMainRepositories = repositories.filter((repository) =>
    mainRepositories.some((sla) => repository.name === sla)
  );

  const mappedRepositories = selectedMainRepositories.map((repository) => ({
    id: repository.id,
    name: repository.name,
    html_url: repository.html_url,
    default_branch: repository.default_branch,
  }));

  return mappedRepositories;
};

export { repositoriesMappers };
