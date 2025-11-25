'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/context/LocaleContext';

export function ContactSection() {
  const { t } = useLocale();

  return (
    <section className="relative bg-white  py-0 md:py-0" style={{ minHeight: '700px' }}>
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
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[404px] md:inset-0 md:-left-32 md:right-1/2 md:h-auto z-[1]">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          sizes="60vw"
          className="object-cover object-top md:object-left"
          priority
        />
        {/* Gradient overlay for smooth fade on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white" />
        {/* Bottom fade to avoid harsh cutoff of background image */}
        <div
          aria-hidden
          className="absolute left-0 right-0 bottom-0 h-[220px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 70%, rgba(255,255,255,1) 100%)",
          }}
        />
         {/* <div className="pointer-events-none absolute top-0 left-0 right-0 h-[404px] max-w-[50vw] md:inset-0 md:left-20 md:right-0 md:h-auto z-[50]">
          <Image
            src="/images/dym.png"
            alt=""
            fill
            sizes="60vw"
            className="object-cover object-top md:object-left"
            priority
          />
        </div> */}
      </div>

      <div className="relative z-10 max-w-[1920px] mx-auto px-0 md:px-6 lg:px-8 2xl:px-8 h-full">
        {/* Dim overlay - дає ефект диму зверху і знизу - переміщено всередину для правильного z-index */}
        {/* <div className="pointer-events-none absolute top-0 left-0 right-0 h-[404px] max-w-[50vw] md:inset-0 md:left-20 md:right-0 md:h-auto z-[50]">
          <Image
            src="/images/dym.png"
            alt=""
            fill
            sizes="60vw"
            className="object-cover object-top md:object-left"
            priority
          />
        </div> */}
        {/* Mobile photo section */}
        <div className="md:hidden relative w-full h-[404px] overflow-visible">
          {/* Main photo with all built-in cards */}
          <div className="relative w-full h-full">
            <Image
              src="/images/contact-photo1.png"
              alt={t.contactSection.name}
              fill
              className="object-contain object-center"
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
            src="/images/contact-photo1.png"
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
           {/* <div className="pointer-events-none absolute top-0 left-0 right-0 h-[404px] max-w-[50vw] md:inset-0 md:left-20 md:right-0 md:h-auto z-[50]">
          <Image
            src="/images/dym.png"
            alt=""
            fill
            sizes="60vw"
            className="object-cover object-top md:object-left"
            priority
          />
        </div> */}
        </div>

        {/* Form section */}
        <div className="px-0 md:px-0 md:absolute md:right-6 md:top-[106px] lg:right-8 xl:right-[100px] 2xl:right-[240px] max-w-full relative z-[30] md:max-w-[460px] lg:max-w-[500px] xl:max-w-none">
          {/* Wrapper to place form card and desktop socials side-by-side */}
          <div className="md:flex md:items-center md:gap-6 lg:gap-8">
            <div className="pt-6 md:pt-0 md:bg-white md:rounded-[24px] md:shadow-[0_4px_41.5px_rgba(87,87,87,0.08)] md:p-6 lg:p-8 2xl:p-[60px]">
            <h2 className="text-[22px] md:text-[24px] lg:text-[28px] 2xl:text-[35px] font-bold mb-[12px] md:mb-[16px] leading-[26px] md:leading-[32px] lg:leading-[36px] 2xl:leading-[43px] px-4 md:px-0">
              {t.contactSection.title}
            </h2>
            <p className="text-[14px] md:text-[15px] lg:text-[16px] 2xl:text-[18px] leading-[20px] md:leading-[22px] lg:leading-[24px] 2xl:leading-[26px] mb-[24px] md:mb-[26px] lg:mb-[30px] px-4 md:px-0">
              {t.contactSection.subtitleStart}{" "}
              <span className="font-bold">{t.contactSection.subtitleBold}</span>
              <br />
              <span className="font-bold">{t.contactSection.subtitleBeforeTime}</span>{" "}
              <span className="text-[#31AA5A] font-semibold">{t.contactSection.time}</span>
            </p>

            {/* Form */}
            <form className="px-4 py-2 md:px-0 md:py-0 z-[30] relative">
              {/* Name input */}
              <div className="mb-[12px]">
                <label className="block text-[12px] md:text-[13px] lg:text-[14px] leading-[12px] md:leading-[16px] lg:leading-[18px] font-medium text-[#1D1918]/60 mb-2">
                  {t.contactSection.nameLabel}
                </label>
                <div className="w-full md:w-[320px] lg:w-[400px] 2xl:w-[500px] h-[52px] md:h-[54px] lg:h-[56px] bg-white md:bg-transparent border border-[#D8D8D8] rounded-[14px] md:rounded-lg px-4 md:px-[18px] flex items-center">
                  <input
                    type="text"
                    placeholder={t.contactSection.namePlaceholder}
                    className="w-full text-[14px] md:text-[15px] lg:text-base outline-none text-[#444444]/64 placeholder:text-[#444444]/64"
                  />
                </div>
              </div>

              {/* Phone input */}
              <div className="mb-[20px] md:mb-5 lg:mb-6">
                <label className="block text-[12px] md:text-[13px] lg:text-[14px] leading-[12px] md:leading-[16px] lg:leading-[18px] font-medium text-[#1D1918]/60 mb-2">
                  {t.contactSection.phoneLabel}
                </label>
                <div className="w-full md:w-[320px] lg:w-[400px] 2xl:w-[500px] h-[52px] md:h-[54px] lg:h-[56px] bg-white md:bg-transparent border border-[#D8D8D8] rounded-[14px] md:rounded-lg px-4 md:px-[18px] flex items-center">
                  <input
                    type="tel"
                    placeholder={t.contactSection.phonePlaceholder}
                    className="w-full text-[14px] md:text-[15px] lg:text-base outline-none text-[#444444]/64 placeholder:text-[#444444]/64"
                  />
                </div>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full md:w-[320px] lg:w-[400px] 2xl:w-[500px] h-[52px] md:h-[58px] lg:h-[62px] bg-[#FCC71C] md:bg-gradient-to-b md:from-[#FFCF2B] md:to-[#F7B91E] rounded-[55px] text-[14px] md:text-[15px] lg:text-base font-bold text-[#1D1918] hover:opacity-90 transition-opacity flex items-center justify-center mb-6 md:mb-0"
              >
                {t.contactSection.submit}
              </button>
            </form>
            </div>

            {/* Desktop social media buttons – to the right of the card, inside container */}
            <div className="hidden md:flex flex-col gap-3 lg:gap-4 ml-3 lg:ml-6 self-stretch justify-center">
              {/* Telegram */}
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="lg:w-6 lg:h-6">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="#1D1918"/>
                </svg>
              </a>

              {/* Viber */}
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
                <Image src="/icons/viber.svg" alt="Viber" width={20} height={20} className="lg:w-6 lg:h-6" />
              </a>

              {/* Instagram */}
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
                <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="lg:w-6 lg:h-6" />
              </a>

              {/* Facebook */}
              <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
                <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} className="lg:w-6 lg:h-6" />
              </a>
            </div>
          </div>

          {/* Contact info - под формой */}
          <div className="mt-[32px] md:mt-8 px-4 md:px-0 flex flex-col items-start gap-6 md:gap-8 2xl:gap-16 md:flex-row md:items-center pb-[32px] md:pb-0">
            {/* Phone */}
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-3.5 mb-0">
                <Image
                  src="/icons/phone.svg"
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-[16px] leading-6 font-medium">{t.contact.phone}</p>
              </div>
              <a href={`tel:${t.contact.phone}`} className="text-[14px] leading-6 font-medium text-[#31AA5A] underline underline-offset-[3px] decoration-[#31AA5A] ml-[38px]">
                {t.contactSection.callAction}
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-0">
              <div className="flex items-center gap-3.5 mb-0">
                <Image
                  src="/icons/mail-2.svg"
                  alt=""
                  width={24}
                  height={24}
                />
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
              <Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} className="w-5 h-5" />
            </a>

            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] flex items-center justify-center hover:opacity-90 transition-opacity">
              <Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} className="w-5 h-5" />
            </a>
          </div>
        </div>
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
