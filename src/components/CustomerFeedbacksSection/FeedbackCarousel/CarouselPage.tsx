import React from "react";
import Review from "./Review";
import SectionContent from "../../SectionContent";

interface PropTypes {
  id: string;
  className: string;
  data: {
    id?: any;
    img?: string;
    content: string;
    user_name: string;
    user_job: string;
  }[];
}

const CarouselPage = ({ id, className, data }: PropTypes) => {
  return (
    <SectionContent id={id} className={className}>
      {data.map(({ id, img, content, user_job, user_name }) => (
        <Review
          key={id}
          img={img}
          user_name={user_name}
          user_job={user_job}
          content={content}
        />
      ))}
    </SectionContent>
  );
};

export default CarouselPage;
