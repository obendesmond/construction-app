import React, { ReactNode } from "react";

interface PropTypes {
  className?: string;
  children: ReactNode;
}

const Section = ({ children, className }: PropTypes) => {
  return (
    <div
      className={`px-14 xl:px-[100px] pt-32 pb-[152px] bg-White space-y-16 ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
