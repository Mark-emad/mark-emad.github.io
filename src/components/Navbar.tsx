import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Button } from './Button';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  FileDown, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ArrowUpRight,
  Smartphone,
  Mail
} from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Learning', href: '#learning' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-slate-950/80 dark:bg-slate-950/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Name */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg p-1"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-400 p-[1.5px] shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-sky-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight text-slate-100 group-hover:text-sky-300 transition-colors uppercase font-code">
                  Mark Emad
                </span>
                <span className="text-[11px] text-slate-400 -mt-0.5 tracking-wide">
                  Mobile Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 dark:bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-sky-400 rounded-full hover:bg-white/[0.04] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions: Theme Toggle + Resume Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setDarkMode((prev) => !prev)}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-xl bg-slate-900/70 border border-white/[0.08] flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/30 transition-all cursor-pointer"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <Button
                variant="primary"
                size="sm"
                href={PORTFOLIO_DATA.profile.socialLinks.cv}
                target="_blank"
                download="Mark_Emad_CV.pdf"
                icon={<FileDown className="w-3.5 h-3.5" />}
                className="font-code text-xs uppercase tracking-wider"
              >
                Resume
              </Button>
            </div>

            {/* Mobile Actions: Theme + Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setDarkMode((prev) => !prev)}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-xl bg-slate-900/80 border border-white/[0.1] flex items-center justify-center text-slate-300"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Open menu"
                className="w-9 h-9 rounded-xl bg-slate-900/80 border border-white/[0.1] flex items-center justify-center text-slate-200 hover:text-sky-400 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation (Mobile-App Style Sheet) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
          <div 
            className="w-full bg-slate-950 border-t border-slate-800 rounded-t-3xl p-6 shadow-2xl space-y-6 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sheet Handle */}
            <div className="w-12 h-1.5 bg-slate-700/80 rounded-full mx-auto" />

            <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
              <div>
                <p className="font-bold text-slate-100">{PORTFOLIO_DATA.profile.name}</p>
                <p className="text-xs text-slate-400">{PORTFOLIO_DATA.profile.title}</p>
              </div>
              <span className="text-[11px] font-code px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                Flutter &amp; Dart
              </span>
            </div>

            {/* Nav list */}
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/[0.05] text-sm font-medium text-slate-200 hover:border-sky-500/40 hover:text-sky-300 transition-all"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="space-y-3 pt-2">
              <Button
                variant="primary"
                size="md"
                href={PORTFOLIO_DATA.profile.socialLinks.cv}
                target="_blank"
                download="Mark_Emad_CV.pdf"
                icon={<FileDown className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Download CV
              </Button>

              <div className="flex items-center justify-center gap-4 pt-2 text-slate-400 text-xs">
                <a 
                  href={PORTFOLIO_DATA.profile.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-400 transition-colors p-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <span className="text-slate-700">•</span>
                <a 
                  href={PORTFOLIO_DATA.profile.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-sky-400 transition-colors p-2"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-slate-700">•</span>
                <a 
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`} 
                  className="flex items-center gap-1.5 hover:text-sky-400 transition-colors p-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
