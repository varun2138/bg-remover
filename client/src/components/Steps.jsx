import React from "react";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { FaWindowClose } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
const steps = [
  {
    id: 1,
    heading: "upload image",
    text: "Click the button to upload your image and remove the background instantly!",
    icon: <FaCloudUploadAlt className="text-xl text-cyan-300 " />,
  },
  {
    id: 2,
    heading: "remove background",
    text: "Click the button to upload your image, and let AI remove the background instantly and accurately!",
    icon: <FaWindowClose className="text-xl  text-rose-400" />,
  },
  {
    id: 3,
    heading: "download image",
    text: "Click the button to download your background-free image instantly!",
    icon: <IoCloudDownloadSharp className="text-xl text-green-600 " />,
  },
];

const Steps = () => {
  return (
    <div className="mx-auto flex justify-center items-center flex-col mt-16 sm:mt-10 ">
      <h1 className="bg-gradient-to-tl from-slate-950 via-black to-neutral-800 bg-clip-text text-transparent text-xl sm:text-2xl font-bold font-sans opacity-85 w-10/12 sm:w-1/2 text-center dark:bg-[conic-gradient(var(--tw-gradient-stops))] dark:from-white dark:via-slate-400 dark:to-slate-50 ">
        Follow these simple steps to remove backgrounds in seconds
      </h1>
      <div className="flex   gap-4 sm:gap-2 mt-8 flex-col sm:flex-row w-4/5 sm:w-full   ">
        {steps.map((step) => (
          <div
            key={step.id}
            className="flex flex-col py-4 px-4 rounded-lg   bg-gradient-to-bl from-white to-rose-50  shadow-md"
          >
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-2xl bg-black flex justify-center items-center">
                {step.icon}
              </div>
              <h3 className="text-base uppercase font-semibold ">
                {step.heading}
              </h3>
            </div>
            <p className="mt-2 text-sm opacity-80 font-sans dark:opacity-90">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
