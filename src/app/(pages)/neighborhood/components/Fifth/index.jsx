import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../../components/Button";
import Carousel from "./Carousel";
import places from "./places";

const Fifth = () => {
  return (
    <section className="p-4">
      <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] xl:w-[1500px]  font-medium py-10">
        THE ESSENCE OF NEW YORK
      </h1>
      <div className="w-full mt-12 p-5 gap-5 hidden xl:flex">
        {places.map((place) => (
          <div className="flex flex-col w-1/4 gap-2 " key={place.name}>
            <div className="p-4 border-[#8a6c6033] border-b-[1px]">
              <h2 className="text-[2vw] font-semibold">{place.name}</h2>
            </div>
            <div className="flex flex-col">
              {place.restaurants.map((restaurant) => (
                <span key={restaurant} className="text-xl font-semibold">
                  {restaurant}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Carousel/>
      <div className="w-full xl:h-[900px] relative mt-12">
        <Image src={"/images/neighborhood/neighborhood_map.avif"} alt="" fill />
      </div>
      <div className="h-[40vh] xl:h-[60vh] xl:h-screen flex justify-center items-center flex-col gap-10">
        <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] text-center ">
          EXPERIENCE THE BUILDING
        </h1>
        <Button>
          <Link
            href="/inquire"
            className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
          >
            SCHEDULE A PRIVATE APPOINTMENT
            <PiArrowRightThin size={20} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Fifth;
