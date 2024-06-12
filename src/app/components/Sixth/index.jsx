import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Carousel from "./components/Carousel";

const Sixth = () => {
  return (
    <section>
      <div className="gap-5 flex flex-col text-wrap font-medium p-5">
        <div className="text-[10vw] xl:text-[8vw] leading-[8vw] w-[300px] md:w-[800px] xl:w-[1000px]">
          <h1 className="uppercase">A WORLD OF REFINEMENT</h1>
        </div>
        <p className="xl:w-[500px] text-md font-semibold ">
          An attentive, sophisticated, and welcoming staff, combined with
          inspired partnerships and amenities, allow for a rich and dynamic
          living experience.
        </p>
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row gap-10 p-4">
        <Link
          href="/lifestyle"
          className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px]"
        >
          Discover The Lifestyle
          <PiArrowRightThin size={20} />
        </Link>
      </div>
      <Carousel/>
      <div className="2xl:h-screen md:h-[500px] h-[220px] w-full relative">
        <Image
          src={"/images/homepage_03.webp"}
          fill
          alt=""
        />
      </div>
    </section>
  );
};

export default Sixth;
