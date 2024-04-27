import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Button from "../Button";
import ctaImg from "../../assets/ctaImg.png";

const CTA = () => {
  return (
    <Section className="bg-gradient-to-b from-Dark1 to-Dark2 ">
      <SectionHeader
        title="Let's Build Together"
        description="Contact us If you have anything in mind, We will help you build."
        primary
        tags={
          <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6">
            <Button text="Contact Us" className="pl-14 pr-14" />
            <Button text="Free Consultation" outline />
          </div>
        }
        img={ctaImg}
        className="md:items-center"
      />
    </Section>
  );
};

export default CTA;
