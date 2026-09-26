import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_SERVICES_CARDS, DESIGN_APPROACH, GETTING_STARTED_STEPS, INSPIRATION_GALLERY } from '../data/business.ts';
import { InteriorImage } from '../components/InteriorImage.tsx';
import { FaqAccordion } from '../components/FaqAccordion.tsx';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  usePageMeta(
    'Krishnaveni Interiors | Home & Commercial Interiors Hyderabad',
    'Discover home and commercial interiors in Hyderabad with Krishnaveni Interiors. Explore modular kitchens, wardrobes and complete interior solutions.'
  );

  // First 4 curated inspiration preview items
  const previewInspirations = INSPIRATION_GALLERY.slice(0, 4);

  return (
    <div className="space-y-0">
      {/* 5. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#161616] text-[#F8F5EF] pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
        {/* Subtle background ambiance */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 70% 30%, #C6AA76 0%, transparent 60%)`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-[#C6AA76]/30 text-[#C6AA76] text-xs font-semibold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6AA76]" />
                <span>HOME & COMMERCIAL INTERIORS IN HYDERABAD</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-white tracking-tight leading-[1.15]">
                Beautiful spaces. <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#DFCEA9]">Designed around you.</span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-[#F8F5EF]/80 max-w-2xl leading-relaxed">
                Create a home that reflects your style and supports everyday living. Krishnaveni Interiors brings together complete home interiors, modular kitchens, custom storage and commercial design solutions in Hyderabad.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C6AA76] hover:bg-[#B59864] text-[#191919] font-semibold text-sm px-7 py-3.5 rounded-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/design-inspiration"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-[#F8F5EF] hover:text-white font-medium text-sm px-6 py-3.5 rounded-sm border border-white/20 transition-all"
                >
                  <span>Explore Design Ideas</span>
                </Link>
              </div>

              {/* 3 Simple Highlights Below Hero */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#F8F5EF]/85 font-medium">
                <span>Complete Home Interiors</span>
                <span className="text-[#C6AA76]" aria-hidden="true">·</span>
                <span>Custom Interior Solutions</span>
                <span className="text-[#C6AA76]" aria-hidden="true">·</span>
                <span>Commercial Spaces</span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative p-2 rounded-sm bg-gradient-to-b from-[#2A2A2A] to-[#1C1C1C] border border-[#C6AA76]/25 shadow-2xl">
                <InteriorImage
                  type="living"
                  alt="Contemporary living room interior with warm lighting"
                  aspectRatio="4:3"
                  priority={true}
                  showBadge={true}
                  className="rounded-xs"
                />
                <div className="p-3 bg-[#191919] rounded-b-xs border-t border-white/5 flex items-center justify-between text-xs text-[#F8F5EF]/70">
                  <span>Contemporary Living Suite</span>
                  <span className="text-[#C6AA76]">Design Inspiration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTRODUCTION SECTION */}
      <section className="py-16 sm:py-20 bg-[#F8F5EF] border-b border-[#191919]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Our Perspective
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal tracking-tight">
            A space that feels like yours.
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#191919]/80 leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            <p>
              A welcoming living room. A kitchen that makes daily cooking easier. Storage that gives everything its place. Thoughtful interiors start with understanding how you use your space.
            </p>
            <p>
              At Krishnaveni Interiors, we help bring your ideas together through practical layouts, coordinated finishes and designs shaped around your requirements.
            </p>
          </div>
          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] text-sm font-semibold rounded-sm transition-colors"
            >
              <span>About Krishnaveni Interiors</span>
              <ArrowRight className="w-4 h-4 text-[#C6AA76]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. SERVICES SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
              Interior Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#191919] font-normal tracking-tight">
              Thoughtful interiors for every room.
            </h2>
            <p className="text-base text-[#191919]/75 leading-relaxed">
              Plan your complete interiors or begin with the spaces that matter most to you.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_SERVICES_CARDS.map((card) => (
              <div
                key={card.id}
                className="group flex flex-col justify-between bg-[#F8F5EF]/50 hover:bg-[#F8F5EF] border border-[#191919]/10 hover:border-[#C6AA76]/60 rounded-sm p-5 transition-all duration-200"
              >
                <div>
                  <div className="overflow-hidden rounded-xs mb-4">
                    <InteriorImage
                      type={card.imageType}
                      alt={card.title}
                      aspectRatio="4:3"
                      showBadge={false}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#191919] font-medium leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-[#191919]/75 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#191919]/8">
                  <Link
                    to={`/services/${card.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191919] group-hover:text-[#C6AA76] transition-colors focus-visible:outline-none"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] font-semibold text-sm px-7 py-3.5 rounded-sm transition-colors"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4 text-[#C6AA76]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. DESIGN APPROACH SECTION */}
      <section className="py-16 sm:py-20 bg-[#F8F5EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
              Principles & Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#191919] font-normal tracking-tight">
              Good design starts with everyday needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESIGN_APPROACH.map((item) => (
              <div
                key={item.number}
                className="bg-white p-6 rounded-sm border border-[#191919]/10 hover:border-[#C6AA76]/50 transition-colors"
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

      {/* 9. INSPIRATION PREVIEW SECTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
                Visual Gallery
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#191919] font-normal tracking-tight">
                Discover ideas for your space.
              </h2>
              <p className="text-base text-[#191919]/75 leading-relaxed">
                Explore design inspiration for living rooms, kitchens, bedrooms, wardrobes and commercial spaces.
              </p>
            </div>

            <Link
              to="/design-inspiration"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#191919] hover:text-[#C6AA76] transition-colors whitespace-nowrap self-start md:self-end"
            >
              <span>View Design Inspiration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Inspiration Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {previewInspirations.map((item) => (
              <Link
                key={item.id}
                to="/design-inspiration"
                className="group cursor-pointer bg-[#F8F5EF]/40 rounded-sm border border-[#191919]/10 overflow-hidden hover:border-[#C6AA76] transition-all block"
              >
                <div className="overflow-hidden">
                  <InteriorImage
                    type={
                      item.category === 'kitchen'
                        ? 'kitchen'
                        : item.category === 'bedroom'
                        ? 'bedroom'
                        : item.category === 'wardrobe'
                        ? 'wardrobe'
                        : 'living'
                    }
                    alt={item.title}
                    aspectRatio="4:3"
                    showBadge={true}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 space-y-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C6AA76]">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-serif text-base text-[#191919] font-medium leading-snug line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#191919]/70 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Visible Note Required by Section 9 */}
          <div className="mt-8 p-3.5 rounded-sm bg-[#F8F5EF] border border-[#191919]/10 text-center">
            <p className="text-xs text-[#191919]/70">
              <span className="font-semibold text-[#191919]">Visible note:</span> Images are for design inspiration and do not represent completed Krishnaveni Interiors projects.
            </p>
          </div>
        </div>
      </section>

      {/* 10. GETTING STARTED SECTION */}
      <section className="py-16 sm:py-20 bg-[#F8F5EF] border-b border-[#191919]/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
              Simple Steps
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#191919] font-normal tracking-tight">
              Your interior journey starts with a conversation.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GETTING_STARTED_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white p-6 sm:p-7 rounded-sm border border-[#191919]/10 relative space-y-3"
              >
                <div className="inline-block px-2.5 py-1 rounded-xs bg-[#191919] text-[#C6AA76] text-xs font-semibold">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl text-[#191919] font-medium">
                  {step.title}
                </h3>
                <p className="text-sm text-[#191919]/75 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] font-semibold text-sm px-7 py-3.5 rounded-sm transition-colors"
            >
              <span>Start Your Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#C6AA76]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 11. QUOTE SECTION */}
      <section className="py-16 sm:py-20 bg-[#191919] text-[#F8F5EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Custom Estimate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-white">
            Interiors planned around your requirements.
          </h2>
          <p className="text-base sm:text-lg text-[#F8F5EF]/80 leading-relaxed max-w-2xl mx-auto">
            Every project has different needs. Share your space, preferred materials and scope of work to request a personalised estimate.
          </p>

          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#C6AA76] hover:bg-[#B59864] text-[#191919] font-semibold text-sm px-8 py-4 rounded-sm shadow-md transition-all active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="text-xs text-[#F8F5EF]/60 pt-3 border-t border-white/10 max-w-xl mx-auto">
            Pricing and timelines depend on the confirmed scope, material choices, design approvals and site conditions.
          </p>
        </div>
      </section>

      {/* 15. FAQ SECTION */}
      <FaqAccordion />
    </div>
  );
};
