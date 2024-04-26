import React from "react";
import { RxDotFilled } from "react-icons/rx";
import IconButton from "../../IconButton";
import { FaArrowRight } from "react-icons/fa6";

interface PropTypes {
  img?: string;
  title: string;
  description: string;
  subTitle: string;
  date: string;
}
const defaultImg =
  "https://www.thehousedesigners.com/images/plans/DTE/bulk/9866/M3320A3FT-0-M3335A3FT-0.jpg";

const Project = ({
  img = defaultImg,
  title,
  description,
  subTitle,
  date,
  ...rest
}: PropTypes) => {
  return (
    <div
      {...rest}
      className="flex flex-col sm:flex-row gap-10 justify-between items-center bg-White p-8 xl:w-[584px] xl:max-w-[584px]"
    >
      <div className="w-full sm:w-[184px] h-[196px] lg:min-w-[184px] lg:min-h-[196px]">
        <img src={img} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-Primary text-2xl capitalize">{title}</p>
          <p className="font-bold text-Gray01 text-base max-w-xs capitalize">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex flex-row items-center text-center font-bold text-Gray01 text-base gap-3 capitalize">
            <p>{subTitle}</p>
            <RxDotFilled className="text-Gray03" />
            <p>{date}</p>
          </div>
          <IconButton Icon={FaArrowRight} className="self-start" />
        </div>
      </div>
    </div>
  );
};

export default Project;
