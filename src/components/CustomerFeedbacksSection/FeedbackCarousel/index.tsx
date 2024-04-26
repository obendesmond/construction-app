import React from "react";
import CarouselPage from "./CarouselPage";

const carouselPage1Data = [
  {
    id: 1,
    user_name: "Mary Johnson",
    user_job: "Homeowner",
    content:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.",
  },
  {
    id: 2,
    user_name: "David Lee",
    user_job: "Property Developer",
    content:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.",
  },
  {
    id: 3,
    user_name: "Sarah Miller",
    user_job: "Hotel Owner",
    content:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.",
  },
];
const carouselPage2Data = [
  {
    id: 1,
    user_name: "Mary Johnson",
    user_job: "Homeowner",
    content:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.",
    img: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/70ee74c1-4bd3-4410-88fd-75bae72b4bfd/2021-08-16-Alicia-Huntsman-44234-JPEG+sRGB+Web+Folder.jpg",
  },
  {
    id: 2,
    user_name: "David Lee",
    user_job: "Property Developer",
    content:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.",
    img: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/70ee74c1-4bd3-4410-88fd-75bae72b4bfd/2021-08-16-Alicia-Huntsman-44234-JPEG+sRGB+Web+Folder.jpg",
  },
  {
    id: 3,
    user_name: "Sarah Miller",
    user_job: "Hotel Owner",
    content:
      "I recently had the privilege of having [Construction Company Name] build my dream home, and I couldn't be happier with the results. The entire process.",
    img: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/70ee74c1-4bd3-4410-88fd-75bae72b4bfd/2021-08-16-Alicia-Huntsman-44234-JPEG+sRGB+Web+Folder.jpg",
  },
];

const FeedbackCarousel = () => {
  return (
    <div>
      <CarouselPage
        id="item1"
        className="carousel-item"
        data={carouselPage1Data}
      />
      {/* implemented carousel with daisy ui for futher usage */}
      {/* <div className="carousel  w-full">
        <CarouselPage
          id="item1"
          className="carousel-item"
          data={carouselPage1Data}
        />
        <CarouselPage
          id="item1"
          className="carousel-item"
          data={carouselPage2Data}
        />
        <CarouselPage
          id="item1"
          className="carousel-item"
          data={carouselPage1Data}
        />
      </div> */}
      {/* <div className="flex justify-center w-full pt-[84px] gap-2">
        <a href="#item1" className="w-3 h-3 rounded-full bg-Gray04"></a>
        <a href="#item2" className="w-3 h-3 rounded-full bg-Gray04"></a>
        <a href="#item3" className="w-3 h-3 rounded-full bg-Gray04"></a>
      </div> */}
      <div className="flex justify-center w-full pt-[84px] gap-2">
        <p className="w-3 h-3 rounded-full bg-Secondary"></p>
        <p className="w-3 h-3 rounded-full bg-Gray04"></p>
        <p className="w-3 h-3 rounded-full bg-Gray04"></p>
        <p className="w-3 h-3 rounded-full bg-Gray04"></p>
      </div>
    </div>
  );
};

export default FeedbackCarousel;
