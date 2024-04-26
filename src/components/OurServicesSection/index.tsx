import React from "react";
import Services from "./Services";
import Section from "../Section";
import SectionHeader from "../SectionHeader";

const OurServicesSection = () => {
  return (
    <Section>
      <SectionHeader
        title="Our services"
        description="Take a look at the variety of services we provide to make your dreams
          a reality"
      />
      <Services />
    </Section>
  );
};

export default OurServicesSection;
