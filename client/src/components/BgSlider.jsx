import React, { useState } from "react";
import Image_with_bg from "../assets/with_bg.jpg";
import Image_without_bg from "../assets/bg_none.png";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="mx-auto flex justify-center items-center flex-col mt-16 sm:mt-20 gap-10 sm:gap-20 pb-10">
      <h1 className="bg-gradient-to-tl from-slate-500 via-black to-neutral-700 bg-clip-text text-transparent text-xl sm:text-2xl font-bold font-sans opacity-85 w-10/12 sm:w-1/2 text-center dark:bg-[conic-gradient(var(--tw-gradient-stops))] dark:from-white dark:via-slate-400 dark:to-slate-50">
        Remove backgrounds accurately, preserving every detail in high quality.
      </h1>
      <div className="relative w-11/12 sm:w-1/2 rounded-xl m-auto overflow-hidden">
        <img
          src={Image_with_bg}
          alt="image"
          style={{
            clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)`,
          }}
          className=""
        />
        <img
          src={Image_without_bg}
          alt=""
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          className="absolute top-0 left-0 border-2 bg-rose-50/30 dark:bg-slate-50"
        />

        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={(e) => setSliderPosition(e.target.value)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BgSlider;
