import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Ticket, CheckCircle2, Award, Users, Heart } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { SPECIAL_GUESTS, HNM_EVENT_DETAILS } from '../data/hnmData';
import { useModal } from '../context/ModalContext';

export const GuestsPage: React.FC = () => {
  const { openTicketModal } = useModal();

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans matsuri-ambient-bg">
      
      {/* Hero Page Header */}
      <PageHeader
        title="SPECIAL GUEST HEADLINERS"
        japaneseTitle="特別 招待 ゲスト"
        subtitle="Meet our international guest cosplayers, J-Rock headliners, traditional art masters, and diplomatic delegates at HNM on January 8, 2027."
        breadcrumbCurrent="Special Guests"
        bgImageUrl="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 1. Guest Roster Grid */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
              Guest Lineup & Performers
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
              MEET THE STARS OF HNM
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-2 font-sans">
              Catch live panels, stage showcases, and exclusive Meet & Greet photo sessions on January 8, 2027.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_GUESTS.map((guest) => (
              <div
                key={guest.id}
                className="bg-[#121217] border border-red-500/20 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-square relative overflow-hidden bg-[#08080A]">
                    <img
                      src={guest.imageUrl}
                      alt={guest.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-2.5 py-1 bg-red-600 text-white font-sans text-[11px] font-semibold rounded-md shadow">
                      Jan 8, 2027
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="text-xs text-red-400 font-serif font-medium mb-1">{guest.japaneseName}</div>
                    <h3 className="text-lg font-sans font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{guest.name}</h3>
                    <p className="text-xs font-semibold text-red-400 mb-3">{guest.role}</p>
                    <p className="text-xs text-zinc-300 leading-relaxed mb-4 font-sans">{guest.bio}</p>
                    
                    {guest.sessionTime && (
                      <div className="text-[11px] text-zinc-300 font-mono bg-[#08080A] p-2 rounded-lg border border-red-500/20 mb-3 flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-red-400 shrink-0" />
                        <span className="truncate">{guest.sessionTime}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5">
                      {guest.animeWorks.map((work, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-[#08080A] border border-red-500/20 text-zinc-300 rounded font-sans">
                          #{work}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => openTicketModal()}
                    className="w-full py-2.5 bg-red-500/10 hover:bg-red-600 text-red-300 hover:text-white rounded-xl text-xs font-sans font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 border border-red-500/30 cursor-pointer"
                  >
                    Meet & Greet Info
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Meet & Greet Schedule & Guidelines */}
      <section className="py-20 bg-[#0E0E12] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-[#121217] border border-red-500/20 rounded-3xl p-8 md:p-12">
            
            <div className="max-w-3xl mb-10">
              <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
                Interaction & Autographs
              </span>
              <h2 className="text-3xl font-anime font-bold text-white mb-3">
                MEET & GREET SCHEDULE & RULES
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                VIP Pass holders receive guaranteed priority slots for guest autographs and photo sessions on January 8, 2027. General pass holders can access standard queuing slots on a first-come, first-served basis.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#08080A] p-6 rounded-2xl border border-red-500/20 space-y-2">
                <div className="p-3 bg-red-500/20 text-red-400 rounded-xl w-fit">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white font-sans pt-2">Session Timings</h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Date: January 8, 2027<br />
                  Time: 01:30 PM - 04:30 PM IST<br />
                  Location: VIP Guest Lounge (Hall B)
                </p>
              </div>

              <div className="bg-[#08080A] p-6 rounded-2xl border border-red-500/20 space-y-2">
                <div className="p-3 bg-red-500/20 text-red-400 rounded-xl w-fit">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white font-sans pt-2">Autographs & Photos</h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Official prints available at guest booth. 1 photo token allowed per attendee per guest.
                </p>
              </div>

              <div className="bg-[#08080A] p-6 rounded-2xl border border-red-500/20 space-y-2">
                <div className="p-3 bg-red-600/20 text-red-400 rounded-xl w-fit">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white font-sans pt-2">VIP Priority Pass</h4>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  VIP pass holders skip standard lines and receive an exclusive signed HNM art poster.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CTA to Tickets */}
      <section className="py-16 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-anime font-bold text-white mb-3">
            SECURE YOUR GUEST MEET & GREET ACCESS
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-sans">
            Upgrade to the VIP All-Access Pass for guaranteed front-row seating and guest lounge access on January 8, 2027.
          </p>
          <Link
            to="/tickets"
            className="btn-vermilion font-sans font-semibold px-6 py-3 rounded-xl text-xs inline-flex items-center gap-2 shadow-md"
          >
            <Ticket className="w-4 h-4" /> Book VIP Pass
          </Link>
        </div>
      </section>

    </div>
  );
};
