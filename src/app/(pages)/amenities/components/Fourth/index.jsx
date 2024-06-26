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
    name: "Wine Room",
    image: "/images/amenities/amenities_carousel_lifestyle_1.avif",
    size: "!w-[60%]",
  },
  {
    name: "Wine Vault",
    image: "/images/amenities/amenities_carousel_lifestyle_2.avif",
    size: "!w-[60%]",
  },
  {
    name: "Library",
    image: "/images/amenities/amenities_carousel_lifestyle_3.avif",
    size: "!w-[40%]",
  },
  {
    name: "Theater",
    image: "/images/amenities/amenities_carousel_lifestyle_4.avif",
    size: "!w-[60%]",
  },
  {
    name: "Children's Playroom",
    image: "/images/amenities/amenities_carousel_lifestyle_5.avif",
    size: "!w-[40%]",
  }
];

const section = {
  title: "LIFESTYLE AMENITIES",
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


const Fourth = () => {
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
          AN ELEVATED LIFESTYLE
        </h1>
        <div className="p-5 flex flex-col gap-5 xl:sticky top-[78px] h-fit ">
          <p className="font-semibold xl:w-[500px]">
            53 West 53 boasts superb services and features that support
            residents’ hobbies and passions, including an elegant wine tasting
            room with private vaults, a 46th-floor lounge overlooking Central
            Park, a large private screening room, and a jewel box library—all
            designed by Thierry Despont. Residents also have access to exclusive
            dining options from the on-premises restaurant, 53.
          </p>
          <Button>
          <button
              onClick={() => setMenuIsOpen(true)}
              className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
            >
              SEE ALL LIFESTYLE AMENITIES
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
        <Image src={"/images/amenities/amenities_4.avif"} alt="" fill />
      </div>
    </section>
  );
};

export default Fourth;
