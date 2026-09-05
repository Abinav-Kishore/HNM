import React from 'react';
import { Quote } from 'lucide-react';
import { CHARACTER_VOICE_DATA } from '../../context/AudioContext';

interface VoiceIntroProps {
  characterId: 'gojo' | 'tanjiro' | 'luffy' | 'naruto' | 'anya' | 'levi';
  lineIndex?: number;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const VoiceIntro: React.FC<VoiceIntroProps> = ({
  characterId,
  lineIndex = 0,
  title,
  subtitle,
  className = '',
}) => {
  const lines = CHARACTER_VOICE_DATA[characterId.toLowerCase()] || [];
  const line = lines[lineIndex % lines.length] || lines[0];

  if (!line) return null;

  return (
    <div className={`bg-[#121217]/90 border border-red-500/30 rounded-2xl p-4 shadow-xl relative overflow-hidden backdrop-blur-xl ${className}`}>
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 relative z-10">
        
        {/* Character Avatar & Badge */}
        <div className="shrink-0 flex flex-col items-center">
          <div className={`relative w-14 h-14 rounded-full bg-gradient-to-tr ${line.avatarBg} p-0.5 shadow-lg`}>
            <div className="w-full h-full rounded-full bg-[#08080A] flex items-center justify-center font-anime text-xl font-bold text-red-400">
              <span>{line.characterName.charAt(0)}</span>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider mt-1.5 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-md">
            {line.characterName}
          </span>
        </div>

        {/* Character Quote Text */}
        <div className="flex-1 text-center sm:text-left space-y-1.5">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5 text-red-400" />
              {title || `${line.characterName} Quote`}
            </span>
            <span className="text-xs text-zinc-500">•</span>
            <span className="text-xs text-zinc-300 font-medium italic">
              {line.animeSeries}
            </span>
          </div>

          <div className="bg-[#08080A]/80 border border-red-500/20 rounded-xl p-3 shadow-inner">
            <p className="text-xs sm:text-sm font-sans font-medium text-zinc-100 leading-relaxed">
              "{line.quote}"
            </p>
            {line.japaneseQuote && (
              <p className="text-[11px] font-japanese text-red-300/80 mt-1 font-semibold">
                {line.japaneseQuote}
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
