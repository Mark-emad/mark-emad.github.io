import React from 'react';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {tag && (
        <div className={`flex items-center gap-2 mb-3.5 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-code text-xs uppercase tracking-widest text-sky-400 font-semibold">
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
