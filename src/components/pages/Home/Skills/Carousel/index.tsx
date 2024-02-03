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

import { skillsList } from "../list";
import { Card } from "../Card";

export const Carousel = () => (
  <Swiper
    slidesPerView={"auto"}
    initialSlide={0}
    navigation
    effect={"coverflow"}
    centeredSlides
    pagination={{ type: "bullets", clickable: true }}
    autoplay={{
      delay: 5500,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      pauseOnMouseEnter: true,
    }}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true,
    }}
    loop
    modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
    className="items-center w-full flex"
  >
    {skillsList.map((item) => (
      <SwiperSlide
        key={item.id}
        className={
          "sm:min-w-[260px] sm:max-w-[260px] gap-8 flex flex-col h-full w-full bg-white1000 overflow-hidden p-4 rounded-md relative my-auto min-w-[280px] min-h-[340px] max-w-[280px] max-h-[340px]"
        }
      >
        <Card {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);
