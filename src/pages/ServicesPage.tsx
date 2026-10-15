import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceDetailModal } from '../components/services/ServiceDetailModal';
import { SERVICES_DATA, type ServiceItem, AGENCY_CONFIG } from '../config/agencyConfig';

export const ServicesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Quote calculator state
  const [calcSelectedServices, setCalcSelectedServices] = useState<string[]>([
    'meta-ads',
    'ai-video-creation',
  ]);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(3500);
  const [deliverySpeed, setDeliverySpeed] = useState<string>('14-days');

  const filterOptions = [
    { id: 'all', label: 'All Services' },
    { id: 'meta-ads', label: 'Paid Acquisition' },
    { id: 'seo-local-seo', label: 'Organic Search & SEO' },
    { id: 'google-business-profile', label: 'Local Presence' },
    { id: 'website-development', label: 'Web Engineering' },
    { id: 'social-media-marketing', label: 'Social Ecosystem' },
    { id: 'ai-video-creation', label: 'Generative Video' },
  ];

  const filteredServices =
    activeFilter === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === activeFilter);

  const toggleCalcService = (id: string) => {
    setCalcSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCalculatedEstimate = () => {
    const baseServiceRate = calcSelectedServices.length * 650;
    const adSpendFactor = Math.round(monthlyBudget * 0.12);
    const speedMultiplier = deliverySpeed === '48h' ? 1.3 : deliverySpeed === '14-days' ? 1.0 : 0.9;
    const totalEstimate = Math.max(950, Math.round((baseServiceRate + adSpendFactor) * speedMultiplier));
    return totalEstimate;
  };

  const generateWhatsAppQuoteLink = () => {
    const serviceNames = SERVICES_DATA.filter((s) => calcSelectedServices.includes(s.id))
      .map((s) => s.title)
      .join(', ');
    const msg = `Hello, I generated a custom growth quote on your website: Services: [${serviceNames || 'Custom'}], Monthly Ad Budget: $${monthlyBudget.toLocaleString()}, Timeline: ${deliverySpeed}. Estimated package: ~$${getCalculatedEstimate().toLocaleString()}/mo. Let's discuss details!`;
    return `https://wa.me/919305856475?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="flex flex-col w-full relative z-10">
      {/* Ambient Lighting Accents */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[650px] h-[650px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute top-[800px] -left-36 w-[550px] h-[550px] bg-secondary/10 rounded-full blur-[130px]" />
      </div>

      {/* Header / Hero Architectural Section */}
      <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-space-xl pb-space-lg">
        <div className="max-w-6xl mx-auto flex flex-col items-start">
          {/* Live System Overline Pill */}
          <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-md mb-space-md shadow-sm border border-outline-variant/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              ENGINEERED FOR COMPOUND GROWTH • ARCHITECTURAL SOLUTIONS
            </span>
          </div>

          {/* Typography Driven Title Display */}
          <div className="flex flex-col mb-space-md">
            <div className="flex items-baseline gap-space-sm flex-wrap">
              <span className="font-label-md text-label-md text-secondary tracking-widest uppercase font-semibold">
                CAPABILITIES 01-06
              </span>
              <span className="text-outline-variant font-label-md">/</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                SYSTEMATIC GROWTH
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-space-xs">
              OUR{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">
                SERVICES
              </span>
            </h1>
            <p className="font-body-xl text-body-xl text-secondary mt-space-xs font-medium max-w-2xl">
              Smart digital solutions to grow your business.
            </p>
          </div>

          {/* Narrative Description Split Bento */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter-desktop w-full items-center mb-space-xl">
            <div className="lg:col-span-7">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                We reject fragmented guesswork in favor of an integrated computational flywheel. Our methodology converges precision data engineering, high-octane creative synthesis, and technical infrastructure to systematically lower CAC, amplify organic discovery, and maximize enterprise lifetime value.
              </p>
              <div className="flex flex-wrap items-center gap-space-md mt-space-md">
                <a
                  href="#quote-calculator"
                  className="px-space-md py-space-xs rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md text-label-md font-bold tracking-tight shadow-lg hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-200 inline-flex items-center gap-space-xs"
                >
                  <span>Request Custom Quote</span>
                  <span className="material-symbols-outlined text-[18px]">calculate</span>
                </a>
                <a
                  className="px-space-md py-space-xs rounded-full bg-surface-container-high/90 hover:bg-surface-variant text-on-surface hover:text-secondary font-label-md text-label-md transition-all duration-200 inline-flex items-center gap-space-xs shadow-sm border border-outline-variant/30"
                  href={AGENCY_CONFIG.whatsapp.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    calendar_month
                  </span>
                  <span>Schedule Strategy Call</span>
                </a>
              </div>
            </div>

            {/* Micro Metric Bento Visual */}
            <div className="lg:col-span-5 bg-surface-container-high/60 backdrop-blur-xl p-space-lg rounded-xl shadow-xl relative overflow-hidden border border-outline-variant/30">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
              <div className="flex justify-between items-center mb-space-sm">
                <span className="font-label-caps text-label-caps text-outline tracking-wider uppercase">
                  Live Telemetry Benchmark
                </span>
                <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary bg-surface-container-lowest/80 px-2 py-0.5 rounded-full">
                  <span className="material-symbols-outlined text-[14px]">bolt</span> Real-Time
                </span>
              </div>

              {/* Sparkline Visual */}
              <div className="w-full bg-surface-container-lowest/70 rounded-lg p-3 flex items-center justify-between mb-space-sm border border-outline-variant/20">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Avg. Client Lift
                  </span>
                  <span className="font-headline-sm text-headline-sm text-secondary font-bold">
                    +284.6%
                  </span>
                </div>
                <svg
                  className="w-32 h-10 text-secondary"
                  fill="none"
                  viewBox="0 0 120 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 24L20 20L40 22L60 14L80 18L100 6L120 2"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0 24L20 20L40 22L60 14L80 18L100 6L120 2V30H0V24Z"
                    fill="currentColor"
                    fillOpacity="0.15"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs text-left">
                <div className="bg-surface-container/70 p-space-sm rounded-lg border border-outline-variant/20">
                  <span className="font-label-caps text-label-caps text-outline block mb-0.5">
                    Deployment Cycle
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">
                    48 Hours
                  </span>
                </div>
                <div className="bg-surface-container/70 p-space-sm rounded-lg border border-outline-variant/20">
                  <span className="font-label-caps text-label-caps text-outline block mb-0.5">
                    Execution Health
                  </span>
                  <span className="font-headline-sm text-headline-sm text-primary">
                    99.98%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter & Anchor Navigation Pills */}
          <div className="w-full bg-surface-container-low/80 backdrop-blur-lg p-space-xs rounded-xl shadow-md flex items-center gap-space-xs overflow-x-auto no-scrollbar border border-outline-variant/30">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActiveFilter(opt.id)}
                className={`px-space-md py-space-xs rounded-lg font-label-md text-label-md whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeFilter === opt.id
                    ? 'bg-primary text-on-primary font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Six Comprehensive Deep-Dive Service Cards */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-space-lg">
        <div className="max-w-6xl mx-auto flex flex-col gap-space-xl">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="service-card group bg-surface-container-low/90 backdrop-blur-2xl rounded-2xl p-space-lg lg:p-space-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:bg-surface-container relative overflow-hidden border border-outline-variant/30"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter-desktop items-start">
                <div className="lg:col-span-7 flex flex-col">
                  <div className="flex items-center gap-space-sm mb-space-sm">
                    <span className="inline-flex items-center px-space-sm py-1 rounded-full bg-primary/15 text-primary font-label-caps text-label-caps font-semibold uppercase tracking-wider border border-primary/20">
                      {service.tag}
                    </span>
                    <span className="font-label-caps text-label-caps text-outline">
                      {service.code}
                    </span>
                  </div>

                  <h2 className="font-headline-lg text-headline-lg text-on-surface mb-space-xs flex items-center gap-space-sm">
                    <span>{service.title}</span>
                    <span className="material-symbols-outlined text-secondary text-[28px]">
                      {service.iconName}
                    </span>
                  </h2>

                  <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                    {service.fullDescription}
                  </p>

                  {/* Strategic Key Focus Pills */}
                  <div className="bg-surface-container-high/60 rounded-xl p-space-md mb-space-md border border-outline-variant/20">
                    <span className="font-label-caps text-label-caps text-primary tracking-wider uppercase block mb-space-xs">
                      Core Strategic Focus
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs font-body-sm text-body-sm text-on-surface">
                      {service.strategicFocus.map((focus, idx) => (
                        <li key={idx} className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-secondary text-[16px]">
                            check_circle
                          </span>
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Deliverables */}
                  <div className="mb-space-md">
                    <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider block mb-space-xs">
                      Engineered Deliverables
                    </span>
                    <div className="flex flex-wrap gap-space-xs">
                      {service.deliverables.map((deliv, idx) => (
                        <span
                          key={idx}
                          className="px-space-sm py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/20"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Triggers */}
                  <div className="flex items-center gap-space-sm pt-space-xs">
                    <button
                      onClick={() => {
                        if (!calcSelectedServices.includes(service.id)) {
                          setCalcSelectedServices([...calcSelectedServices, service.id]);
                        }
                        const elem = document.getElementById('quote-calculator');
                        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-space-md py-space-xs rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold hover:scale-105 active:scale-95 transition-all duration-200 inline-flex items-center gap-1 shadow-md cursor-pointer"
                    >
                      <span>Get a Quote</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="px-space-md py-space-xs rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-all cursor-pointer border border-outline-variant/30"
                    >
                      View Details
                    </button>
                  </div>
                </div>

                {/* Right Column: Performance Benchmarks & Outcomes */}
                <div className="lg:col-span-5 bg-surface-container/70 rounded-xl p-space-lg border border-outline-variant/25 flex flex-col justify-between">
                  <div>
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-1">
                      Expected System Metric
                    </span>
                    <div className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-md text-primary">
                      {service.metrics}
                    </div>

                    <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest block mb-space-xs">
                      Primary Client Benefits
                    </span>
                    <ul className="space-y-2 mb-space-md">
                      {service.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-on-surface-variant">
                          <span className="material-symbols-outlined text-secondary text-[16px] mt-0.5">
                            arrow_right
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-space-sm border-t border-outline-variant/20 flex items-center justify-between text-xs text-outline">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        shield
                      </span>
                      100% Client Ownership
                    </span>
                    <span>No Lock-In Contract</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DYNAMIC INTERACTIVE SERVICE QUOTE ESTIMATOR */}
      <section
        id="quote-calculator"
        className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-space-xl bg-surface-container-lowest/80 border-t border-outline-variant/30 relative"
      >
        <div className="max-w-5xl mx-auto rounded-3xl bg-surface-container-high/70 backdrop-blur-2xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-outline-variant/30">
          <div className="text-center max-w-2xl mx-auto mb-space-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label-caps text-label-caps mb-space-xs uppercase border border-secondary/20">
              <span className="material-symbols-outlined text-[14px]">tune</span>
              <span>Interactive Quote Estimator</span>
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface tracking-tight uppercase">
              Configure Your Growth Package
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Select your required capabilities and monthly ad allocation to calculate your customized agency retainer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Inputs */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Service Selection Toggles */}
              <div>
                <label className="font-label-md text-label-md text-on-surface font-semibold block mb-2">
                  1. Select Target Growth Capabilities
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_DATA.map((s) => {
                    const isSelected = calcSelectedServices.includes(s.id);
                    return (
                      <div
                        key={s.id}
                        onClick={() => toggleCalcService(s.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-primary/10 border-primary text-on-surface shadow-[0_0_15px_rgba(160,120,255,0.2)]'
                            : 'bg-surface-container-lowest/60 border-outline-variant/30 text-on-surface-variant hover:border-outline'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className={`material-symbols-outlined text-[20px] ${
                              isSelected ? 'text-primary' : 'text-outline'
                            }`}
                          >
                            {isSelected ? 'check_box' : 'check_box_outline_blank'}
                          </span>
                          <span className="font-label-md text-sm font-medium">{s.title}</span>
                        </div>
                        <span className="font-label-caps text-[10px] text-outline">{s.code}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Ad Budget Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-label-md text-label-md text-on-surface font-semibold">
                    2. Planned Monthly Ad Spend
                  </label>
                  <span className="font-headline-sm text-secondary font-bold">
                    ${monthlyBudget.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="500"
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-xs text-outline mt-1 font-mono">
                  <span>$500</span>
                  <span>$10,000</span>
                  <span>$25,000+</span>
                </div>
              </div>

              {/* Delivery Speed / Mode */}
              <div>
                <label className="font-label-md text-label-md text-on-surface font-semibold block mb-2">
                  3. Deployment Velocity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: '48h', label: '48h Rapid Launch', badge: '+30% Priority' },
                    { id: '14-days', label: '14-Day Sprint', badge: 'Standard Flight' },
                    { id: 'monthly', label: 'Continuous Engine', badge: 'Retainer' },
                  ].map((speed) => (
                    <button
                      key={speed.id}
                      type="button"
                      onClick={() => setDeliverySpeed(speed.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        deliverySpeed === speed.id
                          ? 'bg-secondary/15 border-secondary text-on-surface shadow-sm'
                          : 'bg-surface-container-lowest/60 border-outline-variant/30 text-on-surface-variant hover:border-outline'
                      }`}
                    >
                      <span className="font-label-md text-xs sm:text-sm font-semibold block">
                        {speed.label}
                      </span>
                      <span className="font-label-caps text-[10px] text-outline block mt-0.5">
                        {speed.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 rounded-2xl bg-surface-container-lowest/90 p-6 sm:p-8 border border-outline-variant/30 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-outline-variant/20">
                  <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                    Calculated Estimate
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary font-label-caps text-[10px] font-bold">
                    TRANSPARENT
                  </span>
                </div>

                <div className="mb-4">
                  <div className="font-display-hero text-headline-xl text-primary font-extrabold tracking-tight">
                    ~${getCalculatedEstimate().toLocaleString()}
                    <span className="text-sm font-normal text-on-surface-variant font-sans">
                      {' '}
                      / month
                    </span>
                  </div>
                  <p className="text-xs text-outline mt-1">
                    Includes dedicated strategist, continuous creative drops, and live CAPI dashboard telemetry.
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="font-label-caps text-xs text-secondary uppercase font-semibold block">
                    Selected Package Assets:
                  </span>
                  <ul className="text-xs text-on-surface-variant space-y-1.5">
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        check
                      </span>
                      <span>{calcSelectedServices.length} Selected Strategic Workflows</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        check
                      </span>
                      <span>Estimated Ad Budget: ${monthlyBudget.toLocaleString()}</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[14px] text-secondary">
                        check
                      </span>
                      <span>Zero Long-Term Lock-In (Month-to-Month)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-2">
                <a
                  href={generateWhatsAppQuoteLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md text-sm font-bold shadow-lg hover:shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Dispatch Quote to WhatsApp</span>
                </a>
                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-xs text-center border border-outline-variant/30 transition-all"
                >
                  Or Submit Full Consultation Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <ServiceDetailModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  );
};
