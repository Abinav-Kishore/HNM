import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Play,
  Users,
  Film,
  ArrowRight,
  Award,
} from 'lucide-react';
import {
  HNM_EVENT_DETAILS,
  SPECIAL_GUESTS,
  SCHEDULE_ITEMS,
  FESTIVAL_VIDEOS,
  TICKET_TIERS,
} from '../../data/hnmData';
import { CountdownTimer } from '../CountdownTimer';
import { AnimeCharacterDisplay } from '../AnimeCharacterDisplay';
import { useModal } from '../../context/ModalContext';
import { HnmEventLogo } from '../common/HnmEventLogo';
import { ClubLogo } from '../common/ClubLogo';
import { VoiceIntro } from '../audio/VoiceIntro';

export const DesktopHomePage: React.FC = () => {
  const { openTicketModal, openVideoModal, openCosplayModal } = useModal();

  return (
    <div className="hidden xl:block min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans matsuri-ambient-bg relative overflow-x-hidden">
      
      {/* 1. True Full-Screen Edge-to-Edge Hero Section (Fits Viewport on Load) */}
      <section className="relative w-full min-h-[calc(100vh-70px)] flex flex-col justify-center py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden bg-[#08080A] border-b border-red-500/20">
        
        {/* Full-bleed Widescreen Background Artwork extending behind navigation */}
        <div className="absolute inset-0 z-0">
          <img
            src={HNM_EVENT_DETAILS.heroAnimeImage}
            alt="HNM Japanese Festival Key Visual Artwork"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center sm:object-[70%_center] md:object-[80%_35%] lg:object-[85%_30%] xl:object-[90%_25%]"
          />
          {/* Gritty Dark Red & Black Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/90 sm:via-[#08080A]/80 md:via-[#08080A]/60 lg:via-[#08080A]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/30 to-[#121217]/70" />
        </div>

        {/* Hero Content Overlay - Positioned in Two Column Desktop Layout */}
        <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center py-2">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center">
            
            {/* Left Column: Festival Info & CTAs */}
            <div className="lg:col-span-7 max-w-xl xl:max-w-2xl text-left">
              
              {/* #1 Tag & Rating */}
              <div className="inline-flex items-center gap-2 text-red-400 font-mono font-bold text-xs tracking-wider uppercase mb-3 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-md">
                <span className="text-red-400 font-extrabold">#1 JAPANESE & ANIME CULTURAL FESTIVAL</span>
                <span className="text-zinc-500">•</span>
                <span className="text-amber-400 font-bold">★★★★★</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-anime font-black tracking-tight text-white leading-tight mb-3 drop-shadow-2xl">
                HIKARI NO MATSURI <span className="text-red-500">2027</span>
              </h1>

              {/* Theme Badge */}
              <div className="inline-flex items-center gap-2 bg-[#121217]/90 border border-red-500/30 text-zinc-300 text-xs px-3.5 py-1.5 rounded-xl mb-3 backdrop-blur-md shadow-md">
                <span className="text-red-400 font-bold">Festival Theme:</span>{' '}
                <span className="font-bold text-white">{HNM_EVENT_DETAILS.theme}</span>
              </div>

              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 font-sans max-w-lg">
                Experience <span className="text-white font-semibold">Hikari no Matsuri (HNM)</span> — an extraordinary single-day Japanese cultural festival on January 8, 2027 blending traditional taiko drums, tea ceremonies, anisong live concerts, and grand cosplay masquerade.
              </p>

              {/* Event Details Quick Bar */}
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-zinc-300 mb-4 bg-[#121217]/90 p-3 rounded-xl border border-red-500/30 backdrop-blur-md w-full sm:w-auto shadow-md">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-red-400" />
                  <span>{HNM_EVENT_DETAILS.dates}</span>
                </div>
                <div className="hidden sm:block text-zinc-600">•</div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-red-400" />
                  <span>{HNM_EVENT_DETAILS.time}</span>
                </div>
                <div className="hidden sm:block text-zinc-600">•</div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>CIT Chennai</span>
                </div>
              </div>

              {/* CTA Action Buttons - Red & Black Pill Buttons */}
              <div className="flex flex-wrap items-center gap-3 w-full">
                <Link
                  to="/tickets"
                  className="btn-vermilion px-7 py-3 rounded-full text-xs font-extrabold flex items-center justify-center gap-2 shadow-xl uppercase tracking-wider"
                >
                  <Ticket className="w-4 h-4" /> Reserve Pass
                </Link>
                <button
                  onClick={() => openVideoModal('v1')}
                  className="btn-matsuri-gold px-6 py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md uppercase tracking-wider"
                >
                  <Play className="w-3.5 h-3.5 text-red-400 fill-red-400" /> Watch Trailer
                </button>
              </div>

              {/* Character Quote Card */}
              <div className="mt-5 w-full max-w-xl">
                <VoiceIntro
                  characterId="tanjiro"
                  title="Festival Lantern Guide Quote"
                  subtitle="Warm festival welcome for HNM 2027 under the glowing red lantern lights!"
                />
              </div>

              {/* Subtle Festival Metrics Pill Bar */}
              <div className="flex items-center gap-5 mt-4 pt-3 border-t border-red-500/20 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-red-400" />
                  <span><strong className="text-white">5,000+</strong> Attendees</span>
                </div>
                <div className="w-px h-3.5 bg-red-500/20" />
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-red-400" />
                  <span><strong className="text-white">20+</strong> Stages & Events</span>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Character Pop-Out Standee Figure Showcase (Lantern Guy with glowing red lanterns) */}
            <div className="lg:col-span-5 hidden lg:flex justify-end items-center relative overflow-visible min-h-[500px]">
              
              {/* Background Backdrop Frame Container */}
              <div className="w-full max-w-[380px] h-[390px] rounded-3xl bg-gradient-to-br from-red-950/50 via-[#121217] to-[#08080A] border-2 border-red-500/40 shadow-[0_0_50px_rgba(239,68,68,0.25)] relative overflow-hidden backdrop-blur-md">
                
                {/* Background Topo/Wave Pattern & Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(239,68,68,0.25),transparent_70%)]" />
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#EF4444_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Decorative Japanese Character Ambient Watermark */}
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 text-[110px] font-anime font-black text-red-500/10 select-none pointer-events-none leading-none">
                  光の祭
                </div>
              </div>

              {/* 3D POP-OUT LANTERN GUY CHARACTER FIGURE (Extends past top and bottom borders into page) */}
              <div className="absolute inset-y-0 right-2 w-full max-w-[360px] flex items-end justify-center z-20 pointer-events-none overflow-visible">
                <img
                  src={HNM_EVENT_DETAILS.popoutFigureImage}
                  alt="HNM Lantern Character Standee Figure Pop-Out"
                  referrerPolicy="no-referrer"
                  className="h-[530px] max-w-none w-auto object-contain transition-transform duration-500 hover:scale-[1.03] drop-shadow-[0_25px_35px_rgba(0,0,0,0.95)] drop-shadow-[0_0_30px_rgba(239,68,68,0.5)] transform translate-y-4"
                />
              </div>

              {/* Floating Top-Left Vol. 3 Key Visual Badge */}
              <div className="absolute top-4 left-0 z-30 bg-[#08080A]/90 border border-red-500/40 text-red-400 px-3 py-1.5 rounded-xl text-[11px] font-mono font-extrabold shadow-xl backdrop-blur-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span>03 • LANTERN FIGURE STANDEE</span>
              </div>

              {/* Floating Bottom-Left Feature Badge Pills */}
              <div className="absolute bottom-2 left-0 z-30 bg-[#08080A]/95 border border-red-500/30 p-2.5 rounded-2xl backdrop-blur-md shadow-2xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-400/40 flex items-center justify-center text-red-300 font-bold text-xs">
                  🏮
                </div>
                <div className="text-left pr-2">
                  <div className="text-[10px] font-mono font-bold text-red-400 uppercase">
                    COSPLAY MASQUERADE
                  </div>
                  <div className="text-xs font-bold text-white">
                    ₹50,000 Prize Pool
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Theme Announcement & Redesigned Premium Countdown Section */}
      <section className="py-16 bg-[#121217] border-b border-red-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <CountdownTimer />
          </div>

          {/* Official Logos Showcase Banner (Event & Club Logos) */}
          <div className="mt-12 bg-[#08080A] border border-red-500/30 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Event Logo Card */}
              <div className="bg-[#121217] p-6 rounded-2xl border border-red-500/20 flex flex-col sm:flex-row items-center gap-6 group hover:border-red-500/50 transition-colors">
                <HnmEventLogo size="xl" variant="badge" />
                <div>
                  <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest bg-red-500/10 border border-red-500/30 px-2 py-0.5 rounded">
                    OFFICIAL EVENT LOGO
                  </span>
                  <h3 className="text-lg font-anime font-bold text-white mt-1">Hikari no Matsuri (HNM)</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    Representing the vibrant energy of anime, taiko rhythm, and festival light.
                  </p>
                  <Link to="/about" className="inline-flex items-center gap-1 text-xs text-red-400 font-semibold hover:underline mt-2">
                    Event Details →
                  </Link>
                </div>
              </div>

              {/* Club Logo Card */}
              <div className="bg-[#121217] p-6 rounded-2xl border border-red-500/20 flex flex-col sm:flex-row items-center gap-6 group hover:border-red-500/50 transition-colors">
                <ClubLogo size="xl" />
                <div>
                  <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest bg-red-500/10 border border-red-500/30 px-2 py-0.5 rounded">
                    OFFICIAL CLUB LOGO
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">Isshoni Nihongo (一緒に日本語)</h3>
                  <p className="text-xs text-zinc-300 mt-1">
                    The non-profit Japanese language & cultural club hosting HNM Vol. 3 (2027).
                  </p>
                  <Link to="/club" className="inline-flex items-center gap-1 text-xs text-red-400 font-semibold hover:underline mt-2">
                    Visit Club Portal →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Anime Characters Showcase Section */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <AnimeCharacterDisplay mode="grid" />
        </div>
      </section>

      {/* 3. Featured Guests Preview */}
      <section className="py-20 bg-[#121217] border-b border-red-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="hanko-seal text-[9px]">特選</span>
                <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-wider">
                  Star Headliners
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
                FEATURED FESTIVAL GUESTS
              </h2>
              <p className="text-zinc-300 text-sm md:text-base mt-2 font-sans">
                Meet acclaimed cosplayers, maid cafe hosts, and anisong performers.
              </p>
            </div>
            <Link
              to="/guests"
              className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 bg-red-500/10 border border-red-500/30 px-4 py-2.5 rounded-xl transition-colors self-start md:self-auto"
            >
              View All Guests <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SPECIAL_GUESTS.slice(0, 3).map((guest) => (
              <div
                key={guest.id}
                className="bg-[#08080A] border border-red-500/20 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:-translate-y-0.5 shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-square relative overflow-hidden bg-[#121217]">
                    <img
                      src={guest.imageUrl}
                      alt={guest.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-red-600 text-white font-sans text-[11px] font-extrabold rounded-md shadow">
                      {guest.day}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-red-400 font-semibold mb-1">{guest.japaneseName}</div>
                    <h3 className="text-base font-sans font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{guest.name}</h3>
                    <p className="text-xs font-medium text-zinc-400 mb-3">{guest.role}</p>
                    <p className="text-xs text-zinc-300 leading-relaxed mb-4 line-clamp-2 font-sans">{guest.bio}</p>
                    
                    <div className="flex flex-wrap gap-1.5">
                      {guest.animeWorks.map((work, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#121217] border border-red-500/20 text-zinc-300 rounded font-sans">
                          #{work}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <Link
                    to="/guests"
                    className="w-full py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-300 hover:text-white rounded-xl text-xs font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 border border-red-500/30"
                  >
                    View Guest Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Featured Schedule Preview */}
      <section className="py-20 bg-[#121217] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="hanko-seal text-[9px]">日程</span>
                <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-wider">
                  Stage Time Table
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
                STAGE HIGHLIGHTS PREVIEW
              </h2>
              <p className="text-zinc-300 text-sm md:text-base mt-2 font-sans">
                A glimpse of headline events across both festival days.
              </p>
            </div>
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 bg-red-500/10 border border-red-500/30 px-4 py-2.5 rounded-xl transition-colors self-start md:self-auto"
            >
              View Complete Schedule <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {SCHEDULE_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-[#08080A] border border-red-500/20 rounded-xl p-5 flex items-start gap-4 hover:border-red-500/50 transition-colors shadow-sm"
              >
                <div className="bg-[#121217] px-3 py-2 rounded-lg border border-red-500/30 text-red-400 font-mono text-xs font-bold shrink-0 min-w-[85px] text-center">
                  {item.time}
                  <div className="text-[9px] text-red-300 font-sans font-bold mt-0.5">Day {item.day}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap font-sans">
                    <span className="text-xs text-red-400">{item.japaneseTitle}</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/10 text-zinc-300 text-[10px] font-mono border border-red-500/20">
                      {item.stage}
                    </span>
                  </div>
                  <h4 className="text-base font-sans font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-2 font-sans">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Featured Cosplay Preview */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-[#121217] border border-red-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-mono font-bold uppercase mb-4">
                  <Award className="w-4 h-4 text-red-400" /> ₹50,000 Cash Prize Pool
                </div>
                <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mb-4">
                  COSPLAY MASQUERADE CHAMPIONSHIP
                </h2>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-6 font-sans">
                  Showcase your armor craftsmanship, prop mastery, and character skits live on the HNM Main Stage! Compete in Solo Runway, Duo Skit, and Grand Masquerade categories before our guest judge panel.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/cosplay"
                    className="btn-vermilion px-6 py-3 rounded-full text-xs font-bold font-sans inline-flex items-center gap-2 shadow-sm"
                  >
                    Explore Cosplay Rules & Register <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={openCosplayModal}
                    className="btn-matsuri-gold px-5 py-3 rounded-full text-xs font-semibold font-sans inline-flex items-center gap-2"
                  >
                    Quick Entry Form
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="bg-[#08080A] p-6 rounded-2xl border border-red-500/20 space-y-3">
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-red-500/20">
                    <span className="text-zinc-300 font-sans">Craftsmanship & Props</span>
                    <span className="text-red-400 font-mono font-bold">40% Weight</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-red-500/20">
                    <span className="text-zinc-300 font-sans">Performance & Skit</span>
                    <span className="text-red-400 font-mono font-bold">30% Weight</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pb-2 border-b border-red-500/20">
                    <span className="text-zinc-300 font-sans">Character Accuracy</span>
                    <span className="text-red-400 font-mono font-bold">20% Weight</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-300 font-sans">Audience Impact</span>
                    <span className="text-red-400 font-mono font-bold">10% Weight</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Videos Preview */}
      <section className="py-20 bg-[#121217] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="hanko-seal text-[9px]">映画</span>
                <span className="text-xs font-mono font-semibold text-red-400 tracking-wider uppercase">
                  Festival Cinema
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
                POPULAR CLIPS & TRAILERS
              </h2>
            </div>
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 text-xs font-semibold text-red-400 hover:text-red-300 bg-red-500/10 border border-red-500/30 px-4 py-2.5 rounded-xl transition-colors self-start md:self-auto"
            >
              Watch All Videos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {FESTIVAL_VIDEOS.slice(0, 3).map((video) => (
              <div
                key={video.id}
                onClick={() => openVideoModal(video.id)}
                className="group relative bg-[#08080A] border border-red-500/20 rounded-xl overflow-hidden cursor-pointer hover:border-red-500/50 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              >
                <div className="aspect-video relative overflow-hidden bg-[#121217]">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#08080A]/50 group-hover:bg-[#08080A]/20 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md font-bold">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-[#08080A]/90 text-red-400 text-[10px] font-mono rounded border border-red-500/20">
                    {video.duration}
                  </span>
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-600 text-white text-[9px] font-sans font-bold rounded uppercase">
                    {video.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-sans font-bold text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-2 leading-relaxed font-sans">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Vol. 2 Memory Teaser */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-[#121217] border border-red-500/30 rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono uppercase mb-3">
                  <Film className="w-3.5 h-3.5 text-red-400" /> HNM Vol. 2 Archive
                </div>
                <h2 className="text-2xl md:text-3xl font-anime font-bold text-white mb-2">
                  HONORING THE LEGACY OF HNMVOL2.COM
                </h2>
                <p className="text-zinc-300 text-sm max-w-xl font-sans">
                  Relive over 2,800 attendees, 120 cosplayers, and 15 yatai stalls from our 2025 edition.
                </p>
              </div>

              <Link
                to="/recap"
                className="btn-vermilion px-6 py-3 rounded-full text-xs font-semibold font-sans inline-flex items-center gap-2 shrink-0"
              >
                Explore Vol. 2 Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Ticket CTA Section */}
      <section className="py-20 bg-[#121217]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="hanko-seal text-[10px]">通行手形</span>
              <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider">
                Passes & Entry
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
              GET YOUR HNM FESTIVAL PASS
            </h2>
            <p className="text-zinc-300 text-sm md:text-base mt-2 font-sans">
              Single-day access on January 8, 2027. Book early to secure your fast-track entry and festival goodies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TICKET_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-[#08080A] rounded-2xl p-6 border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-0.5 shadow-md ${
                  tier.popular ? 'border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.2)]' : 'border-red-500/20'
                }`}
              >
                <div>
                  <div className="text-xs font-semibold text-red-400 mb-1">{tier.japaneseName}</div>
                  <h3 className="text-xl font-sans font-bold text-white mb-1">{tier.name}</h3>
                  <div className="text-zinc-400 text-xs mb-4 font-sans">{tier.period}</div>
                  <div className="text-3xl font-mono font-bold text-white mb-6">₹{tier.price}</div>
                </div>

                <Link
                  to="/tickets"
                  className="w-full py-2.5 btn-vermilion rounded-full text-xs font-sans font-bold text-center block"
                >
                  View Details & Book Pass
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/tickets"
              className="text-xs text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-1"
            >
              Compare all pass benefits & perks on the Tickets page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
