import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, PhoneCall } from 'lucide-react';
import { AGENCY_CONFIG } from '../../config/agencyConfig';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Scale Your Digital Growth?',
  subtitle = 'Schedule a complimentary 30-minute growth audit with our senior marketing team. We examine your current ad funnels, search presence, and creative performance.',
  primaryButtonText = 'Get Free Consultation',
  primaryButtonLink = '/contact',
}) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden border border-purple-500/30 bg-gradient-to-br from-[#121324] via-[#0d0f1e] to-[#16122c] shadow-2xl shadow-purple-950/50">
          {/* Ambient glowing radial orbs */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-purple-600/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-600/25 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/25">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Direct Strategy &bull; Zero Fluff</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={primaryButtonLink}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-heading font-bold text-base text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:via-fuchsia-500 hover:to-indigo-500 shadow-xl shadow-purple-600/35 transition-all hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <span>{primaryButtonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={AGENCY_CONFIG.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-heading font-semibold text-sm text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Instant WhatsApp: {AGENCY_CONFIG.whatsapp.displayNumber}</span>
              </a>
            </div>

            <div className="pt-2 flex items-center justify-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-purple-400" />
                <span>Direct Callback Available</span>
              </div>
              <span className="text-slate-700">&bull;</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Tailored Marketing Roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
