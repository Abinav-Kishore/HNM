import React, { useState } from 'react';
import { X, Check, QrCode, Ticket, Download, ShieldCheck, User, Mail, Phone, Calendar, Loader2, AlertCircle, CreditCard, Lock } from 'lucide-react';
import { TicketTier } from '../types';
import { initiateRazorpayCheckout } from '../utils/razorpayClient';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: TicketTier | null;
  tiers: TicketTier[];
}

export function TicketModal({ isOpen, onClose, selectedTier, tiers }: TicketModalProps) {
  const [tier, setTier] = useState<TicketTier>(selectedTier || tiers[1] || tiers[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [passGenerated, setPassGenerated] = useState<boolean>(false);
  const [passId, setPassId] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<{
    paymentId: string;
    orderId: string;
  } | null>(null);

  if (!isOpen) return null;

  const totalAmount = tier.price * quantity;

  const handleRazorpayPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setPaymentError('Please fill in your name and a valid email address.');
      return;
    }

    setPaymentError(null);
    setIsProcessing(true);

    try {
      await initiateRazorpayCheckout({
        amountInRupees: totalAmount,
        ticketName: tier.name,
        passDetails: {
          tierId: tier.id,
          quantity,
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          eventDate: 'January 8, 2027',
        },
        onSuccess: (paymentData) => {
          setIsProcessing(false);
          setPaymentInfo({
            paymentId: paymentData.paymentId,
            orderId: paymentData.orderId,
          });
          const cleanSuffix = paymentData.paymentId.replace(/^pay_/, '').slice(-6).toUpperCase();
          const generatedId = `HNM27-${cleanSuffix || Math.floor(100000 + Math.random() * 900000)}`;
          setPassId(generatedId);
          setPassGenerated(true);
        },
        onDismiss: () => {
          setIsProcessing(false);
        },
        onError: (error) => {
          setIsProcessing(false);
          setPaymentError(error.message || 'Payment could not be completed. Please try again.');
        },
      });
    } catch (err: any) {
      setIsProcessing(false);
      setPaymentError(err.message || 'An error occurred while opening Razorpay checkout.');
    }
  };

  const handleReset = () => {
    setPassGenerated(false);
    setName('');
    setEmail('');
    setPhone('');
    setPaymentError(null);
    setPaymentInfo(null);
    setIsProcessing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#121217] border border-red-500/30 rounded-2xl max-w-lg w-full p-6 md:p-8 text-zinc-100 relative shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          disabled={isProcessing}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-zinc-800 transition-colors disabled:opacity-50 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!passGenerated ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs uppercase tracking-widest font-bold">
                  Hikari no Matsuri Festival Pass
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-950/60 border border-red-500/30 text-[10px] font-mono text-red-300">
                  <Lock className="w-3 h-3 text-red-400" /> Razorpay Secured
                </div>
              </div>
              <h2 className="text-2xl font-anime text-white font-bold">GET YOUR HNM FESTIVAL PASS</h2>
              <div className="flex items-center gap-2 text-sm text-zinc-400 mt-1 font-sans">
                <Calendar className="w-4 h-4 text-red-400 shrink-0" />
                <span>January 8, 2027 • Chennai Institute of Technology</span>
              </div>
            </div>

            {/* Error Message Alert */}
            {paymentError && (
              <div className="mb-5 p-3 rounded-xl bg-red-950/70 border border-red-500/50 text-red-200 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="font-semibold text-red-300">Payment Notice</div>
                  <div className="mt-0.5 text-zinc-300">{paymentError}</div>
                </div>
              </div>
            )}

            <form onSubmit={handleRazorpayPayment} className="space-y-5">
              {/* Select Tier */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 uppercase tracking-wider mb-2 font-sans">
                  Select Pass Type (Single-Day Event)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {tiers.map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      disabled={isProcessing}
                      onClick={() => setTier(t)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        tier.id === t.id
                          ? 'border-red-500 bg-red-500/20 text-white font-semibold shadow-inner'
                          : 'border-red-500/20 bg-[#08080A] text-zinc-400 hover:border-red-500/40'
                      }`}
                    >
                      <div className="font-sans font-bold text-sm text-zinc-200">{t.name.split(' ')[0]}</div>
                      <div className="text-red-400 font-mono text-sm mt-1">₹{t.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Date Notice */}
              <div className="bg-[#08080A] p-3 rounded-xl border border-red-500/20 text-xs text-zinc-300 flex items-center justify-between">
                <span className="font-sans">Event Date:</span>
                <span className="font-mono font-bold text-red-400">January 8, 2027 (09:00 AM – 08:30 PM)</span>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between bg-[#08080A] p-3 rounded-xl border border-red-500/20">
                <span className="text-sm font-medium text-zinc-300 font-sans">Number of Passes</span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-[#181820] text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold cursor-pointer disabled:opacity-50"
                  >
                    -
                  </button>
                  <span className="font-mono text-base font-bold text-red-400 w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    disabled={isProcessing}
                    onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    className="w-8 h-8 rounded-lg bg-[#181820] text-zinc-200 hover:bg-zinc-700 flex items-center justify-center font-bold cursor-pointer disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* User Info Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-sans">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      disabled={isProcessing}
                      placeholder="e.g. Kenji Sato"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#08080A] border border-red-500/20 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-sans">Email Address (for Digital Pass) *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      disabled={isProcessing}
                      placeholder="kenji@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#08080A] border border-red-500/20 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans disabled:opacity-60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-zinc-400 mb-1 font-sans">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      disabled={isProcessing}
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#08080A] border border-red-500/20 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-red-500 font-sans disabled:opacity-60"
                    />
                  </div>
                </div>
              </div>

              {/* Price Calculation & Submit */}
              <div className="pt-2 border-t border-red-500/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-zinc-400 font-sans">Total Amount ({quantity} pass):</span>
                  <span className="text-2xl font-mono font-bold text-red-400">₹{totalAmount}</span>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full btn-vermilion text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 font-sans cursor-pointer disabled:opacity-75"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Connecting to Razorpay...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-4 h-4" />
                      <span>Pay ₹{totalAmount} with Razorpay</span>
                    </>
                  )}
                </button>

                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-zinc-400 font-sans">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>256-bit SSL encrypted • UPI, Cards, NetBanking & Wallets</span>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Pass Result Card */
          <div className="text-center py-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
              <Check className="w-4 h-4" /> Payment Verified & Pass Issued!
            </div>

            {/* Visual Digital Ticket */}
            <div className="bg-[#08080A] border-2 border-red-500/50 rounded-2xl p-6 text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 bg-red-600 text-white font-bold text-[10px] px-3 py-1 rounded-bl-xl tracking-wider uppercase font-mono">
                {tier.name}
              </div>

              <div className="text-xs font-sans text-red-400 tracking-wider font-semibold">HIKARI NO MATSURI (HNM)</div>
              <h3 className="text-xl font-anime font-bold text-white mt-1">{name}</h3>

              <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-sans">
                <div>
                  <div className="text-zinc-400">Pass ID</div>
                  <div className="font-mono text-red-300 font-bold">{passId}</div>
                </div>
                <div>
                  <div className="text-zinc-400">Event Date</div>
                  <div className="font-semibold text-zinc-200">
                    Jan 8, 2027
                  </div>
                </div>
                <div>
                  <div className="text-zinc-400">Quantity</div>
                  <div className="font-semibold text-zinc-200">{quantity} Pass(es)</div>
                </div>
                <div>
                  <div className="text-zinc-400">Amount Paid</div>
                  <div className="font-mono text-emerald-400 font-bold">₹{totalAmount}</div>
                </div>
                {paymentInfo && (
                  <>
                    <div className="col-span-2 pt-2 border-t border-zinc-800">
                      <div className="text-zinc-400 text-[11px]">Razorpay Payment ID</div>
                      <div className="font-mono text-zinc-300 text-[11px] truncate">{paymentInfo.paymentId}</div>
                    </div>
                  </>
                )}
                <div>
                  <div className="text-zinc-400">Status</div>
                  <div className="text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Paid & Verified
                  </div>
                </div>
              </div>

              {/* QR Code Graphic */}
              <div className="mt-6 pt-4 border-t border-red-500/20 flex items-center justify-between font-sans">
                <div>
                  <div className="text-[11px] text-zinc-400">Show this QR code at</div>
                  <div className="text-xs font-medium text-zinc-300">CIT Campus Festival Gate</div>
                </div>
                <div className="w-16 h-16 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                  <QrCode className="w-full h-full text-black" />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => alert(`Pass ${passId} details and Razorpay receipt sent to ${email}`)}
                className="flex-1 btn-vermilion text-white py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" /> Save Pass
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#08080A] hover:bg-zinc-800 text-zinc-400 border border-red-500/20 py-2.5 px-4 rounded-xl text-xs transition-colors cursor-pointer"
              >
                Book Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
