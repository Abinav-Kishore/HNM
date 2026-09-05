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
  X,
  ChevronRight,
  Calendar,
  Layers
} from 'lucide-react';
import mobileFujiImage from '../../assets/images/mobile_club_fuji_hero_1785988146671.jpg';
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

interface MobileClubPageProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onNavigateToHnm2026: () => void;
  onOpenJoinModal: () => void;
}

export const MobileClubPage: React.FC<MobileClubPageProps> = ({
  activeTab,
  setActiveTab,
  onNavigateToHnm2026,
  onOpenJoinModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleTabSelect = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="block md:hidden min-h-screen bg-[#FAF8F5] text-stone-900 font-sans pb-12 overflow-x-hidden">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. MOBILE HEADER & NAVIGATION */}
      {/* ------------------------------------------------------------- */}
      <header className="sticky top-0 z-50 bg-[#F5F2EC]/95 backdrop-blur-md border-b border-[#e2dfd7] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => handleTabSelect('home')}>
          <ClubLogo size="sm" showTitle={true} lightMode={true} />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onNavigateToHnm2026}
            className="bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 text-white px-2.5 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm flex items-center gap-1 cursor-pointer"
          >
            HNM '26
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#EBE4DA] text-brand-dark active:scale-95 transition-transform"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[53px] z-40 bg-brand-cream border-t border-[#e2dfd7] p-6 space-y-4 font-serif overflow-y-auto">
          <div className="flex items-center justify-between border-b border-[#e2dfd7] pb-3">
            <span className="text-xs font-mono font-bold text-brand-red uppercase tracking-widest">Isshoni Navigation</span>
            <span className="text-xs text-[#9C938C]">一緒に日本語</span>
          </div>

          <div className="space-y-2 text-base font-bold">
            <button
              onClick={() => handleTabSelect('home')}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between ${activeTab === 'home' ? 'bg-brand-red text-white' : 'bg-[#EBE4DA] text-brand-dark'}`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleTabSelect('journey')}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between ${activeTab === 'journey' ? 'bg-brand-red text-white' : 'bg-[#EBE4DA] text-brand-dark'}`}
            >
              <span>Learning Journey</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleTabSelect('experiences')}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between ${activeTab === 'experiences' ? 'bg-brand-red text-white' : 'bg-[#EBE4DA] text-brand-dark'}`}
            >
              <span>Experiences & Workshops</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleTabSelect('events')}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between ${activeTab === 'events' ? 'bg-brand-red text-white' : 'bg-[#EBE4DA] text-brand-dark'}`}
            >
              <span>Club Events & Meetups</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleTabSelect('resources')}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between ${activeTab === 'resources' ? 'bg-brand-red text-white' : 'bg-[#EBE4DA] text-brand-dark'}`}
            >
              <span>Study Guides & PDFs</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleTabSelect('about')}
              className={`w-full text-left p-3 rounded-xl flex items-center justify-between ${activeTab === 'about' ? 'bg-brand-red text-white' : 'bg-[#EBE4DA] text-brand-dark'}`}
            >
              <span>About Club</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-4 border-t border-[#e2dfd7] space-y-2">
            <button
              onClick={onNavigateToHnm2026}
              className="w-full bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              Go to HNM Festival Website <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenJoinModal(); }}
              className="w-full bg-brand-dark-blue text-white font-bold py-3 px-4 rounded-xl text-xs text-center"
            >
              Join Club Community
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 2. DEDICATED PORTRAIT HERO - 9:16 FUJI ARTWORK */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'home' && (
        <section className="relative w-full bg-brand-cream border-b border-[#e2dfd7]">
          
          {/* Top Portrait 9:16 Artwork Banner */}
          <div className="relative w-full aspect-[9/11] max-h-[420px] overflow-hidden">
            <img
              src={mobileFujiImage}
              alt="Isshoni Nihongo Mobile Watercolor Fuji Poster"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            {/* Soft gradient transition into paper cream background */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-cream via-brand-cream/30 to-transparent" />
            
            {/* Kanji Badge Overlay */}
            <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 bg-white/90 border border-[#e2dfd7] text-brand-dark text-[10px] font-serif px-3 py-1 rounded-full shadow-sm backdrop-blur-md">
              <span className="text-brand-red font-bold">縁</span>
              <span>Isshoni Nihongo • 一緒に日本語</span>
            </div>
          </div>

          {/* Hero Content Box Positioned DIRECTLY BENEATH Character/Artwork */}
          <div className="px-4 -mt-12 relative z-10 space-y-3">
            <div className="bg-[#FCFBFA] border-2 border-[#e2dfd7] rounded-3xl p-5 shadow-xl space-y-3">
              
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-brand-red bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  JAPANESE CULTURE CLUB
                </span>
                <span className="text-[11px] font-serif text-[#9C938C]">Chennai, India</span>
              </div>

              {/* Title beneath artwork */}
              <h1 className="text-2xl font-serif font-bold text-brand-dark leading-snug tracking-tight">
                A calm space to learn, share, and grow together<span className="text-brand-red">.</span>
              </h1>

              <p className="text-xs text-[#645D58] font-sans leading-relaxed">
                Weekly conversation circles, JLPT study groups, and annual hosts of Hikari no Matsuri (HNM).
              </p>

              {/* Full-width CTA buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={onNavigateToHnm2026}
                  className="w-full bg-gradient-to-r from-rose-600 to-amber-500 hover:from-rose-700 hover:to-amber-600 text-white py-3.5 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2 shadow-md active:scale-98 transition-transform cursor-pointer"
                >
                  <span>Open HNM Festival Website</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenJoinModal}
                  className="w-full bg-brand-dark-blue text-white py-3 rounded-2xl text-xs font-bold font-sans flex items-center justify-center gap-2"
                >
                  <Users className="w-4 h-4" />
                  <span>Join Club Community</span>
                </button>
              </div>

            </div>
          </div>

        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 3. MOBILE INFORMATION ARCHITECTURE - CONCISE PREVIEWS */}
      {/* ------------------------------------------------------------- */}
      {activeTab === 'home' && (
        <div className="px-4 py-6 space-y-6">
          
          {/* Featured Club Pillars (Compact Cards) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest">Club Highlights</span>
              <span className="text-[10px] text-[#9C938C] font-serif">一緒に</span>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {/* Journey Preview */}
              <div
                onClick={() => setActiveTab('journey')}
                className="bg-[#FCFBFA] border border-[#e2dfd7] rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm border-t-4 border-card-green active:scale-98 transition-transform"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-card-green flex items-center justify-center shrink-0">
                    <ToriiIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-serif font-bold text-brand-dark truncate">Learning Journey</h3>
                    <p className="text-[11px] text-[#645D58] truncate">Kana to fluency in guided steps</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-card-green shrink-0" />
              </div>

              {/* Experiences Preview */}
              <div
                onClick={() => setActiveTab('experiences')}
                className="bg-[#FCFBFA] border border-[#e2dfd7] rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm border-t-4 border-card-orange active:scale-98 transition-transform"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-card-orange flex items-center justify-center shrink-0">
                    <MatchaIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-serif font-bold text-brand-dark truncate">Club Experiences</h3>
                    <p className="text-[11px] text-[#645D58] truncate">Tea ceremonies, calligraphy & workshops</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-card-orange shrink-0" />
              </div>

              {/* Flagship Event Mobile Banner */}
              <div
                onClick={onNavigateToHnm2026}
                className="bg-gradient-to-r from-[#182338] to-[#25324c] border-2 border-amber-400/50 rounded-2xl p-4 text-white shadow-md space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold bg-amber-400 text-slate-950 px-2 py-0.5 rounded">
                    FLAGSHIP FESTIVAL
                  </span>
                  <span className="text-[10px] text-amber-300 font-mono">Vol. 3 • 2027</span>
                </div>

                <div>
                  <h3 className="text-base font-serif font-bold text-white">Hikari no Matsuri</h3>
                  <p className="text-xs text-slate-300">Single-day Japanese anime & cultural festival on Jan 8, 2027.</p>
                </div>

                <button className="w-full bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow">
                  Open HNM Festival Website <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Official Crest Compact Card */}
          <div className="bg-[#FCFBFA] border border-[#e2dfd7] rounded-2xl p-4 flex items-center gap-4">
            <ClubLogo size="lg" />
            <div className="min-w-0 space-y-1">
              <span className="text-[9px] font-mono font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded border border-red-200">
                OFFICIAL CREST
              </span>
              <h4 className="text-xs font-serif font-bold text-brand-dark truncate">Isshoni Nihongo (一緒に日本語)</h4>
              <p className="text-[10px] text-[#645D58] line-clamp-2">Torii Gate, crimson sun & pine trees symbolizing resilience and learning together.</p>
            </div>
          </div>

        </div>
      )}

      {/* Sub Tab Views for Mobile */}
      {activeTab === 'journey' && (
        <div className="px-4 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-brand-dark">Our Learning Journey</h2>
            <button onClick={() => setActiveTab('home')} className="text-xs text-brand-red font-bold">Back Home</button>
          </div>

          <div className="space-y-3">
            <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7]">
              <span className="text-brand-red font-mono font-bold text-[10px]">STEP 01</span>
              <h3 className="text-base font-serif font-bold text-brand-dark mt-1">Beginner Foundations</h3>
              <p className="text-xs text-[#645D58] mt-1">Hiragana, Katakana, basic greetings & everyday vocabulary.</p>
            </div>

            <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7]">
              <span className="text-card-orange font-mono font-bold text-[10px]">STEP 02</span>
              <h3 className="text-base font-serif font-bold text-brand-dark mt-1">Intermediate Fluency</h3>
              <p className="text-xs text-[#645D58] mt-1">Kanji stroke order, grammar patterns & weekly conversation circle.</p>
            </div>

            <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7]">
              <span className="text-card-green font-mono font-bold text-[10px]">STEP 03</span>
              <h3 className="text-base font-serif font-bold text-brand-dark mt-1">Cultural Mastery</h3>
              <p className="text-xs text-[#645D58] mt-1">Honorifics (Keigo), Japanese literature & festival hosting.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="px-4 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-brand-dark">Club Schedule</h2>
            <button onClick={() => setActiveTab('home')} className="text-xs text-brand-red font-bold">Back Home</button>
          </div>

          <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7] space-y-3">
            <span className="text-[10px] font-mono bg-card-green/20 text-card-green font-bold px-2 py-0.5 rounded">WEEKLY MEETUP</span>
            <h3 className="text-base font-serif font-bold text-brand-dark">Kaiwa Circle (Conversation)</h3>
            <p className="text-xs text-[#645D58]">Every Saturday • 4:00 PM • Club Lounge</p>
            <button onClick={onOpenJoinModal} className="w-full bg-brand-dark-blue text-white py-2.5 rounded-xl text-xs font-bold">
              RSVP for Meetup
            </button>
          </div>
        </div>
      )}

      {activeTab === 'experiences' && (
        <div className="px-4 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-brand-dark">Club Experiences</h2>
            <button onClick={() => setActiveTab('home')} className="text-xs text-brand-red font-bold">Back Home</button>
          </div>

          <div className="space-y-3">
            <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7]">
              <h3 className="text-base font-serif font-bold text-brand-dark">Chado Tea Ceremony</h3>
              <p className="text-xs text-[#645D58] mt-1">Mindful tea preparation workshops guided by certified sensei.</p>
            </div>

            <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7]">
              <h3 className="text-base font-serif font-bold text-brand-dark">Shodo Calligraphy</h3>
              <p className="text-xs text-[#645D58] mt-1">Traditional ink and brush calligraphy classes.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'resources' && (
        <div className="px-4 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-brand-dark">Study Resources</h2>
            <button onClick={() => setActiveTab('home')} className="text-xs text-brand-red font-bold">Back Home</button>
          </div>

          <div className="space-y-3">
            <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7]">
              <h3 className="text-base font-serif font-bold text-brand-dark">Kana Practice Sheets</h3>
              <button onClick={() => alert('Downloading Kana PDF...')} className="text-brand-red text-xs font-bold underline mt-2 block">
                Download Printable PDF
              </button>
            </div>

            <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7]">
              <h3 className="text-base font-serif font-bold text-brand-dark">JLPT N5-N3 Anki Deck</h3>
              <button onClick={() => alert('Downloading Anki deck...')} className="text-brand-red text-xs font-bold underline mt-2 block">
                Download Flashcard Package
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'about' && (
        <div className="px-4 py-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-serif font-bold text-brand-dark">About Isshoni Nihongo</h2>
            <button onClick={() => setActiveTab('home')} className="text-xs text-brand-red font-bold">Back Home</button>
          </div>

          <div className="bg-[#FCFBFA] p-4 rounded-2xl border border-[#e2dfd7] text-xs text-[#645D58] leading-relaxed space-y-2">
            <p>
              Isshoni Nihongo (一緒に日本語) is a Japanese culture & language community where students learn, practice, and celebrate Japanese traditions together.
            </p>
            <p>
              We host weekly study groups, conversation circles, and organize the annual Hikari no Matsuri (HNM) festival.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
