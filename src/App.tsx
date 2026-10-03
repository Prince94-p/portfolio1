import React, { useState, useCallback } from 'react';
import { BootLoader } from './components/BootLoader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  const [isBooted, setIsBooted] = useState(false);

  const handleBootComplete = useCallback(() => {
    setIsBooted(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black text-[#E8DFD8] selection:bg-[#cbb59d] selection:text-black">
      <BootLoader onBootComplete={handleBootComplete} />
      <HeroSection isBooted={isBooted} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

export default App;