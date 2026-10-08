import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Button } from '../components/Button';
import { HeroDeviceMockup } from '../components/HeroDeviceMockup';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { 
  ArrowRight, 
  FileDown, 
  Mail
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const techBadges = [
    { label: 'Flutter', status: 'Core' },
    { label: 'Dart', status: 'Core' },
    { label: 'BLoC', status: 'State' },
    { label: 'REST APIs', status: 'Dio' },
    { label: 'Android SDK', status: 'Native' },
    { label: 'Kotlin & Compose', status: 'Learning ↗' }
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Tech Grid & Radial Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-sky-500/10 via-cyan-500/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            {/* Status & Role Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 text-sky-400 text-xs font-code tracking-wide shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold uppercase tracking-wider">
                {profile.title}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300 font-normal">Flutter &amp; Dart</span>
            </div>

            {/* Display Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-100 leading-[1.08]">
                Building mobile experiences that{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">
                  actually work.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal pt-2">
                {profile.bioHero}
              </p>
            </div>

            {/* Micro Technical Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-white/[0.08] text-xs text-slate-300 font-code hover:border-sky-500/40 hover:text-sky-300 transition-colors"
                >
                  <span className="font-medium">{badge.label}</span>
                  <span className="text-[10px] text-slate-500 bg-slate-800/80 px-1.5 py-0.2 rounded">
                    {badge.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                variant="primary"
                size="lg"
                href="#work"
                icon={<ArrowRight className="w-4 h-4" />}
                className="font-semibold shadow-lg shadow-sky-500/20"
              >
                View My Work
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={profile.socialLinks.cv}
                target="_blank"
                download="Mark_Emad_CV.pdf"
                icon={<FileDown className="w-4 h-4 text-sky-400" />}
              >
                Download CV
              </Button>
            </div>

            {/* Social Links & Quick Proof */}
            <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-700">•</span>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4" />
                  <span>{profile.email}</span>
                </a>
              </div>

              <div className="text-xs font-code text-slate-400 flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-full border border-white/[0.05]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Open for Junior / Internship Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mobile UI Composition */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroDeviceMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
