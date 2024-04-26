import React from "react";
import { IconType } from "react-icons";

interface PropTypes {
  Icon: IconType;
  className?: string;
}

const IconButton = ({ Icon, className }: PropTypes) => {
  return (
    <button
      className={`bg-Secondary bg-opacity-5 text-Secondary px-6 py-[6px] border-[1px] border-Secondary rounded-[4px] hover:border-Primary hover:bg-opacity-5 hover:bg-Primary hover:text-Primary transition ease-in-out duration-[40] flex justify-center items-center ${className}`}
    >
      <Icon size={24} />
    </button>
  );
};

export default IconButton;
