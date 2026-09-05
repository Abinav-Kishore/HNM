import React, { useState } from 'react';
import { X, Play, Volume2, Film } from 'lucide-react';
import { VideoClip } from '../types';
import { FESTIVAL_VIDEOS } from '../data/hnmData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideoId?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, initialVideoId }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoClip>(() => {
    return FESTIVAL_VIDEOS.find(v => v.id === initialVideoId) || FESTIVAL_VIDEOS[0];
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#121217] border-2 border-red-500/60 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#08080A] border-b border-red-500/20">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/20 text-red-500 rounded-lg">
              <Film className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-red-400 text-xs font-mono font-semibold uppercase tracking-wider block">HNM Cinema Player</span>
              <h3 className="text-xl font-bold text-white font-anime tracking-wide">{selectedVideo.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${selectedVideo.embedYoutubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={selectedVideo.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Video Details & Selection Bar */}
        <div className="p-6 bg-[#121217] overflow-y-auto space-y-4 font-sans">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-red-500/20 pb-3">
            <div>
              <span className="text-xs px-2.5 py-1 bg-red-500/20 text-red-400 border border-red-500/40 rounded-full font-semibold uppercase">
                {selectedVideo.category}
              </span>
              <span className="ml-3 text-xs text-zinc-400">Duration: {selectedVideo.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-red-400">
              <Film className="w-4 h-4 text-red-500" />
              <span>Full HD 60fps Festival Highlights</span>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed font-sans">{selectedVideo.description}</p>

          {/* Playlist Thumbnails */}
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 font-sans">More Festival Videos & Highlights</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {FESTIVAL_VIDEOS.map((vid) => (
                <button
                  key={vid.id}
                  onClick={() => setSelectedVideo(vid)}
                  className={`group relative rounded-lg overflow-hidden border-2 text-left transition-all ${
                    selectedVideo.id === vid.id
                      ? 'border-red-500 ring-2 ring-red-500/50 scale-[1.02]'
                      : 'border-red-500/20 hover:border-red-500/40 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="aspect-video relative overflow-hidden bg-[#08080A]">
                    <img
                      src={vid.thumbnailUrl}
                      alt={vid.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-2 bg-[#08080A]">
                    <p className="text-xs font-semibold text-white line-clamp-1">{vid.title}</p>
                    <p className="text-[10px] text-zinc-400">{vid.duration}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
