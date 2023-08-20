import { IGithubProvider } from "@/domain/github/data";
import { repositoriesMappers } from "@/utils/mappers/repositories";

class HomeController {
  private githubProvider: IGithubProvider;

  constructor(githubProvider: IGithubProvider) {
    this.githubProvider = githubProvider;
  }

  async index() {
    try {
      const repositories = await this.githubProvider.getRepositories();
      const mappedRepositories = repositoriesMappers(repositories);

      return { repositories: mappedRepositories };
    } catch (err) {
      console.error(err);
      return { repositories: [] };
    }
  }
}

export { HomeController };
