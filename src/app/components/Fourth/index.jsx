"use client";
import Image from "next/image";
import Carousel from "./components/Carousel";


const Fourth = () => {
  

  return (
    <section>
      <div className="gap-5 flex flex-col text-wrap font-medium p-5">
        <div className="text-[10vw] xl:text-[8vw] leading-[8vw] w-[250px] md:w-[500px] xl:w-[600px]">
          <h1 className="uppercase">SINGULAR SPACES IN THE SKY</h1>
        </div>
        <p className="xl:w-[400px] text-md font-semibold ">
          Nouvel’s stunning diagonal design makes each residence a unique home.
          The tower’s interiors reveal an extraordinary level of finish,
          including many custom elements designed by Thierry Despont, as well as
          unsurpassed grandeur and elegance in both scale and proportion.
        </p>
      </div>
      <div className="flex justify-between items-start flex-col md:flex-row gap-10 p-4 relative">
        <Carousel />
      </div>
      <div className="xl:h-screen md:h-[500px] h-[220px] w-full relative">
        <Image
          src={"/images/homepage_10.webp"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Fourth;
