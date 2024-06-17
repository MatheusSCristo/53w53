import Image from "next/image";
import Carousel from "../Carousel/Carousel";

const images = [
  { number: "05", text: "National Museum", country: "Doha Qatar" },
  {
    number: "07",
    text: "Louvre Abu Dhabi  Abu Dhabi",
    country: " United Arab Emirates",
  },
  { number: "08", text: "Philharmonie de Paris", country: "Paris France" },
  {
    number: "09",
    text: "Cartier Foundation for Contemporary Art",
    country: "Paris, France",
  },
];

const Third = () => {
  return (
    <section>
      <div className="text-[10vw] xl:text-[7vw] leading-[8vw] w-full md:w-[800px] xl:w-[1000px] 2xl:w-[1500px] p-4 font-medium">
        <h1 className="uppercase">A SCULPTURAL FORM BY JEAN NOUVEL</h1>
      </div>
      <div className="p-4 w-full flex flex-col xl:flex-row-reverse justify-between relative ">
        <div className="flex flex-col xl:sticky top-[20%] xl:h-screen md:w-[400px] pb-5">
          <p className="text-md font-semibold w-[400px]">
            Paris-based Jean Nouvel, the Pritzker Prize–winning architect and
            mastermind behind the Louvre Abu Dhabi and the Mirador torre Glòries
            in Barcelona, is one of the most acclaimed and celebrated architects
            practicing today.His innovative and globally diverse body of work
            includes international cultural landmarks as well as luxury hotels
            and residences.
          </p>
          <div className="relative w-full h-[400px] md:h-[400px] 2xl:h-[500px] mt-2 ">
            <Image
              src={"/images/design/design_04.avif"}
              fill
              alt=""
              className="object-contain"
            />
          </div>
          <span className="text-md font-semibold">
            “Architecture exists, like cinema, in the dimension of time and
            movement.”
          </span>
          <span className="text-md font-semibold">— Jean Nouvel</span>
        </div>

        <div className="justify-between flex-col gap-10 p-4 hidden xl:flex">
          {images.map((item) => (
            <div className="flex gap-5" key={item.text}>
              <div className="relative w-full h-[500px] md:w-[500px] md:h-[600px] xl:h-[800px] 2xl:h-[1000px] 2xl:w-[800px]  ">
                <Image
                  src={`/images/design/design_${item.number}.avif`}
                  fill
                  alt=""
                  className="object-cover"
                />
              </div>
              <div className="md:text-lg 2xl:text-2xl">
                <h2>{item.text}</h2>
                <h2 className="">{item.country}</h2>
              </div>
            </div>
          ))}
        </div>
        <Carousel images={images}/>
      </div>
      <div className="2xl:h-screen md:h-[600px] h-[300px] w-full relative">
        <Image
          src={"/images/design/design_13.avif"}
          fill
          alt=""
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Third;
