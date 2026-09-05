import React from 'react';
import hnmLogoSvg from '../../assets/images/hnm_event_logo.svg';
import hnmLogoLightTextSvg from '../../assets/images/hnm_event_logo_light_text.svg';

interface HnmEventLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'default' | 'darkBackground' | 'lightBackground' | 'badge';
  showSubtitle?: boolean;
}

export const HnmEventLogo: React.FC<HnmEventLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'default',
  showSubtitle = false,
}) => {
  const sizeMap = {
    sm: 'h-7',
    md: 'h-10',
    lg: 'h-14',
    xl: 'h-20',
    '2xl': 'h-28',
  };

  const selectedSize = sizeMap[size] || 'h-10';

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {/* Crisp White Badge Container ensuring black H and M and red N stand out 100% clearly */}
        <div className="bg-white/95 border-2 border-red-600/40 px-3 py-1.5 rounded-2xl shadow-xl flex items-center justify-center backdrop-blur-md group hover:scale-105 transition-transform">
          <img
            src={hnmLogoSvg}
            alt="Hikari no Matsuri Official HNM Event Logo"
            className={`${selectedSize} object-contain filter drop-shadow-[0_2px_4px_rgba(239,68,68,0.2)]`}
          />
        </div>
        {showSubtitle && (
          <div className="flex flex-col">
            <span className="font-anime font-extrabold text-sm tracking-wider text-white flex items-center gap-1.5">
              HNM 2027 <span className="text-[10px] bg-red-600/30 text-red-400 border border-red-500/40 px-1.5 py-0.2 rounded font-mono font-bold">光の祭り</span>
            </span>
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold">
              Hikari no Matsuri Event
            </span>
          </div>
        )}
      </div>
    );
  }

  if (variant === 'lightBackground') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <img
          src={hnmLogoSvg}
          alt="Hikari no Matsuri Official HNM Event Logo"
          className={`${selectedSize} object-contain transition-transform duration-300 hover:scale-105`}
        />
        {showSubtitle && (
          <div className="flex flex-col">
            <span className="font-anime font-extrabold text-sm tracking-wider text-slate-900 flex items-center gap-1.5">
              HNM 2027 <span className="text-[10px] bg-red-600/10 text-red-600 border border-red-500/30 px-1.5 py-0.2 rounded font-mono font-bold">光の祭り</span>
            </span>
            <span className="text-[10px] font-mono text-red-600 uppercase tracking-widest font-semibold">
              Hikari no Matsuri Event
            </span>
          </div>
        )}
      </div>
    );
  }

  // Default / Dark Background mode (Uses white H & M text with red N for maximum contrast on dark event surfaces)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative group">
        <img
          src={hnmLogoLightTextSvg}
          alt="Hikari no Matsuri Official HNM Event Logo"
          className={`${selectedSize} object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(255,46,46,0.3)]`}
        />
      </div>

      {showSubtitle && (
        <div className="flex flex-col">
          <span className="font-anime font-extrabold text-sm tracking-wider text-white flex items-center gap-1.5">
            HNM 2027 <span className="text-[10px] bg-red-600/30 text-red-400 border border-red-500/40 px-1.5 py-0.2 rounded font-mono font-bold">光の祭り</span>
          </span>
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-semibold">
            Hikari no Matsuri Event
          </span>
        </div>
      )}
    </div>
  );
};
