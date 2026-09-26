import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { BUSINESS_INFO } from '../data/business.ts';
import { EnquiryForm } from '../components/EnquiryForm.tsx';
import { FaqAccordion } from '../components/FaqAccordion.tsx';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  usePageMeta(
    'Contact Krishnaveni Interiors | Book a Consultation in Hyderabad',
    'Contact Krishnaveni Interiors in Hyderabad. Share your property requirements for custom home and commercial interior quotes and consultation.'
  );

  const [searchParams] = useSearchParams();
  const serviceQuery = searchParams.get('service') || undefined;

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-[#191919] text-[#F8F5EF] py-16 sm:py-24 border-b border-[#C6AA76]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Get In Touch · Hyderabad
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
            Let’s bring your ideas together.
          </h1>
          <p className="text-sm sm:text-base text-[#F8F5EF]/80 max-w-2xl mx-auto leading-relaxed pt-2">
            Tell us about your home or business space. Share your requirements to start a conversation with Krishnaveni Interiors.
          </p>
        </div>
      </section>

      {/* Main Content Area: Direct Contact Details & Enquiry Form */}
      <section className="py-16 sm:py-24 bg-[#F8F5EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Direct Contact Info (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#191919]/10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C6AA76]">
                    Direct Contact
                  </span>
                  <h2 className="font-serif text-2xl text-[#191919] font-normal mt-1">
                    Reach Out
                  </h2>
                  <p className="mt-2 text-xs sm:text-[13px] text-[#191919]/70 leading-relaxed">
                    Have an urgent enquiry or need an initial telephone conversation? Connect directly through phone or WhatsApp.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#191919]/10">
                  {/* Phone Display */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#191919] text-[#C6AA76] flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#191919]/60">
                        Phone
                      </span>
                      <a
                        href={BUSINESS_INFO.phoneLink}
                        className="text-sm font-semibold text-[#191919] hover:text-[#C6AA76] transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp Display */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4 fill-current stroke-none" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#191919]/60">
                        WhatsApp
                      </span>
                      <a
                        href={BUSINESS_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#191919] hover:text-[#25D366] transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  {/* Service Area Display */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#191919] text-[#C6AA76] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#191919]/60">
                        Service Area
                      </span>
                      <span className="text-sm font-semibold text-[#191919]">
                        {BUSINESS_INFO.serviceArea}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-3 pt-3 border-t border-[#191919]/10">
                  <a
                    href={BUSINESS_INFO.phoneLink}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] text-xs font-semibold rounded-sm transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6AA76]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded-sm transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current stroke-none" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Consultation Note */}
              <div className="p-5 rounded-sm bg-white border border-[#191919]/10 text-xs text-[#191919]/75 space-y-2">
                <span className="font-semibold text-[#191919] block text-xs uppercase tracking-wider">
                  Consultation Notice
                </span>
                <p className="leading-relaxed">
                  We schedule consultations across Hyderabad residential and commercial sites once the preliminary scope, floor plan, and location are shared.
                </p>
              </div>
            </div>

            {/* Right Column: Full Enquiry Form (8 cols) */}
            <div className="lg:col-span-8">
              <EnquiryForm initialServiceId={serviceQuery} />
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FaqAccordion
        title="Enquiry & Project FAQs"
        subtitle="Answers to common questions before submitting your project requirements."
      />
    </div>
  );
};
