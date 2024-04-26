import React from "react";
import Button from "../Button";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="flex flex-row px-14 pt-10 pb-6 items-center justify-between xl:max-w-7xl xl:mx-auto">
      <Logo />
      <div className="flex flex-row gap-12 items-center">
        <div className="hidden md:flex flex-row gap-4 items-center text-base text-White">
          <p className="cursor-pointer hover:text-Secondary transition ease-in-out duration-[40]">
            About Us
          </p>
          <p className="cursor-pointer hover:text-Secondary transition ease-in-out duration-[40]">
            Projects
          </p>
          <p className="cursor-pointer hover:text-Secondary transition ease-in-out duration-[40]">
            Services
          </p>
          <p className="cursor-pointer hover:text-Secondary transition ease-in-out duration-[40]">
            Our Team
          </p>
        </div>
        <Button text="Sign Up" />
      </div>
    </header>
  );
};

export default Header;
