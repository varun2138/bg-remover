import React from "react";
import { BsCloudUploadFill } from "react-icons/bs";
import headerImg from "../assets/header_img.png";
const Header = () => {
  return (
    <div className=" flex justify-center items-center flex-col-reverse sm:flex-row gap-4 px-8">
      <div className=" flex gap-2 flex-col  mt-2 w-full">
        <h1 className=" bg-gradient-to-tl from-gray-600 via-cyan-950 to-black bg-clip-text text-transparent text-2xl sm:text-4xl font-bold w-full sm:w-4/5 font-sans dark:bg-gradient-to-l dark:from-white dark:via-slate-400 dark:to-cyan-400 ">
          Instant, precise, and free background removal for any image.
        </h1>
        <p className="sm:font-semibold opacity-70 sm:w-full sm:pr-4 dark:text-teal-50">
          Effortlessly remove backgrounds from images with precision and speed.
          Perfect for portraits, products, and more—all for free and easy.
        </p>

        <div className="mt-3">
          <input type="file" id="upload" hidden />
          <label
            htmlFor="upload"
            className="bg-gradient-to-r from-cyan-600 to-gray-950 inline-flex gap-3 items-center px-8 py-3 rounded-full cursor-pointer bg-black"
          >
            <BsCloudUploadFill className="text-black text-xl" />
            <p className="text-sm text-white">Upload your image</p>
          </label>
        </div>
      </div>
      <div className=" w-7/12 sm:w-8/12">
        <img
          src={headerImg}
          alt=""
          className=" w-full h-full object-contain "
        />
      </div>
    </div>
  );
};

export default Header;
