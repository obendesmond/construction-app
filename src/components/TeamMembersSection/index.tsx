import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import Tags from "../Tags";
import Team from "./Team";

const TeamMembersSection = () => {
  return (
    <Section>
      <SectionHeader
        title="Team members"
        description="Meet the Collaborative Minds of Our Construction Team"
        tags={<Tags />}
      />
      <Team />
    </Section>
  );
};

export default TeamMembersSection;
