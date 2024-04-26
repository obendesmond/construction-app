import React from "react";

interface PropTypes {
  title: string;
  description: string;
}

const Feature = ({ title, description }: PropTypes) => {
  return (
    <div>
      <h1 className="font-bold text-3xl md:text-[40px] text-Primary">
        {title}
      </h1>
      <p className="mt-2 font-bold text-base md:text-[14px] text-Gray01 max-w-[167px] capitalize">
        {description}
      </p>
    </div>
  );
};

export default Feature;
