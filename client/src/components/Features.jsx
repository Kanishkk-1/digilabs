import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Features = () => {
  return (
    <>
      <div className="flex items-center justify-center text-center flex-col p-20">
        <div className=" flex items-center  font-manrope font-semibold md:text-[40px] text-wrap text-[25px] ">
          Elevating Card Programs with
        </div>
        <div className=" flex items-center  font-manrope font-semibold md:text-[40px]  text-wrap text-[25px] mb-5 ">
          Cutting-Edge Technology
        </div>

        <div className=" flex items-center font-normal text-[10px] md:text-[18px] text-wrap text-[#6b707a] font-inter text-center">
          <h1>
            consectetur adipisicing elit Facere Lorem, ipsum dolor sit amet{" "}
          </h1>
        </div>

        <div className=" flex items-center justify-between  font-normal text-[10px] md:text-[18px] text-wrap text-[#5A6475] font-inter pb-5">
          <h1> webghri nndsik nahuomculpa!</h1>
        </div>

        <div className=" flex items-center justify-center font-semibold text-[10px] md:text-[18px] text-wrap pt-6 px-3 rounded-md text-[#582066] ">
          <button>Compare all Pro features &nbsp;</button>
          <ArrowRightIcon className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-center  justify-center  text-center lg:flex-row flex-col ">
        <div className=" flex items-center justify-center flex-col px-20 font-inter font-medium text-[#5A6475]  py-7 ">
          <img src={"/images/globe.png"} alt="Example" className="pb-3  " />
          <h2 className="pb-3 font-inter font-semibold text-[#121417]">
            Globally Accepted
          </h2>
          Lorem ipsum dolor sit adipisicing uoihn hw8 uiw8uefnb Veniam,
          accusamus cupiditate?
        </div>
        <div className=" flex items-center justify-center flex-col px-20 font-inter font-medium text-[#5A6475]  py-7">
          <img src={"/images/key.png"} alt="Example" className="pb-3  " />
          <h2 className="pb-3 font-inter font-semibold text-[#121417]">
            Biometric Integrated
          </h2>
          Lorem ipsum dolor sit adipisicing uoihn hw8 uiw8uefnb Veniam,
          accusamus cupiditate?
        </div>
        <div className="flex items-center justify-center flex-col px-20 font-inter font-medium text-[#5A6475] py-7">
          <img src={"/images/lock.png"} alt="Example" className="pb-3  " />
          <h2 className="pb-3 font-inter font-semibold text-[#121417]">
            Fully Secured
          </h2>
          Lorem ipsum dolor sit adipisicing uoihn hw8 uiw8uefnb Veniam,
          accusamus cupiditate?
        </div>
      </div>
    </>
  );
}

export default Features