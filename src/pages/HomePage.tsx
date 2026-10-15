import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { VideoPlayerModal } from '../components/portfolio/VideoPlayerModal';
import { ServiceDetailModal } from '../components/services/ServiceDetailModal';
import {
  SERVICES_DATA,
  PORTFOLIO_VIDEOS,
  type ServiceItem,
  type PortfolioVideo,
  AGENCY_CONFIG,
} from '../config/agencyConfig';

export const HomePage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);

  // Home features the first 5 9:16 reels from PORTFOLIO_VIDEOS
  const homeReels = PORTFOLIO_VIDEOS.slice(0, 5);

  const processSteps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Deep audit of historical performance, CAC economics, and market whitespace.',
      icon: 'radar',
      color: 'text-primary',
      badgeBg: 'bg-primary/20',
    },
    {
      num: '02',
      title: 'Strategize',
      desc: 'Architecting campaign funnels, target customer personas, and media allocations.',
      icon: 'schema',
      color: 'text-secondary',
      badgeBg: 'bg-secondary/20',
    },
    {
      num: '03',
      title: 'Create',
      desc: 'High-impact video generation, landing pages, and persuasive ad hooks production.',
      icon: 'draw',
      color: 'text-primary',
      badgeBg: 'bg-primary/20',
    },
    {
      num: '04',
      title: 'Launch',
      desc: 'Omnichannel campaign activation with live pixel tracking and telemetry triggers.',
      icon: 'rocket_launch',
      color: 'text-secondary',
      badgeBg: 'bg-secondary/20',
    },
    {
      num: '05',
      title: 'Optimize',
      desc: 'Dynamic A/B budget reallocations to winning creative angles and high ROAS segments.',
      icon: 'model_training',
      color: 'text-primary',
      badgeBg: 'bg-primary/20',
    },
    {
      num: '06',
      title: 'Report',
      desc: 'Transparent dashboard readouts, revenue attribution, and next scaling phase plan.',
      icon: 'insights',
      color: 'text-secondary',
      badgeBg: 'bg-secondary/20',
    },
  ];

  const benchmarkMetrics = [
    {
      tag: 'Acquisition Metric',
      title: 'Qualified Leads Generated',
      value: '14,820+',
      desc: 'Simulated 90-day aggregate across omnichannel multi-step lead forms.',
      trend: '+312% YoY',
      stat: 'CPL: $8.40 avg',
      color: 'text-secondary',
    },
    {
      tag: 'Brand Presence',
      title: 'Total Audience Reach',
      value: '5.4M+',
      desc: 'Unique impressions across Meta Ads, Reels, and organic search indexation.',
      trend: '88% Brand Recall',
      stat: 'Global Radius',
      color: 'text-primary',
    },
    {
      tag: 'Retention & Affinity',
      title: 'Average Engagement Rate',
      value: '18.6%',
      desc: 'Sustained interactions, saves, and comments across video formats.',
      trend: '4.5x Industry Avg',
      stat: 'Active Dwell Time',
      color: 'text-secondary',
    },
    {
      tag: 'Inbound Traffic',
      title: 'High-Intent Website Visitors',
      value: '840K+',
      desc: 'Direct, organic search, and campaign click-throughs to optimized web apps.',
      trend: '0.8s Avg Page Load',
      stat: '99.8% Uptime',
      color: 'text-primary',
    },
    {
      tag: 'Paid Precision',
      title: 'Verified Ad Clicks',
      value: '1.12M',
      desc: 'Targeted intent clicks filtered against bot traffic and accidental taps.',
      trend: '96% Human Intent',
      stat: 'CPC: $0.24',
      color: 'text-secondary',
    },
    {
      tag: 'Revenue Realization',
      title: 'Blended Funnel Conversion',
      value: '6.82%',
      desc: 'Finalized customer orders and booked calendar calls on custom landers.',
      trend: '4.2x ROAS',
      stat: 'Optimized Checkout',
      color: 'text-primary',
    },
  ];

  return (
    <div className="flex flex-col w-full relative z-10">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. SECTION: OUR CREATIVE WORK (Instagram Reels 9:16 Style Vertical Grid) */}
      <section className="w-full py-space-xl relative">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps mb-space-xs uppercase border border-primary/20">
                <span className="material-symbols-outlined text-[14px]">movie</span>
                <span>Visual Production Studio</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
                OUR CREATIVE WORK
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-space-xs">
                Creative ideas. Powerful videos. Content that makes brands stand out.
              </p>
            </div>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-space-xs font-label-md text-label-md text-secondary hover:text-on-surface transition-colors py-2 group self-start md:self-auto"
            >
              <span>Explore All 24+ Production Drops</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* 5-Card 9:16 Vertical Showcase Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-gutter-desktop">
            {homeReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setSelectedVideo(reel)}
                className="group relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-surface-container-low shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(160,120,255,0.35)] border border-outline-variant/30"
              >
                {/* Poster Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${reel.thumbnailUrl}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/30 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-primary/20 backdrop-blur-md text-primary font-label-caps text-label-caps tracking-wider uppercase border border-primary/30">
                    {reel.badge}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/80 backdrop-blur-md text-on-surface font-label-sm text-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px] text-error">fiber_manual_record</span>
                    {reel.duration}
                  </span>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-primary-container/90 backdrop-blur-md text-on-primary-container flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <span className="material-symbols-outlined text-[28px] translate-x-0.5">play_arrow</span>
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm mb-1">
                    <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                    <span>{reel.stats}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-tight">
                    {reel.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">
                    {reel.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div className="mt-space-lg flex justify-center">
            <Link
              to="/portfolio"
              className="px-8 py-3.5 rounded-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all shadow-md hover:shadow-xl inline-flex items-center gap-space-sm border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-[20px] text-secondary">grid_view</span>
              <span>View All Work &amp; Case Studies</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. SECTION: SIX-SERVICE PREVIEW */}
      <section className="w-full py-space-xl bg-surface-container-lowest/50 relative">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-space-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-caps text-label-caps mb-space-xs uppercase border border-secondary/20">
              <span className="material-symbols-outlined text-[14px]">tune</span>
              <span>Performance Stack</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
              SMART DIGITAL ARCHITECTURE
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
              Engineered for measurable digital expansion across every customer touchpoint.
            </p>
          </div>

          {/* 6-Service Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-gutter-desktop">
            {SERVICES_DATA.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-surface-container-low p-space-lg shadow-lg hover:shadow-[0_12px_40px_rgba(160,120,255,0.25)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden border border-outline-variant/30"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/25 transition-all pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-space-md shadow-md group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px]">{service.iconName}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-label-caps text-label-caps text-secondary uppercase">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface font-bold mb-space-xs">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="pt-space-md border-t border-outline-variant/20 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="font-label-md text-label-md text-secondary hover:text-on-surface inline-flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                  <Link
                    to="/contact"
                    className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-all shadow-sm"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SECTION: OUR PROCESS (6-Step Growth Sprint) */}
      <section className="w-full py-space-xl relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-label-caps text-label-caps mb-space-xs uppercase border border-primary/20">
                <span className="material-symbols-outlined text-[14px]">alt_route</span>
                <span>Execution Protocol</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
                OUR 6-STEP GROWTH SPRINT
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-space-xs">
                From foundational telemetry audit to self-sustaining customer acquisition loops.
              </p>
            </div>
            <div className="text-right">
              <span className="font-label-caps text-label-caps text-secondary uppercase">
                Average Velocity: 14 Days to Flight
              </span>
            </div>
          </div>

          {/* Process Node Steps Ribbon */}
          <div className="relative w-full">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-primary -translate-y-1/2 z-0 opacity-30" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-space-md relative z-10">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col p-space-md rounded-2xl bg-surface-container-low shadow-md hover:shadow-xl transition-all hover:bg-surface-container duration-200 border border-outline-variant/30"
                >
                  <div className="flex items-center justify-between mb-space-sm">
                    <span
                      className={`w-10 h-10 rounded-full ${step.badgeBg} ${step.color} font-headline-sm text-headline-sm flex items-center justify-center font-bold`}
                    >
                      {step.num}
                    </span>
                    <span className="material-symbols-outlined text-[20px] text-outline">
                      {step.icon}
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
                    {step.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: RESULTS & HONEST METRICS PREVIEW */}
      <section className="w-full py-space-xl bg-surface-container-lowest/60 relative">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-md">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary font-label-caps text-label-caps mb-space-xs uppercase border border-secondary/20">
                <span className="material-symbols-outlined text-[14px]">verified</span>
                <span>Audited Telemetry Preview</span>
              </div>
              <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight">
                REAL RESULTS. MEANINGFUL GROWTH.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
                We practice radical transparency. Below is an authentic benchmark matrix representing calibrated campaign targets.
              </p>
            </div>
            <Link
              to="/results"
              className="px-5 py-2.5 rounded-full bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md inline-flex items-center gap-space-xs transition-colors self-start md:self-auto border border-outline-variant/30"
            >
              <span>See Live Performance Hub</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          {/* Transparent State Notice Banner (PRD Requirement) */}
          <div className="w-full p-space-md rounded-2xl bg-surface-container-high/70 shadow-inner flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md mb-space-lg border border-outline-variant/30">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[24px]">info</span>
              </div>
              <div>
                <p className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  Live Integration Notice
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Your actual results will appear here. We believe in transparent reporting. Verified campaign results will be published here when available.
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-surface-container-lowest text-outline font-label-caps text-label-caps shrink-0 border border-outline-variant/30">
              DEMO / CALIBRATED ENVIRONMENT
            </span>
          </div>

          {/* 6 Metrics Benchmark Cards with Explicit Demo Badging */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {benchmarkMetrics.map((metric, i) => (
              <div
                key={i}
                className="p-space-lg rounded-2xl bg-surface-container-low shadow-md relative overflow-hidden flex flex-col justify-between border border-outline-variant/20 group hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between mb-space-sm">
                  <span className={`font-label-caps text-label-caps ${metric.color} uppercase`}>
                    {metric.tag}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-surface-container-highest text-outline font-label-caps uppercase tracking-wider">
                    DEMO BENCHMARK
                  </span>
                </div>
                <div>
                  <div className="font-display-hero text-headline-xl text-on-surface font-extrabold tracking-tight">
                    {metric.value}
                  </div>
                  <p className="font-headline-sm text-headline-sm text-on-surface font-medium">
                    {metric.title}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                    {metric.desc}
                  </p>
                </div>
                <div className="mt-space-md pt-space-xs border-t border-outline-variant/20 flex items-center justify-between text-secondary font-label-sm text-label-sm">
                  <span className="flex items-center gap-1 font-semibold">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>{' '}
                    {metric.trend}
                  </span>
                  <span className="text-outline">{metric.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: FINAL CALL TO ACTION */}
      <section className="w-full py-space-xl lg:py-28 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-[600px] md:w-[900px] h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(160,120,255,0.2)_0%,_rgba(76,215,246,0.1)_45%,_transparent_75%)] blur-[90px]" />
        </div>
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
          <div className="max-w-4xl mx-auto rounded-3xl bg-surface-container-high/80 backdrop-blur-2xl p-space-lg md:p-14 shadow-2xl text-center relative overflow-hidden border border-outline-variant/30">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label-caps text-label-caps mb-space-md uppercase border border-secondary/20">
              <span className="material-symbols-outlined text-[14px]">rocket</span>
              <span>Accelerate Your Pipeline</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight mb-space-sm font-extrabold">
              Ready to grow your brand?
            </h2>
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-xl mx-auto mb-space-xl font-normal leading-relaxed">
              Let’s construct your next high-converting ad system, AI video asset library, and dominant organic search presence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-space-md">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-headline-sm text-headline-sm tracking-tight shadow-[0_0_30px_rgba(160,120,255,0.4)] hover:shadow-[0_0_45px_rgba(76,215,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-space-sm"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                <span>Book Free Consultation</span>
              </Link>
              <a
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-container text-secondary hover:text-on-surface hover:bg-surface-variant font-headline-sm text-headline-sm tracking-tight shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-space-sm border border-outline-variant/30"
                href={AGENCY_CONFIG.whatsapp.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="mt-space-lg flex flex-wrap items-center justify-center gap-space-md text-outline font-label-sm text-label-sm">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>{' '}
                No Long-Term Lock-in
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>{' '}
                Rapid 48h Strategic Onboarding
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>{' '}
                Tailored Growth Roadmap
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Trigger */}
      <VideoPlayerModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />

      {/* Service Detail Modal Trigger */}
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
};
