import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.tsx';
import { BUSINESS_INFO, SERVICES } from '../data/business.ts';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'All Services' },
    { to: '/design-inspiration', label: 'Design Inspiration' },
    { to: '/contact', label: 'Contact & Quotes' },
  ];

  // Specific key service links for the footer
  const footerServices = [
    { label: 'Complete Home Interiors', to: '/services/complete-home-interiors' },
    { label: 'Modular Kitchens', to: '/services/modular-kitchens' },
    { label: 'Custom Wardrobes', to: '/services/wardrobes' },
    { label: 'Designer TV Units', to: '/services/tv-units' },
    { label: 'False Ceiling Designs', to: '/services/false-ceilings' },
    { label: 'Pooja Units', to: '/services/pooja-units' },
    { label: 'Turnkey Interior Solutions', to: '/services/turnkey-interiors' },
  ];

  return (
    <footer className="bg-[#141414] text-[#F8F5EF] border-t border-[#C6AA76]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" variant="footer" />
            <p className="text-sm text-[#F8F5EF]/75 leading-relaxed pt-2">
              Home and commercial interior solutions in Hyderabad. Designing Dreams. Creating Beautiful Spaces.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C6AA76] pt-1">
              <MapPin className="w-4 h-4 shrink-0 text-[#C6AA76]" />
              <span>Service Area: {BUSINESS_INFO.serviceArea}</span>
            </div>
          </div>

          {/* Quick Links Column (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C6AA76]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F5EF]/70">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-[#C6AA76] transition-colors focus-visible:outline-none focus-visible:underline text-left block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services Column (Col 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C6AA76]">
              Key Services
            </h4>
            <ul className="space-y-2 text-sm text-[#F8F5EF]/70">
              {footerServices.map((service) => (
                <li key={service.to}>
                  <Link
                    to={service.to}
                    className="hover:text-[#C6AA76] transition-colors focus-visible:outline-none focus-visible:underline text-left block truncate max-w-full"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Actions Column (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C6AA76]">
              Get in Touch
            </h4>
            <p className="text-xs text-[#F8F5EF]/65 leading-relaxed">
              Connect directly with our Hyderabad team to discuss layouts, material options, and estimates.
            </p>

            <div className="space-y-2.5 pt-1">
              <a
                href={BUSINESS_INFO.phoneLink}
                className="flex items-center gap-2.5 p-2.5 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-[#F8F5EF] hover:text-[#C6AA76] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C6AA76] shrink-0" />
                <span className="whitespace-nowrap">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 rounded-sm bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-xs font-medium text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F8F5EF]/50 gap-4">
          <p>© {currentYear} Krishnaveni Interiors. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designing Dreams. Creating Beautiful Spaces. · Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
};
