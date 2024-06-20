import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../../components/Button";

const Fifth = () => {
  return (
    <section className=" flex   flex-col">
      <div className="flex flex-col items-center justify-center gap-5 h-[50vh] xl:h-screen">
        <h1 className="uppercase text-[10vw]  leading-[10vw] xl:text-[7vw] xl:leading-[7vw] w-full md:w-[800px] xl:w-[700px] 2xl:w-[1000px] p-4 font-medium text-center">
          EXPERIENCE THE BUILDING
        </h1>
        <Button>
          <Link
            href="/inquire"
            className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] "
          >
            SCHEDULE A PRIVATE APPOINTMENT
            <PiArrowRightThin size={20} />
          </Link>
        </Button>
      </div>
      <div className="p-4 flex flex-col xl:flex-row gap-5 justify-between">
        <div className="flex flex-col justify-center gap-5 items-center xl:items-start">
          <h1 className="uppercase text-[10vw] leading-[10vw] xl:text-[7vw] leading-[7vw] w-full md:w-[800px] xl:w-[700px] 2xl:w-[1000px] p-4 font-medium text-center">
            EXQUISITE RESIDENCES
          </h1>
          <Button>
            <Link
              href="/residences"
              className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] "
            >
              EXPLORE THE RESIDENCES
              <PiArrowRightThin size={20} />
            </Link>
          </Button>
        </div>
        <div className="w-full h-[200px] xl:w-1/3 xl:h-[400px] relative">
          <Image src="/images/design/design_15.avif" fill alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
