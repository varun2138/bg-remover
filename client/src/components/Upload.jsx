import React from "react";
import { BsCloudUploadFill } from "react-icons/bs";
const Upload = () => {
  return (
    <div className="mx-auto flex justify-center items-center flex-col mt-16 sm:mt-10 gap-6  pb-10">
      <h1
        className="flex  flex-col bg-gradient-to-tl from-teal-800 via-blue-800 to-gray-700 bg-clip-text text-transparent text-xl sm:text-2xl font-bold font-sans opacity-85 w-10/12 sm:w-1/2 text-center dark:bg-[conic-gradient(var(--tw-gradient-stops))] dark:from-white
dark:via-stone-500
dark:to-cyan-100"
      >
        Transform your image!
        <span
          className="bg-gradient-to-tl from-stone-400 via-black to-gray-600 bg-clip-text text-transparent dark:bg-[conic-gradient(var(--tw-gradient-stops))] dark:from-white
dark:via-neutral-500
dark:to-cyan-100"
        >
          Upload below to see the magic
        </span>
      </h1>
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
  );
};

export default Upload;
