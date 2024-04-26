import React from "react";
import Member from "./Member";
import SectionContent from "../../SectionContent";

const team = [
  { id: 1, name: "Ethan Walker", position: "Civil Engineer" },
  { id: 2, name: "Eva Mitchell", position: "Project Engineer" },
  { id: 3, name: "Jackson Thompson", position: "Senior Civil Engineer" },
  { id: 4, name: "Williams Carie", position: "Materials Engineer" },
  { id: 5, name: "Benjamin Carter", position: "Project Engineer" },
  { id: 6, name: "Sophia Robinson", position: "Surveyor" },
];

const Team = () => {
  return (
    <SectionContent>
      {team.map(({ id, name, position }) => (
        <Member key={id} name={name} position={position} />
      ))}
    </SectionContent>
  );
};

export default Team;
