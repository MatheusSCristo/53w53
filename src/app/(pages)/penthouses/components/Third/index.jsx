import Image from "next/image";
import Section from "../../../../components/Section";

const section = {
  title: "MAJESTIC LIVING",
  button: "SEE AL PENTHOUSE FEATURES",
  text: "The architecture of the tower's upper floors creates entirely unique interior spaces, while the addition of bespoke artistic elements to the penthouse residences—such as dramatic double-height great rooms, monumental limestone-clad fireplaces, or private interior elevators—makes each one truly original.",
  images: [
    "/images/penthouse/penthouse_09.avif",
    "/images/penthouse/penthouse_07.avif",
    "/images/penthouse/penthouse_08.avif",
  ],
};

const Third = () => {
  return (
    <section className="flex flex-col gap-10 my-5 justify-center items-center ">
      <div className="xl:ml-[20%] xl:pr-5 p-2 w-fit">
        <Section section={section} />
      </div>
      <div className="w-full h-[200px] md:h-[400px] xl:h-[800px] relative">
        <Image src={"/images/penthouse/penthouse_02.avif"} fill alt="" className="object-cover" />
      </div>
    </section>
  );
};

export default Third;
