import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  Users,
  Compass,
  Heart,
  Flame,
  CheckCircle,
  Menu,
  X
} from 'lucide-react';
import tabletFujiImage from '../../assets/images/tablet_club_fuji_hero_1785988159091.jpg';
import { ActiveTab } from '../../types';
import { ClubLogo } from '../common/ClubLogo';

const ToriiIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 5h16" />
    <path d="M3 9h18" />
    <path d="M6 5v14" />
    <path d="M18 5v14" />
    <path d="M12 5v4" />
    <path d="M4 19h16" />
  </svg>
);

const MatchaIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 10a8 8 0 0 0 16 0" />
    <path d="M2 10h20" />
    <path d="M11 6v3" />
    <path d="M13 6v3" />
    <path d="M15 6v3" />
    <path d="M9 6v3" />
    <path d="M12 2v2" />
  </svg>
);

interface TabletClubPageProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onNavigateToHnm2026: () => void;
  onOpenJoinModal: () => void;
}

export const TabletClubPage: React.FC<TabletClubPageProps> = ({
  activeTab,
  setActiveTab,
  onNavigateToHnm2026,
  onOpenJoinModal
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabSelect = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <div className="hidden md:flex lg:hidden min-h-screen flex-col font-sans bg-[#FAF8F5] text-stone-900">
      
      {/* Tablet Header */}
      <div className="bg-[#FAF8F5] border-b border-stone-200 relative z-30">
        <nav className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => handleTabSelect('home')}>
            <ClubLogo size="md" showTitle={true} lightMode={true} />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToHnm2026}
              className="bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 text-white px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              HNM '26
            </button>

            <button
              onClick={onOpenJoinModal}
              className="bg-brand-dark-blue text-white px-5 py-2 rounded-full text-xs font-medium cursor-pointer"
            >
              Join Us
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 rounded-xl bg-[#EBE4DA] text-brand-dark hover:text-brand-red active:scale-95 transition-all"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Tablet Dropdown Navigation Drawer */}
        {menuOpen && (
          <div className="bg-[#EBE4DA] border-b border-[#e2dfd7] px-6 py-4 space-y-3 font-medium text-brand-dark shadow-md">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button
                onClick={() => handleTabSelect('home')}
                className={`py-2 px-3 rounded-lg text-left ${activeTab === 'home' ? 'bg-brand-red text-white font-bold' : 'bg-white/60'}`}
              >
                Home
              </button>
              <button
                onClick={() => handleTabSelect('journey')}
                className={`py-2 px-3 rounded-lg text-left ${activeTab === 'journey' ? 'bg-brand-red text-white font-bold' : 'bg-white/60'}`}
              >
                Journey
              </button>
              <button
                onClick={() => handleTabSelect('experiences')}
                className={`py-2 px-3 rounded-lg text-left ${activeTab === 'experiences' ? 'bg-brand-red text-white font-bold' : 'bg-white/60'}`}
              >
                Experiences
              </button>
              <button
                onClick={() => handleTabSelect('events')}
                className={`py-2 px-3 rounded-lg text-left ${activeTab === 'events' ? 'bg-brand-red text-white font-bold' : 'bg-white/60'}`}
              >
                Events
              </button>
              <button
                onClick={() => handleTabSelect('resources')}
                className={`py-2 px-3 rounded-lg text-left ${activeTab === 'resources' ? 'bg-brand-red text-white font-bold' : 'bg-white/60'}`}
              >
                Resources
              </button>
              <button
                onClick={() => handleTabSelect('about')}
                className={`py-2 px-3 rounded-lg text-left ${activeTab === 'about' ? 'bg-brand-red text-white font-bold' : 'bg-white/60'}`}
              >
                About
              </button>
            </div>
          </div>
        )}

        {/* Tablet Banner Announcement */}
        <div className="bg-gradient-to-r from-brand-dark-blue to-[#1d2d47] text-white px-6 py-2.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="bg-brand-red text-white font-bold text-[9px] px-2 py-0.5 rounded font-mono uppercase">
              Announcing
            </span>
            <span className="font-serif">
              <strong>HNM 2027 (Vol. 3)</strong> Festival Website
            </span>
          </div>
          <button
            onClick={onNavigateToHnm2026}
            className="text-amber-300 font-medium underline flex items-center gap-1 shrink-0"
          >
            Open HNM Site <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Tablet Hero Section (75vh height layout with 2-column touch focus) */}
      {activeTab === 'home' && (
        <main className="w-full min-h-[72vh] px-8 py-10 flex items-center justify-between gap-6 border-b border-[#e2dfd7]">
          
          <div className="w-1/2 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#EBE4DA] px-3 py-1 rounded-full text-xs font-serif text-brand-red">
              <span>一緒に日本語</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              <span>Isshoni Nihongo</span>
            </div>

            <h1 className="text-4xl font-serif leading-tight text-brand-dark tracking-tight">
              A calm space to learn, share & grow<span className="text-brand-red">.</span>
            </h1>

            <p className="text-[#645D58] text-sm leading-relaxed">
              Isshoni Nihongo is Chennai's Japanese language & culture club — weekly conversations, study circles, and hosts of Hikari no Matsuri.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={onNavigateToHnm2026}
                className="w-full bg-gradient-to-r from-rose-600 to-amber-500 text-white py-3.5 px-5 rounded-xl font-medium text-xs flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all cursor-pointer"
              >
                Open HNM Festival Website <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('journey')}
                className="w-full border border-brand-dark-blue text-brand-dark-blue py-3 px-5 rounded-xl font-medium text-xs text-center"
              >
                Explore Club Journey
              </button>
            </div>
          </div>

          {/* Dedicated Tablet Hero Artwork (4:3 Tablet Fuji Watercolor) */}
          <div className="w-1/2 h-[340px] rounded-2xl overflow-hidden border border-[#e2dfd7] shadow-md relative group">
            <img
              src={tabletFujiImage}
              alt="Mount Fuji Tablet Watercolor Art"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[11px] font-serif font-bold text-brand-dark">
              Mount Fuji & Torii • 富士山
            </div>
          </div>

        </main>
      )}

      {/* Tablet 2-Column Grid for Cards */}
      {activeTab === 'home' && (
        <div className="bg-bg-secondary p-8 border-t border-[#e2dfd7]">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div
              onClick={() => setActiveTab('journey')}
              className="bg-[#FCFBFA] rounded-2xl p-6 border border-[#e2dfd7] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between border-t-4 border-card-green"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card-green flex items-center justify-center shrink-0">
                  <ToriiIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-dark font-bold mb-1">Journey</h3>
                  <p className="text-[#645D58] text-xs leading-relaxed">
                    How the club learns Japanese step-by-step together.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-card-green font-medium text-xs">
                Explore Journey <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            <div
              onClick={() => setActiveTab('experiences')}
              className="bg-[#FCFBFA] rounded-2xl p-6 border border-[#e2dfd7] shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between border-t-4 border-card-orange"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card-orange flex items-center justify-center shrink-0">
                  <MatchaIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-brand-dark font-bold mb-1">Experiences</h3>
                  <p className="text-[#645D58] text-xs leading-relaxed">
                    Workshops, tea ceremonies, calligraphy & festivals.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center text-card-orange font-medium text-xs">
                View Experiences <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>

          {/* Flagship Event Banner on Tablet */}
          <div
            onClick={onNavigateToHnm2026}
            className="bg-gradient-to-r from-[#182338] to-[#25324c] rounded-2xl p-6 text-white border-t-4 border-amber-400 shadow-md cursor-pointer flex items-center justify-between mb-8"
          >
            <div className="space-y-1">
              <span className="text-[9px] font-mono font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2 py-0.5 rounded">
                FLAGSHIP EVENT
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">Hikari no Matsuri (Vol. 3)</h3>
              <p className="text-xs text-slate-300">Official festival portal & pass booking</p>
            </div>
            <button className="bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1 shrink-0">
              Open Site <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Tablet Official Crest Showcase */}
          <div className="bg-[#FCFBFA] rounded-2xl p-6 border border-[#e2dfd7] shadow-sm flex items-center gap-6">
            <ClubLogo size="xl" />
            <div className="space-y-2">
              <span className="text-[9px] font-mono font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded border border-red-200">
                OFFICIAL CLUB CREST
              </span>
              <h3 className="text-lg font-serif font-bold text-brand-dark">Isshoni Nihongo (一緒に日本語)</h3>
              <p className="text-xs text-[#645D58]">
                Torii Gate beneath the crimson sun, flanked by resilient pine trees for community, learning & culture.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sub Views for Tablet */}
      {activeTab === 'journey' && (
        <section className="px-8 py-10 flex-1">
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Our Learning Journey</h2>
          <p className="text-[#645D58] text-sm mb-6">Guided pathways for learning Japanese together step by step.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FCFBFA] p-6 rounded-xl border border-[#e2dfd7]">
              <span className="text-brand-red font-mono font-bold text-xs">STEP 01</span>
              <h3 className="text-xl font-serif text-brand-dark my-1">Beginner Foundations</h3>
              <p className="text-[#645D58] text-xs">Hiragana, Katakana, basic vocabulary & greetings.</p>
            </div>
            <div className="bg-[#FCFBFA] p-6 rounded-xl border border-[#e2dfd7]">
              <span className="text-card-orange font-mono font-bold text-xs">STEP 02</span>
              <h3 className="text-xl font-serif text-brand-dark my-1">Intermediate Fluency</h3>
              <p className="text-[#645D58] text-xs">Kanji stroke order, grammar & conversation circles.</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'events' && (
        <section className="px-8 py-10 flex-1 space-y-4">
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Club Events Schedule</h2>
          <div className="bg-[#FCFBFA] p-5 rounded-xl border border-[#e2dfd7] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono bg-card-green/20 text-card-green font-bold px-2 py-0.5 rounded">WEEKLY</span>
              <h3 className="text-lg font-serif font-bold text-brand-dark mt-1">Kaiwa Circle (Conversation)</h3>
              <p className="text-xs text-[#645D58]">Every Saturday • 4:00 PM • Club Lounge</p>
            </div>
            <button onClick={onOpenJoinModal} className="bg-brand-dark-blue text-white px-4 py-2 rounded-lg text-xs">
              RSVP
            </button>
          </div>
        </section>
      )}

      {activeTab === 'experiences' && (
        <section className="px-8 py-10 flex-1 space-y-4">
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Club Experiences</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FCFBFA] p-5 rounded-xl border border-[#e2dfd7]">
              <h3 className="text-lg font-serif font-bold text-brand-dark">Chado Tea Ceremony</h3>
              <p className="text-xs text-[#645D58] mt-1">Mindful tea preparation with certified instructors.</p>
            </div>
            <div className="bg-[#FCFBFA] p-5 rounded-xl border border-[#e2dfd7]">
              <h3 className="text-lg font-serif font-bold text-brand-dark">Shodo Calligraphy</h3>
              <p className="text-xs text-[#645D58] mt-1">Traditional ink and brush character workshops.</p>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'resources' && (
        <section className="px-8 py-10 flex-1 space-y-4">
          <h2 className="text-3xl font-serif text-brand-dark mb-2">Study Resources</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#FCFBFA] p-5 rounded-xl border border-[#e2dfd7]">
              <h3 className="text-base font-serif font-bold text-brand-dark">Kana Practice Sheets</h3>
              <button onClick={() => alert('Downloading Kana practice guide...')} className="text-brand-red text-xs font-bold underline mt-2 block">
                Download PDF
              </button>
            </div>
            <div className="bg-[#FCFBFA] p-5 rounded-xl border border-[#e2dfd7]">
              <h3 className="text-base font-serif font-bold text-brand-dark">JLPT N5-N3 Anki Deck</h3>
              <button onClick={() => alert('Downloading Anki deck...')} className="text-brand-red text-xs font-bold underline mt-2 block">
                Download Anki Deck
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'about' && (
        <section className="px-8 py-10 flex-1">
          <h2 className="text-3xl font-serif text-brand-dark mb-2">About Isshoni Nihongo</h2>
          <p className="text-sm text-[#645D58] leading-relaxed bg-[#FCFBFA] p-6 rounded-xl border border-[#e2dfd7]">
            Isshoni Nihongo is Chennai's Japanese language & culture club, bringing students together for weekly study circles, conversation practice, and hosting the annual Hikari no Matsuri festival.
          </p>
        </section>
      )}

    </div>
  );
};
