import React from "react";
import aboutImg from "../../assets/aboutImg.png";
import Features from "./Features";
import Line from "../Line";

const AboutSection = () => {
  return (
    <div className="bg-ShadowColor py-28 px-14 xl:px-[120px]">
      <div className="flex flex-col lg:justify-center lg:flex-row items-center  gap-20 xl:justify-between xl:max-w-7xl xl:mx-auto ">
        <img src={aboutImg} alt="about img" />
        <div className="flex flex-col gap-8 items-center text-center lg:items-start lg:text-start">
          <Line primary />
          <h1 className="text-Primary leading-[130%] text-3xl xs:text-[44px] sm:text-5xl font-bold lg:max-w-[581px]">
            Take A Glimpse into Our Construction Voyage
          </h1>
          <p className="text-base font-bold text-Gray01 lg:max-w-[581px] capitalize">
            a trailblazer in the construction industry. Our journey is one of
            passion, dedication, and a relentless pursuit of excellence.
          </p>
          <Features />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
