export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  tag: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'ads_click' | 'travel_explore' | 'storefront' | 'terminal' | 'hub' | 'video_spark';
  deliverables: string[];
  strategicFocus: string[];
  benefits: string[];
  metrics: string;
}

export interface PortfolioVideo {
  id: string;
  title: string;
  category: 'AI Generated Videos' | 'Promotional Videos' | 'Product Advertisements' | 'Business Reels' | 'Social Media Creatives';
  badge: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  aspectRatio: '9:16' | '16:9';
  stats: string;
  resolution: string;
  fps: string;
  toolsUsed: string;
  retentionNote: string;
  isDemo: boolean;
}

export interface CampaignResult {
  id: string;
  campaignName: string;
  platform: 'Meta Ads' | 'Google Ads' | 'SEO Organic' | 'Multi-Channel' | 'AI Video Funnel';
  period: string;
  isVerified: boolean;
  isDemo: boolean;
  metrics: {
    leadsGenerated: number;
    totalReach: string;
    engagementRate: string;
    websiteVisitors: number;
    adClicks: number;
    conversionRate: string;
    costPerLead: string;
    roas: string;
  };
  evidenceNote?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Meta Ads' | 'SEO & Local SEO' | 'Google Business Profile' | 'Website Development' | 'Social Media Marketing' | 'AI Video Creation';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured: boolean;
  content: string[];
  keyTakeaways: string[];
  tags: string[];
}

export const AGENCY_CONFIG = {
  name: 'DIGITAL MARKETING',
  tagline: 'We turn your vision into digital growth',
  mission: 'To engineer verifiable, scalable digital growth for visionary brands using high-velocity creative and algorithmic marketing precision.',
  vision: 'A world where digital growth is fully transparent, mathematically grounded, and powered by cinematic narrative resonance.',
  whatsapp: {
    number: '+91 9305856475',
    displayNumber: '+91 93058 56475',
    prefilledMessage: 'Hello, I would like a free digital marketing consultation for my business.',
    link: 'https://wa.me/919305856475?text=Hello%2C%20I%20would%20like%20a%20free%20digital%20marketing%20consultation%20for%20my%20business.',
  },
  // Configurable Instagram Profile URL (as specified in PRD)
  instagramProfileUrl: 'https://instagram.com/digitalmarketing_agency',
  contactEmail: 'contact@digitalmarketing.agency',
  supportEmail: 'growth@digitalmarketing.agency',
  phone: '+91 9305856475',
  displayPhone: '+91 93058 56475',
  address: {
    street: 'Cyber Tower 4, Tech Innovation Corridor',
    city: 'Global Remote & Distributed Operations',
    country: 'International',
  },
  socials: {
    instagram: 'https://instagram.com/digitalmarketing_agency',
    facebook: 'https://facebook.com/digitalmarketingagency',
    linkedin: 'https://linkedin.com/company/digital-marketing-agency',
    youtube: 'https://youtube.com/@digitalmarketingagency',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'meta-ads',
    code: 'SVC-01',
    title: 'Meta Ads',
    tag: 'Paid Acquisition & Performance Marketing',
    shortDescription: 'Targeted Facebook & Instagram hyper-growth funnels. Algorithmic audience testing, retargeting matrices, and creative fatigue rotation.',
    fullDescription: 'Our Meta Ads framework harnesses server-side Conversions API (CAPI), custom predictive lookalikes, dynamic creative variation matrices, and real-time algorithmic spend scaling. We engineer campaigns that systematically lower blended CAC while driving sustained top-line revenue expansion.',
    iconName: 'ads_click',
    deliverables: [
      'Pixel & Conversions API (CAPI) Server-Side Telemetry',
      'High-LTV Lookalike & Predictive Audience Clusters',
      'Multivariate Creative Hook Testing (12+ variations/mo)',
      'Dynamic Product Catalog & Retargeting Loops',
      'Fatigue Suppression & Automated Ad Rotation Scripts',
      'Live ROAS Attribution & Weekly Scaling Audit',
    ],
    strategicFocus: [
      'CAPI & Server-Side Telemetry',
      'Fatigue Suppression Protocols',
      'High-LTV Lookalike Clusters',
      'Multivariate Hook Testing',
    ],
    benefits: [
      'Predictable customer acquisition velocity within 48h of launch',
      'Immunity to iOS 14.5+ cookie degradation via 100% CAPI',
      'Protection against creative burn with automated variations',
    ],
    metrics: 'Avg. 3.8x - 6.4x Blended ROAS across cold funnels',
  },
  {
    id: 'seo-local-seo',
    code: 'SVC-02',
    title: 'SEO & Local SEO',
    tag: 'Organic Search & Semantic Authority',
    shortDescription: 'Rank dominant search intent & conquer the local map pack. Technical crawl indexing, schema dominance, and programmatic backlink authority.',
    fullDescription: 'Conquer organic search through semantic entity architecture, programmatic topic clusters, technical Core Web Vitals optimization, and high-impact local citation management. We ensure your brand becomes the default authoritative answer on Google for high-commercial buyer queries.',
    iconName: 'travel_explore',
    deliverables: [
      'Deep Technical SEO & Crawl Budget Diagnostics',
      'Semantic Topic Cluster & Commercial Intent Mapping',
      'Structured JSON-LD Schema & Entity Optimization',
      'Local Citations & NAP Geographic Alignment',
      'High-Tier Editorial Backlink Acquisition',
      'Programmatic Keyword Position Telemetry Hub',
    ],
    strategicFocus: [
      'Semantic Topic Clusters & Knowledge Graphs',
      'Core Web Vitals Sub-Second TTFB Tuning',
      'Localized Geo-Radius Ranking Grids',
      'Entity-Based On-Page Schema Hierarchy',
    ],
    benefits: [
      'Compounding inbound qualified organic pipeline without ad cost',
      'Sustained top-position Google organic search presence',
      'High organic buyer intent converting at 3x industry benchmarks',
    ],
    metrics: 'Top 3 rankings for 100+ high-value commercial keywords',
  },
  {
    id: 'google-business-profile',
    code: 'SVC-03',
    title: 'Google Business Profile',
    tag: 'Local Trust & Maps 3-Pack',
    shortDescription: 'Local presence optimization and verifiable customer trust. Radius geo-grid rankings, automated review cultivation, and direct call lead traps.',
    fullDescription: 'Transform your Google Business Profile into an automated localized customer magnet. We fine-tune primary and auxiliary service categories, deploy geotagged media assets, execute review velocity workflows, and eliminate duplicate competitor spam across Google Maps.',
    iconName: 'storefront',
    deliverables: [
      'Complete GBP Verification & Profile Infrastructure',
      'Radius Geo-Grid Local 3-Pack Search Domination',
      'Automated Review Velocity & Response Protocols',
      'Localized Geo-Tagged Visual Media Management',
      'Spam & Duplicate Listing Suppression Operations',
      'Direct Phone Call & Direction Request Attribution',
    ],
    strategicFocus: [
      'Google Maps 3-Pack Radius Expansion',
      'Automated 5-Star Review Generation Flow',
      'Local Geotagged Visual Content Feeds',
      'Spam Listing Clean-up & Defense',
    ],
    benefits: [
      'Surge in direct customer phone inquiries and store directions',
      'Immediate localized trust with prominent verified badges',
      'Zero cost per inquiry from high-intent proximate searchers',
    ],
    metrics: 'Up to 340% increase in monthly phone calls & map discovery',
  },
  {
    id: 'website-development',
    code: 'SVC-04',
    title: 'Website Development',
    tag: 'Web Engineering & Conversion Architecture',
    shortDescription: 'Ultra-fast responsive high-converting web apps. 100/100 Google Lighthouse scores, friction-free checkouts, and magnetic UI aesthetics.',
    fullDescription: 'We engineer bespoke, futuristic, and blazing-fast web applications built on modern technology stacks. Featuring dark-mode glassmorphic styling, kinetic micro-interactions, mobile-first responsive geometry, and frictionless lead generation funnels designed to convert.',
    iconName: 'terminal',
    deliverables: [
      'Bespoke Futuristic UI/UX Design (Obsidian Kinetic Theme)',
      'Sub-Second Page Load Architecture (100 Lighthouse)',
      'Frictionless Multi-Step Lead Intake Funnels',
      'Direct WhatsApp & CRM Telemetry Webhook Integrations',
      'Responsive Mobile-First Viewport Precision (320px - 4K)',
      'Technical SEO, Metadata & Open Graph Semantic Infrastructure',
    ],
    strategicFocus: [
      'Sub-Second First Contentful Paint (<0.8s)',
      'High-Converting Multi-Step Intake Forms',
      'Fluid 12-Column Responsive Spatial Grids',
      'Zero Layout Shift & Accessibility Compliance',
    ],
    benefits: [
      'Immediate credibility that positions your business as an industry titan',
      'Multiplies ROAS on all incoming paid acquisition traffic',
      'Zero technical maintenance drag with modern scalable codebases',
    ],
    metrics: '99+ PageSpeed score & 2.6x higher visitor inquiry baseline',
  },
  {
    id: 'social-media-marketing',
    code: 'SVC-05',
    title: 'Social Media Marketing',
    tag: 'Viral Ecosystem & Community Authority',
    shortDescription: 'Strategic community and creative brand presence. Daily content calendars, organic social viral triggers, and synchronized influencer distribution.',
    fullDescription: 'Elevate your brand presence across Instagram, LinkedIn, and Facebook with intentional editorial storytelling. We produce cinematic carousels, algorithmic engagement prompts, synchronized trend adaptations, and inbound lead workflows that transform casual viewers into committed clients.',
    iconName: 'hub',
    deliverables: [
      'Omnichannel 30-Day Editorial & Pillar Strategy',
      'High-Fidelity Graphic Carousels & Infographics',
      'Viral Short-Form Video Scripts & Trend Synthesis',
      'Community Management & Inbound DM Lead Workflows',
      'Audio & Algorithmic Hook Optimization',
      'Monthly Engagement & Follower Trajectory Reports',
    ],
    strategicFocus: [
      'High-Dwell-Time Carousel Sequencing',
      'Algorithmic Audio Trend Integration',
      'Inbound Direct Message Qualifying Funnels',
      'Visual Grid Cohesion & Typography Systems',
    ],
    benefits: [
      'Establish undeniable category authority that commands premium pricing',
      'Organic reach distribution that lowers blended customer acquisition costs',
      'Direct pipeline of inbound warm prospects ready to engage',
    ],
    metrics: 'Average 18.6% engagement rate across social campaigns',
  },
  {
    id: 'ai-video-creation',
    code: 'SVC-06',
    title: 'AI Video Creation',
    tag: 'Generative Media & 9:16 Short-Form Creative',
    shortDescription: 'Hyper-realistic generative short-form video ads. Multilingual lip-synced digital twins, automated b-roll composition, and programmatic variation testing.',
    fullDescription: 'Stop the scroll in under 1.5 seconds. Our production studio utilizes cutting-edge generative video models, photorealistic synthetic digital avatars, dynamic kinetic typography, 3D fluid rendering, and spatial sound design to manufacture high-converting Reels, TikToks, and commercials.',
    iconName: 'video_spark',
    deliverables: [
      'Generative Visual Storyboarding & Conceptualization',
      'Photorealistic AI Avatars & Multilingual Lip-Sync',
      'Dynamic Kinetic Typography & Sound Design (SFX)',
      '9:16 Vertical Video Formats for Reels & TikTok',
      'Macro 3D Product Simulation & Motion Graphics',
      'Full Commercial Rights & Programmatic Asset Matrix',
    ],
    strategicFocus: [
      'First-1.5-Second Neuro-Visual Hook Pacing',
      'Photorealistic Zero-Uncanny-Valley Avatars',
      'Haptic Sub-Bass SFX Audio Synchronization',
      'Automated Multi-Angle A/B Cut Variations',
    ],
    benefits: [
      '75% lower production expenditure compared to physical film shoots',
      'Speed to market — deploy 10+ fresh video angles in under 4 days',
      'Sky-high retention rates that trigger platform algorithm reach multipliers',
    ],
    metrics: 'Up to 88% retention rate at 3 seconds across vertical feeds',
  },
];

export const PORTFOLIO_VIDEOS: PortfolioVideo[] = [
  {
    id: 'reel-1',
    title: 'AI Generated Videos: Cyber Synthesis',
    category: 'AI Generated Videos',
    badge: 'AI Production',
    description: 'Autonomous viral video generation with cinematic precision, neural visual rendering, and volumetric lighting.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVxKGoDPs-tL4_b_7IL-zGwPiO9SN26nxOvlqNgsCrXuXy6xfkCOICl5twPCs2G7Lxg9dKEq8T2-JS9BzrTkIJPcsuGTMJO-DyEqPsghfk8kB16JV677TfGodXXwxOvIphT9SivgvD6YdljkFlbVKzRHKbtVrhVI2a0VFj55-uQNWzj77bVeMIBb7Ie2LCXsHFxn3QCq8lrnlGavDXooZRgE9Je_xgtkBnq3dDx8tPyXVJ5Q8B7xtO',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '0:30',
    aspectRatio: '9:16',
    stats: '340K Views • 18.4% CTR',
    resolution: '4K HDR',
    fps: '60 FPS',
    toolsUsed: 'Neural Engine 4.2 + Runway Gen-3 + DaVinci Resolve',
    retentionNote: 'Autonomous synthetic avatar with zero uncanny valley artifacting.',
    isDemo: true,
  },
  {
    id: 'reel-2',
    title: 'Promotional Videos: Obsidian Luxury',
    category: 'Promotional Videos',
    badge: 'Brand Story',
    description: 'Cinematic brand narrative with rich sound design, wet asphalt night reflections, and dynamic neon light trails.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLRNcwSqsiviyqyjqIYZTo-j0MbBNI4bPtEodCmC-dQKaVNGJKhWStNYx0ln3mArxB9C0-111LWNB-JGEJ64bhwlUvaFOcVo-roae7E55_BUXFoqYcSa45UuxRmvJuFRzyidTDZDuD70j_sZtnHg8ddbUObtlstfUp1_p3O8sPTbTwwYnabKq0RF8YW8SwoAQ171azhWmNYUdGMrzmlBtwiVFGGfrRw_kfRX_AHsUnW_DjIkWClP9O',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '0:45',
    aspectRatio: '9:16',
    stats: '512K Views • 24.2% Share Rate',
    resolution: '4K Anamorphic',
    fps: '60 FPS',
    toolsUsed: 'Cinema 4D + Octane Render + Spatial Audio FX',
    retentionNote: 'Engineered for high-stakes commercial prestige that drives buyer desire.',
    isDemo: true,
  },
  {
    id: 'reel-3',
    title: 'Product Advertisements: Levitating Hardware',
    category: 'Product Advertisements',
    badge: 'E-Commerce',
    description: 'Explosive visual product hooks designed for unignorable dwell times with translucent acrylic internal components.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSYVqRO8Cok7ePdT4WH85_I6Z82IgauNcNIGMAgRo7fhOn5ScwSESEeTtagGxpWolI2h-D8D_D6G-nqPooWH8c4KaMbMcXObJcQtwjJt_ecpfVGVClIUhd0b85PeWdWzR-oxZHS1lvOVTxWnErr1LWrTvn8NiU9gxIaAFnhcPxb0Egp4TtAvR_kKeMWjvpx2ivYFls4wemar7uO1Gi4gZzzxzOBSsw-luvwcI_9QTqaktXytFx38Z0',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    duration: '0:20',
    aspectRatio: '9:16',
    stats: '890K Views • 4.8x ROAS',
    resolution: '4K 60FPS',
    fps: '60 FPS',
    toolsUsed: 'Blender Cycles 4.1 + After Effects + Sub-Bass Tuning',
    retentionNote: 'Macro texture rendering and fluid physics for direct conversion spikes.',
    isDemo: true,
  },
  {
    id: 'reel-4',
    title: 'Business Reels: Authority & Scale',
    category: 'Business Reels',
    badge: 'Executive Growth',
    description: 'Founder insight and thought leadership formatted with dynamic kinetic typography and authority anchors.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQsEZc0kaowlYS3MuY0VmtYMxIjRmABwUtrSwuJseP8tT1MHdN5puopdlRk2lfLEhz3231vuIW4yLeg_nT5wtgmWcX3RPay10Sm9vDTsTB-ku75LS3nSfR0PhS7EKadiughwwMfyBXRC1sU85mlKNmtMchCoJgbdH5VbrT8F0wUjvEiCXwOGmregg9b1BKKXxYrbdXI4Oquqh1FMOpevj9BUS7tcz-8eYERQJQhBRfVab9SqJ1fIzI',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    duration: '0:35',
    aspectRatio: '9:16',
    stats: '215K Views • 94% Retention',
    resolution: '4K Studio',
    fps: '60 FPS',
    toolsUsed: 'Multilingual Voice Clone + Dynamic Subtitle AI',
    retentionNote: 'Transforms complex CEO insights into viral organic authority.',
    isDemo: true,
  },
  {
    id: 'reel-5',
    title: 'Social Media Creatives: Kinetic Typography',
    category: 'Social Media Creatives',
    badge: 'Viral Motion',
    description: 'Engineered for scroll-stopping micro-second audience conversion with luminous geometric spheres and neon particles.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzPJ0dtAaKABypjSWvN7fGEndRti-asUXhFArnvm5uFXTalW_E0ZypC9DoUUs72T73Ia438nXPNKWKzbcqjMoK0zzFNZ7LDF1r08fgQVaIlfBzKdClQQ-gTVbIhKqlHlF2-tJm76eCSHj2kE4cMAPtSSLRv3h0Y3975TJD6EpeN--zC0FSn1jGtPa3M4c18LRZWNa-ohf2En2CliRj_CS_DQiBGiVC0gP0UY3DAY7o6FPA_MJFNcvN',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    duration: '0:15',
    aspectRatio: '9:16',
    stats: '1.2M Views • 68K Saves',
    resolution: '4K Viral',
    fps: '60 FPS',
    toolsUsed: 'After Effects 2024 + 3D Camera Rig',
    retentionNote: 'Calibrated rhythm transitions that outperform platform benchmarks.',
    isDemo: true,
  },
  {
    id: 'reel-featured',
    title: 'NEO-SYNTHESIS: Autonomous Cybernetic Brand Film',
    category: 'AI Generated Videos',
    badge: 'Studio Showpiece',
    description: 'Next-generation generative 3D lighting pipeline built to launch premium consumer tech hardware with hyperreal cinematic texture.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPyUTO8bhYA3G66rr85s2npiS-IM90jOK_CWomsSXEnZt3kvizla5bRhx-IEJMuAmpP6SUNXagX0WRmxh_ad0dAtaftRYQeN-hOzguN9wn5e7XOczjfiX39GQZiypSr1RAzcIv8tzTznOZlpRm8BQXIdMjTmnsxj49UD6pUBmDybRBJUtrgamW8W7ZcPhguvvIbcXhyTamlQpozh07XdR5wqLEHPAdJ3XRmili4R0Drpq_Q900nL9q',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    duration: '0:45',
    aspectRatio: '16:9',
    stats: '820K Views • 84% at 3s',
    resolution: '4K Anamorphic (2.39:1)',
    fps: '60 FPS',
    toolsUsed: 'Kling Gen-3 + Unreal Engine 5.4 + DaVinci Resolve',
    retentionNote: 'Simulated 4.8x Hook Rate across cold audiences.',
    isDemo: true,
  },
  {
    id: 'reel-6',
    title: 'Neural Engine 4.0 Brand Anthem',
    category: 'AI Generated Videos',
    badge: 'AI Videos',
    description: 'Futuristic cybernetic visual portrait illuminated by pulsating neon violet optical visors and cyan data streams.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFSjf0JXygPvs5iimwyXE3x1EilJBNR671e59jR-31P0oXChCtu0J2aRmPs4R-GqFwwUaIV7z2Aj1tyBL7w3iwST6tGaMSswsCMqoRR1MP6wSy-nU3iQEwe0XuNkEgiRi_50xaOlvvkOAtvHCmyyVqTc0_R-3y55OHAzdFyRMTyp9qAThesNg9hJyW-47K64kK6mZNc0EvEStaEKUJ2lkfjVTmX6IApF-_v-pgAXgZXim2x96tgOn0',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
    duration: '0:30',
    aspectRatio: '9:16',
    stats: '88% Retention Rate',
    resolution: '4K HDR',
    fps: '60 FPS',
    toolsUsed: 'Runway Gen-3 Alpha + Cinema 4D',
    retentionNote: 'Zero uncanny valley photorealism for AI product rollouts.',
    isDemo: true,
  },
  {
    id: 'reel-7',
    title: 'Obsidian Sound Quantum Headphones',
    category: 'Product Advertisements',
    badge: 'Product Ads',
    description: 'High-end sleek quantum wireless headphones levitating with glowing cyan sonic frequency rings and metallic particles.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWn28exFNki6Rv88k6hJ305MPt-1d48tvvnZIVHgNVmz1Z25q4p35BLXZexlUhgYiLz1QAcGFPfmJsQjP8_ZrEJsvq-7YyU28R2gs9FOzrPd1UHEhuQQF8tJCaiYi_PtecANOY79objCxBQqYVb_gHt1bBRnvjcwYo2bVM8HIgUHc2_YN6uj72BDy3vnfrowKQx-juQ1dPcwcIV5lv69LDbKbhgRUAKFRO1lCB3xcGhUUJamq98IK4',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    duration: '0:22',
    aspectRatio: '9:16',
    stats: 'Bassline-Synced Audio',
    resolution: '4K 60FPS',
    fps: '60 FPS',
    toolsUsed: 'Blender Cycles 4.1 + After Effects',
    retentionNote: 'Haptic kinetic typography timed to sub-bass drop.',
    isDemo: true,
  },
  {
    id: 'reel-8',
    title: 'Founder Insight: 0 to 10M MRR',
    category: 'Business Reels',
    badge: 'Business Reels',
    description: 'Executive authority speech format with floating neon data callouts and high-impact kinetic subtitles.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSVqUUxxFcAvNcAonYcCnSDZIGcbGyAhaG0NauENwPFKKm8rBdMAIBJKONQlLxx81fsSP3bIKvt-FUnTrqDF3H320vP2yugNA3palNYjEaU4JqGkLg4Sdukm3A6VcHP_HJ7xtnD9DfjNjjCL5vTl7jKo1ki4YI67w8-JVARyLxStYvQ4sO1hI8oFm3T-xP7kwYMRWzK_wxJoClfTUPgjyzpbxCNTotm2dOyFMjooJLgXMBAU9geNgp',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '0:45',
    aspectRatio: '9:16',
    stats: 'Dynamic Kinetic Subs',
    resolution: '4K Studio',
    fps: '60 FPS',
    toolsUsed: 'Multilingual AI Voice + Dynamic Subs',
    retentionNote: 'Hyper-engaging style driving founder personal brand authority.',
    isDemo: true,
  },
  {
    id: 'reel-9',
    title: 'AeroDynamics Hypercar Launch Commercial',
    category: 'Promotional Videos',
    badge: 'Promotional',
    description: 'Electric hypercar speeding through rain-slicked metropolis streets with glowing purple tire smoke and neon reflections.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3QPGzV5h6p9FK_0nldZQLcU1ixeV9tUs5La0xAhSSIZf3jysFx_QEhNClx174mh89q_1UiN2v7AdPww3S0bXkxV5ady-KkrojueHLWyBGR0UE1tU4_jo6Jyx81XhGYu--c77IGIMbm_z28sybKZQ0IuHbeN5mjTx85ly-82bVed21q0sBIhcSUv6VJbKKP-zSiiL0hkkhA7B4laGjPzVz1qhH3iLi6U0rAdykdXCphav0CFdAq1II',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    duration: '1:12',
    aspectRatio: '16:9',
    stats: '60 FPS Master',
    resolution: '16:9 Widescreen Cinema',
    fps: '60 FPS',
    toolsUsed: 'Unreal Engine 5.4 + Octane + DaVinci',
    retentionNote: 'High-energy commercial trailer for automotive rollouts.',
    isDemo: true,
  },
  {
    id: 'reel-10',
    title: 'Viral Hook: Why 99% of Ads Fail',
    category: 'Social Media Creatives',
    badge: 'Social Creatives',
    description: 'Digital analytics screen overlay with exponential growth spikes, dark purple bokeh, and conversion metrics.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJmyVIBzIqSq_zBHXlDuEM1v4N6BQK-AUoNFzB40xv9DGpPaQkD0LsCR8CuW79PjhzwXXoInFNqrzZSgxBMzH0j923FToD6J3we-VV1AkpiQu_UWqvstZvuqMakbASqr6VmFM0ykOuji_BQ4F0LRjnBxu2roPhUvkpLKoxNqoLg9MN8tTwydCnKOEwxp75gI7Rr6DuxjBwlEsEfKtd98pJrAsczwRDYoOhz0o6db0cnmO2cjgvAaMn',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
    duration: '0:18',
    aspectRatio: '9:16',
    stats: '4.9x CTR Index',
    resolution: '9:16 Vertical Reel',
    fps: '60 FPS',
    toolsUsed: 'After Effects 2024 + 3D Camera Rig',
    retentionNote: 'Engineered to break scroll-reflex in sub-1.2 seconds.',
    isDemo: true,
  },
  {
    id: 'reel-11',
    title: 'Lumina Skincare Holographic Drop',
    category: 'Product Advertisements',
    badge: 'Product Ads',
    description: 'Macro 3D simulation of luminous iridescent fluid droplets swirling around a minimalist cosmetic skincare bottle.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBc66WXmtbu_ICh7tgoRoljDmUzw9c6of5erneFkSYtFGUKehlkLQKt8adwpNORsp2cWn91OtyJprX5an8x7jL8f6M0hFH7YDZN6DA6QQrmGun7Rs3xasDKEBRWcLnH_EnK--L-NBHl95Ws6rnGL7eKlZgpq1JyHbcRclaTkgd-wgWGwzyzJwynJmHF3EemAvkgw1Bk1rN-VucZ1THNYTmr0NQT4U9w6_ExzOGZ_kAA5h91kICPP0D',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    duration: '0:25',
    aspectRatio: '9:16',
    stats: 'Fluid Dynamics FX',
    resolution: '9:16 Vertical Reel',
    fps: '60 FPS',
    toolsUsed: 'Houdini Fluid FX + Redshift + Premiere Pro',
    retentionNote: 'Macro fluid simulation showcasing active ingredients for D2C beauty brand.',
    isDemo: true,
  },
  {
    id: 'reel-12',
    title: 'Autonomous SaaS Growth Flywheel',
    category: 'AI Generated Videos',
    badge: 'AI Videos',
    description: 'Dynamic holographic 3D data flywheel spinning in a cybernetic cyberspace corridor with connected purple and cyan nodes.',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiYZkKZJ7huj07FvTuQBUTifvpVS1s0P1rHbv8urVPtOVn3XlE6zNub_e-JztwKwPDg4ORgIyU-7jluQl2Ze1xGEtKGOlNhoXJaCRdf2bAkMNWFd61KgdWlD8LVCP5IeXczuLhAUO7OrQ4LXe_SgRq0ofUPVL41O26ABeGQ1a-NUYRABonL5E6wT7NuoqyOVLYPa4NIRx_BJYomBxgrZGqSS-uyiJelBSkR3KuygKw8s0iUu2dWMyS',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
    duration: '0:35',
    aspectRatio: '9:16',
    stats: 'Algorithmic Motion',
    resolution: '9:16 Vertical Reel',
    fps: '60 FPS',
    toolsUsed: 'Midjourney V6 + Runway Gen-3 + After Effects',
    retentionNote: 'Complex B2B cloud infrastructure concept visualized as an intuitive animated organism.',
    isDemo: true,
  },
];

// Sample campaign benchmark data clearly watermarked as DEMO per PRD trust requirements
export const DEMO_CAMPAIGN_RESULTS: CampaignResult[] = [
  {
    id: 'camp-1',
    campaignName: 'Omnichannel B2B Scale Architecture',
    platform: 'Meta Ads',
    period: 'Last 90 Days',
    isVerified: false,
    isDemo: true,
    metrics: {
      leadsGenerated: 14820,
      totalReach: '5.4M',
      engagementRate: '18.6%',
      websiteVisitors: 840000,
      adClicks: 1120000,
      conversionRate: '6.82%',
      costPerLead: '$8.40',
      roas: '4.2x',
    },
    evidenceNote: 'Calibrated benchmark simulation across enterprise Meta CAPI telemetry.',
  },
  {
    id: 'camp-2',
    campaignName: 'Local Healthcare Map Domination',
    platform: 'SEO Organic',
    period: 'Last 180 Days',
    isVerified: false,
    isDemo: true,
    metrics: {
      leadsGenerated: 3240,
      totalReach: '920K',
      engagementRate: '14.2%',
      websiteVisitors: 142000,
      adClicks: 89000,
      conversionRate: '8.4%',
      costPerLead: '$0.00',
      roas: '6.8x',
    },
    evidenceNote: 'Top 3 Google Maps pack ranking across 40 regional clinic search terms.',
  },
  {
    id: 'camp-3',
    campaignName: 'D2C Hardware Viral Reels Funnel',
    platform: 'AI Video Funnel',
    period: 'Last 60 Days',
    isVerified: false,
    isDemo: true,
    metrics: {
      leadsGenerated: 8900,
      totalReach: '3.8M',
      engagementRate: '22.4%',
      websiteVisitors: 410000,
      adClicks: 640000,
      conversionRate: '5.1%',
      costPerLead: '$4.20',
      roas: '4.8x',
    },
    evidenceNote: 'High-tempo generative product videos with sub-bass audio timing.',
  },
];

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    slug: 'meta-advantage-plus-capi-v4',
    title: 'Meta Advantage+ & CAPI v4: Engineering High-ROAS Funnels in 2026',
    excerpt: 'How server-side Conversions API and predictive machine learning models eliminate tracking loss and maximize cold audience customer acquisition.',
    category: 'Meta Ads',
    readTime: '6 min read',
    publishedDate: 'October 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Principal Growth Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    featured: true,
    content: [
      'In the current digital marketing landscape, traditional browser-based pixel tracking loses up to 35% of attribution signals due to aggressive cookie blocking, browser privacy restrictions, and network latency.',
      'To build a resilient acquisition engine, enterprise brands must transition to server-side Conversions API (CAPI) v4. By transmitting raw purchase, lead, and add-to-cart events directly from your backend servers to Meta’s graph endpoint, you maintain 100% telemetry parity.',
      'Furthermore, feeding Meta’s Advantage+ algorithms with deduplicated, cryptographically hashed first-party data empowers the machine learning system to identify high-LTV buyers rather than cheap, low-intent clicks.',
    ],
    keyTakeaways: [
      'Server-side CAPI restores 30-40% of previously dropped attribution data.',
      'Event Quality Match Score must exceed 8.5/10 for optimal delivery.',
      'Advantage+ creative fatigue scripts must rotate hooks every 7-10 days.',
    ],
    tags: ['Meta Ads', 'CAPI', 'Attribution', 'Performance'],
  },
  {
    slug: 'semantic-seo-entity-graphs-2026',
    title: 'Semantic SEO & Entity Graphs: Dominating Organic Search in the AI Era',
    excerpt: 'Why old-school keyword density is dead and how structured JSON-LD entity graphs guarantee top visibility on Google AI overviews.',
    category: 'SEO & Local SEO',
    readTime: '8 min read',
    publishedDate: 'October 2026',
    author: {
      name: 'Elena Rostova',
      role: 'Head of Search Engineering',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    featured: false,
    content: [
      'Google’s search algorithms have evolved beyond keyword strings into semantic entity comprehension. Search engines now parse relationships between concepts, brands, products, and locations using extensive knowledge graphs.',
      'To secure dominant rankings, your web architecture must implement comprehensive nested JSON-LD schema linking your organization to verified Wikidata and schema.org vocabularies.',
      'Coupling entity optimization with lightning-fast Core Web Vitals guarantees your pages are selected by Google’s AI Search Overviews for direct quotation.',
    ],
    keyTakeaways: [
      'Entity-based SEO outperforms keyword stuffing by 4.2x in 2026.',
      'Nested JSON-LD schema connects your brand directly to Google Knowledge Graph.',
      'Sub-second Largest Contentful Paint (LCP) is mandatory for crawling priority.',
    ],
    tags: ['SEO', 'Semantic Web', 'Google Search', 'Knowledge Graph'],
  },
  {
    slug: 'google-maps-3pack-local-domination',
    title: 'Google Business Profile: The 5-Point Blueprint to Own the Local 3-Pack',
    excerpt: 'Actionable steps to expand your geo-grid ranking radius and capture high-intent nearby customers without paying per click.',
    category: 'Google Business Profile',
    readTime: '5 min read',
    publishedDate: 'September 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Principal Growth Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    featured: false,
    content: [
      'For brick-and-mortar and localized service providers, over 68% of commercial search conversions happen directly within the Google Maps Local 3-Pack.',
      'Achieving top ranking across a wide radius requires consistent NAP citations, strategic primary and secondary category nesting, weekly geotagged updates, and an automated customer review velocity strategy.',
    ],
    keyTakeaways: [
      'Primary category selection accounts for over 30% of ranking weight.',
      'Review velocity (consistent fresh 5-star reviews) outranks total review count.',
      'Geotagged photos with EXIF metadata signal localized physical relevance.',
    ],
    tags: ['Google Maps', 'Local SEO', 'GBP', 'Lead Generation'],
  },
  {
    slug: 'high-converting-modern-web-architecture',
    title: 'High-Converting Web Engineering: How 0.8s Load Speeds Double Funnel ROAS',
    excerpt: 'The technical blueprint behind high-velocity modern web apps: sub-second First Contentful Paint, dark-mode glassmorphism, and frictionless conversions.',
    category: 'Website Development',
    readTime: '7 min read',
    publishedDate: 'September 2026',
    author: {
      name: 'Devon Thorne',
      role: 'Lead UI/UX Technologist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    },
    featured: false,
    content: [
      'Every 100ms of latency on a landing page reduces user conversion rates by up to 7%. Heavy, bloated page builders silently burn thousands in ad spend.',
      'By decoupling your web presence into modern Vite or Next.js architectures with static asset hydration, you achieve pure 100/100 Google PageSpeed scores that immediately lower bounce rates and elevate paid ad quality scores.',
    ],
    keyTakeaways: [
      'PageSpeed scores above 95 decrease Meta & Google Ad CPCs.',
      'Dark-mode glassmorphic aesthetics boost average session dwell time by 38%.',
      'Multi-step intake forms generate up to 2.4x higher completion rates.',
    ],
    tags: ['Web Dev', 'UI/UX', 'Performance', 'Conversion Rate'],
  },
  {
    slug: 'generative-ai-video-reels-hooks',
    title: 'AI Video Creation: The 1.5-Second Visual Hook Architecture',
    excerpt: 'Deconstructing how high-retention generative vertical video reels achieve 80%+ retention and trigger Instagram and TikTok algorithmic viral loops.',
    category: 'AI Video Creation',
    readTime: '6 min read',
    publishedDate: 'August 2026',
    author: {
      name: 'Aria Chen',
      role: 'Creative Director & AI Video Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    featured: false,
    content: [
      'In short-form vertical feeds, viewer attention is won or lost in the initial 1.5 seconds. Traditional corporate talking-head videos suffer from 70% immediate drop-off.',
      'By utilizing generative visual synthesis, fast rhythm transitions, dynamic on-screen typography, and sub-bass audio hits, we create thumb-stopping moments that force viewer dwell time and maximize algorithmic distribution.',
    ],
    keyTakeaways: [
      'The first 1.5 seconds must introduce unexpected visual contrast.',
      'Kinetic subtitles keep muted viewers engaged (over 65% of mobile users watch without audio).',
      'Testing 10+ hook variations per core concept unlocks 4x lower Cost Per Acquisition.',
    ],
    tags: ['AI Video', 'Reels', 'TikTok', 'Creative Strategy'],
  },
  {
    slug: 'omnichannel-social-media-retention',
    title: 'Omnichannel Social Media Marketing: Moving Beyond Vanity Likes',
    excerpt: 'Transforming passive social followers into an active pipeline of high-intent buyers through structured narrative sequencing and DM automation.',
    category: 'Social Media Marketing',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    author: {
      name: 'Marcus Vance',
      role: 'Principal Growth Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    featured: false,
    content: [
      'Likes and superficial follower counts do not pay agency bills or fund company payroll. Sustainable digital growth relies on engineering high-dwell-time educational carousels and direct conversation triggers.',
      'When your social content consistently solves acute customer bottlenecks, viewers naturally transition into high-intent inbound direct messages and booked calendar consultations.',
    ],
    keyTakeaways: [
      'Educational carousel saves and shares carry 5x more algorithmic weight than likes.',
      'Comment-to-DM automated lead flows convert at over 28% into booked consultations.',
      'Cohesive visual typography establishes instant brand authority.',
    ],
    tags: ['Social Media', 'Content Strategy', 'Inbound Funnels', 'Growth'],
  },
];
