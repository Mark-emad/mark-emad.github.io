import React from 'react';
import type { SkillCategory } from '../data/portfolioData';
import { 
  Smartphone, 
  Layers, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles
} from 'lucide-react';

interface SkillCardProps {
  category: SkillCategory;
}

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div className="p-6 rounded-2xl bg-slate-900/70 border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/20 flex flex-col justify-between group">
      <div>
        {/* Card Header */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
            {getIcon(category.iconName)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-sky-300 transition-colors">
              {category.title}
            </h3>
            <p className="text-xs text-slate-400 leading-snug">
              {category.description}
            </p>
          </div>
        </div>

        {/* Skill Badges */}
        <div className="flex flex-wrap gap-2 mt-5">
          {category.skills.map((skill) => {
            const isLearning = skill.level === 'learning';
            const isCore = skill.badge === 'Core' || skill.badge === 'Primary';

            return (
              <div
                key={skill.name}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-code transition-all ${
                  isLearning
                    ? 'bg-violet-950/40 text-violet-300 border border-violet-500/30 hover:border-violet-400/50'
                    : isCore
                    ? 'bg-sky-950/50 text-sky-300 border border-sky-500/40 font-semibold shadow-sm shadow-sky-900/30'
                    : 'bg-slate-950/60 text-slate-200 border border-white/[0.06] hover:border-white/[0.15]'
                }`}
              >
                <span>{skill.name}</span>
                {skill.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                      isLearning
                        ? 'bg-violet-500/20 text-violet-200'
                        : isCore
                        ? 'bg-sky-500/20 text-sky-200'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {skill.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
