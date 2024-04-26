import React from "react";

interface PropTypes {
  text: string;
}

const Tag = ({ text, ...rest }: PropTypes) => {
  return (
    <button
      {...rest}
      className="px-3 py-[6px] rounded-2xl border-[1px] border-Gray01 text-Gray01 focus:border-Primary focus:text-Primary text-[14px] font-bold capitalize"
    >
      {text}
    </button>
  );
};

export default Tag;
