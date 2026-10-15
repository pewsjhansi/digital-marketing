import React, { useState } from 'react';
import { VideoPlayerModal } from '../components/portfolio/VideoPlayerModal';
import { PORTFOLIO_VIDEOS, type PortfolioVideo, AGENCY_CONFIG } from '../config/agencyConfig';

export const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedVideo, setSelectedVideo] = useState<PortfolioVideo | null>(null);

  const categories = [
    { id: 'all', label: 'All Works (12)' },
    { id: 'AI Generated Videos', label: 'AI Videos (4)' },
    { id: 'Promotional Videos', label: 'Promotional (2)' },
    { id: 'Product Advertisements', label: 'Product Ads (3)' },
    { id: 'Business Reels', label: 'Business Reels (2)' },
    { id: 'Social Media Creatives', label: 'Social Media Creatives (2)' },
  ];

  const filteredVideos =
    activeCategory === 'all'
      ? PORTFOLIO_VIDEOS
      : PORTFOLIO_VIDEOS.filter((v) => v.category === activeCategory);

  const featuredVideo = PORTFOLIO_VIDEOS.find((v) => v.id === 'reel-featured') || PORTFOLIO_VIDEOS[0];

  return (
    <div className="flex flex-col w-full relative z-10">
      {/* Top Ambient Glow Field */}
      <div className="relative w-full overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 pt-space-xl pb-space-lg">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-[radial-gradient(ellipse_at_center,_rgba(160,120,255,0.18)_0%,_rgba(76,215,246,0.08)_45%,_transparent_75%)] blur-[100px]" />

        {/* Header & Hero Intro */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-container-high/70 backdrop-blur-md shadow-sm mb-space-md border border-outline-variant/30">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
              VISUAL PRODUCTION STUDIO • TIER-1 CINEMATIC ASSETS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display-hero text-headline-xl md:text-display-hero tracking-tight text-on-surface mb-space-sm uppercase">
            OUR CREATIVE{' '}
            <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
              WORK
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="font-body-xl text-body-lg md:text-body-xl text-on-surface-variant max-w-2xl mb-space-lg leading-relaxed">
            Creative ideas. Powerful videos. Content that makes brands stand out.
          </p>

          {/* CTA Buttons Bar */}
          <div className="flex flex-wrap items-center justify-center gap-space-sm mb-space-xl">
            <a
              href="#portfolio-grid"
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md text-label-md font-bold shadow-xl hover:shadow-[0_0_35px_rgba(76,215,246,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span className="material-symbols-outlined text-[20px]">movie_edit</span>
              <span>Commission Custom Assets</span>
            </a>
            <a
              className="inline-flex items-center gap-space-xs px-space-lg py-space-sm rounded-full bg-surface-container-high/80 hover:bg-surface-variant text-secondary font-label-md text-label-md font-semibold transition-all shadow-sm border border-outline-variant/30"
              href={AGENCY_CONFIG.whatsapp.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[20px]">chat</span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Telemetry Bar */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-space-sm p-space-sm rounded-xl bg-surface-container-low/80 backdrop-blur-xl shadow-lg border border-outline-variant/30">
            <div className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container/60 border border-outline-variant/20">
              <span className="font-label-caps text-label-caps text-outline uppercase">
                Turnaround Time
              </span>
              <span className="font-headline-sm text-headline-sm text-secondary mt-space-xs">
                &lt; 4 Hours
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container/60 border border-outline-variant/20">
              <span className="font-label-caps text-label-caps text-outline uppercase">
                Master Formats
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface mt-space-xs">
                9:16 &amp; 16:9 4K
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container/60 border border-outline-variant/20">
              <span className="font-label-caps text-label-caps text-outline uppercase">
                Render Engine
              </span>
              <span className="font-headline-sm text-headline-sm text-primary mt-space-xs">
                AI + Motion VFX
              </span>
            </div>
            <div className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container/60 border border-outline-variant/20">
              <span className="font-label-caps text-label-caps text-outline uppercase">
                Render Queue
              </span>
              <span className="font-headline-sm text-headline-sm text-secondary-container mt-space-xs flex items-center gap-space-xs">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                8 Active Pipelines
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Hero Cinematic Spotlight (16:9 Landscape) */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-space-lg">
        <div className="relative w-full rounded-2xl overflow-hidden bg-surface-container-low shadow-xl group border border-outline-variant/30">
          <div
            className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[380px] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url('${featuredVideo.thumbnailUrl}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest/90 via-surface-container-lowest/30 to-transparent" />

            {/* Badges */}
            <div className="absolute top-space-md left-space-md flex flex-wrap items-center gap-space-xs z-10">
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-lowest/80 backdrop-blur-md font-label-caps text-label-caps text-primary shadow-sm flex items-center gap-space-xs border border-primary/30">
                <span className="material-symbols-outlined text-[14px]">stars</span>
                FEATURED STUDIO SHOWPIECE
              </span>
              <span className="px-space-sm py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-md font-label-caps text-label-caps text-secondary shadow-sm">
                4K ANAMORPHIC
              </span>
            </div>

            <div className="absolute top-space-md right-space-md z-10">
              <span className="px-space-sm py-space-xs rounded-full bg-primary/20 text-primary backdrop-blur-md font-label-caps text-label-caps font-bold shadow-sm border border-primary/30">
                DEMO BENCHMARK • SIMULATED METRIC
              </span>
            </div>

            {/* Soundwave Strip */}
            <div className="absolute bottom-space-xl right-space-md hidden md:flex items-end gap-1 h-12 px-space-md py-space-xs rounded-xl bg-surface-container-lowest/70 backdrop-blur-md z-10 border border-outline-variant/20">
              <span className="w-1 bg-secondary rounded-full h-3 animate-pulse" />
              <span className="w-1 bg-primary rounded-full h-8 animate-pulse" style={{ animationDelay: '150ms' }} />
              <span className="w-1 bg-secondary rounded-full h-5 animate-pulse" style={{ animationDelay: '300ms' }} />
              <span className="w-1 bg-primary-container rounded-full h-10 animate-pulse" style={{ animationDelay: '75ms' }} />
              <span className="w-1 bg-secondary rounded-full h-6 animate-pulse" style={{ animationDelay: '200ms' }} />
              <span className="w-1 bg-primary rounded-full h-4 animate-pulse" style={{ animationDelay: '250ms' }} />
              <span className="font-label-sm text-label-sm text-on-surface-variant ml-2 self-center">
                Spatial Stereo 60fps
              </span>
            </div>

            {/* Glowing Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <button
                aria-label="Play Featured Video"
                onClick={() => setSelectedVideo(featuredVideo)}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-primary-container to-secondary flex items-center justify-center text-on-primary-container shadow-[0_0_40px_rgba(160,120,255,0.65)] hover:scale-110 active:scale-95 transition-all duration-300 group-hover:shadow-[0_0_60px_rgba(76,215,246,0.8)] cursor-pointer"
              >
                <span className="material-symbols-outlined text-[40px] md:text-[48px]">
                  play_arrow
                </span>
              </button>
            </div>

            {/* Bottom Meta */}
            <div className="absolute bottom-0 left-0 w-full p-space-md md:p-space-xl flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md z-10">
              <div className="max-w-xl">
                <div className="flex items-center gap-space-xs mb-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  <span>Duration: {featuredVideo.duration}</span>
                  <span>•</span>
                  <span>Director's Cut</span>
                  <span>•</span>
                  <span className="text-tertiary">{featuredVideo.stats}</span>
                </div>
                <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface tracking-tight leading-tight">
                  {featuredVideo.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs line-clamp-2">
                  {featuredVideo.description}
                </p>
              </div>
              <div className="flex items-center gap-space-sm shrink-0">
                <button
                  onClick={() => setSelectedVideo(featuredVideo)}
                  className="px-space-md py-space-xs rounded-full bg-primary-container text-on-primary-container font-label-md text-label-md font-bold shadow-md hover:bg-primary transition-all cursor-pointer"
                >
                  Launch Studio Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Navigation */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-space-md">
        <div className="flex items-center justify-between flex-wrap gap-space-sm">
          <div className="flex items-center gap-space-xs overflow-x-auto py-space-xs no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-space-md py-space-xs rounded-full font-label-md text-label-md transition-all shrink-0 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm'
                    : 'bg-surface-container-high/80 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-highest'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-space-xs font-label-caps text-label-caps text-outline">
            <span className="material-symbols-outlined text-[16px] text-secondary">view_quilt</span>
            <span>Curated Creative Archive • Click Any Reel To Stream</span>
          </div>
        </div>
      </section>

      {/* Portfolio Responsive Grid */}
      <section id="portfolio-grid" className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-space-md pb-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="flex flex-col rounded-2xl bg-surface-container-low shadow-lg overflow-hidden group hover:translate-y-[-4px] transition-all duration-300 border border-outline-variant/30 cursor-pointer"
            >
              <div
                className={`relative w-full ${
                  video.aspectRatio === '16:9' ? 'aspect-[16/9]' : 'aspect-[9/16]'
                } bg-cover bg-center overflow-hidden`}
                style={{ backgroundImage: `url('${video.thumbnailUrl}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/40" />

                {/* Badges */}
                <div className="absolute top-space-sm left-space-sm right-space-sm flex items-center justify-between">
                  <span className="px-space-xs py-0.5 rounded-full bg-primary/20 backdrop-blur-md text-primary font-label-caps text-label-caps border border-primary/30">
                    {video.badge}
                  </span>
                  <span className="px-space-xs py-0.5 rounded-full bg-surface-container-lowest/80 text-secondary font-label-caps text-label-caps font-bold">
                    {video.resolution} • {video.duration}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-surface-container-highest/80 backdrop-blur-md group-hover:bg-primary-container text-on-surface group-hover:text-on-primary-container flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110 pointer-events-none">
                  <span className="material-symbols-outlined text-[32px]">play_arrow</span>
                </div>

                {/* Watermark Details */}
                <div className="absolute bottom-space-md left-space-sm right-space-sm">
                  <span className="inline-block px-space-xs py-0.5 rounded bg-surface-container-lowest/90 font-label-caps text-[10px] text-outline mb-space-xs">
                    DEMO ASSET • NOT REAL CLIENT WORK
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Strip */}
              <div className="p-space-sm flex items-center justify-between bg-surface-container border-t border-outline-variant/20">
                <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">trending_up</span>
                  <span>{video.stats}</span>
                </span>
                <span className="font-label-sm text-label-sm text-primary group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                  <span>Preview</span>
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal Player */}
      <VideoPlayerModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
};
