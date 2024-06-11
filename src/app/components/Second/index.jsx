import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";

const Second = () => {
  return (
    <section className=" bg-white  flex flex-col gap-10">
      <div className="gap-5 flex flex-col text-wrap font-medium p-5">
        <div className="text-[10vw] xl:text-[8vw] leading-[8vw] w-[250px] md:w-[500px] xl:w-[1500px]">
          <h1 className="uppercase">A WORLD AWAY FROM ORDINARY</h1>
        </div>
        <p className="xl:w-[500px] text-md font-semibold xl:text-lg">
          A sculptural icon for Manhattan by Jean Nouvel and Thierry Despont.
          Condominium residences with panoramic views, inspired service and
          amenities, and custom finishes and detailing.
        </p>
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row gap-10 p-5">
        <button className="2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold ">
          EXPLORE AVAILABILITY
          <PiArrowRightThin size={20} />
        </button>
        <div className="relative w-full h-[220px] md:w-[500px] md:h-[300px] md: 2xl:w-[1200px]  2xl:h-[700px]">
          <Image
            src={"/images/homepage_05.webp"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="2xl:h-screen md:h-[350px] h-[220px] w-full relative">
        <Image src={"/images/homepage_04.webp"} fill />
      </div>
    </section>
  );
};

export default Second;
