import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroPrinceImg from '../assets/hero-prince.png';
import watermarkImg from '../assets/watermark.png';
import aboutImg from '../assets/about.png';

interface BootLoaderProps {
  onBootComplete: () => void;
}

export const BootLoader: React.FC<BootLoaderProps> = ({ onBootComplete }) => {
  const [phase, setPhase] = useState<'booting' | 'ready' | 'exit' | 'done'>('booting');
  const [statusText, setStatusText] = useState('BOOTING PORTFOLIO');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onBootComplete();
      setPhase('done');
      return;
    }

    // Lock scrolling at top on mount
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    // Progress counter simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 8;
        return Math.min(prev + increment, 100);
      });
    }, 70);

    // Preload critical above-the-fold assets
    const preloadImage = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        if (img.complete) {
          resolve();
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve(); // continue even if an asset fails
        }
      });

    const assetPromises = Promise.all([
      preloadImage(heroPrinceImg),
      preloadImage(watermarkImg),
      preloadImage(aboutImg),
      document.fonts ? document.fonts.ready : Promise.resolve(),
    ]);

    // Minimum delay for cinematic feel (950ms) and max safeguard (1800ms)
    const minDelayPromise = new Promise<void>((resolve) => setTimeout(resolve, 950));
    const maxTimeoutPromise = new Promise<void>((resolve) => setTimeout(resolve, 1800));

    Promise.race([
      Promise.all([assetPromises, minDelayPromise]),
      maxTimeoutPromise,
    ]).then(() => {
      setProgress(100);
      clearInterval(progressInterval);
      setStatusText('SYSTEM READY');
      setPhase('ready');

      // Short pause showing "SYSTEM READY" before initiating curtain exit
      setTimeout(() => {
        setPhase('exit');
        onBootComplete();

        // Unlock scroll after curtain begins revealing
        setTimeout(() => {
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        }, 150);

        // Remove from DOM once exit animation ends
        setTimeout(() => {
          setPhase('done');
        }, 800);
      }, 350);
    });

    return () => {
      clearInterval(progressInterval);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [onBootComplete]);

  if (phase === 'done') {
    return null;
  }

  const isExiting = phase === 'exit';

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center select-none overflow-hidden"
    >
      {/* Top Curtain Panel */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isExiting ? '-100%' : '0%' }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black border-b border-[#D4AF37]/20"
      />

      {/* Bottom Curtain Panel */}
      <motion.div
        initial={{ y: '0%' }}
        animate={{ y: isExiting ? '100%' : '0%' }}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black border-t border-[#D4AF37]/20"
      />

      {/* Center Seam Glow Line */}
      <motion.div
        initial={{ opacity: 0.8, scaleX: 1 }}
        animate={{
          opacity: isExiting ? 0 : 0.8,
          scaleX: isExiting ? 1.5 : 1,
        }}
        transition={{ duration: 0.35 }}
        className="absolute top-1/2 left-0 w-full h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent pointer-events-none"
      />

      {/* Central Content Container */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            key="boot-content"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              y: -14,
              scale: 0.96,
              filter: 'blur(4px)',
              transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Ambient Gold Radial Glow */}
            <div className="absolute w-44 h-44 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Spinner Container */}
            <div className="relative w-11 h-11 mb-6 flex items-center justify-center">
              {/* Inactive Dark Track Ring */}
              <div className="absolute inset-0 rounded-full border-[1.5px] border-[#332A20]/80" />

              {/* Active Gold Spinner Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: 'linear',
                }}
                className="absolute inset-0 rounded-full border-[1.5px] border-transparent border-t-[#D4AF37] border-r-[#F7E7C4]/80 shadow-[0_0_12px_rgba(212,175,55,0.35)]"
              />

              {/* Core Micro Indicator */}
              <motion.div
                animate={{
                  scale: phase === 'ready' ? [1, 1.4, 1] : [0.85, 1.15, 0.85],
                  opacity: phase === 'ready' ? 1 : [0.5, 1, 0.5],
                }}
                transition={{
                  repeat: phase === 'ready' ? 1 : Infinity,
                  duration: phase === 'ready' ? 0.3 : 1.4,
                  ease: 'easeInOut',
                }}
                className="w-1.5 h-1.5 rounded-full bg-[#EAD8C7] shadow-[0_0_6px_rgba(234,216,199,0.8)]"
              />
            </div>

            {/* Boot Status Text & Percent */}
            <div className="flex flex-col items-center space-y-1.5 text-center">
              <div className="flex items-center space-x-2">
                <span
                  className="text-[11px] sm:text-[12px] font-mono tracking-[0.24em] uppercase text-[#EAD8C7] font-medium"
                >
                  {statusText}
                </span>
                {phase === 'booting' && (
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-1.5 h-3 bg-[#D4AF37]"
                  />
                )}
              </div>

              {/* Subtle Tech Progress Counter */}
              <div className="text-[9px] font-mono tracking-[0.2em] text-[#8C6D4F] uppercase">
                {phase === 'ready' ? 'INIT_OK // 100%' : `INITIALIZING // ${progress}%`}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BootLoader;
