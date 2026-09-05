import React, { useState } from 'react';
import { Volume2, VolumeX, Music, Sliders, X, Pause } from 'lucide-react';
import { useAudio } from '../../context/AudioContext';

export const AudioControlBar: React.FC = () => {
  const {
    isMuted,
    toggleMute,
    masterVolume,
    setMasterVolume,
    voiceVolume,
    setVoiceVolume,
    bgmVolume,
    setBgmVolume,
    isBgmPlaying,
    toggleBgm,
    isPlayingVoice,
    activeVoiceLine,
    stopCharacterVoice,
    playSfx,
  } = useAudio();

  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="hidden md:block fixed bottom-5 left-5 z-40 select-none">
      
      {/* Expanded Audio Settings Modal/Popover */}
      {showSettings && (
        <div className="mb-3 w-80 bg-[#121217]/95 border-2 border-red-500/40 rounded-3xl p-5 shadow-2xl backdrop-blur-2xl text-white space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          
          <div className="flex items-center justify-between pb-3 border-b border-red-500/20">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-red-400" />
              <h4 className="font-anime font-bold text-xs uppercase tracking-wider">Festival Audio Mixer</h4>
            </div>
            <button
              onClick={() => setShowSettings(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-full hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Master Volume */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono text-zinc-300">
              <span>Master Volume</span>
              <span className="text-red-400">{Math.round(masterVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={masterVolume}
              onChange={(e) => setMasterVolume(parseFloat(e.target.value))}
              className="w-full accent-red-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Voice Volume */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono text-zinc-300">
              <span>Character Voice</span>
              <span className="text-red-400">{Math.round(voiceVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={voiceVolume}
              onChange={(e) => setVoiceVolume(parseFloat(e.target.value))}
              className="w-full accent-red-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* BGM Volume */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-mono text-zinc-300">
              <span>Festival Ambience (BGM)</span>
              <span className="text-red-400">{Math.round(bgmVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={bgmVolume}
              onChange={(e) => setBgmVolume(parseFloat(e.target.value))}
              className="w-full accent-red-500 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Quick BGM & Mute Controls */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-red-500/20">
            <button
              onClick={() => {
                playSfx('click');
                toggleBgm();
              }}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                isBgmPlaying
                  ? 'bg-red-500/20 text-red-300 border-red-500/50'
                  : 'bg-white/5 text-zinc-400 border-white/10 hover:bg-white/10'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span>{isBgmPlaying ? 'BGM On' : 'Start BGM'}</span>
            </button>

            <button
              onClick={() => {
                playSfx('click');
                toggleMute();
              }}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                isMuted
                  ? 'bg-red-500/20 text-red-400 border-red-500/40'
                  : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
              }`}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span>{isMuted ? 'Muted' : 'Audio On'}</span>
            </button>
          </div>

        </div>
      )}

      {/* Main Floating Audio Bar */}
      <div className="bg-[#121217]/95 border-2 border-red-500/40 rounded-full p-2 shadow-2xl backdrop-blur-xl flex items-center gap-2">
        
        {/* Character Voice Indicator / Avatar if playing */}
        {isPlayingVoice && activeVoiceLine ? (
          <div
            onClick={stopCharacterVoice}
            className="flex items-center gap-2 bg-red-500/20 border border-red-500/40 px-3 py-1 rounded-full cursor-pointer hover:bg-red-500/30 transition-colors"
            title="Click to stop voice narration"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span className="text-xs font-anime font-bold text-red-300 truncate max-w-[120px]">
              {activeVoiceLine.characterName}
            </span>
            <Pause className="w-3.5 h-3.5 text-red-400 fill-current" />
          </div>
        ) : (
          <button
            onClick={() => {
              playSfx('shinobue');
              toggleBgm();
            }}
            className={`p-2 rounded-full transition-all cursor-pointer ${
              isBgmPlaying
                ? 'bg-red-500 text-white shadow-md animate-pulse'
                : 'bg-white/10 hover:bg-white/20 text-red-400'
            }`}
            title="Toggle Festival Background Ambience (Japanese Instruments)"
          >
            <Music className="w-4 h-4" />
          </button>
        )}

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          className={`p-2 rounded-full transition-all cursor-pointer ${
            isMuted ? 'bg-red-500/20 text-red-400' : 'bg-white/10 hover:bg-white/20 text-white'
          }`}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        {/* Mixer/Settings Toggle */}
        <button
          onClick={() => {
            playSfx('click');
            setShowSettings((prev) => !prev);
          }}
          className={`p-2 rounded-full transition-all cursor-pointer ${
            showSettings ? 'bg-red-500 text-white font-bold' : 'bg-white/10 hover:bg-white/20 text-red-400'
          }`}
          title="Open Audio Controls & Character Voice Settings"
        >
          <Sliders className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};
