import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import OurServicesSection from "./components/OurServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import CustomerFeedbacksSection from "./components/CustomerFeedbacksSection";
import TeamMembersSection from "./components/TeamMembersSection";
import CTA from "./components/CTA";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurServicesSection />
      <ProjectsSection />
      <CustomerFeedbacksSection />
      <TeamMembersSection />
      <CTA />
      <FooterSection />
    </div>
  );
}

export default App;
