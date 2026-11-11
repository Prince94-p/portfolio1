import React from 'react';

export interface PersonalSignatureProps {
  variant?: 'hero' | 'watermark';
  className?: string;
}

export const PersonalSignature: React.FC<PersonalSignatureProps> = ({
  variant = 'hero',
  className = '',
}) => {
  const isHero = variant === 'hero';

  return (
    <div
      className={`inline-flex flex-col items-start select-none ${className}`.trim()}
      aria-label="Prince A. Patel"
    >
      {/* Signature Name Row */}
      <div className="flex items-baseline space-x-1.5 leading-none">
        {/* "Prince" - Distinctive Signature Lettering in Deep Obsidian */}
        <span
          className={`${
            isHero
              ? 'text-[1.8rem] sm:text-[1.95rem] tracking-[0.02em]'
              : 'text-[1.15rem] sm:text-[1.25rem] tracking-[0.02em]'
          } font-semibold italic text-[#141312] transition-colors duration-300 drop-shadow-[0_1px_1px_rgba(20,18,16,0.08)]`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Prince
        </span>

        {/* "A. Patel" - Refined Editorial Balance in Deep Warm Charcoal */}
        <span
          className={`${
            isHero
              ? 'text-[1.38rem] sm:text-[1.48rem] tracking-[0.04em]'
              : 'text-[0.92rem] sm:text-[0.98rem] tracking-[0.04em]'
          } font-medium text-[#1E1B18] transition-colors duration-300`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          A. Patel
        </span>
      </div>

      {/* Signature Underline Stroke */}
      <svg
        className={`${
          isHero ? 'w-full max-w-[165px] h-[7px] mt-1' : 'w-full max-w-[115px] h-[5px] mt-0.5'
        } overflow-visible text-[#A16207]`}
        viewBox="0 0 160 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 2 4 Q 50 1.8, 95 4 T 155 3.5"
          stroke="url(#sig-grad)"
          strokeWidth={isHero ? '1.3' : '1.0'}
          strokeLinecap="round"
        />
        <circle cx="157" cy="3.5" r={isHero ? '1.2' : '0.9'} fill="#A16207" />
        <defs>
          <linearGradient id="sig-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A16207" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#D97706" stopOpacity="1" />
            <stop offset="100%" stopColor="#A16207" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PersonalSignature;
