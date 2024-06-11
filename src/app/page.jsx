"use client";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-[100vh] relative ">
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="object-cover h-full w-full absolute"
      >
        <source src="background_video.mp4" type="video/mp4" />
      </video>
      <div className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] text-white z-20 absolute bottom-5 left-5 font-semibold ">
        <div className="overflow-hidden ">
          <motion.h1
            initial={{ y: "200%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.5, ease: "easeInOut" }}
            className="text-white"
          >
            A MODERN
          </motion.h1>
        </div>
        <div className="overflow-hidden ">
          <motion.h1
            initial={{ y: "200%" }}
            animate={{ y: 0 }}
            transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }}
            className="text-white"
          >
            HEIRLOOM
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
