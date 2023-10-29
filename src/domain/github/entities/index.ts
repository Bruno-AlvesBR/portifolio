export interface IGithubUser {
  login: string;
  id: number;
  html_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  email?: string;
  hireable?: boolean;
  bio: string;
  public_repos: number;
  public_gists: number;
  created_at: string;
  updated_at: string;
}

export interface IGithubRepository {
  id: number;
  name: string;
  html_url: string;
  url: string;
  redirectUrl: string;
  git_url: string;
  default_branch: string;
}
