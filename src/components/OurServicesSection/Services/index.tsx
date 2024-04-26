import React from "react";
import Service from "./Service";
import SectionContent from "../../SectionContent";
// import { FaRegBuilding } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Residential",
    description:
      "Design and construction of custom homes, villas, apartments, and townhouses",
    // Icon={FaRegBuilding}
  },
  {
    id: 2,
    title: "Commercial",
    description:
      "Building offices, retail spaces, and restaurants, warehouses, commercial structures",
  },
  {
    id: 3,
    title: "Renovations",
    description:
      "Quality Refurbishment, renovation, and modernization of your  existing properties",
  },
  {
    id: 4,
    title: "Landscaping",
    description:
      "Creating beautiful outdoor landscapes, gardens, and creational areas.",
  },
  {
    id: 5,
    title: "Interiors Designs",
    description:
      "Design and construction of office interiors, retail stores, and commercial spaces.",
  },
  {
    id: 6,
    title: "Structural Repair",
    description:
      "Fully Strengthening and repairing your existing structures for safety and longevity.",
  },
];

const Services = () => {
  return (
    <SectionContent>
      {services.map(({ id, title, description }) => (
        <Service key={id} title={title} description={description} />
      ))}
    </SectionContent>
  );
};

export default Services;
