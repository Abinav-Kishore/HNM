import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AudioControlBar } from '../audio/AudioControlBar';
import { MobileBottomNav } from './MobileBottomNav';

export const HnmLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#08080A] text-[#FFFFFF] selection:bg-red-600 selection:text-white font-sans matsuri-ambient-bg">
      <Navbar />
      
      <main className="flex-1 pb-20 md:pb-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <AudioControlBar />
      <MobileBottomNav />
    </div>
  );
};
