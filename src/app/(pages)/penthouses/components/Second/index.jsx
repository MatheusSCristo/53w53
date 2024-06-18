import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../../components/Button";

const Second = () => {
  return (
    <section>
      <div className="gap-5 flex flex-col xl:flex-row gap-5 text-wrap font-medium p-5">
        <div className="flex flex-col gap-5">
          <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw]">
            EXQUISITE RESIDENCES
          </h1>
          <p className="xl:w-[500px] text-md font-semibold ">
            Floating above New York’s skyline, 53 West 53’s one-of-a-kind
            full-floor and duplex penthouse residences are both palatial and
            personal. Their 360-degree views, exquisite detailing, and majestic
            scale lend a modern feeling that balances intimacy and grandeur.
          </p>
          <div className="flex justify-between items-start flex-col md:flex-row gap-10 ">
            <div className="flex flex-col gap-[5rem]">
              <Button>
                <Link
                  href="/inquire"
                  className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px]"
                >
                  INQUIRE ABOUT PREMIUM RESIDENCES
                  <PiArrowRightThin size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[500px] md:w-1/2 md:h-[600px] xl:h-[1000px]  2xl:h-[1300px]">
          <Image
            src={"/images/penthouse/penthouse_03.avif"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="2xl:h-screen md:h-[500px] h-[220px] w-full relative">
        <Image
          src={"/images/penthouse/penthouse_04.avif"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Second;
