import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" relative w-full min-h-screen bg-white dark:bg-black  ">
      <Navbar />

      <div className="flex-grow">
        <Outlet />
      </div>
      <div className="  ">
        <Footer />
      </div>
    </div>
  );
};

export default App;
