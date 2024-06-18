import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { PiPlus } from "react-icons/pi";
import { Link } from "react-scroll";
import Button from "../../../../components/Button";

import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

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

const sections = [
  {
    title: "LIVING ROOMS",
    button: "SEE ALL INTERIOR FEATURES",
    text: "Living spaces exude a warm and inviting ambiance. Expansive and breathtaking views are framed by triple-glazed full-height windows, and a wealth of considered finishes—wide-plank oak flooring, grand walnut entry doors, and custom bronze hardware designed by Thierry Despont—combine to create a truly artful atmosphere.",
    images: [6, 5],
  },
  {
    title: "KITCHENS",
    button: "SEE ALL KITCHEN FEATURES",
    text: "Chef-standard kitchens are replete with glass-fronted Molteni&C cabinets designed by Thierry Despont, luminous marble surfaces, premium appliances from Miele and Sub-Zero, and polished nickel Dornbracht fixtures.",
    images: [7, 8],
  },
  {
    title: "BATHROOMS",
    button: "SEE ALL BATHROOM FEATURES",
    text: "Spa-like bathrooms blend tradition and originality, featuring Italian-finished Verona limestone surfaces and premium fixtures. Select residences feature heated limestone floors and distinctive lollipop vanity mirrors, designed by Thierry Despont, which can be raised and lowered according to one’s preference.",
    images: [9, 10],
  },
  {
    title: "BEDROOMS",
    button: "SEE ALL BEDROOM FEATURES",
    text: "The residences’ bedrooms share the rich layering of finishes and detailing found throughout the rest of the living spaces, as well as Nouvel and Despont’s overall approach to light and space. They are tranquil retreats where an atmosphere of luxury and comfort extends throughout.",
    images: [11, 12],
  },
];

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
            <div
              key={section.text}
              className="flex flex-col gap-5"
              id={section.title}
            >
              <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw]">
                {section.title}
              </h1>
              {/* SIDE MENU TO DO */}
              <Button>
                
                <button
                  className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
                >
                  {section.button}
                  <PiPlus size={20} />
                </button>
              </Button>
              <p className="xl:w-[500px]">{section.text}</p>
              {section.images.map((image) => (
                <div
                  className="w-full h-[200px] md:h-[350px] xl:h-[500px] relative"
                  key={image}
                >
                  <Image
                    src={`/images/residences/residences_${image}.avif`}
                    alt=""
                    fill
                  />
                </div>
              ))}
            </div>
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
