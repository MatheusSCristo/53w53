import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import Button from "../../Button";

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
    <motion.aside
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0, transition: { duration: 1,ease:"easeOut" } }}
      transition={{ duration: 0.5 }}
      className="z-10 origin-right gap-12 bg-brown h-screen w-screen md:w-3/5 xl:w-2/5 fixed right-0 top-0 flex flex-col xl:justify-between xl:flex-row-reverse p-5 flex-1"
    >
      <div className="flex xl:w-fit justify-between xl:flex-col 0 w-fit ">
        <motion.button
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="z-40 xl:block text-white cursor-pointer active:scale-105 transition duration-300 hover:scale-105 duration-300 transition "
          onClick={closeMenu}
        >
          Close
        </motion.button>
        <Link
          href={"/inquire"}
          className="hidden xl:block underline-offset-4 underline text-white hover:scale-105 duration-300 transition"
        >
          Inquire
        </Link>
      </div>
      <div className="flex flex-col w-fit justify-between flex-1">
        <ul className="text-4xl xl:text-5xl">
          {options.map((item, index) => (
            <div className="overflow-hidden h-fit cursor-pointer" key={item}>
              <motion.li
                initial={{ y: "150%" }}
                animate={{ y: 0, rotateX: 0 }}
                exit={{
                  y: "150%",
                  x: "500%",
                  transition: { duration: 0.1, delay: 0.1 + index * 0.05,ease:"easeInOut" },
                }}
                transition={{ duration: 0.5 + index * 0.1, ease: "easeInOut" }}
                onMouseEnter={() => setIsHovering(item)}
                onMouseOut={() => setIsHovering(null)}
              >
                <a
                  href={`/${
                    item.toLowerCase() === "homepage" ? "" : item.toLowerCase()
                  }`}
                  className={` uppercase w-fit  ${
                    isHovering != null && isHovering != item
                      ? "text-[#cacaca]"
                      : "text-white"
                  } transition duration-300  `}
                >
                  {item}
                </a>
              </motion.li>
            </div>
          ))}
          <div className="overflow-hidden h-fit my-10">
            <motion.li
              className={`text-white uppercase w-fit   ${
                isHovering != null &&
                isHovering != "availability" &&
                "text-[#cacaca]"
              } transition duration-300  `}
              initial={{ y: "150%" }}
              animate={{ y: 0, rotateX: 0 }}
              exit={{ y: "150%", x: "500%", transition: { duration: 0.1 } }}
              transition={{
                duration: 0.6 + options.length * 0.02,
                ease: "easeInOut",
              }}
              onMouseEnter={() => setIsHovering("availability")}
              onMouseOut={() => setIsHovering(null)}
            >
              Availability
            </motion.li>
          </div>
        </ul>
        <ul className="flex gap-5 w-full border-b-white">
          {bottomOptions.map((item, index) => (
            <div className="overflow-x-hidden " key={item}>
              <Button>
                <motion.li
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "-100%",
                    opacity: 0,
                    transition: { duration: 0.1, delay: 0.4 + index * 0.02},
                  }}
                  transition={{
                    duration: 0.7 + index * 0.01,
                    delay: 0.5 + index * 0.01,
                  }}
                  className="text-white relative "
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleRemoveHover(index)}
                >
                  {item}
                </motion.li>
              </Button>
            </div>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default SideMenu;
