import React, { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS_DATA, AGENCY_CONFIG } from '../config/agencyConfig';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(() => {
    return BLOG_POSTS_DATA.find((p) => p.slug === slug);
  }, [slug]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    return BLOG_POSTS_DATA.filter((p) => p.slug !== post.slug).slice(0, 3);
  }, [post]);

  if (!post) {
    return <Navigate to="/insights" replace />;
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="flex flex-col w-full relative z-10 pt-16 pb-24 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-xs font-label-md text-outline hover:text-on-surface transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            <span>Back to All Research &amp; Dispatches</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="space-y-6 mb-12 border-b border-outline-variant/30 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-label-caps font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/30">
              {post.category}
            </span>
            <span className="text-xs text-outline flex items-center gap-1 font-mono">
              <span className="material-symbols-outlined text-[14px]">schedule</span>
              <span>{post.readTime}</span>
            </span>
            <span className="text-outline">&bull;</span>
            <span className="text-xs text-outline font-mono">
              Published: {post.publishedDate}
            </span>
          </div>

          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-surface leading-tight">
            {post.title}
          </h1>

          <p className="font-body text-base sm:text-lg text-on-surface-variant leading-relaxed border-l-2 border-primary pl-4 py-1 italic">
            {post.excerpt}
          </p>

          {/* Author Card & Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border border-primary/30"
              />
              <div>
                <span className="font-headline text-sm font-semibold text-on-surface block">
                  {post.author.name}
                </span>
                <span className="text-xs text-outline">{post.author.role}</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-high hover:bg-surface-variant text-on-surface text-xs font-label-md border border-outline-variant/30 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">share</span>
              <span>Share Technical Report</span>
            </button>
          </div>
        </header>

        {/* Executive Takeaways Box */}
        <div className="rounded-2xl bg-surface-container-low border border-primary/30 p-6 sm:p-8 mb-10 shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <span className="material-symbols-outlined text-[20px]">verified</span>
            <h3 className="font-headline text-lg font-bold uppercase tracking-tight">
              Executive Key Takeaways
            </h3>
          </div>
          <ul className="space-y-3">
            {post.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant leading-relaxed">
                <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">
                  check_circle
                </span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Article Body */}
        <article className="prose prose-invert max-w-none space-y-6 text-on-surface-variant font-body text-base leading-relaxed mb-16">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Simulated Code Telemetry Snippet */}
          <div className="my-8 p-4 rounded-xl bg-surface-container-lowest font-mono text-xs text-primary/90 border border-outline-variant/30 overflow-x-auto">
            <div className="text-outline text-[11px] mb-2 font-sans flex items-center justify-between">
              <span>// Telemetry Integration Payload</span>
              <span>JSON-LD / CAPI v4</span>
            </div>
            <code>
              {JSON.stringify(
                {
                  event_name: 'LeadQualificationAudit',
                  event_time: Math.floor(Date.now() / 1000),
                  action_source: 'system_protocol',
                  user_data: {
                    client_hash: '9e8a7c2b04f1ad...',
                    lead_tier: 'enterprise_growth',
                  },
                  custom_data: {
                    attribution_model: 'server_side_capi_v4',
                    verified_growth_lift: '+284.6%',
                  },
                },
                null,
                2
              )}
            </code>
          </div>

          <div className="pt-6">
            <h3 className="font-headline text-2xl text-on-surface font-bold mb-4">
              Implementing This Framework For Your Brand
            </h3>
            <p>
              Transitioning from fragmented marketing to an automated mathematical growth flywheel requires deliberate technical execution. If your team is struggling with tracking loss, high CPA, or creative fatigue, our senior partners conduct full 48-hour diagnostic sprints.
            </p>
          </div>
        </article>

        {/* Article In-Page CTA Banner */}
        <div className="p-8 rounded-3xl bg-surface-container-high/80 border border-outline-variant/30 mb-16 text-center">
          <h3 className="font-headline text-2xl text-on-surface font-bold mb-2 uppercase">
            Deploy This Strategic Framework
          </h3>
          <p className="text-sm text-on-surface-variant max-w-lg mx-auto mb-6">
            Request an audit of your funnels, pixel tracking, and creative variations with zero obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-surface-container-lowest font-label-md font-bold text-sm shadow-md hover:scale-105 transition-all"
            >
              Request Free Consultation
            </Link>
            <a
              href={AGENCY_CONFIG.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-surface-container hover:bg-surface-variant text-secondary font-label-md font-semibold text-sm border border-outline-variant/30 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="pt-8 border-t border-outline-variant/20">
            <h4 className="font-headline text-xl text-on-surface font-bold uppercase mb-6">
              Related Research &amp; Guides
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedPosts.map((r) => (
                <Link
                  key={r.slug}
                  to={`/insights/${r.slug}`}
                  className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-label-caps text-secondary block mb-1">
                      {r.category}
                    </span>
                    <h5 className="font-headline text-sm font-semibold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                      {r.title}
                    </h5>
                  </div>
                  <span className="text-xs text-outline font-mono mt-4 block">
                    {r.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
