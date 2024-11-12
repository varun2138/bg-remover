import React from "react";
import logo from "../assets/bg.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="  mt-20 mx-6 sm:mx-40 flex flex-wrap gap-3 items-center   sm:gap-4">
      <img src={logo} className="w-24 sm:w-32" alt="" />
      <p className="text-sm flex gap-1 dark:text-white">
        | All rights reserved{" "}
        <span className="hidden sm:block dark:text-teal-50">
          {" "}
          copyright @bg-remover
        </span>
      </p>

      <div className="flex items-center gap-1">
        <FaGithub className="text-sm text-stone-800 dark:text-stone-300 sm:text-2xl " />
        <FaLinkedin className="text-sm text-blue-500 sm:text-2xl " />
        <FaSquareXTwitter className="text-sm sm:text-2xl dark:text-stone-50 " />
      </div>
    </div>
  );
};

export default Footer;
