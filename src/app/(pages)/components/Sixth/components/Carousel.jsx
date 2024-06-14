"use client";
import Image from "next/image";
import { useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  { name: "ON-PREMISE RESTAURANTE,53", size: "md:!w-[70%]" },
  { name: "LOUNGE", size: "md:!w-[40%]" },
  { name: "TREATMENT ROOM", size: "md:!w-[40%]" },
  { name: "WINE ROOM", size: "md:!w-[40%]" },
  { name: "REGULATION SQUASH COURT", size: "md:!w-[70%]" },
];

const Carousel = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrevious = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="relative flex flex-col-reverse xl:flex-row justify-center xl:w-full ">
        <button
          onClick={handlePrevious}
          className="hidden xl:block w-[100px] h-[100px] rounded-full bg-[#8a6c60b2] z-10 absolute top-1/2 -translate-y-1/2 left-[5%]"
        >
          <PiArrowLeftThin size={50} className="text-white inline-block"/>
        </button>
        <button
          onClick={handleNext}
          className="hidden xl:block w-[100px] h-[100px] rounded-full bg-[#8a6c60b2] z-10 absolute top-1/2 -translate-y-1/2 right-[5%]"
        >
          <PiArrowRightThin size={50} className="text-white inline-block"/>
        </button>

      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        loop
        modules={[Pagination]}
        className="mt-5 w-full h-[200px] md:h-[300px] xl:h-[800px]"
        ref={swiperRef}
      >
        {slides.map((item, index) => (
          <SwiperSlide
            className={` flex flex-col gap-2 !w-[70%] ${item.size} `}
            key={item.name}
          >
            <div className="relative h-[90%] w-full">
              <Image
                src={`/images/homepage_mobile_carousel2_0${index + 1}.webp`}
                alt=""
                fill
              />
            </div>
            <span className="font-bold">{item.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
