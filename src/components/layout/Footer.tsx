import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ExternalLink, Ticket } from 'lucide-react';
import { HNM_EVENT_DETAILS } from '../../data/hnmData';
import { HnmEventLogo } from '../common/HnmEventLogo';
import { ClubLogo } from '../common/ClubLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08080A] border-t border-red-500/20 pt-16 pb-12 text-xs text-zinc-300 font-sans relative overflow-hidden seigaiha-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-red-500/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <HnmEventLogo size="md" variant="badge" />
              <div>
                <div className="font-anime text-base font-bold text-white tracking-wide">
                  HIKARI NO MATSURI <span className="text-red-500 font-sans">{HNM_EVENT_DETAILS.year}</span>
                </div>
                <div className="text-[11px] text-red-400 font-serif">
                  {HNM_EVENT_DETAILS.japaneseTitle} • {HNM_EVENT_DETAILS.edition}
                </div>
              </div>
            </div>

            <p className="text-zinc-300 text-xs leading-relaxed max-w-md">
              The premier annual Japanese anime, cosplay, music, and cultural festival presented by <span className="text-white font-semibold">Isshoni Nihongo</span>. Celebrating unbreakable community bonds across languages and art forms.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-red-400" />
                <span>{HNM_EVENT_DETAILS.dates}</span>
              </div>
              <span className="text-red-500/40">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Chennai Institute of Technology</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 font-sans flex items-center gap-1.5">
              <span className="hanko-seal text-[9px]">案内</span> Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="hover:text-red-400 transition-colors">Home Portal</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-400 transition-colors">About HNM Festival</Link>
              </li>
              <li>
                <Link to="/schedule" className="hover:text-red-400 transition-colors">Matsuri Stage Schedule</Link>
              </li>
              <li>
                <Link to="/guests" className="hover:text-red-400 transition-colors">Special Anime Guests</Link>
              </li>
              <li>
                <Link to="/cosplay" className="hover:text-red-400 transition-colors">Cosplay Masquerade</Link>
              </li>
            </ul>
          </div>

          {/* Festival Media & Archives */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 font-sans flex items-center gap-1.5">
              <span className="hanko-seal text-[9px]">券</span> Passes & Media
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/videos" className="hover:text-red-400 transition-colors">Promotional Trailers</Link>
              </li>
              <li>
                <Link to="/recap" className="hover:text-red-400 transition-colors">Vol. 2 (2025) Gallery</Link>
              </li>
              <li>
                <Link to="/tickets" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  <Ticket className="w-3.5 h-3.5 text-red-500" /> Reserve Passes
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-red-400 transition-colors">Festival FAQ</Link>
              </li>
              <li>
                <a
                  href="https://hnmvol2.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-400 transition-colors inline-flex items-center gap-1 text-zinc-400"
                >
                  hnmvol2.com <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Organizers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-red-400 mb-4 font-sans flex items-center gap-1.5">
              <span className="hanko-seal text-[9px]">主催</span> Host Organization
            </h4>
            
            <div className="bg-[#121217] p-3 rounded-2xl border border-red-500/30 mb-3">
              <ClubLogo size="md" showTitle={true} />
            </div>

            <p className="text-zinc-300 text-xs leading-relaxed mb-3">
              Organized by <Link to="/club" className="text-red-400 underline font-semibold hover:text-red-300">Isshoni Nihongo (一緒に日本語)</Link>.
            </p>

            <Link
              to="/club"
              className="inline-flex items-center gap-1.5 text-xs bg-red-500/10 hover:bg-red-500/20 text-white border border-red-500/30 px-3 py-2 rounded-lg transition-colors font-semibold"
            >
              Visit Main Club Portal →
            </Link>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <p>© 2027 Isshoni Nihongo (Hikari no Matsuri Vol. 3). All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/faq" className="hover:text-white transition-colors">Venue Guidelines</Link>
            <span>•</span>
            <Link to="/tickets" className="hover:text-white transition-colors">Ticketing Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
