import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// 02 . TECHNICAL STACK"
          title="Tools I use to build mobile applications."
          subtitle="A battle-tested cross-platform stack centered on Flutter and Dart, paired with robust networking, predictable state management, and ongoing expansion into Native Android."
        />

        {/* 5 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}

          {/* Quick Technical Architecture summary card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-950/20 via-slate-900/60 to-slate-900/90 border border-sky-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="font-code text-xs uppercase tracking-wider text-sky-400 font-semibold">
                  Engineering Philosophy
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-100">
                Predictable Flow &amp; Resilient Data
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Prioritizing clean separation of business logic, testable BLoC state streams, resilient offline caching, and graceful error boundaries over fragile ad-hoc solutions.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-code text-slate-400">
              <span>Clean Code</span>
              <span className="text-sky-400">Production-Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
