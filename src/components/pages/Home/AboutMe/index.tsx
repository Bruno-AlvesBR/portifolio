import { Button } from "@/components/core/Button";
import { AboutMeClient } from "./client";
import { CurriculumContent } from "@/components/core/CurriculumContent";

const AboutMe = () => (
  <div
    id="about"
    className="sm:px-6 px-32 relative flex flex-row md:flex-col w-full min-h-[100vh] justify-center items-center gap-32 md:gap-12 sm:gap-8 snap-center"
  >
    <AboutMeClient />

    <div className="relative flex flex-col w-full h-fit gap-8">
      <h1 className="text-blue800 text-8 font-bold uppercase sm:order-0 sm:text-center sm:text-6">
        About me
      </h1>

      <span className="flex flex-col item-start gap-4">
        <p className="text-5 sm:text-4 text-black900 font-normal">
          My name is Bruno Alves, and I am a fullstack developer with nearly two
          years of experience, dedicated to creating innovative and efficient
          solutions. Throughout my professional journey, I have gained solid
          expertise in fullstack development technologies. My experience
          involves engagement in challenging projects, where I honed my
          problem-solving skills and contributed to the development of robust
          applications. I am passionate about continuous learning and actively
          seek updates to stay abreast of industry trends.
        </p>

        <p className="text-5 sm:text-4 text-black900 font-normal">
          I am ready to actively contribute in dynamic environments, applying my
          knowledge and enthusiasm to drive the success of future ventures.
        </p>
      </span>

      <CurriculumContent fullWidth={false} />
    </div>
  </div>
);

export { AboutMe };
