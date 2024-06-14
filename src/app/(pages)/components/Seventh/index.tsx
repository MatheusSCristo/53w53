import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";

const Seventh = () => {
  return (
    <section className=" bg-white  flex flex-col gap-10">
      <div className="gap-5 flex flex-col text-wrap font-medium p-4">
        <div className="text-[10vw] xl:text-[8vw] leading-[8vw] w-[250px] md:w-[500px] xl:w-[1400px]">
          <h1 className="uppercase">THE HEARTBEAT OF THE CITY</h1>
        </div>
        <p className="xl:w-[500px] text-md font-semibold xl:text-lg">
          Midtown is a sophisticated yet energetic neighborhood surrounded by
          the best of New York—iconic cultural institutions, fine dining and
          nightlife, shopping and entertainment, and the world’s biggest
          backyard—Central Park.
        </p>
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row gap-10 p-5">
      <div className="flex flex-col gap-[5rem]">
          <Link
            href="/neighborhood"
            className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
          >
            DISCOVER THE NEIGHBORHOOD
            <PiArrowRightThin size={20} />
          </Link>
          <div className="relative hidden md:block md:w-[200px] md:h-[300px] xl:w-[300px] xl:h-[500px] 2xl:w-[400px] 2xl:h-[600px]">
            <Image
              src={"/images/homepage_09.webp"}
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative w-full h-[500px] md:w-[400px] md:h-[700px] md: 2xl:w-[1000px]  2xl:h-[1200px]">
          <Image
            src={"/images/homepage_08.webp"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Seventh;
