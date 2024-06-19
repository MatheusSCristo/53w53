import Image from "next/image";

const index = () => {
  return (
    <section className="p-4">
      <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] w-[250px] md:w-[500px] xl:w-[1000px]">
        A VIBRANT NEIGHBORHOOD
      </h1>
      <div className="flex flex-col md:flex-row gap-5 xl:gap-32 mt-10 ">
        <p className="md:w-[400px] xl:w-[300px] font-semibold">
          53 West 53 is a reflection of the city at large: a vast and inspiring
          study in contrasts. Whether within its walls or beyond its windows, 53
          West 53 offers an unparalleled New York experience—a sense of place
          and history, of possibility and excitement. 53 West 53’s central
          Midtown location offers direct access to the best of a rich
          cosmopolitan landscape, including international cultural institutions,
          landmark architecture, fine dining and nightlife, and world-class
          performing arts and entertainment.
        </p>
        <div className="xl:flex-1 w-full h-[200px] md:w-[400px] md:h-[300px] xl:h-[700px] relative">
            <Image src={"/images/neighborhood/neighborhood_1.avif"} fill alt=""/>
        </div>
      </div>
    </section>
  );
};

export default index;
