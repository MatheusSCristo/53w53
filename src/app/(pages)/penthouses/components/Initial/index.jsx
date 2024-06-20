"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Initial = () => {
  return (
    <section className="h-screen relative ">
      <Image src={"/images/penthouse/penthouse_01.avif"} alt="" fill className="object-cover"/>
      <div className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] text-white  absolute bottom-5 left-5 font-semibold ">
        <div className="overflow-hidden ">
          <motion.h1
            initial={{ y: "200%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
            className="text-white"
          >
            AN OASIS ABOVE 
          </motion.h1>
        </div>
        <div className="overflow-hidden ">
          <motion.h1
            initial={{ y: "200%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }}
            className="text-white "
          >
            THE CLOUDS
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Initial;
