import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Projects from "./Projects";

const ProjectsSection = () => {
  return (
    <Section className="bg-gradient-to-b from-Dark1 to-Dark2 ">
      <SectionHeader
        title="Recent projects"
        description="Recent Projects Showcasing Our Craftsmanship and Innovation in Construction"
        primary
      />
      <Projects />
    </Section>
  );
};

export default ProjectsSection;
