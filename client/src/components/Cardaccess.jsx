import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Cardaccess = () => {
  return (
    <>
      <div className="flex items-center justify-center py-20  ml-200  text-wrap place-self-center">
        <div className=" relative ">
          <img src={"/images/Mesh.png"} alt="Example" />
        </div>
        <div className="flex items-center justify-center flex-col text-center absolute">
          <div className="font-inter text-[#582066] font-medium pt-5 ">
            Seamless experience
          </div>

          <div className=" flex items-center  font-manrope font-semibold md:text-[62px] text-center text-[38px]  ">
            Unleashing the Next
          </div>
          <div className=" flex items-center  font-manrope font-semibold md:text-[62px] text-center text-[38px]  ">
            Generation of Card
          </div>
          <div className=" flex items-center  font-manrope font-semibold md:text-[62px] text-center text-[38px]  ">
            Solutions
          </div>

          <div className=" flex items-center font-normal md:text-[18px] text-[10px] text-[#6b707a] font-inter">
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere{" "}
            </h1>
          </div>

          <div className=" flex items-center justify-between  font-normal md:text-[18px] text-[10px] text-[#5A6475] font-inter pb-5">
            <h1> webghri nndsik nahuomculpa!</h1>
          </div>
          <div className=" flex items-center justify-center border-2 w-full sm:w-fit py-1 px-3 rounded-md  bg-[#582066] text-white ">
            <button className="">Unlock Your Card &nbsp;</button>
            <ArrowRightIcon className="h-5 w-5" />
          </div>
          <div className="pt-2 font-inter text-[14px] text-[#5A6475]">
            *No Credit Card Required
          </div>
        </div>
      </div>
    </>
  );
};

export default Cardaccess;
