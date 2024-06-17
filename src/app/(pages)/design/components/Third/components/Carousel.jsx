"use client";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const Carousel = ({ images }) => {
  const scaleX = useSpring(0.25,{
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const handleProgress = (swiper) => {
    scaleX.set((swiper.realIndex/images.length)+0.25);
  };

  return (
    <div className="flex flex-col gap-5">
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        loop
        className="mt-5 w-full"
        onProgress={(swiper) => handleProgress(swiper)}
      >
        {images.map((item) => (
          <SwiperSlide className={`p-2 !w-[80%] `} key={item.text}>
            <div className="relative w-full h-[400px] ">
              <Image
                src={`/images/design/design_0${item.number}.avif`}
                fill
                alt=""
                className="object-cover"
              />
            </div>
            <div className="md:text-lg 2xl:text-2xl font-medium">
              <h2>{item.text}</h2>
              <h2 className="">{item.country}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        style={{ scaleX }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full px-4 h-[1px] bg-brown origin-left"
      />
    </div>
  );
};

export default Carousel;
