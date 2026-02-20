import React from "react";
import { ArrowDown } from "lucide-react";

const Button = ({ btnName, showArrow = false }) => {
  return (
    <button className="text-black bg-white max-sm:py-2 max-sm:px-3  py-2 px-4 rounded-lg font-medium flex gap-2 items-center hover:cursor-pointer hover:bg-primary-orange">
      <span className="font-medium text-lg max-md:text-sm">{btnName}</span>
      {showArrow && <ArrowDown size={20} />}
    </button>
  );
};

export default Button;
