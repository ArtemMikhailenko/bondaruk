"use client";

import { useLocale } from "@/lib/context/LocaleContext";
import Image from "next/image";
import { useState } from "react";
import { useModal } from "@/lib/context/ModalContext";

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


function StarSvg({ filled, fillPercent, size = 24, className = "" }: { filled?: boolean; fillPercent?: number; size?: number; className?: string }) {
  const Outline = (
    <path
      d="M12.3217 4.67849L8.30688 4.0867L8.19732 4.07055L8.14881 3.97097L6.35254 0.280796L6.5412 0.188965L6.35199 0.279646C6.3465 0.268179 6.33806 0.258827 6.32795 0.252422C6.31788 0.246032 6.30642 0.242757 6.29488 0.242757C6.28334 0.242757 6.27188 0.246032 6.26177 0.252422C6.25166 0.258827 6.24327 0.268179 6.23777 0.279646L6.23718 0.28083L4.44007 3.971L4.3916 4.07056L4.28204 4.0867L0.266997 4.67854M12.3217 4.67849C12.3218 4.67854 12.3217 4.67849 12.3217 4.67849ZM12.3217 4.67849C12.3336 4.6803 12.3451 4.68546 12.3546 4.69364C12.3642 4.70183 12.3716 4.71282 12.3757 4.72549C12.3797 4.73816 12.3802 4.75184 12.377 4.76481C12.3739 4.77782 12.3672 4.78936 12.3582 4.7983L9.45311 7.67012L9.37552 7.74679L9.39373 7.8543L10.0796 11.9101L10.0797 11.9108C10.082 11.9239 10.0805 11.9373 10.0757 11.9494C10.0708 11.9616 10.0628 11.9718 10.0528 11.9791C10.0429 11.9864 10.0314 11.9906 10.0196 11.9915C10.0078 11.9924 9.99594 11.9899 9.98528 11.9843M9.98528 11.9843C9.9852 11.9842 9.98532 11.9843 9.98528 11.9843ZM9.98528 11.9843L6.39358 10.0698L6.29484 10.0172L6.19614 10.0698L2.60441 11.9849C2.59373 11.9906 2.58172 11.9931 2.56995 11.9922C2.55817 11.9914 2.54667 11.9872 2.53676 11.9799C2.52684 11.9726 2.51885 11.9624 2.514 11.9504C2.50915 11.9382 2.50773 11.9248 2.50999 11.9118L2.51013 11.911L3.19603 7.8543L3.21421 7.74675L3.13663 7.67008L0.230775 4.79834C0.22172 4.7894 0.215052 4.77782 0.211883 4.76481C0.208712 4.75184 0.209201 4.73816 0.213267 4.72549C0.217329 4.71282 0.224718 4.70183 0.234309 4.69364C0.24383 4.6855 0.255167 4.68034 0.266997 4.67854M0.266997 4.67854C0.267062 4.67854 0.266933 4.67858 0.266997 4.67854Z"
      stroke="#F4F4F4"
      strokeWidth="0.419631"
    />
  );

  const Filled = (
    <>
      <path d="M8.14881 3.97097L8.19732 4.07055L8.30688 4.0867L12.3217 4.67849C12.3217 4.67849 12.3218 4.67854 12.3217 4.67849C12.3336 4.6803 12.3451 4.68546 12.3546 4.69364C12.3642 4.70183 12.3716 4.71282 12.3757 4.72549C12.3797 4.73816 12.3802 4.75184 12.377 4.76481C12.3739 4.77782 12.3672 4.78936 12.3582 4.7983L9.4531 7.67012L9.37551 7.74679L9.39373 7.8543L10.0796 11.9101L10.0797 11.9108C10.082 11.9239 10.0805 11.9373 10.0757 11.9494C10.0708 11.9616 10.0628 11.9718 10.0528 11.9791C10.0429 11.9864 10.0314 11.9906 10.0196 11.9915C10.0078 11.9924 9.99594 11.9899 9.98528 11.9843C9.9852 11.9842 9.98532 11.9843 9.98528 11.9843L6.39358 10.0698L6.29484 10.0172L6.19614 10.0698L2.60441 11.9849C2.59373 11.9906 2.58172 11.9931 2.56995 11.9922C2.55817 11.9914 2.54667 11.9872 2.53676 11.9799C2.52684 11.9726 2.51885 11.9624 2.514 11.9504C2.50915 11.9382 2.50773 11.9248 2.50999 11.9118L2.51013 11.911L3.19603 7.8543L3.21421 7.74675L3.13663 7.67008L0.230775 4.79834C0.22172 4.7894 0.215052 4.77782 0.211883 4.76481C0.208712 4.75184 0.209201 4.73816 0.213267 4.72549C0.217329 4.71282 0.224718 4.70183 0.234309 4.69364C0.24383 4.6855 0.255167 4.68034 0.266997 4.67854L4.28204 4.0867L4.3916 4.07056L4.44007 3.971L6.23718 0.28083L6.23777 0.279646C6.24327 0.268179 6.25166 0.258827 6.26177 0.252422C6.27188 0.246032 6.28334 0.242757 6.29488 0.242757C6.30642 0.242757 6.31788 0.246032 6.32795 0.252422C6.33806 0.258827 6.3465 0.268179 6.35199 0.279646L6.5412 0.188965L6.35254 0.280796L8.14881 3.97097Z" fill="#FCC71C" />
      {Outline}
    </>
  );

  // Fractional fill rendering by overlaying a clipped filled star above an outline
  if (typeof fillPercent === "number" && fillPercent > 0 && fillPercent < 1) {
    return (
      <span className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          {Outline}
        </svg>
        <span className="absolute inset-0 overflow-hidden" style={{ width: `${Math.max(0, Math.min(1, fillPercent)) * 100}%` }}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            {Filled}
          </svg>
        </span>
      </span>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {filled ? Filled : Outline}
    </svg>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarSvg key={star} filled={star <= Math.floor(rating)} size={12} className="w-3 h-3 md:w-6 md:h-6" />
      ))}
    </div>
  );
}
interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  avatar?: string;
}

export function ReviewsSection() {
  const { t } = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { openConsultation } = useModal();
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const reviews: Review[] = t.reviews.items.map((item, index) => ({
    id: index + 1,
    author: item.author,
    text: item.text,
    rating: item.rating,
  }));

  // Fixed realtor rating
  const currentRating = 4.9;

  // Force a controlled line break on specific ranges. Robustly split on the first whitespace
  // (handles regular spaces, NBSP and narrow spaces). If none found, split roughly in half.
  const rawTitle = t.reviews.title || "";
  const splitMatch = rawTitle.match(/^(.*?)[\s\u00A0\u202F\u2009\u2007]+(.*)$/);
  let firstWord: string;
  let restTitle: string;
  if (splitMatch) {
    firstWord = (splitMatch[1] || "").trim();
    restTitle = (splitMatch[2] || "").trim();
  } else {
    const mid = Math.max(1, Math.ceil(rawTitle.length / 2));
    firstWord = rawTitle.slice(0, mid).trim();
    restTitle = rawTitle.slice(mid).trim();
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Minimum swipe distance (in px) to trigger a change
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[#FCFCFC]">
      <div className="site-container">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          
          {/* Left column - Header and CTA */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF8F3] px-[14px] md:px-[18px] py-1 mb-4 md:mb-6">
              <span className="inline-block h-1 w-1 md:h-2 md:w-2 rounded-full bg-gradient-to-b from-[#31AA5A] to-[#258A49]" />
              <span className="text-[10px] md:text-[14px] leading-4 md:leading-7 font-medium text-[#141414]">{t.reviews.tag}</span>
            </div>

            {/* Title: mobile 46/52, force 2 lines on 770-1002px and on lg+ */}
            <h2 className="text-[46px] leading-[52px] md:text-[52px] md:leading-[1.1] lg:text-[68px] xl:text-[82px] font-medium mb-4 md:mb-6">
              <span className="lg:whitespace-nowrap">{firstWord}</span>
              {/* Existing break: visible on mobile and lg+ */}
              <br className="block md:hidden lg:block" />
              {/* Additional break only for 768px-1023px (tablet) viewport widths */}
              <br className="hidden min-[768px]:block min-[1024px]:hidden" />
              <span className="lg:whitespace-nowrap">{restTitle}</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[14px] md:text-[18px] leading-[24px] md:leading-[26px] mb-6 md:mb-8">
              Ваші слова — найкраще <span className="font-bold">підтвердження<br className="md:hidden" /> моєї роботи</span>
            </p>

            {/* CTA Button */}
            <button onClick={openConsultation} className="inline-flex items-center justify-center gap-4 md:gap-5 pl-6 md:pl-8 pr-2 py-2 rounded-[55px] bg-gradient-to-br from-[#FFD02B] to-[#F7B91E] hover:shadow-lg transition-shadow">
              <span className="text-[16px] md:text-[18px] leading-6 font-bold text-[#1D1918]">
                {t.reviews.cta}
              </span>
              <div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-[#1D1918] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                  {/* Right-pointing arrow with tail, yellow stroke */}
                  <path d="M5 12H17" stroke="#FFD02B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 6l6 6-6 6" stroke="#FFD02B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>

          {/* Right column - Reviews carousel */}
          <div className="relative">
            {/* Cards stack */}
            <div 
              className="relative h-[300px] md:h-[450px] lg:h-[474px]"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {reviews.map((review, index) => {
                const position = (index - currentIndex + reviews.length) % reviews.length;
                const isActive = position === 0;
                const isSecond = position === 1;
                const isThird = position === 2;

                return (
                  <div
                    key={review.id}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                      isActive
                        ? "block z-30 translate-x-0 translate-y-0 scale-100 opacity-100"
                        : isSecond
                        ? "hidden md:block md:z-20 md:translate-x-[36px] lg:translate-x-[44px] md:scale-[0.92] md:opacity-100"
                        : isThird
                        ? "hidden md:block md:z-10 md:translate-x-[80px] lg:translate-x-[80px] md:scale-[0.86] md:opacity-100"
                        : "hidden md:block md:z-0 md:opacity-0 md:pointer-events-none"
                    }`}
                  >
                    <div className="bg-white border border-[#F0F0F0] rounded-[20px] md:rounded-[24px] p-8 md:p-12 lg:p-16 panel-shadow h-[300px] md:h-[450px] lg:h-[474px] flex flex-col">
                      {/* Logo */}
                      <div className="mb-6 md:mb-8">
                        <Image
                          src="/images/logo.png"
                          alt="Bondaruk Partners"
                          width={115}
                          height={33}
                          className="md:w-[138px] md:h-[39px]"
                        />
                      </div>

                      {/* Review text */}
                      <p className="text-[12px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[24px] lg:leading-[26px] text-[#1D1918] font-light mb-auto break-words">
                        {review.text}
                      </p>

                      {/* Author info */}
                      <div className="flex items-center justify-between mt-6 md:mt-8">
                        <div className="flex items-center gap-3 md:gap-4">
                          {/* Avatar */}
                          <div className="w-[32px] h-[32px] md:w-[45px] md:h-[45px] rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/rewie-photo.png"
                              alt={review.author}
                              width={45}
                              height={45}
                              className="object-cover"
                            />
                          </div>
                          
                          <div>
                            <p className="text-[12px] md:text-[16px] leading-3 md:leading-[23px] font-bold text-[#434343] whitespace-nowrap mb-1">
                              {review.author}
                            </p>
                            <div>
                              <StarRating rating={review.rating} />
                            </div>
                          </div>
                        </div>

                        {/* Google icon */}
                        <div className="w-[32px] h-[32px] md:w-[46px] md:h-[46px] flex-shrink-0">
                          <Image
                            src="/icons/google.svg"
                            alt="Google"
                            width={46}
                            height={46}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Rating, Progress bar and Navigation - full width at bottom */}
        <div className="mt-8 md:mt-12">
          {/* Progress bar - top on mobile, inline on desktop */}
          <div className="md:hidden flex-1 h-[3px] bg-[#E5E5E5] rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-[#31AA5A] to-[#258A49] transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
            />
          </div>

          <div className="flex w-full flex-row md:flex-row items-center gap-2 md:gap-6">
            {/* Rating Card */}
            <div className="w-[202px] md:w-[280px] lg:w-[319px] h-[61px] md:h-[96px] bg-white border border-[#F0F0F0] rounded-[10px] md:rounded-2xl flex items-center px-3 md:px-5 gap-2 md:gap-4 flex-shrink-0">
              {/* Google Icon */}
              <div className="w-[30px] h-[30px] md:w-12 md:h-12 flex-shrink-0">
                <Image
                  src="/icons/google.svg"
                  alt="Google"
                  width={48}
                  height={48}
                  className="w-full h-full"
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[10px] md:text-[16px] leading-[18px] md:leading-[28px] font-bold text-[#434343] whitespace-nowrap">
                  {t.reviews.ratingLabel}
                </p>
                <div className="flex items-center gap-[2px] md:gap-1">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const whole = Math.floor(currentRating);
                    const frac = Math.max(0, Math.min(1, currentRating - whole));
                    if (star <= whole) {
                      return (
                        <StarSvg key={star} filled size={15} className="w-[15px] h-[15px] md:w-6 md:h-6" />
                      );
                    }
                    if (star === whole + 1 && frac > 0) {
                      return (
                        <StarSvg key={star} fillPercent={frac} size={15} className="w-[15px] h-[15px] md:w-6 md:h-6" />
                      );
                    }
                    return (
                      <StarSvg key={star} filled={false} size={15} className="w-[15px] h-[15px] md:w-6 md:h-6" />
                    );
                  })}
                </div>
              </div>

              <div className="text-[14px] md:text-[22px] leading-[25px] md:leading-[39px] font-bold text-[#1D1918]">
                {currentRating.toFixed(1)}
              </div>
            </div>

            {/* Progress bar - desktop only */}
            <div className="hidden md:block flex-1 h-[6px] bg-[#E5E5E5] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#31AA5A] to-[#258A49] transition-all duration-500"
                style={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
              />
            </div>

            {/* Arrow buttons */}
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 ml-auto">
              <button
                onClick={handlePrev}
                className="w-9 h-9 md:w-[60px] md:h-[60px] rounded-full border border-[#1D1918] bg-white flex items-center justify-center transition-colors opacity-25"
                aria-label="Previous review"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-8 md:h-8">
                  {/* Left arrow with shaft, light gray stroke */}
                  <path d="M19 12H7" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l-6 6 6 6" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 md:w-[60px] md:h-[60px] rounded-full bg-[#FCC71C] flex items-center justify-center transition-all hover:bg-[#fdd54d]"
                aria-label="Next review"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-8 md:h-8">
                  {/* Right arrow with shaft, black stroke */}
                  <path d="M5 12h12" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 6l6 6-6 6" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
