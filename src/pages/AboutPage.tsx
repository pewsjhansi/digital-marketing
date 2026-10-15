import React from 'react';
import { Link } from 'react-router-dom';
import { AGENCY_CONFIG } from '../config/agencyConfig';

export const AboutPage: React.FC = () => {
  const workflowPhases = [
    {
      num: '01',
      title: 'Diagnostic Audit',
      desc: 'Telemetry inspection, CAPI event testing, and historical unit-economic analysis.',
      icon: 'radar',
    },
    {
      num: '02',
      title: 'Strategic Blueprint',
      desc: 'Persona mapping, commercial keyword prioritization, and creative angle architecture.',
      icon: 'schema',
    },
    {
      num: '03',
      title: 'Asset Synthesis',
      desc: 'High-octane AI video production, kinetic subtitles, and high-converting lander build.',
      icon: 'draw',
    },
    {
      num: '04',
      title: 'Omnichannel Deployment',
      desc: 'Live campaign activation across Meta, Google Search, Maps, and social channels.',
      icon: 'rocket_launch',
    },
    {
      num: '05',
      title: 'Algorithmic Optimization',
      desc: 'Real-time budget shifts toward top-performing hooks, lookalikes, and high ROAS segments.',
      icon: 'tune',
    },
    {
      num: '06',
      title: 'Executive Briefing',
      desc: 'Bi-weekly transparent dashboard readouts with revenue attribution and scaling roadmap.',
      icon: 'insights',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Alexander Vance',
      role: 'Principal Growth Partner & Strategist',
      bio: 'Ex-quant media buyer with 8+ years architecting high-scale acquisition pipelines and server-side telemetry architectures.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Elena Rostova',
      role: 'Head of Search & Entity Engineering',
      bio: 'Semantic SEO and technical indexing specialist focused on Knowledge Graphs, Core Web Vitals, and Local 3-Pack domination.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Devon Thorne',
      role: 'Creative Director & AI Video Lead',
      bio: 'Award-winning visual storyteller combining generative AI synthesis, 3D motion dynamics, and psychological hook sequencing.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="flex flex-col w-full relative z-10">
      {/* SECTION 1: HERO / EDITORIAL ANTHEM */}
      <section className="relative w-full pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16">
        {/* Atmospheric Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 w-[600px] h-[450px] bg-gradient-to-tr from-primary-container/20 to-secondary/10 blur-[130px] rounded-full" />
        <div className="pointer-events-none absolute top-1/2 right-10 w-[500px] h-[400px] bg-gradient-to-b from-secondary/15 to-transparent blur-[140px] rounded-full" />

        <div className="w-full relative z-10">
          {/* Breadcrumb & Status Telemetry */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm mb-8">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container border border-outline-variant/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
                Autonomous Growth Studio · Est. Global
              </span>
            </div>
            <div className="hidden md:flex items-center gap-space-sm font-label-sm text-label-sm text-outline">
              <span>SYS.ID // CORE-ABOUT</span>
              <span className="text-outline-variant">/</span>
              <span>LATENCY: 12ms</span>
              <span className="text-outline-variant">/</span>
              <span className="text-secondary">INDEXED: VERIFIED</span>
            </div>
          </div>

          {/* Main Headline Block */}
          <div className="max-w-5xl">
            <div className="font-label-caps text-label-caps text-primary tracking-widest uppercase mb-4">
              The Convergence Engine
            </div>
            <h1 className="font-display-hero text-headline-xl md:text-display-hero text-on-surface tracking-tight leading-[1.05] mb-8 uppercase">
              Creativity Meets <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed via-primary to-secondary">
                Digital Growth
              </span>
            </h1>
            <p className="font-body-xl text-body-xl text-on-surface-variant max-w-3xl leading-relaxed">
              We reject the false dichotomy between artistic brilliance and raw mathematical rigor. DIGITAL MARKETING is the nexus where autonomous computational infrastructure fuses with cinematic storytelling—engineered to turn your boldest vision into hyper-scalable market dominance.
            </p>
          </div>

          {/* Quick Metrics Strip / Asymmetric Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter">
            <div className="p-space-md md:p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-xl border border-outline-variant/20 shadow-lg relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all" />
              <span className="font-label-caps text-label-caps text-outline block mb-1">
                EXECUTION VELOCITY
              </span>
              <div className="font-headline-lg text-headline-lg text-secondary font-bold tracking-tight">
                48 Hours
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                Diagnostic to live deployment
              </span>
            </div>

            <div className="p-space-md md:p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-xl border border-outline-variant/20 shadow-lg relative overflow-hidden group hover:border-secondary/40 transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary/10 rounded-full blur-xl group-hover:bg-secondary/20 transition-all" />
              <span className="font-label-caps text-label-caps text-outline block mb-1">
                ATTRIBUTION INTEGRITY
              </span>
              <div className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">
                100% CAPI
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                Zero reliance on cookied vanity
              </span>
            </div>

            <div className="p-space-md md:p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-xl border border-outline-variant/20 shadow-lg relative overflow-hidden group hover:border-primary/40 transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all" />
              <span className="font-label-caps text-label-caps text-outline block mb-1">
                CLIENT CONTROL
              </span>
              <div className="font-headline-lg text-headline-lg text-primary font-bold tracking-tight">
                Zero Lock-In
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                Full asset &amp; pipeline ownership
              </span>
            </div>

            <div className="p-space-md md:p-space-lg rounded-xl bg-surface-container/60 backdrop-blur-xl border border-outline-variant/20 shadow-lg relative overflow-hidden group hover:border-secondary/40 transition-all duration-300">
              <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-secondary/10 rounded-full blur-xl group-hover:bg-secondary/20 transition-all" />
              <span className="font-label-caps text-label-caps text-outline block mb-1">
                CORE METHODOLOGY
              </span>
              <div className="font-headline-lg text-headline-lg text-secondary-fixed font-bold tracking-tight">
                Multivariate
              </div>
              <span className="font-body-sm text-body-sm text-on-surface-variant block mt-1">
                Psychological hook sequencing
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: AGENCY ORIGIN & HYBRID DNA */}
      <section className="relative w-full py-20 bg-surface-container-lowest/80 border-y border-outline-variant/20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter-desktop items-center">
            {/* Visual Story Mosaic */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl">
                <img
                  className="w-full h-[480px] object-cover filter brightness-90 hover:scale-105 transition-transform duration-700 ease-out"
                  alt="Futuristic digital creative laboratory with ultra-wide monitors displaying deep violet and neon cyan performance graphs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3B5MrGjldVHZPRQPj2_nS7vsDxizdg9nTaaJ0YL26CUHEzNb9a2xc4zouTrg09_xSoa-QHnCxO3z70YartmPe-wigrsTYwA8FeY5AI8Dy7cMYXq2ABbM8_R6Nij0GqWqzWrymmLBVJSLrtnChPgh5E_DsxTQ3I0O1BFRgaEUkc5aSO9kkgVbDdSAvNXqIXc6UrVtlpy_DCNrQexG3YaKn2BpP5bHRsKcsAYM4hyxsrJJy8INvJzOI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-space-md rounded-xl bg-surface-container-high/90 backdrop-blur-xl border border-outline-variant/40 shadow-xl">
                  <div className="flex items-center gap-space-sm mb-2">
                    <span className="material-symbols-outlined text-secondary text-xl">bolt</span>
                    <span className="font-label-caps text-label-caps text-on-surface uppercase">
                      The Hybrid Protocol
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    "{AGENCY_CONFIG.tagline}" isn't a slogan. It is an algorithmic blueprint balancing data science with cinematic awe.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-7 flex flex-col justify-center mt-8 lg:mt-0">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-secondary" />
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  Our Genesis &amp; Identity
                </span>
              </div>
              <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-surface tracking-tight mb-6 uppercase">
                Forged at the Brink of the <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-primary-fixed">
                  Algorithmic Shift
                </span>
              </h2>
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                <p>
                  Traditional agencies broke when modern advertising platforms transitioned to probabilistic algorithmic black boxes. Old-school media buyers relied on manual gut instinct, while creative boutiques produced visually pleasing commercials that hemorrhaged capital without verifiable conversion.
                </p>
                <p>
                  We established <strong className="text-on-surface font-semibold">{AGENCY_CONFIG.name}</strong> to bridge this exact schism. By constructing a collective of quantitative growth engineers, full-stack developers, and high-concept creative directors, we built an engine capable of feeding machine learning recommendation algorithms the high-density signals they require to win.
                </p>
              </div>

              {/* Hybrid DNA 3-Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/30 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                    <span className="material-symbols-outlined">query_stats</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                    Performance Engineers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Server-side telemetry, custom bidding scripts, and unit-economic discipline.
                  </p>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/30 hover:border-secondary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-3">
                    <span className="material-symbols-outlined">movie_filter</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                    Cinematic Storytellers
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Hypnotic thumb-stop sequencing, narrative pacing, and authentic brand equity.
                  </p>
                </div>

                <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/30 hover:border-tertiary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary mb-3">
                    <span className="material-symbols-outlined">neurology</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                    AI Technologists
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Autonomous generative pipelines scaling hyper-personalized variants at lightning speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION, VISION & 4 PILLARS */}
      <section className="relative w-full py-24 bg-surface px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-3 block">
              North Star Declarations
            </span>
            <h2 className="font-headline-xl text-headline-lg md:text-headline-xl text-on-surface tracking-tight uppercase">
              Engineering the Future of Scale
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
              A definitive commitment to mathematical transparency and magnetic storytelling.
            </p>
          </div>

          {/* Split Mission & Vision Banners */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-gutter-desktop mb-16 max-w-5xl mx-auto">
            <div className="relative p-space-lg md:p-space-xl rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-container" />
              <div className="flex items-center gap-space-sm mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">rocket_launch</span>
                <span className="font-label-caps text-label-caps text-primary uppercase font-bold">
                  Our Mission
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                Verifiable Scale via High-Velocity Creative
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {AGENCY_CONFIG.mission}
              </p>
            </div>

            <div className="relative p-space-lg md:p-space-xl rounded-2xl bg-surface-container-low border border-outline-variant/30 shadow-xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-secondary-container" />
              <div className="flex items-center gap-space-sm mb-4">
                <span className="material-symbols-outlined text-secondary text-3xl">visibility</span>
                <span className="font-label-caps text-label-caps text-secondary uppercase font-bold">
                  Our Vision
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-4">
                A Universe Devoid of Vanity Metrics
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {AGENCY_CONFIG.vision}
              </p>
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/20 hover:border-primary/40 transition-all duration-300">
              <div className="font-label-caps text-label-caps text-primary/80 mb-2 font-bold">PILLAR 01</div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Attribution Transparency
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Zero reliance on modeled guesswork. Server-side event parity and direct pipeline views allow you to audit every dollar spent and earned.
              </p>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/20 hover:border-secondary/40 transition-all duration-300">
              <div className="font-label-caps text-label-caps text-secondary/80 mb-2 font-bold">PILLAR 02</div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Algorithmic Empathy
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Understanding recommendation engines as digital organisms requiring specific visual, acoustic, and behavioral nourishment.
              </p>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/20 hover:border-primary/40 transition-all duration-300">
              <div className="font-label-caps text-label-caps text-primary/80 mb-2 font-bold">PILLAR 03</div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Autonomous Velocity
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Rapid generative pipelines eliminating weeks of bureaucratic bottlenecking to deploy live campaigns in under 48 hours.
              </p>
            </div>

            <div className="p-space-md rounded-xl bg-surface-container border border-outline-variant/20 hover:border-secondary/40 transition-all duration-300">
              <div className="font-label-caps text-label-caps text-secondary/80 mb-2 font-bold">PILLAR 04</div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">
                Client Sovereignty
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Complete client ownership of all ad accounts, custom codebases, generative assets, and proprietary tracking pixels with zero lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 6-PHASE AGENCY WORKFLOW */}
      <section className="relative w-full py-20 bg-surface-container-lowest/60 border-t border-outline-variant/20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-2 block">
              Methodical Execution
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface uppercase">
              The 6-Phase Agency Workflow
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              How we take your business from initial telemetry audit to sustained category dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowPhases.map((phase) => (
              <div
                key={phase.num}
                className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-secondary/40 transition-all shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-headline-lg text-2xl font-extrabold text-primary">
                      {phase.num}
                    </span>
                    <span className="material-symbols-outlined text-outline text-2xl">
                      {phase.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-lg text-on-surface font-bold mb-2">
                    {phase.title}
                  </h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LEADERSHIP TEAM */}
      <section className="relative w-full py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-2 block">
              Leadership &amp; Strategists
            </span>
            <h2 className="font-headline-xl text-3xl sm:text-4xl text-on-surface uppercase">
              The Minds Behind the Engine
            </h2>
            <p className="font-body-md text-on-surface-variant mt-2">
              Cross-disciplinary experts operating at the intersection of media buying, code, and generative storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipTeam.map((leader, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-surface-container-low border border-outline-variant/30 overflow-hidden shadow-lg group hover:border-primary/40 transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-headline-sm text-xl text-on-surface font-bold mb-1">
                    {leader.name}
                  </h3>
                  <p className="font-label-caps text-xs text-secondary uppercase mb-3">
                    {leader.role}
                  </p>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONSULTATION CTA BANNER */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-24">
        <div className="max-w-4xl mx-auto rounded-3xl bg-surface-container-high/80 backdrop-blur-2xl p-8 sm:p-14 text-center border border-outline-variant/30 shadow-2xl">
          <h2 className="font-headline-xl text-2xl sm:text-4xl text-on-surface mb-4 uppercase">
            Let's Engineer Your Next Growth Horizon
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            Schedule a 48-hour growth diagnostic. We analyze your customer acquisition economics, identify leaking funnel steps, and deliver an actionable execution roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md font-bold shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              Request Free Consultation
            </Link>
            <a
              href={AGENCY_CONFIG.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-surface-container hover:bg-surface-variant text-secondary font-label-md font-semibold border border-outline-variant/30 transition-all flex items-center gap-2"
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
