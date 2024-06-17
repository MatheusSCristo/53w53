import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../components/Button";

const Fifth = () => {
  return (
    <section>
      <div className="gap-5 flex flex-col text-wrap font-medium p-5">
        <div className="text-[10vw] xl:text-[8vw] leading-[8vw] w-[300px] md:w-[600px] xl:w-[900px]">
          <h1 className="uppercase">AN OASIS ABOVE THE CLOUDS</h1>
        </div>
        <p className="xl:w-[500px] text-md font-semibold ">
          Our majestic private penthouses are captivating and filled with light.
          Their bespoke artistic design elements elevate these homes beyond
          superior to sublime.
        </p>
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row gap-10 p-4">
        <div className="flex flex-col gap-[5rem]">
          <Button>
            <Link
              href="/penthouses"
              className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
            >
              LEARN MORE ABOUT THE PENTHOUSES
              <PiArrowRightThin size={20} />
            </Link>
          </Button>
          <div className="relative hidden md:block md:w-[200px] md:h-[300px] xl:w-[300px] xl:h-[500px] 2xl:w-[500px] 2xl:h-[700px]">
            <Image
              src={"/images/homepage_12.webp"}
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative w-full h-[500px] md:w-1/2 md:h-[600px] xl:h-[1000px]  2xl:h-[1300px]">
          <Image
            src={"/images/homepage_11.webp"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="2xl:h-screen md:h-[500px] h-[220px] w-full relative">
        <Image
          src={"/images/homepage_02.webp"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Fifth;
