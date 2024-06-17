"use client"
import { motion, useAnimationControls } from "framer-motion";

const variants = {
  hover: { scaleX: 1, transformOrigin: "left" },
  initial: { scaleX: 0 },
  exit: { scaleX: 0, transformOrigin: "right" },
};

const Button = ({ children }) => {
  const controller = useAnimationControls();

  const handleHover = () => {
    controller.start(`hover`);
  };

  const handleRemoveHover = () => {
    controller.start(`exit`);
  };

  return (
    <div className="flex flex-col gap-2 relative w-fit">
      <div
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleRemoveHover()}
      >
        {children}
      </div>
      <motion.div
        variants={variants}
        initial={"initial"}
        animate={controller}
        exit={"remove"}
        transition={{ duration: 0.5 }}
        className="absolute left-0 bottom-0 w-full bg-white h-[1px] "
      />
    </div>
  );
};

export default Button;







