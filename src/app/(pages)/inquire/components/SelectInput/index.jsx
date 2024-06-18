"use client"
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const SelectInput = ({ select, setValue,field }) => {
  const [open, setIsOpen] = useState(false);
  const [selected, setSelected] = useState();

  return (
    <div className="flex flex-col border-t-[1px] border-b-[#8a6c6033] p-2 py-4 xl:p-4 gap-2 flex-1 ">
      <div className="flex justify-between">
        <span className="xl:text-xl font-semibold">{select.field}</span>
        <FaArrowUp
          size={20}
          onClick={() => setIsOpen((prevState) => !prevState)}
          className={`cursor-pointer ${
            open ? "rotate-0" : "rotate-180"
          } transition duration-500 ease-in-out text-brown`}
        />
      </div>
      <div className="flex-">
        {open &&
          select.options.map((option) => (
            <Button key={option} clicked={selected}>
              <li
                className="xl:text-lg font-semibold p-0 m-0 block text-brown cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setValue(field,option);
                }}
              >
                {option}
              </li>
            </Button>
          ))}
      </div>
    </div>
  );
};

export default SelectInput;

const Button = ({ children, clicked }) => {
  const controller = useAnimationControls();

  useEffect(() => {
    if (clicked == children.props.children) {
      controller.start(`hover`);
      return;
    }
    controller.start(`exit`);
  }, [clicked]);

  return (
    <div className="flex flex-col gap-2 relative w-fit">
      {children}
      <motion.div
        variants={{
          hover: { scaleX: 1, transformOrigin: "left" },
          initial: { scaleX: 0 },
          exit: { scaleX: 0, transformOrigin: "right" },
        }}
        initial={"initial"}
        animate={controller}
        transition={{ duration: 0.5 }}
        className="absolute left-0 bottom-0 w-full h-[1px] bg-brown"
      />
    </div>
  );
};
