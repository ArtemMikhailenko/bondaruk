'use client';

import { useLocale } from '@/lib/context/LocaleContext';

export function TopBar() {
  const { t } = useLocale();

  return (
    <div className="w-full h-8 bg-gradient-to-r from-[#31AA5A] to-[#258A49] flex items-center mb-2">
      <div className="max-w-[1920px] mx-auto px-2 xl:px-12 w-full flex items-center justify-between text-white text-xs">
        {/* Location */}
        <div className="flex items-center gap-2">
          <svg
            className="w-3 h-3"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 0C2.686 0 0 2.686 0 6C0 10.5 6 16 6 16C6 16 12 10.5 12 6C12 2.686 9.314 0 6 0ZM6 8C4.895 8 4 7.105 4 6C4 4.895 4.895 4 6 4C7.105 4 8 4.895 8 6C8 7.105 7.105 8 6 8Z"
              fill="white"
            />
          </svg>
          <span className="font-[12px]">{t.contact.address}</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <svg
            className="w-3 h-3"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.4 0H1.6C0.72 0 0.008 0.675 0.008 1.5L0 10.5C0 11.325 0.72 12 1.6 12H14.4C15.28 12 16 11.325 16 10.5V1.5C16 0.675 15.28 0 14.4 0ZM14.4 3L8 6.75L1.6 3V1.5L8 5.25L14.4 1.5V3Z"
              fill="white"
            />
          </svg>
          <span className="font-[12px]">{t.contact.email}</span>
        </div>
      </div>
    </div>
  );
}
