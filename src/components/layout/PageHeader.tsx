import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Ticket } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

interface PageHeaderProps {
  title: string;
  japaneseTitle?: string;
  subtitle: string;
  breadcrumbCurrent: string;
  bgImageUrl?: string;
  showTicketCta?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  japaneseTitle = '光の祭り 2027',
  subtitle,
  breadcrumbCurrent,
  bgImageUrl = 'https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=1600&q=80',
  showTicketCta = true,
}) => {
  const { openTicketModal } = useModal();

  return (
    <div className="relative w-full bg-[#08080A] border-b border-red-500/20 overflow-hidden py-14 md:py-18 seigaiha-pattern">
      {/* Background Image with Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageUrl}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/90 to-[#121217]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-[#08080A]/80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-zinc-400 font-sans mb-4">
          <Link to="/" className="hover:text-red-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-red-500/60" />
          <span className="text-red-400 font-medium">{breadcrumbCurrent}</span>
        </nav>

        {/* Title and Content Grid */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl relative">
            {/* Vertical Kanji Decorative Accent */}
            <div className="hidden lg:block absolute -left-10 top-0 japanese-vertical text-red-500/20 font-serif text-lg font-bold select-none pointer-events-none">
              {japaneseTitle}
            </div>

            {/* Japanese Accent Tag & Hanko Seal */}
            <div className="inline-flex items-center gap-2 text-red-400 font-serif text-xs md:text-sm uppercase tracking-widest mb-2">
              <span className="hanko-seal text-[10px] font-mono">公式催事</span>
              <span>{japaneseTitle}</span>
              <span className="text-red-500/40">•</span>
              <span className="text-red-400 font-sans font-bold">HNM 2027</span>
            </div>

            {/* Main Page Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-anime font-black text-white tracking-wide leading-tight drop-shadow-md">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-zinc-300 text-sm md:text-base mt-3 leading-relaxed font-sans">
              {subtitle}
            </p>
          </div>

          {/* Quick CTA */}
          {showTicketCta && (
            <div className="flex items-center gap-3 shrink-0">
              <Link
                to="/tickets"
                className="btn-vermilion font-sans font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-md"
              >
                <Ticket className="w-4 h-4 text-white" /> Reserve Pass
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
