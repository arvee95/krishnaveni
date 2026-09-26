import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5 text-[#191919]/60">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#C6AA76] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6AA76] rounded-xs"
          >
            <Home className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-[#191919]/30 shrink-0" aria-hidden="true" />
              {isLast || !item.to ? (
                <span className="font-semibold text-[#191919] truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="hover:text-[#C6AA76] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6AA76] rounded-xs"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
