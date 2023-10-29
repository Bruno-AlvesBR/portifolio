import { motion } from "framer-motion";
import Image from "next/image";

import { serviceList } from "./list";
import { ServiceCard } from "./Card";
import DesktopIcon from "@/assets/icons/desktop-computer-icon";

const Services = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="relative flex flex-col gap-8 justify-between"
  >
    <h2 className="text-blue800 text-8 font-bold uppercase text-center">
      Serviços
    </h2>

    <main className="flex h-full flex-row gap-8 md:flex-wrap items-center justify-center">
      {serviceList.map(({ id, ...props }) => (
        <ServiceCard key={id} {...props} />
      ))}
    </main>
  </motion.div>
);

export { Services };
