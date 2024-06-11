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
    const unsubscribe = scrollY.on("change", (latest) => {
      setBgColor(latest > 300 ? "bg-white" : "bg-transparent");
      setScrolled(latest > 300);
      if (latest > 300 && height > 1024) {
        handleScrollTitleAnimation();
      }
      if (latest <= 300 && height > 1024) {
        handleScrollTitleAnimationEnd();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ height: "100vh" }}
        animate={{ height: "80px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`fixed top-0 w-full flex justify-between items-center text-white p-5 font-semibold ${bgColor} transition duration-800 h-[80px] ${
          menuIsOpen && "md:w-full w-fit md:left-0 right-0 md:z-0 z-30 "
        } `}
      >
        {!menuIsOpen && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            transition={{ times: [0, 0.95, 1], duration: 1.5 }}
            onClick={() => setMenuIsOpen(true)}
            className={`block  text-lg ${
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
              <Link
                href={item}
                key={item}
                className={`${
                  path.split("/")[1] == item && "underline"
                } underline-offset-8 text-white text-xl`}
              >
                {item}
              </Link>
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
              } text-2xl xl:text-3xl 2xl:text-4xl text-nowrap`}
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
              <Link
                href={item}
                key={item}
                className={`${
                  path.split("/")[1] == item && "underline"
                } underline-offset-8 text-white text-xl`}
              >
                {item}
              </Link>
            ))}
          </motion.ul>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 1] }}
          transition={{ times: [0, 0.95, 1], duration: 1.5 }}
          className={`underline-offset-4 underline text-lg xl:hidden ${
            menuIsOpen && "absolute right-5"
          } z-10 ${scrolled ? "text-brown" : "text-white"}`}
        >
          <Link href={"/inquire"}>Inquire</Link>
        </motion.div>
      </motion.nav>
      <AnimatePresence>
        {menuIsOpen && <SideMenu closeMenu={() => setMenuIsOpen()} />}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
