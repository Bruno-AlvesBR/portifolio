import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import { skillsList } from "./list";
import { Card } from "./Card";

import { contentSlide } from "./styles";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Skills = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    className="relative flex flex-col gap-8 w-full h-full justify-between"
  >
    <header>
      <h2 className="text-blue800 text-8 font-bold uppercase text-center">
        Habilidades
      </h2>
    </header>

    <Swiper
      spaceBetween={200}
      slidesPerView={"auto"}
      initialSlide={0}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
        stopOnLastSlide: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      loop
      className="items-center w-full flex"
    >
      {skillsList.map((skill) => (
        <SwiperSlide key={skill.id} className={contentSlide}>
          <Card {...skill} />
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
);

export { Skills };
