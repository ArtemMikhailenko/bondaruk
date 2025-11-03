'use client';

import { useLocale } from '@/lib/context/LocaleContext';

export function PhoneButton() {
  const { t } = useLocale();

  return (
    <a
      href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
      className="flex items-center gap-2 px-10 lg:px-6 py-2.5 lg:py-3 h-11 lg:h-12 rounded-[55px] border-2 border-[green] bg-white hover:opacity-90 transition-opacity shrink-0 border-rounded-[55px]"
    
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M22 16.92V19.92C22.0011 20.1985 21.944 20.4741 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4018C21.1468 21.59 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9448 19.82 21.92C16.7428 21.5856 13.7869 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49997 10.2412 2.44824 7.27097 2.12 4.17997C2.095 3.90344 2.12787 3.62474 2.21649 3.3616C2.30512 3.09846 2.44756 2.85666 2.63476 2.6516C2.82196 2.44653 3.0498 2.28268 3.30379 2.17052C3.55777 2.05835 3.83233 2.00026 4.11 1.99997H7.11C7.59531 1.9952 8.06579 2.16705 8.43376 2.48351C8.80173 2.79996 9.04207 3.23942 9.11 3.71997C9.23662 4.68004 9.47145 5.6227 9.81 6.52997C9.9445 6.88789 9.97362 7.27688 9.89384 7.65085C9.81407 8.02482 9.6288 8.36809 9.36 8.63998L8.09 9.90997C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.32 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
          stroke="url(#phone-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="phone-gradient"
            x1="12"
            y1="2"
            x2="12"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#31AA5A" />
            <stop offset="1" stopColor="#258A49" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-medium text-sm lg:text-base bg-gradient-to-b from-[#31AA5A] to-[#258A49] bg-clip-text text-transparent whitespace-nowrap">
        {t.contact.phone}
      </span>
    </a>
  );
}
