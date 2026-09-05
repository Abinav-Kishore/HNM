import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { DesktopClubPage } from './club/DesktopClubPage';
import { TabletClubPage } from './club/TabletClubPage';
import { MobileClubPage } from './club/MobileClubPage';
import { CheckCircle, X, ArrowRight } from 'lucide-react';
import { ClubLogo } from './common/ClubLogo';

const ToriiIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4 5h16" />
    <path d="M3 9h18" />
    <path d="M6 5v14" />
    <path d="M18 5v14" />
    <path d="M12 5v4" />
    <path d="M4 19h16" />
  </svg>
);

interface ClubMainProps {
  onNavigateToHnm2026: () => void;
}

export function ClubMain({ onNavigateToHnm2026 }: ClubMainProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [joinedSuccess, setJoinedSuccess] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-stone-900 overflow-x-hidden">
      
      {/* 1. DESKTOP EXPERIENCE (≥1024px / lg & xl) */}
      <DesktopClubPage
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigateToHnm2026={onNavigateToHnm2026}
        onOpenJoinModal={() => setJoinModalOpen(true)}
      />

      {/* 2. TABLET EXPERIENCE (768px – 1023px) */}
      <TabletClubPage
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigateToHnm2026={onNavigateToHnm2026}
        onOpenJoinModal={() => setJoinModalOpen(true)}
      />

      {/* 3. MOBILE EXPERIENCE (<768px) */}
      <MobileClubPage
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onNavigateToHnm2026={onNavigateToHnm2026}
        onOpenJoinModal={() => setJoinModalOpen(true)}
      />

      {/* Persistent Club Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-6 md:px-12 border-t border-stone-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-600/20 text-red-500 border border-red-500/30 flex items-center justify-center">
              <ToriiIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-white text-sm tracking-wider font-serif">ISSHONI NIHONGO (一緒に日本語)</div>
              <div className="text-stone-400 text-xs">Japanese Language & Anime Culture Club • Chennai</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer">Home</button>
            <button onClick={() => setActiveTab('journey')} className="hover:text-white transition-colors cursor-pointer">Learning Journey</button>
            <button onClick={() => setActiveTab('experiences')} className="hover:text-white transition-colors cursor-pointer">Experiences</button>
            <button onClick={() => setActiveTab('events')} className="hover:text-white transition-colors cursor-pointer">Events</button>
            <button onClick={() => setActiveTab('resources')} className="hover:text-white transition-colors cursor-pointer">Resources</button>
            <button onClick={() => setActiveTab('about')} className="hover:text-white transition-colors cursor-pointer">About</button>
            <button onClick={onNavigateToHnm2026} className="text-red-400 font-bold hover:text-red-300 transition-colors flex items-center gap-1 cursor-pointer">
              HNM Event Site <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="text-stone-500 text-[11px]">© 2027 Isshoni Nihongo Club. All rights reserved.</div>
        </div>
      </footer>

      {/* Join Club Modal */}
      {joinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in font-sans">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-stone-900 relative shadow-2xl border border-stone-200">
            <button
              onClick={() => { setJoinModalOpen(false); setJoinedSuccess(false); }}
              className="absolute top-5 right-5 p-1 rounded-full text-stone-400 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!joinedSuccess ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                    <ToriiIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-stone-950">Join Isshoni Nihongo</h3>
                    <p className="text-xs text-stone-500">Free membership • All levels welcome</p>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  Become a member of our Japanese language & culture club to receive weekly Kaiwa session links, study materials, and HNM festival updates.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setJoinedSuccess(true);
                  }}
                  className="space-y-3.5 pt-2"
                >
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ren Tanaka"
                      className="w-full border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-stone-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      className="w-full border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-stone-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Current Japanese Level</label>
                    <select className="w-full border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all text-stone-900">
                      <option value="beginner">Beginner (Starting from zero / Kana)</option>
                      <option value="n5-n4">Elementary (JLPT N5 – N4)</option>
                      <option value="n3">Intermediate (JLPT N3)</option>
                      <option value="n2-n1">Advanced (JLPT N2 – N1)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-sm transition-colors shadow-md cursor-pointer mt-3"
                  >
                    Submit Membership Request
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-serif font-bold text-stone-950">Welcome to the Club!</h3>
                <p className="text-sm text-stone-600 leading-relaxed max-w-xs mx-auto">
                  We've registered your membership. Look out for our welcome email and Kaiwa meetup invites!
                </p>
                <button
                  onClick={() => { setJoinModalOpen(false); setJoinedSuccess(false); }}
                  className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
