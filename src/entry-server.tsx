import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ModalProvider } from './context/ModalContext';
import { AudioProvider } from './context/AudioContext';
import { HnmLayout } from './components/layout/HnmLayout';
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

export function renderApp(url: string = '/') {
  return renderToString(
    <MemoryRouter initialEntries={[url]}>
      <AudioProvider>
        <ModalProvider>
          <Routes>
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
            <Route path="/club" element={<ClubMain onNavigateToHnm2026={() => {}} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ModalProvider>
      </AudioProvider>
    </MemoryRouter>
  );
}
