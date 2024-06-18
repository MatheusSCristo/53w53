import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../../components/Button";

const index = () => {
  return (
    <section>
      <div className="h-[60vh] xl:h-screen flex justify-center items-center flex-col gap-10">
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
      <div className="bg-[#f4f1ea] p-5 flex flex-col gap-5  xl:flex-row justify-between items-center">
        <div className="flex flex-col gap-12 items-center">
          <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw]  xl:w-[700px] text-center xl:text-left ">
            PREMIUM RESIDENCES
          </h1>
          <Button>
            <Link
              href="/penthouses"
              className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
            >
              EXPLORE THE PENTHOUSES
              <PiArrowRightThin size={20} />
            </Link>
          </Button>
        </div>
        <div className="w-full h-[200px] md:h-[400px] xl:w-[500px] 2xl:w-[600px] xl:h-[400px] 2xl:h-[500px] relative">
            <Image src={"/images/residences/residences_14.avif"} fill alt="Fifth" />
        </div>
      </div>
    </section>
  );
};

export default index;
