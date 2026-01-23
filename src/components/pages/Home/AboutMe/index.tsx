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
        Sobre mim
      </h1>

      <span className="flex flex-col item-start gap-4">
        <p className="text-5 sm:text-4 text-white950 font-light">
          Desenvolvedor Full Stack Sênior com mais de 5 anos de experiência em produtos digitais escaláveis, atuando em ambientes de alto tráfego e foco em performance, arquitetura e crescimento de usuários.
        </p>

        <p className="text-5 sm:text-4 text-white950 font-light">
          Experiência sólida na evolução de sistemas críticos, redução de churn, melhoria de conversão e integração entre front-end e back-end em ambientes de produção.
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
