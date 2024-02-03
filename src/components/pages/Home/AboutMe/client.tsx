"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutMeClient = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{
      scale: [0, 1],
      borderRadius: [999, 8],
      transition: { duration: 0.25 },
    }}
    whileHover={{ rotate: 10 }}
    className="relative w-fit h-fit min-w-[400px] sm:max-w-[250px] sm:min-w-[250px] justify-center"
  >
    <Image
      src="/baloon-me.svg"
      alt=""
      width={400}
      height={400}
      style={{ objectFit: "contain" }}
    />
  </motion.div>
);
