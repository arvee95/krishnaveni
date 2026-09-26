import React, { useState } from 'react';
import { FAQS } from '../data/business.ts';
import { ChevronDown } from 'lucide-react';

interface FaqAccordionProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({
  className = '',
  title = 'Frequently Asked Questions',
  subtitle = 'Find straightforward answers about our interior services, single-room enquiries, estimates, and project timelines.',
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className={`py-12 sm:py-16 ${className}`} aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Common Inquiries
          </span>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-[#191919] mt-2 tracking-tight"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm sm:text-base text-[#191919]/75 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-answer-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={faq.question}
                className="bg-white rounded-sm border border-[#191919]/10 overflow-hidden transition-all duration-200"
              >
                <button
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleItem(index)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] hover:bg-[#F8F5EF]/60 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg text-[#191919] font-medium pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#191919]/15 flex items-center justify-center transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#191919] text-[#F8F5EF] border-[#191919]' : 'text-[#191919]/70 bg-transparent'
                    }`}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-[15px] text-[#191919]/80 leading-relaxed border-t border-[#191919]/6 bg-[#F8F5EF]/30"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
