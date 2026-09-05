import React, { useState } from 'react';
import { X, Heart, Star, Award } from 'lucide-react';

export type MascotType = 'kitsune' | 'sorcerer' | 'neko' | 'taiko';
export type MascotPosition = 'bottom-right' | 'bottom-left' | 'side-peek-right' | 'side-peek-left' | 'card-top' | 'inline';

interface AnimeMascotProps {
  type?: MascotType;
  position?: MascotPosition;
  customText?: string;
  className?: string;
}

const FORTUNES = [
  { rank: '大吉 (Daikichi - Great Blessing)', color: 'text-amber-400', text: 'You will win the HNM Cosplay Masquerade Raffle & get VIP Front Row seats!' },
  { rank: '中吉 (Chukichi - Middle Blessing)', color: 'text-red-400', text: 'Unlimited fresh Takoyaki & Matcha Ice Cream await you at the Yatai Food Alley!' },
  { rank: '小吉 (Shokichi - Small Blessing)', color: 'text-rose-400', text: 'You will meet your favorite Voice Actor at the VIP Lounge Photo Session!' },
  { rank: '吉 (Kichi - Blessing)', color: 'text-amber-300', text: 'Your festival cosplay armor will fit perfectly with zero prop repairs needed!' },
  { rank: '末吉 (Suekichi - Future Blessing)', color: 'text-emerald-400', text: 'You will find rare limited-edition J-Pop merchandise at Booth B-12!' },
];

export const AnimeMascot: React.FC<AnimeMascotProps> = ({
  type = 'kitsune',
  position = 'inline',
  customText,
  className = '',
}) => {
  const [showFortuneModal, setShowFortuneModal] = useState(false);
  const [fortune, setFortune] = useState(FORTUNES[0]);

  const drawFortune = () => {
    const randomIndex = Math.floor(Math.random() * FORTUNES.length);
    setFortune(FORTUNES[randomIndex]);
    setShowFortuneModal(true);
  };

  const getMascotSvg = () => {
    switch (type) {
      case 'sorcerer':
        return (
          <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" viewBox="0 0 100 100" fill="none">
            {/* Sorcerer Chibi Character */}
            {/* Hair */}
            <path d="M25 45 C 15 30, 20 10, 45 15 C 60 8, 80 20, 75 45 C 85 40, 85 60, 75 65 Z" fill="#F8F7FC" />
            <path d="M20 35 L 30 25 L 35 38 L 48 18 L 55 35 L 70 20 L 72 38" fill="#E2E8F0" />
            {/* Face */}
            <ellipse cx="50" cy="55" rx="24" ry="20" fill="#FFE0BD" />
            {/* Blindfold / Dark Glasses */}
            <rect x="28" y="45" width="44" height="12" rx="4" fill="#1C1328" stroke="#8B5CF6" strokeWidth="2" />
            <path d="M 32 51 Q 50 48 68 51" stroke="#60A5FA" strokeWidth="1.5" strokeDasharray="2 2" />
            {/* Cute Smile */}
            <path d="M 44 64 Q 50 69 56 64" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            {/* Cheeks */}
            <circle cx="34" cy="62" r="3" fill="#FFB6C1" opacity="0.6" />
            <circle cx="66" cy="62" r="3" fill="#FFB6C1" opacity="0.6" />
            {/* Blue Aura Flames */}
            <path d="M15 60 C 10 45, 20 40, 18 35 C 24 40, 22 50, 25 55 Z" fill="#60A5FA" opacity="0.8" className="animate-pulse" />
            <path d="M82 58 C 88 45, 78 38, 80 32 C 75 38, 76 48, 73 53 Z" fill="#8B5CF6" opacity="0.8" className="animate-pulse" />
          </svg>
        );

      case 'neko':
        return (
          <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" viewBox="0 0 100 100" fill="none">
            {/* Cat Ears */}
            <polygon points="25,35 15,10 40,25" fill="#1C1328" stroke="#D946EF" strokeWidth="2" />
            <polygon points="22,30 18,15 35,24" fill="#FFB6C1" />
            <polygon points="75,35 85,10 60,25" fill="#1C1328" stroke="#D946EF" strokeWidth="2" />
            <polygon points="78,30 82,15 65,24" fill="#FFB6C1" />
            {/* Face */}
            <ellipse cx="50" cy="50" rx="26" ry="22" fill="#FFE0BD" />
            {/* Eyes */}
            <ellipse cx="38" cy="48" rx="4" ry="6" fill="#1C1328" />
            <circle cx="39" cy="46" r="2" fill="#FFFFFF" />
            <ellipse cx="62" cy="48" rx="4" ry="6" fill="#1C1328" />
            <circle cx="63" cy="46" r="2" fill="#FFFFFF" />
            {/* Cat Mouth */}
            <path d="M 46 58 Q 50 62 54 58" stroke="#D946EF" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Taiyaki Fish in Paws */}
            <path d="M 40 68 C 30 65, 30 78, 42 76 C 52 78, 55 65, 45 66 Z" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
            <circle cx="35" cy="70" r="1" fill="#000" />
            {/* Whiskers */}
            <line x1="18" y1="50" x2="28" y2="52" stroke="#D8D4E6" strokeWidth="1.5" />
            <line x1="16" y1="56" x2="27" y2="56" stroke="#D8D4E6" strokeWidth="1.5" />
            <line x1="82" y1="50" x2="72" y2="52" stroke="#D8D4E6" strokeWidth="1.5" />
            <line x1="84" y1="56" x2="73" y2="56" stroke="#D8D4E6" strokeWidth="1.5" />
          </svg>
        );

      case 'taiko':
        return (
          <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" viewBox="0 0 100 100" fill="none">
            {/* Headband */}
            <ellipse cx="50" cy="48" rx="25" ry="21" fill="#FFE0BD" />
            <rect x="24" y="32" width="52" height="8" rx="2" fill="#EF4444" />
            <circle cx="50" cy="36" r="3" fill="#FFFFFF" />
            {/* Hair */}
            <path d="M 24 35 C 20 20, 40 10, 50 15 C 60 10, 80 20, 76 35 Z" fill="#281B3D" />
            {/* Winking Eyes */}
            <path d="M 34 48 Q 40 44 44 48" stroke="#1C1328" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <ellipse cx="60" cy="48" rx="4" ry="5" fill="#1C1328" />
            <circle cx="61" cy="46" r="1.8" fill="#FFFFFF" />
            {/* Open Happy Mouth */}
            <path d="M 44 58 Q 50 66 56 58 Z" fill="#EF4444" />
            {/* Taiko Drumsticks */}
            <line x1="22" y1="75" x2="38" y2="60" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
            <line x1="78" y1="75" x2="62" y2="60" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          </svg>
        );

      case 'kitsune':
      default:
        return (
          <svg className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-lg" viewBox="0 0 100 100" fill="none">
            {/* Fox Ears */}
            <polygon points="22,35 12,8 38,22" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
            <polygon points="20,30 15,14 33,21" fill="#FFB6C1" />
            <polygon points="78,35 88,8 62,22" fill="#FFFFFF" stroke="#8B5CF6" strokeWidth="2" />
            <polygon points="78,30 83,14 65,21" fill="#FFB6C1" />
            {/* Hair */}
            <path d="M22 42 C 18 20, 45 10, 50 15 C 55 10, 82 20, 78 42 Z" fill="#F8F7FC" />
            {/* Face */}
            <ellipse cx="50" cy="52" rx="25" ry="21" fill="#FFE0BD" />
            {/* Fox Mask headband */}
            <rect x="25" y="28" width="50" height="10" rx="3" fill="#FFFFFF" stroke="#EF4444" strokeWidth="1.5" />
            <path d="M 40 33 L 44 33 M 56 33 L 60 33" stroke="#EF4444" strokeWidth="2" />
            {/* Anime Eyes */}
            <ellipse cx="38" cy="50" rx="4" ry="6" fill="#8B5CF6" />
            <circle cx="39" cy="48" r="2" fill="#FFFFFF" />
            <ellipse cx="62" cy="50" rx="4" ry="6" fill="#8B5CF6" />
            <circle cx="63" cy="48" r="2" fill="#FFFFFF" />
            {/* Cute Mouth */}
            <path d="M 45 60 Q 50 64 55 60" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Rosy Cheeks */}
            <ellipse cx="32" cy="56" rx="4" ry="2" fill="#FFB6C1" opacity="0.8" />
            <ellipse cx="68" cy="56" rx="4" ry="2" fill="#FFB6C1" opacity="0.8" />
          </svg>
        );
    }
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom-right':
        return 'fixed bottom-4 right-4 z-40 animate-mascot-float';
      case 'bottom-left':
        return 'fixed bottom-4 left-4 z-40 animate-mascot-float';
      case 'side-peek-right':
        return 'absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 hover:translate-x-0 z-20 transition-transform duration-300 animate-mascot-peek';
      case 'side-peek-left':
        return 'absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 hover:translate-x-0 z-20 transition-transform duration-300 animate-mascot-peek';
      case 'card-top':
        return 'absolute -top-10 right-4 z-20 animate-mascot-float';
      case 'inline':
      default:
        return 'relative inline-block animate-mascot-float';
    }
  };

  return (
    <>
      <div
        onClick={drawFortune}
        className={`group cursor-pointer select-none ${getPositionClasses()} ${className}`}
        title="Click to draw your HNM Festival Lucky Fortune (Omikuji)!"
      >
        <div className="relative flex flex-col items-center">
          
          {/* Tooltip speech bubble */}
          <div className="mb-1 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200">
            <div className="bg-[#121217]/95 border border-red-500/40 text-[#F8F7FC] text-[10px] font-mono px-2.5 py-1 rounded-xl shadow-xl whitespace-nowrap flex items-center gap-1.5 backdrop-blur-md">
              <Star className="w-3 h-3 text-red-400 fill-red-400" />
              <span>{customText || 'Draw Festival Fortune!'}</span>
            </div>
            {/* Speech bubble pointer */}
            <div className="w-2 h-2 bg-[#121217] border-r border-b border-red-500/40 rotate-45 mx-auto -mt-1" />
          </div>

          {/* SVG Character */}
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {getMascotSvg()}
          </div>

        </div>
      </div>

      {/* Omikuji Lucky Fortune Modal */}
      {showFortuneModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
          <div className="bg-[#121217] border border-red-500/50 rounded-2xl max-w-sm w-full p-6 relative shadow-2xl text-center overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-red-600/20 rounded-full blur-2xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={() => setShowFortuneModal(false)}
              className="absolute top-4 right-4 p-1 text-zinc-400 hover:text-white bg-white/5 rounded-lg border border-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header Icon */}
            <div className="w-12 h-12 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center mx-auto mb-3 text-red-400">
              <Award className="w-6 h-6 animate-pulse" />
            </div>

            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-400 block mb-1">
              HNM FESTIVAL OMIKUJI (おみくじ)
            </span>

            <h3 className="text-lg font-anime font-bold text-white mb-3">
              YOUR FESTIVAL LUCK
            </h3>

            {/* Fortune Card */}
            <div className="bg-[#08080A] p-4 rounded-xl border border-red-500/20 my-4 text-left space-y-2">
              <div className="text-xs font-serif font-bold text-zinc-300">Result:</div>
              <div className={`text-base font-bold font-mono ${fortune.color}`}>
                {fortune.rank}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed pt-1 border-t border-white/5">
                {fortune.text}
              </p>
            </div>

            <div className="text-[10px] text-zinc-400 mb-5">
              Show this fortune at the Info Booth during festival days for a bonus sticker!
            </div>

            <button
              onClick={() => setShowFortuneModal(false)}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-xl font-semibold text-xs shadow-md transition-colors cursor-pointer"
            >
              Thank You Mascot! (Arigatou)
            </button>

          </div>
        </div>
      )}
    </>
  );
};
