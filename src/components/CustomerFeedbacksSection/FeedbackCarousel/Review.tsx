import React from "react";

interface PropTypes {
  img?: string;
  content: string;
  user_name: string;
  user_job: string;
}

const defaultImg =
  "https://img.freepik.com/premium-photo/technology-professional-young-businessman-with-tablet-studio-background-social-networking-digital-communication-isolated-male-person-with-mobile-device-search-backdrop_590464-180333.jpg";

const Review = ({
  img = defaultImg,
  content,
  user_name,
  user_job,
  ...rest
}: PropTypes) => {
  return (
    <div
      {...rest}
      className="flex flex-col items-center text-center gap-6 md:items-start md:text-start md:max-w-[384px]"
    >
      <div className="w-[72px] h-[72px] rounded-full overflow-hidden">
        <img src={img} alt={user_name} className="w-full h-full object-cover" />
      </div>
      <p className="text-base text-Gray01 font-bold">"{content}"</p>
      <div>
        <p className="text-base text-Primary font-bold">-{user_name}</p>
        <p className="text-[14px] text-Gray01 font-bold ml-2">{user_job}</p>
      </div>
    </div>
  );
};

export default Review;
