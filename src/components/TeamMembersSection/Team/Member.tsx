import React from "react";

interface PropTypes {
  img?: string;
  name: string;
  position: string;
}

const defaultImg =
  "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/70ee74c1-4bd3-4410-88fd-75bae72b4bfd/2021-08-16-Alicia-Huntsman-44234-JPEG+sRGB+Web+Folder.jpg";

const Member = ({ img = defaultImg, name, position }: PropTypes) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-8 px-8 py-6 rounded-xl border-[1px] border-Gray04 w-[384px]">
      <div className="sm:w-[88px] sm:h-[88px] rounded-[8px] overflow-hidden">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="space-y-[2px] text-center sm:text-start">
        <p className="font-bold text-Primary text-xl capitalize">{name}</p>
        <p className="font-bold text-Gray01 text-[14px] capitalize">
          {position}
        </p>
      </div>
    </div>
  );
};

export default Member;
