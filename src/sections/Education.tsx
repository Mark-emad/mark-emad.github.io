import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-16 md:py-24 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="// 06 . ACADEMIC FOUNDATION"
          title="Education."
          subtitle="Formal computer science foundation covering algorithms, data structures, and software engineering principles."
        />

        <div className="max-w-3xl">
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-sky-500/30 transition-all text-left">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-sky-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                    {education.degree}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-slate-300 text-sm pl-10">
                  <Building2 className="w-3.5 h-3.5 text-slate-500" />
                  <span>{education.institution} — {education.faculty}</span>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-1.5">
                <div className="flex items-center gap-1.5 text-xs font-code text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-white/[0.05]">
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>{education.period}</span>
                </div>

                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-code font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>Grade: {education.grade}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
