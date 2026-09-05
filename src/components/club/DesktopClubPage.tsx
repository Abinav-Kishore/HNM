import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Users,
  Compass,
  Heart,
  Flame,
  CheckCircle,
  Calendar,
  Clock,
  MapPin,
  Download,
  FileText,
  Sparkles,
  ExternalLink,
  Award,
  Shield,
  Layers,
  GraduationCap
} from 'lucide-react';
import fujiImage from '../../assets/images/tablet_club_fuji_hero_1785988159091.jpg';
import { ActiveTab } from '../../types';
import { ClubLogo } from '../common/ClubLogo';

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

const MatchaIcon = ({ className }: { className?: string }) => (
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
    <path d="M4 10a8 8 0 0 0 16 0" />
    <path d="M2 10h20" />
    <path d="M11 6v3" />
    <path d="M13 6v3" />
    <path d="M15 6v3" />
    <path d="M9 6v3" />
    <path d="M12 2v2" />
  </svg>
);

interface DesktopClubPageProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onNavigateToHnm2026: () => void;
  onOpenJoinModal: () => void;
}

export const DesktopClubPage: React.FC<DesktopClubPageProps> = ({
  activeTab,
  setActiveTab,
  onNavigateToHnm2026,
  onOpenJoinModal
}) => {
  return (
    <div className="hidden lg:flex min-h-screen flex-col font-sans bg-[#FAF8F5] text-stone-900 selection:bg-red-600 selection:text-white">
      
      {/* 1. TOP ANNOUNCEMENT RIBBON */}
      <div className="bg-stone-950 text-white px-8 py-2.5 border-b border-stone-800 text-xs shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-red-600 text-white font-bold text-[10px] px-2.5 py-0.5 rounded uppercase font-mono tracking-wider">
              Flagship Festival
            </span>
            <span className="text-stone-300 font-sans text-xs">
              <strong className="text-white font-semibold">Hikari no Matsuri (HNM Vol. 3)</strong> — Official single-day Japanese culture & anime festival on January 8, 2027!
            </span>
          </div>
          <button
            onClick={onNavigateToHnm2026}
            className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            Visit HNM Event Site <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. STICKY DESKTOP HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200 shrink-0">
        <nav className="w-full max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          
          {/* Club Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <ClubLogo size="md" showTitle={true} lightMode={true} />
          </div>

          {/* Desktop Navigation Tabs */}
          <div className="flex items-center gap-8 text-[15px] font-medium text-stone-700">
            {(['home', 'journey', 'experiences', 'events', 'resources', 'about'] as ActiveTab[]).map((tab) => {
              const labels: Record<ActiveTab, string> = {
                home: 'Home',
                journey: 'Learning Journey',
                experiences: 'Experiences',
                events: 'Events & Circles',
                resources: 'Resources',
                about: 'About Club',
                hnm2026: 'HNM 2026'
              };
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative py-1.5 transition-colors capitalize cursor-pointer ${
                    isActive
                      ? 'text-red-600 font-bold'
                      : 'hover:text-stone-950 text-stone-600'
                  }`}
                >
                  {labels[tab]}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Group */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={onNavigateToHnm2026}
              className="bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 text-white px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm flex items-center gap-1.5 transition-all hover:scale-105 cursor-pointer"
            >
              <span>HNM 2027</span>
              <span className="bg-black/25 px-1.5 py-0.5 rounded text-[9px] font-mono">VOL. 3</span>
            </button>

            <button
              onClick={onOpenJoinModal}
              className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-colors shadow-sm cursor-pointer"
            >
              Join Club
            </button>
          </div>
        </nav>
      </header>

      {/* 3. MAIN TAB CONTENT */}
      <main className="flex-1 flex flex-col">

        {/* ------------------------------------------------------------- */}
        {/* TAB: HOME */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'home' && (
          <div className="flex flex-col">
            
            {/* HERO SECTION */}
            <section className="w-full max-w-7xl mx-auto px-8 py-12 xl:py-16 grid grid-cols-12 gap-8 xl:gap-12 items-center">
              
              {/* Left Hero Content */}
              <div className="col-span-7 flex flex-col justify-center">
                
                {/* Japanese Calligraphy & Seal Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-stone-500 font-serif text-sm tracking-[0.25em] select-none">
                    一緒に日本語
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                    Japanese Language & Culture Club
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif text-stone-950 font-bold leading-[1.12] tracking-tight mb-5">
                  A calm space to learn, share, and grow together<span className="text-red-600">.</span>
                </h1>

                {/* Description */}
                <p className="text-stone-600 text-base xl:text-lg leading-relaxed mb-8 max-w-xl">
                  Isshoni Nihongo is Chennai's vibrant community for Japanese language immersion, cultural workshops, JLPT study circles, and organizers of the flagship annual festival <strong className="text-stone-900 font-semibold">Hikari no Matsuri (HNM)</strong>.
                </p>

                {/* Hero Buttons */}
                <div className="flex items-center gap-4 mb-8">
                  <button
                    onClick={onNavigateToHnm2026}
                    className="bg-red-600 hover:bg-red-700 text-white px-7 py-3.5 rounded-full font-semibold text-sm xl:text-base transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer group"
                  >
                    <span>HNM Festival Portal</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => setActiveTab('journey')}
                    className="border-2 border-stone-300 hover:border-stone-900 text-stone-800 hover:text-stone-950 px-6 py-3.5 rounded-full font-semibold text-sm xl:text-base transition-colors bg-white cursor-pointer"
                  >
                    Our Learning Journey
                  </button>
                </div>

                {/* Stats / Highlights Pill Strip */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-600 pt-2 border-t border-stone-200">
                  <span className="flex items-center gap-1.5 bg-white border border-stone-200/80 px-3 py-1.5 rounded-full shadow-xs">
                    <Users className="w-3.5 h-3.5 text-red-600" /> 500+ Active Members
                  </span>
                  <span className="flex items-center gap-1.5 bg-white border border-stone-200/80 px-3 py-1.5 rounded-full shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-stone-700" /> Weekly Kaiwa Circles
                  </span>
                  <span className="flex items-center gap-1.5 bg-white border border-stone-200/80 px-3 py-1.5 rounded-full shadow-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-emerald-600" /> JLPT N5–N1 Study
                  </span>
                </div>
              </div>

              {/* Right Hero Artwork */}
              <div className="col-span-5 relative flex items-center justify-center">
                <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-stone-200/90 bg-white">
                  <img
                    src={fujiImage}
                    alt="Mount Fuji Artwork - Isshoni Nihongo"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                  
                  {/* Artwork Floating Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider">
                          Official Sanctuary
                        </div>
                        <div className="text-sm font-serif font-bold text-white">
                          Isshoni Nihongo Sanctuary
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-serif font-bold shadow-md">
                        縁
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </section>

            {/* 3 CORE FEATURE BENTO CARDS */}
            <section className="w-full bg-[#F3EFEA] py-16 px-8 border-t border-stone-200/90">
              <div className="max-w-7xl mx-auto">
                
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600 block mb-1">
                    Explore Isshoni Nihongo
                  </span>
                  <h2 className="text-3xl font-serif font-bold text-stone-950">
                    What We Do Together
                  </h2>
                </div>

                <div className="grid grid-cols-3 gap-8 mb-14">
                  
                  {/* Card 1: Journey */}
                  <div
                    onClick={() => setActiveTab('journey')}
                    className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between min-h-[260px] group border-t-4 border-t-emerald-600"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                        <ToriiIcon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">
                        Learning Journey
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Step-by-step guidance for beginners starting with Hiragana/Katakana up through JLPT N1 proficiency.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center text-emerald-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Explore Roadmap <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>

                  {/* Card 2: Experiences */}
                  <div
                    onClick={() => setActiveTab('experiences')}
                    className="bg-white rounded-2xl p-8 border border-stone-200 shadow-sm hover:shadow-md transition-all cursor-pointer flex flex-col justify-between min-h-[260px] group border-t-4 border-t-amber-600"
                  >
                    <div>
                      <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center mb-6 shadow-xs group-hover:scale-105 transition-transform">
                        <MatchaIcon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                        Cultural Experiences
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed">
                        Authentic Chado tea ceremonies, Shodo brush calligraphy, origami craft, and yukata workshops.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center text-amber-700 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      View Experiences <ArrowRight className="w-4 h-4 ml-1.5" />
                    </div>
                  </div>

                  {/* Card 3: Flagship Event (HNM 2026) */}
                  <div
                    onClick={onNavigateToHnm2026}
                    className="bg-gradient-to-br from-stone-950 via-slate-900 to-stone-900 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between min-h-[260px] group border-t-4 border-t-red-600 text-white relative overflow-hidden"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-md font-serif font-bold text-xl group-hover:scale-105 transition-transform">
                          光
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/40 px-2.5 py-1 rounded-full uppercase">
                          FLAGSHIP EVENT
                        </span>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                        Hikari no Matsuri
                      </h3>
                      <p className="text-stone-300 text-sm leading-relaxed">
                        The official HNM Vol. 3 festival portal, timetable, cosplay championship, passes, and guest headliners.
                      </p>
                    </div>
                    <div className="pt-6 flex items-center justify-between text-sm">
                      <span className="text-red-400 font-bold flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                        Open Festival Site <ArrowRight className="w-4 h-4" />
                      </span>
                      <span className="text-xs text-stone-400 font-mono">hnmvol2.com legacy</span>
                    </div>
                  </div>

                </div>

                {/* OFFICIAL CLUB CREST & PHILOSOPHY SHOWCASE */}
                <div className="bg-white rounded-3xl p-10 lg:p-12 border border-stone-200 shadow-sm max-w-5xl mx-auto">
                  <div className="grid grid-cols-12 gap-8 lg:gap-10 items-center">
                    
                    {/* Crest Image */}
                    <div className="col-span-4 flex flex-col items-center justify-center text-center border-r border-stone-200 pr-8">
                      <ClubLogo size="2xl" />
                      <span className="text-[10px] font-mono font-bold text-red-600 mt-4 uppercase tracking-widest bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
                        OFFICIAL CLUB EMBLEM
                      </span>
                      <span className="text-xs text-stone-500 mt-2 font-serif">
                        Isshoni Nihongo (一緒に日本語)
                      </span>
                    </div>

                    {/* Philosophy Content */}
                    <div className="col-span-8 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold bg-stone-100 text-stone-800 px-2.5 py-0.5 rounded uppercase tracking-wider">
                          Our Philosophy
                        </span>
                        <span className="text-xs text-red-600 font-bold font-serif">
                          Sanctuary & Community
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-stone-900">
                        Welcome to Isshoni Nihongo Japanese Culture Club
                      </h3>

                      <p className="text-stone-600 text-sm leading-relaxed">
                        Our emblem embodies our core values: the traditional <strong>Torii Gate (鳥居)</strong> represents an open sanctuary of learning and cultural respect, flanked by evergreen pines for resilience, under the rising sun of enlightenment.
                      </p>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-2 text-xs text-stone-700 font-medium bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Weekly Conversation Circles</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-700 font-medium bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>JLPT Study Groups (N5–N1)</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-700 font-medium bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Hikari no Matsuri (HNM) Host</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-stone-700 font-medium bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Cultural & Tea Workshops</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </section>

          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB: JOURNEY */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'journey' && (
          <section className="w-full max-w-7xl mx-auto px-8 py-14 flex-1">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 block mb-1">
                Curriculum & Roadmap
              </span>
              <h2 className="text-4xl font-serif font-bold text-stone-950 mb-3">
                Our Japanese Learning Journey
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Whether starting from zero or preparing for JLPT N2/N1 exams, our structured roadmap supports you every step of the way with mentors and peer study groups.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8">
              
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full uppercase">
                    Level 01 • Beginner
                  </span>
                  <span className="text-xs font-mono text-stone-400">JLPT N5 Target</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Kana & Essential Foundations
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Master Hiragana & Katakana stroke order, basic pronunciation, core greeting etiquette, numbers, and elementary grammar structures.
                </p>
                <ul className="text-xs text-stone-600 space-y-2 pt-3 border-t border-stone-100">
                  <li className="flex items-center gap-2">✓ 46 Hiragana & 46 Katakana mastery</li>
                  <li className="flex items-center gap-2">✓ 100 essential Kanji characters</li>
                  <li className="flex items-center gap-2">✓ Daily self-introductions (Jikoshoukai)</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 rounded-full uppercase">
                    Level 02 • Intermediate
                  </span>
                  <span className="text-xs font-mono text-stone-400">JLPT N4–N3 Target</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Grammar & Conversational Fluency
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Deepen comprehension through anime audio transcripts, intermediate particles, verb conjugation tables, and weekly speaking circles.
                </p>
                <ul className="text-xs text-stone-600 space-y-2 pt-3 border-t border-stone-100">
                  <li className="flex items-center gap-2">✓ 350+ Kanji & compound words</li>
                  <li className="flex items-center gap-2">✓ Conversational Kaiwa Practice</li>
                  <li className="flex items-center gap-2">✓ Reading short manga & articles</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full uppercase">
                    Level 03 • Advanced
                  </span>
                  <span className="text-xs font-mono text-stone-400">JLPT N2–N1 Target</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Keigo & Cultural Mastery
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Understand business Keigo honorifics, contemporary essays, translation workshops, and participate in festival organization for HNM.
                </p>
                <ul className="text-xs text-stone-600 space-y-2 pt-3 border-t border-stone-100">
                  <li className="flex items-center gap-2">✓ Sonkeigo & Kenjougo mastery</li>
                  <li className="flex items-center gap-2">✓ Complex news & literature reading</li>
                  <li className="flex items-center gap-2">✓ Translation & Interpretation circles</li>
                </ul>
              </div>

            </div>
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB: EXPERIENCES */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'experiences' && (
          <section className="w-full max-w-7xl mx-auto px-8 py-14 flex-1">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 block mb-1">
                Hands-on Immersion
              </span>
              <h2 className="text-4xl font-serif font-bold text-stone-950 mb-3">
                Cultural Experiences & Workshops
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Language lives in culture. We organize authentic traditional Japanese workshops led by verified sensei and cultural practitioners.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              
              {/* Tea Ceremony */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                    <MatchaIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded">
                    TRADITIONAL ART
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2 mb-3">
                    Chado: The Japanese Tea Ceremony (茶道)
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Learn the graceful choreography of preparing and serving powdered green matcha tea, embracing the four zen principles: Harmony (和), Respect (敬), Purity (清), and Tranquility (寂).
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Frequency: Monthly Workshop</span>
                  <span className="font-semibold text-stone-900">Certified Sensei Led</span>
                </div>
              </div>

              {/* Shodo Calligraphy */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-5">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-700 uppercase tracking-widest bg-slate-100 px-2.5 py-0.5 rounded">
                    INK & BRUSH
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2 mb-3">
                    Shodo: Japanese Calligraphy (書道)
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Master the fluid stroke order (Tome, Hane, Harai) of Kanji using traditional sumi ink and bamboo washi paper, cultivating focus and mindfulness with every brush stroke.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Frequency: Bi-Weekly</span>
                  <span className="font-semibold text-stone-900">All Materials Provided</span>
                </div>
              </div>

              {/* Origami & Crafts */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-0.5 rounded">
                    CREATIVE CRAFT
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2 mb-3">
                    Origami & Papercraft (折り紙)
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    From the classic Senbazuru paper cranes to intricate geometric kusudama spheres, learn traditional folding techniques while practicing Japanese geometric vocabulary.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Frequency: Monthly</span>
                  <span className="font-semibold text-stone-900">Beginner Friendly</span>
                </div>
              </div>

              {/* Yukata & Festival Etiquette */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center mb-5">
                    <Heart className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-rose-700 uppercase tracking-widest bg-rose-50 px-2.5 py-0.5 rounded">
                    FESTIVAL WEAR
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mt-2 mb-3">
                    Yukata Dressing & Matsuri Etiquette (浴衣)
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    Prepare for Hikari no Matsuri by learning how to wear traditional summer yukata robes, tie obi sashes properly, and practice Bon Odori festival circle dance steps.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>Frequency: Pre-Festival Season</span>
                  <span className="font-semibold text-stone-900">Includes HNM Prep</span>
                </div>
              </div>

            </div>
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB: EVENTS */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'events' && (
          <section className="w-full max-w-7xl mx-auto px-8 py-14 flex-1">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600 block mb-1">
                  Schedule & Meetups
                </span>
                <h2 className="text-4xl font-serif font-bold text-stone-950">
                  Club Calendar & Flagship Festival
                </h2>
              </div>
              <button
                onClick={onNavigateToHnm2026}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                Go to HNM Festival Site <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              
              {/* Flagship Event Banner */}
              <div className="bg-gradient-to-r from-stone-950 via-slate-900 to-stone-900 text-white p-8 rounded-3xl border border-red-600/50 flex items-center justify-between shadow-lg">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-red-600 text-white font-bold px-2.5 py-0.5 rounded uppercase">
                      FLAGSHIP ANNUAL EVENT
                    </span>
                    <span className="text-xs font-serif text-red-400 font-semibold">
                      HNM Vol. 3 (2027)
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-white">
                    Hikari no Matsuri (光の祭り)
                  </h3>
                  <p className="text-stone-300 text-sm leading-relaxed">
                    Chennai's largest Japanese anime & cultural festival organized by Isshoni Nihongo. Featuring cosplay championships, anisong concerts, tea ceremonies, and yatai street food on January 8, 2027.
                  </p>
                  <div className="flex items-center gap-6 text-xs text-amber-300 pt-2 font-mono">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> January 8, 2027</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> CIT Campus, Chennai</span>
                  </div>
                </div>

                <div className="shrink-0 pl-8">
                  <button
                    onClick={onNavigateToHnm2026}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-full text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                  >
                    Open Festival Website <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Weekly Kaiwa Circle */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded uppercase">
                    WEEKLY MEETUP
                  </span>
                  <h4 className="text-xl font-serif font-bold text-stone-900">
                    Kaiwa Speaking Circle (会話の輪)
                  </h4>
                  <p className="text-stone-600 text-xs">
                    Every Saturday • 4:00 PM – 5:30 PM • Isshoni Club Lounge & Online
                  </p>
                </div>
                <button
                  onClick={onOpenJoinModal}
                  className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
                >
                  RSVP for Circle
                </button>
              </div>

              {/* JLPT Mock Exam */}
              <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded uppercase">
                    STUDY SESSION
                  </span>
                  <h4 className="text-xl font-serif font-bold text-stone-900">
                    JLPT Mock Exam & Listening Practice
                  </h4>
                  <p className="text-stone-600 text-xs">
                    Second Sunday of each month • 10:00 AM – 1:00 PM • Lecture Hall 4
                  </p>
                </div>
                <button
                  onClick={onOpenJoinModal}
                  className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full text-xs font-semibold cursor-pointer"
                >
                  Register Mock Test
                </button>
              </div>

            </div>
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB: RESOURCES */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'resources' && (
          <section className="w-full max-w-7xl mx-auto px-8 py-14 flex-1">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600 block mb-1">
                Study Material
              </span>
              <h2 className="text-4xl font-serif font-bold text-stone-950 mb-3">
                Learning Resources & Practice Guides
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Free study tools, printable worksheets, and curated SRS flashcard decks maintained by Isshoni Nihongo club mentors.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              
              {/* Resource 1 */}
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    Printable Kana Grids
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed mb-4">
                    Stroke-order practice worksheets for Hiragana & Katakana with square guidelines for proper character balance.
                  </p>
                </div>
                <button
                  onClick={() => alert('Downloading Kana practice guide (PDF)...')}
                  className="text-red-600 hover:text-red-700 font-bold text-xs flex items-center gap-1.5 pt-4 border-t border-stone-100 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Download Printable PDF
                </button>
              </div>

              {/* Resource 2 */}
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    JLPT N5–N3 Anki Deck
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed mb-4">
                    Curated spaced-repetition flashcards containing vocabulary, audio native pronunciation clips, and example sentences.
                  </p>
                </div>
                <button
                  onClick={() => alert('Downloading Anki Package (.apkg)...')}
                  className="text-emerald-700 hover:text-emerald-800 font-bold text-xs flex items-center gap-1.5 pt-4 border-t border-stone-100 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Download Anki Deck (.apkg)
                </button>
              </div>

              {/* Resource 3 */}
              <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mb-2">
                    Kanji Radical Cheatsheet
                  </h3>
                  <p className="text-stone-600 text-xs leading-relaxed mb-4">
                    A comprehensive reference guide for the 214 traditional Kangxi radicals that form all complex Japanese Kanji.
                  </p>
                </div>
                <button
                  onClick={() => alert('Downloading Kanji Radical Cheatsheet (PDF)...')}
                  className="text-blue-700 hover:text-blue-800 font-bold text-xs flex items-center gap-1.5 pt-4 border-t border-stone-100 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Download Cheatsheet (PDF)
                </button>
              </div>

            </div>
          </section>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB: ABOUT */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'about' && (
          <section className="w-full max-w-7xl mx-auto px-8 py-14 flex-1">
            <div className="mb-10 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-red-600 block mb-1">
                Our Story
              </span>
              <h2 className="text-4xl font-serif font-bold text-stone-950 mb-3">
                About Isshoni Nihongo
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Building a welcoming sanctuary for Japanese language learners, anime enthusiasts, and cultural explorers.
              </p>
            </div>

            <div className="grid grid-cols-12 gap-8 items-start">
              
              <div className="col-span-8 bg-white p-8 lg:p-10 rounded-3xl border border-stone-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                    Origin & Mission
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Founded with the heartfelt belief that languages are best learned together (<em>"Isshoni"</em>), our club has grown into a vibrant cultural hub in Chennai. We believe language learning is not merely memorizing grammar rules, but experiencing the poetry, folklore, culinary traditions, and artistic expressions of Japan.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                    Organizers of Hikari no Matsuri (HNM)
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    In 2025, our club launched <strong>Hikari no Matsuri Vol. 2</strong> at <code>hnmvol2.com</code>, hosting over 2,800 attendees. Today, we are proud to present <strong>Hikari no Matsuri 2027 (Vol. 3)</strong> as Chennai’s premier annual Japanese anime & cultural festival on January 8, 2027.
                  </p>
                </div>
              </div>

              <div className="col-span-4 bg-[#F3EFEA] p-8 rounded-3xl border border-stone-200/90 space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-600 block mb-1">
                    Club Leadership
                  </span>
                  <h4 className="text-lg font-serif font-bold text-stone-900">
                    Mentors & Sensei
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    Certified Japanese language educators and student organizers guiding each session.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={onOpenJoinModal}
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                  >
                    Join Isshoni Nihongo
                  </button>
                  <button
                    onClick={onNavigateToHnm2026}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    Visit HNM Festival Site <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </section>
        )}

      </main>

    </div>
  );
};
