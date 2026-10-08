import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { 
  Mail, 
  FileDown, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const { profile } = PORTFOLIO_DATA;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative border-t border-white/[0.06] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <SectionHeading
            tag="// 07 . GET IN TOUCH"
            title="Have an opportunity? Let's talk."
            subtitle="I'm currently open to internship and junior opportunities in mobile application development — specializing in Flutter & Dart with active native Android expansion."
            align="center"
          />

          {/* Contact Action Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-white/[0.1] shadow-2xl backdrop-blur-md space-y-8">
            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={`mailto:${profile.email}`}
                icon={<Mail className="w-5 h-5" />}
                className="shadow-xl shadow-sky-500/20"
              >
                Email Me Directly
              </Button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-200 text-sm font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <Button
                variant="secondary"
                size="lg"
                href={profile.socialLinks.cv}
                target="_blank"
                download="Mark_Emad_CV.pdf"
                icon={<FileDown className="w-5 h-5 text-sky-400" />}
              >
                Download CV (PDF)
              </Button>
            </div>

            {/* Social Grid */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {/* LinkedIn */}
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-950/70 border border-white/[0.06] hover:border-sky-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-code text-slate-400 block">Professional</span>
                    <span className="text-sm font-bold text-slate-200 group-hover:text-sky-300 transition-colors">
                      LinkedIn Profile
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub */}
              <a
                href={profile.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-950/70 border border-white/[0.06] hover:border-sky-500/40 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-800 border border-white/[0.08] flex items-center justify-center text-slate-200 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-code text-slate-400 block">Code &amp; Repos</span>
                    <span className="text-sm font-bold text-slate-200 group-hover:text-sky-300 transition-colors">
                      GitHub Profile
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Phone (Secondary) */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/[0.06] flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-white/[0.08] flex items-center justify-center text-slate-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-code text-slate-400 block">Phone (Secondary)</span>
                  <span className="text-sm font-code text-slate-300 font-medium">
                    {profile.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Availability Footer */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-code text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for immediate interviews &amp; relocation / remote roles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
