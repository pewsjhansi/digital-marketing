import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { AGENCY_CONFIG } from '../config/agencyConfig';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [brandName, setBrandName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService
      ? [preselectedService]
      : ['Meta Ads', 'SEO & Local Search']
  );
  const [budget, setBudget] = useState('$5k - $15k');
  const [projectDetails, setProjectDetails] = useState('');
  const [contactMethod, setContactMethod] = useState<'WhatsApp' | 'Phone' | 'Email' | 'Google Meet'>('WhatsApp');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dispatchId, setDispatchId] = useState('');

  const serviceOptions = [
    'Meta Ads',
    'SEO & Local Search',
    'Google Business Profile',
    'Website Development',
    'Social Media Marketing',
    'AI Video Media',
  ];

  const budgetOptions = [
    '$1k - $5k',
    '$5k - $15k',
    '$15k - $50k',
    '$50k+',
  ];

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate authentic API submission delay
    setTimeout(() => {
      const generatedId = `DM-${Math.floor(100000 + Math.random() * 900000)}`;
      setDispatchId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#a078ff', '#4cd7f6', '#adc6ff', '#ffffff'],
        });
      } catch {
        // Fallback gracefully if canvas-confetti is not loaded
      }
    }, 1200);
  };

  return (
    <div className="flex flex-col w-full relative z-10">
      {/* SECTION 1: EDITORIAL HEADER & TELEMETRY STRIP */}
      <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 pt-space-md pb-space-lg overflow-hidden">
        <div className="pointer-events-none absolute -top-16 left-1/4 w-96 h-96 bg-primary-container/15 blur-[120px] rounded-full" />
        <div className="pointer-events-none absolute top-12 right-1/4 w-[28rem] h-[28rem] bg-secondary-container/10 blur-[130px] rounded-full" />

        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high/70 backdrop-blur-md shadow-sm mb-space-md border border-outline-variant/30">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
              FREE STRATEGY CONSULTATION • 48-HOUR GROWTH AUDIT
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display-hero text-display-hero tracking-tighter text-on-surface max-w-4xl mx-auto mb-space-sm uppercase">
            LET'S GROW YOUR{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary-container bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(160,120,255,0.4)]">
              BUSINESS
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-body-xl text-body-xl text-on-surface-variant max-w-2xl mx-auto mb-space-lg leading-relaxed">
            Get an uncompromising, data-backed consultation and uncover how algorithmic marketing scales your unit economics and outpaces competitors.
          </p>

          {/* Reassurance Badges */}
          <div className="w-full max-w-3xl flex flex-wrap items-center justify-center gap-space-sm sm:gap-space-md">
            <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
              <span className="font-label-md text-label-md text-on-surface">Zero Sales Pressure</span>
            </div>
            <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-primary text-[18px]">lock</span>
              <span className="font-label-md text-label-md text-on-surface">100% Confidential NDA</span>
            </div>
            <div className="flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-low shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary-fixed text-[18px]">bolt</span>
              <span className="font-label-md text-label-md text-on-surface">Actionable Blueprint in 48h</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE TWO-COLUMN INTERACTION GRID */}
      <section className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 pb-space-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-gutter-desktop items-start">
          {/* LEFT COLUMN: HIGH-FIDELITY GROWTH AUDIT FORM */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative rounded-2xl bg-surface-container-low/90 backdrop-blur-2xl p-space-md md:p-space-lg shadow-xl overflow-hidden flex flex-col justify-between border border-outline-variant/30">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-container via-secondary to-primary-container" />

              <div>
                {/* Form Header */}
                <div className="flex items-start justify-between gap-space-sm mb-space-md">
                  <div>
                    <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-space-xs font-semibold">
                      AUDIT DISPATCH PROTOCOL
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface">
                      Request Your Free Growth Strategy Audit
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
                      Tell us about your brand and growth milestones. Our senior performance strategists dissect your funnels, pixel tracking, and acquisition economics.
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-col items-end shrink-0">
                    <span className="px-space-xs py-1 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm uppercase tracking-wider border border-outline-variant/30">
                      SLOTS: 3 LEFT TODAY
                    </span>
                  </div>
                </div>

                {/* The Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
                  {/* Grid Row: Full Name + Business Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="full-name"
                          className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1"
                        >
                          Full Name <span className="text-secondary">*</span>
                        </label>
                        <span className="font-label-sm text-label-sm text-outline">Lead Architect</span>
                      </div>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-outline-variant text-[20px] pointer-events-none">
                          person
                        </span>
                        <input
                          id="full-name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Alexander Vance"
                          className="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border border-outline-variant/30 shadow-inner font-body-md text-body-md"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="business-email"
                          className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1"
                        >
                          Business Email <span className="text-secondary">*</span>
                        </label>
                        <span className="font-label-sm text-label-sm text-outline">Work address</span>
                      </div>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-outline-variant text-[20px] pointer-events-none">
                          alternate_email
                        </span>
                        <input
                          id="business-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="alexander@company.com"
                          className="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border border-outline-variant/30 shadow-inner font-body-md text-body-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Grid Row: Phone Number + Brand Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                    <div className="flex flex-col gap-space-xs">
                      <label
                        htmlFor="phone-number"
                        className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1"
                      >
                        Phone / WhatsApp <span className="text-secondary">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <select
                          aria-label="Country dial code"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="bg-surface-container-lowest/80 text-on-surface px-3 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary font-label-md text-label-md border border-outline-variant/30 cursor-pointer"
                        >
                          <option value="+91">+91 (IN)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+971">+971 (AE)</option>
                          <option value="+65">+65 (SG)</option>
                          <option value="+61">+61 (AU)</option>
                        </select>
                        <div className="relative flex items-center flex-1">
                          <span className="material-symbols-outlined absolute left-3 text-outline-variant text-[20px] pointer-events-none">
                            call
                          </span>
                          <input
                            id="phone-number"
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="93058 56475"
                            className="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border border-outline-variant/30 shadow-inner font-body-md text-body-md"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="brand-name"
                          className="font-label-md text-label-md text-on-surface font-semibold"
                        >
                          Brand / Company Name
                        </label>
                        <span className="font-label-sm text-label-sm text-outline">Optional</span>
                      </div>
                      <div className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-3 text-outline-variant text-[20px] pointer-events-none">
                          domain
                        </span>
                        <input
                          id="brand-name"
                          type="text"
                          value={brandName}
                          onChange={(e) => setBrandName(e.target.value)}
                          placeholder="Apex Global Ltd"
                          className="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border border-outline-variant/30 shadow-inner font-body-md text-body-md"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Website URL */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="website-url"
                        className="font-label-md text-label-md text-on-surface font-semibold"
                      >
                        Current Website or Store URL
                      </label>
                      <span className="font-label-sm text-label-sm text-outline">
                        Helps our automated crawler audit your pages
                      </span>
                    </div>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-outline-variant text-[20px] pointer-events-none">
                        language
                      </span>
                      <input
                        id="website-url"
                        type="url"
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://yourbrand.com"
                        className="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border border-outline-variant/30 shadow-inner font-body-md text-body-md"
                      />
                    </div>
                  </div>

                  {/* Services Multi-select */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-label-md text-label-md text-on-surface font-semibold">
                        Target Growth Vectors (Select all that apply)
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary">Multi-select</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-1">
                      {serviceOptions.map((srv) => {
                        const isChecked = selectedServices.includes(srv);
                        return (
                          <div
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-all select-none ${
                              isChecked
                                ? 'bg-primary/10 border-primary text-on-surface shadow-sm'
                                : 'bg-surface-container-lowest/60 border-outline-variant/30 text-on-surface-variant hover:border-outline'
                            }`}
                          >
                            <span
                              className={`material-symbols-outlined text-[18px] ${
                                isChecked ? 'text-primary' : 'text-outline'
                              }`}
                            >
                              {isChecked ? 'check_box' : 'check_box_outline_blank'}
                            </span>
                            <span className="font-label-sm text-xs font-medium">{srv}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Options */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Approximate Monthly Marketing Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`py-2 px-3 rounded-lg border text-xs font-label-md font-semibold transition-all cursor-pointer ${
                            budget === b
                              ? 'bg-secondary/15 border-secondary text-on-surface shadow-sm'
                              : 'bg-surface-container-lowest/60 border-outline-variant/30 text-on-surface-variant hover:border-outline'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col gap-space-xs">
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="project-details"
                        className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1"
                      >
                        Project Details / Core Bottlenecks <span className="text-secondary">*</span>
                      </label>
                      <span className="font-label-sm text-label-sm text-outline">Required</span>
                    </div>
                    <textarea
                      id="project-details"
                      required
                      rows={4}
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      placeholder="Share your current CAC, conversion goals, target markets, or current campaign frustrations..."
                      className="w-full bg-surface-container-lowest/80 text-on-surface placeholder:text-outline p-4 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border border-outline-variant/30 shadow-inner font-body-md text-body-md leading-relaxed"
                    />
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="flex flex-col gap-space-xs">
                    <label className="font-label-md text-label-md text-on-surface font-semibold">
                      Preferred Channel for Strategy Delivery
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {(['WhatsApp', 'Phone', 'Email', 'Google Meet'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setContactMethod(method)}
                          className={`py-2 px-3 rounded-lg border text-xs font-label-md font-medium transition-all cursor-pointer ${
                            contactMethod === method
                              ? 'bg-primary/20 border-primary text-on-surface shadow-sm font-bold'
                              : 'bg-surface-container-lowest/60 border-outline-variant/30 text-on-surface-variant hover:border-outline'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-headline-sm text-headline-sm tracking-tight font-extrabold shadow-[0_0_35px_rgba(160,120,255,0.45)] hover:shadow-[0_0_50px_rgba(76,215,246,0.65)] hover:scale-[1.01] active:scale-98 transition-all duration-300 mt-2 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-surface-container-lowest border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting to Growth Strategists...</span>
                      </>
                    ) : (
                      <>
                        <span>GET FREE CONSULTATION</span>
                        <span className="material-symbols-outlined text-[20px]">send</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FAST RESPONSE CHANNELS & PROTOCOL */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Primary Direct WhatsApp CTA Card */}
            <div className="rounded-2xl bg-surface-container-low/90 backdrop-blur-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary font-label-caps text-label-caps mb-4 uppercase font-bold border border-secondary/20">
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                <span>Immediate Engagement</span>
              </div>
              <h3 className="font-headline-md text-xl text-on-surface mb-2 font-bold">
                Direct WhatsApp Channel
              </h3>
              <p className="font-body-sm text-on-surface-variant mb-6 leading-relaxed">
                Connect directly with our senior growth partners. No gatekeepers, automated ticket queues, or sales friction.
              </p>

              <a
                href={AGENCY_CONFIG.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-surface-container-high hover:bg-surface-variant text-secondary hover:text-on-surface border border-outline-variant/30 hover:border-secondary shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 font-headline-sm text-base font-bold text-center"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>Chat on WhatsApp ({AGENCY_CONFIG.whatsapp.displayNumber})</span>
              </a>

              <p className="text-xs text-outline mt-3 text-center">
                Pre-configured message: "{AGENCY_CONFIG.whatsapp.prefilledMessage}"
              </p>
            </div>

            {/* Configured Instagram Channel */}
            <div className="rounded-2xl bg-surface-container-low/90 backdrop-blur-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-headline-sm text-lg text-on-surface font-semibold">
                  Official Instagram Studio
                </h4>
                <span className="material-symbols-outlined text-primary text-2xl">
                  alternate_email
                </span>
              </div>
              <p className="font-body-sm text-on-surface-variant mb-4 leading-relaxed">
                Explore behind-the-scenes video breakdowns, algorithmic case studies, and creative motion drops.
              </p>
              <a
                href={AGENCY_CONFIG.instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary text-on-surface font-label-md text-sm transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">
                  photo_camera
                </span>
                <span>Follow us on Instagram</span>
              </a>
            </div>

            {/* 48-Hour Protocol SLA Roadmap */}
            <div className="rounded-2xl bg-surface-container-low/90 backdrop-blur-2xl p-6 sm:p-8 border border-outline-variant/30 shadow-xl">
              <span className="font-label-caps text-xs text-secondary uppercase font-bold tracking-wider block mb-4">
                What Happens Next (48h Protocol)
              </span>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h5 className="font-headline-sm text-sm text-on-surface font-semibold">
                      Hours 0 – 2: Intake &amp; SERP Crawler Scan
                    </h5>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Our system verifies your web domain, pixel configurations, and competitive whitespace.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h5 className="font-headline-sm text-sm text-on-surface font-semibold">
                      Hours 2 – 24: Deep Telemetry Audit
                    </h5>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      Senior strategist evaluates historical CAC benchmarks, creative fatigue rates, and SEO indexation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h5 className="font-headline-sm text-sm text-on-surface font-semibold">
                      Hours 24 – 48: Blueprint Delivery
                    </h5>
                    <p className="text-xs text-on-surface-variant mt-0.5">
                      We dispatch your comprehensive video &amp; growth architecture via your preferred channel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL UPON SUBMISSION */}
      {isSubmitted && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in"
        >
          <div className="relative w-full max-w-lg rounded-3xl bg-surface-container-high p-8 text-center border border-primary/40 shadow-2xl shadow-primary/30">
            <div className="w-16 h-16 rounded-full bg-primary/20 text-primary mx-auto mb-4 flex items-center justify-center">
              <span className="material-symbols-outlined text-[36px]">check_circle</span>
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-surface-container-lowest text-xs font-mono text-secondary mb-3 border border-outline-variant/30">
              DISPATCH ID: {dispatchId}
            </div>
            <h3 className="font-headline-lg text-2xl text-on-surface mb-2 font-bold">
              Consultation Request Confirmed
            </h3>
            <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">
              Thank you, <strong className="text-on-surface">{fullName}</strong>. Your audit brief has been ingested into our strategic queue. A growth architect will review your funnels and contact you via <strong className="text-secondary">{contactMethod}</strong> within the sub-2 hour dispatch window.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={AGENCY_CONFIG.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md text-sm font-bold shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Send WhatsApp Followup</span>
              </a>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 rounded-full bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-sm border border-outline-variant/30 transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
