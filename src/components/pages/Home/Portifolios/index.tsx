import Image from "next/image";

import { IGithubRepository } from "@/domain/github/entities";
import { Link } from "@/components/ui/Link";
import { Carousel } from "./Carousel";
import { SwiperSlide } from "swiper/react";

interface IPortifolios {
  repositories: Array<IGithubRepository>;
}

const Portifolios: React.FC<IPortifolios> = ({ repositories }) => (
  <div
    id="portifolios"
    className="sm:px-2 md:px-6 relative flex flex-col gap-32 w-full min-h-[100vh] snap-center justify-center px-32"
  >
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Portifolios
      </h2>
    </header>

    <Carousel repositories={repositories} />
  </div>
);

export { Portifolios };
