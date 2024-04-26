import React from "react";
import { FaChevronRight } from "react-icons/fa6";

interface PropTypes {
  text: string;
  outline?: boolean;
  className?: string;
  sectionBtn?: boolean;
}

const Button = ({ text, outline, className, sectionBtn }: PropTypes) => {
  return sectionBtn ? (
    <button
      className={`flex flex-row items-center gap-4 border-[1px] border-Secondary text-Secondary px-6 py-2 rounded-[4px] text-base font-bold transition ease-in-out delay-[40] md:mt-10 hover:border-Primary hover:text-Primary  ${className}`}
    >
      <p>{text}</p>
      <FaChevronRight />
    </button>
  ) : (
    <button
      className={`border-[1px] border-Secondary px-6 py-3 rounded-[4px] text-base font-bold transition ease-in-out delay-[40] ${
        outline
          ? " text-White hover:text-Primary hover:bg-Secondary "
          : " text-Primary bg-Secondary hover:text-White hover:bg-transparent "
      } ${className} `}
    >
      {text}
    </button>
  );
};

export default Button;
