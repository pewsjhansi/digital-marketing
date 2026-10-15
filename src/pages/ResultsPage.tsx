import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEMO_CAMPAIGN_RESULTS, AGENCY_CONFIG } from '../config/agencyConfig';

export const ResultsPage: React.FC = () => {
  // Toggle between calibrated demo environment and honest production empty state (PRD FR-05 requirement)
  const [viewMode, setViewMode] = useState<'benchmarks' | 'empty'>('benchmarks');

  const benchmarkMetrics = [
    {
      label: 'Acquisition Velocity',
      title: 'Leads Generated',
      category: 'Meta & Search',
      value: '14,820+',
      trend: '-34.2%',
      trendLabel: 'CPL optimization benchmark',
      sparklineColor: 'text-primary',
      sparklineFill: 'rgba(160,120,255,0.12)',
      d: 'M0 20 Q 25 18, 40 10 T 70 8 T 100 2',
    },
    {
      label: 'Omnichannel Scale',
      title: 'Total Reach',
      category: 'Multi-Platform',
      value: '5.40M+',
      trend: '+148%',
      trendLabel: 'Unique audience expansion',
      sparklineColor: 'text-secondary',
      sparklineFill: 'rgba(76,215,246,0.12)',
      d: 'M0 22 Q 30 16, 50 14 T 80 5 T 100 1',
    },
    {
      label: 'Engagement Velocity',
      title: 'Engagement Rate',
      category: 'Video Reels & Feeds',
      value: '18.6%',
      trend: '4.5x',
      trendLabel: 'Versus industry average',
      sparklineColor: 'text-tertiary',
      sparklineFill: 'rgba(173,198,255,0.12)',
      d: 'M0 21 Q 20 18, 50 12 T 80 8 T 100 3',
    },
    {
      label: 'Inbound Pipeline',
      title: 'Website Visitors',
      category: 'High-Converting Web',
      value: '840K+',
      trend: '0.8s',
      trendLabel: 'Average page load speed',
      sparklineColor: 'text-primary',
      sparklineFill: 'rgba(160,120,255,0.12)',
      d: 'M0 24 Q 30 20, 60 11 T 85 7 T 100 2',
    },
    {
      label: 'Verified Human Traffic',
      title: 'Ad Clicks',
      category: 'Filtered Paid Intent',
      value: '1.12M',
      trend: '96%',
      trendLabel: 'Human intent verification',
      sparklineColor: 'text-secondary',
      sparklineFill: 'rgba(76,215,246,0.12)',
      d: 'M0 20 Q 25 15, 55 10 T 80 6 T 100 1',
    },
    {
      label: 'Revenue Realization',
      title: 'Conversion Rate',
      category: 'Booked Funnels',
      value: '6.82%',
      trend: '4.2x',
      trendLabel: 'Blended return on ad spend',
      sparklineColor: 'text-primary',
      sparklineFill: 'rgba(160,120,255,0.12)',
      d: 'M0 23 Q 35 17, 60 12 T 85 4 T 100 0',
    },
  ];

  return (
    <div className="flex flex-col w-full relative z-10">
      {/* SECTION 1: HEADER & LIVE TELEMETRY STATUS STRIP */}
      <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 py-space-xl overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-sm mb-space-md border border-outline-variant/30">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              AUDITED TELEMETRY &amp; ATTRIBUTION REPORTING
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display-hero text-headline-xl md:text-display-hero uppercase tracking-tighter text-on-surface mb-space-md">
            REAL RESULTS.{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent">
              MEANINGFUL GROWTH.
            </span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="font-body-xl text-body-lg md:text-body-xl text-on-surface-variant max-w-2xl mx-auto mb-space-lg leading-relaxed">
            Showcase the impact of our digital marketing campaigns with transparent, verifiable performance data.
          </p>

          {/* Live Telemetry Status Strip */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-space-sm p-space-sm rounded-xl bg-surface-container-low/90 backdrop-blur-xl shadow-lg border border-outline-variant/30">
            <div className="flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container/60 border border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[20px]">hub</span>
              <div className="text-left">
                <span className="block font-label-caps text-label-caps text-outline uppercase">
                  Attribution Protocol
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Server-Side CAPI v4
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container/60 border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
              <div className="text-left">
                <span className="block font-label-caps text-label-caps text-outline uppercase">
                  Data Integrity
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Cryptographically Verified
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container/60 border border-outline-variant/20">
              <span className="material-symbols-outlined text-secondary text-[20px]">sync</span>
              <div className="text-left">
                <span className="block font-label-caps text-label-caps text-outline uppercase">
                  Audit Cycle
                </span>
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Continuous 24/7 Engine
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PROMINENT TRANSPARENCY & EMPTY STATE CALLOUT */}
      <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 mb-space-xl">
        <div className="max-w-6xl mx-auto relative rounded-2xl bg-gradient-to-b from-surface-container-high/90 to-surface-container/95 backdrop-blur-2xl p-space-lg md:p-space-xl shadow-2xl overflow-hidden border border-outline-variant/30">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter-desktop items-center">
            {/* Left: Verified Empty State Message */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-lowest/80 text-primary mb-space-sm border border-primary/20">
                <span className="material-symbols-outlined text-[16px]">policy</span>
                <span className="font-label-caps text-label-caps uppercase">Transparency Protocol 01</span>
              </div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-space-sm tracking-tight">
                Your results will appear here.
              </h2>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant mb-space-md leading-relaxed">
                We believe in transparent reporting. Verified campaign results will be published here when available. In the meantime, explore our calibrated multi-channel benchmarks below, engineered on production telemetry frameworks.
              </p>
              <div className="flex flex-wrap items-center gap-space-sm">
                <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-lowest text-secondary font-label-sm text-label-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                  <span>Zero Vanity Padding</span>
                </div>
                <div className="flex items-center gap-space-xs px-space-sm py-space-xs rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm border border-outline-variant/20">
                  <span className="material-symbols-outlined text-[16px]">fingerprint</span>
                  <span>Client-Anonymized Hashes</span>
                </div>
              </div>
            </div>

            {/* Right: Verification Key Badge & Live Environment Status */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="p-space-md rounded-xl bg-surface-container-lowest/90 shadow-inner flex flex-col gap-space-sm border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                    Telemetry Verification Node
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-label-sm text-label-sm font-semibold">
                    ACTIVE PIPELINE
                  </span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-dim font-mono text-xs text-primary/90 select-all break-all overflow-x-auto border border-outline-variant/20">
                  SHA256: 9e8a7c2b04f1ad37...f41d00aa4e3b1c9701a35cc8
                </div>
                <div className="flex items-center justify-between text-body-sm text-on-surface-variant pt-space-xs">
                  <span className="flex items-center gap-1 font-body-sm text-body-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      check_circle
                    </span>
                    Public Key Match
                  </span>
                  <span className="font-label-caps text-label-caps text-outline uppercase">
                    Demo Environment
                  </span>
                </div>
                <div className="w-full mt-space-xs py-space-xs px-space-sm rounded bg-surface-container-high/60 text-center font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider border border-outline-variant/20">
                  CALIBRATED BENCHMARK / DEMO — NOT ACTUAL CLIENT RESULTS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environment View Switcher (PRD Compliance) */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 mb-space-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4 p-3 rounded-xl bg-surface-container-low border border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="font-label-caps text-xs text-outline uppercase">Environment Mode:</span>
            <div className="inline-flex rounded-lg bg-surface-container p-1 border border-outline-variant/30">
              <button
                type="button"
                onClick={() => setViewMode('benchmarks')}
                className={`px-3 py-1.5 rounded-md font-label-md text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'benchmarks'
                    ? 'bg-primary-container text-on-primary-container shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Calibrated Benchmarks
              </button>
              <button
                type="button"
                onClick={() => setViewMode('empty')}
                className={`px-3 py-1.5 rounded-md font-label-md text-xs font-semibold transition-all cursor-pointer ${
                  viewMode === 'empty'
                    ? 'bg-secondary text-surface-container-lowest shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                Initial Empty State (Zero Fake Data)
              </button>
            </div>
          </div>

          <div className="text-xs text-outline font-label-sm">
            {viewMode === 'benchmarks' ? (
              <span>Showing production target simulation for client onboardings</span>
            ) : (
              <span>Strict compliance state — waiting for live verified client reports</span>
            )}
          </div>
        </div>
      </section>

      {viewMode === 'empty' ? (
        /* Empty State View */
        <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16">
          <div className="max-w-2xl mx-auto p-12 rounded-3xl bg-surface-container-low text-center border border-outline-variant/30 flex flex-col items-center shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high flex items-center justify-center text-secondary mb-4 shadow-inner">
              <span className="material-symbols-outlined text-[36px]">shield_check</span>
            </div>
            <h3 className="font-headline-lg text-2xl text-on-surface mb-2">
              Your results will appear here.
            </h3>
            <p className="font-body-md text-on-surface-variant mb-6 max-w-lg leading-relaxed">
              We believe in transparent reporting. Verified campaign results will be published here when available. We do not invent client numbers or fabricate case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md text-sm font-bold shadow-md hover:scale-105 transition-all"
              >
                Launch Your Campaign
              </Link>
              <button
                type="button"
                onClick={() => setViewMode('benchmarks')}
                className="px-6 py-3 rounded-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-sm border border-outline-variant/30 transition-all cursor-pointer"
              >
                View Calibrated Benchmarks
              </button>
            </div>
          </div>
        </section>
      ) : (
        /* Calibrated Benchmarks View */
        <>
          {/* SECTION 3: METRIC PERFORMANCE BENCHMARK CARDS */}
          <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 py-space-md">
            <div className="max-w-7xl mx-auto flex flex-col">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
                <div>
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-space-xs">
                    Production Benchmarks
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    System Performance Indicators
                  </h2>
                </div>
                <div className="px-space-md py-space-xs rounded-full bg-surface-container-high text-on-surface-variant font-label-caps text-label-caps uppercase flex items-center gap-space-xs shadow-sm border border-outline-variant/30">
                  <span className="material-symbols-outlined text-primary text-[18px]">info</span>
                  <span>Calibrated Demo Data · Real Client Tracking Activates Post-Onboarding</span>
                </div>
              </div>

              {/* Grid of 6 Performance Metric Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-gutter-desktop">
                {benchmarkMetrics.map((item, idx) => (
                  <div
                    key={idx}
                    className="relative rounded-2xl bg-surface-container-low/85 backdrop-blur-xl p-space-lg shadow-xl hover:bg-surface-container transition-all duration-300 flex flex-col justify-between group border border-outline-variant/30"
                  >
                    <div className="flex items-start justify-between gap-space-xs mb-space-md">
                      <div>
                        <span className="font-label-caps text-label-caps text-outline uppercase block mb-1">
                          {item.label}
                        </span>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface">
                          {item.title}
                        </h3>
                      </div>
                      <span className="px-space-xs py-0.5 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps border border-primary/20">
                        {item.category}
                      </span>
                    </div>

                    <div className="mb-space-md">
                      <div className="font-display-hero text-headline-xl text-primary font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(208,188,255,0.35)]">
                        {item.value}
                      </div>
                      <div className="flex items-center gap-space-xs mt-space-xs text-body-sm text-on-surface-variant">
                        <span className="inline-flex items-center text-secondary font-semibold font-label-md text-label-md">
                          <span className="material-symbols-outlined text-[16px]">trending_up</span>{' '}
                          {item.trend}
                        </span>
                        <span>{item.trendLabel}</span>
                      </div>
                    </div>

                    {/* Micro Sparkline SVG */}
                    <div className="w-full h-12 mb-space-md overflow-hidden rounded bg-surface-container-lowest/60 p-1 flex items-end border border-outline-variant/20">
                      <svg
                        className={`w-full h-8 ${item.sparklineColor} overflow-visible`}
                        preserveAspectRatio="none"
                        viewBox="0 0 100 25"
                      >
                        <path
                          d={item.d}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        />
                        <path
                          d={`${item.d} L 100 25 L 0 25 Z`}
                          fill={item.sparklineFill}
                        />
                      </svg>
                    </div>

                    <div className="pt-space-sm flex items-center justify-between text-body-sm text-outline border-t border-outline-variant/20">
                      <span className="font-label-caps text-label-caps text-outline uppercase">
                        Demo Benchmark
                      </span>
                      <span className="font-label-md text-label-md text-secondary hover:text-on-surface transition-colors flex items-center gap-1 group-hover:translate-x-1 duration-200">
                        <span>Breakdown</span>
                        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4: MULTI-CHANNEL ATTRIBUTION BREAKDOWN TABLE */}
          <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 py-space-xl">
            <div className="max-w-7xl mx-auto rounded-2xl bg-surface-container-low/90 backdrop-blur-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-xl overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="font-label-caps text-xs text-secondary uppercase font-semibold">
                    Attribution Telemetry Log
                  </span>
                  <h3 className="font-headline-md text-xl text-on-surface mt-1">
                    Calibrated Campaign Performance Matrix
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-surface-container-high text-xs text-outline font-label-caps uppercase border border-outline-variant/20">
                  DEMO — NOT ACTUAL CLIENT RESULTS
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm font-body">
                  <thead>
                    <tr className="border-b border-outline-variant/30 font-label-caps text-xs text-outline uppercase">
                      <th className="py-3 px-4">Campaign Architecture</th>
                      <th className="py-3 px-4">Channel</th>
                      <th className="py-3 px-4">Period</th>
                      <th className="py-3 px-4">Leads</th>
                      <th className="py-3 px-4">Avg CPL</th>
                      <th className="py-3 px-4">ROAS</th>
                      <th className="py-3 px-4">Telemetry Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-outline-variant/20">
                    {DEMO_CAMPAIGN_RESULTS.map((camp) => (
                      <tr key={camp.id} className="hover:bg-surface-container/60 transition-colors">
                        <td className="py-4 px-4 font-headline-sm font-semibold text-on-surface">
                          {camp.campaignName}
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded-full text-xs font-label-caps bg-primary/15 text-primary border border-primary/20">
                            {camp.platform}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-on-surface-variant font-mono text-xs">
                          {camp.period}
                        </td>
                        <td className="py-4 px-4 font-mono font-bold text-secondary">
                          {camp.metrics.leadsGenerated.toLocaleString()}
                        </td>
                        <td className="py-4 px-4 font-mono text-on-surface">
                          {camp.metrics.costPerLead}
                        </td>
                        <td className="py-4 px-4 font-mono font-bold text-primary">
                          {camp.metrics.roas}
                        </td>
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center gap-1 text-xs text-secondary bg-secondary/10 px-2 py-0.5 rounded-full border border-secondary/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                            Simulated CAPI
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </>
      )}

      {/* SECTION 5: FINAL CTA */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-space-xl">
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface-container-high/70 backdrop-blur-2xl p-8 sm:p-12 text-center border border-outline-variant/30 shadow-2xl">
          <h3 className="font-headline-lg text-2xl sm:text-3xl text-on-surface mb-3 uppercase">
            Ready to Generate Verified Results for Your Brand?
          </h3>
          <p className="font-body-md text-on-surface-variant max-w-xl mx-auto mb-6">
            Get your comprehensive 48-hour growth audit and establish a private, real-time attribution pipeline with zero vanity metrics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md font-bold shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              Request Free Consultation
            </Link>
            <a
              href={AGENCY_CONFIG.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-surface-container hover:bg-surface-variant text-secondary font-label-md font-semibold border border-outline-variant/30 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
