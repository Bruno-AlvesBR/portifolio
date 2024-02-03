import { repositoriesMappers } from "@/utils/mappers/repositories";

export class GithubService {
  async getUser() {
    const response = await fetch("https://api.github.com/users/bruno-alvesbr");

    return response.json();
  }

  async getRepositories() {
    const response = await fetch(
      "https://api.github.com/users/Bruno-AlvesBR/repos"
    );

    return repositoriesMappers(await response.json());
  }
}
