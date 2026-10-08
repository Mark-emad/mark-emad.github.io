import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-20 md:py-28 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// 04 . CHRONOLOGY"
          title="Practical experience."
          subtitle="A track record of shipping commercial mobile applications, freelance systems, and completing intensive software engineering training."
        />

        {/* Modern Vertical Journey Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {experience.map((item) => (
            <div key={item.id} className="relative group text-left">
              {/* Numbered Marker Circle */}
              <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 rounded-full bg-slate-900 border-2 border-sky-500/60 flex items-center justify-center font-code text-xs font-bold text-sky-400 shadow-md shadow-black/50 group-hover:scale-110 group-hover:border-sky-400 transition-all">
                {item.step}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-sky-500/30 transition-all group-hover:shadow-xl group-hover:shadow-sky-500/5">
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 border-b border-white/[0.06]">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
                        {item.role}
                      </h3>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-sky-400 transition-colors"
                          aria-label={`Visit ${item.company}`}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-sky-400 mt-0.5">
                      {item.company} <span className="text-slate-500 font-normal">• {item.type}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-code text-slate-400 bg-slate-950/70 px-3 py-1 rounded-full border border-white/[0.05]">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2">
                  <span className="text-xs font-code uppercase tracking-wider text-slate-400 font-semibold block">
                    Key Highlights
                  </span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-950/40 p-2.5 rounded-xl border border-white/[0.03]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills if available */}
                {item.technologies && (
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-code px-2.5 py-0.5 rounded-lg bg-slate-950 text-slate-300 border border-white/[0.05]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
