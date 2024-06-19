"use client"
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

import places from "../places";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      loop
      className="mt-5 w-full xl:!hidden "
    >
      {places.map((place) => (
        <SwiperSlide key={place.name} className="!w-fit ">
          <div className="flex flex-col w-fit gap-2 ">
            <div className="p-4 border-[#8a6c6033] border-b-[1px]">
              <h2 className="text-[5vw] font-semibold">{place.name}</h2>
            </div>
            <div className="flex flex-col">
              {place.restaurants.map((restaurant) => (
                <span key={restaurant} className="text-xl font-semibold">
                  {restaurant}
                </span>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
