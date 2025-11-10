'use client';

import { useState } from 'react';
import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { SocialLinks } from './SocialLinks';
import { PhoneButton } from './PhoneButton';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu';
import { TopBar } from './TopBar';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:block w-full">
        {/* Main Header: 2 строки */}
        <div className="bg-white border-b border-gray-100">
          <div className="site-container">
            {/* Верхняя строка: логотип слева, соцсети + телефон справа */}
            <div className="flex items-center justify-between py-3 lg:py-4">
              <div className="shrink-0">
                <Logo />
              </div>
              <div className="flex items-center gap-2 lg:gap-3">
                <SocialLinks />
                <PhoneButton />
              </div>
            </div>

            {/* Нижняя строка: меню слева, язык справа */}
            <div className="flex items-center justify-between h-[34px] lg:h-[38px] pb-3 lg:pb-4">
              <div className="flex-1">
                <Navigation />
              </div>
              <div className="ml-4 lg:ml-14 shrink-0">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden w-full">
        <TopBar />
        
        <div className="bg-white h-[50px] md:h-[53px] flex items-center justify-between px-4 md:px-6">
          <Logo mobile />
          
          <div className="flex items-center gap-2 md:gap-3">
            <button
              className="w-9 h-9 md:w-10 md:h-10 rounded-[10px] md:rounded-[11.43px] border-2 border-gradient-green flex items-center justify-center"
              aria-label="Phone"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[22px] md:h-[22px]"
              >
                <path
                  d="M20.9999 15.92V18.92C21.0011 19.1985 20.944 19.4741 20.8324 19.7293C20.7209 19.9845 20.5572 20.2136 20.352 20.4018C20.1468 20.59 19.9045 20.7335 19.6407 20.8227C19.3769 20.9119 19.0973 20.9448 18.8199 20.92C15.7428 20.5856 12.7869 19.5341 10.1899 17.85C7.77376 16.3147 5.72527 14.2662 4.18993 11.85C2.49991 9.2412 1.44818 6.27099 1.11993 3.18C1.09494 2.90347 1.12781 2.62476 1.21643 2.36162C1.30506 2.09849 1.4475 1.85669 1.6347 1.65162C1.82189 1.44655 2.04974 1.28271 2.30372 1.17052C2.55771 1.05833 2.83227 1.00026 3.10993 1H6.10993C6.59524 0.995321 7.06572 1.16718 7.43369 1.48363C7.80166 1.80008 8.04201 2.23954 8.10993 2.72C8.23656 3.68007 8.47138 4.62273 8.80993 5.53C8.94448 5.88792 8.9736 6.27691 8.89384 6.65088C8.81408 7.02485 8.6288 7.36811 8.35993 7.64L7.08993 8.91C8.51349 11.4135 10.5864 13.4864 13.0899 14.91L14.3599 13.64C14.6318 13.3711 14.9751 13.1858 15.3491 13.1061C15.723 13.0263 16.112 13.0554 16.4699 13.19C17.3772 13.5285 18.3199 13.7634 19.2799 13.89C19.7657 13.9585 20.2093 14.2032 20.5265 14.5775C20.8436 14.9518 21.0121 15.4296 20.9999 15.92Z"
                  stroke="url(#paint0_linear)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="11"
                    y1="1"
                    x2="11"
                    y2="20.92"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#31AA5A" />
                    <stop offset="1" stopColor="#258A49" />
                  </linearGradient>
                </defs>
              </svg>
            </button>

            <button
              className="w-9 h-9 md:w-10 md:h-10 rounded-[10px] md:rounded-[11.43px] bg-gradient-to-b from-[#31AA5A] to-[#258A49] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="md:w-[24px] md:h-[24px]"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>
    </>
  );
}
