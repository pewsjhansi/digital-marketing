import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldCheck, FileText, ArrowLeft, Lock } from 'lucide-react';
import { AGENCY_CONFIG } from '../config/agencyConfig';

export const LegalPage: React.FC = () => {
  const { docType } = useParams<{ docType: string }>();
  const isPrivacy = docType !== 'terms';

  return (
    <div className="relative pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>

        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-white/10 space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
              {isPrivacy ? <Lock className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block">
                Legal &amp; Compliance Standards
              </span>
              <h1 className="font-heading font-black text-2xl sm:text-3xl text-white">
                {isPrivacy ? 'Privacy Policy & Data Protection' : 'Terms & Conditions of Service'}
              </h1>
            </div>
          </div>

          <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-6">
            {isPrivacy ? (
              <>
                <p>
                  At <strong>{AGENCY_CONFIG.name}</strong>, accessible via our web application and communication channels, one of our main priorities is the privacy of our visitors and clients. This Privacy Policy document outlines the types of information collected and how we safeguard it.
                </p>

                <h3 className="font-heading font-bold text-lg text-white">1. Information We Collect</h3>
                <p>
                  When you request a free consultation or contact us via WhatsApp, we collect information you voluntarily provide, including:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-400">
                  <li>Full Name and business identification</li>
                  <li>Business Email address and telephone number</li>
                  <li>Website URL and advertising budget expectations</li>
                  <li>Project scope details and preferred contact channels</li>
                </ul>

                <h3 className="font-heading font-bold text-lg text-white">2. Transparent Reporting &amp; Data Integrity</h3>
                <p>
                  We adhere strictly to transparent reporting standards. We never sell, rent, or trade client commercial data, ad creative assets, or proprietary campaign analytics to third parties. All ad accounts and analytics assets managed by {AGENCY_CONFIG.name} remain 100% client property.
                </p>

                <h3 className="font-heading font-bold text-lg text-white">3. Third-Party Integrations</h3>
                <p>
                  Our services integrate with Meta (Facebook/Instagram), Google Marketing Platform (Google Ads, Google Analytics 4, Google Business Profile), and WhatsApp. Communication initiated via WhatsApp is subject to Meta's end-to-end encryption protocols.
                </p>

                <h3 className="font-heading font-bold text-lg text-white">4. Contacting Our Data Officer</h3>
                <p>
                  If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our team at{' '}
                  <a href={`mailto:${AGENCY_CONFIG.contactEmail}`} className="text-purple-400 hover:underline">
                    {AGENCY_CONFIG.contactEmail}
                  </a>.
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to <strong>{AGENCY_CONFIG.name}</strong>. By accessing our website, booking consultations, or engaging our digital marketing services, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <h3 className="font-heading font-bold text-lg text-white">1. Scope of Services</h3>
                <p>
                  {AGENCY_CONFIG.name} provides professional digital marketing disciplines including Meta Ads management, SEO &amp; Local SEO, Google Business Profile optimization, bespoke Website Development, Social Media Marketing, and AI Video Creation. Specific deliverables, KPI benchmarks, and fee structures are governed by individual client service agreements.
                </p>

                <h3 className="font-heading font-bold text-lg text-white">2. Verified Reporting Standard</h3>
                <p>
                  In accordance with our strict data integrity policy, all campaign performance metrics displayed in client reporting portals reflect verified third-party telemetry. Development demo data is explicitly labeled as such.
                </p>

                <h3 className="font-heading font-bold text-lg text-white">3. Intellectual Property</h3>
                <p>
                  Upon full settlement of agreed service invoices, all bespoke creatives, video edits, and website code created for the client become the intellectual property of the client, unless otherwise specified in written agreements.
                </p>

                <h3 className="font-heading font-bold text-lg text-white">4. Inquiries &amp; Consultations</h3>
                <p>
                  Initial 30-minute consultations are offered free of charge with zero obligation. Inquiries submitted via our consultation form or WhatsApp are handled with utmost confidentiality.
                </p>
              </>
            )}
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Last Updated: October 2026</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Agency Standard</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
