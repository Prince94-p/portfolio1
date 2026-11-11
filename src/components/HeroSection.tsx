import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import heroImg from '../assets/img.png';
import { PersonalSignature } from './PersonalSignature';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export interface HeroSectionProps {
  isBooted?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isBooted = true }) => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check if device supports hover / fine cursor
    const fineMatch = window.matchMedia('(pointer: fine)');
    setIsFinePointer(fineMatch.matches);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    if (fineMatch.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className={`relative w-full h-screen overflow-hidden bg-[#F8F7F4] text-[#141312] font-sans selection:bg-[#EAD8C7] selection:text-[#181614] ${isFinePointer ? 'cursor-none' : ''}`}>
      {/* ================= 1. REFINED CHARCOAL & BRONZE CUSTOM CURSOR ================= */}
      {isFinePointer && cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(161, 98, 7, 0.12)' : 'rgba(20, 18, 16, 0.85)',
            borderColor: isHovered ? 'rgba(161, 98, 7, 0.7)' : 'rgba(161, 98, 7, 0.4)',
            borderWidth: isHovered ? '1.5px' : '1px',
          }}
          transition={{ type: 'spring', damping: 28, stiffness: 360, mass: 0.45 }}
        />
      )}

      {/* ================= 2. FIXED HERO BACKGROUND LAYER (STUDIO LIGHT PORTRAIT) ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#F8F7F4] flex items-center justify-end">
        {/* Light Architectural Studio Portrait (img.png) */}
        <img
          src={heroImg}
          alt="Prince Patel"
          className="absolute inset-0 w-full h-full object-cover object-[72%_center] sm:object-[75%_center] lg:object-[80%_center] select-none pointer-events-none"
        />

        {/* Soft Architectural Left Blend for Text Contrast */}
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#F8F7F4] via-[#F8F7F4]/90 sm:via-[#F8F7F4]/80 to-transparent pointer-events-none" />
        
        {/* Subtle Bottom Grounding Blend into Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F8F7F4] via-[#F8F7F4]/70 to-transparent pointer-events-none" />
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#141312] hover:text-[#A16207] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            PRINCE.
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-normal uppercase text-[#5A534B] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#141312]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A16207] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="flex items-center space-x-3 ml-auto md:ml-0">
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="hidden sm:inline-flex items-center space-x-2 text-[11px] tracking-[0.24em] font-medium uppercase py-2 px-4.5 rounded-sm bg-[#181614] hover:bg-[#A16207] text-white transition-all duration-300 shadow-[0_2px_8px_rgba(24,22,20,0.12)]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                ↗
              </span>
            </a>

            {/* Accessible Mobile Menu Toggle Button */}
            <button
              type="button"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-sm border border-[#E2DDD5] bg-white/90 text-[#141312] hover:border-[#A16207] focus-visible:outline-2 focus-visible:outline-[#A16207] transition-colors p-2 z-50 pointer-events-auto shadow-xs"
            >
              <span
                className={`block w-4 h-0.5 bg-[#141312] transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-[#141312] transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block w-4 h-0.5 bg-[#141312] transition-transform duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
              />
            </button>
          </div>

          {/* Accessible Mobile Drawer Dropdown */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="md:hidden absolute top-full left-0 right-0 mt-3 p-5 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E2DDD5] rounded-xl shadow-[0_16px_40px_rgba(24,22,20,0.1)] flex flex-col space-y-3 z-50 pointer-events-auto"
              >
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xs font-medium tracking-[0.24em] uppercase text-[#45413C] hover:text-[#A16207] py-2 border-b border-[#ECE7E0] transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center space-x-2 text-xs font-semibold tracking-[0.22em] uppercase py-3 px-4 bg-[#181614] text-white hover:bg-[#A16207] rounded-sm transition-colors mt-2"
                >
                  <span>LET&apos;S TALK</span>
                  <span className="text-xs">↗</span>
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isBooted ? 'visible' : 'hidden'}
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-[2.75rem] xs:text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I BUILD */}
                <span className="block text-[#141312] drop-shadow-[0_1px_3px_rgba(20,18,16,0.06)]">
                  I BUILD
                </span>

                {/* Line 2: DIGITAL */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#A16207] drop-shadow-[0_2px_12px_rgba(180,83,9,0.18)]">
                  DIGITAL
                </span>

                {/* Line 3: EXPERIENCES */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#141312] via-[#2A2622] to-[#45413C]">
                  EXPERIENCES
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-medium tracking-[0.26em] uppercase text-[#756E65]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FRONTEND DEVELOPER <span className="text-[#A16207] mx-1">•</span> AI ENTHUSIAST <span className="text-[#A16207] mx-1">•</span> FULL STACK
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-normal text-[#45413C] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                I build modern digital experiences where thoughtful frontend,
                <br />
                intelligent systems, and real-world ideas come together.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-3 sm:gap-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center space-x-2.5 px-6 sm:px-7 py-3.5 rounded-sm bg-[#181614] hover:bg-[#A16207] text-white text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_4px_16px_rgba(24,22,20,0.14)]"
              >
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Download Resume Button */}
              <motion.a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download="Prince_Patel_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center space-x-2 px-5 sm:px-6 py-3.5 rounded-sm border border-[#D0C7BC] bg-white/80 hover:bg-[#EFECE6] hover:border-[#A16207] text-[#181614] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-xs"
              >
                <span>DOWNLOAD RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isBooted ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.6, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            {/* 1. Quote Mark */}
            <span className="text-2xl text-[#A16207] leading-none font-serif mb-2">
              “
            </span>

            {/* 2. Compact Two-Line Statement */}
            <div
              className="text-[9.5px] font-semibold tracking-[0.24em] uppercase text-[#141312] space-y-1 mb-2.5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>CODE. CREATE.</p>
              <p>IMPACT.</p>
            </div>

            {/* 3. Bronze Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#A16207] via-[#D97706]/70 to-transparent mb-2.5" />

            {/* 4. Distinctive Personal Signature: Prince A. Patel */}
            <PersonalSignature variant="hero" />
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;