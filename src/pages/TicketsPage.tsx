import React from 'react';
import { Ticket, CheckCircle2, XCircle, Award, ShieldCheck, QrCode, ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { TICKET_TIERS } from '../data/hnmData';
import { TicketTier } from '../types';
import { useModal } from '../context/ModalContext';
import { AnimeCharacterDisplay } from '../components/AnimeCharacterDisplay';

export const TicketsPage: React.FC = () => {
  const { openTicketModal } = useModal();

  const comparisonFeatures = [
    { name: 'Main Stage & Culture Zone Access', single: true, weekend: true, vip: true },
    { name: 'Yatai Alley & Artist Alley Entry', single: true, weekend: true, vip: true },
    { name: 'Matsuri Game Tokens', single: '2 Tokens', weekend: '5 Tokens', vip: '10 Tokens' },
    { name: 'Digital Commemorative Pass', single: true, weekend: true, vip: true },
    { name: 'Priority Fast-Track Entry Lane', single: false, weekend: true, vip: true },
    { name: 'Official HNM Lanyard & Sticker Pack', single: false, weekend: true, vip: true },
    { name: 'Front-Row Reserved Main Stage Seating', single: false, weekend: false, vip: true },
    { name: 'VIP Cosplay Lounge & Changing Booths', single: false, weekend: false, vip: true },
    { name: 'Free Authentic Matcha & Snack Combo', single: false, weekend: false, vip: true },
    { name: 'Guest Meet & Greet Priority Access', single: false, weekend: false, vip: true },
  ];

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans matsuri-ambient-bg">
      
      {/* Hero Page Header */}
      <PageHeader
        title="FESTIVAL PASSES & TICKETING"
        japaneseTitle="入場券 & VIP パス"
        subtitle="Reserve your festival pass for January 8, 2027. Fast-track entry, digital QR passes, and exclusive festival goodies included."
        breadcrumbCurrent="Festival Passes"
        bgImageUrl="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80"
        showTicketCta={false}
      />

      {/* 1. Ticket Tiers Section */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
              Single-Day Entry Passes • January 8, 2027
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
              CHOOSE YOUR FESTIVAL PASS
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-2 font-sans">
              Book early to secure priority fast-track entry and official merchandise packs for the single-day festival.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {TICKET_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-[#121217] rounded-2xl p-6 md:p-8 border flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-0.5 shadow-sm ${
                  tier.popular
                    ? 'border-red-500/80 shadow-red-500/20 shadow-lg'
                    : 'border-red-500/20 hover:border-red-500/40'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 right-6 bg-red-600 text-white font-sans font-semibold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-serif text-red-400 mb-1">{tier.japaneseName}</div>
                  <h3 className="text-xl font-sans font-bold text-white mb-1">{tier.name}</h3>
                  <div className="text-zinc-400 text-xs mb-4 font-sans">{tier.period}</div>

                  <div className="flex items-baseline gap-1 my-4 pb-4 border-b border-red-500/20">
                    <span className="text-4xl font-mono font-bold text-white">₹{tier.price}</span>
                    <span className="text-xs text-zinc-400 font-sans">/ pass</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-zinc-300 font-sans">
                    {tier.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => openTicketModal(tier)}
                  className={`w-full py-3.5 rounded-xl font-sans font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm ${
                    tier.popular
                      ? 'btn-vermilion'
                      : 'btn-outline-gojo'
                  }`}
                >
                  <Ticket className="w-4 h-4" /> Reserve {tier.name.split(' ')[0]} Pass
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Side-by-Side Comparison Table */}
      <section className="py-20 bg-[#0E0E12] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
              Perk Breakdown
            </span>
            <h2 className="text-2xl sm:text-3xl font-anime font-bold text-white mt-1">
              COMPARE PASS FEATURES & INCLUSIONS
            </h2>
          </div>

          <div className="bg-[#121217] border border-red-500/20 rounded-2xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="bg-[#08080A] border-b border-red-500/20 text-zinc-300">
                    <th className="p-4 font-bold text-sm">Pass Benefit</th>
                    <th className="p-4 text-center font-semibold text-zinc-400">Day Pass (₹399)</th>
                    <th className="p-4 text-center font-semibold text-red-400">Weekend Pass (₹699)</th>
                    <th className="p-4 text-center font-semibold text-red-300">VIP Pass (₹1499)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 text-zinc-300 font-medium">{row.name}</td>
                      <td className="p-4 text-center">
                        {typeof row.single === 'boolean' ? (
                          row.single ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                          ) : (
                            <XCircle className="w-4 h-4 text-zinc-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-zinc-400 font-mono">{row.single}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.weekend === 'boolean' ? (
                          row.weekend ? (
                            <CheckCircle2 className="w-4 h-4 text-red-400 mx-auto" />
                          ) : (
                            <XCircle className="w-4 h-4 text-zinc-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-red-400 font-mono font-bold">{row.weekend}</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {typeof row.vip === 'boolean' ? (
                          row.vip ? (
                            <CheckCircle2 className="w-4 h-4 text-red-300 mx-auto" />
                          ) : (
                            <XCircle className="w-4 h-4 text-zinc-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-red-300 font-mono font-bold">{row.vip}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Digital Pass Information */}
      <section className="py-20 bg-[#08080A]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-[#121217] p-6 rounded-2xl border border-red-500/20 space-y-3">
              <div className="p-3 bg-red-500/20 text-red-400 rounded-xl w-fit">
                <QrCode className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-sans">Instant Digital Pass</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Upon booking, receive your instant digital HNM QR entry ticket. Save to phone or present at festival gate.
              </p>
            </div>

            <div className="bg-[#121217] p-6 rounded-2xl border border-red-500/20 space-y-3">
              <div className="p-3 bg-red-500/20 text-red-400 rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-sans">100% Transferable</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                Passes can be reassigned or gifted to friends/family up to 48 hours before doors open.
              </p>
            </div>

            <div className="bg-[#121217] p-6 rounded-2xl border border-red-500/20 space-y-3">
              <div className="p-3 bg-red-600/20 text-red-400 rounded-xl w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-white font-sans">Raffle & Swag Entry</h4>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                All Special & VIP pass holders automatically enter our grand raffle for official J-Pop merchandise & manga boxes.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
