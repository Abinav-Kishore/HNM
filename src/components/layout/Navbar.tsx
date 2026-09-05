import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Ticket,
  Menu,
  X,
  Calendar,
  Users,
  Film,
  Award,
  HelpCircle,
  History,
  Info,
  Tv
} from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { HnmEventLogo } from '../common/HnmEventLogo';
import { ClubLogo } from '../common/ClubLogo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openTicketModal } = useModal();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Guests', path: '/guests' },
    { label: 'Cosplay', path: '/cosplay' },
    { label: 'Videos', path: '/videos' },
    { label: 'Vol. 2 Recap', path: '/recap' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      {/* Main Navigation - Fixed Header overlaying background */}
      <header className="sticky top-0 z-50 bg-[#08080A]/90 backdrop-blur-md border-b border-red-500/20 shadow-2xl shadow-[#08080A]/80">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <HnmEventLogo size="md" variant="badge" />
            <div>
              <div className="font-anime text-base font-extrabold tracking-wide text-white flex items-center gap-2">
                HNM 2027 <span className="text-[10px] font-sans font-extrabold bg-red-500/10 text-red-400 border border-red-500/30 px-2 py-0.5 rounded uppercase tracking-wider">光の祭り</span>
              </div>
              <div className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-medium">
                Hikari no Matsuri • CIT Chennai
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-zinc-300 font-sans">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `transition-all duration-200 hover:text-red-400 py-1 border-b-2 ${
                    isActive
                      ? 'text-red-400 border-red-400 font-bold'
                      : 'border-transparent text-zinc-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/tickets"
              className="btn-vermilion font-sans font-bold px-5 py-2 text-xs flex items-center gap-2 shadow-lg"
            >
              <Ticket className="w-3.5 h-3.5" /> Reserve Pass
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white bg-white/5 border border-red-500/20 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-red-400" /> : <Menu className="w-5 h-5 text-red-400" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121217] border-b border-red-500/20 px-4 py-6 font-sans">
            <div className="grid grid-cols-2 gap-2 mb-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-lg text-xs font-semibold transition-colors border ${
                      isActive
                        ? 'bg-red-500/20 border-red-400 text-red-300'
                        : 'bg-[#08080A] border-red-500/20 text-zinc-300 hover:border-red-500/40'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-red-500/20 flex flex-col gap-2">
              <Link
                to="/tickets"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full btn-vermilion py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <Ticket className="w-4 h-4" /> Reserve Festival Pass
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
