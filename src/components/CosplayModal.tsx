import React, { useState } from 'react';
import { X, Check, Award, User, Camera, ShieldAlert } from 'lucide-react';

interface CosplayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CosplayModal({ isOpen, onClose }: CosplayModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [character, setCharacter] = useState('');
  const [anime, setAnime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState<'Solo Walk' | 'Duo Skit' | 'Masquerade' | 'Group Showcase'>('Solo Walk');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#121217] border border-red-500/30 rounded-2xl max-w-lg w-full p-6 md:p-8 text-zinc-100 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-widest mb-1">
                <Award className="w-4 h-4 text-red-500" /> HNM 2027 Cosplay Registration
              </div>
              <h2 className="text-2xl font-anime text-white font-bold">REGISTER FOR COSPLAY ARENA</h2>
              <p className="text-sm text-zinc-400 mt-1 font-sans">
                Compete in the HNM Cosplay Masquerade & Stage Competition on January 8, 2027!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-2">
                  Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Solo Walk', 'Duo Skit', 'Masquerade', 'Group Showcase'] as const).map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
                        category === cat
                          ? 'bg-red-500/20 border-red-500 text-red-300 font-semibold'
                          : 'bg-[#08080A] border-red-500/20 text-zinc-400 hover:border-red-500/40'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Cosplayer / Stage Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Yuki_Cos"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#08080A] border border-red-500/20 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="yuki@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#08080A] border border-red-500/20 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Character Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tanjiro Kamado"
                    value={character}
                    onChange={(e) => setCharacter(e.target.value)}
                    className="w-full bg-[#08080A] border border-red-500/20 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Series / Anime / Game</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Demon Slayer"
                    value={anime}
                    onChange={(e) => setAnime(e.target.value)}
                    className="w-full bg-[#08080A] border border-red-500/20 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                  />
                </div>
              </div>

              <div className="bg-[#08080A] p-3 rounded-xl border border-red-500/20 text-xs text-zinc-400 space-y-1">
                <div className="flex items-center gap-1.5 text-red-400 font-semibold">
                  <ShieldAlert className="w-3.5 h-3.5" /> Cosplay Prop Guidelines:
                </div>
                <p>• All weapon props must be non-functional (foam, wood, 3D printed).</p>
                <p>• Cosplay Lounge access is included for registered participants.</p>
              </div>

              <button
                type="submit"
                className="w-full btn-vermilion text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 font-sans cursor-pointer"
              >
                <Award className="w-4 h-4" /> Submit Cosplay Entry
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 font-sans">
            <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-anime font-bold text-white">Entry Received, {name}!</h3>
            <p className="text-sm text-zinc-300">
              Your registration for <strong className="text-red-400">{character}</strong> ({anime}) in category <span className="text-red-300 font-semibold">{category}</span> is confirmed!
            </p>
            <p className="text-xs text-zinc-400">
              Stage timing confirmation will be sent to {email}.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 btn-vermilion text-white px-6 py-2 rounded-xl text-xs font-semibold"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
