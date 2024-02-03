import { MaxContainer } from "@/components/ui/Container";
import { Introduction } from "@/components/pages/Home/Introduction";
import { AboutMe } from "@/components/pages/Home/AboutMe";
import { Skills } from "@/components/pages/Home/Skills";
import { Services } from "@/components/pages/Home/Services";
import { Portifolios } from "@/components/pages/Home/Portifolios";
import { IGithubRepository } from "@/domain/github/entities";
import { Contacts } from "@/components/pages/Home/Contacts";

interface IHomePresentation {
  repositories: Array<IGithubRepository>;
}

const HomePresentation: React.FC<IHomePresentation> = ({ repositories }) => (
  <div className="relative flex flex-col w-full h-full">
    <MaxContainer id="start" className="py-32 sm:py-8 flex bg-gray100">
      <Introduction />
    </MaxContainer>

    <MaxContainer id="about" className="py-8 bg-white950">
      <AboutMe />
    </MaxContainer>

    <MaxContainer id="skills" className="py-8 bg-gray100 scroll-mt-[200px]">
      <Skills />
    </MaxContainer>

    <MaxContainer id="services" className="py-8 bg-white950 scroll-mt-[200px]">
      <Services />
    </MaxContainer>

    <MaxContainer id="portifolios" className="py-8 bg-gray100">
      <Portifolios repositories={repositories} />
    </MaxContainer>

    <MaxContainer id="contacts" className="py-8 bg-gray100 scroll-m-6">
      <Contacts />
    </MaxContainer>
  </div>
);

export { HomePresentation };