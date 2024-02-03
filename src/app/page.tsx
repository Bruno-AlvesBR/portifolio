import { HomePresentation } from "@/components/pages/Home";
import { GithubService } from "@/services/github";

export default async function Home() {
  const githubService = new GithubService();
  const repositories: any = await githubService.getRepositories();

  return <HomePresentation repositories={repositories} />;
}
