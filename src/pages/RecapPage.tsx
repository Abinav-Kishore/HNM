import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, ExternalLink, Filter, Ticket, Camera, Users, Award, Utensils, Heart } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { GALLERY_PHOTOS, VOL2_HIGHLIGHTS } from '../data/hnmData';
import { AnimeCharacterDisplay } from '../components/AnimeCharacterDisplay';

export const RecapPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cosplay', 'Food', 'Stage', 'Workshops', 'Crowd'];

  const filteredPhotos = GALLERY_PHOTOS.filter((photo) => {
    return selectedCategory === 'All' || photo.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans matsuri-ambient-bg">
      
      {/* Hero Page Header */}
      <PageHeader
        title="VOL. 2 (2025) MEMORY & ARCHIVES"
        japaneseTitle="HNM 2025 回顧展"
        subtitle="Honoring the legacy of hnmvol2.com. Celebrating 2,800+ attendees, 120+ cosplayers, and unforgettable cultural memories."
        breadcrumbCurrent="Vol. 2 Recap"
        bgImageUrl="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 1. Vol 2 Legacy & Stat Counter Section */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="bg-[#121217] border border-red-500/20 rounded-3xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase mb-4">
                <Film className="w-3.5 h-3.5 text-red-400" /> Archive: hnmvol2.com
              </div>
              <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mb-4">
                HONORING THE LEGACY OF HNMVOL2.COM
              </h2>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 font-sans">
                In 2025, Isshoni Nihongo organized <span className="text-red-400 font-semibold">Hikari no Matsuri Vol. 2</span> at <code>hnmvol2.com</code>. It brought together over 2,800 Japanese culture fans, cosplayers, street chefs, and language learners. Vol. 3 on January 8, 2027 continues this proud tradition!
              </p>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {VOL2_HIGHLIGHTS.map((h, i) => (
                  <div key={i} className="bg-[#08080A] p-4 rounded-xl border border-red-500/20">
                    <div className="font-sans font-bold text-xl text-red-400 mb-1">{h.title}</div>
                    <div className="text-xs text-zinc-400 font-sans">{h.desc}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://hnmvol2.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-vermilion font-sans px-6 py-3 rounded-xl text-xs font-semibold inline-flex items-center gap-2 shadow-md"
              >
                Visit HNM 2025 Archive (hnmvol2.com) <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 2. Photo Gallery Header & Filter */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-red-500/20">
            <div>
              <span className="text-xs font-mono text-red-400 font-semibold uppercase tracking-wider block">
                Memory Gallery
              </span>
              <h2 className="text-2xl font-anime font-bold text-white mt-0.5">
                VOL. 2 PHOTO ARCHIVE
              </h2>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-xs text-zinc-300 font-medium flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3.5 h-3.5 text-red-400" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-sans font-medium transition-colors border whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-red-500/20 border-red-500 text-red-400 font-semibold'
                      : 'bg-[#121217] border-red-500/20 text-zinc-400 hover:border-red-500/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="bg-[#121217] border border-red-500/20 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm group"
              >
                <div className="aspect-4/3 relative overflow-hidden bg-[#08080A]">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-sans font-semibold rounded uppercase">
                    {photo.category}
                  </span>
                  <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#08080A]/90 text-red-400 text-[10px] font-mono rounded border border-red-500/20">
                    {photo.year}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-sans font-bold text-white mb-1">{photo.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Pass CTA Banner */}
      <section className="py-16 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-anime font-bold text-white mb-3">
            CREATE NEW MEMORIES AT HNM
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-sans">
            Join us for HNM Vol. 3 on January 8, 2027 at CIT Chennai Campus.
          </p>
          <Link
            to="/tickets"
            className="btn-vermilion font-sans font-semibold px-6 py-3 rounded-xl text-xs inline-flex items-center gap-2 shadow-md"
          >
            <Ticket className="w-4 h-4" /> Reserve Festival Pass
          </Link>
        </div>
      </section>

    </div>
  );
};
