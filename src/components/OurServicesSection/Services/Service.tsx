import React from "react";
import { IconType } from "react-icons";
import building from "../../../assets/building.png";

interface PropTypes {
  Icon?: IconType;
  img?: string;
  title: string;
  description: string;
  linkText?: string;
}

const Service = ({
  img,
  Icon,
  title,
  description,
  linkText,
  ...rest
}: PropTypes) => {
  return (
    <div
      className="flex text-center md:text-start items-center md:items-start flex-col gap-3"
      {...rest}
    >
      {Icon && <Icon size={56} className="text-Gray02" />}
      <img
        src={img || building}
        alt="icon img"
        className="w-14 h-14 object-contain"
      />
      <div>
        <p className="font-bold text-Primary text-2xl ">{title}</p>
        <p className="font-bold text-base text-Gray01 max-w-[380px]">
          {description}
        </p>
      </div>
      <button className="font-bold border-none py-1 text-Secondary hover:text-Primary transition ease-in-out delay-[40]">
        {linkText || "Learn More"}
      </button>
    </div>
  );
};

export default Service;
