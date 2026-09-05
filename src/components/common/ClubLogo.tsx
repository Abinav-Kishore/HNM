import React from 'react';
import clubLogoImg from '../../assets/images/Isshoni_nihongo_logo.jpeg';
import clubLogoSvg from '../../assets/images/club_logo_isshoni_nihongo.svg';

interface ClubLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showTitle?: boolean;
  lightMode?: boolean;
}

export const ClubLogo: React.FC<ClubLogoProps> = ({
  className = '',
  size = 'md',
  showTitle = false,
  lightMode = false,
}) => {
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-36 h-36',
  };

  const selectedSize = sizeMap[size] || 'w-12 h-12';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`${selectedSize} rounded-full overflow-hidden shrink-0 shadow-lg border-2 border-red-600/40 bg-white group-hover:scale-105 transition-transform duration-300`}>
        <img
          src={clubLogoImg || clubLogoSvg}
          alt="Isshoni Nihongo Club Official Logo"
          className="w-full h-full object-cover p-0.5 rounded-full"
          onError={(e) => {
            // Fallback to SVG if jpeg image fails
            (e.currentTarget as HTMLImageElement).src = clubLogoSvg;
          }}
        />
      </div>
      {showTitle && (
        <div className="flex flex-col">
          <span className={`font-bold text-[14px] tracking-[0.15em] leading-[1.2] ${lightMode ? 'text-slate-900' : 'text-white'}`}>
            ISSHONI<br />
            <span className="text-red-600 font-extrabold">NIHONGO</span>
          </span>
          <span className={`text-[10px] font-mono tracking-widest ${lightMode ? 'text-slate-500' : 'text-amber-400/80'}`}>
            一緒に日本語 • CLUB
          </span>
        </div>
      )}
    </div>
  );
};
