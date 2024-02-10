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
    className="relative w-fit h-[400px] min-w-[400px] md:max-h-[150px] md:h-[150px] md:max-w-[150px] md:min-w-[150px] justify-center"
  >
    <Image
      width={400}
      height={400}
      src="/baloon-me.svg"
      alt=""
      style={{ objectFit: "contain" }}
    />
  </motion.div>
);
