import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Heart,
  Users,
  Compass,
  Award,
  Store,
  Utensils,
  Palette,
  CheckCircle2,
  Ticket,
  ArrowRight,
  ExternalLink,
  Music
} from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { HNM_EVENT_DETAILS } from '../data/hnmData';
import { AnimeQuizWidget } from '../components/AnimeQuizWidget';
import { AnimeCharacterDisplay } from '../components/AnimeCharacterDisplay';
import { useModal } from '../context/ModalContext';
import { HnmEventLogo } from '../components/common/HnmEventLogo';
import { ClubLogo } from '../components/common/ClubLogo';
import { VoiceIntro } from '../components/audio/VoiceIntro';

export const AboutPage: React.FC = () => {
  const { openVendorModal } = useModal();

  const culturalPillars = [
    {
      title: 'Chado Tea Ceremony',
      japanese: '茶道 体験',
      desc: 'Mindful matcha preparation guided by master sensei, preserving ancient hospitality traditions.',
      icon: BookOpen,
      color: 'text-emerald-400',
    },
    {
      title: 'Thunder Taiko Drums',
      japanese: '和太鼓 演奏',
      desc: 'Resonating rhythm and energy produced by traditional wooden taiko drums to open the festival.',
      icon: Music,
      color: 'text-red-400',
    },
    {
      title: 'Shodo Calligraphy',
      japanese: '書道 芸術',
      desc: 'Brush stroke ink technique workshops where attendees practice writing kanji characters.',
      icon: Compass,
      color: 'text-[#60A5FA]',
    },
    {
      title: 'Yatai Street Food Alley',
      japanese: '屋台 グルメ',
      desc: 'Sizzling takoyaki, taiyaki, ramen, and cold ramune soda freshly prepared live by street chefs.',
      icon: Utensils,
      color: 'text-amber-400',
    },
    {
      title: 'Cosplay Masquerade',
      japanese: 'コスプレ 選手権',
      desc: 'State-of-the-art costume armor, prop craftsmanship, and skit performances on the main stage.',
      icon: Award,
      color: 'text-[#D946EF]',
    },
    {
      title: 'Live Anisong Concerts',
      japanese: 'アニソン ライブ',
      desc: 'Rocking live band covers of iconic theme songs from Demon Slayer, Jujutsu Kaisen, and Naruto.',
      icon: Heart,
      color: 'text-[#EF4444]',
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans matsuri-ambient-bg">
      
      {/* Hero Page Header */}
      <PageHeader
        title="ABOUT HIKARI NO MATSURI"
        japaneseTitle="光の祭り について"
        subtitle="Discover the story, cultural heritage, interactive workshops, and vision behind Isshoni Nihongo's annual flagship festival."
        breadcrumbCurrent="About HNM"
        bgImageUrl="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 1. Main Story & Overview */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider block">
                The Origin & Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-anime font-bold text-white leading-tight">
                BRIDGING CULTURES THROUGH ART, LANGUAGE & COMMUNITY
              </h2>
              
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-sans">
                <span className="text-white font-semibold">Hikari no Matsuri (光の祭り - Festival of Lights)</span> was founded by the <span className="text-red-400 font-semibold">Isshoni Nihongo Language & Culture Club</span> to create an inclusive, joyful space where fans of Japanese language, traditional arts, manga, and anime could unite.
              </p>

              <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                Following our monumental success at <span className="text-red-400 font-mono font-semibold">hnmvol2.com (2025)</span> which hosted 2,800+ attendees, <span className="text-white font-semibold">HNM Vol. 3 (2027)</span> unites our community for an extraordinary single-day festival on January 8, 2027 centered around the theme of <span className="text-red-400 font-serif font-bold">Kizuna (絆 - Unbreakable Bonds)</span>.
              </p>

              {/* Tanjiro Expressive Voice Story Guide */}
              <div className="pt-2">
                <VoiceIntro
                  characterId="tanjiro"
                  title="Tanjiro Kamado's Story Guide"
                  subtitle="Warm, sincere & emotional voice message on the spirit of Kizuna"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-[#121217] p-4 rounded-xl border border-red-500/20">
                  <div className="text-lg font-bold text-red-400 font-sans">Isshoni Nihongo</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Organized by non-profit language enthusiasts</div>
                </div>
                <div className="bg-[#121217] p-4 rounded-xl border border-red-500/20">
                  <div className="text-lg font-bold text-red-400 font-sans">Inclusive Community</div>
                  <div className="text-xs text-zinc-400 mt-0.5">Open to beginners, cosplayers, & families</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Official HNM Event Logo Showcase */}
              <div className="bg-[#121217] border-2 border-red-500/40 rounded-3xl p-6 relative overflow-hidden shadow-2xl japanese-corner-frame">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-500/20">
                  <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/30">
                    OFFICIAL EVENT BRAND MARK
                  </span>
                  <span className="text-xs font-japanese text-red-400 font-bold">光の祭り</span>
                </div>

                <div className="bg-[#08080A] rounded-2xl p-6 my-4 flex items-center justify-center border border-red-500/20 shadow-inner">
                  <HnmEventLogo size="2xl" variant="badge" />
                </div>

                <div className="space-y-2 text-left">
                  <h3 className="text-lg font-anime font-bold text-white flex items-center gap-2">
                    Hikari no Matsuri Event Logo
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    The official festival mark features bold <strong>katana stencil typography</strong> with a vivid crimson red central <strong>'N'</strong>, representing the burning energy of anime, passion, and light.
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-red-500/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <ClubLogo size="sm" />
                    <span className="text-[11px] text-zinc-400 font-medium">Hosted by Isshoni Nihongo</span>
                  </div>
                  <Link to="/club" className="text-red-400 font-semibold hover:underline text-xs flex items-center gap-1">
                    Club Hub →
                  </Link>
                </div>
              </div>

              {/* Mission statement */}
              <div className="bg-[#121217] border border-red-500/20 rounded-2xl p-6 relative overflow-hidden shadow-sm">
                <h3 className="text-sm font-sans font-bold text-white mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-400" /> Isshoni Nihongo Mission Statement
                </h3>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans italic">
                  "To foster genuine cross-cultural understanding, provide authentic language immersion experiences, and empower creators in our local community through Hikari no Matsuri."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The 6 Cultural Pillars */}
      <section className="py-20 bg-[#0E0E12] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
              Core Festival Attractions
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
              THE 6 PILLARS OF HNM
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-2 font-sans">
              Experience the harmony of ancient Japanese tradition and modern pop culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121217] border border-red-500/20 rounded-2xl p-6 hover:border-red-500/50 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#08080A] border border-red-500/20 rounded-xl">
                      <Icon className={`w-6 h-6 ${pillar.color}`} />
                    </div>
                    <span className="text-xs font-serif text-zinc-400">{pillar.japanese}</span>
                  </div>
                  <h3 className="text-lg font-sans font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Interactive Anime & Japanese Trivia Quiz */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
              Test Your Knowledge
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
              FESTIVAL & ANIME QUIZ WIDGET
            </h2>
            <p className="text-zinc-400 text-sm mt-2 font-sans">
              Play our quick 4-question interactive quiz to test your Japanese vocabulary and festival trivia!
            </p>
          </div>

          <AnimeQuizWidget />
        </div>
      </section>

      {/* 4. Stall & Vendor Registration Banner */}
      <section className="py-20 bg-[#0E0E12] border-b border-red-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="bg-[#121217] border border-red-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono uppercase mb-4">
                  <Store className="w-3.5 h-3.5 text-red-400" /> Apply for Booths & Stalls
                </div>
                <h2 className="text-3xl font-anime font-bold text-white mb-3">
                  WANT TO EXHIBIT AT HNM?
                </h2>
                <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                  Applications are open for Artist Alley creators, Yatai food chefs, merchandise vendors, and corporate sponsors. Connect with 5,000+ enthusiastic festival attendees.
                </p>
              </div>

              <button
                onClick={openVendorModal}
                className="btn-vermilion font-sans font-semibold px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shrink-0 shadow-md"
              >
                Submit Stall Application →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pass Reservation Footer CTA */}
      <section className="py-16 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-anime font-bold text-white mb-3">
            READY TO JOIN THE CELEBRATION?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-sans">
            Secure your single-day or weekend passes today to enjoy priority fast-track entry and official merchandise.
          </p>
          <Link
            to="/tickets"
            className="btn-vermilion font-sans font-semibold px-6 py-3 rounded-xl text-xs inline-flex items-center gap-2 shadow-md"
          >
            <Ticket className="w-4 h-4" /> View Pass Tiers & Prices
          </Link>
        </div>
      </section>

    </div>
  );
};
