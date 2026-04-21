import React from 'react';

export const SectionHeading = ({ children, subtitle, light = false, center = false }: { children: React.ReactNode, subtitle?: string, light?: boolean, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    {subtitle && (
      <span className={`text-[11px] font-black uppercase tracking-[0.3em] ${light ? 'text-white/40' : 'text-teal-600'} block mb-4`}>
        {subtitle}
      </span>
    )}
    <h2 className={`font-sans text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
      {children}
    </h2>
  </div>
);

export const PageHero = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <section className="pt-40 pb-20 bg-slate-900 text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">{title}</h1>
      <p className="text-xl text-teal-400 max-w-2xl font-medium">{subtitle}</p>
    </div>
    <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
  </section>
);
