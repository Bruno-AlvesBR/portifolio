import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/presentation/components/core/Button";

interface IAboutMe {}

const AboutMe: React.FC<IAboutMe> = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="relative flex flex-row w-full h-full gap-16"
  >
    <motion.div
      whileHover={{ rotate: 10 }}
      className="relative w-fit h-fit min-w-[400px]"
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
      <h1 className="text-blue800 text-8 font-bold uppercase">sobre mim</h1>

      <p className="text-5">
        I am Victory Deo Full Stack Congolese developer with 4 years of
        experience. My passion for web development began in 2018 and from then
        on, I did everything I could to break into this path, while having fun
        on the various projects developed. My experience acquired over the
        course of the projects allows me to better understand the expectations
        of a client and to respond precisely to the need requested according to
        the field of activity.
      </p>

      <Button>
        <p className="p-none text-4 font-medium uppercase text-white950">
          CURRÍCULO
        </p>
      </Button>
    </div>
  </motion.div>
);

export { AboutMe };
