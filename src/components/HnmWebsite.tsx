import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Ticket,
  Award,
  ExternalLink,
  ChevronDown,
  Utensils,
  Music,
  Users,
  Camera,
  Store,
  CheckCircle2,
  Share2,
  Info,
  Layers,
  Flame,
  Play,
  Tv,
  Star,
  Film,
  Volume2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import {
  HNM_EVENT_DETAILS,
  SCHEDULE_ITEMS,
  TICKET_TIERS,
  VOL2_HIGHLIGHTS,
  FAQ_ITEMS,
  FESTIVAL_VIDEOS,
  SPECIAL_GUESTS,
  GALLERY_PHOTOS
} from '../data/hnmData';
import { TicketTier, EventScheduleItem, VideoClip } from '../types';
import { TicketModal } from './TicketModal';
import { CosplayModal } from './CosplayModal';
import { VendorModal } from './VendorModal';
import { VideoModal } from './VideoModal';
import { AnimeSoundboard } from './AnimeSoundboard';
import { AnimeQuizWidget } from './AnimeQuizWidget';

interface HnmWebsiteProps {
  onReturnToClub: () => void;
}

export function HnmWebsite({ onReturnToClub }: HnmWebsiteProps) {
  const [selectedStage, setSelectedStage] = useState<string>('All');
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<TicketTier | null>(null);
  const [cosplayModalOpen, setCosplayModalOpen] = useState(false);
  const [vendorModalOpen, setVendorModalOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Video modal state
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string>('v1');

  // Countdown timer calculation to Jan 8, 2027
  const targetDate = new Date('2027-01-08T09:00:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = Math.max(0, targetDate - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / 1000 / 60) % 60),
      secs: Math.floor((diff / 1000) % 60),
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = Math.max(0, targetDate - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / 1000 / 60) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const openTicketModalForTier = (tier: TicketTier) => {
    setSelectedTier(tier);
    setTicketModalOpen(true);
  };

  const handleWatchVideo = (videoId: string) => {
    setActiveVideoId(videoId);
    setVideoModalOpen(true);
  };

  const filteredSchedule = SCHEDULE_ITEMS.filter(item => {
    if (selectedStage !== 'All' && item.stage !== selectedStage) return false;
    return true;
  });

  return (
    <div className="min-h-screen anime-bg-pattern text-slate-100 font-sans selection:bg-rose-500 selection:text-white relative overflow-hidden">
      
      {/* Falling Sakura Petals Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
        <div className="absolute top-0 left-[10%] w-3.5 h-3.5 bg-pink-300/60 rounded-full petal-anim" style={{ animationDelay: '0s', animationDuration: '9s' }} />
        <div className="absolute top-0 left-[25%] w-2.5 h-2.5 bg-pink-400/70 rounded-full petal-anim" style={{ animationDelay: '2s', animationDuration: '11s' }} />
        <div className="absolute top-0 left-[55%] w-4 h-4 bg-rose-300/60 rounded-full petal-anim" style={{ animationDelay: '4s', animationDuration: '8s' }} />
        <div className="absolute top-0 left-[75%] w-3 h-3 bg-pink-200/70 rounded-full petal-anim" style={{ animationDelay: '1s', animationDuration: '12s' }} />
        <div className="absolute top-0 left-[90%] w-3.5 h-3.5 bg-rose-400/60 rounded-full petal-anim" style={{ animationDelay: '5s', animationDuration: '10s' }} />
      </div>

      {/* Top Banner: Club Switcher & Archival Link */}
      <div className="bg-[#06030c] border-b border-white/10 px-4 py-2 text-xs relative z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <button
              onClick={onReturnToClub}
              className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-slate-200 px-3 py-1 rounded-md text-xs font-sans font-medium transition-all duration-200 border border-white/10"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-purple-400" /> Return to Isshoni Nihongo Main Website
            </button>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="hidden md:inline text-slate-400 font-serif">
              Hikari no Matsuri (光の祭り) Official Festival Portal
            </span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="text-purple-300 font-medium flex items-center gap-1 font-sans text-xs">
              <Calendar className="w-3 h-3 text-purple-400" /> HNM 2027 (Vol. 3)
            </span>
            <span className="text-slate-700">|</span>
            <a
              href="https://hnmvol2.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 flex items-center gap-1 transition-colors text-slate-400 text-xs font-sans"
            >
              Archive: HNM Vol. 2 (2025) <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Fixed Subtle Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080410]/90 backdrop-blur-md border-b border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-base font-serif border border-purple-400/30">
              光
            </div>
            <div>
              <div className="font-anime text-base font-bold tracking-wide text-white flex items-center gap-2">
                HNM 2027 <span className="text-[10px] font-sans font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-0.5 rounded uppercase">VOL. 3</span>
              </div>
              <div className="text-[10px] text-slate-400 font-serif tracking-widest uppercase">
                Hikari no Matsuri • 光の祭り
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-slate-300 font-sans">
            <a href="#videos" className="hover:text-cyan-300 transition-colors flex items-center gap-1.5">
              <Tv className="w-3.5 h-3.5 text-cyan-400" /> Videos
            </a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">About HNM</a>
            <a href="#guests" className="hover:text-cyan-300 transition-colors">Special Guests</a>
            <a href="#schedule" className="hover:text-cyan-300 transition-colors">Stage Schedule</a>
            <a href="#tickets" className="hover:text-cyan-300 transition-colors">Festival Passes</a>
            <a href="#cosplay" className="hover:text-cyan-300 transition-colors">Cosplay</a>
            <a href="#recap" className="hover:text-cyan-300 transition-colors">Vol. 2 Recap</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openTicketModalForTier(TICKET_TIERS[1])}
              className="bg-purple-600 hover:bg-purple-500 text-white font-sans font-semibold px-4 py-2 rounded-lg text-xs flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              <Ticket className="w-3.5 h-3.5" /> Get Pass
            </button>
          </div>
        </div>
      </header>

      {/* Full-Viewport Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-between pt-28 pb-16 px-4 md:px-8 lg:px-12 overflow-hidden bg-[#080410] border-b border-white/10">
        
        {/* Full Viewport Background Image Fill */}
        <div className="absolute inset-0 z-0">
          <img
            src={HNM_EVENT_DETAILS.heroAnimeImage}
            alt="HNM 2026 Key Visual Artwork"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center lg:object-[82%_18%]"
          />
          
          {/* Subtle Dark Gradient Overlays for High Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080410] via-[#080410]/85 to-transparent lg:to-[#080410]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080410] via-[#080410]/40 to-black/50" />
        </div>

        {/* Content Overlay */}
        <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center py-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Festival Title & Description */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                
                {/* Japanese Subtitle */}
                <div className="text-cyan-400 font-serif font-semibold text-sm md:text-lg tracking-widest uppercase mb-2">
                  {HNM_EVENT_DETAILS.japaneseTitle} • <span className="text-purple-300">VOL. 3</span>
                </div>

                {/* Main Hero Display Heading */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-anime font-black tracking-wide text-white leading-tight mb-4">
                  HIKARI NO MATSURI <span className="text-cyan-300">2027</span>
                </h1>

                {/* Theme Tag */}
                <div className="inline-flex items-center gap-2 bg-[#120a26] border border-white/10 text-purple-200 font-serif text-xs sm:text-sm px-3.5 py-1.5 rounded-lg mb-6">
                  <span className="text-slate-400 font-sans">Theme:</span> <span className="font-sans font-semibold text-cyan-300">{HNM_EVENT_DETAILS.theme}</span>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-sans">
                  Step into <span className="text-white font-semibold">HNM 2027 (Hikari no Matsuri Vol. 3)</span> — the premier single-day Japanese anime, cosplay masquerade, tea ceremony, anisong concert, and Yatai food festival on January 8, 2027. Continuing the proud legacy of <a href="https://hnmvol2.com/" target="_blank" rel="noreferrer" className="underline text-cyan-300 hover:text-cyan-200 transition-colors">hnmvol2.com (2025)</a>.
                </p>

                {/* Event Details Info Bar */}
                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-medium text-slate-300 mb-8 bg-[#120a26] p-4 rounded-xl border border-white/10 w-full sm:w-auto">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{HNM_EVENT_DETAILS.dates}</span>
                  </div>
                  <div className="hidden sm:block text-slate-700">•</div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>{HNM_EVENT_DETAILS.time}</span>
                  </div>
                  <div className="hidden sm:block text-slate-700">•</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                    <span>City Center Convention</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 w-full">
                  <button
                    onClick={() => openTicketModalForTier(TICKET_TIERS[1])}
                    className="bg-purple-600 hover:bg-purple-500 text-white font-sans font-bold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-sm flex items-center justify-center gap-2"
                  >
                    <Ticket className="w-4 h-4" /> Get Festival Pass
                  </button>                  
                  <button
                    onClick={() => handleWatchVideo('v1')}
                    className="bg-transparent hover:bg-white/5 text-slate-200 border border-white/20 hover:border-cyan-400 font-sans font-semibold px-6 py-3.5 rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" /> Watch Trailer
                  </button>
                </div>

              </div>

              {/* Right Column: Hero Artwork Display Card */}
              <div className="lg:col-span-5 relative">
                
                {/* Character Image Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#120a26] shadow-xl group">
                  <img
                    src={HNM_EVENT_DETAILS.heroAnimeImage}
                    alt="HNM 2026 Key Visual Character"
                    referrerPolicy="no-referrer"
                    className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080410] via-transparent to-transparent opacity-80" />
                  
                  {/* Character Overlay Label */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#080410]/90 backdrop-blur-md rounded-xl border border-white/10 text-left flex items-center justify-between">
                    <div>
                      <p className="text-xs font-sans font-bold text-white">Hikari Gojo Mascot</p>
                      <p className="text-[11px] text-slate-400 font-serif">Anime & Cultural Flagship</p>
                    </div>
                    <span className="bg-purple-600 text-white font-sans font-semibold text-[11px] px-3 py-1 rounded">
                      OCT 24-25
                    </span>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="flex items-center justify-around mt-4 bg-[#120a26] border border-white/10 p-4 rounded-xl text-left">
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-sm font-bold text-white font-sans">5,000+</div>
                      <div className="text-[11px] text-slate-400">Expected Attendees</div>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-sm font-bold text-white font-sans">20+ Events</div>
                      <div className="text-[11px] text-slate-400">Stages & Booths</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Popular Clips Strip inside Hero Section */}
            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-base md:text-lg font-sans font-bold text-white flex items-center gap-2">
                    <Film className="w-4 h-4 text-cyan-400" /> Popular Clips & Festival Highlights
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5 font-sans">Watch live stage clips, cosplay masquerade, and anisong performances.</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      const el = document.getElementById('hero-clips-scroll');
                      if (el) el.scrollBy({ left: -280, behavior: 'smooth' });
                    }}
                    className="w-8 h-8 rounded-lg bg-[#120a26] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      const el = document.getElementById('hero-clips-scroll');
                      if (el) el.scrollBy({ left: 280, behavior: 'smooth' });
                    }}
                    className="w-8 h-8 rounded-lg bg-[#120a26] border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Horizontal Clips Carousel Strip */}
              <div id="hero-clips-scroll" className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-none snap-x">
                {FESTIVAL_VIDEOS.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => handleWatchVideo(video.id)}
                    className="min-w-[240px] sm:min-w-[280px] bg-[#120a26] border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-0.5 shadow-sm group snap-start"
                  >
                    <div className="aspect-video relative overflow-hidden bg-slate-950">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                        <div className="w-9 h-9 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-md font-bold">
                          <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-slate-950/90 text-cyan-300 text-[10px] font-mono rounded border border-white/10">
                        {video.duration}
                      </span>
                      <span className="absolute top-2 left-2 px-2 py-0.5 bg-purple-600 text-white text-[9px] font-sans font-semibold rounded uppercase">
                        {video.category}
                      </span>
                    </div>
                    <div className="p-3 text-left">
                      <h4 className="text-xs font-sans font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {video.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-1 font-sans">{video.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          {/* Anime Soundboard & Countdown Box Container */}
          <div className="grid lg:grid-cols-12 gap-6 max-w-7xl mx-auto mt-10">
            {/* Interactive Audio Soundboard */}
            <div className="lg:col-span-6">
              <AnimeSoundboard />
            </div>

            {/* Countdown Box */}
            <div className="lg:col-span-6 bg-[#120a26] p-5 sm:p-6 rounded-2xl border border-white/10 shadow-sm flex flex-col justify-center">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-300 mb-4 flex items-center justify-center gap-1.5 font-sans font-semibold">
                <Flame className="w-4 h-4 text-purple-400" /> Countdown to Opening Ceremony
              </div>
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-[#080410] p-3 rounded-xl border border-white/10">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-cyan-300">{timeLeft.days}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mt-1">Days</div>
                </div>
                <div className="bg-[#080410] p-3 rounded-xl border border-white/10">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-purple-300">{timeLeft.hours}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mt-1">Hours</div>
                </div>
                <div className="bg-[#080410] p-3 rounded-xl border border-white/10">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-slate-200">{timeLeft.mins}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mt-1">Mins</div>
                </div>
                <div className="bg-[#080410] p-3 rounded-xl border border-white/10">
                  <div className="font-mono text-2xl sm:text-3xl font-bold text-emerald-300">{timeLeft.secs}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mt-1">Secs</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Video & Media Section */}
      <section id="videos" className="py-24 bg-[#0c061a] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[10px] font-mono font-semibold text-cyan-400 tracking-wider uppercase mb-2 inline-block">
                Festival Media & Highlights
              </span>
              <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
                FESTIVAL VIDEOS & AFTERMOVIES
              </h2>
              <p className="text-slate-400 text-sm md:text-base mt-2 font-sans">
                Watch live stage performances, cosplay masquerades, and taiko drum thunder.
              </p>
            </div>
            <button
              onClick={() => handleWatchVideo('v1')}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-sans font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-0.5 self-start md:self-auto"
            >
              <Film className="w-4 h-4" /> Open Cinema Mode
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FESTIVAL_VIDEOS.map((video) => (
              <div
                key={video.id}
                onClick={() => handleWatchVideo(video.id)}
                className="group relative bg-[#120a26] border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-950">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-md font-bold">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-slate-950/90 text-cyan-300 text-[10px] font-mono rounded border border-white/10">
                    {video.duration}
                  </span>
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-purple-600 text-white text-[9px] font-sans font-semibold rounded uppercase">
                    {video.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-sans font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed font-sans">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - What Makes Us Special & Quiz */}
      <section id="about" className="py-24 bg-[#080410] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-semibold text-purple-400 uppercase tracking-wider mb-2 inline-block">
              Cultural Immersion
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white tracking-wide">
              WHAT MAKES HNM SPECIAL
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 font-sans">
              Combining authentic Japanese cultural traditions with an energetic anime convention experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1 */}
            <div className="bg-[#120a26] border border-white/10 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-sans font-bold text-white mb-3">
                Seamless Experience
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                Enjoy <span className="text-purple-300 font-semibold">instant digital tickets</span>, fast-track QR code entry, interactive stage timetables, and dedicated cosplay lounges for a smooth festival.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#120a26] border border-white/10 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-sans font-bold text-white mb-3">
                Community Spirit
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                Connect with thousands of fellow anime lovers, Japanese language students, cosplayers, and artists under our theme <span className="text-purple-300 font-semibold">Kizuna (絆 - Unbreakable Bonds)</span>.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#120a26] border border-white/10 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-base font-sans font-bold text-white mb-3">
                Authentic Japanese Yatai
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-sans">
                Indulge in authentic piping hot <span className="text-purple-300 font-semibold">Takoyaki</span>, miso ramen, taiyaki waffles, Japanese ramune, and matcha tea prepared by artisan vendors.
              </p>
            </div>

          </div>

          {/* Interactive Anime Quiz Widget */}
          <div className="max-w-4xl mx-auto">
            <AnimeQuizWidget />
          </div>

        </div>
      </section>

      {/* Section 4 - Special Anime & Cosplay Guests */}
      <section id="guests" className="py-24 bg-[#0c061a] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-semibold text-purple-400 uppercase tracking-wider mb-2 inline-block">
              Featured Guests
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
              SPECIAL GUESTS & ARTISTS
            </h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 font-sans">
              Meet acclaimed cosplayers, maid cafe hosts, anisong live bands, and traditional Shodo calligraphers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_GUESTS.map((guest) => (
              <div
                key={guest.id}
                className="bg-[#120a26] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-square relative overflow-hidden bg-slate-950">
                    <img
                      src={guest.imageUrl}
                      alt={guest.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-purple-600 text-white font-sans text-[11px] font-semibold rounded-md shadow">
                      {guest.day}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-cyan-400 font-serif font-medium mb-1">{guest.japaneseName}</div>
                    <h3 className="text-base font-sans font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">{guest.name}</h3>
                    <p className="text-xs font-medium text-slate-400 mb-3">{guest.role}</p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4 font-sans">{guest.bio}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {guest.animeWorks.map((work, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#080410] border border-white/10 text-slate-300 rounded font-sans">
                          #{work}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0">
                  <button
                    onClick={() => setCosplayModalOpen(true)}
                    className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-sans font-semibold transition-all duration-300 shadow-sm"
                  >
                    Meet & Greet Info
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Section 5 - Official Stage Schedule */}
      <section id="schedule" className="py-24 bg-[#080410] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-[10px] font-mono font-semibold text-purple-400 uppercase tracking-wider mb-2 inline-block">
                Stage Time Table
              </span>
              <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">OFFICIAL STAGE SCHEDULE</h2>
              <p className="text-slate-400 text-sm md:text-base mt-1 font-sans">
                Explore stages, performances, and workshops scheduled for January 8, 2027.
              </p>
            </div>

            {/* Single Day Badge */}
            <div className="flex items-center gap-2 bg-[#120a26] px-4 py-2.5 rounded-xl border border-purple-500/30 text-xs font-mono text-purple-300">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>January 8, 2027 • 09:00 AM - 08:30 PM</span>
            </div>
          </div>

          {/* Stage Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['All', 'Main Stage', 'Culture Arena', 'Workshop Zone', 'Exhibition Hall', 'Main Courtyard'].map((stg) => (
              <button
                key={stg}
                onClick={() => setSelectedStage(stg)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors border cursor-pointer ${
                  selectedStage === stg
                    ? 'bg-purple-600/20 border-purple-400 text-purple-300 font-semibold'
                    : 'bg-[#120a26] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                {stg}
              </button>
            ))}
          </div>

          {/* Schedule List */}
          <div className="space-y-3">
            {filteredSchedule.length > 0 ? (
              filteredSchedule.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#120a26] border border-white/10 rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-purple-400/40 transition-colors shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#080410] px-3 py-2 rounded-lg border border-white/10 text-cyan-300 font-mono text-xs font-bold shrink-0 min-w-[85px] text-center">
                      {item.time}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap font-sans">
                        <span className="text-xs font-serif text-slate-400">{item.japaneseTitle}</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 text-[10px] font-mono border border-white/10">
                          {item.stage}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                          item.tag === 'Ceremony' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                          item.tag === 'Performance' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' :
                          item.tag === 'Contest' ? 'bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30' :
                          'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-base font-sans font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 font-sans">{item.description}</p>
                      {item.performer && (
                        <div className="text-xs text-purple-300 font-medium mt-1 font-sans">
                          Featured: {item.performer}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => openTicketModalForTier(TICKET_TIERS[1])}
                    className="shrink-0 self-start md:self-center text-xs font-semibold font-sans text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    Attend Session →
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-slate-500 text-sm font-sans">
                No scheduled events match the selected stage filter.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 6 - Ticket Tiers */}
      <section id="tickets" className="py-24 bg-[#0c061a] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-semibold text-purple-400 uppercase tracking-wider mb-2 inline-block">
              Passes & Entry
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">FESTIVAL PASSES</h2>
            <p className="text-slate-400 text-sm md:text-base mt-2 font-sans">
              Book early to secure your fast-track entry and official festival goodies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TICKET_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-[#120a26] rounded-2xl p-6 md:p-8 border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-0.5 shadow-sm ${
                  tier.popular
                    ? 'border-purple-500/60'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 right-6 bg-purple-600 text-white font-sans font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-serif text-cyan-400 mb-1">{tier.japaneseName}</div>
                  <h3 className="text-xl font-sans font-bold text-white mb-1">{tier.name}</h3>
                  <div className="text-slate-400 text-xs mb-4 font-sans">{tier.period}</div>

                  <div className="flex items-baseline gap-1 my-4 pb-4 border-b border-white/10">
                    <span className="text-3xl md:text-4xl font-mono font-bold text-white">₹{tier.price}</span>
                    <span className="text-xs text-slate-400 font-sans">/ pass</span>
                  </div>

                  <ul className="space-y-2.5 mb-8 text-xs text-slate-300 font-sans">
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openTicketModalForTier(tier)}
                  className={`w-full py-3 rounded-xl font-sans font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${
                    tier.popular
                      ? 'bg-purple-600 hover:bg-purple-500 text-white'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <Ticket className="w-4 h-4" /> Reserve Pass
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7 - Vol. 2 Memory & Archives */}
      <section id="recap" className="py-24 bg-[#080410] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="bg-[#120a26] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase mb-4">
                <Film className="w-3.5 h-3.5 text-purple-400" /> Looking back at HNM Vol. 2 (2025)
              </div>
              <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mb-4">
                HONORING THE LEGACY OF HNMVOL2.COM
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 font-sans">
                In 2025, Isshoni Nihongo organized <span className="text-cyan-300 font-semibold">Hikari no Matsuri Vol. 2</span> at <code>hnmvol2.com</code>. It brought together over 2,800 Japanese culture fans, cosplayers, artists, and language learners. Vol. 3 on January 8, 2027 continues this proud tradition!
              </p>

              {/* Stat Counters */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {VOL2_HIGHLIGHTS.map((h, i) => (
                  <div key={i} className="bg-[#080410] p-4 rounded-xl border border-white/10">
                    <div className="font-sans font-bold text-xl text-purple-300 mb-1">{h.title}</div>
                    <div className="text-xs text-slate-400 font-sans">{h.desc}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://hnmvol2.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-500 text-white font-sans px-6 py-3 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-300 shadow-sm"
                >
                  Visit HNM 2025 Archive (hnmvol2.com) <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 - FAQ & Venue Details */}
      <section id="faq" className="py-24 bg-[#0c061a] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono font-semibold text-purple-400 uppercase tracking-wider mb-2 inline-block">
              Questions & Info
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#120a26] border border-white/10 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-sans text-sm font-semibold text-white hover:text-purple-300 transition-colors"
                  >
                    <span>{item.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-purple-400' : ''}`} />
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-5 pt-0 text-xs sm:text-sm text-slate-300 border-t border-white/10 leading-relaxed font-sans mt-2">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Venue Location Banner */}
          <div className="mt-12 bg-[#120a26] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-sans font-bold text-white">Event Venue</h3>
                <p className="text-sm text-slate-300 font-sans">Grand Convention Center, City Center</p>
                <p className="text-xs text-slate-400 mt-0.5 font-sans">Metro Station Gate 2 • Free Parking Available for Pass Holders</p>
              </div>
            </div>
            <button
              onClick={() => alert('Opening maps direction to Grand Convention Center')}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-5 py-2.5 rounded-xl text-xs font-semibold font-sans shrink-0 transition-colors"
            >
              Get Directions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#06030c] border-t border-white/10 py-12 text-xs text-slate-400 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold font-serif text-sm">
              光
            </div>
            <div>
              <div className="font-anime text-sm font-bold text-white">Hikari no Matsuri 2027 (HNM Vol. 3)</div>
              <div className="text-[11px] text-slate-500 font-sans">Organized by Isshoni Nihongo Language & Culture Club</div>
            </div>
          </div>

          <div className="flex items-center gap-6 text-slate-400 font-sans text-xs">
            <button onClick={onReturnToClub} className="hover:text-purple-300 transition-colors">
              Isshoni Nihongo Club
            </button>
            <a href="https://hnmvol2.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition-colors">
              HNM Vol. 2 (2025)
            </a>
            <a href="#schedule" className="hover:text-purple-300 transition-colors">
              Schedule
            </a>
            <a href="#tickets" className="hover:text-purple-300 transition-colors">
              Passes
            </a>
          </div>

          <div className="text-slate-500 text-center md:text-right font-sans">
            © 2027 Isshoni Nihongo. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modals */}
      <TicketModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
        selectedTier={selectedTier}
        tiers={TICKET_TIERS}
      />
      <CosplayModal
        isOpen={cosplayModalOpen}
        onClose={() => setCosplayModalOpen(false)}
      />
      <VendorModal
        isOpen={vendorModalOpen}
        onClose={() => setVendorModalOpen(false)}
      />
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        initialVideoId={activeVideoId}
      />

    </div>
  );
}

