import { IGithubRepository, IGithubUser } from "../entities";

abstract class IGithubProvider {
  abstract getUser(): Promise<IGithubUser>;
  abstract getRepositories(): Promise<Array<IGithubRepository>>;
}

export { IGithubProvider };
