"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../../components/Button";
import Menu from "../../../../components/Menu";

const slides = [
  {
    name: "65-foot Lap Pool",
    image: "/images/amenities/amenities_carousel_wellness_1.avif",
    size: "!w-[40%]",
  },
  {
    name: "Golf Simulator",
    image: "/images/amenities/amenities_carousel_wellness_2.avif",
    size: "!w-[50%]",
  },
  {
    name: "Regulation Squash Court",
    image: "/images/amenities/amenities_carousel_wellness_3.avif",
    size: "!w-[70%]",
  },
  {
    name: "Steam Room",
    image: "/images/amenities/amenities_carousel_wellness_4.avif",
    size: "!w-[40%]",
  },
  {
    name: "Low-Energy Studio",
    image: "/images/amenities/amenities_carousel_wellness_5.avif",
    size: "!w-[40%]",
  },
  {
    name: "Gym",
    image: "/images/amenities/amenities_carousel_wellness_6.avif",
    size: "!w-[40%]",
  },
  {
    name: "Treatment Room",
    image: "/images/amenities/amenities_carousel_wellness_7.avif",
    size: "!w-[70%]",
  },
];

const section = {
  title: "WELLNESS AMENITIESs",
  features: [
    "15,000-square-foot Wellness Center managed by The Wright Fit",
    "Naturally lit 65-foot lap pool, whirlpool and cold plunge",
    "Poolside 'vertical gardens' by noted French landscape designer Patrick Blanc",
    "Spa treatment room, sauna and steam rooms",
    "Low-energy studio for Pilates, yoga, and more",
    "Golf simulator",
    "International-specification squash court",
    "High-energy studio for HIIT, boxing, and more"
  ],
};

const Third = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <section className="py-5 flex flex-col gap-5">
      <AnimatePresence>
        {menuIsOpen && (
          <Menu section={section} close={() => setMenuIsOpen(false)} />
        )}
      </AnimatePresence>
      <div className="flex justify-between flex-col xl:flex-row">
        <h1 className="p-4 uppercase text-[10vw]  leading-[10vw] xl:text-[7vw] xl:leading-[7vw] w-full md:w-[800px] xl:w-[900px]  p-4 font-medium ">
          WELLNESS REDEFINED
        </h1>
        <div className="p-5 flex flex-col gap-5 xl:sticky top-[78px] h-fit ">
          <p className="font-semibold xl:w-[500px]">
            The 15,000-square-foot Wellness Center, managed by The Wright Fit,
            is designed to support physical and mental well-being. This
            best-in-class facility includes a naturally lit 65-foot lap pool
            with vertical garden walls by legendary French landscape designer
            Patrick Blanc, a golf simulator, a regulation squash court, sauna,
            steam rooms, private studios, and a full suite of strength and
            cardio training equipment.
          </p>
          <Button>
            <button
              onClick={() => setMenuIsOpen(true)}
              className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
            >
              SEE ALL WELLNESS AMENITIES 
              <PiPlus size={20} />
            </button>
          </Button>
        </div>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        loop
        className="mt-5 mb-10 w-full  "
      >
        {slides.map((item) => (
          <SwiperSlide
            className={` !flex flex-col gap-5  ${item.size} `}
            key={item.name}
          >
            <div className="relative h-[200px] md:h-[300px] xl:h-[500px] w-full">
              <Image src={item.image} alt="" fill />
            </div>
            <span className="font-bold">{item.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full h-[300px] md:h-[500px] xl:h-[700px] relative">
        <Image src={"/images/amenities/amenities_3.avif"} alt="" fill />
      </div>
    </section>
  );
};

export default Third;
