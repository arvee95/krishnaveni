import React from 'react';
import { BUSINESS_INFO } from '../data/business.ts';
import { Phone, MessageSquare } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const encodedDefaultWhatsApp = encodeURIComponent(BUSINESS_INFO.defaultWhatsAppMessage);
  const desktopWhatsAppUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedDefaultWhatsApp}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button (Hidden on Mobile) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={desktopWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#191919] text-[#F8F5EF] hover:text-[#C6AA76] px-4 py-3 rounded-full shadow-lg border border-[#C6AA76]/30 hover:border-[#C6AA76] transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76]"
          aria-label="Chat with Krishnaveni Interiors on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
            <MessageSquare className="w-4 h-4 fill-current stroke-none" />
          </div>
          <div className="flex flex-col text-left pr-1">
            <span className="text-[10px] uppercase tracking-wider text-[#C6AA76] font-semibold leading-none">
              Direct Enquiry
            </span>
            <span className="text-xs font-semibold whitespace-nowrap mt-0.5">
              Chat on WhatsApp
            </span>
          </div>
        </a>
      </div>

      {/* Mobile Fixed Bottom Bar (Visible only on mobile/tablet < 768px) */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#191919] border-t border-[#C6AA76]/30 px-4 py-2.5 shadow-2xl safe-area-bottom"
        style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {/* Call Now Action */}
          <a
            href={BUSINESS_INFO.phoneLink}
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#262626] hover:bg-[#333333] text-[#F8F5EF] text-xs font-semibold rounded-sm border border-white/10 active:scale-[0.98] transition-transform whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#C6AA76]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Action */}
          <a
            href={desktopWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold rounded-sm shadow-xs active:scale-[0.98] transition-transform whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current stroke-none" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
