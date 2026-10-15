import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { ServiceItem } from '../../config/agencyConfig';
import { AGENCY_CONFIG } from '../../config/agencyConfig';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-service-title"
        className="relative w-full max-w-2xl bg-[#0c0e1a] border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-900/40 z-10 my-8 overflow-hidden"
      >
        {/* Glow ambient background */}
        <div
          className="absolute -top-24 -right-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tag & Title */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          <span>{service.tag}</span>
        </div>

        <h3 id="modal-service-title" className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
          {service.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          {service.fullDescription}
        </p>

        {/* Deliverables */}
        <div className="mb-6">
          <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-purple-400 mb-3">
            What is Included &amp; Deliverables
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Business Benefits */}
        <div className="mb-6 bg-slate-900/60 rounded-xl p-4 border border-white/5">
          <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-slate-300 mb-2">
            Key Growth Outcomes
          </h4>
          <ul className="space-y-1.5">
            {service.benefits.map((benefit, idx) => (
              <li key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-medium">Expected Benchmark:</span>
            <span className="font-mono font-semibold text-purple-300">{service.metrics}</span>
          </div>
        </div>

        {/* Modal CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link
            to={`/contact?service=${encodeURIComponent(service.id)}`}
            onClick={onClose}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 transition-all"
          >
            <span>Get a Quote for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={`${AGENCY_CONFIG.whatsapp.link}&text=${encodeURIComponent(`Hello, I would like to get a quote and details for ${service.title}.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 font-medium text-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
