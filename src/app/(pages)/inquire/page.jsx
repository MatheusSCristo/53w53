import Image from "next/image";
import Form from "./components/Form";

const Inquire = () => {
  return (
    <main className="min-h-screen relative p-2 xl:p-4 flex flex-col">
      <div className="relative h-[40vh] md:h-[30vh] xl:h-[60vh]">
        <div className="absolute bottom-[20%] md:top-[30%] flex flex-col gap-5 ">
          <h1 className="text-[10vw] xl:text-[8vw] leading-[8vw] w-[300px] md:w-[600px] xl:w-[900px] uppercase ">
            INQUIRE
          </h1>
          <p className="font-semibold md:w-[500px] ">
            Please submit your contact information. The sales team will be in
            touch with you shortly.
          </p>
        </div>
      </div>
      <div className="flex justify-between flex-col xl:flex-row gap-12">
        <div className="flex-1">
          <Form />
        </div>
        <div className="w-full h-[400px] md:h-[600px] xl:w-1/2 xl:h-[700px] relative">
          <Image src={"/images/inquire/inquire.avif"} alt="" fill />
        </div>
      </div>
    </main>
  );
};

export default Inquire;
export const metadata = {
  title: "Inquire with 53 West 53 | Luxury Manhattan Condominiums",
  description:
    "53 West 53 | Luxury Manhattan Condominiums - Explore the epitome of urban elegance at 53 West 53, offering exquisite luxury residences in the heart of Manhattan. Discover unparalleled sophistication and world-class amenities in this iconic residential tower.",
};
