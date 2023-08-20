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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <Button className="sm:w-full max-w-full justify-center">
        <p className="p-none text-4 font-medium uppercase text-white950">
          CURRÍCULO
        </p>
      </Button>
    </div>
  </motion.div>
);

export { AboutMe };
