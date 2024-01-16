import React from 'react'
import Social from '../components/images/Social.png'

const Footer = () => {
  return (
    <>
      <div className="flex md:items-center justify-center flex-col border-2 border-solid py-20 px-3 sm:flex-start">
        <div>
          <img
            src={"/images/Herologo.png"}
            alt="Example"
            className="ml-0 mr-500"
          />
        </div>
        <div className=" flex items-center  font-inter font-medium text-wrap text-[#5A6475] pt-5 text-[16px] ">
          Mode UI is a comprehensive design system that empowers
        </div>
        <div className=" flex items-center  font-inter font-medium text-wrap text-[#5A6475]  text-[16px]  ">
          designers and developers to create cohesive and visually stunning
        </div>
        <div className=" flex items-center  font-inter font-medium  text-wrap text-[#5A6475]   text-[16px] ">
          user interfaces across various platforms and devices
        </div>
      </div>

      <div className="flex lg:items-center justify-center lg:flex-row md:flex-wrap py-20 flex-col sm:items-start ">
        <div className="lg:px-20  px-5 ">
          <ul>
            <li className="font-inter  font-bold text-[16px] py-3">Company</li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              About Us.
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Pricing.
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Contact Us
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Features
            </li>
          </ul>
        </div>
        <div className="lg:px-20  px-5">
          <ul>
            <li className="font-inter font-bold text-[16px] py-3">Product</li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Figma Design System
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Ios Kit
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Android Kit
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Wireframe
            </li>
          </ul>
        </div>
        <div className="lg:px-20  px-5">
          <ul>
            <li className="font-inter font-bold text-[16px] py-3">Resources</li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Templates
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Landing Pages
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Documentation
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Comp Library
            </li>
          </ul>
        </div>
        <div className="lg:px-20  px-5">
          <ul>
            <li className="font-inter font-bold text-[16px] py-3">Legal</li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Privacy Policy
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Terms & Conditions
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              {" "}
              Disclaimer
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Affiliate Programs
            </li>
          </ul>
        </div>
        <div className="lg:px-20  px-5">
          <ul>
            <li className="font-inter font-bold text-[16px] py-3">Support</li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Help Centre
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Raise Ticket
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Report
            </li>
            <li className="font-inter font-medium text-[#363C46] py-1">
              Refund
            </li>
          </ul>
        </div>
      </div>

      <div className="flex md:items-center justify-center flex-col sm:items-start">
        <div className="p-4">
          <img src={Social} alt="Description" />
        </div>
        <div className="pb-10 pl-4 font-inter text-[#5A6475]">
          © 2023 Mode UI Inc. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer