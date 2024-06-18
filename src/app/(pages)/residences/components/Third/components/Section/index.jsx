import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import Button from "../../../../../../components/Button";

const Menu = ({ section, close }) => {
  return (
    <motion.aside
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0, transition: { duration: 1, ease: "easeOut" } }}
      transition={{ duration: 0.5 }}
      className="bg-brown flex flex-col gap-12 fixed h-full top-0 right-0 z-40 w-full md:w-3/4 xl:w-1/2 p-4 overflow-y-scroll overflow-x-hidden origin-right"
    >
      <motion.div
        initial={{ x: "150%" }}
        animate={{ x: 0 }}
        exit={{
          x: "500%",
          transition: {
            duration: 0.5,
            ease: "easeInOut",
          },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex justify-between"
      >
        <h1 className="text-white uppercase font-semibold text-[1.5rem]">
          {section.title.substring(0, section.title.length - 1)} FEATURES
        </h1>
        <Button>
          <button className="text-white" onClick={close}>
            Close
          </button>
        </Button>
      </motion.div>
      <ul>
        {section.features.map((feature, index) => (
          <motion.div
            initial={{ x: "150%" }}
            animate={{ x: 0 }}
            exit={{
              x: "500%",
              transition: {
                duration: 0.5,
                delay: 0.1 + index * 0.05,
                ease: "easeInOut",
              },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.2 + index * 0.1,
            }}
          >
            <hr className="border-[#ffffff33]" />
            <li key={feature} className="text-white font-semibold py-4 text-[1.3em]  leading-[1em]">
              {feature}
            </li>
          </motion.div>
        ))}
      </ul>
    </motion.aside>
  );
};

const Section = ({ section }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {menuIsOpen && (
          <Menu section={section} close={() => setMenuIsOpen(false)} />
        )}
      </AnimatePresence>
      <div
        key={section.text}
        className="flex flex-col gap-5"
        id={section.title}
      >
        <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw]">
          {section.title}
        </h1>
        <Button>
          <button
            onClick={() => setMenuIsOpen(true)}
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
    </>
  );
};

export default Section;
