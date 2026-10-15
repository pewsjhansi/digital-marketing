import React from 'react';
import { Play, Eye, Clock, Sparkles } from 'lucide-react';
import type { PortfolioVideo } from '../../config/agencyConfig';

interface VideoCardProps {
  video: PortfolioVideo;
  onSelect: (video: PortfolioVideo) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(video)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[9/16] bg-slate-900 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-950/60 hover:-translate-y-1.5 flex flex-col justify-between"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(video);
        }
      }}
      aria-label={`Play Reel: ${video.title}`}
    >
      {/* Background Poster Image */}
      <img
        src={video.thumbnailUrl}
        alt={video.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
      />

      {/* Atmospheric dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/60 pointer-events-none" />

      {/* Top Header info: Category & Client Type */}
      <div className="relative z-10 p-4 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-purple-300 border border-purple-500/30">
          <Sparkles className="w-3 h-3 text-purple-400" />
          <span>{video.category}</span>
        </span>

        <span className="text-[10px] font-mono text-slate-300 bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/5 flex items-center gap-1">
          <Clock className="w-2.5 h-2.5" />
          <span>{video.duration}</span>
        </span>
      </div>

      {/* Center Play Button with hover glow */}
      <div className="relative z-10 flex items-center justify-center pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-purple-600/80 backdrop-blur-md border border-purple-400/50 flex items-center justify-center text-white shadow-xl shadow-purple-600/40 transition-transform duration-300 group-hover:scale-115 group-hover:bg-purple-500">
          <Play className="w-6 h-6 ml-1 text-white fill-current" />
        </div>
      </div>

      {/* Bottom Content: Title, Description, Stats */}
      <div className="relative z-10 p-4 pt-0 space-y-1.5">
        <div className="flex items-center gap-2 text-[11px] text-purple-300 font-mono">
          <Eye className="w-3 h-3" />
          <span>{video.stats}</span>
          <span className="text-slate-500">&bull;</span>
          <span className="text-slate-400 truncate">{video.badge}</span>
        </div>

        <h3 className="font-heading font-bold text-base text-white group-hover:text-purple-300 transition-colors leading-snug">
          {video.title}
        </h3>

        <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  );
};
