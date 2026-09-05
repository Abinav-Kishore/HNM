import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, MapPin, Mic, Filter, Ticket, ArrowRight, Sparkles } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SCHEDULE_ITEMS } from '../data/hnmData';
import { useModal } from '../context/ModalContext';
import { VoiceIntro } from '../components/audio/VoiceIntro';

export const SchedulePage: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<string>('All Stages');
  const { openTicketModal } = useModal();

  const stages = ['All Stages', 'Main Stage', 'Culture Arena', 'Workshop Zone', 'Exhibition Hall', 'Main Courtyard'];

  const filteredSchedule = SCHEDULE_ITEMS.filter((item) => {
    return selectedStage === 'All Stages' || item.stage === selectedStage;
  });

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans matsuri-ambient-bg">
      
      {/* Hero Page Header */}
      <PageHeader
        title="OFFICIAL STAGE SCHEDULE"
        japaneseTitle="ステージ タイムテーブル"
        subtitle="Explore stages, workshops, cosplay competitions, and anisong concerts scheduled for January 8, 2027."
        breadcrumbCurrent="Stage Schedule"
        bgImageUrl="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Main Schedule Container */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          {/* Luffy Energetic Voice Schedule Guide */}
          <div className="mb-10">
            <VoiceIntro
              characterId="luffy"
              title="Monkey D. Luffy's Schedule Guide"
              subtitle="Energetic announcement for festival main stage & cosplay masquerade on January 8, 2027!"
            />
          </div>

          {/* Controls Bar: Single Day Badge & Stage Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-red-500/20">
            
            {/* Event Day Badge */}
            <div className="flex items-center gap-3 bg-[#121217] px-4 py-2.5 rounded-xl border border-red-500/20">
              <Calendar className="w-4 h-4 text-red-500 shrink-0" />
              <div>
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
                  Friday, January 8, 2027
                </span>
                <span className="text-[10px] text-red-400 font-serif">
                  Single-Day Flagship Festival • 09:00 AM – 08:30 PM IST
                </span>
              </div>
            </div>

            {/* Stage Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              <span className="text-xs text-zinc-300 font-medium flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5 text-red-400" /> Filter:
              </span>
              {stages.map((stg) => (
                <button
                  key={stg}
                  onClick={() => setSelectedStage(stg)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors border whitespace-nowrap cursor-pointer ${
                    selectedStage === stg
                      ? 'bg-red-500/20 border-red-500 text-red-400 font-semibold'
                      : 'bg-[#121217] border-red-500/20 text-zinc-400 hover:border-red-500/40 hover:text-white'
                  }`}
                >
                  {stg}
                </button>
              ))}
            </div>

          </div>

          {/* Schedule List */}
          <div className="space-y-4">
            {filteredSchedule.length > 0 ? (
              filteredSchedule.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#121217] border border-red-500/20 rounded-xl p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-red-500/50 transition-colors shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-[#08080A] px-4 py-3 rounded-xl border border-red-500/20 text-red-400 font-mono text-xs font-bold shrink-0 min-w-[100px] text-center">
                      <div className="text-sm">{item.time}</div>
                      <div className="text-[10px] text-zinc-400 font-sans mt-0.5">Jan 8, 2027</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1.5 flex-wrap font-sans">
                        <span className="text-xs font-serif text-zinc-400">{item.japaneseTitle}</span>
                        <span className="px-2 py-0.5 rounded bg-white/5 text-zinc-300 text-[10px] font-mono border border-white/10">
                          {item.stage}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                          item.tag === 'Ceremony' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                          item.tag === 'Performance' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                          item.tag === 'Contest' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                          'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        }`}>
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="text-lg font-sans font-bold text-white">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-sans max-w-2xl">{item.description}</p>
                      
                      {item.performer && (
                        <div className="text-xs text-red-400 font-medium mt-2 font-sans flex items-center gap-1">
                          <Mic className="w-3.5 h-3.5 text-red-400" /> Featured Performer: {item.performer}
                        </div>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => openTicketModal()}
                    className="shrink-0 self-start md:self-center btn-outline-gojo px-4 py-2.5 rounded-xl text-xs font-semibold font-sans flex items-center gap-1.5 cursor-pointer"
                  >
                    Attend Session →
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-16 text-zinc-500 text-sm font-sans bg-[#121217] rounded-2xl border border-red-500/20">
                No scheduled events match the selected stage filter.
              </div>
            )}
          </div>

          {/* Schedule Footer Note */}
          <div className="mt-12 bg-[#121217] border border-red-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-base font-bold text-white mb-1">Stage Access Note</h4>
              <p className="text-xs text-zinc-400 font-sans">
                All festival passes include entry to Main Stage and Workshop Areas on January 8, 2027. VIP Pass holders receive reserved front-row seating.
              </p>
            </div>
            <Link
              to="/tickets"
              className="btn-vermilion font-sans font-semibold px-5 py-2.5 rounded-xl text-xs shrink-0 flex items-center gap-2"
            >
              <Ticket className="w-3.5 h-3.5" /> Reserve Pass Now
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
