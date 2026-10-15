import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AGENCY_CONFIG } from '../../config/agencyConfig';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Our Creative Work', path: '/portfolio' },
    { name: 'Our Results', path: '/results' },
    { name: 'About Us', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/85 backdrop-blur-2xl shadow-[0_1px_8px_rgba(0,0,0,0.5)] border-b border-outline-variant/30'
          : 'bg-surface/60 backdrop-blur-xl border-b border-outline-variant/20'
      }`}
    >
      <div className="h-20 w-full px-4 sm:px-6 md:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-sm">
          <Link to="/" className="flex items-center gap-3 focus:outline-none group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-container via-primary to-secondary p-[1px] shadow-[0_0_20px_rgba(160,120,255,0.4)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-surface-container-lowest rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px] text-primary">hub</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase font-extrabold group-hover:text-primary transition-colors">
                {AGENCY_CONFIG.name}
              </span>
              <span className="font-label-caps text-[9px] text-secondary tracking-widest uppercase">
                Digital Growth Engine
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-3">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 transition-all duration-200 text-sm ${
                  active
                    ? 'bg-primary-container text-on-primary-container font-semibold rounded-lg shadow-sm'
                    : 'font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/60 rounded-lg'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Area */}
        <div className="flex items-center gap-space-sm">
          {/* WhatsApp Action */}
          <a
            aria-label="Connect on WhatsApp"
            className="h-10 w-10 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center text-secondary hover:text-on-surface transition-all duration-200 border border-outline-variant/30 hover:border-secondary shadow-[0_0_15px_rgba(76,215,246,0.15)] group"
            href={AGENCY_CONFIG.whatsapp.link}
            rel="noopener noreferrer"
            target="_blank"
            title="Chat on WhatsApp (+91 9305856475)"
          >
            <span className="material-symbols-outlined text-[20px] group-hover:scale-110 transition-transform">chat</span>
          </a>

          {/* Let's Talk CTA */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md text-label-md font-bold tracking-tight shadow-[0_0_25px_rgba(160,120,255,0.45)] hover:shadow-[0_0_35px_rgba(76,215,246,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
          >
            Let's Talk
          </Link>

          {/* Mobile Nav Toggle */}
          <button
            aria-label="Toggle Mobile Menu"
            className="xl:hidden h-10 w-10 flex items-center justify-center rounded-lg bg-surface-container-high text-on-surface hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden w-full bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-outline-variant/30 px-6 py-5 animate-fade-in">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    active
                      ? 'bg-primary-container text-on-primary-container font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-outline-variant/20 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center py-2.5 rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary text-on-primary-container font-label-md text-sm font-bold shadow-md"
              >
                Let's Talk
              </Link>
              <a
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-surface-container-high border border-outline-variant/30 text-secondary font-label-md text-sm hover:border-secondary transition-colors"
                href={AGENCY_CONFIG.whatsapp.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Us ({AGENCY_CONFIG.whatsapp.displayNumber})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
