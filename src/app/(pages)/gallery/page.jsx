"use client";
import Image from "next/image";
import { Suspense, useState } from "react";

const design = [
  "design/design_01.avif",
  "design/design_02.avif",
  "design/design_03.avif",
  "design/design_04.avif",
  "design/design_05.avif",
  "design/design_06.avif",
  "design/design_07.avif",
  "design/design_08.avif",
  "design/design_09.avif",
  "design/design_10.avif",
  "design/design_11.avif",
  "design/design_12.avif",
  "design/design_13.avif",
  "design/design_14.avif",
  "design/design_15.avif",
];
const residences = [
  "residences/residences_1.avif",
  "residences/residences_2.avif",
  "residences/residences_3.avif",
  "residences/residences_4.avif",
  "residences/residences_5.avif",
  "residences/residences_6.avif",
  "residences/residences_7.avif",
  "residences/residences_8.avif",
  "residences/residences_9.avif",
  "residences/residences_10.avif",
  "residences/residences_11.avif",
  "residences/residences_12.avif",
  "residences/residences_13.avif",
  "residences/residences_14.avif",
];
const penthouse = [
  "penthouse/penthouse_01.avif",
  "penthouse/penthouse_02.avif",
  "penthouse/penthouse_03.avif",
  "penthouse/penthouse_04.avif",
  "penthouse/penthouse_05.avif",
  "penthouse/penthouse_06.avif",
  "penthouse/penthouse_07.avif",
  "penthouse/penthouse_08.avif",
  "penthouse/penthouse_09.avif",
];
const amenities = [
  "amenities/amenities_1.avif",
  "amenities/amenities_2.avif",
  "amenities/amenities_3.avif",
  "amenities/amenities_4.avif",
  "amenities/amenities_5.avif",
  "amenities/amenities_6.avif",
];
const all = design
  .concat(residences, penthouse, amenities)
  .sort(() => Math.random() - 0.5);

const images = {
  ALL: all,
  DESIGN: design,
  RESIDENCES: residences,
  AMENITIES: amenities,
};

const options = ["ALL", "DESIGN", "RESIDENCES", "AMENITIES"];

const Gallery = () => {
  const [selectedOption, setSelectedOption] = useState("ALL");
  return (
    <main className="p-4">
      <div className="mt-[100px]">
        <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] mb-[100px]">
          GALLERY
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            {options.map((item) => (
              <span key={item}
                className={`${
                  selectedOption == item ? "opacity-1" : "opacity-[0.6]"
                } text-xl font-semibold cursor-pointer`}
                onClick={() => setSelectedOption(item)}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 ">
            <div className="flex flex-col gap-5">
              {images[selectedOption]
                .slice(0, images[selectedOption].length / 3)
                .map((item) => (
                  <Suspense fallback={<span>...</span>} key={item}>
                    <div className={`relative h-[500px] w-full `}>
                      <Image
                        src={`/images/${item}`}
                        layout="fill"
                        className="object-cover"
                        alt="Image"
                      />
                    </div>
                  </Suspense>
                ))}
            </div>
            <div className="flex flex-col gap-5">
              {images[selectedOption]
                .slice(
                  images[selectedOption].length / 3,
                  (2 * images[selectedOption].length) / 3
                )
                .map((item) => (
                  <Suspense fallback={<span>...</span>} key={item}>
                    <div className={`relative h-[300px] w-full `}>
                      <Image
                        src={`/images/${item}`}
                        layout="fill"
                        className="object-cover"
                        alt="Image"
                      />
                    </div>
                  </Suspense>
                ))}
            </div>
            <div className="flex flex-col gap-5">
              {images[selectedOption]
                .slice((2 * images[selectedOption].length) / 3)
                .map((item) => (
                  <Suspense fallback={<span>...</span>} key={item}>
                    <div className={`relative h-[400px] w-full `}>
                      <Image
                        src={`/images/${item}`}
                        layout="fill"
                        className="object-cover"
                        alt="Image"
                      />
                    </div>
                  </Suspense>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
