"use client";
import { MaxContainer } from "@/components/ui/Container";
import { Introduction } from "@/components/pages/Home/Introduction";
import { AboutMe } from "@/components/pages/Home/AboutMe";
import { Skills } from "@/components/pages/Home/Skills";
import { Services } from "@/components/pages/Home/Services";
import { Portifolios } from "@/components/pages/Home/Portifolios";
import { IGithubRepository } from "@/domain/github/entities";
import { Contacts } from "@/components/pages/Home/Contacts";
import { Works } from "./Works";

interface IHomePresentation {
  repositories: Array<IGithubRepository>;
}

const HomePresentation: React.FC<IHomePresentation> = ({ repositories }) => (
  <div
    className="relative flex flex-col w-full h-full"
    style={{
      scrollSnapType: "y mandatory",
      overflowY: "scroll",
      overflowX: "hidden",
      height: "100vh",
      maxHeight: "100vh",
    }}
  >
    <Introduction />

    <AboutMe />

    <Skills />

    <Works />

    <Portifolios repositories={repositories} />

    <Services />

    <Contacts />
  </div>
);

export { HomePresentation };
