import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../../components/Button";

const Fourth = () => {
  return (
    <section className="px-4 my-5">
      <div className="flex flex-col gap-10">
        <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw]">
          AN INFINITE HORIZON
        </h1>
        <Button>
          <Link
            href="/inquire"
            className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px]"
          >
            SEE THE VIEWS
            <PiArrowRightThin size={20} />
          </Link>
        </Button>
      </div>
      <div className="flex gap-10 flex-col-reverse xl:flex-row mt-5">
        <div className="flex flex-col gap-5 flex-1">
          <div className="w-full h-[200px] md:h-[400px] xl:h-[600px] relative">
            <Image src={"/images/penthouse/penthouse_05.avif"} alt="" fill />
          </div>
          <div className="w-full h-[200px] md:h-[300px] xl:h-[500px] relative">
            <video
              autoPlay
              muted
              loop
              id="myVideo"
              className="object-cover h-full w-full absolute"
            >
              <source src="/images/residences/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <p className="font-semibold w-[400px] h-full xl:sticky top-[78px] ">
          The tower’s uppermost residences offer unparalleled panoramic views of
          the glittering New York City skyline in every direction, including its
          most celebrated landmarks—Central Park, the Empire State Building, One
          World Trade, the Chrysler Building, and beyond.
        </p>
      </div>
    </section>
  );
};

export default Fourth;
