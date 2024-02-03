"use client";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

import { Link } from "@/components/ui/Link";
import { IGithubRepository } from "@/domain/github/entities";

interface ICarousel {
  repositories: Array<IGithubRepository>;
}

export const Carousel: React.FC<ICarousel> = ({ repositories }) => (
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
    grabCursor
    slidesPerView={"auto"}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={{ clickable: true }}
    className="items-center w-full flex"
    navigation
    modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
  >
    {repositories.map((repository) => (
      <SwiperSlide
        className="flex relative p-8 min-w-[600px] max-w-[600px] min-h-[320px] sm:min-w-fit sm:min-h-auto sm:aspect-video"
        key={repository.id}
      >
        <Link href={repository.redirectUrl} target="_blank">
          <Image
            src={`https://raw.githubusercontent.com/bruno-alvesbr/${repository.name}/${repository.default_branch}/public/project.webp`}
            alt={`Project ${repository.name} default image`}
            placeholder="blur"
            blurDataURL={`https://raw.githubusercontent.com/bruno-alvesbr/${repository.name}/${repository.default_branch}/public/project.webp`}
            fill
          />
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
);
