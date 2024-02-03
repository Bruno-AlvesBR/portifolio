import Image from "next/image";

import { IGithubRepository } from "@/domain/github/entities";
import { Link } from "@/components/ui/Link";
import { Carousel } from "./Carousel";
import { SwiperSlide } from "swiper/react";

interface IPortifolios {
  repositories: Array<IGithubRepository>;
}

const Portifolios: React.FC<IPortifolios> = ({ repositories }) => (
  <div className="relative flex flex-col gap-8 w-full h-full justify-between">
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Portifolios
      </h2>
    </header>

    <Carousel repositories={repositories} />
  </div>
);

export { Portifolios };
