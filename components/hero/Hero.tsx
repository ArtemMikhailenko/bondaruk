"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context/LocaleContext";

export function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative w-full pt-6 md:pt-8 lg:pt-10 overflow-hidden">
      {/* Background image - covers full height and extends beyond left container */}
      <div className="pointer-events-none absolute inset-0 -left-32 lg:right-1/2 hidden lg:block">
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-left"
          priority
        />
        {/* Gradient overlay for smooth fade on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white" />
      </div>

      <div className="site-container pt-4 md:pt-6 lg:pt-8 xl:pt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-start">
          {/* Left: content */}
          <div className="relative order-1 lg:order-1 pb-6 md:pb-8 lg:pb-0 self-center lg:self-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF8F3] px-[18px] py-1 h-9 mb-4 md:mb-5 lg:mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-b from-[#31AA5A] to-[#258A49]" />
              <span className="text-[14px] leading-7 text-[#141414] font-medium">
                {t.hero.tag}
              </span>
            </div>

            <h1 className="font-medium text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] xl:text-[72px] leading-[1.05] text-[#1d1918]">
              {t.hero.name} <span className="text-gradient-green">{t.hero.role}</span>
            </h1>

            <p className="mt-4 md:mt-5 lg:mt-6 max-w-[592px] text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] md:leading-[26px] lg:leading-[28px] text-[#1d1918]/80">
              {t.hero.description}
            </p>

            <a
              href="#contact"
              className="group mt-6 md:mt-7 lg:mt-8 inline-flex items-center gap-4 lg:gap-5 rounded-[55px] bg-gradient-to-r from-[#FFCf2B] to-[#F7B71E] pl-6 lg:pl-8 pr-2 py-2 h-[52px] md:h-[56px] lg:h-[62px]">
              <span className="text-[16px] lg:text-[18px] font-bold text-[#1d1918]">
                {t.hero.cta}
              </span>
              <span className="mr-1 grid h-[40px] w-[40px] md:h-[42px] md:w-[42px] lg:h-[46px] lg:w-[46px] place-items-center rounded-full bg-[#1d1918]">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white transition-transform group-hover:translate-x-0.5"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Right: photo + overlays */}
          <div className="order-2 lg:order-2 relative lg:mt-2 flex justify-center lg:block">
            <div className="relative w-full max-w-[772px]">
              <Image
                src="/images/hero-photo.png"
                alt="Olena Bondaruk"
                width={772}
                height={916}
                priority
                sizes="(max-width: 1024px) 90vw, 772px"
                className="hero-photo-mask w-full h-auto object-cover"
              />

              {/* Floating reviews card */}
              <div className="absolute right-2 -top-2 sm:right-0 sm:top-0 md:right-2 md:top-2 lg:-left-12 lg:top-auto lg:bottom-10 lg:right-auto w-[122px] h-[120px] sm:w-[160px] sm:h-[155px] md:w-[180px] md:h-[175px] lg:w-[224px] lg:h-[218px] rounded-[13px] md:rounded-[20px] lg:rounded-[24px] bg-white shadow-[0_2.19px_22.69px_rgba(87,87,87,0.05)]">
                <div className="pt-[14px] md:pt-5 lg:pt-[30.5px]">
                  <div className="text-[#0E1E28] text-[25px] sm:text-[32px] md:text-[36px] lg:text-[46px] leading-[25px] sm:leading-[1.15] md:leading-[1.15] lg:leading-[52.95px] text-center">{t.hero.reviewsCount}</div>
                  <div className="mt-[12px] md:mt-[0.5px] text-[9px] md:text-[12px] lg:text-[14px] leading-[12px] md:leading-4 text-[#7F7F7F] text-center mx-auto px-1 md:px-0 md:max-w-[173px]">{t.hero.reviewsCaption}</div>
                </div>
                {/* avatars line */}
                <div className="absolute left-[21px] md:left-1/2 md:-translate-x-1/2 bottom-[18px] md:bottom-5 lg:bottom-[30.63px] flex -space-x-2">
                  <div className="h-[22px] w-[22px] md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-white overflow-hidden relative">
                    <Image src="/images/face1.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="h-[22px] w-[22px] md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-white overflow-hidden relative">
                    <Image src="/images/face2.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="h-[22px] w-[22px] md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-white overflow-hidden relative">
                    <Image src="/images/face3.png" alt="" fill className="object-cover" />
                  </div>
                  <div className="h-[22px] w-[22px] md:h-7 md:w-7 lg:h-8 lg:w-8 rounded-full border-2 border-white overflow-hidden relative">
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
