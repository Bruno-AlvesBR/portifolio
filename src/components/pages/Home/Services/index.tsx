import { motion } from "framer-motion";
import Image from "next/image";

import { serviceList } from "./list";
import { ServiceCard } from "./Card";
import DesktopIcon from "@/assets/icons/desktop-computer-icon";

const Services = () => (
  <div className="relative flex flex-col gap-8 justify-between">
    <h2 className="text-blue800 text-8 font-bold uppercase text-center">
      Services
    </h2>

    <main className="flex h-full flex-row gap-8 md:flex-wrap justify-center">
      {serviceList.map(({ id, ...props }) => (
        <ServiceCard key={id} {...props} />
      ))}
    </main>
  </div>
);

export { Services };
