'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/lib/context/LocaleContext';
import { Locale } from '@/lib/i18n/locales';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t, locale, setLocale } = useLocale();
  const [openDropdown, setOpenDropdown] = useState<'agents' | 'sell' | 'buy' | 'rent' | 'lend' | 'objects' | null>(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleDropdown = (key: 'agents' | 'sell' | 'buy' | 'rent' | 'lend' | 'objects') => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const toggleNestedDropdown = (key: string) => {
    setOpenNestedDropdown(openNestedDropdown === key ? null : key);
  };

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    // Закрываем меню после смены языка
    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay with blur */}
      <div
        className="fixed inset-0 bg-[#1D1C18]/60 backdrop-blur-[15.8px] z-40"
        onClick={onClose}
      />

      {/* Menu */}
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto">
        {/* Header with Logo and Close button */}
        <div className="absolute top-[45px] left-4 right-4 flex items-center justify-between z-10">
          <Image 
            src="/images/logo.png" 
            alt="Bondaruk Partners" 
            width={139} 
            height={40}
          />
          
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gradient-to-b from-[#31AA5A] to-[#258A49] rounded-[11.43px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="px-4 pt-[126px] pb-8">
          {/* Navigation Links */}
          <nav className="space-y-[25px]">
            {/* Головна */}
            <Link
              href="/"
              onClick={onClose}
              className="block text-[16px] font-semibold text-[#262626] leading-[25px]"
            >
              {t.nav.home}
            </Link>

            {/* Агенти */}
            <button
              onClick={() => toggleDropdown('agents')}
              className="w-full flex items-center justify-between text-[16px] font-semibold text-[#262626] leading-[25px]"
            >
              <span>{t.nav.agents}</span>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                className={`transition-transform ${openDropdown === 'agents' ? 'rotate-180' : ''}`}
              >
                <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Продати - with dropdown */}
            <div>
              <button
                onClick={() => toggleDropdown('sell')}
                className={`w-full flex items-center justify-between text-[16px] font-semibold leading-[25px] ${
                  openDropdown === 'sell' ? 'text-[#31AA5A]' : 'text-[#262626]'
                }`}
              >
                <span>{t.nav.sell}</span>
                <svg
                  width="8"
                  height="4"
                  viewBox="0 0 8 4"
                  fill="none"
                  className={`transition-transform ${openDropdown === 'sell' ? 'rotate-180' : ''}`}
                >
                  <path 
                    d="M1 0.5L4 3.5L7 0.5" 
                    stroke={openDropdown === 'sell' ? '#31AA5A' : 'black'} 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {openDropdown === 'sell' && (
                <div className="mt-[27px] bg-[#EFF8F3] rounded-xl p-2">
                  {/* Продати квартиру - nested dropdown */}
                  <div>
                    <button
                      onClick={() => toggleNestedDropdown('sellApartment')}
                      className="w-full flex items-center justify-between bg-[#EFF8F3] rounded-[18px] px-2 py-2 text-[14px] font-semibold text-[#1D1918]"
                    >
                      <span>{t.nav.sellApartment}</span>
                      <svg
                        width="8"
                        height="4"
                        viewBox="0 0 8 4"
                        fill="none"
                        className={`transition-transform ${openNestedDropdown === 'sellApartment' ? 'rotate-180' : ''}`}
                      >
                        <path d="M1 0.5L4 3.5L7 0.5" stroke="#1D1918" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {openNestedDropdown === 'sellApartment' && (
                      <div className="mt-1 space-y-1">
                        <Link
                          href="/sell/new-building"
                          onClick={onClose}
                          className="flex items-center gap-2 px-2 py-[6px] text-[12px] text-[#1D1918]"
                        >
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M7.5 0L0 7.5L7.5 15L15 7.5L7.5 0Z" fill="#31AA5A"/>
                          </svg>
                          <span>{t.nav.sellNewBuilding}</span>
                        </Link>
                        <Link
                          href="/sell/secondary-market"
                          onClick={onClose}
                          className="flex items-center gap-2 px-2 py-[6px] text-[12px] text-[#1D1918]"
                        >
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                            <path d="M7.5 0L0 7.5L7.5 15L15 7.5L7.5 0Z" fill="#31AA5A"/>
                          </svg>
                          <span>{t.nav.sellSecondary}</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Купити */}
                  <button
                    onClick={() => toggleNestedDropdown('buyInSell')}
                    className="w-full flex items-center justify-between bg-[#EFF8F3] rounded-lg px-4 py-2 text-[14px] font-semibold text-[#1D1918] mt-1"
                  >
                    <span>{t.nav.buy}</span>
                    <svg
                      width="8"
                      height="4"
                      viewBox="0 0 8 4"
                      fill="none"
                      className={`transition-transform ${openNestedDropdown === 'buyInSell' ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 0.5L4 3.5L7 0.5" stroke="#1D1918" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Орендувати */}
                  <button
                    onClick={() => toggleNestedDropdown('rentInSell')}
                    className="w-full flex items-center justify-between bg-[#EFF8F3] rounded-lg px-4 py-2 text-[14px] font-semibold text-[#1D1918] mt-1"
                  >
                    <span>{t.nav.rent}</span>
                    <svg
                      width="8"
                      height="4"
                      viewBox="0 0 8 4"
                      fill="none"
                      className={`transition-transform ${openNestedDropdown === 'rentInSell' ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 0.5L4 3.5L7 0.5" stroke="#1D1918" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {/* Здати */}
                  <button
                    onClick={() => toggleNestedDropdown('lendInSell')}
                    className="w-full flex items-center justify-between bg-[#EFF8F3] rounded-lg px-4 py-2 text-[14px] font-semibold text-[#1D1918] mt-1"
                  >
                    <span>{t.nav.lend}</span>
                    <svg
                      width="8"
                      height="4"
                      viewBox="0 0 8 4"
                      fill="none"
                      className={`transition-transform ${openNestedDropdown === 'lendInSell' ? 'rotate-180' : ''}`}
                    >
                      <path d="M1 0.5L4 3.5L7 0.5" stroke="#1D1918" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Купити */}
            <button
              onClick={() => toggleDropdown('buy')}
              className="w-full flex items-center justify-between text-[16px] font-semibold text-[#262626] leading-[25px]"
            >
              <span>{t.nav.buy}</span>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                className={`transition-transform ${openDropdown === 'buy' ? 'rotate-180' : ''}`}
              >
                <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Орендувати */}
            <button
              onClick={() => toggleDropdown('rent')}
              className="w-full flex items-center justify-between text-[16px] font-semibold text-[#262626] leading-[25px]"
            >
              <span>{t.nav.rent}</span>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                className={`transition-transform ${openDropdown === 'rent' ? 'rotate-180' : ''}`}
              >
                <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Здати */}
            <button
              onClick={() => toggleDropdown('lend')}
              className="w-full flex items-center justify-between text-[16px] font-semibold text-[#262626] leading-[25px]"
            >
              <span>{t.nav.lend}</span>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                className={`transition-transform ${openDropdown === 'lend' ? 'rotate-180' : ''}`}
              >
                <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Об'єкти */}
            <button
              onClick={() => toggleDropdown('objects')}
              className="w-full flex items-center justify-between text-[16px] font-semibold text-[#262626] leading-[25px]"
            >
              <span>{t.nav.objects}</span>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                className={`transition-transform ${openDropdown === 'objects' ? 'rotate-180' : ''}`}
              >
                <path d="M1 0.5L4 3.5L7 0.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Наші партнери */}
            <Link
              href="/partners"
              onClick={onClose}
              className="block text-[16px] font-semibold text-[#262626] leading-[25px] pl-px"
            >
              {t.nav.partners}
            </Link>

            {/* Контакти */}
            <Link
              href="/contacts"
              onClick={onClose}
              className="block text-[16px] font-semibold text-[#262626] leading-[25px] pl-px"
            >
              {t.nav.contacts}
            </Link>

            {/* Блог */}
            <Link
              href="/blog"
              onClick={onClose}
              className="block text-[16px] font-semibold text-[#262626] leading-[25px] pl-px"
            >
              {t.nav.blog}
            </Link>
          </nav>

          {/* Social Links and Language Switcher in one row */}
          <div className="mt-[46px] flex items-center justify-between">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-[#1D1918]/[0.14] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="#1D1918"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#1D1918]/[0.14] flex items-center justify-center">
                <Image src="/icons/viber.svg" alt="Viber" width={20} height={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#1D1918]/[0.14] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#1D1918]/[0.14] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleLocaleChange('uk' as Locale)}
                className={`text-[16px] font-medium leading-[25px] ${
                  locale === 'uk' ? 'text-[#31AA5A]' : 'text-[#1D1918]/60'
                }`}
              >
                UA
              </button>
              <button
                onClick={() => handleLocaleChange('ru' as Locale)}
                className={`text-[16px] font-medium leading-[25px] ${
                  locale === 'ru' ? 'text-[#31AA5A]' : 'text-[#1D1918]/60'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => handleLocaleChange('en' as Locale)}
                className={`text-[16px] font-medium leading-[25px] ${
                  locale === 'en' ? 'text-[#31AA5A]' : 'text-[#1D1918]/60'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
