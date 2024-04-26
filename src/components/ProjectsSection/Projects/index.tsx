import React from "react";
import Project from "./Project";
import SectionContent from "../../SectionContent";

const projects = [
  {
    id: 1,
    title: "Interiors Designs",
    description:
      "Step into a world of captivating commercial spaces designed to elevate your business. ",
    subTitle: "Interior",
    date: "aug 2022",
  },
  {
    id: 2,
    title: "Residential Building",
    description:
      "Step into a world of captivating commercial spaces designed to elevate your business.",
    subTitle: "Building",
    date: "Aug 2022",
  },
  {
    id: 3,
    title: "Commercial Complex",
    description:
      "Step into a world of captivating commercial spaces designed to elevate your business. ",
    subTitle: "Complex",
    date: "Aug 2022",
  },
  {
    id: 4,
    title: "Structural Repair",
    description:
      "Step into a world of captivating commercial spaces designed to elevate your business. ",
    subTitle: "Complex",
    date: "Aug 2022",
  },
];

const Projects = () => {
  return (
    <SectionContent className="justify-center sd:justify-center">
      {projects.map(({ id, title, description, subTitle, date }) => (
        <Project
          key={id}
          title={title}
          description={description}
          subTitle={subTitle}
          date={date}
        />
      ))}
    </SectionContent>
  );
};

export default Projects;
