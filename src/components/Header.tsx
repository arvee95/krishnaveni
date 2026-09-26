import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo.tsx';
import { BUSINESS_INFO } from '../data/business.ts';
import { Phone, Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change or Escape
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About', end: false },
    { to: '/services', label: 'Services', end: false },
    { to: '/design-inspiration', label: 'Design Inspiration', end: false },
    { to: '/contact', label: 'Contact', end: false },
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-xs border-b border-[#191919]/10 py-2 sm:py-2.5'
          : 'bg-[#F8F5EF] border-b border-[#191919]/8 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* 1. Official Logo in Dark Brand Area linking to Home */}
          <div className="shrink-0 flex items-center">
            <Logo size="header" variant="header" />
          </div>

          {/* 2. Navigation Links (Desktop: Home | About | Services | Design Inspiration | Contact) */}
          <nav
            className="hidden md:flex items-center gap-1.5 md:gap-3 lg:gap-5 xl:gap-7 text-xs lg:text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive =
                item.to === '/services'
                  ? isServicesActive
                  : item.end
                  ? location.pathname === item.to
                  : location.pathname.startsWith(item.to);

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={`relative py-1.5 px-1 sm:px-1.5 text-xs lg:text-sm tracking-normal lg:tracking-wide transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] rounded-xs ${
                    isActive
                      ? 'text-[#191919] font-semibold'
                      : 'text-[#191919]/70 hover:text-[#191919]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1 right-1 h-[2px] bg-[#C6AA76] rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* 3. Header Contact Actions */}
          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 shrink-0">
            {/* Phone action */}
            <a
              href={BUSINESS_INFO.phoneLink}
              className="inline-flex items-center gap-1.5 px-2 py-1.5 sm:px-2.5 sm:py-2 lg:px-3 text-xs font-semibold text-[#191919] hover:text-[#C6AA76] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] rounded-xs whitespace-nowrap"
              title={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C6AA76]" aria-hidden="true" />
              <span className="hidden sm:inline">Call Us</span>
              <span className="hidden xl:inline text-[#191919]/60 font-normal ml-0.5">
                ({BUSINESS_INFO.phone})
              </span>
            </a>

            {/* Primary consultation action: on screens sm: and up */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] text-xs font-semibold px-3 py-2 lg:px-4 lg:py-2.5 rounded-xs shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] whitespace-nowrap active:scale-[0.98]"
            >
              <span className="hidden lg:inline">Book a Consultation</span>
              <span className="lg:hidden">Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C6AA76]" aria-hidden="true" />
            </Link>

            {/* Mobile Menu Toggle Button (Visible on screens < md) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[#191919] hover:text-[#C6AA76] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] rounded-xs transition-colors"
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (Visible when open on < md) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#191919]/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#F8F5EF] p-5 sm:p-6 shadow-xl flex flex-col justify-between border-l border-[#191919]/10">
            <div>
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#191919]/10">
                <Logo
                  size="sm"
                  variant="drawer"
                  onClick={() => setMobileMenuOpen(false)}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#191919] hover:text-[#C6AA76] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] rounded-xs"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="mt-5 sm:mt-6 flex flex-col space-y-2" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive =
                    item.to === '/services'
                      ? isServicesActive
                      : item.end
                      ? location.pathname === item.to
                      : location.pathname.startsWith(item.to);

                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-left px-3.5 py-2.5 rounded-xs text-sm sm:text-base font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#191919] text-[#F8F5EF] font-semibold'
                          : 'text-[#191919] hover:bg-[#191919]/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6AA76]" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Actions in Drawer */}
            <div className="pt-5 sm:pt-6 border-t border-[#191919]/10 space-y-2.5">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-[#191919]/5 hover:bg-[#191919]/10 text-[#191919] text-sm font-semibold rounded-xs border border-[#191919]/15 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C6AA76]" />
                <span className="whitespace-nowrap">Call {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-[#25D366]/10 hover:bg-[#25D366]/15 text-[#1a5d38] text-sm font-semibold rounded-xs border border-[#25D366]/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span className="whitespace-nowrap">WhatsApp Chat</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] text-sm font-semibold rounded-xs shadow-xs transition-colors"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#C6AA76]" />
              </Link>

              <p className="text-[11px] text-center text-[#191919]/60 pt-1">
                Service Area: {BUSINESS_INFO.serviceArea}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
