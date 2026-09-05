import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Home,
  Calendar,
  Mic,
  Ticket,
  Grid,
  Volume2,
  VolumeX,
  X,
  Play,
  Pause,
  Music,
  Sliders,
  ArrowLeft,
  Users,
  Film,
  Award,
  HelpCircle,
  Info,
  ChevronUp
} from 'lucide-react';
import { useAudio, CHARACTER_VOICE_DATA } from '../../context/AudioContext';
import { useModal } from '../../context/ModalContext';

export const MobileBottomNav: React.FC = () => {
  const location = useLocation();
  const { openTicketModal } = useModal();
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
    playCharacterVoice,
    stopCharacterVoice,
    playSfx,
  } = useAudio();

  const [activeSheet, setActiveSheet] = useState<'none' | 'voice' | 'menu' | 'audio'>('none');
  const [selectedCharId, setSelectedCharId] = useState<string>('gojo');

  const charList = ['gojo', 'tanjiro', 'luffy', 'naruto', 'anya', 'levi'];
  const currentChar = CHARACTER_VOICE_DATA[selectedCharId]?.[0];

  const handleTabClick = (sheetType: 'none' | 'voice' | 'menu' | 'audio') => {
    playSfx('click');
    if (activeSheet === sheetType) {
      setActiveSheet('none');
    } else {
      setActiveSheet(sheetType);
    }
  };

  const handlePlayVoice = (cId: string) => {
    playSfx('click');
    setSelectedCharId(cId);
    if (isPlayingVoice && activeVoiceLine?.characterId.toLowerCase() === cId) {
      stopCharacterVoice();
    } else {
      playCharacterVoice(cId, 0);
    }
  };

  const secondaryNavItems = [
    { label: 'About HNM', path: '/about', icon: Info },
    { label: 'Guests Stage', path: '/guests', icon: Users },
    { label: 'Cosplay Cup', path: '/cosplay', icon: Award },
    { label: 'Festival Videos', path: '/videos', icon: Film },
    { label: 'Vol. 2 Recap', path: '/recap', icon: Award },
    { label: 'FAQ & Rules', path: '/faq', icon: HelpCircle },
  ];

  return (
    <div className="md:hidden">
      {/* ------------------------------------------------------------- */}
      {/* 1. MOBILE BOTTOM SHEET MODAL / OVERLAY */}
      {/* ------------------------------------------------------------- */}
      {activeSheet !== 'none' && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 animate-in fade-in duration-200"
          onClick={() => setActiveSheet('none')}
        />
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. CHARACTER VOICE BOTTOM SHEET */}
      {/* ------------------------------------------------------------- */}
      {activeSheet === 'voice' && (
        <div className="fixed bottom-16 left-0 right-0 z-50 bg-[#0F1524] border-t-2 border-amber-500/50 rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[80vh] overflow-y-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Mic className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-anime font-bold text-sm text-white flex items-center gap-2">
                  Character Voice Guide
                  <span className="text-[9px] bg-red-600/30 text-red-400 border border-red-500/40 px-1.5 py-0.5 rounded font-mono font-bold">
                    EXPRESSIVE
                  </span>
                </h3>
                <p className="text-[10px] text-[#D8D4E6]/70">Tap a character to hear authentic anime voice lines</p>
              </div>
            </div>
            <button
              onClick={() => setActiveSheet('none')}
              className="text-slate-400 hover:text-white p-1 rounded-full bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Character Selector Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {charList.map((cId) => {
              const line = CHARACTER_VOICE_DATA[cId]?.[0];
              if (!line) return null;
              const isSelected = selectedCharId === cId;
              const isPlayingThis = isPlayingVoice && activeVoiceLine?.characterId.toLowerCase() === cId;

              return (
                <button
                  key={cId}
                  onClick={() => handlePlayVoice(cId)}
                  className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-2xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/30 scale-105'
                      : 'bg-[#151C2E] text-slate-300 border border-amber-500/20'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isPlayingThis ? 'bg-red-500 animate-ping' : 'bg-amber-400'}`} />
                  <span>{line.characterName.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Voice Player Card */}
          {currentChar && (
            <div className="bg-[#0B0E17] border border-amber-500/30 rounded-2xl p-4 mt-2 space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${currentChar.avatarBg} p-0.5 shrink-0`}>
                  <div className="w-full h-full rounded-full bg-[#0B0E17] flex items-center justify-center font-anime text-lg font-bold text-white">
                    {currentChar.characterName.charAt(0)}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-white font-anime truncate">{currentChar.characterName}</span>
                    <span className="text-[9px] bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full font-mono font-semibold">
                      {currentChar.personality}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 italic line-clamp-2 mt-1 font-sans">
                    "{currentChar.quote}"
                  </p>
                </div>
              </div>

              {currentChar.japaneseQuote && (
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-2 text-center">
                  <p className="text-[11px] font-japanese font-bold text-amber-300/90">
                    {currentChar.japaneseQuote}
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => handlePlayVoice(selectedCharId)}
                  className={`w-full py-2.5 rounded-xl font-anime font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                    isPlayingVoice && activeVoiceLine?.characterId.toLowerCase() === selectedCharId
                      ? 'bg-amber-500 text-slate-950 shadow-amber-500/40'
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}
                >
                  {isPlayingVoice && activeVoiceLine?.characterId.toLowerCase() === selectedCharId ? (
                    <>
                      <Pause className="w-4 h-4 fill-current" />
                      <span>Pause Voice</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                      <span>Play {currentChar.characterName} Voice</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>Festival BGM Ambience:</span>
            <button
              onClick={() => {
                playSfx('click');
                toggleBgm();
              }}
              className={`px-3 py-1 rounded-full border text-xs font-bold flex items-center gap-1.5 ${
                isBgmPlaying ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' : 'bg-white/5 text-slate-400 border-white/10'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span>{isBgmPlaying ? 'Playing' : 'Start BGM'}</span>
            </button>
          </div>

        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. AUDIO MIXER BOTTOM SHEET */}
      {/* ------------------------------------------------------------- */}
      {activeSheet === 'audio' && (
        <div className="fixed bottom-16 left-0 right-0 z-50 bg-[#0F1524] border-t-2 border-amber-500/50 rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-4">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <h3 className="font-anime font-bold text-xs text-white uppercase tracking-wider">Festival Audio Mixer</h3>
            </div>
            <button onClick={() => setActiveSheet('none')} className="text-slate-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>Master Volume</span>
                <span className="text-amber-400">{Math.round(masterVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={masterVolume}
                onChange={(e) => setMasterVolume(parseFloat(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>Character Voice</span>
                <span className="text-amber-400">{Math.round(voiceVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={voiceVolume}
                onChange={(e) => setVoiceVolume(parseFloat(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-slate-300">
                <span>Festival Ambience (BGM)</span>
                <span className="text-amber-400">{Math.round(bgmVolume * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={bgmVolume}
                onChange={(e) => setBgmVolume(parseFloat(e.target.value))}
                className="w-full accent-amber-500 h-2 bg-slate-800 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-amber-500/20">
              <button
                onClick={() => {
                  playSfx('click');
                  toggleBgm();
                }}
                className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border ${
                  isBgmPlaying ? 'bg-amber-500/20 text-amber-300 border-amber-500/50' : 'bg-white/5 text-slate-400 border-white/10'
                }`}
              >
                <Music className="w-3.5 h-3.5" />
                <span>{isBgmPlaying ? 'BGM Active' : 'Start BGM'}</span>
              </button>

              <button
                onClick={() => {
                  playSfx('click');
                  toggleMute();
                }}
                className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border ${
                  isMuted ? 'bg-red-500/20 text-red-400 border-red-500/40' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                }`}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isMuted ? 'Muted' : 'Audio On'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 4. MORE MENU BOTTOM SHEET */}
      {/* ------------------------------------------------------------- */}
      {activeSheet === 'menu' && (
        <div className="fixed bottom-16 left-0 right-0 z-50 bg-[#0F1524] border-t-2 border-amber-500/50 rounded-t-3xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-3 border-b border-amber-500/20 mb-4">
            <div className="flex items-center gap-2">
              <Grid className="w-4 h-4 text-amber-400" />
              <h3 className="font-anime font-bold text-xs text-white uppercase tracking-wider">HNM Festival Sections</h3>
            </div>
            <button onClick={() => setActiveSheet('none')} className="text-slate-400 hover:text-white p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {secondaryNavItems.map((item) => {
              const IconComp = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    playSfx('click');
                    setActiveSheet('none');
                  }}
                  className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center gap-2 border transition-all ${
                    isActive
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold shadow-md'
                      : 'bg-[#151C2E] border-amber-500/20 text-slate-300 hover:border-amber-500/40'
                  }`}
                >
                  <IconComp className={`w-5 h-5 ${isActive ? 'text-amber-400' : 'text-amber-500/80'}`} />
                  <span className="text-xs font-semibold">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="space-y-2 pt-3 border-t border-amber-500/20">
            <Link
              to="/tickets"
              onClick={() => {
                playSfx('click');
                setActiveSheet('none');
              }}
              className="w-full btn-vermilion py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
            >
              <Ticket className="w-4 h-4 text-amber-200" /> Reserve Festival Pass
            </Link>

            <Link
              to="/club"
              onClick={() => {
                playSfx('click');
                setActiveSheet('none');
              }}
              className="w-full bg-amber-500/10 text-white border border-amber-500/30 py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-amber-400" /> Go to Isshoni Nihongo Club
            </Link>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 5. MAIN MOBILE BOTTOM NAVIGATION BAR */}
      {/* ------------------------------------------------------------- */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0E17]/95 border-t border-amber-500/30 backdrop-blur-xl shadow-2xl px-2 py-2 flex items-center justify-around">
        
        {/* Home Tab */}
        <NavLink
          to="/"
          onClick={() => {
            playSfx('click');
            setActiveSheet('none');
          }}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
              isActive && activeSheet === 'none' ? 'text-amber-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
            }`
          }
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-sans font-medium">Home</span>
        </NavLink>

        {/* Schedule Tab */}
        <NavLink
          to="/schedule"
          onClick={() => {
            playSfx('click');
            setActiveSheet('none');
          }}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
              isActive && activeSheet === 'none' ? 'text-amber-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
            }`
          }
        >
          <Calendar className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-sans font-medium">Schedule</span>
        </NavLink>

        {/* Voice Character Trigger Tab (Center Action Badge) */}
        <button
          onClick={() => handleTabClick('voice')}
          className={`flex flex-col items-center justify-center -mt-4 p-2.5 rounded-full border-2 transition-all shadow-xl ${
            isPlayingVoice || activeSheet === 'voice'
              ? 'bg-amber-500 text-slate-950 border-amber-300 scale-110 shadow-amber-500/50'
              : 'bg-gradient-to-tr from-[#DC2626] to-amber-500 text-white border-amber-400'
          }`}
        >
          <Mic className={`w-5 h-5 ${isPlayingVoice ? 'animate-bounce' : ''}`} />
          <span className="sr-only">Voice Guides</span>
        </button>

        {/* Audio Mixer Quick Trigger Tab */}
        <button
          onClick={() => handleTabClick('audio')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeSheet === 'audio' || isBgmPlaying ? 'text-amber-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sliders className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-sans font-medium">Audio</span>
        </button>

        {/* More Menu Tab */}
        <button
          onClick={() => handleTabClick('menu')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
            activeSheet === 'menu' ? 'text-amber-400 font-bold scale-105' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Grid className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-sans font-medium">Menu</span>
        </button>

      </nav>
    </div>
  );
};
