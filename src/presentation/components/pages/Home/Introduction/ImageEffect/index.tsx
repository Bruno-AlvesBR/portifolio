import { motion } from "framer-motion";
import Image from "next/image";

const ImageEffect = () => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{
      scale: [0, 1],
      borderRadius: [999, 8],
      transition: { duration: 0.5 },
    }}
    whileHover={{ rotate: 10 }}
    className={
      "sm:min-w-fit sm:min-h-fit sm:aspect-square bg-blue600 w-full h-full shadow-gray600 shadow-2xl rounded-2 overflow-hidden relative max-h-[300px] min-h-[300px] min-w-[300px] max-w-[300px] flex justify-center items-center mx-auto"
    }
  >
    <Image
      src="/profile.webp"
      alt="image user profile"
      placeholder="blur"
      blurDataURL="/profile.webp"
      layout="fill"
      objectFit="cover"
      priority
    />
  </motion.div>
);

export { ImageEffect };
