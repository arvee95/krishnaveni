import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'header';
  variant?: 'header' | 'footer' | 'drawer';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  onClick,
  size = 'header',
  variant = 'header',
}) => {
  // Responsive proportional widths:
  // Desktop (lg): 120–150px wide (135px)
  // Tablet (sm): 110–140px wide (120px)
  // Mobile: 90–115px wide (96px)
  const sizeClasses = {
    sm: 'w-[90px] sm:w-[100px]',
    header: 'w-[96px] sm:w-[120px] lg:w-[135px]',
    md: 'w-[105px] sm:w-[120px] md:w-[135px]',
    lg: 'w-[140px] sm:w-[165px] md:w-[185px]',
  };

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Krishnaveni Interiors - Home"
      className={`inline-flex shrink-0 items-center justify-center transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] rounded-xs ${className}`}
    >
      <div className={`flex items-center justify-center bg-transparent ${sizeClasses[size]}`}>
        <img
          src="/logo.svg"
          alt="Krishnaveni Interiors"
          className="block h-auto w-full object-contain select-none"
          loading="eager"
        />
      </div>
    </Link>
  );
};
