"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { PiArrowRightThin } from "react-icons/pi";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";

const Carousel = ({}) => {
  const slides = ["Bedroom", "Bathroom", "Living Rooms", "Kitchen"];
  const [current, setCurrent] = useState();
  const swiperRef = useRef(null);

  const handleChange = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row justify-center w-full ">
      <div className="flex flex-col">
        <Link
          href="/residences"
          className="absolute top-0 xl:static cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
        >
          EXPLORE THE RESIDENCES
          <PiArrowRightThin size={20} />
        </Link>

        <div className="flex xl:flex-col gap-1 md:text-xl font-semibold xl:absolute bottom-10 justify-center self-center xl:self-start">
          {slides.map((slide, index) => (
            <span
              className={`capitalize ${
                current != index && "opacity-[0.7]"
              } cursor-pointer `}
              onClick={() => handleChange(index)}
            >
              {slide}
            </span>
          ))}
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect={"fade"}
        loop={true}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mt-5 h-[200px] w-[300px] md:h-[300px] md:w-[450px] xl:h-[800px] xl:w-3/4"
        ref={swiperRef}
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide className="w-full h-full relative" key={item}>
            <Image
              src={`/images/homepage_mobile_carousel1_0${item}.webp`}
              alt=""
              fill
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
