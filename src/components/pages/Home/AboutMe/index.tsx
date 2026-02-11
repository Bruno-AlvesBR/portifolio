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
     Desenvolvedor Full Stack com 5 anos de experiência na construção de
     produtos digitais escaláveis e de alto tráfego. Especialista em
     ecossistemas JavaScript (TypeScript) e Java, com forte atuação em backend
     (Node.js, Spring Boot) e excelência em frontend (React, Next.js, Angular).
    </p>

    <p className="text-5 sm:text-4 text-white950 font-light">
     Histórico comprovado de redução de churn, otimização de conversão e
     evolução de arquiteturas cloud em AWS para ambientes de produção críticos.
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
