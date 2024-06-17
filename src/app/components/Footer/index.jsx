"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Button from "../Button";

const options = [
  "Design",
  "Residences",
  "Amenities",
  "Neighborhood",
  "Gallery",
  "Availability",
  "Team",
  "Instagram",
  "Facebook",
];

const Footer = () => {
  return (
    <footer className="bg-brown  flex flex-col text-white px-4">
      <div className="flex py-10  relative">
        <div className="w-1/2">
          <Link
            className="text-white w-[200px] inline-block text-xl font-semibold uppercase"
            href="https://www.google.com/maps/place/53+West+53/@40.7629464,-73.9868275,16z/data=!3m1!5s0x89c258fbd5f614c7:0x7edf0a3a9a0193a5!4m10!1m2!2m1!1s53+west+53rd+street!3m6!1s0x89c258e567caa2e5:0x18ec9f018ac08398!8m2!3d40.7617336!4d-73.9781123!15sChM1MyB3ZXN0IDUzcmQgc3RyZWV0kgETY29uZG9taW5pdW1fY29tcGxleOABAA!16s%2Fm%2F03g_x82?entry=ttu"
          >
            SALES GALLERY 53 WEST 53RD STREET NY 10019
          </Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <Link
            className="text-white font-bold text-xl"
            href="tel:212-688-5300"
          >
            212-688-5300
          </Link>
          <Link
            className="text-white font-bold text-xl"
            href="mailto:info@53west53.com"
          >
            info@53west53.com
          </Link>
        </div>
      </div>
      <hr className=" border-[#ffffff33] bg-[#ffffff33] mx-4" />
      <div className="flex py-10  relative ">
        <div className="w-1/2">
          <div className="flex flex-col gap-20">
            <h3 className="text-white">PRESS</h3>
            <Link
              className="underline text-white w-[200px] inline-block text-xl font-bold underline-offset-8"
              href="/press"
            >
              See All Press
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 ">
          <p className="text-white text-xl w-[500px]">
            “The dramatic 82-storey structure dominates the skyline, elegantly
            asserting its presence; and stepping inside, the experience is no
            less impressive.”
          </p>
          <h4 className="text-white  text-xl">— Wallpaper</h4>
        </div>
      </div>
      <hr className=" border-[#ffffff33] bg-[#ffffff33] mx-4" />
      <div className="flex py-10  relative ">
        <div className="w-1/2">
          <h3 className="text-white font-bold text-xl">INFO</h3>
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-2 flex-1">
          {options.map((option) => (
            <Button key={option}>
              <Link
                href={`/${option.toLowerCase()}`}
                className="text-xl text-white "
              >
                {option}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 py-5">
        <div className="w-full h-[200px] relative">
          <Image src={"/images/logo.svg"} fill alt="Logo" />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-2 text-lg">
            <span className="text-white">Copyright © 53west53</span>
            <span className="text-white">/</span>
            <Button>
              <button className="text-white bg-transparent border-0">
                Legal notice
              </button>
            </Button>
          </div>
          <Button>
            <ScrollLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              className="text-white bg-transparent border-0 cursor-pointer"
            >
              Back to top
            </ScrollLink>
          </Button>
          <div className="flex gap-2 text-lg">
            <Button>
              <Link
                href="https://dos.ny.gov/system/files/documents/2021/08/fairhousingnotice.pdf"
                className="text-white"
              >
                Fair Housing Notice
              </Link>
            </Button>
            <span className="text-white">/</span>
            <Button>
              <Link
                href={
                  "https://static-ind-elliman-production.gtsstatic.net/resources/v_4_19_0_454/siteresources/commonresources/pdf/standard%20operating%20procedures.pdf"
                }
                className="text-white bg-transparent border-0"
              >
                Standart Operating Procedures
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
