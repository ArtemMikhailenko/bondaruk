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

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          className={star <= Math.floor(rating) ? "fill-[#F8BB1C]" : "fill-none stroke-[#F8BB1C]"}
        >
          <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" />
        </svg>
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

  const reviews: Review[] = t.reviews.items.map((item, index) => ({
    id: index + 1,
    author: item.author,
    text: item.text,
    rating: item.rating,
  }));

  // Get current review's rating
  const currentRating = reviews[currentIndex]?.rating || 5;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-gradient-to-b from-white to-[#FCFCFC]">
      <div className="site-container">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-center">
          
          {/* Left column - Header and CTA */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF8F3] px-[18px] py-1 mb-4 md:mb-6">
              <GradientDot />
              <span className="text-[14px] leading-7 font-medium">{t.reviews.tag}</span>
            </div>

            {/* Title */}
            <h2 className="text-[36px] md:text-[52px] lg:text-[68px] xl:text-[82px] leading-[1.1] font-medium mb-4 md:mb-6">
              {t.reviews.title}
            </h2>

            {/* Subtitle */}
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] mb-6 md:mb-8">
              Ваші слова — найкраще <span className="font-bold">підтвердження моєї роботи</span>
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
            <div className="relative h-[400px] md:h-[450px] lg:h-[474px]">
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
                        ? "z-30 translate-x-0 translate-y-0 scale-100 opacity-100"
                        : isSecond
                        ? "z-20 translate-x-[28px] md:translate-x-[36px] lg:translate-x-[44px] scale-[0.92] opacity-100"
                        : isThird
                        ? "z-10 translate-x-[56px] md:translate-x-[80px] lg:translate-x-[80px] scale-[0.86] opacity-100"
                        : "z-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="bg-white border border-[#F0F0F0] rounded-[20px] md:rounded-[24px] p-8 md:p-12 lg:p-16 panel-shadow h-[400px] md:h-[450px] lg:h-[474px] flex flex-col">
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
                      <p className="text-[15px] md:text-[16px] lg:text-[18px] leading-[22px] md:leading-[24px] lg:leading-[26px] text-[#181818] font-light mb-auto whitespace-pre-line">
                        {review.text}
                      </p>

                      {/* Author info */}
                      <div className="flex items-center justify-between mt-6 md:mt-8">
                        <div className="flex items-center gap-3 md:gap-4">
                          {/* Avatar */}
                          <div className="w-[40px] h-[40px] md:w-[45px] md:h-[45px] rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src="/images/rewie-photo.png"
                              alt={review.author}
                              width={45}
                              height={45}
                              className="object-cover"
                            />
                          </div>
                          
                          <div>
                            <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[23px] font-bold text-[#434343] whitespace-nowrap">
                              {review.author}
                            </p>
                            <div className="scale-90 md:scale-100 origin-left">
                              <StarRating rating={review.rating} />
                            </div>
                          </div>
                        </div>

                        {/* Google icon */}
                        <div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] flex-shrink-0">
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
          <div className="md:hidden flex-1 h-[6px] bg-[#E5E5E5] rounded-full overflow-hidden mb-4">
            <div
              className="h-full bg-gradient-to-r from-[#31AA5A] to-[#258A49] transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / reviews.length) * 100}%` }}
            />
          </div>

          <div className="flex flex-row md:flex-row items-center gap-2 md:gap-6">
            {/* Rating Card */}
            <div className="flex-1 md:w-[280px] lg:w-[319px] max-w-[320px] h-[61px] md:h-[96px] bg-white border border-[#F0F0F0] rounded-[10px] md:rounded-2xl flex items-center px-3 md:px-5 gap-2 md:gap-4 md:flex-shrink-0">
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
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="15"
                      height="15"
                      viewBox="0 0 24 23"
                      fill="none"
                      className={`md:w-6 md:h-6 ${star <= currentRating ? "fill-[#FCC71C]" : "fill-none stroke-[#FCC71C]"}`}
                    >
                      <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" />
                    </svg>
                  ))}
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
            <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
              <button
                onClick={handlePrev}
                className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full border border-[#D9D9D9] bg-white flex items-center justify-center transition-colors"
                aria-label="Previous review"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                  {/* Left arrow with shaft, light gray stroke */}
                  <path d="M19 12H7" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13 6l-6 6 6 6" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full bg-[#FCC71C] flex items-center justify-center transition-all hover:bg-[#fdd54d]"
                aria-label="Next review"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
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
