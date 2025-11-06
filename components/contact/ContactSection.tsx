'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/context/LocaleContext';

export function ContactSection() {
  const { t } = useLocale();

  return (
    <section className="relative bg-white overflow-hidden py-0 md:py-0" style={{ minHeight: '700px' }}>
      {/* Ragged top haze - stronger and more irregular */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[160px] md:h-[220px] lg:h-[260px] z-[5]">
        <svg viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <filter id="ragged-top-blur" x="-20%" y="-50%" width="140%" height="220%">
              <feGaussianBlur stdDeviation="42" />
            </filter>
            {/* Fade downward so the ragged edge dissipates into content */}
            <linearGradient id="fade-down" x1="0" y1="0" x2="0" y2="260">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="70%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="ragged-top-mask">
              <rect width="1440" height="260" fill="url(#fade-down)" />
            </mask>
          </defs>
          {/* Irregular torn silhouette */}
          <path
            d="M0 0 H1440 V110
               C 1300 80, 1200 150, 1080 95
               C 970 50, 860 135, 720 90
               C 600 55, 470 130, 340 85
               C 220 45, 110 115, 0 80
               V 0 Z"
            fill="white"
            filter="url(#ragged-top-blur)"
            mask="url(#ragged-top-mask)"
          />
        </svg>
      </div>
      {/* Background image - слева от женщины */}
      <div className="pointer-events-none absolute inset-0 -left-32 right-1/2 hidden md:block">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          sizes="60vw"
          className="object-cover object-left"
          priority
        />
        {/* Gradient overlay for smooth fade on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-0 md:px-6 lg:px-8 2xl:px-8 h-full">
        {/* Mobile photo section */}
        <div className="md:hidden relative w-full h-[404px] overflow-visible">
          {/* Main photo with all built-in cards */}
          <div className="relative w-full h-full">
            <Image
              src="/images/contact-photo.png"
              alt={t.contactSection.name}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient fade at bottom */}
            <div 
              className="absolute left-0 right-0 bottom-0 h-[100px] pointer-events-none"
              style={{
                background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, transparent 100%)'
              }}
            />
          </div>
        </div>

        {/* Desktop photo with built-in cards */}
        <div className="hidden md:block absolute left-4 md:left-6 lg:left-[100px] xl:left-[150px] 2xl:left-[250px] top-0 w-[450px] lg:w-[550px] 2xl:w-[750px] h-[700px] overflow-visible">
          <Image
            src="/images/contact-photo.png"
            alt={t.contactSection.name}
            fill
            className="object-contain object-bottom"
            priority
          />
          {/* Gradient fade at bottom - только для фото */}
          <div 
            className="absolute left-0 right-0 bottom-0 h-[150px] pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 40%, transparent 100%)'
            }}
          />
        </div>

        {/* Form section */}
        <div className="px-4 md:px-0 md:absolute md:right-6 md:top-[106px] lg:right-[100px] xl:right-[150px] 2xl:right-[240px] max-w-full">
          <div className="bg-white rounded-[24px] shadow-[0_29px_59.2px_rgba(87,87,87,0.08)] md:shadow-[0_4px_41.5px_rgba(87,87,87,0.08)] p-0 pt-[29px] md:p-8 2xl:p-[60px]">
            <h2 className="text-[24px] md:text-[28px] 2xl:text-[35px] font-bold mb-[12px] md:mb-[16px] leading-[26px] md:leading-[36px] 2xl:leading-[43px] px-4 md:px-0">
              {t.contactSection.title}
            </h2>
            <p className="text-[14px] md:text-[16px] 2xl:text-[18px] leading-[20px] md:leading-[24px] 2xl:leading-[26px] mb-[24px] md:mb-[30px] px-4 md:px-0">
              {t.contactSection.subtitleStart}{" "}
              <span className="font-bold">{t.contactSection.subtitleBold}</span>
              <br />
              <span className="font-bold">{t.contactSection.subtitleBeforeTime}</span>{" "}
              <span className="text-[#31AA5A] font-semibold">{t.contactSection.time}</span>
            </p>

            {/* Form */}
            <form className="px-4 md:px-0">
              {/* Name input */}
              <div className="mb-[12px]">
                <label className="block text-[12px] md:text-[14px] leading-[12px] md:leading-[18px] font-medium text-[#1D1918]/60 mb-2">
                  {t.contactSection.nameLabel}
                </label>
                <div className="w-full md:w-[500px] h-[52px] md:h-[56px] bg-white md:bg-transparent border border-[#D8D8D8] rounded-[14px] md:rounded-lg px-4 md:px-[18px] flex items-center">
                  <input
                    type="text"
                    placeholder={t.contactSection.namePlaceholder}
                    className="w-full text-[14px] md:text-base outline-none text-[#444444]/64 placeholder:text-[#444444]/64"
                  />
                </div>
              </div>

              {/* Phone input */}
              <div className="mb-[20px] md:mb-6">
                <label className="block text-[12px] md:text-[14px] leading-[12px] md:leading-[18px] font-medium text-[#1D1918]/60 mb-2">
                  {t.contactSection.phoneLabel}
                </label>
                <div className="w-full md:w-[500px] h-[52px] md:h-[56px] bg-white md:bg-transparent border border-[#D8D8D8] rounded-[14px] md:rounded-lg px-4 md:px-[18px] flex items-center">
                  <input
                    type="tel"
                    placeholder={t.contactSection.phonePlaceholder}
                    className="w-full text-[14px] md:text-base outline-none text-[#444444]/64 placeholder:text-[#444444]/64"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full md:w-[500px] h-[52px] md:h-[62px] bg-[#FCC71C] md:bg-gradient-to-b md:from-[#FFCF2B] md:to-[#F7B91E] rounded-[55px] text-[14px] md:text-base font-bold text-[#1D1918] hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                {t.contactSection.submit}
              </button>
            </form>
          </div>

          {/* Contact info - под формой */}
          <div className="mt-[72px] md:mt-8 px-4 md:px-0 flex flex-col items-start gap-6 md:gap-8 2xl:gap-16 md:flex-row md:items-center pb-[56px] md:pb-0">
            {/* Phone */}
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-3.5 mb-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[16px] leading-6 font-medium">{t.contact.phone}</p>
              </div>
              <a href={`tel:${t.contact.phone}`} className="text-[14px] leading-6 font-medium text-[#31AA5A] underline underline-offset-[3px] decoration-[#31AA5A] ml-[38px]">
                {t.contactSection.callAction}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-3.5 mb-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p className="text-[16px] leading-6 font-medium">{t.contact.email}</p>
              </div>
              <a href={`mailto:${t.contact.email}`} className="text-[14px] leading-6 font-medium text-[#31AA5A] underline underline-offset-[3px] decoration-[#31AA5A] ml-[38px]">
                {t.contactSection.writeAction}
              </a>
            </div>
          </div>

          {/* Mobile social media */}
          <div className="md:hidden px-4 flex items-center gap-3 pb-8">
            {/* Telegram */}
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="#1D1918"/>
              </svg>
            </a>

            {/* Viber */}
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
              <Image src="/icons/viber.svg" alt="Viber" width={20} height={20} className="w-5 h-5" />
            </a>

            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Desktop social media buttons - fixed right */}
      <div className="hidden md:flex fixed right-4 md:right-6 lg:right-8 top-[184px] z-50 flex-col gap-4">
        {/* Telegram */}
        <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="#1D1918"/>
          </svg>
        </a>

        {/* Viber */}
        <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
          <Image src="/icons/viber.svg" alt="Viber" width={24} height={24} />
        </a>

        {/* Instagram */}
        <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 6.5H17.51" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Ragged white haze at the bottom (custom SVG, more torn) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[240px] md:h-[320px] lg:h-[360px] z-[5]">
        <svg viewBox="0 0 1440 360" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            {/* Base soft fog */}
            <filter id="bottom-soft" x="-20%" y="-50%" width="140%" height="220%">
              <feGaussianBlur stdDeviation="48" />
            </filter>
            {/* Sharper ragged spikes */}
            <filter id="bottom-spikes" x="-20%" y="-50%" width="140%" height="220%">
              <feGaussianBlur stdDeviation="14" />
            </filter>
            <linearGradient id="fade-up" x1="0" y1="360" x2="0" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.9" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="ragged-fade-mask">
              <rect width="1440" height="360" fill="url(#fade-up)" />
            </mask>
          </defs>

          {/* Layer 1: soft fog shape */}
          <path
            d="M0 220
               C 120 150 240 260 360 200
               C 480 150 600 260 720 190
               C 860 110 980 255 1100 180
               C 1220 120 1340 240 1440 160
               V 360 H 0 Z"
            fill="white"
            filter="url(#bottom-soft)"
            mask="url(#ragged-fade-mask)"
          />

          {/* Layer 2: sharper irregular spikes for a more torn edge */}
          <path
            d="M0 235
               C 80 190 170 250 260 205
               C 340 170 430 245 520 205
               C 610 170 700 230 790 195
               C 880 160 970 235 1060 190
               C 1145 150 1240 230 1320 185
               C 1385 150 1415 185 1440 165
               V 360 H 0 Z"
            fill="white"
            filter="url(#bottom-spikes)"
            mask="url(#ragged-fade-mask)"
          />
        </svg>
      </div>
    </section>
  );
}
