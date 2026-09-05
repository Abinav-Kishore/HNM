import React, { useState } from 'react';
import { Volume2, Music, Radio, Drum, Mic } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

export const AnimeSoundboard: React.FC = () => {
  const [activeSound, setActiveSound] = useState<string | null>(null);
  const { playCharacterVoice, playSfx } = useAudio();

  const playSynthSound = (type: 'taiko' | 'chime' | 'cheer' | 'powerup') => {
    playSfx(type === 'taiko' ? 'taiko' : 'shinobue');
    if (type === 'taiko') setActiveSound('ドン! (DON! Taiko Drum)');
    if (type === 'chime') setActiveSound('桜! (Sakura Pentatonic Chime)');
    if (type === 'powerup') setActiveSound('気! (Ki Power Up!)');
    if (type === 'cheer') setActiveSound('祭りだ! (Matsuri Festival Cheer)');

    setTimeout(() => setActiveSound(null), 1200);
  };

  const handlePlayVoice = (charId: string) => {
    playSfx('click');
    playCharacterVoice(charId, 0);
    setActiveSound(`${charId.toUpperCase()} Character Voice`);
    setTimeout(() => setActiveSound(null), 2000);
  };

  return (
    <div className="bg-[#121217] border border-red-500/30 rounded-2xl p-5 sm:p-6 shadow-xl seigaiha-pattern">
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-500/20">
        <div className="flex items-center gap-2">
          <span className="hanko-seal text-[9px]">和音</span>
          <Volume2 className="w-4 h-4 text-red-400" />
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-sans">
            Matsuri Voice & Sound Board • 効果音
          </h4>
        </div>
        {activeSound && (
          <span className="text-xs px-2.5 py-0.5 bg-red-600/20 text-red-400 border border-red-500/30 rounded-md font-sans font-medium">
            Active: {activeSound}
          </span>
        )}
      </div>

      {/* Festival Sound Effects */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
        <button
          onClick={() => playSynthSound('taiko')}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#08080A] border border-red-500/20 hover:border-red-500/60 text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 group shadow-sm cursor-pointer"
        >
          <Drum className="w-5 h-5 mb-1 text-red-500" />
          <span className="text-xs font-semibold font-sans">太鼓 (Taiko Drum)</span>
          <span className="text-[10px] text-red-400">Boom! 「ドン!」</span>
        </button>

        <button
          onClick={() => playSynthSound('chime')}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#08080A] border border-red-500/20 hover:border-red-500/60 text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 group shadow-sm cursor-pointer"
        >
          <Music className="w-5 h-5 mb-1 text-red-400" />
          <span className="text-xs font-semibold font-sans">桜 (Sakura Flute)</span>
          <span className="text-[10px] text-red-300">Shinobue Melody</span>
        </button>

        <button
          onClick={() => playSynthSound('powerup')}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#08080A] border border-red-500/20 hover:border-red-500/60 text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 group shadow-sm cursor-pointer"
        >
          <Radio className="w-5 h-5 mb-1 text-red-400" />
          <span className="text-xs font-semibold font-sans">気 (Ki Charge!)</span>
          <span className="text-[10px] text-red-300">Anime Aura</span>
        </button>

        <button
          onClick={() => playSynthSound('cheer')}
          className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#08080A] border border-red-500/20 hover:border-red-500/60 text-zinc-300 hover:text-white transition-all duration-300 hover:-translate-y-0.5 group shadow-sm cursor-pointer"
        >
          <Music className="w-5 h-5 mb-1 text-red-500" />
          <span className="text-xs font-semibold font-sans">祭 (Matsuri Cheer)</span>
          <span className="text-[10px] text-red-300">Festival Joy!</span>
        </button>
      </div>

      {/* Expressive Character Voice Triggers */}
      <div className="pt-3 border-t border-red-500/20">
        <p className="text-[11px] font-mono text-red-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <Mic className="w-3.5 h-3.5 text-red-400" /> Expressive Character Performances:
        </p>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => handlePlayVoice('gojo')}
            className="px-3 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-red-500/30 text-zinc-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>Gojo Voice</span>
          </button>
          <button
            onClick={() => handlePlayVoice('tanjiro')}
            className="px-3 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-red-500/30 text-zinc-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Tanjiro Voice</span>
          </button>
          <button
            onClick={() => handlePlayVoice('luffy')}
            className="px-3 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-red-500/30 text-zinc-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span>Luffy Voice</span>
          </button>
        </div>
      </div>

    </div>
  );
};

