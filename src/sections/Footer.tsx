import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-slate-950/80 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-slate-100 font-code tracking-wide uppercase text-sm">
                {profile.name}
              </span>
              <span className="text-slate-600">/</span>
              <span className="text-sky-400 font-medium">
                {profile.title}
              </span>
            </div>
            <p className="text-slate-400 text-[11px] font-code">
              Flutter • Android • Mobile Development
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-slate-400">
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors p-1"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-colors p-1"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-sky-400 transition-colors p-1"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xl bg-slate-900 border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-sky-500/30 transition-all cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-slate-400 text-[11px] font-code">
          © {new Date().getFullYear()} {profile.name}. All rights reserved. Crafted with React, TypeScript &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};
