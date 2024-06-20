import Image from "next/image";

const Third = () => {
  return (
    <section>
      <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] w-[350px] md:w-[900px] xl:w-[1200px] p-4">
        SOARING ABOVE MOMA
      </h1>
      <div className="flex flex-col md:flex-row gap-5 justify-between mt-10 p-4  ">
        <p className="md:w-[400px] xl:w-[300px] font-semibold">
          Connected to and towering above the world-famous Museum of Modern Art,
          the expressive and sculptural building stands as a fitting partner to
          the legendary museum. Its dramatic architecture takes its cue from the
          creative ethos of the modern art movement, articulating new
          possibilities of form, technique, and aesthetic expression.
        </p>
        <div className="xl:w-[700px] w-full h-[200px] md:w-[400px] md:h-[300px] xl:h-[700px] relative">
          <Image src={"/images/neighborhood/neighborhood_3.avif"} fill alt="" />
        </div>
      </div>
      <div className="w-full h-[200px] md:h-[400px] xl:h-[700px] relative">
        <Image
          src={"/images/neighborhood/neighborhood_4.avif"}
          fill
          alt=""
          className="xl:object-cover"
        />
      </div>
    </section>
  );
};

export default Third;
