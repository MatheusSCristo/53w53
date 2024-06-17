import Image from "next/image";
import Link from "next/link";
import { PiArrowRightThin } from "react-icons/pi";
import Button from "../../../../components/Button";

const Second = () => {
  return (
    <section>
      <div className="gap-5 flex flex-col xl:flex-row gap-5 text-wrap font-medium p-5">
        <div className="flex flex-col gap-5">
          <div className="text-[10vw] xl:text-[8vw] leading-[8vw] ">
            <h1 className="uppercase">ELEGANT INTERIORS</h1>
          </div>
          <p className="xl:w-[500px] text-md font-semibold ">
            53 West 53 embodies the ultimate marriage of refinement and comfort,
            extravagance and ease, boldness and elegance. Each of the tower’s
            residences is an heirloom for the modern age—combining superb
            sophistication and craftsmanship and including many custom elements
            by Thierry Despont. Floor-to-ceiling windows showcase the city’s
            classic skyline and fill the residences with natural light.
          </p>
          <div className="flex justify-between items-start flex-col md:flex-row gap-10 ">
            <div className="flex flex-col gap-[5rem]">
              <Button>
                <Link
                  href="/availability"
                  className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px]"
                >
                    EXPLORE AVAILABILITY
                  <PiArrowRightThin size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[500px] md:w-1/2 md:h-[600px] xl:h-[1000px]  2xl:h-[1300px]">
          <Image
            src={"/images/residences/residences_4.avif"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
      </div>
      <div className="2xl:h-screen md:h-[500px] h-[220px] w-full relative">
        <Image
          src={"/images/residences/residences_2.avif"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Second;
