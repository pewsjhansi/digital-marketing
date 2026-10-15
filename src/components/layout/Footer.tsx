import React from 'react';
import { Link } from 'react-router-dom';
import { AGENCY_CONFIG } from '../../config/agencyConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-10 bg-surface-container-lowest border-t border-outline-variant/25 pt-space-xl pb-space-lg">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-gutter-desktop mb-space-xl">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3 mb-space-sm group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-primary-container via-primary to-secondary p-[1px] shadow-[0_0_15px_rgba(160,120,255,0.4)]">
                <div className="w-full h-full bg-surface-container-lowest rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px] text-primary">hub</span>
                </div>
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase font-extrabold group-hover:text-primary transition-colors">
                {AGENCY_CONFIG.name}
              </span>
            </Link>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-md leading-relaxed">
              We turn your vision into digital growth through high-velocity performance, bespoke algorithmic creative, and engineered brand dominance.
            </p>

            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container border border-outline-variant/30 text-secondary font-label-caps text-label-caps">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>Global Digital Growth Engine</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-space-md font-bold">
              Navigation
            </span>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/" className="hover:text-on-surface transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-on-surface transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-on-surface transition-colors">
                  Our Creative Work
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-on-surface transition-colors">
                  Our Results
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-on-surface transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-on-surface transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-on-surface transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-space-md font-bold">
              Services
            </span>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/services" className="hover:text-on-surface transition-colors">
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-on-surface transition-colors">
                  SEO &amp; Local SEO
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-on-surface transition-colors">
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-on-surface transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-on-surface transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-on-surface transition-colors">
                  AI Video Creation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portfolio & Legal */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-space-md font-bold">
              Portfolio &amp; Legal
            </span>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link to="/portfolio" className="hover:text-on-surface transition-colors">
                  Case Studies &amp; Reels
                </Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-on-surface transition-colors">
                  Verified Results
                </Link>
              </li>
              <li>
                <Link to="/legal/privacy" className="hover:text-on-surface transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/legal/terms" className="hover:text-on-surface transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div className="lg:col-span-2 flex flex-col">
            <span className="font-label-caps text-label-caps text-primary uppercase mb-space-md font-bold">
              Direct Contact
            </span>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-xs">
              Reach our strategists directly:
            </p>
            <a
              className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors mb-space-sm break-all"
              href={`mailto:${AGENCY_CONFIG.contactEmail}`}
            >
              {AGENCY_CONFIG.contactEmail}
            </a>

            {/* Direct WhatsApp CTA */}
            <a
              className="inline-flex items-center gap-space-xs px-3.5 py-2 rounded-xl bg-surface-container border border-outline-variant/30 text-secondary hover:border-secondary hover:bg-surface-container-high transition-all mb-space-sm text-xs font-semibold"
              href={AGENCY_CONFIG.whatsapp.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="font-label-sm">{AGENCY_CONFIG.whatsapp.displayNumber}</span>
            </a>

            {/* Configured Instagram CTA */}
            <a
              className="inline-flex items-center gap-space-xs font-label-md text-sm text-on-surface-variant hover:text-secondary transition-colors"
              href={AGENCY_CONFIG.instagramProfileUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">alternate_email</span>
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Transparency Notice */}
        <div className="pt-space-md border-t border-outline-variant/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
          <div className="text-left">
            <p className="font-body-sm text-body-sm text-outline mb-1 max-w-4xl leading-relaxed">
              Transparency Notice: Metrics, campaign telemetry, and video showcases displayed in previews represent calibrated demo environments until client-verified integration is connected.
            </p>
            <p className="font-body-sm text-body-sm text-outline">
              &copy; {currentYear} {AGENCY_CONFIG.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-space-sm shrink-0">
            <span className="font-label-caps text-label-caps text-outline">System Operational</span>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
