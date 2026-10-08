import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { 
  Layers, 
  Database, 
  Compass, 
  Cpu, 
  BookOpen
} from 'lucide-react';

export const Learning: React.FC = () => {
  const { currentlyLearning } = PORTFOLIO_DATA;

  const targetIcons = [
    <Layers className="w-4 h-4 text-sky-400" />,
    <Database className="w-4 h-4 text-emerald-400" />,
    <Compass className="w-4 h-4 text-violet-400" />,
    <Cpu className="w-4 h-4 text-cyan-400" />
  ];

  return (
    <section id="learning" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// 05 . GROWTH & HORIZON"
          title={currentlyLearning.heading}
          subtitle={currentlyLearning.subtitle}
        />

        {/* Two Large Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {currentlyLearning.primaryFocus.map((card) => (
            <div
              key={card.name}
              className="p-8 rounded-3xl bg-slate-900/70 border border-white/[0.08] hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden group shadow-xl shadow-black/20"
            >
              {/* Subtle Violet Top Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-sky-400 opacity-80" />

              <div className="flex items-center justify-between pb-4">
                <span className="font-code text-xs px-3 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-semibold tracking-wide">
                  {card.status}
                </span>
                <span className="font-code text-xs text-slate-400">
                  Native Android Stack
                </span>
              </div>

              <div className="space-y-2 mt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-violet-300 transition-colors">
                  {card.name}
                </h3>
                <p className="text-sm font-semibold text-sky-400">
                  {card.title}
                </p>
                <p className="text-xs text-slate-400 font-mono italic">
                  "{card.tagline}"
                </p>
              </div>

              <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                {card.description}
              </p>

              {/* Topics being explored */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] space-y-3">
                <span className="text-xs font-code uppercase tracking-wider text-slate-400 font-semibold block">
                  Active Study Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {card.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 text-xs font-code text-slate-300 border border-white/[0.05]"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Targets Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-white/[0.06] text-left">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-sky-400" />
            <h4 className="text-xs font-code uppercase tracking-wider text-slate-300 font-semibold">
              Android Architectural Horizons
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentlyLearning.architectureTargets.map((target, idx) => (
              <div
                key={target.name}
                className="p-4 rounded-xl bg-slate-950/60 border border-white/[0.04] space-y-1 hover:border-sky-500/20 transition-colors"
              >
                <div className="flex items-center gap-2 text-slate-200 font-semibold text-sm font-code">
                  {targetIcons[idx % targetIcons.length]}
                  <span>{target.name}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {target.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
