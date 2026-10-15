import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS_DATA } from '../config/agencyConfig';

export const InsightsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Dispatches' },
    { id: 'Meta Ads', label: 'Meta Ads (Advantage+ & CAPI)' },
    { id: 'SEO & Local SEO', label: 'SEO & Local SEO (Semantic & Entity Indexing)' },
    { id: 'Google Business Profile', label: 'Google Business Profile (Map Pack Signals)' },
    { id: 'Website Development', label: 'Website Development (Core Web Vitals & Tech)' },
    { id: 'Social Media Marketing', label: 'Social Media Marketing (Algorithmic Dwell Time)' },
    { id: 'AI Video Creation', label: 'AI Video Creation (Neural Synthetic Pipelines)' },
  ];

  const featuredPost = useMemo(() => {
    return BLOG_POSTS_DATA.find((p) => p.featured) || BLOG_POSTS_DATA[0];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS_DATA.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'all' || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col w-full relative z-10 pt-12 pb-24">
      {/* 1. Editorial Header & Search / Filter Hub */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 w-full">
        <div className="flex flex-col">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 text-secondary w-fit mb-5 shadow-[0_0_15px_rgba(76,215,246,0.1)]">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-caps text-xs tracking-widest uppercase font-semibold">
              AGENCY INTELLIGENCE &amp; RESEARCH • 2026 EDITION
            </span>
          </div>

          {/* Headline & Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <div className="lg:col-span-8">
              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-on-surface leading-tight">
                ALGORITHMIC INSIGHTS &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-container to-secondary">
                  GROWTH RESEARCH
                </span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Deep-dives into algorithmic media buying, AI cinematic video generation, first-party CAPI telemetry, and technical SEO architecture. Written by our growth strategists.
              </p>
            </div>
          </div>

          {/* Live Search Bar */}
          <div className="relative w-full max-w-3xl mb-6">
            <div className="relative flex items-center bg-surface-container-low rounded-xl border border-outline-variant/40 px-4 py-3.5 focus-within:border-secondary focus-within:shadow-[0_0_25px_rgba(76,215,246,0.2)] transition-all">
              <span className="material-symbols-outlined text-outline mr-3 text-[22px]">search</span>
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search research, tactical playbooks, or algorithms..."
                className="w-full bg-transparent text-on-surface placeholder:text-outline font-body text-base focus:outline-none"
              />
              <span className="font-label-caps text-xs text-outline hidden sm:inline-block px-2 py-1 rounded bg-surface-container text-on-surface-variant">
                {filteredPosts.length} Articles
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full font-label-md text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-primary-container text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                    : 'bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/30'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In-Depth Dispatch */}
      {featuredPost && selectedCategory === 'all' && !searchQuery && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-16 w-full">
          <div className="relative rounded-3xl bg-surface-container-low border border-outline-variant/30 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden group hover:border-primary/40 transition-all">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-label-caps text-xs uppercase font-bold border border-primary/30">
                  Featured Research Dispatch
                </span>
                <span className="text-xs text-outline font-mono flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  <span>{featuredPost.readTime}</span>
                </span>
                <span className="text-outline">&bull;</span>
                <span className="text-xs text-secondary font-mono">
                  {featuredPost.category}
                </span>
              </div>

              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-on-surface font-extrabold mb-4 leading-tight">
                <Link
                  to={`/insights/${featuredPost.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {featuredPost.title}
                </Link>
              </h2>

              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-6">
                {featuredPost.excerpt}
              </p>

              {/* Key Takeaways Mini Box */}
              <div className="p-4 rounded-xl bg-surface-container/70 border border-outline-variant/20 mb-6">
                <span className="font-label-caps text-xs text-secondary uppercase font-semibold block mb-2">
                  Executive Brief:
                </span>
                <ul className="space-y-1.5 text-xs text-on-surface-variant">
                  {featuredPost.keyTakeaways.slice(0, 2).map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-secondary text-[14px] mt-0.5">
                        arrow_forward
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-primary/30"
                  />
                  <div>
                    <span className="font-headline text-sm font-semibold text-on-surface block">
                      {featuredPost.author.name}
                    </span>
                    <span className="text-xs text-outline">{featuredPost.author.role}</span>
                  </div>
                </div>

                <Link
                  to={`/insights/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-container to-secondary text-surface-container-lowest font-label-md text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all"
                >
                  <span>Read Full Technical Report</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-headline text-xl text-on-surface font-bold uppercase">
            All Technical Playbooks ({filteredPosts.length})
          </h3>
          <span className="text-xs text-outline font-label-caps">
            Verified Educational Research
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="p-12 rounded-2xl bg-surface-container-low text-center border border-outline-variant/30">
            <span className="material-symbols-outlined text-4xl text-outline mb-2">search_off</span>
            <p className="text-on-surface-variant text-sm">
              No matching research articles found for "{searchQuery}".
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-2xl bg-surface-container-low border border-outline-variant/30 p-6 flex flex-col justify-between hover:border-primary/40 hover:bg-surface-container transition-all shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-xs font-label-caps text-secondary font-semibold border border-outline-variant/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-outline font-mono">{post.readTime}</span>
                  </div>

                  <h4 className="font-headline text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors leading-snug">
                    <Link to={`/insights/${post.slug}`}>{post.title}</Link>
                  </h4>

                  <p className="font-body text-xs text-on-surface-variant leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-outline-variant/40"
                    />
                    <span className="text-xs text-outline">{post.author.name}</span>
                  </div>

                  <Link
                    to={`/insights/${post.slug}`}
                    className="text-xs font-label-md text-secondary hover:text-on-surface inline-flex items-center gap-0.5 font-semibold transition-colors"
                  >
                    <span>Read</span>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
