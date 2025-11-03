"use client";

import { useLocale } from "@/lib/context/LocaleContext";
import { useState } from "react";

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

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQSection() {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Second item open by default

  const faqs: FAQItem[] = t.faq.items.map((item, index) => ({
    id: index + 1,
    question: item.question,
    answer: item.answer,
  }));

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-16 lg:py-20 bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Left column - Header */}
          <div>
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF8F3] px-[18px] py-1 mb-4 md:mb-6">
              <GradientDot />
              <span className="text-[14px] leading-7 font-medium">{t.faq.tag}</span>
            </div>

            {/* Title */}
            <h2 className="text-[36px] md:text-[52px] lg:text-[68px] xl:text-[82px] leading-[1.1] font-medium mb-4 md:mb-6">
              {t.faq.title}
            </h2>

            {/* Subtitle */}
            <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[26px]">
              {t.faq.subtitle1}{" "}
              <span className="font-semibold">{t.faq.subtitle2}</span>
              {t.faq.subtitle3}
            </p>
          </div>

          {/* Right column - FAQ List */}
          <div className="flex flex-col gap-4 md:gap-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`rounded-[16px] md:rounded-[24px] transition-all ${
                  openIndex === index
                    ? "bg-[#EFF8F3]"
                    : "bg-white"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-start justify-between gap-3 md:gap-4 p-4 md:p-6 lg:p-8 text-left"
                >
                  <div className="flex items-start gap-3 md:gap-4 flex-1">
                    <span className="text-[16px] md:text-[18px] leading-[26px] text-[#181818]/40 font-medium flex-shrink-0">
                      0{index + 1}
                    </span>
                    <h3 className="text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] leading-[1.3] font-semibold text-[#1D1918]">
                      {faq.question}
                    </h3>
                  </div>
                  
                  {/* Toggle button */}
                  <div
                    className={`w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index
                        ? "bg-[#1D1918]"
                        : "bg-[#31AA5A]"
                    }`}
                  >
                    {openIndex === index ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                        <path d="M18 12H6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="md:w-6 md:h-6">
                        <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 pb-4 pt-0 md:px-6 md:pb-6 lg:px-8 lg:pb-8">
                    <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.5] text-[#181818]/80 ml-[calc(1rem+16px)] md:ml-[calc(1.5rem+18px)]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
