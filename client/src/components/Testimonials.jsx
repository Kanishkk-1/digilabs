import React from 'react'
import Rating from '../components/images/Rating.png'

const Testimonials = () => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="pb-7 pt-10">
        <img src={"/images/wise.png"} alt="Example" />
      </div>
      <div className=" flex items-center justify-center text-center font-manrope font-semibold md:text-[32px]  text-[15px] ">
        I had the pleasure of experiencing the next generation
      </div>
      <div className=" flex items-center justify-center text-center font-manrope font-semibold md:text-[32px]  text-[15px]  ">
        of card solutions with this incredible product. It's
      </div>
      <div className=" flex items-center justify-center text-center font-manrope font-semibold md:text-[32px]   text-[15px] ">
        refreshing to see such innovation in the financial
      </div>
      <div className=" flex items-center justify-center text-center font-manrope font-semibold md:text-[32px]   text-[15px] pb-5">
        industry.
      </div>
      <div className="flex items-center justify-center flex-col">
        <img src={"/images/avatar.png"} alt="Example" className="pb-3" />
        <h2 className="font-inter text-[16px] font-medium">Nick Babich</h2>
        <h2 className="text-[14px] pb-2">Lead Designer</h2>
        <img src={Rating} alt="Description" className='pb-20' />
      </div>
    </div>
  );
}

export default Testimonials