import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";

import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

import Section from "./components/Section";
import sections from "./sections";

const SectionButton = ({ section, active }) => {
  const controller = useAnimationControls();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      controller.start("animate");
      if (active) active();
      return;
    }
    controller.start("exit");
  }, [isActive]);

  return (
    <div className="relative">
      <Link
        key={section.text}
        activeClass="!opacity-[1]"
        onSetActive={() => setIsActive(true)}
        onSetInactive={() => setIsActive(false)}
        to={section.title}
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
        className="opacity-[0.5] font-semibold text-lg cursor-pointer transformation duration-500 ease-in-out"
      >
        {section.title}
      </Link>
      <motion.div
        variants={{
          animate: { scaleX: 1, transformOrigin: "left" },
          initial: { scaleX: 0 },
          exit: { scaleX: 0, transformOrigin: "right" },
        }}
        initial={"initial"}
        animate={controller}
        exit={"remove"}
        transition={{ duration: 0.5 }}
        className="absolute left-0 bottom-0 w-full bg-brown h-[1px] "
      />
    </div>
  );
};

const Third = () => {
  const swiperRef = useRef(null);

  const handleActiveSlide = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <section className="flex flex-col pt-5 ">
      <div className="flex flex-col xl:flex-row gap-5 relative h-fit p-4 ">
        <Swiper
          spaceBetween={40}
          slidesPerView={"auto"}
          loop
          className="xl:!hidden !sticky top-[78px] w-fit text-nowrap h-fit bg-white !p-4 w-full"
          ref={swiperRef}
        >
          {sections.map((section, index) => (
            <SwiperSlide key={section.button} className="!w-[30%]">
              <SectionButton
                section={section}
                active={() => handleActiveSlide(index)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden xl:flex p-4  flex-col text-sm gap-1 items-start justify-center sticky top-[5%] h-screen text-nowrap">
          {sections.map((section) => (
            <SectionButton section={section} key={section.button} />
          ))}
        </div>
        <div className="flex-1 xl:pl-[10%] xl:pr-5 flex flex-col gap-10">
          {sections.map((section) => (
           <Section section={section} key={section.title} />
          ))}
        </div>
      </div>
      <div className="w-full h-[200px] md:h-[400px] xl:h-[600px] relative">
        <Image
          src={`/images/residences/residences_3.avif`}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Third;
