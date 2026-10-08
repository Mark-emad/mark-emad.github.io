import React, { useEffect } from 'react';
import type { ProjectItem } from '../data/portfolioData';
import { Button } from './Button';
import { GithubIcon } from './Icons';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Calendar,
  Briefcase,
  FileCode2
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl my-8 max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-900 border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Information */}
        <div className="space-y-3 pb-6 border-b border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-code text-xs px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 font-medium">
              {project.label}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-code">
              <Calendar className="w-3.5 h-3.5" />
              <span>{project.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-code">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{project.role}</span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100">
            {project.name}
          </h3>

          <p className="text-base text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Content Body */}
        <div className="py-6 space-y-8">
          {/* What I Built & Key Contributions */}
          <div className="space-y-4">
            <h4 className="text-sm font-code uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>What I Built &amp; Key Contributions</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.contributions.map((contribution, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-white/[0.04]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                  <span className="text-sm text-slate-200 leading-relaxed">
                    {contribution}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="space-y-4">
            <h4 className="text-sm font-code uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technical Implementation</span>
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/[0.06] space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-code text-slate-400">Architecture:</span>
                <span className="text-xs font-code px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                  Separation of UI and Business Logic
                </span>
                <span className="text-xs font-code px-2 py-0.5 rounded bg-slate-800 text-slate-200">
                  Repository Pattern
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Implemented modular data models, robust error handling pipelines with Dio interceptors, and local offline persistence via SharedPreferences to ensure seamless uptime and resilience across devices.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="space-y-3">
            <h4 className="text-sm font-code uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technologies Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-xl bg-slate-900 border border-white/[0.08] text-xs font-code text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots Section Guide */}
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-dashed border-slate-700/80 space-y-2">
            <div className="flex items-center gap-2 text-xs font-code text-slate-300 font-semibold">
              <FileCode2 className="w-4 h-4 text-sky-400" />
              <span>PROJECT SCREENSHOT GALLERY</span>
            </div>
            <p className="text-xs text-slate-400 font-code">
              {project.placeholderText}
            </p>
            <p className="text-[11px] text-slate-500">
              Note: To plug in real device screenshots, simply place image assets in the public folder and link them in <code className="text-sky-300 font-code">src/data/portfolioData.ts</code>.
            </p>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.links.live && (
              <Button
                variant="primary"
                size="md"
                href={project.links.live}
                target="_blank"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Visit Website
              </Button>
            )}

            {project.links.github && (
              <Button
                variant="secondary"
                size="md"
                href={project.links.github}
                target="_blank"
                icon={<GithubIcon className="w-4 h-4" />}
              >
                GitHub Repository
              </Button>
            )}
          </div>

          <Button variant="ghost" size="sm" onClick={onClose}>
            Close Window
          </Button>
        </div>
      </div>
    </div>
  );
};
