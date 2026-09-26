import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data/business.ts';
import { InteriorImage } from '../components/InteriorImage.tsx';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { ArrowRight, Check, MessageSquare } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  usePageMeta(
    'Interior Design Services in Hyderabad | Krishnaveni Interiors',
    'Explore complete home interiors, modular kitchens, custom wardrobes, TV units, false ceilings, pooja rooms, and commercial interiors in Hyderabad.'
  );

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#191919] text-[#F8F5EF] py-16 sm:py-24 border-b border-[#C6AA76]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Services · Hyderabad
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
            Interior solutions for homes and businesses.
          </h1>
          <p className="text-sm sm:text-base text-[#F8F5EF]/80 max-w-2xl mx-auto leading-relaxed pt-2">
            Explore services for your complete property or individual spaces. Share your requirements to discuss a suitable scope of work.
          </p>
        </div>
      </section>

      {/* Services List with Links to Individual Service Pages */}
      <section className="py-16 sm:py-24 bg-[#F8F5EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 p-6 sm:p-8 lg:p-10 rounded-sm bg-white border border-[#191919]/10 shadow-xs hover:border-[#C6AA76]/60 transition-all duration-200"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Media Column (5 cols) */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Link
                      to={`/services/${service.id}`}
                      className="group block relative overflow-hidden rounded-xs border border-[#191919]/10"
                    >
                      <InteriorImage
                        type={service.imageType}
                        alt={service.name}
                        aspectRatio="4:3"
                        showBadge={true}
                        className="group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                  </div>

                  {/* Text Description Column (7 cols) */}
                  <div className={`lg:col-span-7 space-y-4 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#C6AA76]">
                      <span>{String(index + 1).padStart(2, '0')}.</span>
                      <span className="uppercase tracking-wider">
                        {service.category === 'residential' ? 'Residential' : service.category === 'commercial' ? 'Commercial' : 'Turnkey'}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif text-[#191919] font-normal leading-snug">
                      <Link
                        to={`/services/${service.id}`}
                        className="hover:text-[#C6AA76] transition-colors"
                      >
                        {service.name}
                      </Link>
                    </h2>

                    <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Highlights */}
                    <div className="pt-1">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-[#191919]/85">
                        {service.highlights.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C6AA76] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons: View Details & Enquire */}
                    <div className="pt-4 border-t border-[#191919]/8 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/services/${service.id}`}
                        className="inline-flex items-center gap-1.5 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors shadow-xs"
                      >
                        <span>View Service Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        to={`/contact?service=${encodeURIComponent(service.name)}`}
                        className="inline-flex items-center gap-1.5 bg-[#F8F5EF] hover:bg-white text-[#191919] hover:text-[#C6AA76] border border-[#191919]/15 text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-[#C6AA76]" />
                        <span>Enquire About This Service</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#191919]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Customised Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#191919] font-normal tracking-tight">
            Need a tailored combination of services?
          </h2>
          <p className="text-sm sm:text-base text-[#191919]/75 max-w-xl mx-auto leading-relaxed">
            Whether for an apartment in Kondapur, a villa in Jubilee Hills, or a boutique office space, share your requirements to receive a structured scope of work.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] font-semibold text-sm px-8 py-3.5 rounded-sm transition-colors"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#C6AA76]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
