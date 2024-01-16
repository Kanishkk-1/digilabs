import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col text-center">
        <div className=" flex items-center  font-manrope font-semibold md:text-[40px] text-wrap text-[30px] ">
          Unlock Limitless Possibilities With
        </div>
        <div className=" flex items-center  font-manrope font-semibold md:text-[40px]  text-wrap text-[30px] mb-5 ">
          Our New Card Solutions
        </div>
      </div>

      <div className="flex items-center justify-center md:flex-row flex-col pb-20">
        <div className=" flex items-center justify-center border-2 m-1 px-3 py-2 w-full sm:w-fit first:rounded-md  bg-[#582066] text-white ">
          <button className="">Unlock Your Card &nbsp;</button>
          <img src={"/images/credit-card.png"} alt="Example" />
        </div>
        <div className=" flex items-center justify-center border-2  m-2 px-3 py-2 w-full sm:w-fit first:rounded-md  bg-[#EEEFEF] text-[#5A6475] ">
          <button className="">Customer Support &nbsp;</button>
          <img src={"/images/headphones.png"} alt="Example" />
        </div>
      </div>
    </>
  );
}

export default Contact