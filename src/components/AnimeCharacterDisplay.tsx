import React, { useState } from 'react';
import { MessageSquare, Volume2, X } from 'lucide-react';
import { ANIME_CHARACTERS, AnimeCharacterGuest } from '../data/hnmData';
import { useAudio } from '../context/AudioContext';

interface AnimeCharacterDisplayProps {
  mode?: 'spotlight' | 'grid' | 'floating';
  characterId?: string;
  customText?: string;
  className?: string;
}

export const AnimeCharacterDisplay: React.FC<AnimeCharacterDisplayProps> = ({
  mode = 'grid',
  characterId,
  className = '',
}) => {
  const { playCharacterVoice, stopCharacterVoice, isPlayingVoice, playSfx } = useAudio();

  const [activeChar, setActiveChar] = useState<AnimeCharacterGuest>(
    characterId ? (ANIME_CHARACTERS.find(c => c.id === characterId) || ANIME_CHARACTERS[0]) : ANIME_CHARACTERS[0]
  );
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const triggerQuote = (char: AnimeCharacterGuest) => {
    setActiveChar(char);
    setShowQuoteModal(true);
    playSfx('click');

    // Extract base id like 'gojo', 'tanjiro', 'luffy', etc.
    const cleanId = char.id.replace('char-', '').toLowerCase();
    playCharacterVoice(cleanId, 0);
  };

  // Mode 2: Spotlight Single Banner
  if (mode === 'spotlight') {
    return (
      <div className={`bg-[#121217] border border-red-500/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-xl ${className}`}>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-600/15 via-red-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden p-1.5 bg-gradient-to-tr from-[#DC2626] via-[#EF4444] to-[#991B1B] shrink-0 shadow-2xl">
            <img
              src={activeChar.imageUrl}
              alt={activeChar.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                {activeChar.animeSeries}
              </span>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-300 border border-red-500/30">
                Official Festival Guest
              </span>
            </div>

            <h3 className="text-2xl font-anime font-bold text-white flex items-center justify-center md:justify-start gap-2">
              {activeChar.name} <span className="text-sm font-sans font-normal text-zinc-400">({activeChar.japaneseName})</span>
            </h3>

            <p className="text-xs text-red-400 font-bold">
              {activeChar.roleAtHnm}
            </p>

            <blockquote className="text-xs sm:text-sm text-zinc-300 italic bg-[#08080A]/80 p-3 rounded-xl border border-red-500/20 mt-2">
              "{activeChar.quote}"
            </blockquote>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <button
                onClick={() => triggerQuote(activeChar)}
                className="py-1.5 px-3 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-white border border-red-500/40 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-red-400" /> Listen to Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mode 3: Grid of Anime Characters Across Popular Series
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="hanko-seal text-[10px]">人気作</span>
          <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-wider">
            ANIME CELEBRITY LINEUP • HNM 2027
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-anime font-bold text-white flex items-center justify-center gap-2">
          Featured Anime Icons Across Popular Series
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2">
          Meet beloved characters celebrating with us at Chennai Institute of Technology!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ANIME_CHARACTERS.map((char) => (
          <div
            key={char.id}
            onClick={() => triggerQuote(char)}
            className="group bg-[#121217] border border-red-500/20 hover:border-red-500/60 rounded-2xl p-5 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden p-0.5 bg-gradient-to-tr from-[#DC2626] to-[#EF4444] shrink-0 group-hover:scale-105 transition-transform">
                <img
                  src={char.imageUrl}
                  alt={char.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="flex-1 min-w-0">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-red-400 block truncate">
                  {char.animeSeries}
                </span>
                <h4 className="text-base font-anime font-bold text-white group-hover:text-red-400 transition-colors truncate">
                  {char.name}
                </h4>
                <p className="text-[11px] text-zinc-400 truncate font-medium">
                  {char.roleAtHnm}
                </p>
              </div>
            </div>

            <div className="mt-4 bg-[#08080A] p-3 rounded-xl border border-red-500/10 relative">
              <p className="text-xs italic text-zinc-300 line-clamp-2">
                "{char.quote}"
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between text-[10px] text-red-400 font-mono">
              <span className="flex items-center gap-1 font-semibold">
                <Volume2 className="w-3 h-3 text-red-500" /> Click for Quote
              </span>
              <span className="text-zinc-500 font-bold">{char.japaneseName}</span>
            </div>
          </div>
        ))}
      </div>

      {showQuoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
          <div className="bg-[#121217] border border-red-500/50 rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl text-center overflow-hidden">
            
            <button
              onClick={() => {
                stopCharacterVoice();
                setShowQuoteModal(false);
              }}
              className="absolute top-4 right-4 p-1.5 text-zinc-400 hover:text-white bg-white/5 rounded-xl border border-white/10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-24 h-24 rounded-2xl mx-auto overflow-hidden p-1 bg-gradient-to-tr from-[#DC2626] to-[#EF4444] mb-4 shadow-xl">
              <img
                src={activeChar.imageUrl}
                alt={activeChar.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            <div className="inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-red-600/20 border border-red-500/40 text-red-400 mb-2 font-bold">
              {activeChar.animeSeries}
            </div>

            <h3 className="text-xl font-anime font-bold text-white mb-1">
              {activeChar.name} <span className="text-xs font-normal text-zinc-400">({activeChar.japaneseName})</span>
            </h3>

            <p className="text-xs text-red-400 font-semibold mb-4">
              {activeChar.roleAtHnm}
            </p>

            <div className="bg-[#08080A] p-4 rounded-2xl border border-red-500/20 text-left relative my-4">
              <MessageSquare className="w-4 h-4 text-red-400 absolute top-3 left-3 opacity-40" />
              <p className="text-sm italic text-zinc-200 pl-6 leading-relaxed">
                "{activeChar.quote}"
              </p>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => triggerQuote(activeChar)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Volume2 className={`w-4 h-4 text-red-400 ${isPlayingVoice ? 'animate-bounce' : ''}`} />
                {isPlayingVoice ? 'Playing Quote...' : 'Replay Quote'}
              </button>
              <button
                onClick={() => {
                  stopCharacterVoice();
                  setShowQuoteModal(false);
                }}
                className="flex-1 btn-vermilion py-2.5 px-4 rounded-xl font-bold text-xs shadow-md cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
