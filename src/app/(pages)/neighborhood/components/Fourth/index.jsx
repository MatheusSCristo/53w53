"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";
import "swiper/css";

import Image from "next/image";
import optionsSlide from "./optionsSlide";

const options = ["DINE + SIP", "SEE + HEAR", "SHOP + BROWSE", "MOVE + PLAY"];

const Fourth = () => {
  const [optionSelected, setOptionSelected] = useState(0);

  return (
    <section className="p-4">
      <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] text-nowrap font-medium">
        WHERE TO
      </h1>
      <Swiper
        spaceBetween={80}
        slidesPerView={"auto"}
        onActiveIndexChange={(swiper) => setOptionSelected(swiper.realIndex)}
        loop
        className="mt-1 w-full"
        slideToClickedSlide
      >
        {options.map((item, index) => (
          <SwiperSlide key={item} className=" !w-fit cursor-pointer">
            <h2
              className={` ${
                index == optionSelected ? "opacity-1" : "opacity-[0.6]  "
              } uppercase text-lg xl:text-[8vw] leading-[8vw] text-nowrap font-medium`}
            >
              {item}
            </h2>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex-col hidden xl:flex mt-5">
        {optionsSlide[optionSelected].map((item) => (
          <div
            className="justify-between flex flex-col xl:flex-row p-4 items-center"
            key={item.local}
          >
            <div className="flex flex-col xl:flex-row gap-10 items-center">
              <div className="w-full xl:w-[300px] h-[200px] relative">
                <Image src={`/images/neighborhood/${item.image}`} fill alt="" />
              </div>
              <h3 className="font-semibold">{item.local}</h3>
            </div>
            <p className="font-semibold w-[400px]">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="xl:hidden mt-5">
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          loop
          className="mt-1  "
        >
          {optionsSlide[optionSelected].map((item) => (
            <SwiperSlide key={item.text} className="!w-[90%]">
              <div className="justify-between flex flex-col p-4 items-center">
                <div className="flex flex-col w-full justify-center gap-4">
                  <div className="w-full h-[400px] relative">
                    <Image
                      src={`/images/neighborhood/${item.image}`}
                      fill
                      alt=""
                    />
                  </div>
                  <h3 className="font-semibold">{item.local}</h3>
                </div>
                <p className="font-semibold ">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Fourth;
