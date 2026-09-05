import React, { useState, useEffect } from 'react';
import { Flame, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  // Target date: January 8, 2027, 09:00 AM IST
  const targetDate = new Date('2027-01-08T09:00:00+05:30').getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = Math.max(0, targetDate - now);

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [prevSecs, setPrevSecs] = useState<number>(timeLeft.seconds);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTime = calculateTimeLeft();
      if (newTime.seconds !== prevSecs) {
        setIsFlipping(true);
        setTimeout(() => setIsFlipping(false), 300);
        setPrevSecs(newTime.seconds);
      }
      setTimeLeft(newTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [prevSecs]);

  const padZero = (num: number) => num.toString().padStart(2, '0');

  const units = [
    { label: 'DAYS', jpLabel: '日', value: padZero(timeLeft.days), color: 'text-red-400', border: 'border-red-500/30' },
    { label: 'HOURS', jpLabel: '時間', value: padZero(timeLeft.hours), color: 'text-red-500', border: 'border-red-500/30' },
    { label: 'MINUTES', jpLabel: '分', value: padZero(timeLeft.minutes), color: 'text-white', border: 'border-red-500/20' },
    { label: 'SECONDS', jpLabel: '秒', value: padZero(timeLeft.seconds), color: 'text-red-400', border: 'border-red-500/40', isFlipping },
  ];

  return (
    <div className="bg-[#121217] p-6 sm:p-8 rounded-2xl border border-red-500/30 shadow-2xl relative overflow-hidden group hover:border-red-500/50 transition-all duration-300 lantern-glow japanese-corner-frame">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-red-500/20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
            <Flame className="w-4 h-4 text-red-500 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="hanko-seal text-[9px]">開幕まで</span>
              <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">
                FESTIVAL OPENING COUNTDOWN
              </h3>
            </div>
            <p className="text-[10px] text-red-400 font-serif">
              Hikari no Matsuri Vol. 3 • Grand Opening Ceremony
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#08080A] border border-red-500/30 text-[10px] font-mono text-red-400">
          <Clock className="w-3 h-3 text-red-400" /> JAN 8, 2027
        </span>
      </div>

      {/* 4 Separate Units Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-center">
        {units.map((unit, idx) => (
          <div
            key={idx}
            className={`relative bg-[#08080A]/90 p-3.5 sm:p-4 rounded-xl border ${unit.border} shadow-lg flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:bg-[#1C1C24] group/unit`}
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-red-500/40 to-transparent group-hover/unit:via-red-500" />

            {/* Japanese Corner Label */}
            <span className="absolute top-1.5 right-2 text-[9px] font-serif text-red-500/60 font-bold select-none">
              {unit.jpLabel}
            </span>

            {/* Digit Display with Flip Animation */}
            <div className="my-1 py-1">
              <span
                className={`inline-block font-mono text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight ${unit.color} transition-transform duration-200 ${
                  unit.isFlipping ? 'animate-number-flip scale-105 text-white' : ''
                }`}
              >
                {unit.value}
              </span>
            </div>

            {/* Label Footer */}
            <div className="pt-2 border-t border-red-500/10 flex items-center justify-center gap-1 text-[10px] font-mono font-semibold tracking-wider text-zinc-300 uppercase">
              <span>{unit.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Details */}
      <div className="mt-5 pt-4 border-t border-red-500/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-300 font-sans">
        <div className="flex items-center gap-1.5 text-zinc-300">
          <Clock className="w-3.5 h-3.5 text-red-400" />
          <span>Gates open 09:00 AM IST @ Chennai Institute of Technology</span>
        </div>
        <span className="text-[10px] font-mono text-red-400">【会期】2027年1月8日（金）</span>
      </div>

    </div>
  );
};
