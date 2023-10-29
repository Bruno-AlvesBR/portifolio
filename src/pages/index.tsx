import { GetStaticProps, NextPage } from "next";

import { HomeController } from "@/infra/http/Controllers/Home";
import { GithubProvider } from "@/infra/http/Providers/Github";
import { HomePresentation } from "@/presentation/pages/Home";
import { IGithubRepository } from "@/domain/github/entities";

interface IHome {
  repositories: Array<IGithubRepository>;
}

const Home: NextPage<IHome> = (props) => <HomePresentation {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const homeController = new HomeController(new GithubProvider());

    const props = await homeController.index();

    return {
      revalidate: 1,
      props,
    };
  } catch {
    return {
      revalidate: 60,
      props: { user: {} },
    };
  }
};

export default Home;
