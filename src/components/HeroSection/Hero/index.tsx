import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";

const Hero = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row justify-between gap-20 lg:gap-[21px] px-14 xl:max-w-7xl xl:mx-auto pt-[72px] pb-32 overflow-hidden">
      <LeftHero />
      <RightHero />
    </div>
  );
};

export default Hero;
