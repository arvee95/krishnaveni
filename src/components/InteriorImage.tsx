import React, { useState } from 'react';

export type InteriorImageType =
  | 'living'
  | 'kitchen'
  | 'wardrobe'
  | 'tv-unit'
  | 'bedroom'
  | 'ceiling'
  | 'pooja'
  | 'office'
  | 'restaurant'
  | 'turnkey';

interface InteriorImageProps {
  type: InteriorImageType;
  alt: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | '1:1' | '3:2';
  showBadge?: boolean;
  priority?: boolean;
}

// Curated high-resolution architectural interior photography with fallback
const IMAGE_URLS: Record<InteriorImageType, string> = {
  living: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  kitchen: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  wardrobe: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
  'tv-unit': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
  bedroom: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
  ceiling: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  pooja: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  turnkey: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
};

export const InteriorImage: React.FC<InteriorImageProps> = ({
  type,
  alt,
  className = '',
  aspectRatio = '4:3',
  showBadge = true,
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square',
    '3:2': 'aspect-[3/2]',
  }[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden rounded-sm bg-[#191919]/5 border border-[#191919]/10 ${aspectClass} ${className}`}
    >
      {/* Primary Image */}
      {!hasError && (
        <img
          src={IMAGE_URLS[type]}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Styled Architectural Vector Visual Fallback if network blocks external images */}
      {(hasError || !isLoaded) && (
        <div
          className={`absolute inset-0 flex flex-col justify-between p-5 bg-gradient-to-br from-[#1E1E1E] to-[#121212] text-[#F8F5EF] ${
            hasError ? 'opacity-100 z-10' : 'opacity-100'
          }`}
        >
          {/* Subtle architectural grid background overlay */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(#C6AA76 1px, transparent 1px), linear-gradient(90deg, #C6AA76 1px, transparent 1px)`,
              backgroundSize: '24px 24px',
            }}
          />

          {/* Top section with subtle architectural icon */}
          <div className="relative z-10 flex items-center justify-between text-xs text-[#C6AA76]">
            <span className="tracking-widest uppercase text-[10px] font-medium">Architectural Concept</span>
            <div className="w-2 h-2 rounded-full bg-[#C6AA76]/60 animate-pulse" />
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 my-auto flex flex-col items-center text-center px-4">
            <div className="w-12 h-12 rounded-full border border-[#C6AA76]/40 flex items-center justify-center mb-3 bg-[#191919]/60 text-[#C6AA76]">
              {type === 'kitchen' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h18v18H3V3zm3 6h12M9 3v6m6-6v6" />
                </svg>
              )}
              {type === 'wardrobe' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 3h16v18H4V3zm8 0v18M8 12h1m6 0h1" />
                </svg>
              )}
              {type === 'tv-unit' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6h18v11H3V6zm5 15h8m-4-4v4" />
                </svg>
              )}
              {type === 'pooja' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l3 5h-6l3-5zm-5 7h10v12H7V9zm5 3v5" />
                </svg>
              )}
              {type === 'office' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )}
              {(type === 'living' || type === 'bedroom' || type === 'ceiling' || type === 'restaurant' || type === 'turnkey') && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )}
            </div>
            <p className="font-serif text-lg text-[#F8F5EF] leading-snug">{alt}</p>
            <p className="text-xs text-[#C6AA76] mt-1 tracking-wide">Contemporary Interior Aesthetic</p>
          </div>

          {/* Bottom attribution notice */}
          <div className="relative z-10 text-[10px] text-[#A0A0A0] text-center border-t border-white/10 pt-2">
            Krishnaveni Interiors · Hyderabad
          </div>
        </div>
      )}

      {/* Mandatory Unboxed Design Inspiration Notice */}
      {showBadge && (
        <div className="absolute bottom-2.5 left-2.5 z-20 pointer-events-none">
          <div className="bg-[#191919]/85 backdrop-blur-xs text-[#F8F5EF] text-[10px] sm:text-[11px] px-2.5 py-1 rounded-sm border border-[#C6AA76]/30 shadow-xs flex items-center gap-1.5 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6AA76]" />
            <span>Design inspiration</span>
          </div>
        </div>
      )}
    </div>
  );
};
