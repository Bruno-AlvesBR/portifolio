import { IGithubRepository } from "@/domain/github/entities";

const mainRepositories = [
  { name: "portifolio", url: "https://bruno-alves-portifolio.vercel.app" },
  { name: "ecommerce", url: "https://dunked-nba.vercel.app" },
  { name: "dash-apis", url: "https://dash-apis.vercel.app" },
  { name: "general-api", url: "https://github.com/Bruno-AlvesBR/general-api" },
];

const handleSetRedirectUrl = (repositoryName: string) =>
  mainRepositories.filter((repository) => repository.name === repositoryName)[0]
    .url;

const repositoriesMappers = (repositories: Array<IGithubRepository>) => {
  const selectedMainRepositories = repositories.filter((repository) =>
    mainRepositories.some(
      (mainRepository) => repository.name === mainRepository.name
    )
  );

  const mappedRepositories = selectedMainRepositories.map((repository) => ({
    id: repository.id,
    name: repository.name,
    html_url: repository.html_url,
    default_branch: repository.default_branch,
    redirectUrl: handleSetRedirectUrl(repository.name),
  }));

  return mappedRepositories;
};

export { repositoriesMappers };
