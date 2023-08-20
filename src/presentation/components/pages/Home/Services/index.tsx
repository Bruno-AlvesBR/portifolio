import { motion } from "framer-motion";

import { serviceList } from "./list";
import { ServiceCard } from "./Card";

const Services = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="relative flex flex-col gap-8 w-full h-full justify-between"
  >
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Serviços
      </h2>
    </header>

    <main className="flex h-full flex-row gap-8 md:flex-wrap items-center justify-center">
      {serviceList.map(({ icon, id, ...props }) => (
        <ServiceCard key={id} icon={icon()} id={id} {...props} />
      ))}
    </main>
  </motion.div>
);

export { Services };
