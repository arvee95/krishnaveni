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
  const sizeClasses = {
    sm: 'w-[74px] sm:w-[82px]',
    header: 'w-[110px] sm:w-[125px] lg:w-[140px]',
    md: 'w-[100px] sm:w-[120px] md:w-[140px]',
    lg: 'w-[140px] sm:w-[170px] md:w-[200px]',
  };

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Krishnaveni Interiors home"
      className={`inline-flex shrink-0 items-center justify-center transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6AA76] rounded-xs ${className}`}
    >
      <div
        className={`flex items-center justify-center overflow-hidden bg-transparent ${sizeClasses[size]}`}
      >
        <img
          src="/logo.png"
          alt="Krishnaveni Interiors"
          className={`block h-auto w-full object-contain ${
            variant === 'footer'
              ? 'max-h-[85px] sm:max-h-[96px]'
              : 'max-h-[64px] sm:max-h-[72px]'
          }`}
          loading="eager"
        />
      </div>
    </Link>
  );
};
