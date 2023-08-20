import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/presentation/components/core/Button";
import { serviceList } from "./list";
import { ServiceCard } from "./Card";

interface IServices {}

const Services: React.FC<IServices> = ({}) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="w-full h-full flex flex-col gap-8 mx-auto items-center justify-between"
  >
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Serviços
      </h2>
    </header>

    <main className="flex flex-row gap-8 md:flex-wrap items-center justify-center">
      {serviceList.map(({ icon, id, ...props }) => (
        <ServiceCard key={id} icon={icon()} id={id} {...props} />
      ))}
    </main>
  </motion.div>
);

export { Services };
