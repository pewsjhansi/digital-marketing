import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Info, CheckCircle } from 'lucide-react';
import type { ServiceItem } from '../../config/agencyConfig';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenDetails: (service: ServiceItem) => void;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenDetails, index }) => {

  return (
    <div
      id={service.id}
      className="group relative rounded-2xl glass-panel p-6 sm:p-7 transition-all duration-300 hover:border-purple-500/40 hover:bg-[#121528]/80 hover:shadow-2xl hover:shadow-purple-900/30 flex flex-col justify-between"
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      {/* Top Accent Gradient Line */}
      <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent group-hover:via-purple-400 transition-all duration-500" />

      <div>
        {/* Header: Icon & Category Tag */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center p-3 shadow-inner group-hover:scale-110 group-hover:border-purple-500/30 transition-transform duration-300">
            <span className="material-symbols-outlined text-2xl text-purple-400">
              {service.iconName}
            </span>
          </div>
          <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
            {service.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading font-bold text-xl text-white group-hover:text-purple-300 transition-colors mb-2.5">
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Deliverables snippet pills */}
        <div className="space-y-1.5 mb-6">
          {service.deliverables.slice(0, 2).map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions: View Details & Get a Quote */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
        <button
          onClick={() => onOpenDetails(service)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
          aria-label={`View details for ${service.title}`}
        >
          <Info className="w-3.5 h-3.5 text-purple-400" />
          <span>View Details</span>
        </button>

        <Link
          to={`/contact?service=${encodeURIComponent(service.id)}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 py-2 px-4 rounded-xl shadow-md shadow-purple-600/20 hover:shadow-purple-600/40 transition-all hover:scale-105"
        >
          <span>Get a Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
