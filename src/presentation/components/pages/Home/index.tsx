import { MaxContainer } from "@/presentation/components/ui/Container";
import { Introduction } from "./Introduction";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";

interface IHomePresentation {}

const HomePresentation: React.FC<IHomePresentation> = () => (
  <div className="relative flex flex-col w-full h-full">
    <div
      id="inicio"
      className="h-[538px] max-h-[538px] relative bg-gray100 overflow-hidden"
    >
      <MaxContainer className="h-full">
        <Introduction />
      </MaxContainer>
    </div>

    <div id="sobre" className="w-full max-h-[538px] py-8 bg-white950">
      <MaxContainer className="h-full">
        <AboutMe />
      </MaxContainer>
    </div>

    <div className="w-full max-h-[638px] py-8 bg-gray100">
      <MaxContainer className="h-full">
        <Skills />
      </MaxContainer>
    </div>
  </div>
);

export { HomePresentation };
