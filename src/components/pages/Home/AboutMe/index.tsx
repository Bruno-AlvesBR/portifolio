import Image from "next/image";

import { CurriculumContent } from "@/components/core/CurriculumContent";

const AboutMe = () => (
  <div
    id="about"
    className="sm:px-6 px-32 relative flex flex-row md:flex-col w-full min-h-[100vh] justify-center items-center gap-32 md:gap-12 sm:gap-8 snap-center"
  >
    <span className="transition-transform duration-200 hover:rotate-12 sm:hidden relative w-fit h-[400px] min-w-[400px] md:max-h-[150px] md:h-[150px] md:max-w-[150px] md:min-w-[150px] justify-center">
      <Image
        width={400}
        height={400}
        src="/baloon-me.svg"
        alt=""
        style={{ objectFit: "contain" }}
      />
    </span>

    <div className="relative flex flex-col w-full h-fit gap-8">
      <h1 className="text-blue600 text-8 font-bold uppercase sm:order-0 sm:text-center sm:text-6">
        About me
      </h1>

      <span className="flex flex-col item-start gap-4">
        <p className="text-5 sm:text-4 text-white950 font-light">
          My name is Bruno Alves, and I am a fullstack developer with nearly two
          years of experience, dedicated to creating innovative and efficient
          solutions. Throughout my professional journey, I have gained solid
          expertise in fullstack development technologies. My experience
          involves engagement in challenging projects, where I honed my
          problem-solving skills and contributed to the development of robust
          applications. I am passionate about continuous learning and actively
          seek updates to stay abreast of industry trends.
        </p>

        <p className="text-5 sm:text-4 text-white950 font-light">
          I am ready to actively contribute in dynamic environments, applying my
          knowledge and enthusiasm to drive the success of future ventures.
        </p>
      </span>

      <span className="sm:hidden flex">
        <CurriculumContent />
      </span>
      <span className="sm:flex hidden">
        <CurriculumContent fullWidth />
      </span>
    </div>
  </div>
);

export { AboutMe };
