"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


const slides = [
  {
    image: 5,
    name: "AIDA BICAJ",
    text: "Aida Bicaj has been a trusted esthetician in New York City for nearly three decades, known for her exceptional facials and her careful selection of skincare products.",
  },
  {
    image: 1,
    name: "BLADE",
    text: "An urban air mobility company offering scheduled airport transfers in New York and Monaco, also specializing in short-distance regional and long-distance charter solutions with helicopters, seaplanes, and turboprop and jet aircraft.",
  },
  {
    image: 3,
    name: "BUTTERFIELD MARKET",
    text: "This third-generation family-owned gourmet market has served New York City for over 100 years, offering the finest in fresh food and culinary expertise.",
  },
  {
    image: 6,
    name: "JOHN BARRET SALON",
    text: "New York's beloved salon and haircare specialists",
  },
  {
    image: 2,
    name: "MORREL WINE",
    text: "Located in the heart of Rockefeller Center, Morrell & Company is one of the country’s most eminent wine merchants—and a New York institution as the city’s only wine and spirits retailer with an auction division.",
  },
  {
    image: 4,
    name: "FRETTE",
    text: "The prestigious Italian luxury lifestyle brand Frette is known for its fine linens and decorative home accessories.",
  },
];

const Sixth = () => {
  return (
    <section className="p-4">
      <h1 className=" uppercase text-[10vw]  leading-[10vw] xl:text-[7vw] xl:leading-[7vw] w-full md:w-[800px] xl:w-[900px]  p-4 font-medium ">
        THOUGHTFUL PARTNERSHIPS
      </h1>
      <div className="flex gap-10 flex-col xl:flex-row">
        <p>
          World-class partnerships offer residents the best of the known and the
          niche—bringing together an inspired mix of brands that reflect the
          tastes of the most discerning audiences. Residents enjoy priority
          access and exclusive offerings across beauty and wellness, fashion,
          food, beverage, transportation, lifestyle, and more.
        </p>
        <div className="xl:grid grid-cols-3 gap-5 hidden ">
          {slides.map((slide) => (
            <div key={slide.name} className="flex flex-col gap-4">
              <div className="w-full h-[400px] relative">
                <Image
                  src={`/images/amenities/amenities_partners_${slide.image}.avif`}
                  alt=""
                  fill
                />
              </div>
              <h2 className="font-semibold">{slide.name}</h2>
              <p className="font-semibold">{slide.text}</p>
            </div>
          ))}
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={"auto"}
          loop
          className="mt-5 mb-10 w-full xl:!hidden"
        >
          {slides.map((slide) => (
            <SwiperSlide className=" !flex flex-col gap-5 !w-[80%] md:!w-[60%] " key={slide.name}>
              <div key={slide.name} className="flex flex-col gap-4">
                <div className="w-full h-[300px] md:h-[400px] relative">
                  <Image
                    src={`/images/amenities/amenities_partners_${slide.image}.avif`}
                    alt=""
                    fill
                  />
                </div>
                <h2 className="font-semibold">{slide.name}</h2>
                <p className="font-semibold">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Sixth;
