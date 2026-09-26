import React from 'react';
import { Link } from 'react-router-dom';
import { DESIGN_APPROACH } from '../data/business.ts';
import { InteriorImage } from '../components/InteriorImage.tsx';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { ArrowRight, Check } from 'lucide-react';

export const AboutPage: React.FC = () => {
  usePageMeta(
    'About Krishnaveni Interiors | Designing Dreams in Hyderabad',
    'Learn about Krishnaveni Interiors in Hyderabad. Delivering practical, elegant home and commercial interior solutions shaped around your daily living.'
  );

  return (
    <div className="space-y-0">
      {/* Hero Header */}
      <section className="bg-[#191919] text-[#F8F5EF] py-16 sm:py-24 border-b border-[#C6AA76]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            About Krishnaveni Interiors · Hyderabad
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
            Designing Dreams. Creating Beautiful Spaces.
          </h1>
          <p className="text-sm sm:text-base text-[#F8F5EF]/75 max-w-xl mx-auto leading-relaxed pt-2">
            Thoughtful residential and commercial interior solutions shaped around your daily living and practical needs.
          </p>
        </div>
      </section>

      {/* Main Narrative & Philosophy */}
      <section className="py-16 sm:py-24 bg-[#F8F5EF] border-b border-[#191919]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5">
              <div className="relative p-2 bg-white rounded-sm border border-[#191919]/10 shadow-sm">
                <InteriorImage
                  type="living"
                  alt="Coordinated modern home interior in Hyderabad"
                  aspectRatio="4:3"
                  showBadge={true}
                />
                <div className="p-3 bg-[#F8F5EF] text-center border-t border-[#191919]/5">
                  <span className="text-xs text-[#191919]/70 font-medium">
                    Krishnaveni Interiors · Hyderabad
                  </span>
                </div>
              </div>
            </div>

            {/* Right Narrative Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
                Our Story & Philosophy
              </span>

              <div className="space-y-4 text-base sm:text-lg text-[#191919]/85 leading-relaxed">
                <p>
                  Krishnaveni Interiors offers home and commercial interior solutions in Hyderabad. From individual rooms to complete interiors, our services bring together design ideas and practical requirements.
                </p>
                <p>
                  We believe a space should look inviting and feel comfortable to use. That means considering the layout, storage, finishes and details that shape everyday experiences.
                </p>
                <p>
                  Whether you’re planning a home, office, hotel or restaurant, the starting point is understanding your vision and what your space needs to do.
                </p>
              </div>

              {/* Service Summary Required by Section 12 */}
              <div className="pt-6 border-t border-[#191919]/10">
                <span className="block text-xs uppercase tracking-wider text-[#191919]/60 font-semibold mb-3">
                  Core Offerings Summary
                </span>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base font-serif text-[#191919] font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C6AA76]" />
                    <span>Complete Homes</span>
                  </span>
                  <span className="text-[#C6AA76]" aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C6AA76]" />
                    <span>Modular Kitchens</span>
                  </span>
                  <span className="text-[#C6AA76]" aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C6AA76]" />
                    <span>Custom Storage</span>
                  </span>
                  <span className="text-[#C6AA76]" aria-hidden="true">·</span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#C6AA76]" />
                    <span>Commercial Interiors</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach Section on About Page */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
              Design Approach
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#191919] font-normal tracking-tight">
              Good design starts with everyday needs.
            </h2>
            <p className="text-sm sm:text-base text-[#191919]/75 max-w-xl mx-auto leading-relaxed">
              Every detail is planned with careful consideration for your daily movement, family lifestyle, and visual harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGN_APPROACH.map((item) => (
              <div
                key={item.number}
                className="bg-[#F8F5EF]/50 p-6 rounded-sm border border-[#191919]/10 hover:border-[#C6AA76]/50 transition-colors"
              >
                <div className="text-xs font-mono font-semibold text-[#C6AA76] mb-3">
                  {item.number}
                </div>
                <h3 className="font-serif text-xl text-[#191919] font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#191919]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-16 sm:py-20 bg-[#F8F5EF] border-b border-[#191919]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Next Steps
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#191919] font-normal tracking-tight">
            Let’s talk about your space.
          </h2>
          <p className="text-base text-[#191919]/75 max-w-xl mx-auto leading-relaxed">
            Whether you are starting from a blank floor plan or revitalising individual rooms in Hyderabad, we are here to discuss your ideas.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] font-semibold text-sm px-8 py-3.5 rounded-sm shadow-sm transition-colors"
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
