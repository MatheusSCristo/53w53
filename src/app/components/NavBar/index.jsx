"use client";
import { useScroll } from "framer-motion";
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
  const [menuIsOpen,setMenuIsOpen]=useState(true);

  useEffect(() => {
    const unsubscribe = scrollY.on(("change"),(latest) => {
      setBgColor(latest > 300 ? "bg-white" : "bg-transparent");
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <nav className={`fixed top-0 w-full flex justify-between text-white p-5 font-semibold ${bgColor}}`}>
      <button onClick={()=>setMenuIsOpen(!menuIsOpen)} className="block md:hidden text-lg">Menu</button>
      <ul className="capitalize gap-5 hidden md:flex">
        {leftOptions.map((item) => (
          <Link
            href={item}
            key={item}
            className={`${path.split("/")[1] == item && "underline"} underline-offset-8`}
          >
            {item}
          </Link>
        ))}
      </ul>
      <Link href={"/"} className="text-2xl md:text-3xl 2xl:text-5xl">
        53 WEST 53
      </Link>
      <ul className="capitalize gap-5 hidden md:flex">
        {rightOptions.map((item) => (
          <Link
            href={item}
            key={item}
            className={`${path.split("/")[1] == item && "underline"} underline-offset-8`}
          >
            {item}
          </Link>
        ))}
      </ul>
      <Link href={"/inquire"} className="underline-offset-4 underline text-lg">Inquire</Link>
      {menuIsOpen && <SideMenu closeMenu={()=>setMenuIsOpen(!menuIsOpen)}/>}
    </nav>
  );
};

export default NavBar;
