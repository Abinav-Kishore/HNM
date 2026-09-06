import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Play,
  ArrowRight,
  Award,
  Sparkles,
  Music,
  Gamepad2,
  Utensils,
  BookOpen,
  Film,
  Users,
  ChevronRight,
} from 'lucide-react';
import {
  HNM_EVENT_DETAILS,
  SPECIAL_GUESTS,
  SCHEDULE_ITEMS,
  FESTIVAL_VIDEOS,
  TICKET_TIERS,
} from '../data/hnmData';
import { CountdownTimer } from '../components/CountdownTimer';
import { AnimeCharacterDisplay } from '../components/AnimeCharacterDisplay';
import { AnimeSoundboard } from '../components/AnimeSoundboard';
import { useModal } from '../context/ModalContext';
import { HnmEventLogo } from '../components/common/HnmEventLogo';
import { ClubLogo } from '../components/common/ClubLogo';
import { VoiceIntro } from '../components/audio/VoiceIntro';

export const HomePage: React.FC = () => {
  const { openTicketModal, openVideoModal, openCosplayModal } = useModal();

  const festivalAttractions = [
    {
      id: 'cosplay',
      icon: Award,
      title: 'Cosplay Masquerade Championship',
      japaneseTitle: 'コスプレ大会',
      badge: '₹50,000 Prize Pool',
      description:
        'South India’s premier cosplay competition featuring Solo Runway, Duo Skit Performance, and Craftsmanship divisions evaluated by international guest cosplayers.',
      link: '/cosplay',
      linkText: 'Cosplay Rules & Entry Details',
    },
    {
      id: 'anisong',
      icon: Music,
      title: 'Notes of Nippon Live Anisong Band',
      japaneseTitle: 'アニソンライブ',
      badge: 'Live J-Rock Concert',
      description:
        'High-energy live rock concert covering iconic anime anthems from Demon Slayer, Jujutsu Kaisen, Naruto, Bleach, and Attack on Titan.',
      link: '/schedule',
      linkText: 'Check Stage Timetable',
    },
    {
      id: 'gaming',
      icon: Gamepad2,
      title: 'Akihabara no Quest Gaming Zone',
      japaneseTitle: '秋葉原クエスト',
      badge: 'Tournaments & Trivia',
      description:
        'Competitive anime fighting games, rhythm gaming stations, open-floor tournaments, and the ultimate Anime Trivia Championship with custom trophy prizes.',
      link: '/schedule',
      linkText: 'View Gaming Schedule',
    },
    {
      id: 'culture',
      icon: Sparkles,
      title: 'Traditional Japanese Cultural Pavilions',
      japaneseTitle: '伝統文化',
      badge: 'Interactive Arts',
      description:
        'Experience the grand Bon Odori circle dance, resonant Thunder Taiko drum ensemble performances, Yukata dressing booths, and traditional tea ceremony showcases.',
      link: '/about',
      linkText: 'Explore Cultural Heritage',
    },
    {
      id: 'food',
      icon: Utensils,
      title: 'Authentic Yatai Street Food Alley',
      japaneseTitle: '屋台通り',
      badge: 'Matsuri Flavors',
      description:
        'Savor authentic Japanese festival street foods including piping hot Takoyaki, steaming bowls of Ramen, freshly made Dorayaki, Onigiri, and sweet Dango skewers.',
      link: '/about',
      linkText: 'View Food Alley Details',
    },
    {
      id: 'workshops',
      icon: BookOpen,
      title: 'Creative Workshops & NIHON DIVE VR',
      japaneseTitle: 'ワークショップ',
      badge: 'Language & Art',
      description:
        'Hands-on Japanese Shodo brush calligraphy workshops, Manga storytelling contest (MANGAMIND), speech competitions, and immersive VR travel tours of Tokyo and Kyoto.',
      link: '/club',
      linkText: 'Visit Isshoni Nihongo Club',
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080A] text-[#FFFFFF] font-sans matsuri-ambient-bg relative overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Unified, Semantic, Single H1 across all screen sizes)     */}
      {/* ========================================================================= */}
      <section
        aria-label="Festival Introduction"
        className="relative w-full min-h-[calc(100vh-70px)] flex flex-col justify-center py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden bg-[#08080A] border-b border-red-500/20"
      >
        {/* Full-bleed Widescreen Background Artwork (Desktop & Tablet) */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(min-width: 1280px)" srcSet={HNM_EVENT_DETAILS.heroAnimeImage} />
            <source media="(min-width: 768px)" srcSet={HNM_EVENT_DETAILS.heroAnimeImageTablet} />
            <img
              src={HNM_EVENT_DETAILS.heroAnimeImage}
              alt="Hikari no Matsuri Vol. 3 Japanese & Anime Cultural Festival Key Visual Artwork at Chennai Institute of Technology"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center sm:object-[70%_center] md:object-[80%_35%] lg:object-[85%_30%] xl:object-[90%_25%]"
              loading="eager"
              fetchPriority="high"
              width={1920}
              height={1080}
            />
          </picture>
          {/* Obsidian Red & Black Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/90 sm:via-[#08080A]/80 md:via-[#08080A]/65 lg:via-[#08080A]/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/30 to-[#121217]/70" />
        </div>

        {/* Hero Content Container */}
        <div className="max-w-7xl mx-auto w-full relative z-10 flex-1 flex flex-col justify-center py-4">
          
          {/* Mobile-Only Portrait Banner (Dedicated 9:12 Aspect Poster) */}
          <div className="block md:hidden w-full aspect-[9/10] max-h-[380px] rounded-2xl overflow-hidden mb-6 relative border border-red-500/30 shadow-2xl">
            <img
              src={HNM_EVENT_DETAILS.heroAnimeImageMobile}
              alt="Hikari no Matsuri Vol. 3 Official Festival Mascot Character Poster"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
              loading="eager"
              width={640}
              height={853}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/30 to-transparent" />
            <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 bg-black/80 border border-red-500/40 text-red-300 text-[10px] font-mono px-3 py-1 rounded-full backdrop-blur-md">
              <span className="hanko-seal text-[8px]">光</span>
              <span className="font-bold uppercase tracking-wider">HNM VOL. 3 • JAN 8, 2027</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left / Primary Column: Event Info, Single Primary H1, and CTAs */}
            <div className="lg:col-span-7 xl:col-span-7 max-w-2xl text-left">
              
              {/* Category Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 text-red-400 font-mono font-bold text-xs tracking-wider uppercase mb-3 bg-red-500/10 border border-red-500/30 px-3 py-1 rounded-md">
                <span className="text-red-400 font-extrabold">#1 JAPANESE &amp; ANIME CULTURAL FESTIVAL</span>
                <span className="text-zinc-500">•</span>
                <span className="text-amber-400 font-bold">★★★★★</span>
              </div>

              {/* PRIMARY H1 - Clearly Identifying Event Name */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-anime font-black tracking-tight text-white leading-tight mb-3 drop-shadow-2xl">
                Hikari no Matsuri <span className="text-red-500">Vol. 3</span>
              </h1>

              {/* Japanese Subtitle & Edition */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-base sm:text-lg font-serif font-bold text-red-400 tracking-wider">
                  第3回 光の祭り 2027
                </span>
                <span className="text-xs font-serif bg-red-950/70 text-red-300 px-2 py-0.5 rounded border border-red-500/30 font-bold">
                  テーマ: 絆 Kizuna (Bonds)
                </span>
              </div>

              {/* Crawlable, Natural Supporting Text */}
              <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed max-w-xl font-normal drop-shadow">
                Join South India&apos;s premier Japanese and anime cultural celebration on{' '}
                <strong className="text-white font-semibold">January 8, 2027</strong> at{' '}
                <strong className="text-white font-semibold">Chennai Institute of Technology</strong> in{' '}
                <strong className="text-white font-semibold">Chennai</strong>. Experience vibrant Bon Odori dancing,
                thunderous Taiko drumming, the ₹50,000 Cosplay Masquerade Championship, live Anisong rock concerts,
                Akihabara gaming tournaments, Japanese calligraphy workshops, and authentic Yatai street food.
              </p>

              {/* Quick Details Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-medium text-zinc-200 mb-6 bg-[#121217]/90 p-3.5 rounded-2xl border border-red-500/30 backdrop-blur-md max-w-xl">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
                  <span>{HNM_EVENT_DETAILS.dates}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
                  <span>{HNM_EVENT_DETAILS.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" aria-hidden="true" />
                  <span className="truncate">CIT Chennai Campus</span>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Link
                  to="/tickets"
                  className="btn-vermilion px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg uppercase tracking-wider"
                >
                  <Ticket className="w-4 h-4" aria-hidden="true" /> Reserve Festival Pass
                </Link>

                <button
                  onClick={() => openVideoModal('v1')}
                  className="btn-matsuri-gold px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Play className="w-4 h-4 fill-red-400 text-red-400" aria-hidden="true" /> Watch Official Trailer
                </button>
              </div>

              {/* Voice Intro Component */}
              <div className="max-w-xl">
                <VoiceIntro
                  characterId="tanjiro"
                  title="Festival Lantern Guide Quote"
                  subtitle="Warm festival welcome for HNM Vol. 3 under glowing red lantern lights!"
                />
              </div>

              {/* Festival Metrics Bar */}
              <div className="mt-6 pt-5 border-t border-red-500/20 grid grid-cols-3 gap-4 text-left max-w-xl">
                <div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-red-400">5,000+</div>
                  <div className="text-[11px] text-zinc-400 font-medium">Expected Attendees</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-red-400">20+</div>
                  <div className="text-[11px] text-zinc-400 font-medium">Stage Shows &amp; Zones</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-red-400">₹50,000</div>
                  <div className="text-[11px] text-zinc-400 font-medium">Cosplay Prize Pool</div>
                </div>
              </div>

            </div>

            {/* Right Column: 3D Anime Mascot Figure Standee (Desktop Display) */}
            <div className="hidden xl:flex xl:col-span-5 justify-center items-center relative">
              <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
                
                {/* Radiant Glow Behind Standee */}
                <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
                
                {/* 3D Popout Character Standee */}
                <img
                  src={HNM_EVENT_DETAILS.popoutFigureImage}
                  alt="Hikari no Matsuri Vol. 3 Anime Mascot Character Figure Standee"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(239,68,68,0.35)]"
                  loading="eager"
                  width={420}
                  height={525}
                />

                {/* Floating Japanese Badge Overlay */}
                <div className="absolute -bottom-2 -left-4 z-20 bg-[#121217]/95 border border-red-500/40 p-3 rounded-2xl backdrop-blur-md shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400 font-serif font-bold text-lg">
                    光
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Hikari no Matsuri Vol. 3</div>
                    <div className="text-[10px] text-red-400 font-mono">January 8, 2027 • CIT Chennai</div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MAJOR FESTIVAL ATTRACTIONS & EXPERIENCES (Structured Semantic Articles) */}
      {/* ========================================================================= */}
      <section
        id="attractions"
        aria-labelledby="attractions-heading"
        className="py-16 md:py-20 bg-[#0E0E12] border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-widest block mb-2">
                What Awaits You at HNM Vol. 3
              </span>
              <h2 id="attractions-heading" className="text-2xl sm:text-3xl md:text-4xl font-anime font-bold text-white">
                MAJOR FESTIVAL ATTRACTIONS &amp; EXPERIENCES
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-md mt-3 md:mt-0">
              Immerse yourself in authentic Japanese arts, high-octane stage performances, and community gaming all day on January 8, 2027.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {festivalAttractions.map((attraction) => {
              const Icon = attraction.icon;
              return (
                <article
                  key={attraction.id}
                  className="bg-[#121217] border border-red-500/25 hover:border-red-500/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center text-red-400">
                        <Icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="text-[11px] font-mono font-bold bg-red-500/20 text-red-300 border border-red-500/30 px-2.5 py-1 rounded-full">
                        {attraction.badge}
                      </span>
                    </div>

                    <div className="text-[11px] font-serif font-bold text-red-400 mb-1">
                      {attraction.japaneseTitle}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5">
                      {attraction.title}
                    </h3>
                    <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-normal">
                      {attraction.description}
                    </p>
                  </div>

                  <Link
                    to={attraction.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-red-300 transition-colors pt-4 border-t border-red-500/20"
                  >
                    <span>{attraction.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OFFICIAL THEME, COUNTDOWN & ORGANIZATIONAL LOGOS                        */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="countdown-heading"
        className="py-16 md:py-20 bg-[#08080A] border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-widest block mb-2">
              Mark Your Calendar • January 8, 2027
            </span>
            <h2 id="countdown-heading" className="text-2xl sm:text-3xl font-anime font-bold text-white">
              FESTIVAL COUNTDOWN &amp; SOUNDBOARD
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Prepare for the celebrations with our countdown clock and interactive anime character soundboard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-10">
            <CountdownTimer />
            <AnimeSoundboard />
          </div>

          {/* Official Presenter Logos */}
          <div className="bg-[#121217] border border-red-500/30 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="bg-[#08080A] p-5 rounded-xl border border-red-500/20 flex items-center gap-4">
              <HnmEventLogo size="md" variant="badge" />
              <div>
                <h3 className="text-sm font-anime font-bold text-white">Hikari no Matsuri Vol. 3</h3>
                <p className="text-xs text-zinc-400 mb-1">Official Cultural Festival of CIT Chennai</p>
                <Link to="/about" className="text-xs text-red-400 hover:text-red-300 font-bold inline-flex items-center gap-1">
                  Read Festival Story &amp; Vision <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="bg-[#08080A] p-5 rounded-xl border border-red-500/20 flex items-center gap-4">
              <ClubLogo size="md" />
              <div>
                <h3 className="text-sm font-serif font-bold text-white">Isshoni Nihongo (一緒に日本語)</h3>
                <p className="text-xs text-zinc-400 mb-1">Japanese Language &amp; Culture Club of CIT</p>
                <Link to="/club" className="text-xs text-red-400 hover:text-red-300 font-bold inline-flex items-center gap-1">
                  Visit Club Portal &amp; Activities <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. ANIME CHARACTER ROSTER (Interactive Character Guide)                   */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="characters-heading"
        className="py-16 md:py-20 bg-[#0E0E12] border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-widest block mb-2">
              Festival Guides &amp; Voice Highlights
            </span>
            <h2 id="characters-heading" className="text-2xl sm:text-3xl font-anime font-bold text-white">
              MEET THE FESTIVAL CHARACTER GUIDES
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Select any character to hear their iconic Japanese quotes and festival advice.
            </p>
          </div>

          <AnimeCharacterDisplay mode="grid" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. SPECIAL FEATURED GUESTS & HEADLINERS                                   */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="guests-heading"
        className="py-16 md:py-20 bg-[#08080A] border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-widest block mb-1">
                Dignitaries &amp; Star Cosplayers
              </span>
              <h2 id="guests-heading" className="text-2xl sm:text-3xl font-anime font-bold text-white">
                FEATURED FESTIVAL GUESTS
              </h2>
            </div>
            <Link
              to="/guests"
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 border border-red-500/30 px-3.5 py-2 rounded-xl transition-colors"
            >
              View All Guests <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPECIAL_GUESTS.slice(0, 4).map((guest) => (
              <div
                key={guest.id}
                className="bg-[#121217] border border-red-500/25 hover:border-red-500/60 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 shadow-md"
              >
                <img
                  src={guest.imageUrl}
                  alt={`${guest.name} - ${guest.role} at Hikari no Matsuri Vol. 3`}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-full object-cover border-2 border-red-500/40 mb-4 shadow-lg"
                  loading="lazy"
                  width={96}
                  height={96}
                />
                <span className="text-xs font-serif font-bold text-red-400 mb-1">{guest.japaneseName}</span>
                <h3 className="text-base font-bold text-white mb-1">{guest.name}</h3>
                <p className="text-xs text-zinc-400 line-clamp-2 mb-3 font-normal">{guest.role}</p>
                <span className="mt-auto text-[10px] font-mono font-bold bg-red-500/20 text-red-300 px-2.5 py-1 rounded-full border border-red-500/30">
                  {guest.day}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FESTIVAL SCHEDULE & STAGE HIGHLIGHTS                                   */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="schedule-heading"
        className="py-16 md:py-20 bg-[#0E0E12] border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-widest block mb-1">
                Event Timetable • January 8, 2027
              </span>
              <h2 id="schedule-heading" className="text-2xl sm:text-3xl font-anime font-bold text-white">
                SCHEDULE &amp; STAGE HIGHLIGHTS
              </h2>
            </div>
            <Link
              to="/schedule"
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 border border-red-500/30 px-3.5 py-2 rounded-xl transition-colors"
            >
              Full Stage Schedule <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCHEDULE_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="bg-[#121217] border border-red-500/25 rounded-2xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-red-400 bg-red-500/15 border border-red-500/30 px-2.5 py-0.5 rounded-lg">
                      {item.time}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-mono font-bold">{item.stage}</span>
                  </div>
                  <span className="text-[11px] font-serif font-bold text-red-300 block mb-1">
                    {item.japaneseTitle}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. COSPLAY CHAMPIONSHIP PROMOTIONAL BANNER                                 */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="cosplay-heading"
        className="py-16 md:py-20 bg-[#08080A] border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-gradient-to-r from-[#161214] via-[#1C1216] to-[#121217] border border-red-500/35 rounded-3xl p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl">
            
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-1.5 text-red-400 text-xs font-mono font-bold uppercase tracking-wider mb-3 bg-red-500/15 border border-red-500/30 px-3 py-1 rounded-md">
                <Award className="w-4 h-4 text-red-400" aria-hidden="true" />
                <span>₹50,000 Total Cash Prize Pool</span>
              </div>

              <h2 id="cosplay-heading" className="text-2xl sm:text-3xl md:text-4xl font-anime font-black text-white mb-4">
                SOUTH INDIA COSPLAY CHAMPIONSHIP
              </h2>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                Step onto the grand HNM Main Stage! Compete in Solo Runway, Duo Skit, and Craftsmanship Armor divisions.
                Judged by celebrated cosplayers with trophies, cash rewards, and official certificates.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/cosplay"
                  className="btn-vermilion px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-2 uppercase tracking-wider"
                >
                  Cosplay Rules &amp; Entry <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <button
                  onClick={openCosplayModal}
                  className="btn-matsuri-gold px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Quick Registration Form
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. FESTIVAL CINEMA & VIDEO CLIPS                                          */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="videos-heading"
        className="py-16 md:py-20 bg-[#0E0E12] border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-widest block mb-1">
                Cinematic Reels &amp; Stage Performances
              </span>
              <h2 id="videos-heading" className="text-2xl sm:text-3xl font-anime font-bold text-white">
                FESTIVAL VIDEOS &amp; TRAILERS
              </h2>
            </div>
            <Link
              to="/videos"
              className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 border border-red-500/30 px-3.5 py-2 rounded-xl transition-colors"
            >
              All Video Clips <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FESTIVAL_VIDEOS.slice(0, 3).map((video) => (
              <div
                key={video.id}
                className="bg-[#121217] border border-red-500/25 rounded-2xl overflow-hidden shadow-lg group flex flex-col justify-between"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnailUrl}
                    alt={`${video.title} - Festival Video Thumbnail`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    width={400}
                    height={225}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <button
                      onClick={() => openVideoModal(video.id)}
                      className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110"
                      aria-label={`Play ${video.title}`}
                    >
                      <Play className="w-5 h-5 fill-white" aria-hidden="true" />
                    </button>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/80 text-[10px] font-mono px-2 py-0.5 rounded text-zinc-300">
                    {video.duration}
                  </span>
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-mono text-red-400 uppercase font-bold">{video.category}</span>
                  <h3 className="text-sm font-bold text-white mt-1 line-clamp-1">{video.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. HONORING THE LEGACY OF HNM VOL. 2 (hnmvol2.com)                         */}
      {/* ========================================================================= */}
      <section
        aria-labelledby="legacy-heading"
        className="py-16 md:py-20 bg-[#08080A] border-b border-red-500/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="bg-[#121217] border border-red-500/30 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-widest block mb-2">
                Honoring Our Heritage
              </span>
              <h2 id="legacy-heading" className="text-2xl sm:text-3xl font-anime font-bold text-white mb-3">
                HONORING THE LEGACY OF HIKARI NO MATSURI VOL. 2
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                In 2025, Hikari no Matsuri welcomed over 2,000 passionate anime fans, 150+ costumed cosplayers, and Japanese dignitaries to Chennai Institute of Technology. Vol. 3 builds upon that extraordinary foundation to deliver our largest celebration yet.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center my-6">
                <div className="bg-[#08080A] border border-red-500/20 p-3 rounded-xl">
                  <div className="text-lg font-mono font-bold text-red-400">2,000+</div>
                  <div className="text-[10px] text-zinc-400">Vol. 2 Attendees</div>
                </div>
                <div className="bg-[#08080A] border border-red-500/20 p-3 rounded-xl">
                  <div className="text-lg font-mono font-bold text-red-400">150+</div>
                  <div className="text-[10px] text-zinc-400">Cosplayers</div>
                </div>
                <div className="bg-[#08080A] border border-red-500/20 p-3 rounded-xl">
                  <div className="text-lg font-mono font-bold text-red-400">40+</div>
                  <div className="text-[10px] text-zinc-400">Stalls &amp; Games</div>
                </div>
                <div className="bg-[#08080A] border border-red-500/20 p-3 rounded-xl">
                  <div className="text-lg font-mono font-bold text-red-400">12 hrs</div>
                  <div className="text-[10px] text-zinc-400">Continuous Stage</div>
                </div>
              </div>
              <Link
                to="/recap"
                className="btn-matsuri-gold px-6 py-2.5 rounded-full text-xs font-bold inline-flex items-center gap-2 uppercase tracking-wider"
              >
                View Vol. 2 Photo Archive &amp; Memories <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. FESTIVAL PASSES & TICKET REGISTRATION                                  */}
      {/* ========================================================================= */}
      <section
        id="tickets"
        aria-labelledby="tickets-heading"
        className="py-16 md:py-24 bg-[#0E0E12]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-widest block mb-2">
              Official Single-Day Entry Passes • January 8, 2027
            </span>
            <h2 id="tickets-heading" className="text-2xl sm:text-3xl md:text-4xl font-anime font-bold text-white">
              FESTIVAL PASSES &amp; REGISTRATION
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Select your entry tier for January 8, 2027. All passes include digital QR verification and full access to cultural pavilions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TICKET_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`bg-[#121217] border rounded-2xl p-6 flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 shadow-lg ${
                  tier.popular
                    ? 'border-red-500 shadow-red-500/20'
                    : 'border-red-500/25 hover:border-red-500/50'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 right-6 bg-red-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="text-xs font-serif font-bold text-red-400 mb-1">{tier.japaneseName}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <div className="text-xs text-zinc-400 mb-4">{tier.period}</div>

                  <div className="flex items-baseline gap-1 my-4 pb-4 border-b border-red-500/20">
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-white">₹{tier.price}</span>
                    <span className="text-xs text-zinc-400">/ pass</span>
                  </div>

                  <ul className="space-y-2.5 mb-8 text-xs text-zinc-300">
                    {tier.features.slice(0, 5).map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-400 font-bold">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => openTicketModal(tier)}
                    className={`w-full py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      tier.popular ? 'btn-vermilion' : 'btn-matsuri-gold'
                    }`}
                  >
                    <Ticket className="w-4 h-4" aria-hidden="true" /> Book {tier.name}
                  </button>
                  <Link
                    to="/tickets"
                    className="w-full text-center text-[11px] text-zinc-400 hover:text-red-400 font-bold block py-1 transition-colors"
                  >
                    Compare Features &amp; Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/tickets"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-400 hover:text-red-300 bg-red-500/10 border border-red-500/30 px-6 py-3 rounded-full transition-colors"
            >
              <span>Compare All Pass Tiers &amp; Read Ticketing Terms</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
};
