import React from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useAudio, CHARACTER_VOICE_DATA } from '../../context/AudioContext';

interface CharacterVoiceButtonProps {
  characterId: 'gojo' | 'tanjiro' | 'luffy' | 'naruto' | 'anya' | 'levi';
  lineIndex?: number;
  variant?: 'compact' | 'pill' | 'card' | 'floating';
  label?: string;
  className?: string;
}

export const CharacterVoiceButton: React.FC<CharacterVoiceButtonProps> = ({
  characterId,
  lineIndex = 0,
  variant = 'pill',
  label,
  className = '',
}) => {
  const { playCharacterVoice, stopCharacterVoice, isPlayingVoice, activeVoiceLine, isMuted, playSfx } = useAudio();

  const lines = CHARACTER_VOICE_DATA[characterId.toLowerCase()] || [];
  const line = lines[lineIndex % lines.length] || lines[0];

  const isCurrentActive = isPlayingVoice && activeVoiceLine?.characterId.toLowerCase() === characterId.toLowerCase();

  const handleToggleVoice = (e: React.MouseEvent) => {
    e.stopPropagation();
    playSfx('click');
    if (isCurrentActive) {
      stopCharacterVoice();
    } else {
      playCharacterVoice(characterId, lineIndex);
    }
  };

  if (!line) return null;

  if (variant === 'compact') {
    return (
      <button
        onClick={handleToggleVoice}
        disabled={isMuted}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
          isCurrentActive
            ? 'bg-amber-500 text-slate-950 font-bold shadow-lg shadow-amber-500/30 scale-105'
            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
        } ${isMuted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
        title={`Listen to ${line.characterName} (${line.personality})`}
      >
        {isCurrentActive ? (
          <>
            <span className="flex items-center gap-0.5 h-3">
              <span className="w-0.5 h-full bg-slate-950 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-0.5 h-full bg-slate-950 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-0.5 h-full bg-slate-950 animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
            <span>Playing...</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-amber-400" />
            <span>{label || `${line.characterName} Voice`}</span>
          </>
        )}
      </button>
    );
  }

  if (variant === 'card') {
    return (
      <div
        onClick={handleToggleVoice}
        className={`group cursor-pointer p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
          isCurrentActive
            ? 'bg-gradient-to-br from-amber-950/80 to-[#151C2E] border-amber-500/80 shadow-2xl shadow-amber-500/20 scale-[1.02]'
            : 'bg-[#151C2E]/90 hover:bg-[#151C2E] border-amber-500/30 hover:border-amber-500/60 shadow-lg'
        } ${className}`}
      >
        <div className="flex items-center gap-3">
          {/* Avatar / Badge */}
          <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${line.avatarBg} p-0.5 shrink-0 shadow-md relative`}>
            <div className="w-full h-full rounded-full bg-[#0B0E17] flex items-center justify-center font-anime text-lg font-bold text-white">
              {line.characterName.charAt(0)}
            </div>
            {isCurrentActive && (
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white font-anime truncate">{line.characterName}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold truncate">
                {line.personality}
              </span>
            </div>
            <p className="text-xs text-[#D8D4E6] line-clamp-1 italic mt-0.5">"{line.quote}"</p>
          </div>

          <div className="shrink-0">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${
                isCurrentActive
                  ? 'bg-amber-500 text-slate-950 shadow-lg'
                  : 'bg-white/10 text-amber-400 hover:bg-amber-500/20'
              }`}
            >
              {isCurrentActive ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Pill variant (default)
  return (
    <button
      onClick={handleToggleVoice}
      disabled={isMuted}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 border ${
        isCurrentActive
          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white border-red-500 shadow-lg shadow-red-600/30 scale-105'
          : 'bg-[#121217] hover:bg-red-500/20 text-white border-red-500/30 hover:border-red-500'
      } ${isMuted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`}
    >
      <Volume2 className={`w-3.5 h-3.5 ${isCurrentActive ? 'text-white animate-pulse' : 'text-red-400'}`} />
      <span>{label || `${line.characterName} Voice`}</span>
      {isCurrentActive ? (
        <span className="flex items-center gap-0.5 h-3 ml-1">
          <span className="w-0.5 h-full bg-white animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-0.5 h-full bg-white animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-0.5 h-full bg-white animate-bounce" style={{ animationDelay: '300ms' }} />
        </span>
      ) : (
        <Play className="w-3 h-3 fill-current ml-0.5 text-red-400" />
      )}
    </button>
  );
};
