import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutImg from '../assets/about.png';
import { PersonalSignature } from './PersonalSignature';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.12,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // 1. Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // 2. Springs for 3D Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { damping: 20, stiffness: 220 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { damping: 20, stiffness: 220 });

  // 3. Top-Level Unconditional Transform for Light Spotlight Background
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,255,255,0.45), rgba(161,98,7,0.12), transparent 75%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="about" 
      className="relative z-10 w-full min-h-screen bg-[#F8F7F4] text-[#141312] font-sans selection:bg-[#EAD8C7] selection:text-[#181614] py-20 lg:py-28 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* ================= REFINED ARCHITECTURAL AMBIENT TINTS ================= */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[32rem] h-[32rem] bg-[#A16207] rounded-full blur-[160px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[28rem] h-[28rem] bg-[#D97706] rounded-full blur-[170px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-8"
        >
          <span 
            className="text-[11px] font-semibold tracking-[0.35em] uppercase text-[#A16207]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#A16207]/80 via-[#D0C7BC]/40 to-transparent" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Cinematic Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-[#141312] drop-shadow-[0_1px_2px_rgba(20,18,16,0.06)]">
                  I DON&apos;T JUST WRITE CODE.
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#92400E] via-[#B45309] to-[#A16207] drop-shadow-[0_2px_12px_rgba(180,83,9,0.15)]">
                  I BUILD WHAT&apos;S NEXT.
                </span>
              </h2>
            </motion.div>

            {/* Concise Bio Paragraph */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-normal text-[#45413C] leading-[1.85] tracking-wide mb-10 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I&apos;m <span className="text-[#A16207] font-semibold">Prince Patel</span>, a B.Tech Computer Engineering student at CSPIT, CHARUSAT. I focus on building modern digital experiences where thoughtful frontend development, intelligent AI systems, and real-world technology come together to solve practical problems.
            </motion.p>

            {/* Concise 4-Item Achievement Metrics Grid */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-[#E2DDD5]"
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-normal text-[#141312] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  #1 / 3,453
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#756E65] mt-0.5">
                  HackOut&apos;26 Online
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-normal text-[#A16207] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  2nd
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#756E65] mt-0.5">
                  ICT Project Exhibition
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-normal text-[#141312] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Top 2100+
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#756E65] mt-0.5">
                  Hacksagon Finalist
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-normal text-[#A16207] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  5+
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#756E65] mt-0.5">
                  Key Projects Built
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PORTRAIT FRAME (PERFECT LOCKED GEOMETRY) ================= */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            
            {/* Ambient Subtle Amber Halo Behind Frame */}
            <motion.div 
              animate={{
                scale: isCardHovered ? 1.08 : 1,
                opacity: isCardHovered ? 0.25 : 0.12,
              }}
              transition={{ duration: 2.4, ease: "easeOut" }}
              className="absolute -inset-4 bg-gradient-to-tr from-[#A16207]/20 via-[#D97706]/10 to-transparent blur-2xl rounded-2xl pointer-events-none"
            />

            {/* 3D Holographic Main Card Container */}
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-[#E2DDD5] rounded-sm bg-white shadow-[0_20px_50px_rgba(24,22,20,0.08)] cursor-pointer group transition-all duration-500 hover:border-[#A16207]"
            >
              {/* Dynamic Laser Border Pulse on Card Perimeter */}
              <div className="absolute inset-0 rounded-sm pointer-events-none overflow-hidden">
                <motion.div 
                  animate={{ x: isCardHovered ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#A16207]/20 to-transparent skew-x-12"
                />
              </div>

              {/* Corner Bronze Accent Brackets */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#A16207] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#A16207] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#A16207] transition-transform duration-500 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#A16207] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </div>

              {/* Portrait Image Canvas */}
              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-[#FAF9F6] rounded-sm">
                {/* Main Portrait */}
                <img
                  src={aboutImg}
                  alt="Prince Patel"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:brightness-105 group-hover:contrast-[1.06] transition-all duration-700 ease-out"
                />

                {/* Mouse-Tracked Holographic Glass Spotlight Sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-soft-light transition-opacity duration-300"
                  style={{
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0,
                  }}
                />

                {/* Gentle Bottom Scrim so signature stays crisp without heavy black shadow */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/90 via-white/30 to-transparent pointer-events-none" />

                {/* Personal Signature Watermark: Prince A. Patel */}
                <div className="absolute bottom-3 right-3 z-20 select-none pointer-events-none opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                  <PersonalSignature variant="watermark" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;