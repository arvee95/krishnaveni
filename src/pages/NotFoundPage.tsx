import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES } from '../data/business.ts';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { Home, ArrowRight, Phone, MessageSquare, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  usePageMeta(
    'Page Not Found | Krishnaveni Interiors Hyderabad',
    'The page you are looking for does not exist. Browse our home and commercial interior design services in Hyderabad.'
  );

  const popularServices = SERVICES.slice(0, 4);

  return (
    <div className="py-20 sm:py-28 bg-[#F8F5EF] min-h-[70vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
        {/* Error Code & Graphic */}
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#C6AA76] uppercase">
            Error 404
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#191919] font-normal tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-[#191919]/75 max-w-lg mx-auto leading-relaxed pt-1">
            The page or service link you are looking for might have been moved or does not exist. Let’s help you get back on track.
          </p>
        </div>

        {/* Primary Navigation Options */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-sm transition-colors shadow-xs"
          >
            <Home className="w-4 h-4 text-[#C6AA76]" />
            <span>Return to Home</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#F8F5EF] text-[#191919] border border-[#191919]/20 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-sm transition-colors shadow-xs"
          >
            <Compass className="w-4 h-4 text-[#C6AA76]" />
            <span>Browse All Services</span>
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#C6AA76] hover:bg-[#B59864] text-[#191919] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-sm transition-colors shadow-xs"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Popular Services Quick Links */}
        <div className="pt-8 border-t border-[#191919]/10 text-left bg-white p-6 rounded-sm border">
          <span className="block text-xs font-semibold uppercase tracking-wider text-[#191919]/60 mb-3">
            Popular Interior Services
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {popularServices.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="p-2 rounded-xs hover:bg-[#F8F5EF] text-[#191919] hover:text-[#C6AA76] font-medium flex items-center justify-between transition-colors border border-transparent hover:border-[#191919]/10"
              >
                <span>{service.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6AA76]" />
              </Link>
            ))}
          </div>
        </div>

        {/* Need Help Direct Call */}
        <div className="pt-2 text-xs text-[#191919]/65">
          Need immediate assistance in Hyderabad?{' '}
          <a href={BUSINESS_INFO.phoneLink} className="font-semibold text-[#191919] underline hover:text-[#C6AA76]">
            Call {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
