import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldAlert, User, Camera, CheckCircle2, Ticket, ArrowRight } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { useModal } from '../context/ModalContext';
import { AnimeCharacterDisplay } from '../components/AnimeCharacterDisplay';

export const CosplayPage: React.FC = () => {
  const { openCosplayModal } = useModal();

  const categories = [
    {
      title: 'Grand Masquerade Championship',
      prize: '₹20,000 + Champion Trophy',
      desc: 'Overall top cosplayer across armor craftsmanship, costume detail, and stage presence.',
      color: 'text-[#8B5CF6]',
    },
    {
      title: 'Solo Runway Walk',
      prize: '₹15,000 Cash Pool',
      desc: 'Single character presentation walk, poses, and craftsmanship Q&A with judges.',
      color: 'text-[#60A5FA]',
    },
    {
      title: 'Duo Skit Showcase',
      prize: '₹15,000 Cash Pool',
      desc: '2-person theatrical skit, synchronized dialogue performance, and dynamic action.',
      color: 'text-emerald-400',
    },
  ];

  return (
    <div className="min-h-screen bg-[#08080A] text-zinc-100 font-sans matsuri-ambient-bg">
      
      {/* Hero Page Header */}
      <PageHeader
        title="COSPLAY MASQUERADE & CHAMPIONSHIP"
        japaneseTitle="コスプレ 選手権 2027"
        subtitle="Showcase your costume armor, prop mastery, and character performance on the HNM Main Stage for the ₹50,000 cash prize pool on January 8, 2027."
        breadcrumbCurrent="Cosplay Competition"
        bgImageUrl="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 1. Prize Pool & Categories */}
      <section className="py-20 bg-[#08080A] border-b border-red-500/20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 inline-block">
              ₹50,000 Championship Pool
            </span>
            <h2 className="text-3xl md:text-4xl font-anime font-bold text-white mt-1">
              COMPETITION CATEGORIES & AWARDS
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-2 font-sans">
              Judged by international guest cosplayers during the Grand Championship on January 8, 2027.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-[#121217] border border-red-500/20 rounded-2xl p-6 flex flex-col justify-between hover:border-red-500/50 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-[#08080A] border border-red-500/20 rounded-xl">
                      <Award className={`w-6 h-6 ${cat.color}`} />
                    </div>
                    <span className="text-xs font-mono font-bold text-zinc-300 bg-white/5 px-3 py-1 rounded border border-white/10">
                      {cat.prize}
                    </span>
                  </div>
                  <h3 className="text-xl font-sans font-bold text-white mb-2">{cat.title}</h3>
                  <p className="text-xs text-zinc-300 leading-relaxed font-sans">{cat.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-red-500/20">
                  <button
                    onClick={openCosplayModal}
                    className="w-full py-2.5 btn-vermilion rounded-xl text-xs font-semibold"
                  >
                    Register for {cat.title.split(' ')[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Judging Matrix & Facilities */}
      <section className="py-20 bg-[#0E0E12] border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] font-mono font-semibold text-red-400 uppercase tracking-wider block">
                Official Rules & Criteria
              </span>
              <h2 className="text-3xl font-anime font-bold text-white">
                JUDGING CRITERIA BREAKDOWN
              </h2>
              <p className="text-zinc-300 text-sm leading-relaxed font-sans">
                Our judging panel evaluates participants based on transparent craftsmanship scoring and stage performance metrics.
              </p>

              <div className="space-y-4">
                <div className="bg-[#121217] p-4 rounded-xl border border-red-500/20 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white">Craftsmanship & Prop Detail</h4>
                    <p className="text-xs text-zinc-400">Armor tailoring, stitching, painting quality</p>
                  </div>
                  <span className="text-red-400 font-mono font-bold text-base">40%</span>
                </div>

                <div className="bg-[#121217] p-4 rounded-xl border border-red-500/20 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white">Stage Performance & Skit</h4>
                    <p className="text-xs text-zinc-400">Pose fluidity, dialogue delivery, choreography</p>
                  </div>
                  <span className="text-red-300 font-mono font-bold text-base">30%</span>
                </div>

                <div className="bg-[#121217] p-4 rounded-xl border border-red-500/20 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white">Character Accuracy</h4>
                    <p className="text-xs text-zinc-400">Resemblance to source artwork / anime design</p>
                  </div>
                  <span className="text-emerald-400 font-mono font-bold text-base">20%</span>
                </div>

                <div className="bg-[#121217] p-4 rounded-xl border border-red-500/20 flex justify-between items-center">
                  <div>
                    <h4 className="text-sm font-bold text-white">Audience Impact</h4>
                    <p className="text-xs text-zinc-400">Crowd energy and stage charisma</p>
                  </div>
                  <span className="text-amber-400 font-mono font-bold text-base">10%</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#121217] border border-red-500/20 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-500/20 text-red-400 rounded-xl">
                    <ShieldAlert className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Cosplayer Amenities & Facilities</h3>
                    <p className="text-xs text-zinc-400">Dedicated support provided on festival grounds</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs text-zinc-300 font-sans">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Changing Rooms:</strong> Private, air-conditioned male and female changing booths with full-length mirrors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Prop Emergency Station:</strong> Free hot glue, thermal craft foam repair, sandpaper, and emergency tape at Cosplay Desk.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Luggage Counter:</strong> Secure cloakroom storage for prop transport boxes and costume bags.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Prop Safety Rules:</strong> Lightweight wood/foam props permitted. No sharp metal blades, glass, or realistic firearms.</span>
                  </li>
                </ul>

                <button
                  onClick={openCosplayModal}
                  className="w-full py-3 btn-vermilion rounded-xl text-xs font-semibold font-sans shadow-md"
                >
                  Open Cosplay Registration Form
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Pass CTA Banner */}
      <section className="py-16 bg-[#08080A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-anime font-bold text-white mb-3">
            NEED A PASS FOR COSPLAY ENTRY?
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mb-6 max-w-lg mx-auto font-sans">
            Cosplay competitors receive access to changing booths and priority queueing with any valid Festival Pass for January 8, 2027.
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
