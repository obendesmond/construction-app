import React from "react";
import Tag from "./Tag";

const tags = [
  "Civil Engineers",
  "Architect",
  "Structural Engineer",
  "Interior Designer",
  "Project Manager",
];

const Tags = () => {
  return (
    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
      {tags.map((t) => (
        <Tag key={t} text={t} />
      ))}
    </div>
  );
};

export default Tags;
