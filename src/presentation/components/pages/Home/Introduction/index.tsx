import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/presentation/components/core/Button";
import { contentProfileImage } from "./styles";

interface IIntroduction {}

const Introduction: React.FC<IIntroduction> = ({}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="w-full h-full flex flex-row sm:flex-col sm:justify-center gap-8 mx-auto items-center justify-between"
  >
    <div className="flex flex-col w-auto max-w-[400px] h-fit gap-10 sm:order-1">
      <div className="flex flex-col gap-2">
        <h2 className="text-blue800 font-bold text-12 uppercase sm:text-8">
          Bruno Alves
        </h2>

        <p className="text-6 font-medium sm:text-4">
          Sou <strong className="text-blue800">Desenvolvedor Full-Stack</strong>
        </p>
      </div>

      <div className="flex flex-row gap-8">
        <Button className="uppercase">
          <p className="p-none text-4 font-semibold uppercase text-white950">
            contato
          </p>
        </Button>

        <Button hierarchy="secondary" className="uppercase">
          <p className="p-none text-4 font-semibold uppercase text-blue600">
            currículo
          </p>
        </Button>
      </div>
    </div>

    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: [0, 1],
        borderRadius: [999, 8],
        transition: { duration: 0.5 },
      }}
      whileHover={{ rotate: 10 }}
      className={contentProfileImage}
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
  </motion.div>
);

export { Introduction };
