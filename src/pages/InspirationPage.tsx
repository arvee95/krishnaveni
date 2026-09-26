import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { INSPIRATION_GALLERY, InspirationItem } from '../data/business.ts';
import { InteriorImage } from '../components/InteriorImage.tsx';
import { GalleryModal } from '../components/GalleryModal.tsx';
import { usePageMeta } from '../hooks/usePageMeta.ts';
import { ArrowRight, Maximize2, MessageSquare } from 'lucide-react';

type FilterCategory = 'all' | 'living' | 'kitchen' | 'bedroom' | 'wardrobe' | 'tv-unit' | 'commercial';

export const InspirationPage: React.FC = () => {
  usePageMeta(
    'Design Inspiration Gallery | Krishnaveni Interiors Hyderabad',
    'Browse living room, modular kitchen, bedroom, wardrobe, and commercial interior design ideas and inspiration for Hyderabad homes.'
  );

  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedItem, setSelectedItem] = useState<InspirationItem | null>(null);

  const filters: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'living', label: 'Living Rooms' },
    { id: 'kitchen', label: 'Kitchens' },
    { id: 'bedroom', label: 'Bedrooms' },
    { id: 'wardrobe', label: 'Wardrobes' },
    { id: 'tv-unit', label: 'TV Units' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const filteredItems = activeFilter === 'all'
    ? INSPIRATION_GALLERY
    : INSPIRATION_GALLERY.filter((item) => item.category === activeFilter);

  const handleEnquireStyle = (item: InspirationItem) => {
    const categoryToServiceMap: Record<string, string> = {
      living: 'Living Room Interiors',
      kitchen: 'Modular Kitchens',
      bedroom: 'Bedroom Interiors',
      wardrobe: 'Custom Wardrobes',
      'tv-unit': 'Designer TV Units',
      commercial: 'Office Interiors',
    };
    const targetService = categoryToServiceMap[item.category] || 'Complete Home Interiors';
    navigate(`/contact?service=${encodeURIComponent(targetService)}`);
  };

  return (
    <div className="space-y-0">
      {/* Header */}
      <section className="bg-[#191919] text-[#F8F5EF] py-16 sm:py-24 border-b border-[#C6AA76]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Gallery & Moodboards
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-tight">
            Find inspiration for your next space.
          </h1>
          <p className="text-sm sm:text-base text-[#F8F5EF]/80 max-w-xl mx-auto leading-relaxed pt-2">
            Discover styles, layouts and details to help you explain what you love.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery */}
      <section className="py-12 sm:py-20 bg-[#F8F5EF] border-b border-[#191919]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Functional Filter Controls */}
          <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
            <div className="inline-flex p-1 bg-white rounded-sm border border-[#191919]/15 shadow-xs">
              {filters.map((filter) => {
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-xs transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] cursor-pointer ${
                      isActive
                        ? 'bg-[#191919] text-[#F8F5EF] font-semibold shadow-xs'
                        : 'text-[#191919]/70 hover:text-[#191919] hover:bg-[#F8F5EF]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mandatory Clear Disclaimer Note */}
          <div className="mb-8 p-3.5 rounded-sm bg-white border border-[#191919]/10 text-center">
            <p className="text-xs text-[#191919]/75">
              <span className="font-semibold text-[#191919]">Design inspiration note:</span> All images displayed are for aesthetic and design inspiration and do not represent completed Krishnaveni Interiors projects.
            </p>
          </div>

          {/* Responsive Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedItem(item);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View larger preview of ${item.title}`}
                className="group cursor-pointer bg-white rounded-sm border border-[#191919]/10 hover:border-[#C6AA76] overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76]"
              >
                <div className="relative overflow-hidden">
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
                    aspectRatio="4:3"
                    showBadge={true}
                    className="group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#191919]/80 text-white p-2 rounded-xs pointer-events-none">
                    <Maximize2 className="w-4 h-4 text-[#C6AA76]" />
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C6AA76]">
                      {item.categoryLabel}
                    </span>
                    <span className="text-[11px] text-[#191919]/50">Click to expand</span>
                  </div>

                  <h3 className="font-serif text-lg text-[#191919] font-medium leading-snug group-hover:text-[#191919]">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#191919]/75 leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>

                  <div className="pt-3 border-t border-[#191919]/8 flex items-center justify-between text-xs">
                    <span className="text-[#191919]/60">Explore layout</span>
                    <span className="text-xs font-semibold text-[#191919] group-hover:text-[#C6AA76] flex items-center gap-1 transition-colors">
                      Preview <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16 bg-white rounded-sm border border-[#191919]/10">
              <p className="text-sm text-[#191919]/70">No inspiration images found for this category.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-3 text-xs font-semibold text-[#C6AA76] underline"
              >
                Reset Filter to All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA from Section 14 */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#191919]/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#C6AA76] font-semibold">
            Tailored To Your Space
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#191919] font-normal tracking-tight">
            Like a design direction? Let’s discuss how it could suit your space.
          </h2>
          <p className="text-sm sm:text-base text-[#191919]/75 max-w-xl mx-auto leading-relaxed">
            Every home has a unique floor plan, natural lighting, and storage requirement. We can adapt these textures, layouts, and finishes to your residence in Hyderabad.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] font-semibold text-sm px-8 py-3.5 rounded-sm shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#C6AA76]" />
              <span>Discuss Your Ideas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Accessible Modal Preview */}
      <GalleryModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
        onEnquireStyle={handleEnquireStyle}
      />
    </div>
  );
};
