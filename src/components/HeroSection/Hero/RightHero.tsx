import React from "react";
import shape from "../../../assets/shape.png";
import worker from "../../../assets/worker.png";

const RightHero = () => {
  return (
    <div className="flex flex-col gap-20 mx-auto md:mx-0 lg:block relative w-full md:w-[590px] md:h-[502px]">
      {/* circle */}
      <div className="w-[26px] h-[26px] rounded-full bg-Gray05 opacity-20 m-auto lg:absolute -top-10 -right-2 md:-top-4 md:-right-5"></div>
      {/* square */}
      <div className="md:w-[350px] h-[350px] bg-Secondary rounded-3xl"></div>
      <img
        src={worker}
        alt="worker"
        className="md:absolute -mt-[300px] md:mt-0 top-10 left-6  lg:top-8 md:top-32 md:left-20 z-30"
      />
      {/* count */}
      <div className="md:absolute z-40 bottom-0 md:bottom-4 -right-5 bg-Primary border-4 border-Secondary rounded-xl px-5 lg:px-11 py-5 text-center">
        <p className="text-bold text-White text-3xl lg:text-[52px]">200+</p>
        <p className="text-White font-bold text-xl lg:mt-2">
          Capable Engineers
        </p>
      </div>
      {/* shape */}
      <img
        src={shape}
        alt="shape"
        className="hidden lg:block absolute left-0 bottom-0 md:bottom-16"
      />
    </div>
  );
};

export default RightHero;
