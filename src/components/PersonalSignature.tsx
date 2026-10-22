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
        {/* "Prince" - Distinctive Elegant Signature Lettering in Warm Editorial Bronze */}
        <span
          className={`${
            isHero
              ? 'text-[1.7rem] sm:text-[1.85rem] tracking-[0.015em]'
              : 'text-[1.1rem] sm:text-[1.22rem] tracking-[0.015em]'
          } font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#78350F] via-[#A16207] to-[#B45309] drop-shadow-[0_1px_4px_rgba(161,98,7,0.15)] transition-all duration-300`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Prince
        </span>

        {/* "A. Patel" - Refined Editorial Balance in Deep Charcoal */}
        <span
          className={`${
            isHero
              ? 'text-[1.3rem] sm:text-[1.42rem] tracking-[0.05em]'
              : 'text-[0.88rem] sm:text-[0.96rem] tracking-[0.05em]'
          } font-light text-[#141312] transition-all duration-300`}
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          A. Patel
        </span>
      </div>

      {/* Signature Underline Stroke */}
      <svg
        className={`${
          isHero ? 'w-full max-w-[158px] h-[7px] mt-0.5' : 'w-full max-w-[112px] h-[5px] mt-0.5'
        } overflow-visible text-[#A16207]`}
        viewBox="0 0 160 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 2 4 Q 50 1.8, 95 4 T 155 3.5"
          stroke="url(#sig-grad)"
          strokeWidth={isHero ? '1.2' : '0.9'}
          strokeLinecap="round"
        />
        <circle cx="157" cy="3.5" r={isHero ? '1' : '0.8'} fill="#A16207" />
        <defs>
          <linearGradient id="sig-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A16207" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#D97706" stopOpacity="1" />
            <stop offset="100%" stopColor="#A16207" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PersonalSignature;
