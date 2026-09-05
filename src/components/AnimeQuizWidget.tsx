import React, { useState } from 'react';
import { Trophy, HelpCircle, CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/hnmData';

export const AnimeQuizWidget: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const q = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOpt(index);
    setIsAnswered(true);
    if (index === q.correctIndex) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(c => c + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOpt(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  return (
    <div className="bg-[#121217] border border-red-500/30 rounded-2xl p-6 sm:p-8 shadow-xl text-white relative overflow-hidden">
      {/* Subtle Kanji accent */}
      <div className="absolute top-2 right-6 text-7xl font-bold text-red-500/5 pointer-events-none font-serif">
        問
      </div>

      <div className="flex items-center justify-between border-b border-red-500/20 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-500/10 text-red-400 rounded-lg border border-red-500/20">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-red-400">Festival Knowledge Test</span>
            <h3 className="text-lg font-bold font-anime text-white">Japanese & Anime Culture Trivia</h3>
          </div>
        </div>
        <span className="text-xs font-mono text-red-300 bg-red-500/10 px-3 py-1 rounded-md border border-red-500/30">
          Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}
        </span>
      </div>

      {!showResult ? (
        <div>
          <div className="mb-6">
            <h4 className="text-base font-semibold text-white mb-1">{q.question}</h4>
            {q.japaneseText && (
              <p className="text-xs text-red-300 font-serif">{q.japaneseText}</p>
            )}
          </div>

          <div className="space-y-3 mb-6">
            {q.options.map((option, idx) => {
              let btnClass = 'bg-[#08080A] border-red-500/20 text-zinc-200 hover:border-red-500/60 hover:bg-[#16161D]';
              if (isAnswered) {
                if (idx === q.correctIndex) {
                  btnClass = 'bg-emerald-950/60 border-emerald-500/80 text-emerald-300 font-semibold';
                } else if (idx === selectedOpt) {
                  btnClass = 'bg-rose-950/60 border-rose-500/80 text-rose-300';
                } else {
                  btnClass = 'bg-[#08080A]/50 border-white/5 text-zinc-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${btnClass}`}
                >
                  <span className="text-sm font-sans">{option}</span>
                  {isAnswered && idx === q.correctIndex && (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOpt && idx !== q.correctIndex && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="p-4 bg-[#08080A] border border-red-500/30 rounded-xl mb-6 text-xs text-zinc-300 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-red-400">Explanation: </span>
                {q.explanation}
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={handleNext}
              disabled={!isAnswered}
              className={`px-5 py-2.5 rounded-xl font-sans font-semibold text-xs transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isAnswered
                  ? 'btn-vermilion shadow-md hover:-translate-y-0.5'
                  : 'bg-white/5 text-zinc-500 cursor-not-allowed border border-white/5'
              }`}
            >
              {currentIdx === QUIZ_QUESTIONS.length - 1 ? 'View Festival Score' : 'Next Question'}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
            <Trophy className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold font-anime text-white mb-2">Quiz Completed!</h4>
          <p className="text-sm text-zinc-300 mb-4">
            You scored <span className="text-xl font-bold text-red-400 font-mono">{score}</span> out of {QUIZ_QUESTIONS.length}
          </p>

          <div className="inline-block p-4 bg-[#08080A] border border-red-500/30 rounded-xl mb-6 max-w-md">
            <span className="text-[10px] font-mono uppercase tracking-wider text-red-400 mb-1 block">Official Festival Badge Unlocked</span>
            <p className="text-sm font-bold text-red-200 font-sans">
              {score === QUIZ_QUESTIONS.length
                ? '御宅マスター (Otaku Master Level 100)'
                : score >= 2
                ? '絆ファン (Kizuna Festival Enthusiast)'
                : '日本語初心者 (Nihongo Explorer)'}
            </p>
          </div>

          <div>
            <button
              onClick={handleRestart}
              className="btn-vermilion px-5 py-2.5 rounded-xl text-xs font-sans font-semibold transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

