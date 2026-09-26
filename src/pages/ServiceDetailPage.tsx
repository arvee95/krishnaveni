import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES, ServiceItem, INSPIRATION_GALLERY } from '../data/business.ts';
import { Breadcrumbs } from '../components/Breadcrumbs.tsx';
import { InteriorImage } from '../components/InteriorImage.tsx';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { MessageSquare, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Support legacy or alternate slugs seamlessly
  const slugAliases: Record<string, string> = {
    'custom-wardrobes': 'wardrobes',
    'designer-tv-units': 'tv-units',
    'false-ceiling-designs': 'false-ceilings',
    'turnkey-interior-solutions': 'turnkey-interiors',
  };

  const resolvedSlug = slugAliases[slug || ''] || slug;
  const service = SERVICES.find((s) => s.id === resolvedSlug);

  // Set page meta if service found
  usePageMeta(
    service
      ? `${service.name} in Hyderabad | Krishnaveni Interiors`
      : 'Service Not Found | Krishnaveni Interiors',
    service
      ? `${service.pageHeading}. ${service.shortDescription} Professional interior solutions in Hyderabad.`
      : 'The requested interior service could not be found.'
  );

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-3xl font-serif text-[#191919]">Service Not Found</h1>
        <p className="text-sm text-[#191919]/70 max-w-md mx-auto">
          We couldn’t find the specific service page you requested. Please browse our complete directory of interior design services.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 bg-[#191919] text-[#F8F5EF] px-6 py-3 rounded-sm text-sm font-semibold hover:bg-[#2C2C2C] transition-colors"
        >
          <span>View All Services</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  // Related services (exclude current)
  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  // Relevant inspiration items for this service
  const relevantInspirations = INSPIRATION_GALLERY.filter((item) => {
    if (service.id === 'modular-kitchens') return item.category === 'kitchen';
    if (service.id === 'wardrobes') return item.category === 'wardrobe';
    if (service.id === 'tv-units') return item.category === 'tv-unit';
    if (service.id === 'bedroom-interiors') return item.category === 'bedroom';
    if (service.id === 'office-interiors' || service.id === 'hotel-restaurant-interiors')
      return item.category === 'commercial';
    return item.category === 'living';
  }).slice(0, 2);

  return (
    <div className="space-y-0">
      {/* Top Breadcrumb & Page Banner */}
      <section className="bg-[#191919] text-[#F8F5EF] pt-8 pb-16 sm:pb-20 border-b border-[#C6AA76]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumbs on Dark Background */}
          <div className="bg-white/5 py-2 px-3.5 rounded-sm inline-block border border-white/10">
            <Breadcrumbs
              items={[
                { label: 'Services', to: '/services' },
                { label: service.name },
              ]}
              className="text-[#DFCEA9] [&_a]:text-[#F8F5EF]/80 [&_span]:text-[#DFCEA9]"
            />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-[#C6AA76]/30 text-[#C6AA76] text-xs font-semibold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6AA76]" />
              <span>{service.category.toUpperCase()} INTERIORS · HYDERABAD</span>
            </div>

            {/* Unique Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
              {service.pageHeading}
            </h1>

            {/* Relevant Introduction */}
            <p className="text-base sm:text-lg text-[#F8F5EF]/85 leading-relaxed pt-1 max-w-2xl">
              {service.intro}
            </p>

            {/* Direct Enquiry Action */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                to={`/contact?service=${encodeURIComponent(service.name)}`}
                className="inline-flex items-center gap-2 bg-[#C6AA76] hover:bg-[#B59864] text-[#191919] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm shadow-md transition-all active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Enquire About {service.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-xs text-[#F8F5EF]/60">
                Service Area: Hyderabad
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 bg-[#F8F5EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Full Description & Scope Breakdown (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Comprehensive Description */}
              <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#191919]/10 shadow-xs space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6AA76]">
                  Overview & Approach
                </span>
                <h2 className="text-2xl font-serif text-[#191919] font-normal">
                  Detailed Service Information
                </h2>
                <p className="text-sm sm:text-base text-[#191919]/80 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6AA76]">
                  Key Considerations
                </span>
                <h2 className="text-2xl font-serif text-[#191919] font-normal">
                  How We Structure Your {service.name}
                </h2>

                <div className="grid grid-cols-1 gap-4 pt-1">
                  {service.scopePoints.map((point, idx) => (
                    <div
                      key={point.title}
                      className="p-5 bg-white rounded-sm border border-[#191919]/10 hover:border-[#C6AA76]/60 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#C6AA76]">
                          0{idx + 1}.
                        </span>
                        <h3 className="font-serif text-lg text-[#191919] font-medium">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#191919]/75 leading-relaxed pl-6">
                        {point.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Inclusions */}
              <div className="p-6 sm:p-8 rounded-sm bg-white border border-[#191919]/10 space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C6AA76]">
                  Inclusions
                </span>
                <h3 className="font-serif text-xl text-[#191919] font-medium">
                  What’s Included in This Service
                </h3>
                <ul className="space-y-3 pt-1">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-sm text-[#191919]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#C6AA76] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Clearly Labelled Design Inspiration Media & Quick Enquiry (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Primary Visual Asset */}
              <div className="bg-white p-3 rounded-sm border border-[#191919]/10 shadow-xs space-y-3">
                <div className="overflow-hidden rounded-xs">
                  <InteriorImage
                    type={service.imageType}
                    alt={`${service.name} design inspiration`}
                    aspectRatio="4:3"
                    priority={true}
                    showBadge={true}
                  />
                </div>
                <div className="p-2 text-center text-xs text-[#191919]/60 italic border-t border-[#191919]/8">
                  Design inspiration reference for {service.name.toLowerCase()} in Hyderabad.
                </div>
              </div>

              {/* Secondary Visual Asset */}
              <div className="bg-white p-3 rounded-sm border border-[#191919]/10 shadow-xs space-y-3">
                <div className="overflow-hidden rounded-xs">
                  <InteriorImage
                    type={service.secondaryImageType}
                    alt={`${service.name} complementary design style`}
                    aspectRatio="16:9"
                    showBadge={true}
                  />
                </div>
                <div className="p-2 text-center text-xs text-[#191919]/60 italic border-t border-[#191919]/8">
                  Coordinated finish and layout inspiration.
                </div>
              </div>

              {/* Prominent Enquiry Card */}
              <div className="p-6 sm:p-7 bg-[#191919] text-[#F8F5EF] rounded-sm border border-[#C6AA76]/30 shadow-md space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
                  Start Your Project
                </span>
                <h3 className="font-serif text-2xl text-white font-normal leading-snug">
                  Ready to discuss your {service.name.toLowerCase()}?
                </h3>
                <p className="text-xs sm:text-sm text-[#F8F5EF]/75 leading-relaxed">
                  Share your floor plan, measurements, or preferred design style to discuss next steps with Krishnaveni Interiors.
                </p>

                <div className="pt-2">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.name)}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C6AA76] hover:bg-[#B59864] text-[#191919] font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire About This Service</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Inspiration Gallery Teaser for This Service */}
          {relevantInspirations.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[#191919]/10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
                    Visual Exploration
                  </span>
                  <h3 className="text-2xl font-serif text-[#191919] font-normal mt-1">
                    Related Design Inspiration
                  </h3>
                </div>
                <Link
                  to="/design-inspiration"
                  className="text-xs font-semibold text-[#191919] hover:text-[#C6AA76] transition-colors flex items-center gap-1"
                >
                  <span>Explore Full Inspiration Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relevantInspirations.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 rounded-sm border border-[#191919]/10 space-y-3"
                  >
                    <InteriorImage
                      type={
                        item.category === 'kitchen'
                          ? 'kitchen'
                          : item.category === 'bedroom'
                          ? 'bedroom'
                          : item.category === 'wardrobe'
                          ? 'wardrobe'
                          : item.category === 'tv-unit'
                          ? 'tv-unit'
                          : item.category === 'commercial'
                          ? 'office'
                          : 'living'
                      }
                      alt={item.title}
                      aspectRatio="16:9"
                      showBadge={true}
                    />
                    <div>
                      <h4 className="font-serif text-lg text-[#191919] font-medium">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#191919]/70 mt-1 leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-white rounded-sm border border-[#191919]/10 text-center">
                <p className="text-xs text-[#191919]/70">
                  <span className="font-semibold text-[#191919]">Visible note:</span> Images are for design inspiration and do not represent completed Krishnaveni Interiors projects.
                </p>
              </div>
            </div>
          )}

          {/* Browse Other Services Links */}
          <div className="mt-16 pt-12 border-t border-[#191919]/10">
            <span className="block text-xs uppercase tracking-widest text-[#C6AA76] font-semibold mb-6 text-center">
              Other Interior Solutions in Hyderabad
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/services/${rel.id}`}
                  className="p-5 bg-white rounded-sm border border-[#191919]/10 hover:border-[#C6AA76] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C6AA76]">
                      {rel.category}
                    </span>
                    <h4 className="font-serif text-lg text-[#191919] font-medium mt-1 group-hover:text-[#C6AA76] transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-[#191919]/70 mt-2 line-clamp-2 leading-relaxed">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <div className="pt-4 mt-3 border-t border-[#191919]/8 flex items-center text-xs font-semibold text-[#191919] group-hover:text-[#C6AA76]">
                    <span>Learn More</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
