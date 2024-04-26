import React from "react";
import Logo from "../Logo";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RxInstagramLogo } from "react-icons/rx";

const TopFooter = () => {
  // const FooterEl = () =>

  return (
    <div className=" flex flex-col gap-8 md:flex-row items-center justify-between text-center px-14 xl:px-[100px] pt-[120px] pb-12 md:text-start md:items-start xl:max-w-7xl xl:mx-auto">
      <div className="flex flex-col gap-2 max-w-[400px]">
        <Logo light />
        <div className="flex flex-col gap-7">
          <p className="font-bold text-base text-Gray01">
            we are more than just builders; we are creators of architectural
            marvels. With a passion for excellence and an unwavering commitment
            to quality
          </p>
          <div className="flex flex-row gap-8 justify-center md:justify-start items-center text-Gray01">
            <BiLogoFacebook
              size={24}
              className="hover:text-Secondary cursor-pointer"
            />
            <TiSocialLinkedin
              size={24}
              className="hover:text-Secondary cursor-pointer"
            />
            <RxInstagramLogo
              size={24}
              className="hover:text-Secondary cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-auto flex flex-col sm:flex-row gap-8 lg:gap-[144px] justify-between">
        <div className="flex flex-col gap-[26px]">
          <p className="font-bold text-Primary text-xl ">Company</p>
          <div className="flex flex-col gap-3 text-base font-bold text-Gray01">
            <p className="hover:text-Secondary cursor-pointer">About</p>
            <p className="hover:text-Secondary cursor-pointer">Projects</p>
            <p className="hover:text-Secondary cursor-pointer">Services</p>
            <p className="hover:text-Secondary cursor-pointer">Our Team</p>
          </div>
        </div>
        <div className="flex flex-col gap-[26px]">
          <p className="font-bold text-Primary text-xl ">Company</p>
          <div className="flex flex-col gap-3 text-base font-bold text-Gray01">
            <p className="hover:text-Secondary cursor-pointer">About</p>
            <p className="hover:text-Secondary cursor-pointer">Projects</p>
            <p className="hover:text-Secondary cursor-pointer">Services</p>
            <p className="hover:text-Secondary cursor-pointer">Our Team</p>
          </div>
        </div>
        <div className="flex flex-col gap-[26px]">
          <p className="font-bold text-Primary text-xl ">Company</p>
          <div className="flex flex-col gap-3 text-base font-bold text-Gray01">
            <p className="hover:text-Secondary cursor-pointer">About</p>
            <p className="hover:text-Secondary cursor-pointer">Projects</p>
            <p className="hover:text-Secondary cursor-pointer">Services</p>
            <p className="hover:text-Secondary cursor-pointer">Our Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooter;
