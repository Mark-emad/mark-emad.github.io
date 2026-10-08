import React from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { ProjectMockupView } from './ProjectMockupView';
import { Button } from './Button';
import { GithubIcon } from './Icons';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2
} from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenModal: (project: ProjectItem) => void;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="rounded-3xl bg-slate-900/60 border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/5 overflow-hidden flex flex-col group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Visual Mockup Area (Editorial Large Format) */}
        <div className="lg:col-span-7 bg-gradient-to-b from-slate-950/60 to-slate-900/40 p-6 sm:p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/[0.06] relative">
          {/* Subtle highlight label */}
          {project.highlightBadge && (
            <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-slate-950/90 border border-white/[0.08] text-[11px] font-code text-sky-300 backdrop-blur-md">
              {project.highlightBadge}
            </div>
          )}

          {/* Device Mockup */}
          <div className="w-full flex items-center justify-center py-4">
            <ProjectMockupView project={project} />
          </div>
        </div>

        {/* Narrative & Details Area */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 text-left">
          <div className="space-y-4">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-code text-xs px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-medium">
                {project.label}
              </span>
              <span className="text-xs font-code text-slate-400">
                {project.date}
              </span>
            </div>

            {/* Title & Role */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-sky-300 transition-colors">
                {project.name}
              </h3>
              <p className="text-xs font-code text-slate-400 mt-1">
                Role: <span className="text-slate-200 font-semibold">{project.role}</span>
              </p>
            </div>

            {/* Overview */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Key Contributions Preview */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-code uppercase tracking-wider text-slate-400 font-semibold block">
                Key Deliverables
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                {project.contributions.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/[0.06] text-xs font-code text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group/link"
            >
              <span>View Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              {project.links.live && (
                <Button
                  variant="outline"
                  size="sm"
                  href={project.links.live}
                  target="_blank"
                  icon={<ExternalLink className="w-3 h-3" />}
                >
                  Visit
                </Button>
              )}

              {project.links.github && (
                <Button
                  variant="outline"
                  size="sm"
                  href={project.links.github}
                  target="_blank"
                  icon={<GithubIcon className="w-3.5 h-3.5" />}
                >
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
