import React from "react";
import CTAButton from "../../CTAButton";

const LeftHero = () => {
  return (
    <div className="flex flex-col gap-8 text-center lg:text-start">
      <p
        id="leadingSpaced"
        className="font-bold text-5xl leading-[130%] md:text-7xl text-White lg:max-w-[589px]"
      >
        Crafting Architectural Wonders
      </p>
      <p className="font-bold text-base text-Gray03 lg:max-w-[489px]">
        Your Ideas & Dreams Are Transformed By Us Into Long-Lasting Engineered
        Buildings.
      </p>
      <CTAButton />
      <p className="font-bold text-base text-Gray01">
        <span className="text-Tertiary">*</span> All Our Projects Are Curated By
        Experts.
      </p>
    </div>
  );
};

export default LeftHero;
