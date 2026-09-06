/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { AudioProvider } from './context/AudioContext';
import { HnmLayout } from './components/layout/HnmLayout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SeoHead } from './components/common/SeoHead';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SchedulePage } from './pages/SchedulePage';
import { GuestsPage } from './pages/GuestsPage';
import { CosplayPage } from './pages/CosplayPage';
import { VideosPage } from './pages/VideosPage';
import { RecapPage } from './pages/RecapPage';
import { TicketsPage } from './pages/TicketsPage';
import { FaqPage } from './pages/FaqPage';

import { ClubMain } from './components/ClubMain';

function ClubMainWrapper() {
  const navigate = useNavigate();
  return <ClubMain onNavigateToHnm2026={() => navigate('/')} />;
}

export default function App() {
  return (
    <BrowserRouter>
      <SeoHead />
      <AudioProvider>
        <ModalProvider>
          <ScrollToTop />
          <Routes>
            {/* Main HNM Festival Routes with Layout */}
            <Route element={<HnmLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/guests" element={<GuestsPage />} />
              <Route path="/cosplay" element={<CosplayPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/recap" element={<RecapPage />} />
              <Route path="/tickets" element={<TicketsPage />} />
              <Route path="/faq" element={<FaqPage />} />
            </Route>

            {/* Isshoni Nihongo Main Club Route */}
            <Route path="/club" element={<ClubMainWrapper />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ModalProvider>
      </AudioProvider>
    </BrowserRouter>
  );
}
