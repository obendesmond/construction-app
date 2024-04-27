import React from "react";
import Button from "./Button";

const CTAButton = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6">
      <Button text="Contact Us" className="pl-14 pr-14" />
      <Button text="Free Consultation" outline />
    </div>
  );
};

export default CTAButton;
