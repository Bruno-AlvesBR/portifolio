import axios from "axios";

import { IGithubProvider } from "@/domain/github/data";
import { IGithubUser, IGithubRepository } from "@/domain/github/entities";

class GithubProvider extends IGithubProvider {
  async getUser(): Promise<IGithubUser> {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/bruno-alvesbr"
      );

      return data;
    } catch (error) {
      throw new Error("Cannot possible to find the user");
    }
  }

  async getRepositories(): Promise<Array<IGithubRepository>> {
    try {
      const { data } = await axios.get(
        "https://api.github.com/users/Bruno-AlvesBR/repos"
      );

      return data;
    } catch (error) {
      throw new Error("Cannot possible to find the user repositories");
    }
  }
}

export { GithubProvider };
