import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Play,
  ArrowRight,
  ChevronRight,
  Mic,
  Award,
  Film,
  ChevronDown
} from 'lucide-react';
import {
  HNM_EVENT_DETAILS,
  SPECIAL_GUESTS,
  SCHEDULE_ITEMS,
  FESTIVAL_VIDEOS,
  TICKET_TIERS,
} from '../../data/hnmData';
import { CountdownTimer } from '../CountdownTimer';
import { AnimeSoundboard } from '../AnimeSoundboard';
import { useModal } from '../../context/ModalContext';
import { VoiceIntro } from '../audio/VoiceIntro';

export const MobileHomePage: React.FC = () => {
  const { openVideoModal, openCosplayModal } = useModal();

  return (
    <div className="block md:hidden min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans pb-16 overflow-x-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. NATIVE ANIME APP HERO - 9:16 Dedicated Mobile Artwork */}
      {/* ------------------------------------------------------------- */}
      <section className="relative w-full bg-[#08080A] border-b border-red-500/20">
        
        {/* Character Portrait Top Banner (9:16 Dedicated Mobile Artwork) */}
        <div className="relative w-full aspect-[9/12] max-h-[460px] overflow-hidden">
          <img
            src={HNM_EVENT_DETAILS.heroAnimeImageMobile}
            alt="HNM Mobile Hero Anime Character Poster"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          {/* Subtle Bottom Fade Gradient into App Canvas */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/40 to-transparent" />
          
          {/* Top Floating Edition Badge */}
          <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-black/80 border border-red-500/40 text-red-300 text-[10px] font-mono px-3 py-1 rounded-full backdrop-blur-md shadow-lg">
            <span className="hanko-seal text-[8px]">光</span>
            <span className="font-bold uppercase tracking-wider">HNM VOL. 3 • JAN 8, 2027</span>
          </div>
        </div>

        {/* Hero Title & Information - Positioned Directly Beneath Character */}
        <div className="px-5 -mt-10 relative z-10 space-y-3">
          
          <div className="bg-[#121217]/95 border-2 border-red-500/40 rounded-3xl p-5 backdrop-blur-xl shadow-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/30">
                OFFICIAL FESTIVAL APP
              </span>
              <span className="text-[10px] text-zinc-300 font-serif font-bold">絆 Kizuna</span>
            </div>

            {/* Title beneath character */}
            <h1 className="text-3xl font-anime font-black text-white leading-tight tracking-wide">
              HIKARI NO MATSURI <span className="text-red-500">2027</span>
            </h1>

            <p className="text-xs text-zinc-300 font-sans leading-relaxed">
              Chennai's grand single-day Japanese cultural festival featuring taiko drums, anisong concerts & cosplay masquerade on January 8, 2027.
            </p>

            {/* Quick Date & Venue Badge */}
            <div className="bg-[#08080A] border border-red-500/30 rounded-2xl p-3 flex items-center justify-between text-[11px] text-zinc-200">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span>January 8, 2027</span>
              </div>
              <div className="h-3 w-px bg-red-500/30" />
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span className="truncate max-w-[120px]">CIT Chennai</span>
              </div>
            </div>

            {/* Full-width CTA buttons */}
            <div className="space-y-2 pt-1">
              <Link
                to="/tickets"
                className="w-full btn-vermilion py-3.5 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 shadow-xl uppercase tracking-wider"
              >
                <Ticket className="w-4 h-4 text-white" />
                <span>Reserve Festival Pass</span>
              </Link>

              <button
                onClick={() => openVideoModal('v1')}
                className="w-full btn-matsuri-gold py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <Play className="w-3.5 h-3.5 fill-red-400 text-red-400" />
                <span>Watch Festival Trailer</span>
              </button>
            </div>

            {/* Expressive Festival Lantern Guide Quote Banner */}
            <div className="pt-2">
              <VoiceIntro
                characterId="tanjiro"
                title="Festival Lantern Guide Quote"
                subtitle="Warm festival welcome for HNM 2027 under the glowing red lantern lights!"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. COUNTDOWN TIMER BELOW TITLE & HERO */}
      {/* ------------------------------------------------------------- */}
      <section className="px-4 py-6 bg-[#08080A] border-b border-red-500/20">
        <div className="mb-2 text-center">
          <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-widest">Festival Countdown</span>
        </div>
        <CountdownTimer />
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. FEATURED GUESTS (3 Compact Cards + View All →) */}
      {/* ------------------------------------------------------------- */}
      <section className="px-4 py-6 bg-[#08080A] border-b border-red-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest block">Star Headliners</span>
            <h2 className="text-lg font-anime font-bold text-white">FEATURED GUESTS</h2>
          </div>
          <Link
            to="/guests"
            className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-lg"
          >
            View All <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {SPECIAL_GUESTS.slice(0, 3).map((guest) => (
            <div
              key={guest.id}
              className="bg-[#121217] border border-red-500/20 rounded-xl p-3 flex items-center gap-3"
            >
              <img
                src={guest.imageUrl}
                alt={guest.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-lg object-cover shrink-0 border border-red-500/30"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] text-red-400 font-serif font-bold truncate">{guest.japaneseName}</span>
                  <span className="text-[9px] bg-red-600/30 text-red-400 border border-red-500/30 px-1.5 py-0.2 rounded font-mono">
                    {guest.day}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white truncate">{guest.name}</h3>
                <p className="text-[10px] text-zinc-300 truncate">{guest.role}</p>
                <Link to="/guests" className="text-[10px] text-red-400 font-semibold inline-flex items-center gap-0.5 mt-1">
                  View Profile <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. TODAY'S HIGHLIGHTS / SCHEDULE (3 Preview Cards + Full Schedule →) */}
      {/* ------------------------------------------------------------- */}
      <section className="px-4 py-6 bg-[#08080A] border-b border-red-500/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest block">Main Stage</span>
            <h2 className="text-lg font-anime font-bold text-white">TODAY'S HIGHLIGHTS</h2>
          </div>
          <Link
            to="/schedule"
            className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-lg"
          >
            Full Schedule <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-2.5">
          {SCHEDULE_ITEMS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#121217] border border-red-500/20 rounded-xl p-3 flex items-center justify-between gap-3"
            >
              <div className="bg-[#08080A] border border-red-500/30 px-2.5 py-1.5 rounded-lg shrink-0 text-center">
                <span className="text-xs font-mono font-bold text-red-400 block">{item.time}</span>
                <span className="text-[9px] text-zinc-400 font-sans font-bold block">Day {item.day}</span>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] text-red-300 font-serif font-semibold">{item.japaneseTitle}</span>
                  <span className="text-[8px] bg-red-500/10 text-zinc-300 border border-red-500/20 px-1 py-0.2 rounded font-mono">
                    {item.stage}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
              </div>

              <ChevronRight className="w-4 h-4 text-zinc-500 shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. FESTIVAL HIGHLIGHTS (Cosplay Masquerade) */}
      {/* ------------------------------------------------------------- */}
      <section className="px-4 py-6 bg-[#08080A] border-b border-red-500/20">
        <div className="bg-[#121217] border border-red-500/30 rounded-2xl p-4 space-y-4">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-red-500" />
              <h3 className="font-anime font-bold text-xs text-white uppercase tracking-wider">Cosplay Masquerade</h3>
            </div>
            <span className="text-[9px] bg-red-600/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded font-mono font-bold">
              ₹50,000 PRIZE
            </span>
          </div>

          <p className="text-xs text-zinc-300 font-sans leading-relaxed">
            Compete live on stage in Solo Runway, Duo Skit, or Grand Masquerade in front of guest judges!
          </p>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              to="/cosplay"
              className="btn-vermilion py-2.5 rounded-xl text-xs font-bold text-center block"
            >
              Cosplay Rules
            </Link>
            <button
              onClick={openCosplayModal}
              className="btn-matsuri-gold py-2.5 rounded-xl text-xs font-semibold text-center"
            >
              Quick Entry
            </button>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6. TICKETS CTA CARD (Compact Pass Preview) */}
      {/* ------------------------------------------------------------- */}
      <section className="px-4 py-6 bg-[#08080A]">
        <div className="bg-gradient-to-br from-[#121217] to-[#08080A] border-2 border-red-500/40 rounded-2xl p-4 relative overflow-hidden shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="hanko-seal text-[8px]">手形</span>
              <span className="text-[10px] font-mono text-red-400 font-bold uppercase">Passes Available</span>
            </div>
            <span className="text-xs font-mono font-bold text-red-400">From ₹199</span>
          </div>

          <h3 className="text-base font-anime font-bold text-white">RESERVE YOUR HNM PASS</h3>
          <p className="text-xs text-zinc-300 mt-1 mb-4 font-sans">
            Fast-track entry, festival badges, and exclusive goodies for the grand single-day celebration.
          </p>

          <Link
            to="/tickets"
            className="w-full btn-vermilion py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg uppercase tracking-wider"
          >
            <Ticket className="w-4 h-4 text-white" /> Book Passes Now
          </Link>
        </div>
      </section>

    </div>
  );
};
