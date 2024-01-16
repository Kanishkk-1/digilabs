"use client";
import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";




const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useState(true);

  const handleToggleNavbar = () => {
    setNavbarOpen(!NavbarOpen);
  };

  return (
    <>
      <div className="flex  items-center justify-between py-8 border-[#E6E7E9] border-2">
        <div className="md:pl-20  pl-10">
          <img src={"/images/Herologo.png"} alt="Example" />
        </div>
        <div className=" lg:block hidden ">
          <ul className="flex  items-center justify-center  font-inter">
            <li className="pr-3 flex  items-center justify-center">
              <div className="pr-2"> Card Access </div>
              <img src={"/images/chevron-down.jpg"} alt="Example" />
            </li>
            <li className="px-5">Banking</li>
            <li className="px-5">Processing</li>
            <li className="px-5">About</li>
            <li className="px-5">Carrier</li>
            <li className="pl-5">Contact</li>
          </ul>
        </div>
        <div className="flex">
          <div className="lg:pr-20 sm:pr-5">
            <button className="font-inter flex  items-center justify-center rounded-lg bg-[#F1F1F2] px-5 py-2 text-[#5A6475]">
              <div className="pr-5"> Login </div>
              <img src={"/images/login.jpg"} alt="Example" />
            </button>
          </div>
          <div className="lg:hidden mobile-menu pt-2 md:pr-20 pr-11">
            {NavbarOpen ? (
              <button onClick={handleToggleNavbar} className="">
                <Bars3Icon className="h-7 w-7" />
              </button>
            ) : (
              <button onClick={handleToggleNavbar} className=" ">
                <XMarkIcon className="h-7 w-7" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#E6E7E9] z-10 bg-opacity-100 ">
        {NavbarOpen ? null : <MenuOverlay />}
      </div>
    </>
  );
};

export default Navbar;
