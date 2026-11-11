import React from 'react';
import { motion } from 'framer-motion';

export interface SectionDividerProps {
  className?: string;
  withNode?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  withNode = true,
}) => {
  return (
    <div
      className={`relative w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-8 flex items-center justify-center overflow-hidden pointer-events-none select-none ${className}`.trim()}
      aria-hidden="true"
    >
      {/* Background Subtle Track */}
      <div className="absolute inset-x-6 sm:inset-x-12 lg:inset-x-20 h-[1px] bg-[#E2DDD5]/40" />

      {/* Main Animated Draw-In Bronze Gradient Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#A16207] to-transparent overflow-hidden"
      >
        {/* Continuous Traveling Shimmer Beam */}
        <motion.div
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-y-0 w-44 bg-gradient-to-r from-transparent via-[#FEF3C7] to-transparent opacity-75"
        />
      </motion.div>

      {/* Center Architectural Node / Pin */}
      {withNode && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        >
          {/* Ambient Glow behind node */}
          <div className="absolute w-6 h-6 rounded-full bg-[#A16207]/20 blur-xs" />

          {/* Diamond Emblem */}
          <div className="relative w-2.5 h-2.5 rotate-45 border border-[#A16207] bg-[#F8F7F4] shadow-[0_0_8px_rgba(161,98,7,0.35)] flex items-center justify-center">
            <div className="w-1 h-1 bg-[#A16207] rounded-full" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SectionDivider;
