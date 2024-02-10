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
    className="items-center w-full flex h-[500px]"
  >
    {skillsList.map((item) => (
      <SwiperSlide
        key={item.id}
        className={
          "shadow-md sm:min-w-[250px] sm:max-w-[250px] gap-28 flex flex-col h-full w-full bg-white1000 overflow-hidden p-4 rounded-md relative my-auto min-w-[300px] min-h-[380px] max-w-[300px] max-h-[380px]"
        }
      >
        <Card {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);
