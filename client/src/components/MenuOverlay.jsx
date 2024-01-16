import React from "react";

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col items-center py-4 ">
      <li className=" flex  items-center justify-center py-5">
        <div className="pr-2"> Card Access </div>
        <img src={"/images/chevron-down.jpg"} alt="Example" />
      </li>
      <li className="py-5">Banking</li>
      <li className="py-5">Processing</li>
      <li className="py-5">About</li>
      <li className="py-5">Carrier</li>
      <li className="py-5">Contact</li>
    </ul>
  );
};

export default MenuOverlay;
