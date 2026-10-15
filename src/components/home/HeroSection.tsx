import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pb-space-xl lg:pb-28 pt-12 md:pt-20">
      {/* Ambient Radial Lights */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] md:w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,_rgba(160,120,255,0.22)_0%,_rgba(76,215,246,0.12)_35%,_transparent_70%)] blur-[100px] -z-10" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(109,59,215,0.18)_0%,_transparent_75%)] blur-[90px] -z-10" />

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 relative">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Live System Node Tag */}
          <div className="inline-flex items-center gap-space-sm px-space-md py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-xl shadow-lg mb-space-lg border border-outline-variant/30">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
              Next-Gen Growth Engine
            </span>
            <span className="text-outline-variant font-label-sm text-label-sm">|</span>
            <span className="font-label-sm text-label-sm text-primary flex items-center gap-1 font-semibold">
              <span className="material-symbols-outlined text-[14px]">bolt</span> Quantum Velocity
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="font-display-hero text-display-hero tracking-tighter text-on-surface mb-space-sm uppercase drop-shadow-2xl">
            DIGITAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">
              MARKETING
            </span>
          </h1>

          {/* Tagline */}
          <p className="font-headline-lg text-headline-lg text-secondary tracking-tight max-w-3xl mb-space-md font-semibold">
            We turn your vision into digital growth
          </p>

          {/* Subtext */}
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mb-space-xl font-normal leading-relaxed">
            A forward-thinking digital growth powerhouse crafting high-converting ad campaigns, high-impact video creative, and data-driven marketing architecture.
          </p>

          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md w-full sm:w-auto z-20">
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-headline-sm text-headline-sm tracking-tight shadow-[0_0_35px_rgba(160,120,255,0.45)] hover:shadow-[0_0_50px_rgba(76,215,246,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-space-sm group"
            >
              <span>Explore our services</span>
              <span className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-container/70 backdrop-blur-2xl text-on-surface font-headline-sm text-headline-sm tracking-tight shadow-[0_0_20px_rgba(76,215,246,0.15)] hover:shadow-[0_0_30px_rgba(76,215,246,0.4)] hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center gap-space-sm group border border-outline-variant/30"
            >
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span>Let's work together</span>
              <span className="material-symbols-outlined text-[20px] text-secondary transition-transform duration-200 group-hover:rotate-45">
                north_east
              </span>
            </Link>
          </div>

          {/* Descriptive Telemetry Ribbon Badges */}
          <div className="mt-space-xl pt-space-lg w-full flex flex-wrap items-center justify-center gap-space-sm md:gap-space-md">
            <div className="px-space-md py-space-xs rounded-full bg-surface-container/60 backdrop-blur-xl shadow-md flex items-center gap-space-xs hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[18px]">ads_click</span>
              <span className="font-label-md text-label-md text-on-surface">Meta Ads AI</span>
            </div>
            <div className="px-space-md py-space-xs rounded-full bg-surface-container/60 backdrop-blur-xl shadow-md flex items-center gap-space-xs hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-[18px]">search_insights</span>
              <span className="font-label-md text-label-md text-on-surface">Algorithmic SEO</span>
            </div>
            <div className="px-space-md py-space-xs rounded-full bg-surface-container/60 backdrop-blur-xl shadow-md flex items-center gap-space-xs hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[18px]">smart_display</span>
              <span className="font-label-md text-label-md text-on-surface">Generative Video</span>
            </div>
            <div className="px-space-md py-space-xs rounded-full bg-surface-container/60 backdrop-blur-xl shadow-md flex items-center gap-space-xs hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-[18px]">query_stats</span>
              <span className="font-label-md text-label-md text-on-surface">Precision Funnels</span>
            </div>
            <div className="px-space-md py-space-xs rounded-full bg-surface-container/60 backdrop-blur-xl shadow-md flex items-center gap-space-xs hover:bg-surface-container-high transition-colors border border-outline-variant/20">
              <span className="material-symbols-outlined text-tertiary text-[18px]">hub</span>
              <span className="font-label-md text-label-md text-on-surface">Omnichannel Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
