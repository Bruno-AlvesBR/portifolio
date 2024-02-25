"use client";
import { motion } from "framer-motion";

import { ImageEffectServer } from "./server";

const ImageEffect = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{
      scale: [0, 1],
      borderRadius: [999, 8],
      transition: { duration: 0.15 },
    }}
    whileHover={{ boxShadow: "0px 0px 200px #ffffff20" }}
    className={
      "sm:min-w-fit sm:min-h-fit sm:aspect-square w-full h-full rounded-2 overflow-hidden relative max-h-[300px] min-h-[300px] min-w-[300px] max-w-[300px] flex justify-center items-center mx-auto"
    }
  >
    <span className="animate-pulse absolute w-full h-full bg-blue600" />
    <ImageEffectServer />
  </motion.div>
);

export { ImageEffect };
