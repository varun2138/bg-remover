import React from "react";
import Image_with_bg from "../assets/with_bg.jpg";
import Image_without_bg from "../assets/bg_none.png";
const Result = () => {
  return (
    <div className="min-h-[60vh] w-3/4 flex justify-center items-center mx-auto ">
      <div className="flex flex-col items-end gap-3   ">
        <div className="flex flex-col sm:grid sm:grid-cols-2  m-2 items-center justify-center gap-8 sm:gap-0">
          {/* left */}
          <div className="mx-2 flex flex-col gap-2">
            <p className="px-4   font-semibold font-sans opacity-80 dark:text-teal-50">
              Original
            </p>
            <div className="w-80  rounded-md overflow-hidden">
              <img
                src={Image_with_bg}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          {/* right */}
          <div className="mx-2 flex flex-col  gap-2">
            <p className="px-4    font-semibold font-sans opacity-80 dark:text-teal-50">
              image without background
            </p>
            <div className="border dark:border-none w-80  rounded-md overflow-hidden dark:bg-white">
              <img
                src={Image_without_bg}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="sm:mx-2 px-6  flex flex-col sm:flex-row gap-2 w-full sm:w-3/5 ">
          {/* buttons */}
          <button className="dark:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] dark:from-blue-700 dark:via-blue-800 dark:to-gray-900 dark:text-white bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]  from-yellow-50 via-emerald-100 to-yellow-50      text-sm w-full rounded-full p-3">
            {" "}
            try another image
          </button>
          <a
            href=""
            className="bg-gradient-to-r from-slate-900 to-slate-700 text-stone-300 font-semibold w-full border flex justify-center items-center text-sm p-3 rounded-full dark:bg-gradient-to-tr dark:from-stone-600 dark:via-stone-400 dark:to-stone-200 dark:text-black dark:border-none"
          >
            download image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;
