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
    centeredSlides
    spaceBetween={16}
    pagination={{ type: "bullets", clickable: true }}
    autoplay={{
      delay: 5500,
      disableOnInteraction: false,
      stopOnLastSlide: false,
      pauseOnMouseEnter: true,
    }}
    loop
    modules={[Autoplay, Navigation, Pagination, EffectCoverflow]}
    className="items-center w-full flex h-[300px]"
  >
    {skillsList?.map((item) => (
      <SwiperSlide
        key={item.id}
        className="flex sm:min-w-[250px] sm:max-w-[250px] min-w-[250px] min-h-[250px] max-w-[250px] max-h-[250px]"
      >
        <Card {...item} />
      </SwiperSlide>
    ))}
  </Swiper>
);
