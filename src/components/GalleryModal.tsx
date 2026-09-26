import React, { useEffect } from 'react';
import { InspirationItem } from '../data/business.ts';
import { InteriorImage } from './InteriorImage.tsx';
import { X, ChevronLeft, ChevronRight, MessageSquare, ArrowRight } from 'lucide-react';

interface GalleryModalProps {
  item: InspirationItem | null;
  items: InspirationItem[];
  onClose: () => void;
  onSelect: (item: InspirationItem) => void;
  onEnquireStyle: (item: InspirationItem) => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
  onEnquireStyle,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextIndex = (currentIndex + 1) % items.length;
        onSelect(items[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        onSelect(items[prevIndex]);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const nextItem = items[(currentIndex + 1) % items.length];
  const prevItem = items[(currentIndex - 1 + items.length) % items.length];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="gallery-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#191919]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 bg-[#F8F5EF] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm border border-[#191919]/20 shadow-2xl flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#191919]/10 bg-white">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#191919]/70">
            <span className="uppercase tracking-wider text-[#C6AA76]">Design Inspiration</span>
            <span>·</span>
            <span>{item.categoryLabel}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#191919]/50 font-mono">
              {currentIndex + 1} of {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 text-[#191919] hover:text-[#C6AA76] hover:bg-[#F8F5EF] rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] transition-colors"
              aria-label="Close modal preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Section */}
        <div className="relative bg-[#191919]">
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
            priority={true}
            showBadge={true}
            className="w-full max-h-[55vh]"
          />

          {/* Prev/Next arrows overlay */}
          <button
            onClick={() => onSelect(prevItem)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#191919]/70 hover:bg-[#191919] text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76]"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => onSelect(nextItem)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#191919]/70 hover:bg-[#191919] text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76]"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Content & Action Bar */}
        <div className="p-6 sm:p-8 bg-white space-y-5">
          <div>
            <h3
              id="gallery-modal-title"
              className="font-serif text-xl sm:text-2xl text-[#191919] font-normal"
            >
              {item.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#191919]/75 leading-relaxed">
              {item.caption}
            </p>
          </div>

          {/* Key Design Elements */}
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-[#191919]/70 mb-2">
              Key Style Elements
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#191919]/80 font-medium">
              {item.features.map((feat, idx) => (
                <React.Fragment key={feat}>
                  <span className="text-[#191919]">{feat}</span>
                  {idx < item.features.length - 1 && (
                    <span className="text-[#C6AA76]" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Disclaimer Note */}
          <p className="text-xs text-[#191919]/60 italic border-l-2 border-[#C6AA76] pl-3 py-1">
            Note: Images are for design inspiration and do not represent completed Krishnaveni Interiors projects.
          </p>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#191919]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-xs text-[#191919]/70">
              Like this direction? We can adapt these elements to your Hyderabad floor plan.
            </div>

            <button
              onClick={() => {
                onClose();
                onEnquireStyle(item);
              }}
              className="inline-flex items-center justify-center gap-2 bg-[#191919] hover:bg-[#2C2C2C] text-[#F8F5EF] hover:text-[#C6AA76] text-xs font-semibold px-5 py-2.5 rounded-sm transition-colors shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C6AA76]" />
              <span>Discuss This Style</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
