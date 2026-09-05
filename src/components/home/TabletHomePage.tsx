import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Play,
  Users,
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
import { AnimeSoundboard } from '../AnimeSoundboard';
import { CountdownTimer } from '../CountdownTimer';
import { AnimeCharacterDisplay } from '../AnimeCharacterDisplay';
import { useModal } from '../../context/ModalContext';
import { HnmEventLogo } from '../common/HnmEventLogo';
import { ClubLogo } from '../common/ClubLogo';
import { VoiceIntro } from '../audio/VoiceIntro';

export const TabletHomePage: React.FC = () => {
  const { openVideoModal, openCosplayModal } = useModal();

  return (
    <div className="hidden md:block xl:hidden min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans matsuri-ambient-bg relative overflow-x-hidden">
      
      {/* 1. Tablet Hero Section */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-center py-12 px-8 overflow-hidden bg-[#08080A] border-b border-red-500/20">
        
        {/* Dedicated Tablet Hero Artwork Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={HNM_EVENT_DETAILS.heroAnimeImageTablet}
            alt="HNM Tablet Key Visual Artwork"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080A]/95 via-[#08080A]/85 to-[#08080A]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-[#121217]/70" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-red-400 font-serif font-semibold text-xs uppercase tracking-widest mb-3">
            <span className="hanko-seal text-[9px]">光の祭り</span>
            <span>•</span>
            <span className="text-red-400 font-sans font-bold">VOL. 3 FESTIVAL PORTAL</span>
          </div>

          <h1 className="text-5xl font-anime font-black text-white leading-none mb-4">
            HIKARI NO MATSURI <span className="text-red-500">2027</span>
          </h1>

          <div className="inline-flex items-center gap-2 bg-[#121217]/90 border border-red-500/30 text-zinc-200 text-xs px-3.5 py-1.5 rounded-xl mb-5 backdrop-blur-md">
            <span className="text-red-400 font-bold">Theme:</span>{' '}
            <span className="font-bold text-white">{HNM_EVENT_DETAILS.theme}</span>
          </div>

          <p className="text-zinc-300 text-sm leading-relaxed mb-6 max-w-xl font-sans">
            Experience an extraordinary single-day Japanese cultural festival featuring taiko percussion, tea ceremonies, anisong concerts, and cosplay masquerades at CIT Chennai on January 8, 2027.
          </p>

          {/* Quick Info Bar */}
          <div className="grid grid-cols-3 gap-3 text-xs font-medium text-zinc-200 mb-6 bg-[#121217]/90 p-3.5 rounded-2xl border border-red-500/30 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-red-400 shrink-0" />
              <span>{HNM_EVENT_DETAILS.dates}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-red-400 shrink-0" />
              <span>{HNM_EVENT_DETAILS.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400 shrink-0" />
              <span className="truncate">CIT Chennai Campus</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/tickets"
              className="btn-vermilion px-6 py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-lg uppercase tracking-wider"
            >
              <Ticket className="w-4 h-4" /> Reserve Festival Pass
            </Link>
            <button
              onClick={() => openVideoModal('v1')}
              className="btn-matsuri-gold px-5 py-3 rounded-full text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <Play className="w-4 h-4 fill-red-400 text-red-400" /> Watch Trailer
            </button>
          </div>

          <div className="mt-6">
            <VoiceIntro
              characterId="tanjiro"
              title="Festival Lantern Guide Quote"
              subtitle="Warm festival welcome for HNM 2027 under the glowing red lantern lights!"
            />
          </div>
        </div>
      </section>

      {/* 2. Tablet 2-Column Soundboard & Countdown */}
      <section className="py-12 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-6 items-stretch">
            <AnimeSoundboard />
            <CountdownTimer />
          </div>

          {/* Logos Row */}
          <div className="mt-8 bg-[#121217] border border-red-500/30 rounded-2xl p-5 grid grid-cols-2 gap-4">
            <div className="bg-[#08080A] p-4 rounded-xl border border-red-500/20 flex items-center gap-3">
              <HnmEventLogo size="md" variant="badge" />
              <div>
                <h3 className="text-xs font-anime font-bold text-white">Hikari no Matsuri</h3>
                <Link to="/about" className="text-[11px] text-red-400 hover:underline">
                  Event Story →
                </Link>
              </div>
            </div>

            <div className="bg-[#08080A] p-4 rounded-xl border border-red-500/20 flex items-center gap-3">
              <ClubLogo size="md" />
              <div>
                <h3 className="text-xs font-serif font-bold text-white">Isshoni Nihongo</h3>
                <Link to="/club" className="text-[11px] text-red-400 hover:underline">
                  Club Portal →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Character Roster */}
      <section className="py-12 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimeCharacterDisplay mode="grid" />
        </div>
      </section>

      {/* 3. Featured Guests */}
      <section className="py-12 bg-[#121217] border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-semibold text-red-400 uppercase">Star Headliners</span>
              <h2 className="text-2xl font-anime font-bold text-white">FEATURED GUESTS</h2>
            </div>
            <Link
              to="/guests"
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-lg"
            >
              All Guests <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SPECIAL_GUESTS.slice(0, 4).map((guest) => (
              <div
                key={guest.id}
                className="bg-[#08080A] border border-red-500/20 rounded-2xl p-4 flex gap-4 items-center"
              >
                <img
                  src={guest.imageUrl}
                  alt={guest.name}
                  referrerPolicy="no-referrer"
                  className="w-20 h-20 rounded-xl object-cover border border-red-500/30 shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-[10px] text-red-400 font-serif font-bold">{guest.japaneseName}</div>
                  <h3 className="text-sm font-bold text-white truncate">{guest.name}</h3>
                  <p className="text-xs text-zinc-400 line-clamp-1">{guest.role}</p>
                  <span className="mt-2 inline-block text-[10px] bg-red-500/20 text-red-300 px-2 py-0.5 rounded font-mono font-bold">
                    {guest.day}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Schedule Highlights */}
      <section className="py-12 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-mono font-semibold text-red-400 uppercase">Stage Timetable</span>
              <h2 className="text-2xl font-anime font-bold text-white">SCHEDULE HIGHLIGHTS</h2>
            </div>
            <Link
              to="/schedule"
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 border border-red-500/30 px-3 py-1.5 rounded-lg"
            >
              Full Schedule <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SCHEDULE_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-[#121217] border border-red-500/20 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="bg-[#08080A] border border-red-500/30 p-2.5 rounded-xl text-center shrink-0 min-w-[70px]">
                  <span className="text-xs font-mono font-bold text-red-400 block">{item.time}</span>
                  <span className="text-[10px] text-zinc-400 font-bold block">Day {item.day}</span>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] text-red-300 font-serif font-semibold block">{item.japaneseTitle}</span>
                  <h4 className="text-sm font-bold text-white truncate">{item.title}</h4>
                  <span className="text-[10px] text-zinc-400">{item.stage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Cosplay Championship */}
      <section className="py-12 bg-[#121217] border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#08080A] border border-red-500/30 rounded-2xl p-6 flex items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-red-400 text-[11px] font-bold font-mono uppercase mb-2">
                <Award className="w-3.5 h-3.5 text-red-500" /> ₹50,000 Cash Prize Pool
              </div>
              <h2 className="text-2xl font-anime font-bold text-white mb-2">COSPLAY CHAMPIONSHIP</h2>
              <p className="text-xs text-zinc-300 max-w-lg mb-4">
                Compete on the HNM Main Stage in Solo Runway, Duo Skit, and Grand Masquerade categories!
              </p>
              <div className="flex gap-3">
                <Link to="/cosplay" className="btn-vermilion px-4 py-2 rounded-xl text-xs font-bold">
                  Rules & Entry →
                </Link>
                <button onClick={openCosplayModal} className="btn-matsuri-gold px-4 py-2 rounded-xl text-xs font-semibold">
                  Quick Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Tickets CTA */}
      <section className="py-12 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-anime font-bold text-white">FESTIVAL PASSES</h2>
            <p className="text-xs text-zinc-400">Choose your pass for January 8, 2027 and join us at HNM</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {TICKET_TIERS.map((tier) => (
              <div key={tier.id} className="bg-[#121217] border border-red-500/20 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] text-red-400 font-serif">{tier.japaneseName}</div>
                  <h3 className="text-base font-bold text-white">{tier.name}</h3>
                  <div className="text-xl font-mono font-bold text-red-400 my-2">₹{tier.price}</div>
                </div>
                <Link to="/tickets" className="btn-vermilion py-2 rounded-lg text-xs font-bold text-center block mt-3">
                  Reserve Pass
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
