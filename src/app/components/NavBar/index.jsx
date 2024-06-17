"use client";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../Button";
import SideMenu from "./SideMenu";

const leftOptions = ["design", "residences", "penthouse", "amenities"];
const rightOptions = ["neighborhood", "gallery", "availability", "inquire"];

const NavBar = () => {
  const path = usePathname();
  const { scrollY } = useScroll();
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controller = useAnimationControls();

  const handleScrollTitleAnimation = () => {
    controller.start("titleStart");
  };

  const handleScrollTitleAnimationEnd = () => {
    controller.start("nav");
  };

  useEffect(() => {
    const height = window.innerWidth;

    const handleChange = (latest) => {
      if (latest > 300 && !scrolled) {
        setBgColor("bg-white");
        setScrolled(true);
        if (height > 1024) handleScrollTitleAnimation();
      } else if (latest <= 300 && scrolled) {
        setScrolled(false);
        setBgColor("bg-transparent");

        if (height > 1024) handleScrollTitleAnimationEnd();
      }
    };
    const unsubscribe = scrollY.on("change", handleChange);
    return () => unsubscribe();
  }, [scrolled]);

  return (
    <>
      <motion.nav
        initial={{ height: "100vh" }}
        animate={{ height: "80px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`z-10 fixed top-0 w-full flex justify-between items-center  p-4 font-semibold ${bgColor} transition duration-800 h-[80px] ${
          menuIsOpen && "md:w-full w-fit md:left-0 right-0 md:z-0 z-30 "
        } `}
      >
        {!menuIsOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            transition={{ times: [0, 0.95, 1], duration: 1 }}
            onClick={() => setMenuIsOpen(true)}
            className={`text-lg ${
              scrolled
                ? "text-brown xl:block xl:fixed xl:right-5"
                : "text-white xl:hidden"
            }`}
          >
            Menu
          </motion.button>
        )}
        {!scrolled && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            transition={{ times: [0, 0.95, 1], duration: 1.5 }}
            className="capitalize gap-5 hidden xl:flex "
          >
            {leftOptions.map((item) => (
              <Button key={item}>
                <Link
                  href={item}
                  className={`${
                    path.split("/")[1] == item && "underline"
                  } underline-offset-8 text-white text-md`}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </motion.ul>
        )}
        {!menuIsOpen && (
          <motion.div
            variants={{
              nav: {
                position: "absolute",
                left: "50%",
                translateX: "-50%",
              },
              titleStart: {
                position: "absolute",
                left: "10px",
                translateX: "0%",
                opacity: [1, 0, 0, 1],
              },
            }}
            initial={{ position: "static" }}
            transition={{ duration: 1, times: [0, 0.4, 0.7, 1] }}
            animate={controller}
          >
            <Link
              href={"/"}
              className={`${
                scrolled ? "text-brown" : "text-white"
              } text-2xl xl:text-3xl 2xl:text-4xl text-nowrap font-light`}
            >
              53 WEST 53
            </Link>
          </motion.div>
        )}
        {!scrolled && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            transition={{ times: [0, 0.95, 1], duration: 1.5 }}
            className="capitalize gap-5 hidden xl:flex"
          >
            {rightOptions.map((item) => (
              <Button key={item}>
                <Link
                  href={item}
                  className={`${
                    path.split("/")[1] == item && "underline"
                  } underline-offset-8 text-white text-md`}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </motion.ul>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          transition={{ times: [0, 0.95, 1], duration: 1.5 }}
          className={`underline-offset-4 underline text-lg xl:hidden ${
            menuIsOpen && "absolute right-5"
          } z-10 `}
        >
          <Link
            href={"/inquire"}
            className={`${scrolled ? "text-brown" : "text-white"}`}
          >
            Inquire
          </Link>
        </motion.div>
      </motion.nav>
      <AnimatePresence>
        {menuIsOpen && <SideMenu closeMenu={() => setMenuIsOpen()} />}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
