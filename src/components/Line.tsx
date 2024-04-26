import React from "react";

interface PropTypes {
  primary?: boolean;
  className?: string;
}

const Line = ({ primary, className }: PropTypes) => {
  return (
    <div
      className={`border-4 w-[88px] ${
        primary ? "border-Primary" : "border-Secondary"
      } ${className}`}
    />
  );
};

export default Line;
