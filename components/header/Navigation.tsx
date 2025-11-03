'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLocale } from '@/lib/context/LocaleContext';

interface NavItem {
  key: keyof typeof import('@/lib/i18n/translations').translations.uk.nav;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'agents', href: '/agents', hasDropdown: true },
  { key: 'sell', href: '/sell', hasDropdown: true },
  { key: 'buy', href: '/buy', hasDropdown: true },
  { key: 'rent', href: '/rent', hasDropdown: true },
  { key: 'lend', href: '/lend', hasDropdown: true },
  { key: 'objects', href: '/objects', hasDropdown: true },
  { key: 'partners', href: '/partners' },
  { key: 'contacts', href: '/contacts' },
  { key: 'blog', href: '/blog' },
];

export function Navigation() {
  const { t } = useLocale();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="flex items-center justify-between gap-3 lg:gap-4 2xl:gap-[60px]">
      {navItems.map((item) => {
        const isActive = item.key === 'agents'; // Пример активного элемента
        
        return (
          <div
            key={item.key}
            className="relative"
            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.key)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={item.href}
              className={`flex items-center gap-1 lg:gap-1.5 text-[13px] lg:text-sm font-semibold transition-colors whitespace-nowrap ${
                isActive
                  ? 'text-white bg-gradient-to-br from-[#31AA5A] to-[#258A49] px-3 lg:px-4 2xl:px-5 py-2 rounded-[60px]'
                  : 'text-[#262626] hover:text-[#31AA5A]'
              }`}
            >
              {t.nav[item.key]}
              {item.hasDropdown && (
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-0.5 shrink-0"
                >
                  <path
                    d="M1 0.5L4 3.5L7 0.5"
                    stroke={isActive ? 'white' : 'currentColor'}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>

            {/* Dropdown Menu (будет добавлено позже) */}
            {item.hasDropdown && activeDropdown === item.key && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50">
                {/* Dropdown content */}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
