import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper";
import Image from "next/image";

import { IGithubRepository } from "@/domain/github/entities";
import { Link } from "@/presentation/components/ui/Link";

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);

interface IPortifolios {
  repositories: Array<IGithubRepository>;
}

const Portifolios: React.FC<IPortifolios> = ({ repositories }) => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="relative flex flex-col gap-8 w-full h-full justify-between"
  >
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Portifólios
      </h2>
    </header>

    <Swiper
      spaceBetween={0}
      initialSlide={0}
      centeredSlides
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
      }}
      loop
      effect={"coverflow"}
      grabCursor={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      className="items-center w-full flex"
    >
      {repositories?.map((repository) => (
        <SwiperSlide
          className="flex relative p-8 min-w-[600px] max-w-[600px] min-h-[320px]"
          key={repository.id}
        >
          <Link href={repository.html_url} target="_blank">
            <Image
              src={`https://raw.githubusercontent.com/bruno-alvesbr/${repository.name}/${repository.default_branch}/public/project.webp`}
              alt={`project ${repository.name} default image`}
              layout="fill"
              placeholder="blur"
              blurDataURL={`https://raw.githubusercontent.com/bruno-alvesbr/${repository.name}/${repository.default_branch}/public/project.webp`}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
);

export { Portifolios };
