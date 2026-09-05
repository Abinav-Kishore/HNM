import React, { useState } from 'react';
import { X, Check, Utensils, Palette, Store } from 'lucide-react';

interface VendorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VendorModal({ isOpen, onClose }: VendorModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [vendorType, setVendorType] = useState<'Yatai Food' | 'Artist Alley' | 'Merchandise' | 'Sponsor'>('Artist Alley');
  const [brandName, setBrandName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

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
                <Store className="w-4 h-4 text-red-500" /> HNM 2027 Vendor & Artist Application
              </div>
              <h2 className="text-2xl font-anime text-white font-bold">APPLY FOR STALL SPACE</h2>
              <p className="text-sm text-zinc-400 mt-1 font-sans">
                Showcase your food, artwork, merch, or brand to 5,000+ Japanese culture fans on January 8, 2027!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              <div>
                <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-2">
                  Stall Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(['Yatai Food', 'Artist Alley', 'Merchandise', 'Sponsor'] as const).map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setVendorType(type)}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
                        vendorType === type
                          ? 'bg-red-500/20 border-red-500 text-red-300 font-semibold'
                          : 'bg-[#08080A] border-red-500/20 text-zinc-400 hover:border-red-500/40'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Brand / Stall Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sakura Ramen Studio"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    className="w-full bg-[#08080A] border border-red-500/20 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Contact Person</label>
                  <input
                    type="text"
                    required
                    placeholder="Contact name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full bg-[#08080A] border border-red-500/20 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="contact@brand.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#08080A] border border-red-500/20 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                />
              </div>

              <div>
                <label className="block text-xs text-zinc-400 mb-1">What will you sell / offer?</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your menu, artwork, crafts, or exhibits..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#08080A] border border-red-500/20 rounded-xl px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-vermilion text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 font-sans cursor-pointer"
              >
                <Store className="w-4 h-4" /> Submit Stall Application
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 font-sans">
            <div className="w-12 h-12 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-anime font-bold text-white">Application Received!</h3>
            <p className="text-sm text-zinc-300">
              Thank you <strong className="text-red-400">{brandName}</strong>! Our HNM Vendor Committee will review your application for <span className="text-red-300 font-semibold">{vendorType}</span> and email you at {email} within 2 business days.
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-4 btn-vermilion text-white px-6 py-2 rounded-xl text-xs font-semibold"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
