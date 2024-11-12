import React from "react";
import logo from "../assets/lo.png";
import { FaRupeeSign } from "react-icons/fa";
const data = [
  {
    id: 1,
    title: "Basic",
    desc: "Best for personal use",
    pay: "700",
    credits: "100",
  },
  {
    id: 2,
    title: "Advanced",
    desc: "Best for business use",
    pay: "1750",
    credits: "500",
  },
  {
    id: 1,
    title: "Business",
    desc: "Best for enterprise use",
    pay: "6750",
    credits: "5000",
  },
];
const Credits = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-col gap-4 ">
        <p className="font-semibold px-6 py-1 dark:text-teal-50 border border-gray-500 rounded-full">
          Our Plans
        </p>
        <h1 className="text-xl px-12 text-center sm:px-0 sm:text-2xl font-semibold dark:text-teal-200">
          Choose the plan that's right for you
        </h1>
        <div className="cards flex  flex-col sm:flex-row gap-6  ">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col px-2 py-8  border w-60  gap-4 hover:scale-105 transition-all duration-500 shadow-md shadow-[rgba(0,0,0,0.2)] rounded-md   dark:border-gray-400 "
            >
              <div className="flex flex-col gap-1">
                <img src={logo} alt="" className="w-14 h-14" />
                <h3 className="text-lg font-semibold dark:text-teal-50 ">
                  {item.title} <br />
                  <span className="text-base opacity-70  ">{item.desc}</span>
                </h3>
              </div>
              <div className="flex items-center ">
                <FaRupeeSign className="dark:text-cyan-50 " />
                <p className="text-2xl font-semibold dark:text-cyan-100  ">
                  {item.pay}
                </p>
                <span className=" dark:text-stone-400">
                  /{item.credits}credits
                </span>
              </div>
              <div className="px-2">
                <button className="  w-full bg-black dark:bg-green-900 text-white flex justify-center items-center rounded-lg py-1 ">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Credits;
