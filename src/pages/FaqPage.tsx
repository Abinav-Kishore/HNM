import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MapPin, Mail, HelpCircle, Filter, Ticket, ArrowRight, Compass } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { FAQ_ITEMS } from '../data/hnmData';

export const FaqPage: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Tickets', 'Cosplay', 'Vendors'];

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans matsuri-ambient-bg">
      
      {/* Hero Page Header */}
      <PageHeader
        title="FREQUENTLY ASKED QUESTIONS"
        japaneseTitle="よくある 質問 & 会場 案内"
        subtitle="Find answers regarding ticketing, cosplay guidelines, venue transit directions, and vendor booth rules."
        breadcrumbCurrent="FAQ & Venue"
        bgImageUrl="https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 1. FAQ Accordion Container */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          {/* Controls Bar: Category Filter Pills */}
          <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-red-500/20">
            <div>
              <span className="text-xs font-mono text-red-400 font-semibold uppercase tracking-wider block">
                Information Help Desk
              </span>
              <h2 className="text-2xl font-anime font-bold text-white mt-0.5">
                QUESTIONS & ANSWERS
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-xs text-zinc-300 font-medium flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5 text-red-400" /> Topic:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors border whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-red-500/20 border-red-500 text-red-400 font-semibold'
                      : 'bg-[#121217] border-red-500/20 text-zinc-400 hover:border-red-500/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Items */}
          <div className="space-y-3">
            {filteredFaqs.map((item, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#121217] border border-red-500/20 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full text-left p-4 md:p-5 flex items-center justify-between gap-4 font-sans text-sm font-semibold text-white hover:text-red-400 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="px-2 py-0.5 rounded bg-white/5 text-red-400 text-[10px] font-mono border border-white/10">
                        {item.category}
                      </span>
                      {item.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${isExpanded ? 'rotate-180 text-red-400' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-zinc-300 border-t border-red-500/20 leading-relaxed font-sans mt-2">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 2. Venue Location Details & Transit Map */}
      <section className="py-20 bg-[#0E0E12] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
              Location & Transport
            </span>
            <h2 className="text-3xl font-anime font-bold text-white mt-1">
              EVENT VENUE & DIRECTIONS
            </h2>
          </div>

          <div className="bg-[#121217] border border-red-500/20 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0 border border-red-500/30">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-sans font-bold text-white">Grand Convention Center</h3>
                    <p className="text-sm text-zinc-300 font-sans mt-0.5">City Center Exhibition Grounds, Main Highway Boulevard</p>
                    <p className="text-xs text-zinc-400 mt-2 font-sans">
                      • Metro Access: Metro Station Gate 2 (5-minute shaded walkway)<br />
                      • Parking: Free dedicated multi-level parking lot for all pass holders<br />
                      • Accessibility: Wheelchair ramps & elevators available across all halls
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-vermilion font-sans font-semibold px-6 py-3.5 rounded-xl text-xs flex items-center gap-2 shadow-md"
                >
                  Open in Google Maps <Compass className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. Direct Support Card */}
      <section className="py-16 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-anime font-bold text-white mb-3">
            HAVE ADDITIONAL QUESTIONS?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-sans">
            Reach out directly to the Isshoni Nihongo organizing team for ticketing support or accessibility requests.
          </p>
          <Link
            to="/about"
            className="btn-outline-red font-sans font-semibold px-6 py-3 rounded-xl text-xs inline-flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-red-400" /> Contact Isshoni Nihongo Club
          </Link>
        </div>
      </section>

    </div>
  );
};
