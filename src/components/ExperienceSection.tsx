// src/components/ExperienceSection.tsx
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  badge?: string;
  project?: {
    name: string;
    domain: string;
  };
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'SEP 2026',
    title: 'HACKOUT\'26 — RANK 1 / 3,453',
    organization: 'DA-IICT GANDHINAGAR',
    badge: 'RANK 1 WINNER',
    project: {
      name: 'CARBON CORE',
      domain: 'Industrial Carbon Intelligence',
    },
    description:
      'Secured Rank 1 in the online assessment among 3,453 teams and qualified for the offline hackathon at DA-IICT, building Carbon Core for industrial emission leak-point detection and circular alternative recommendations.',
  },
  {
    id: '02',
    year: 'AUG 2026',
    title: 'IBM AI DEVELOPER CERTIFICATE',
    organization: 'IBM — COURSERA',
    badge: '10 COURSES COMPLETED',
    description:
      'Completed a 10-course professional certificate covering Generative AI, Prompt Engineering, web application development, and AI chatbots.',
  },
  {
    id: '03',
    year: 'APR 2026',
    title: 'HACKSAGON 2026 — NATIONAL FINALIST',
    organization: 'ABV-IIITM GWALIOR',
    badge: 'TOP 2,100+ TEAMS',
    project: {
      name: 'SCAMSHIELD',
      domain: 'AI-Powered Scam Detection',
    },
    description:
      'Selected as a national finalist among 2,100+ registered teams with Team HackX, developing ScamShield for real-time scam and fraud detection.',
  },
  {
    id: '04',
    year: 'NOV 2025',
    title: '1ST RUNNER-UP — ICT EXHIBITION',
    organization: 'CSPIT, CHARUSAT',
    badge: 'PROJECT EXHIBITION',
    description:
      'Recognized for technical execution and project work in the Department of Computer Engineering project exhibition.',
  },
  {
    id: '05',
    year: '2025 - PRESENT',
    title: 'B.TECH IN COMPUTER ENGINEERING',
    organization: 'CSPIT, CHARUSAT',
    badge: 'UNDERGRADUATE',
    description:
      'Pursuing B.Tech in Computer Engineering with a focus on web development, intelligent AI systems, and software engineering principles.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black py-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#D4AF37]/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / EXPERIENCE
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              EXPERIENCE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
              MILESTONES.
            </span>
          </h2>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#8C6D4F]/20" />
          
          {/* Animated Gold Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#C99E5D] to-[#8C6D4F]/10 shadow-[0_0_10px_#D4AF37] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8C6D4F] group-hover:text-[#D4AF37] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#120F0C] border border-[#8C6D4F] group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37]">
                      {stop.year}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3
                      className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#F7E7C4] transition-colors leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {stop.title}
                    </h3>
                    {stop.badge && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-xs border border-[#D4AF37]/40 text-[#F7E7C4] bg-[#17130F]">
                        {stop.badge}
                      </span>
                    )}
                  </div>
                  
                  <span 
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#8C6D4F] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>

                  {/* Prominent Project Tag (e.g. CARBON CORE) */}
                  {stop.project && (
                    <div className="inline-flex items-center space-x-2 px-2.5 py-1 mb-2.5 rounded-sm border border-[#D4AF37]/50 bg-[#16120E] shadow-[0_2px_10px_rgba(212,175,55,0.08)]">
                      <span className="text-[9.5px] font-mono font-bold tracking-wider text-[#D4AF37]">
                        PROJECT:
                      </span>
                      <span className="text-[11px] font-mono font-bold tracking-wide text-white">
                        {stop.project.name}
                      </span>
                      <span className="text-[#8C6D4F] text-[9px]">•</span>
                      <span className="text-[10px] font-mono text-[#C4B29E]">
                        {stop.project.domain}
                      </span>
                    </div>
                  )}
                  
                  <p 
                    className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-[1.7] max-w-lg group-hover:text-[#D5CBC0] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;