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
      className="group relative flex-shrink-0 w-[calc(100vw-48px)] sm:w-[360px] md:w-[400px] lg:w-[460px] xl:w-[482px] h-[240px] sm:h-[280px] md:h-[300px] lg:h-[320px] xl:h-[332px] rounded-[20px] md:rounded-[24px] overflow-hidden block transition-transform hover:scale-[1.02] cursor-pointer snap-start snap-always"
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
        <div className="flex flex-col gap-0 md:gap-0">
          <div className="text-white text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-[1.1] md:leading-tight font-semibold tracking-tight md:tracking-normal">
            {title}
          </div>
          <div className="text-white/80 text-[16px] sm:text-[18px] md:text-[20px] leading-[1.1] md:leading-tight tracking-tight md:tracking-normal -mt-[2px] md:-mt-[3px]">
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
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);
  // Mobile progress within one logical cycle of 4 cards (the original set)
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = 498; // Approximate card width + gap (used as threshold)
      const totalCardsWidth = scrollWidth / 3; // one cycle width (4 original cards)

      // When scrolled near the end, jump back to the first set
      if (scrollLeft + clientWidth >= scrollWidth - cardWidth) {
        scrollRef.current.scrollLeft = scrollLeft - totalCardsWidth;
      }
      // When scrolled near the beginning, jump to the cloned set
      else if (scrollLeft <= cardWidth) {
        scrollRef.current.scrollLeft = scrollLeft + totalCardsWidth;
      }

      // Compute progress inside a single cycle (0..1) for mobile bar
      // Set the logical cycle start at the beginning of the middle (original) set
  const cycleStart = totalCardsWidth; // we position initially here
      // position within cycle for the left edge of viewport
      const raw = scrollLeft - cycleStart;
      const normalized = ((raw % totalCardsWidth) + totalCardsWidth) % totalCardsWidth;
      const scrollableWithinCycle = Math.max(totalCardsWidth - clientWidth, 1);
      const ratio = Math.min(1, Math.max(0, normalized / scrollableWithinCycle));
      setProgress(ratio);
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      // Set initial scroll position to first set of real cards
      const cycleWidth = scrollContainer.scrollWidth / 3;
      scrollContainer.scrollLeft = cycleWidth;
      // Initialize progress after positioning
      const clientWidth = scrollContainer.clientWidth;
      const scrollableWithinCycle = Math.max(cycleWidth - clientWidth, 1);
      setProgress(0 / scrollableWithinCycle); // 0
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Keep snap padding equal to actual paddings (handles md/lg differences)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const apply = () => {
      const styles = getComputedStyle(el);
      const pl = parseFloat(styles.paddingLeft) || 0;
      const pr = parseFloat(styles.paddingRight) || 0;
      // Add a tiny bias to the left to гарантировать, что предыдущая карточка не подглядывает из‑за сабпикселов
      el.style.scrollPaddingLeft = `${pl + 1}px`;
      el.style.scrollPaddingRight = `${pr}px`;
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    if (children.length < 2) return;

    const first = children[0];
    const second = children[1];
    const step = Math.max(1, second.offsetLeft - first.offsetLeft); // one card + gap
    const base = first.offsetLeft; // left start of first card

    // Current nearest card start
    const current = container.scrollLeft;
    let index = Math.round((current - base) / step);
    index += direction === "right" ? 1 : -1;

    const target = base + index * step;
    container.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-16 lg:py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="site-container">
        {/* Header */}
        <div className="flex items-end justify-between mb-6 md:mb-8 lg:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF8F3] px-[14px] md:px-[18px] py-1 mb-3 md:mb-4">
              <span className="inline-block h-1 w-1 md:h-2 md:w-2 rounded-full bg-gradient-to-b from-[#31AA5A] to-[#258A49]" />
              <span className="text-[10px] md:text-[14px] leading-4 md:leading-7 font-medium text-[#141414]">{t.services.tag}</span>
            </div>
            <h2 className="text-[46px] leading-[52px] md:text-[52px] md:leading-[1.08] lg:text-[68px] lg:leading-[1.08] xl:text-[82px] xl:leading-[1.08] font-medium">
              {t.services.title}
            </h2>
          </div>

          {/* Navigation arrows - desktop only */}
          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 md:w-[60px] md:h-[60px] rounded-full border border-[#1D1918] bg-white flex items-center justify-center transition-all opacity-25 md:opacity-100 hover:bg-gray-50"
              aria-label="Previous"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <path d="M26.7836 16.3458L5.91406 16.3458M5.91406 16.3458L13.7402 8.51971M5.91406 16.3458L13.7401 24.1719" stroke="#1D1918" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center transition-all bg-[#FCC71C] hover:bg-[#fdd54d]"
              aria-label="Next"
            >
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
                <path d="M5.21637 15.6542L26.0859 15.6542M26.0859 15.6542L18.2598 23.4803M26.0859 15.6542L18.2599 7.82812" stroke="#1D1918" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Slider (full-bleed to the right, aligned left to container) */}
      <div className="relative w-screen ml-0 mr-[-14px] md:mr-[-14px] lg:mx-0 lg:pl-[calc((100vw-1320px)/2+32px)] min-[1900px]:pl-[calc((100vw-1560px)/2+40px)]">
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide pl-[14px] md:pl-[14px] pr-0 lg:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollPaddingLeft: 15, scrollPaddingRight: 0 }}
        >
          {/* First clone set for infinite loop */}
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

          {/* Original set */}
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

          {/* Second clone set for infinite loop */}
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
        {/* Mobile progress bar */}
        <div className="block md:hidden mt-4">
          <div className="ml-[14px] md:ml-[14px] w-[calc(100%-28px)] md:w-[calc(100%-28px)] h-1 rounded-full bg-[#D9D9D9] relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full rounded-full"
              style={{
                width: `${Math.round(progress * 100)}%`,
                background: "linear-gradient(180deg, #31AA5A 0%, #258A49 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
