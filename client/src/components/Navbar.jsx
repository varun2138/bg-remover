import React from "react";
import logo from "../assets/bg.png";
import logo1 from "../assets/lo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { theme, toggleTheme } = useAppContext();
  return (
    <div className="flex items-center justify-between mx-6  lg:mx-40 gap-3 sm:gap-0 my-4 sm:my-0">
      <div className=" hidden sm:block w-28 h-28 sm:w-40 sm:h-40  ">
        <Link to="/">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </Link>{" "}
      </div>
      <div className="sm:hidden w-16 h-16   ">
        <Link to="/">
          <img
            src={logo1}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>{" "}
      </div>

      <div className="flex mr-6 items-center gap-2 sm:gap-4">
        {isSignedIn ? (
          <div>
            <UserButton className="w-40 h-40" />
          </div>
        ) : (
          <button
            onClick={() => openSignIn({})}
            className=" flex  items-center  gap-3  w-36 sm:w-40    px-2 sm:px-6 py-2 rounded-xl bg-black text-teal-100 font-semibold capitalize dark:bg-gradient-to-r dark:from-gray-100 dark:via-gray-300 dark:to-gray-500"
          >
            <p className="text-sm dark:text-black ">get started</p>
            <FaArrowRightLong className="text-white dark:text-black" />
          </button>
        )}

        <button className="text-black dark:text-white" onClick={toggleTheme}>
          {theme === "dark" ? (
            <GoSun className="text-xl sm:text-2xl text-yellow-100" />
          ) : (
            <FaMoon className="text-xl sm:2xl" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
