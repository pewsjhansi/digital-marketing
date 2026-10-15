import React from 'react';
import {
  Users,
  Eye,
  TrendingUp,
  Globe,
  MousePointerClick,
  Percent,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react';
import type { CampaignResult } from '../../config/agencyConfig';

interface ResultsMetricCardProps {
  result: CampaignResult;
}

export const ResultsMetricCard: React.FC<ResultsMetricCardProps> = ({ result }) => {
  return (
    <div className="relative rounded-2xl glass-panel p-6 sm:p-7 border border-white/10 hover:border-purple-500/40 transition-all duration-300">
      {/* Top Banner: Verification Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-4 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 mr-2">
            {result.platform}
          </span>
          <span className="text-xs font-mono text-slate-400">
            {result.period}
          </span>
        </div>

        {result.isDemo ? (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-[10px] font-mono font-bold tracking-wider">
            <AlertTriangle className="w-3 h-3 text-amber-400" />
            <span>DEMO — NOT ACTUAL CLIENT RESULTS</span>
          </div>
        ) : result.isVerified ? (
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-bold">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>VERIFIED CLIENT DATA</span>
          </div>
        ) : null}
      </div>

      {/* Campaign Title */}
      <h3 className="font-heading font-bold text-xl text-white mb-5">
        {result.campaignName}
      </h3>

      {/* 6 Required Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-5">
        {/* Metric 1: Leads Generated */}
        <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
            <Users className="w-3.5 h-3.5 text-purple-400" />
            <span>Leads Generated</span>
          </div>
          <div className="font-mono font-bold text-xl sm:text-2xl text-white">
            {result.metrics.leadsGenerated.toLocaleString()}
          </div>
        </div>

        {/* Metric 2: Total Reach */}
        <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
            <Eye className="w-3.5 h-3.5 text-blue-400" />
            <span>Total Reach</span>
          </div>
          <div className="font-mono font-bold text-xl sm:text-2xl text-blue-300">
            {result.metrics.totalReach}
          </div>
        </div>

        {/* Metric 3: Engagement */}
        <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
            <TrendingUp className="w-3.5 h-3.5 text-pink-400" />
            <span>Engagement</span>
          </div>
          <div className="font-mono font-bold text-xl sm:text-2xl text-pink-300">
            {result.metrics.engagementRate}
          </div>
        </div>

        {/* Metric 4: Website Visitors */}
        <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
            <span>Website Visitors</span>
          </div>
          <div className="font-mono font-bold text-xl sm:text-2xl text-emerald-300">
            {result.metrics.websiteVisitors.toLocaleString()}
          </div>
        </div>

        {/* Metric 5: Ad Clicks */}
        <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
            <MousePointerClick className="w-3.5 h-3.5 text-indigo-400" />
            <span>Ad Clicks</span>
          </div>
          <div className="font-mono font-bold text-xl sm:text-2xl text-indigo-300">
            {result.metrics.adClicks.toLocaleString()}
          </div>
        </div>

        {/* Metric 6: Conversion Rate */}
        <div className="bg-slate-900/60 p-3.5 rounded-xl border border-white/5">
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
            <Percent className="w-3.5 h-3.5 text-amber-400" />
            <span>Conversion Rate</span>
          </div>
          <div className="font-mono font-bold text-xl sm:text-2xl text-amber-300">
            {result.metrics.conversionRate}
          </div>
        </div>
      </div>

      {/* Note / Evidence */}
      {result.evidenceNote && (
        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
          <span className="italic">{result.evidenceNote}</span>
          <span className="font-mono text-[11px] text-purple-400">
            ROAS: {result.metrics.roas}
          </span>
        </div>
      )}
    </div>
  );
};
