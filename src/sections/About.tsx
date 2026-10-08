import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Terminal } from 'lucide-react';

export const About: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const coreStrengths = [
    { label: 'UI Implementation', desc: 'Pixel-accurate, responsive mobile layouts' },
    { label: 'REST API & Dio', desc: 'Robust networking, interceptors & error handlers' },
    { label: 'Local Persistence', desc: 'SharedPreferences & caching mechanisms' },
    { label: 'State Management', desc: 'Predictable unidirectional flows with BLoC & GetX' },
    { label: 'Architecture & Git', desc: 'Clean separation of concerns & branch workflows' }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// 01 . IDENTITY & ARCHITECTURE"
          title="I build mobile apps, not just interfaces."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative & Technical Depth */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed font-normal">
              {profile.aboutStory[0]}
            </p>

            <p className="text-base text-slate-300/90 leading-relaxed">
              {profile.aboutStory[1]}
            </p>

            {/* Expansion Callout Quote */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-950/30 to-slate-900/60 border-l-4 border-sky-400 border-y border-r border-white/[0.06] shadow-md">
              <p className="text-sm md:text-base text-sky-200 italic leading-relaxed">
                "{profile.aboutStory[2]}"
              </p>
            </div>

            {/* Engineering Pillars */}
            <div className="pt-2">
              <h3 className="text-xs font-code uppercase tracking-wider text-slate-400 mb-4 font-semibold">
                What I Own Across The Mobile Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coreStrengths.map((item) => (
                  <div
                    key={item.label}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-white/[0.05] hover:border-sky-500/30 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-slate-100 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>{item.label}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 pl-3.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Developer Identity Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-6 md:p-8 bg-slate-900/80 border border-white/[0.1] shadow-2xl backdrop-blur-xl">
              {/* Header of the Identity Card */}
              <div className="flex items-start justify-between pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-code text-xs text-emerald-400 font-semibold tracking-wide">
                      VERIFIED PROFILE
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-100 tracking-tight">
                    {profile.name}
                  </h3>
                  <p className="text-xs font-code text-sky-400 mt-0.5">
                    {profile.title}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-sky-400" />
                </div>
              </div>

              {/* Skill Progression Table */}
              <div className="py-5 space-y-3">
                <div className="flex items-center justify-between text-xs font-code text-slate-400 pb-1">
                  <span>CAPABILITY</span>
                  <span>STATUS &amp; LEVEL</span>
                </div>

                {profile.skillProgression.map((item) => {
                  const isVerified = item.status === 'verified';
                  return (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 px-3 rounded-xl bg-slate-950/60 border border-white/[0.04] text-xs font-code group hover:border-white/[0.1] transition-colors"
                    >
                      <span className="text-slate-200 font-medium">
                        {item.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-400 hidden sm:inline">
                          {item.note}
                        </span>
                        {isVerified ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 text-[11px]">
                            ✓
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-violet-500/10 text-violet-300 font-bold border border-violet-500/20 text-[11px]">
                            ↗
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Legend Explanations */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-code text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Practical commercial experience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-violet-300 font-bold">↗</span>
                  <span>Currently expanding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
