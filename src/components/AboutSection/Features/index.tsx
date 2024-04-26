import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <div className="flex flex-col items-center md:items-start sm:flex-row gap-8">
      <Feature title="600+" description="Worked with 600+ big companies" />
      <Feature title="800+" description="Projects completed successfully" />
      <Feature title="99%" description="We stand with 99% success rate" />
    </div>
  );
};

export default Features;
