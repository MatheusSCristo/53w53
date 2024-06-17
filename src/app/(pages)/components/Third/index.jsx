import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../components/Button";

const Third = () => {
  return (
    <section>
      <div className="gap-5 flex flex-col text-wrap font-medium p-5">
        <div className="text-[10vw] xl:text-[8vw] leading-[8vw] w-[250px] md:w-[500px] xl:w-[700px]">
          <h1 className="uppercase">THE WORLD WE SEEK</h1>
        </div>
        <p className="xl:w-[500px] text-md font-semibold ">
          53 West 53's distinctive and visionary sculptural form rises above New
          York City's iconic Museum of Modern Art. The tower’s expressive
          architecture is shaped by an original and artistic response to its
          context—including the forces of nature and the vitality of the
          streetscape—and allows the building to achieve expansive interior
          spaces through the marriage of technical innovation and exacting
          attention to detail.
        </p>
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row gap-10 p-4">
        <div className="flex flex-col gap-[5rem]">
          <Button>
            <Link
              href="/design"
              className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px]"
            >
              DISCOVER THE DESIGN
              <PiArrowRightThin size={20} />
            </Link>
          </Button>
          <div className="relative hidden md:block md:w-[200px] md:h-[300px] xl:w-[300px] xl:h-[500px] 2xl:w-[500px] 2xl:h-[700px]">
            <Image
              src={"/images/homepage_07.webp"}
              fill
              alt=""
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative w-full h-[500px] md:w-1/2 md:h-[600px] xl:h-[1000px]  2xl:h-[1300px]">
          <Image
            src={"/images/homepage_06.webp"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="2xl:h-screen md:h-[500px] h-[220px] w-full relative">
        <Image
          src={"/images/homepage_01.webp"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Third;
