import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";
// import image";
import Card from "../components/images/Card.png";

const Featuresfirsthalf = () => {
  return (
    <div>
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

      <div className="flex items-center justify-center md:flex-row flex-col">
        <div>
          <img src={"/images/mobile.png"} className="p-5" alt="Example" />
        </div>
        <div>
          <img src={Card} alt="Description" />
        </div>
      </div>
    </div>
  );
}

export default Featuresfirsthalf