"use client";

import { useLocale } from "@/lib/context/LocaleContext";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

function GradientDot() {
  return (
    <span
      aria-hidden
      className="inline-block w-2 h-2 rounded-full"
      style={{
        background: "linear-gradient(180deg, #31AA5A 0%, #258A49 100%)",
      }}
    />
  );
}

function ArrowIcon() {
  // Right arrow with tail
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M12 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

interface ServiceCardProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  href?: string;
}

function ServiceCard({ title, subtitle, imageSrc, href = "#" }: ServiceCardProps) {
  return (
    <a
      href={href}
      className="group relative flex-shrink-0 w-[calc(100vw-48px)] sm:w-[360px] md:w-[400px] lg:w-[460px] xl:w-[482px] h-[240px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[332px] rounded-[20px] md:rounded-[24px] overflow-hidden block transition-transform hover:scale-[1.02] cursor-pointer"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          priority
        />
      </div>

      {/* Bottom overlay with blur */}
  <div className="absolute left-2 right-2 bottom-2 md:left-3 md:right-3 md:bottom-3 h-[90px] md:h-[100px] lg:h-[109px] rounded-2xl service-card-overlay backdrop-blur-[5px] bg-[#1D1918]/70 flex items-center justify-between px-4 md:px-5 lg:px-6 pointer-events-none">
        {/* Text */}
        <div className="flex flex-col gap-[3px]">
          <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-tight font-semibold">
            {title}
          </div>
          <div className="text-white/80 text-[16px] sm:text-[18px] md:text-[20px] leading-tight">
            {subtitle}
          </div>
        </div>

        {/* Arrow button */}
        <div className="flex-shrink-0 w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-[#FCC71C] flex items-center justify-center text-[#1D1918] group-hover:bg-[#fdd54d] transition-colors">
          {/* Card arrow: enlarged to 32x32 */}
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="md:w-8 md:h-8">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </a>
  );
}

export function ServicesSection() {
  const { t } = useLocale();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    // Check scroll on mount and resize
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 498; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 300);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="site-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-6 md:mb-8 lg:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-[18px] py-1 mb-3 md:mb-4">
              <GradientDot />
              <span className="text-[14px] leading-7 font-medium">{t.services.tag}</span>
            </div>
            <h2 className="text-[36px] md:text-[52px] lg:text-[68px] xl:text-[82px] leading-[1.08] font-medium">
              {t.services.title}
            </h2>
          </div>

          {/* Navigation arrows - desktop only */}
          <div className="flex lg:flex items-center gap-2 md:gap-3">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full border border-[#1D1918] flex items-center justify-center transition-all ${
                canScrollLeft ? "opacity-100 hover:bg-gray-50" : "opacity-25 cursor-not-allowed"
              }`}
              aria-label="Previous"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M26.7836 16.3458L5.91406 16.3458M5.91406 16.3458L13.7402 8.51971M5.91406 16.3458L13.7401 24.1719" stroke="#1D1918" strokeWidth="2.6087" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center transition-all ${
                canScrollRight ? "bg-[#FCC71C] hover:bg-[#fdd54d]" : "bg-white border border-[#1D1918] opacity-25 cursor-not-allowed"
              }`}
              aria-label="Next"
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.21637 15.6542L26.0859 15.6542M26.0859 15.6542L18.2598 23.4803M26.0859 15.6542L18.2599 7.82812" stroke="#1D1918" strokeWidth="2.6087" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Slider (full-bleed to the right, aligned left to container) */}
      <div className="relative w-screen -mx-4 md:-mx-6 lg:mx-0 lg:pl-[calc((100vw-1320px)/2+32px)] min-[1900px]:pl-[calc((100vw-1560px)/2+40px)]">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-6 lg:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <ServiceCard
            title={t.services.cards.lend.title}
            subtitle={t.services.cards.lend.subtitle}
            imageSrc="/images/posluga1.png"
          />
          <ServiceCard
            title={t.services.cards.sell.title}
            subtitle={t.services.cards.sell.subtitle}
            imageSrc="/images/posluga2.png"
          />
          <ServiceCard
            title={t.services.cards.buy.title}
            subtitle={t.services.cards.buy.subtitle}
            imageSrc="/images/posluga3.png"
          />
          <ServiceCard
            title={t.services.cards.rent.title}
            subtitle={t.services.cards.rent.subtitle}
            imageSrc="/images/posluga4.png"
          />
        </div>
      </div>
    </section>
  );
}
