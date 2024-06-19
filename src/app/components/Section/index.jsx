"use client"
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { PiPlus } from "react-icons/pi";
import Button from "../Button";
import Menu from "../Menu";

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
              src={image}
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
