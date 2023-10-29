import { motion } from "framer-motion";

import { ImageEffect } from "./ImageEffect";
import { Buttons } from "./Buttons";

const Introduction: React.FC = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="w-full h-full flex flex-row sm:flex-col sm:justify-center gap-8 mx-auto items-center justify-between"
  >
    <div className="relative sm:max-w-[400px] sm:flex-col sm:gap-8 flex flex-row w-full items-center justify-between">
      <div className="flex flex-col sm:w-full w-auto h-fit gap-10 sm:order-1">
        <div className="flex flex-col gap-2">
          <h2 className="text-blue800 font-bold text-12 uppercase sm:text-8">
            Bruno Alves
          </h2>

          <p className="text-6 font-medium sm:text-4">
            Sou{" "}
            <strong className="text-blue800">Desenvolvedor Full-Stack</strong>
          </p>
        </div>

        <Buttons />
      </div>

      <ImageEffect />
    </div>
  </motion.div>
);

export { Introduction };
