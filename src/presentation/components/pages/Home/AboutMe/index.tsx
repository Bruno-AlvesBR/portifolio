import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/presentation/components/core/Button";

interface IAboutMe {}

const AboutMe: React.FC<IAboutMe> = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="relative flex flex-row sm:flex-col w-full h-full items-center gap-16 overflow-hidden sm:gap-8"
  >
    <motion.div
      whileHover={{ rotate: 10 }}
      className="relative w-fit h-fit min-w-[400px] sm:max-w-[250px] sm:min-w-[250px] justify-center"
    >
      <Image
        src="/baloon-me.svg"
        alt=""
        width={400}
        height={400}
        objectFit="contain"
      />
    </motion.div>

    <div className="relative flex flex-col w-full h-full gap-8">
      <h1 className="text-blue800 text-8 font-bold uppercase sm:order-0 sm:text-center">
        sobre mim
      </h1>

      <p className="text-5 sm:text-4">
        Olá, meu nome é Bruno Alves, sou um desenvolvedor FullStack Web, com 1
        ano e 7 meses de experiência profissional na área de desenvolvimento de
        software. Aplico conhecimentos em práticas utilizando minhas hards
        skills no âmbito técnico e soft skills em comunicação e tomadas de
        decisões.
      </p>

      <Button
        className="sm:w-full max-w-full justify-center"
        href="/bruno-alves-curriculo.pdf"
        isDownload
      >
        <p className="p-none text-4 font-medium uppercase text-white950">
          CURRÍCULO
        </p>
      </Button>
    </div>
  </motion.div>
);

export { AboutMe };
