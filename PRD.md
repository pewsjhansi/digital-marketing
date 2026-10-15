# PRODUCT REQUIREMENTS DOCUMENT (PRD)
## DIGITAL MARKETING — Premium Animated Agency Website

**Project Name:** DIGITAL MARKETING  
**Platform:** Google Antigravity IDE  
**Website Type:** Professional High-End Digital Marketing Agency Website  
**Primary Goal:** Generate leads, showcase creative work, explain services, and build trust with potential clients.  
**Design Style:** Premium, futuristic, cinematic, animated, responsive.  
**Created:** October 2026  
**Status:** In Active Development / Production Ready  

---

## 1. PROJECT OVERVIEW

Create a premium digital marketing agency website named **DIGITAL MARKETING**.

The website presents the agency's services, showcases promotional videos and client Reels, displays verified marketing results with transparent data integrity, and allows visitors to contact the agency through WhatsApp or an interactive consultation form.

The visual identity includes floating digital marketing icons, glowing particles, animated gradient backgrounds, premium typography, and smooth transitions.

### Brand Tagline
> **"We turn your vision into digital growth"**

### Primary Objectives
- **Generate qualified business inquiries:** Frictionless booking funnels, interactive consultation scheduling, and immediate WhatsApp escalations.
- **Showcase video and social media creative capabilities:** Instagram Reels-inspired 9:16 vertical video player and category filters.
- **Explain digital marketing services clearly:** Comprehensive breakdowns of Meta Ads, SEO & Local SEO, Google Business Profile, Website Development, Social Media Marketing, and AI Video Creation.
- **Build credibility through verified results:** Strict data integrity ensuring no invented metrics are masqueraded as client results, adhering to transparent reporting.
- **Make contacting simple:** One-click WhatsApp chats with prefilled prompts and structured inquiry capture.
- **Deliver a premium experience:** Seamless responsiveness across desktop, tablet, and mobile viewports with smooth micro-interactions.

---

## 2. TARGET AUDIENCE

1. **Small and medium-sized businesses (SMBs):** Looking to scale predictable lead pipelines.
2. **Local businesses:** Seeking Google Maps 3-Pack and local search domination.
3. **E-commerce & D2C brands:** Requiring high-ROAS Meta and Google ad campaigns.
4. **Startups & new ventures:** Needing end-to-end digital identity, branding, and web presence.
5. **Businesses needing ongoing management:** Social media content, reels, and ongoing campaign optimization.
6. **Brands interested in AI creatives:** Promotional videos, AI avatars, kinetic captions, and short-form video reels.

---

## 3. WEBSITE STRUCTURE — 7 PAGES

| No. | Page Name | Route | Purpose & Key Features |
|---|---|---|---|
| 1 | **Home** | `/` | Cinematic hero, value proposition, service overview, featured client reels, proof points, and CTAs. |
| 2 | **Services** | `/services` | 6 animated service cards with View Details modals and Get a Quote actions. |
| 3 | **Our Creative Work** | `/portfolio` | Instagram Reels-style 9:16 vertical portfolio with category filters and interactive modal video player. |
| 4 | **Our Results** | `/results` | Campaign performance metrics with strict transparency disclaimer and demo dashboard preview. |
| 5 | **About Us** | `/about` | Agency story, mission, vision, creative philosophy, 5-step working process, and reasons to choose us. |
| 6 | **Contact / Free Consultation** | `/contact` | Comprehensive consultation form, instant validation, WhatsApp direct link, and inquiry receipt. |
| 7 | **Insights / Blog** | `/insights` | Educational articles, category filters, search bar, reading time, and single-article reader (`/insights/:slug`). |

---

## 4. FUNCTIONAL AND DESIGN REQUIREMENTS

### FR-01: Premium Animated Background
- **Component:** `AnimatedMarketingBackground.tsx`
- **Required 7 Floating Icons:**
  1. Facebook
  2. Instagram
  3. Google
  4. SEO
  5. AI
  6. Google Ads
  7. Analytics
- **Behavior:**
  - Icons float slowly in varying directions with independent keyframe speeds (12s – 22s).
  - Background features glowing ambient radial purple and blue gradients (`#a855f7`, `#6366f1`, `#38bdf8`).
  - Icons and particle layers reside behind content with `pointer-events-none` and `z-0` to avoid blocking user interactions.
  - Full support for `prefers-reduced-motion` accessibility standards.

### FR-02: Home Page Hero
- **Heading:** `DIGITAL MARKETING`
- **Tagline:** `We turn your vision into digital growth`
- **Primary CTA:** `Explore our services` &rarr; Navigates to `/services`
- **Secondary CTA:** `Let's work together` &rarr; Navigates to `/contact`
- **Additional Elements:**
  - Live status indicator ("Now Onboarding Q4 Performance Clients").
  - Direct WhatsApp link (`+91 9305856475`).
  - Trust badge strip highlighting Meta & Google Ads, Local SEO, AI Video, and Verified Analytics.

### FR-03: Services Page
Displays six animated service cards:
1. **Meta Ads:** Facebook & Instagram advertising, audience targeting, and campaign optimization.
2. **SEO & Local SEO:** Search visibility, on-page optimization, technical SEO, and local search optimization.
3. **Google Business Profile:** Business profile setup, optimization, and local presence management.
4. **Website Development:** Responsive, modern websites designed to present a business professionally and generate inquiries.
5. **Social Media Marketing:** Content planning, social media creatives, publishing strategy, and account management.
6. **AI Video Creation:** AI-generated videos, promotional videos, product advertisements, and short-form content.

**Each Card Includes:**
- Relevant icon and category badge.
- Service title and concise description.
- Deliverables snapshot.
- Interactive hover effects and elevation.
- `View Details` action opening a detailed modal with comprehensive deliverables and expected benchmarks.
- `Get a Quote` CTA linking directly to `/contact?service={serviceId}`.

### FR-04: Our Creative Work — Client Reels
- **Style:** 9:16 vertical cards inspired by Instagram Reels and TikTok.
- **Categories:**
  - All
  - AI Generated Videos
  - Promotional Videos
  - Product Advertisements
  - Business Reels
  - Social Media Creatives
- **Video Card UI:** Thumbnail poster, duration badge, view count, client type, project title, and play button overlay.
- **Video Player Modal:**
  - Plays configured media URLs using standard HTML5 video.
  - Controls: Play/pause, sound/mute with volume slider, progress scrubber, and fullscreen.
  - Close button and `Escape` key shortcut support.
  - Stops playback and resets state immediately upon modal closure.
  - Displays loading spinner and graceful error fallback state.
  - Lazy loads media to conserve client bandwidth.

### FR-05: Our Results Page (Data Integrity & Transparency)
- **Primary Transparency Requirement:**
  - No fabricated or fictional metrics displayed as verified client results.
  - Initial default state displays:
    > **"Your results will appear here."**  
    > *"We believe in transparent reporting. Verified campaign results will be published here when available."*
- **Interactive Reporting Preview (DEMO):**
  - Explicitly labeled: `DEMO — NOT ACTUAL CLIENT RESULTS`.
  - Showcases all 6 mandatory metrics:
    1. Leads Generated
    2. Total Reach
    3. Engagement
    4. Website Visitors
    5. Ad Clicks
    6. Conversion Rate
  - Allows prospective clients to see the structure of reporting dashboards before onboarding.

### FR-06: About Us Page
- Agency introduction and founding ethos.
- Mission and vision statements.
- Creative philosophy (Data-Driven Logic + Cinematic Storytelling).
- 5-step working process:
  1. Discovery & Deep Audit
  2. Strategic Architecture
  3. Creative Production & Technical Setup
  4. Campaign Launch & Real-Time Tracking
  5. Optimization, Scaling & Transparent Reporting
- Core reasons to partner with the agency.
- Free consultation CTA.

### FR-07: Contact and Free Consultation Page
- **Consultation Form Fields:**
  - Full Name (required)
  - Business Email (required, regex-validated)
  - Phone Number (required, min 8 digits with country code)
  - Business Name (optional)
  - Website URL (optional)
  - Services Required (multi-select badges, minimum 1 required)
  - Approximate Marketing Budget (optional selector)
  - Project Details (required textarea)
  - Preferred Contact Method (WhatsApp, Phone, Email)
- **Submit Button:** `GET FREE CONSULTATION`
- **Validation & Submission:**
  - Client-side validation with real-time feedback.
  - Anti-spam honeypot protection.
  - Simulates realistic backend processing, generates unique reference ID (`DM-XXXXXX`), records to local storage, triggers confetti animation, and provides a direct WhatsApp escalation link.
- **WhatsApp Integration:**
  - Configured number: `+91 9305856475`
  - WhatsApp link: `https://wa.me/919305856475`
  - Prefilled message: *"Hello, I would like a free digital marketing consultation for my business."*

### FR-08: Instagram Profile Link
- "Follow us on Instagram" button with Instagram icon.
- Configurable destination URL: `INSTAGRAM_PROFILE_URL` defined in `agencyConfig.ts`.
- Avoids fictional handles; clearly marked for client production configuration.

### FR-09: Insights / Blog Page
- Article listing with search functionality and category filter pills.
- Featured headline article with reading time, author bio, and publication date.
- Dedicated reader route `/insights/:slug` with key takeaways, full body content, related articles, and consultation CTA.
- Six core categories:
  - Meta Ads
  - SEO & Local SEO
  - Google Business Profile
  - Website Development
  - Social Media Marketing
  - AI Video Creation

### FR-10: Global Navigation and Footer
- **Navbar:** Sticky glassmorphism header, brand logo, navigation links, WhatsApp pill, and "Let's Talk" CTA. Mobile drawer menu with touch-friendly navigation.
- **Footer:** Brand identity, navigation columns, services directory, WhatsApp phone link, configured Instagram button, privacy policy, terms and conditions, and dynamic copyright year.

---

## 5. USER FLOWS

### Flow A — Discover Services & Inquire
`Home` &rarr; `Explore our services` &rarr; `Services page` &rarr; `View Details` &rarr; `Get a Quote` &rarr; `Contact Form` (pre-populated with service) &rarr; Submit &rarr; Confirmation.

### Flow B — Review Creative Work & Watch Reels
`Home` or `Navbar` &rarr; `Our Creative Work` &rarr; Select Category &rarr; Click Video Card &rarr; Video Player Modal opens &rarr; Stream reel &rarr; Close player via button or `Escape`.

### Flow C — Contact via WhatsApp
Any page &rarr; Navbar WhatsApp button or Hero callout &rarr; Opens `https://wa.me/919305856475` with prefilled message &rarr; Visitor sends message in WhatsApp.

### Flow D — Request Free Consultation
`Contact page` &rarr; Fill Full Name, Email, Phone, select Services, provide Project Details &rarr; Click `GET FREE CONSULTATION` &rarr; Form validates &rarr; Processing indicator &rarr; Success screen with Inquiry ID & instant WhatsApp confirmation button.

### Flow E — Review Transparent Agency Results
`Navbar` &rarr; `Our Results` &rarr; View primary transparency disclaimer &rarr; Toggle live dashboard preview labeled `DEMO — NOT ACTUAL CLIENT RESULTS` &rarr; Inspect metrics.

---

## 6. NON-FUNCTIONAL REQUIREMENTS

- **Performance:** Sub-2s initial load, lazy loading of images and video players, zero layout shift (CLS).
- **Responsive Design:** 100% fluid layouts tested across 320px, 375px, 390px, 430px, 768px, 1024px, 1440px. No horizontal overflow.
- **Accessibility:** Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<dialog>`), visible focus indicators, ARIA labels, and reduced-motion styling.
- **SEO:** Descriptive titles, Open Graph tags, single `<h1>` hierarchy, meta descriptions, and search-friendly URLs.
- **Security:** Input sanitization, client-side validation, honeypot spam traps, zero exposed secret keys.

---

## 7. TECHNICAL ARCHITECTURE

- **Core Framework:** React 19 + TypeScript
- **Bundler & Tooling:** Vite 6
- **Styling:** Tailwind CSS + Custom CSS Variables & Glassmorphism Design System
- **Routing:** React Router DOM (v7)
- **Icons:** Lucide React
- **Effects:** Canvas Confetti for consultation celebration
- **Centralized Config:** `src/config/agencyConfig.ts`

---

## 8. ACCEPTANCE CHECKLIST

- [x] All 7 primary routes functional (`/`, `/services`, `/portfolio`, `/results`, `/about`, `/contact`, `/insights`, plus `/insights/:slug` and `/legal/*`).
- [x] Hero heading matches exact text: **DIGITAL MARKETING**.
- [x] Hero tagline matches exact text: **We turn your vision into digital growth**.
- [x] Hero primary CTA navigates to `/services` and secondary CTA navigates to `/contact`.
- [x] Floating marketing icons (Facebook, Instagram, Google, SEO, AI, Google Ads, Analytics) render smoothly.
- [x] All 6 services displayed with hover effects, View Details modal, and Get a Quote action.
- [x] Portfolio category filtering works across all 5 required categories.
- [x] Video player modal plays video, supports custom controls, and stops completely on close.
- [x] Results page displays transparency message: *"Your results will appear here."* and demo data is labeled *"DEMO — NOT ACTUAL CLIENT RESULTS"*.
- [x] WhatsApp buttons direct to `+91 9305856475` with prefilled message.
- [x] Contact form validates required fields and reports submission status accurately.
- [x] Configurable Instagram link uses `INSTAGRAM_PROFILE_URL`.
- [x] Navbar and footer links navigate cleanly with zero broken paths.
- [x] Mobile layouts are free of horizontal overflow.
- [x] Production build passes with zero errors.
