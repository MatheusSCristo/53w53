"use client"
import { motion } from "framer-motion";
import Button from "../Button";


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

  export default Menu;