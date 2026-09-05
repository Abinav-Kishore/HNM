import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Film, Play, Filter, Ticket, ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { FESTIVAL_VIDEOS } from '../data/hnmData';
import { useModal } from '../context/ModalContext';

export const VideosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { openVideoModal } = useModal();

  const categories = ['All', 'Aftermovie', 'Cosplay', 'Performance'];

  const filteredVideos = FESTIVAL_VIDEOS.filter((video) => {
    return selectedCategory === 'All' || video.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans matsuri-ambient-bg">
      
      {/* Hero Page Header */}
      <PageHeader
        title="FESTIVAL MEDIA & PROMOTIONAL VIDEOS"
        japaneseTitle="公式 動画 & アフタームービー"
        subtitle="Watch official trailers, aftermovies, cosplay stage highlights, and live concert clips from Hikari no Matsuri."
        breadcrumbCurrent="Promotional Videos"
        bgImageUrl="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 1. Video Gallery Container */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          {/* Controls Bar: Category Filter Pills */}
          <div className="flex items-center justify-between gap-4 mb-10 pb-6 border-b border-red-500/20">
            <div>
              <span className="text-xs font-mono text-red-400 font-semibold uppercase tracking-wider block">
                Video Archive
              </span>
              <h2 className="text-2xl font-anime font-bold text-white mt-0.5">
                HNM CINEMA COLLECTION
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

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => openVideoModal(video.id)}
                className="group relative bg-[#121217] border border-red-500/20 rounded-xl overflow-hidden cursor-pointer hover:border-red-500/60 transition-all duration-300 hover:-translate-y-0.5 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-[#08080A]">
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#08080A]/40 group-hover:bg-[#08080A]/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg font-bold group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>
                    <span className="absolute bottom-2.5 right-2.5 px-2.5 py-0.5 bg-[#08080A]/90 text-red-400 text-xs font-mono rounded border border-red-500/20">
                      {video.duration}
                    </span>
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-sans font-semibold rounded uppercase">
                      {video.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-sans font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-zinc-300 mt-2 line-clamp-3 leading-relaxed font-sans">{video.description}</p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="text-xs text-red-400 font-semibold flex items-center gap-1 group-hover:underline">
                    Watch Video in Cinema Player →
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Featured Highlight Card */}
      <section className="py-20 bg-[#0E0E12] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-[#121217] border border-red-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
                  HNM Vol. 2 Aftermovie
                </span>
                <h2 className="text-3xl font-anime font-bold text-white mb-3">
                  RELIVE THE MAGIC OF HNM 2025
                </h2>
                <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                  Immerse yourself in the electric atmosphere, lantern lights, taiko drums, and cosplay runway showdown from Vol. 2.
                </p>
              </div>

              <button
                onClick={() => openVideoModal('v1')}
                className="btn-vermilion font-sans font-semibold px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shrink-0 shadow-md"
              >
                <Play className="w-4 h-4 fill-white" /> Play Official Aftermovie
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Pass CTA Banner */}
      <section className="py-16 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-anime font-bold text-white mb-3">
            EXPERIENCE THE MAGIC LIVE
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-sans">
            Be part of HNM Vol. 3 on January 8, 2027. Passes available now.
          </p>
          <Link
            to="/tickets"
            className="btn-vermilion font-sans font-semibold px-6 py-3 rounded-xl text-xs inline-flex items-center gap-2 shadow-md"
          >
            <Ticket className="w-4 h-4" /> Reserve Passes
          </Link>
        </div>
      </section>

    </div>
  );
};
