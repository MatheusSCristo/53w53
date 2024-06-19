"use client";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../../../components/Button";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import Menu from "../../../../components/Menu";

const amenities = [
  {
    name: "Grand Arrival",
    image: "/images/amenities/amenities_1.avif",
  },
  {
    name: "Elevator Vestibule",
    image: "/images/amenities/amenities_2.avif",
  },
  {
    name: "World-Class Concierge",
    image: "/images/amenities/amenities_3.avif",
  },
  {
    name: "On-Premises Restaurant: 53",
    image: "/images/amenities/amenities_4.avif",
  },
];

const section = {
  title: "Available Servicess",
  features: [
    "24-hour concierge, porter service, and doormen",
    "General Manager and live-in Resident Manager",
    "Pet walking and grooming",
    "Technology consultant to assist with computers and international phone set-up",
    "Floral delivery and care",
    "Dry cleaning and laundry service/large-load laundry room",
    "Housekeeping/maid service",
    "Chauffeur lounge off service entrance",
    "Bicycle storage",
    "Four high-speed passenger elevators to residences, some with direct access into homes",
  ],
};

const Second = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <section>
      <AnimatePresence>
        {menuIsOpen && (
          <Menu section={section} close={() => setMenuIsOpen(false)} />
        )}
      </AnimatePresence>
      <h1 className="p-4 uppercase text-[10vw]  leading-[10vw] xl:text-[7vw] xl:leading-[7vw] w-full md:w-[800px] xl:w-[900px]  p-4 font-medium ">
        INSPIRE SERVICE AND AMENITIES
      </h1>
      <div className="p-4 flex flex-col xl:flex-row justify-center xl:justify-between relative mt-5 ">
        <div className="p-5 flex flex-col gap-5 xl:sticky top-[78px] h-fit ">
          <p className="font-semibold xl:w-[500px]">
            53 West 53 represents a universe of exceptional indulgence and ease,
            where life transcends the ordinary. The building was designed to be
            responsive to its residents in every way—to enrich their lives
            through premium amenities and partnerships, superb on-premises
            restaurant, and attentive staff in order to bring an unprecedented
            level of access and refinement to the residential setting.
          </p>
          <Button>
            <button
              onClick={() => setMenuIsOpen(true)}
              className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
            >
              EXPLORE THE SERVICE OFFERING
              <PiPlus size={20} />
            </button>
          </Button>
        </div>
        <div className="flex-col gap-5 w-1/2 hidden xl:flex ">
          {amenities.map((item) => (
            <div className="flex justify-end w-full gap-2" key={item.name}>
              <span className="font-semibold text-xl mt-5 text-nowrap text-right w-[300px]">
                {item.name}
              </span>
              <div className="w-full h-[800px] relative mx-5">
                <Image src={item.image} alt="" fill />
              </div>
            </div>
          ))}
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          loop
          className="mt-5 w-full xl:!hidden"
        >
          {amenities.map((item) => (
            <SwiperSlide key={item.name} className="!w-[80%]">
              <div className="flex flex-col ">
                <div className="w-full h-[300px] relative ">
                  <Image src={item.image} alt="" fill />
                </div>
                <span className="font-semibold text-xl mt-5 text-nowrap ">
                  {item.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full h-[300px] md:h-[500px] xl:h-[700px] relative">
        <Image src={"/images/amenities/amenities_2.avif"} alt="" fill />
      </div>
    </section>
  );
};

export default Second;
