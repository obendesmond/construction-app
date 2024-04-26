import React, { ReactNode } from "react";

interface PropTypes {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionContent = ({ className, children, id }: PropTypes) => {
  return (
    <div
      id={id}
      className={`flex flex-row flex-wrap gap-8 gap-y-14 justify-center md:justify-between xl:max-w-7xl xl:mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionContent;
