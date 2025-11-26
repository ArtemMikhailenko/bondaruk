"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context/LocaleContext";
import { useModal } from "@/lib/context/ModalContext";

export function Hero() {
  const { t } = useLocale();
  const { openConsultation } = useModal();

  return (
    <section className="relative w-full pt-10 md:pt-8 lg:pt-0 overflow-hidden">
      {/* Background image - covers full height and extends beyond left container */}
      {/* Mobile background is handled inside the photo container to be visually under the photo, not the heading */}

      <div className="pointer-events-none absolute inset-0 -left-0 lg:right-1/2 hidden lg:block overflow-hidden">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-left rounded-bl-[180px]"
          priority
        />
        {/* Gradient overlay for smooth fade on the right edge of the background image */}
        <div
          aria-hidden
          className="absolute inset-0 rounded-bl-[180px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 55%, rgba(255,255,255,0.85) 85%, rgba(255,255,255,1) 100%), radial-gradient(circle at left bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 15%, rgba(255,255,255,0.5) 30%, rgba(255,255,255,0) 50%)",
          }}
        />
      </div>

      <div className="site-container pt-4 md:pt-6 lg:pt-8 xl:pt-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start">
          {/* Left: content */}
          <div className="relative order-1 lg:order-1 pb-6 md:pb-8 lg:pb-0 self-center lg:self-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF8F3] px-[18px] h-[22px] md:h-9 mb-4 md:mb-5 lg:mb-6">
              <span className="inline-block h-1 w-1 md:h-2 md:w-2 rounded-full bg-gradient-to-b from-[#31AA5A] to-[#258A49]" />
              <span className="text-[10px] leading-4 md:text-[14px] md:leading-7 text-[#1D1918] font-medium">
                {t.hero.tag}
              </span>
            </div>

            <h1 className="font-medium text-[35px] sm:text-[40px] md:text-[48px] lg:text-[50px] xl:text-[60px] 2xl:text-[64px] leading-[1.05] text-[#1d1918] whitespace-nowrap">
              {t.hero.name}
              <br />
              <span className="text-gradient-green whitespace-nowrap">{t.hero.role}</span>
            </h1>

            <p className="mt-4 md:mt-5 lg:mt-6 max-w-[592px] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[26px] lg:leading-[28px] text-[#1d1918]/80">
              {t.hero.descriptionPart1} <span className="font-bold text-gradient-green">Bondaruk Partners</span> {t.hero.descriptionPart2} <span className="font-bold text-[#1d1918]">{t.hero.descriptionBold}</span>
            </p>

            <button
              type="button"
              onClick={openConsultation}
              className="group mt-6 md:mt-7 lg:mt-8 inline-flex items-center justify-center gap-5 rounded-[55px] bg-gradient-to-r from-[#FFCF2B] to-[#F7B71E] pl-7 pr-2 py-2 h-[52px] w-[298px] md:h-[62px] md:w-auto">
              <span className="text-[14px] md:text-[18px] leading-[24px] font-bold text-[#1d1918] text-center whitespace-nowrap">
                {t.hero.cta}
              </span>
              <span className="grid h-[36px] w-[36px] md:h-[46px] md:w-[46px] place-items-center rounded-full bg-[#1d1918] flex-shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M4 12h16m0 0l-6-6m6 6l-6 6"
                    stroke="#FFCF2B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Right: photo + overlays */}
          <div className="order-2 lg:order-2 relative lg:mt-2 flex justify-center lg:block">
            <div className="relative w-full max-w-[772px]">
              {/* Mobile-only background placed under the photo (full-bleed) */}
                        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-screen h-[520px] block lg:hidden overflow-hidden z-0">
                          <Image
                            src="/images/hero-bg.png"
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-contain object-top"
                            priority
                          />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0.85) 85%, rgba(255,255,255,1) 100%)",
                  }}
                />
              </div>
              {/* Desktop photo */}
              <Image
                src="/images/hero-photo.png"
                alt="Olena Bondaruk"
                width={772}
                height={916}
                priority
                sizes="(max-width: 1024px) 90vw, 772px"
                className="relative z-10 w-full h-auto object-cover hidden lg:block"
              />
              {/* Mobile photo */}
              <Image
                src="/images/hero-photo-mob.png"
                alt="Olena Bondaruk"
                width={772}
                height={916}
                priority
                sizes="90vw"
                className="relative z-10 w-full h-auto object-cover lg:hidden"
              />

              {/* Floating reviews card */}
              <div className="absolute z-20 right-2 -top-2 sm:right-0 sm:top-0 md:right-2 md:top-2 lg:-left-12 lg:top-auto lg:bottom-10 lg:right-auto w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] md:w-[170px] md:h-[165px] lg:w-[200px] lg:h-[195px] rounded-[13px] md:rounded-[18px] lg:rounded-[22px] bg-white shadow-[0_4px_41.5px_rgba(87,87,87,0.05)]">
                {/* Number */}
                <div className="text-[#0E1E28] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] lg:leading-[48px] leading-[1.15] text-center font-normal font-inter absolute lg:top-[24px] top-[12px] md:top-[18px] left-0 right-0">{t.hero.reviewsCount}</div>
                {/* Caption */}
                <div className="text-[#7F7F7F] text-[8px] md:text-[11px] lg:text-[13px] lg:leading-[15px] leading-[1.15] text-center absolute lg:top-[78px] top-[42px] md:top-[58px] left-0 right-0 px-2 md:px-3 lg:px-[20px]">{t.hero.reviewsCaption}</div>
                {/* avatars line */}
                <div className="absolute lg:top-[123px] top-[68px] md:top-[95px] left-1/2 -translate-x-1/2 flex -space-x-2 lg:-space-x-3">
                  <div className="h-[32px] w-[32px] md:h-[38px] md:w-[38px] lg:h-[44px] lg:w-[44px] rounded-full border-[2.5px] md:border-[3px] border-white overflow-hidden relative bg-gray-200">
                    <Image src="/images/face1.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="h-[32px] w-[32px] md:h-[38px] md:w-[38px] lg:h-[44px] lg:w-[44px] rounded-full border-[2.5px] md:border-[3px] border-white overflow-hidden relative bg-gray-200">
                    <Image src="/images/face2.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="h-[32px] w-[32px] md:h-[38px] md:w-[38px] lg:h-[44px] lg:w-[44px] rounded-full border-[2.5px] md:border-[3px] border-white overflow-hidden relative bg-gray-200">
                    <Image src="/images/face3.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="h-[32px] w-[32px] md:h-[38px] md:w-[38px] lg:h-[44px] lg:w-[44px] rounded-full border-[2.5px] md:border-[3px] border-white overflow-hidden relative bg-gray-200">
                    <Image src="/images/face4.png" alt="" fill className="object-cover" />
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="hidden lg:flex absolute -right-2 bottom-2 flex-col items-center gap-2">
                <span className="text-[12px] uppercase tracking-[0.2em] text-[#8B8B8B]">
                  {t.hero.scroll}
                </span>
                <div className="grid h-[60px] w-[60px] place-items-center rounded-full bg-white border-gradient-green">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5v14m0 0l-6-6m6 6l6-6" stroke="url(#g)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="g" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#31AA5A" />
                        <stop offset="1" stopColor="#258A49" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
