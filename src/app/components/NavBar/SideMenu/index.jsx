import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const options = [
  "homepage",
  "design",
  "residences",
  "penthouse",
  "amenities",
  "neighborhood",
  "gallery",
  "team",
];

const variants = [
  {
    hover_0: { scaleX: 1, transformOrigin: "left" },
    initial_0: { scaleX: 0 },
    exit_0: { scaleX: 0, transformOrigin: "right" },
  },
  {
    hover_1: { scaleX: 1, transformOrigin: "left" },
    initial_1: { scaleX: 0 },
    exit_1: { scaleX: 0, transformOrigin: "right" },
  },
  {
    hover_2: { scaleX: 1, transformOrigin: "left" },
    initial_2: { scaleX: 0 },
    exit_2: { scaleX: 0, transformOrigin: "right" },
  },
  {
    hover_3: { scaleX: 1, transformOrigin: "left" },
    initial_3: { scaleX: 0 },
    exit_3: { scaleX: 0, transformOrigin: "right" },
  },
];

const bottomOptions = ["Email", "Phone", "Instagram", "Press"];

const SideMenu = ({ closeMenu }) => {
  const [isHovering, setIsHovering] = useState(null);
  const controller = useAnimationControls();

  const handleHover = (index) => {
    controller.start(`hover_${index}`);
  };

  const handleRemoveHover = (index) => {
    controller.start(`exit_${index}`);
  };

  return (
    <aside className="gap-12 bg-brown h-screen w-screen xl:w-2/5 fixed right-0 top-0 flex flex-col xl:justify-between xl:flex-row-reverse p-3  flex-1">
      <div className="flex xl:w-fit justify-between xl:flex-col ">
        <button
          className="text-white cursor-pointer active:scale-105 transition duration-300 "
          onClick={closeMenu}
        >
          Close
        </button>
        <Link
          href={"/inquire"}
          className="underline-offset-4 underline text-white  "
        >
          Inquire
        </Link>
      </div>
      <div className="flex flex-col w-fit justify-between flex-1">
        <ul className="text-4xl xl:text-5xl">
          {options.map((item) => (
            <li
              key={item}
              className={`text-white uppercase w-fit ${
                isHovering != null && isHovering != item && "text-[#cacaca]"
              } transition duration-300  `}
              onMouseEnter={() => setIsHovering(item)}
              onMouseOut={() => setIsHovering(null)}
            >
              {item}
            </li>
          ))}
          <li
            className={`my-10 text-white uppercase w-fit ${
              isHovering != null &&
              isHovering != "availability" &&
              "text-[#cacaca]"
            } transition duration-300  w-fit `}
            onMouseEnter={() => setIsHovering("availability")}
            onMouseOut={() => setIsHovering(null)}
          >
            Availability
          </li>
        </ul>
        <ul className="flex gap-5 w-full border-b-white">
          {bottomOptions.map((item, index) => (
            <li
              className="text-white relative"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleRemoveHover(index)}
            >
              {item}
              <motion.div
                variants={variants[index]}
                initial={"initial_" + index}
                animate={controller}
                exit={"remove_" + index}
                transition={{ duration: 0.5 }}
                className="absolute left-0 bottom-0 w-full bg-white h-[1px] "
              ></motion.div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
