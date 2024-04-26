import React from "react";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import FeedbackCarousel from "./FeedbackCarousel";

const CustomerFeedbacksSection = () => {
  return (
    <Section>
      <SectionHeader
        title="Customer feedbacks"
        description="Don't just take our word for it; hear directly from our valued clients"
      />
      <FeedbackCarousel />
    </Section>
  );
};

export default CustomerFeedbacksSection;
