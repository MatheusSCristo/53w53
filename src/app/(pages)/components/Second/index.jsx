import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../components/Button";

const Second = () => {
  return (
    <section className=" bg-white  flex flex-col gap-10">
      <div className="gap-5 flex flex-col text-wrap font-medium p-4">
        <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] w-[250px] md:w-[500px] xl:w-[1000px]">
          A WORLD AWAY FROM ORDINARY
        </h1>
        <p className="xl:w-[500px] text-md font-semibold xl:text-lg">
          A sculptural icon for Manhattan by Jean Nouvel and Thierry Despont.
          Condominium residences with panoramic views, inspired service and
          amenities, and custom finishes and detailing.
        </p>
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row gap-10 p-5">
        <Button>
          <Link
            href="/availability"
            className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] "
          >
            EXPLORE AVAILABILITY
            <PiArrowRightThin size={20} />
          </Link>
        </Button>
        <div className="relative w-full h-[220px] md:w-[500px] md:h-[300px] md: 2xl:w-[1200px]  2xl:h-[700px]">
          <Image
            src={"/images/homepage_05.webp"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="xl:h-screen md:h-[350px] h-[220px] w-full relative">
        <Image src={"/images/homepage_04.webp"} fill alt="" />
      </div>
    </section>
  );
};

export default Second;
