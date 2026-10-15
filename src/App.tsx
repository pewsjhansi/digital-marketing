import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AnimatedMarketingBackground } from './components/background/AnimatedMarketingBackground';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ResultsPage } from './pages/ResultsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { InsightsPage } from './pages/InsightsPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { LegalPage } from './pages/LegalPage';

// Helper component to scroll to top on route navigation
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-[#11131d] text-[#e1e1f1] flex flex-col selection:bg-primary selection:text-on-primary">
        {/* Reusable Animated Marketing Background */}
        <AnimatedMarketingBackground />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Main Content Router */}
        <main className="flex-grow z-10 pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/our-creative-work" element={<PortfolioPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/our-results" element={<ResultsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/insights/:slug" element={<ArticleDetailPage />} />
            <Route path="/legal/:docType" element={<LegalPage />} />
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms-of-service" element={<LegalPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
