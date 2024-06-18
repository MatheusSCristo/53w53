import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../../components/Button";

const Fourth = () => {
  return (
    <section className="p-4 flex flex-col gap-5">
      <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw]">
        PANORAMIC VISTAS
      </h1>
      <Button>
        <Link
          href="/gallery"
          className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
        >
          SEE THE VIEWS
          <PiArrowRightThin size={20} />
        </Link>
      </Button>
      <div className="flex gap-5 flex-col-reverse xl:flex-row">
        <div className="flex flex-col gap-5 flex-1 relative h-fit">
          <div className="xl:w-full h-[200px] md:h-[300px] xl:h-[500px] relative">
            <Image src={"/images/residences/residences_13.avif"} alt="" fill  />
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
        <p className="w-[400px]  font-semibold xl:sticky top-[78px]  h-full">
          53 West 53’s residences boast captivating views of the vibrant
          cosmopolitan landscape, including some of the city’s most iconic
          landmarks—the MET, One World Trade, the Chrysler Building, the Empire
          State Building, Central Park, and beyond.
        </p>
      </div>
    </section>
  );
};

export default Fourth;
