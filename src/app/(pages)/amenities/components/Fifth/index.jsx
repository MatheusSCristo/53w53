import Image from "next/image";

const Fifth = () => {
  return (
    <section className="p-4 flex flex-col gap-12">
      <h1 className=" uppercase text-[10vw]  leading-[10vw] xl:text-[7vw] xl:leading-[7vw] w-full md:w-[1000px] xl:w-[1200px]  p-4 font-medium ">
        WORLD-CLASS CUISINE
      </h1>
      <div className="flex gap-10 flex-col xl:flex-row ">
        <p className="xl:w-[400px] font-semibold">
          Residents have priority access to 53, the celebrated restaurant from
          the award-winning Altamarea Group, located on the ground floor of the
          building. Helmed by acclaimed Singapore-born chef Akmal Anuar, 53
          offers an innovative and fresh Asian-inspired menu. The contemporary
          three-story space features a beautiful modern dining room, bustling by
          day and glowing by night, as well as an intimate private dining room.
        </p>
        <div className="xl:flex-1 w-full h-[300px] md:h-[400px] xl:h-[600px] relative">
          <Image src={"/images/amenities/amenities_5.avif"} alt="" fill />
        </div>
      </div>
    </section>
  );
};

export default Fifth;
