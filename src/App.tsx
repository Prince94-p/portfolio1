import React, { useState, useCallback } from 'react';
import { BootLoader } from './components/BootLoader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { SectionDivider } from './components/SectionDivider';

function App() {
  const [isBooted, setIsBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setIsBooted(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F8F7F4] text-[#141312] selection:bg-[#EAD8C7] selection:text-[#181614]">
      <BootLoader onBootComplete={handleBootComplete} />
      <HeroSection isBooted={isBooted} />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <ContactSection />
    </div>
  );
}

export default App;
