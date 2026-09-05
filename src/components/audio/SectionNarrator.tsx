import React, { useState } from 'react';
import { Volume2, VolumeX, Play, Pause, ChevronRight, Settings, Music, RefreshCw } from 'lucide-react';
import { useAudio, CHARACTER_VOICE_DATA, CharacterVoiceLine } from '../../context/AudioContext';

interface SectionNarratorProps {
  defaultCharacterId?: 'gojo' | 'tanjiro' | 'luffy' | 'naruto' | 'anya' | 'levi';
  sectionTitle?: string;
  className?: string;
}

export const SectionNarrator: React.FC<SectionNarratorProps> = ({
  defaultCharacterId = 'gojo',
  sectionTitle = 'Hikari no Matsuri Voice Guide',
  className = '',
}) => {
  const { playCharacterVoice, stopCharacterVoice, isPlayingVoice, activeVoiceLine, isMuted, toggleMute, playSfx } = useAudio();
  const [selectedCharId, setSelectedCharId] = useState<string>(defaultCharacterId);

  const availableChars = ['gojo', 'tanjiro', 'luffy', 'naruto', 'anya', 'levi'];
  const charLines = CHARACTER_VOICE_DATA[selectedCharId] || CHARACTER_VOICE_DATA['gojo'];
  const activeLine: CharacterVoiceLine = charLines[0];

  const isCurrentPlaying = isPlayingVoice && activeVoiceLine?.characterId.toLowerCase() === selectedCharId.toLowerCase();

  const handleSelectChar = (charId: string) => {
    playSfx('click');
    setSelectedCharId(charId);
    playCharacterVoice(charId, 0);
  };

  const handleTogglePlay = () => {
    playSfx('click');
    if (isCurrentPlaying) {
      stopCharacterVoice();
    } else {
      playCharacterVoice(selectedCharId, 0);
    }
  };

  return (
    <div className={`bg-[#0F1524]/95 border-2 border-amber-500/40 rounded-3xl p-5 shadow-2xl relative overflow-hidden backdrop-blur-xl ${className}`}>
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pb-4 mb-4 border-b border-amber-500/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Volume2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-anime font-bold text-white uppercase tracking-wider flex items-center gap-2">
              {sectionTitle}
              <span className="text-[10px] bg-red-600/30 text-red-400 border border-red-500/40 px-2 py-0.5 rounded font-mono font-bold">
                CHARACTER VOICE ENGINE
              </span>
            </h4>
            <p className="text-[11px] text-[#D8D4E6]/80 font-sans">
              Choose your favorite anime character guide for expressive voice performance
            </p>
          </div>
        </div>

        {/* Mute Shortcut */}
        <button
          onClick={toggleMute}
          className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1.5 border transition-all ${
            isMuted
              ? 'bg-red-500/20 text-red-400 border-red-500/40'
              : 'bg-amber-500/10 text-amber-300 border-amber-500/30 hover:bg-amber-500/20'
          }`}
        >
          {isMuted ? (
            <>
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
              <span>Unmute All</span>
            </>
          ) : (
            <>
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Mute Audio</span>
            </>
          )}
        </button>
      </div>

      {/* Character Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 scrollbar-none">
        {availableChars.map((cId) => {
          const line = CHARACTER_VOICE_DATA[cId]?.[0];
          if (!line) return null;
          const isSelected = selectedCharId === cId;
          const isThisPlaying = isPlayingVoice && activeVoiceLine?.characterId.toLowerCase() === cId;

          return (
            <button
              key={cId}
              onClick={() => handleSelectChar(cId)}
              className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105 font-bold'
                  : 'bg-[#151C2E] hover:bg-[#1C263F] text-slate-300 border border-amber-500/20'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${isThisPlaying ? 'bg-red-500 animate-ping' : isSelected ? 'bg-slate-950' : 'bg-amber-400'}`} />
              <span>{line.characterName}</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${isSelected ? 'bg-slate-950/20 text-slate-950' : 'text-amber-400/80'}`}>
                {line.personality.split('-')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Voice Performance Card */}
      <div className="bg-[#0B0E17] border border-amber-500/30 rounded-2xl p-4 flex flex-col sm:flex-row items-center gap-4">
        
        {/* Avatar */}
        <div className="shrink-0 flex items-center gap-3">
          <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${activeLine.avatarBg} p-0.5 shadow-xl relative`}>
            <div className="w-full h-full rounded-full bg-[#0B0E17] flex items-center justify-center font-anime text-xl font-bold text-white">
              {activeLine.characterName.charAt(0)}
            </div>
            {isCurrentPlaying && (
              <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-500"></span>
              </span>
            )}
          </div>
          <div className="sm:hidden text-center">
            <span className="text-xs font-bold text-white font-anime">{activeLine.characterName}</span>
            <p className="text-[10px] text-amber-400">{activeLine.personalityDescription}</p>
          </div>
        </div>

        {/* Dialogue & Subtitles */}
        <div className="flex-1 text-center sm:text-left space-y-1">
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-anime font-bold text-white">{activeLine.characterName}</span>
            <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.2 rounded">
              {activeLine.personalityDescription}
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-200 font-sans italic font-medium leading-relaxed">
            "{activeLine.quote}"
          </p>
          {activeLine.japaneseQuote && (
            <p className="text-[11px] font-japanese text-amber-300 font-bold">
              {activeLine.japaneseQuote}
            </p>
          )}
        </div>

        {/* Play Action Button */}
        <div className="shrink-0">
          <button
            onClick={handleTogglePlay}
            disabled={isMuted}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isCurrentPlaying
                ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/40 scale-110'
                : 'bg-white/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/40'
            } ${isMuted ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            title="Play / Pause Expressive Character Voice"
          >
            {isCurrentPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current ml-0.5" />
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
