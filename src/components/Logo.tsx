import React from "react";

interface PropTypes {
  light?: boolean;
}

const Logo = ({ light }: PropTypes) => {
  return (
    <p className="group text-xl font-bold text-White cursor-pointer">
      <span className={`group-hover:text-Secondary ${light && "text-Primary"}`}>
        Urban
      </span>
      <span
        className={`text-Secondary ${
          light ? "group-hover:text-Primary" : "group-hover:text-White"
        }`}
      >
        Rise
      </span>
    </p>
  );
};

export default Logo;
