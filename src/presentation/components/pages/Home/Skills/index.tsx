import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import { skillsList } from "./list";

SwiperCore.use([Navigation, Pagination, Autoplay]);

interface ISkills {}

const Skills: React.FC<ISkills> = () => (
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
      spaceBetween={0}
      slidesPerView={4}
      initialSlide={0}
      centeredSlides
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
        <SwiperSlide
          className="relative w-[80rem] p-8 m-auto flex"
          key={skill.id}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white1000 overflow-hidden p-4 rounded-md relative my-auto min-w-[280px] min-h-[340px] max-w-[280px] max-h-[340px]"
          >
            <div className="z-10 bg-transparent">{skill.label}</div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
);

export { Skills };
