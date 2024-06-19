"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PiArrowDownThin, PiArrowRightThin } from "react-icons/pi";
import Button from "../../components/Button";
import residences from "./residences";

const Availability = () => {
  const [metric, setMetric] = useState("feet");
  const [bedSort, setBedSort] = useState("asc");
  const [metricSort, setMetricSort] = useState("asc");
  const [priceSort, setPriceSort] = useState("asc");

  const sortByBed = (a, b) => {
    if (bedSort === "desc") return a.bed - b.bed;
    else return b.bed - a.bed;
  };
  const sortByMetric = (a, b) => {
    if (metricSort === "desc") return a.sqm - b.sqm;
    else return b.sqm - a.sqm;
  };
  const sortByPrice = (a, b) => {
    if (priceSort === "desc") return a.price - b.price;
    else return b.price - a.price;
  };

  useEffect(() => {
    residences.sort(sortByBed);
  }, [bedSort]);

  useEffect(() => {
    residences.sort(sortByMetric);
  }, [metricSort]);
  useEffect(() => {
    residences.sort(sortByPrice);
  }, [priceSort]);

  const getMetricValue = (value) => {
    if (metric == "feet")
      return (value * 10.764).toLocaleString("pt-br").split(",")[0];
    return value;
  };
  return (
    <main className="pt-[78px] p-4 gap-10 flex flex-col">
      <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] py-12 ">
        AVAILABILITY
      </h1>
      <div className="flex gap-2 font-semibold items-center">
        <span>SQ.FT</span>
        <div
          className="border border-brown rounded-[20px] w-[35px] h-[15px] relative cursor-pointer"
          onClick={() =>
            setMetric((prevState) => {
              return prevState === "feet" ? "imperial" : "feet";
            })
          }
        >
          <div
            className={`w-[10px] h-[10px] rounded-[50%] absolute top-1/2 -translate-y-1/2 bg-brown transform  ${
              metric == "feet" ? "translate-x-[20px]" : ""
            }`}
          />
        </div>
        <span>SQ.M</span>
      </div>
      <table className="table-auto min-w-full bg-white ">
        <thead className="text-xl">
          <tr className="font-medium text-brown uppercase tracking-wider text-left">
            <th className="px-6 py-3 w-[500px] ">Residence</th>
            <th
              className="px-6 py-3 w-[400px] "
              onClick={() =>
                setBedSort((prevState) => {
                  return prevState === "asc" ? "desc" : "asc";
                })
              }
            >
              Bed
              <PiArrowDownThin
                size={20}
                className={`${
                  bedSort === "asc" ? "rotate-0" : "rotate-180"
                } duration-300 transition inline-block`}
              />
            </th>
            <th className="px-6 py-3 w-[400px]">Bath</th>
            <th
              className="px-6 py-3 w-[400px] "
              onClick={() =>
                setMetricSort((prevState) => {
                  return prevState === "asc" ? "desc" : "asc";
                })
              }
            >
              {metric == "feet" ? "Sq.FT" : "Sq.M"}
              <PiArrowDownThin
                size={20}
                className={`${
                  metricSort === "asc" ? "rotate-0" : "rotate-180"
                } duration-300 transition inline-block`}
              />
            </th>

            <th className="px-6 py-3 w-[400px]">Exposure</th>
            <th
              className="px-6 py-3 w-[400px] "
              onClick={() =>
                setPriceSort((prevState) => {
                  return prevState === "asc" ? "desc" : "asc";
                })
              }
            >
                PRICE
              <PiArrowDownThin
                size={20}
                className={`${
                  priceSort === "asc" ? "rotate-0" : "rotate-180"
                } duration-300 transition inline-block`}
              />
            </th>
            <th className="px-6 py-3 w-[400px]">Est. Monthly Common Charges</th>
            <th className="px-6 py-3 w-[400px]">Est. Monthly Real Estate Taxes</th>
            <th className="px-6 py-3 w-[400px]">Floor Plan</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#8a6c6033]">
          {residences.map((residence) => (
            <tr className="font-semibold text-brown uppercase tracking-wider text-left" key={residence.unit}>
              <td className="px-6 py-4 whitespace-nowrap">{residence.unit}</td>
              <td className="px-6 py-4 whitespace-nowrap">{residence.bed}</td>
              <td className="px-6 py-4 whitespace-nowrap">{residence.bath}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {getMetricValue(residence.sqm)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {residence.exposure.join(",")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {"$" + residence.price.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {"$" + residence.estMonthlyCommonCharges.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {"$" + residence.estMonthlyRealEstateTaxes.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap ">
                <Link href={residence.floorPlan} className="hover:underline" target="_blank">
                  FLOOR PLAN
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section>
        <div className="h-[60vh] xl:h-screen flex justify-center items-center flex-col gap-10">
          <h1 className="uppercase text-[10vw] xl:text-[8vw] leading-[8vw] text-center ">
            EXPERIENCE THE BUILDING
          </h1>
          <Button>
            <Link
              href="/inquire"
              className="cursor-pointer 2xl:text-2xl border-0 border-brown uppercase border-b-[1px] flex gap-2 items-center font-semibold gap-[40px] text-nowrap"
            >
              SCHEDULE A PRIVATE APPOINTMENT
              <PiArrowRightThin size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Availability;
