import React, { ReactNode } from "react";
import Line from "./Line";
import Button from "./Button";

interface PropTypes {
  title: string;
  description: string;
  primary?: boolean;
  tags?: ReactNode;
  img?: string;
  className?: string;
}

const SectionHeader = ({
  title,
  description,
  primary,
  tags,
  img,
  className,
}: PropTypes) => {
  return (
    <div
      className={`flex flex-col items-center text-center md:text-start justify-between md:flex-row md:items-start xl:max-w-7xl xl:mx-auto ${className}`}
    >
      <div className="flex flex-col items-center md:block">
        <Line className="mb-8" />
        <div className="space-y-6">
          <h1
            className={`font-bold text-3xl xs:text-[44px] sm:text-5xl mb-2 capitalize ${
              primary ? "text-White" : " text-Primary"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-base font-bold capitalize ${
              primary ? "text-Gray03" : "text-Gray01"
            }`}
          >
            {description}
          </p>
          {tags}
        </div>
      </div>
      {img ? (
        <img src={img} alt="section img" className="mt-10 md:mt-0" />
      ) : (
        <Button
          text="See All"
          sectionBtn
          className={`mt-4 md:mt-6 ${
            primary &&
            "border-White text-[#B5B5B5] hover:border-Secondary hover:text-Secondary"
          }`}
        />
      )}
    </div>
  );
};

export default SectionHeader;
