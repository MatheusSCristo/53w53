import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../../components/Button";

const Second = () => {
  return (
    <section className="">
      <div className="gap-5 flex flex-col text-wrap font-medium p-5">
        <div className="text-[10vw] xl:text-[8vw] leading-[8vw] w-[300px] md:w-[600px] xl:w-[900px]">
          <h1 className="uppercase">VISIONARY DESIGN</h1>
        </div>
        <p className="xl:w-[500px] text-md font-semibold ">
          Designed by Jean Nouvel with custom interiors by Thierry Despont, 53
          West 53 is carved by the alchemy of light and shadow. The building, a
          true reflection of its environment, is based on an unconventional
          diagrid structure that eliminates the need for interior columns and
          allows for grand, airy living spaces filled with natural light.
        </p>
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row gap-10 p-4">
        <Button>
          <Link
            href="/penthouses"
            className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
          >
            INQUIRE
            <PiArrowRightThin size={20} />
          </Link>
        </Button>
        <div className="relative w-full h-[500px] md:w-1/2 md:h-[600px] xl:h-[800px] ">
          <Image
            src={"/images/design/design_02.avif"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="2xl:h-screen md:h-[600px] h-[300px] w-full relative">
        <Image
          src={"/images/design/design_03.avif"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Second;
