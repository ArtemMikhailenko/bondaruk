"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context/LocaleContext";

function AvatarGroup({ variant = "default" }: { variant?: "default" | "withCheck" }) {
  if (variant === "withCheck") {
    return (
      <div className="flex -space-x-2">
        <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full bg-[#FCC71C] flex items-center justify-center shrink-0 overflow-hidden relative">
          <Image src="/images/ruki.png" alt="" width={55} height={55} className="object-cover w-full h-full" />
        </div>
        <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden relative shrink-0">
          <Image src="/images/room1.png" alt="" fill className="object-cover" />
        </div>
        <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden relative shrink-0">
          <Image src="/images/room2.png" alt="" fill className="object-cover" />
        </div>
        <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden relative shrink-0">
          <Image src="/images/room3.png" alt="" fill className="object-cover" />
        </div>
        <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden relative shrink-0">
          <Image src="/images/room4.png" alt="" fill className="object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex -space-x-2">
      <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden relative shrink-0">
        <Image src="/images/face1.png" alt="" fill className="object-cover" />
      </div>
      <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden relative shrink-0">
        <Image src="/images/face2.png" alt="" fill className="object-cover" />
      </div>
      <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden relative shrink-0">
        <Image src="/images/face3.png" alt="" fill className="object-cover" />
      </div>
      <div className="w-9 h-9 md:w-[55px] md:h-[55px] rounded-full border-2 border-white overflow-hidden relative shrink-0">
        <Image src="/images/face4.png" alt="" fill className="object-cover" />
      </div>
      <div className="w-8 h-8 md:w-[55px] md:h-[55px] flex items-center justify-center ml-2 shrink-0 relative">
        <Image src="/icons/google.svg" alt="Google" width={32} height={32} className="md:w-[40px] md:h-[40px]" />
      </div>
    </div>
  );
}

export function ReputationSection() {
  const { t } = useLocale();

  return (
    <section className="relative py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      {/* Left background image */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-full max-w-[600px] hidden lg:block">
        <Image
          src="/images/reputation-bg-left.png"
          alt=""
          fill
      
          className="object-contain"
        />
        {/* Gradient fade at bottom */}
        <div className="absolute left-0 right-0 bottom-0 h-[200px] bg-gradient-to-t from-white to-transparent" />
      </div>
      
      {/* Right background image */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-full max-w-[900px] hidden lg:block">
        <Image
          src="/images/reputation-bg-right.png"
          alt=""
          fill
          
          className="object-contain"
        />
        {/* Gradient fade at bottom */}
        <div className="absolute left-0 right-0 bottom-0 h-[350px] bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="site-container relative z-10">
        <div className="max-w-[1076px] mx-auto flex flex-col gap-4 md:gap-[18px]">
          
          {/* Card 1: Ідеальна репутація */}
          <div className="bg-white rounded-[16px] lg:rounded-[22px] min-h-[228px] lg:h-[218px] flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-[60px] lg:py-0 gap-6 lg:gap-0"
            style={{ boxShadow: '0px 4px 41.5px rgba(87, 87, 87, 0.08)' }}
          >
            <div>
              <h3 className="text-[22px] lg:text-[38px] leading-[28px] lg:leading-[38px] font-bold mb-4 lg:mb-[16px]">
                {t.reputation.idealTitle}
              </h3>
              <p className="text-[14px] lg:text-[18px] leading-[20px] lg:leading-[24px] opacity-80 max-w-full lg:max-w-[547px]">
                <span className="font-semibold text-[#FCC71C]">{t.reputation.years}</span> {t.reputation.idealText1} <span className="font-semibold">{t.reputation.clients}</span> {t.reputation.idealText2}<br className="hidden lg:block" />
                {t.reputation.idealText3} <span className="font-semibold">{t.reputation.lawyer}</span> {t.reputation.idealText4}
              </p>
            </div>
            <div className="lg:flex-shrink-0">
              <AvatarGroup />
            </div>
          </div>

          {/* Card 2: У 2 рази швидше угоди */}
          <div className="bg-[#FCC71C] rounded-[22px] min-h-[228px] lg:h-[218px] relative overflow-hidden p-6 lg:px-[50px] lg:py-[75px]"
            style={{ boxShadow: '0px 4px 41.5px rgba(87, 87, 87, 0.08)' }}
          >
            <div className="relative z-10">
              <h3 className="text-[22px] lg:text-[38px] leading-[28px] lg:leading-[38px] font-bold mb-4 lg:mb-[23px]">
                {t.reputation.cardTitle1} <span className="inline-flex items-center justify-center bg-white rounded-[23px] lg:rounded-[39px] px-2 lg:px-[15px] h-[28px] lg:h-[47px] text-[18px] lg:text-[32px] leading-[18px] lg:leading-[32px] font-bold align-middle mx-1">{t.reputation.cardTimes}</span> {t.reputation.cardTitle2}
              </h3>
              <p className="text-[14px] lg:text-[18px] leading-[20px] lg:leading-[24px] opacity-80 max-w-[285px] lg:max-w-none">
                {t.reputation.cardSubtitleStart} <span className="font-semibold">{t.reputation.cardSubtitleBold}</span>
              </p>
            </div>
            {/* Graph - positioned absolutely on the right */}
            <div className="absolute right-0 -bottom-3 w-[294px] h-[160px] lg:w-[389px] lg:h-[212px]">
              <Image
                src="/images/grafik.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Card 3: Вигідніше за ринок */}
          <div className="bg-white rounded-[22px] min-h-[228px] lg:h-[218px] flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-[48px] lg:py-0 gap-6 lg:gap-0"
            style={{ boxShadow: '0px 4px 41.5px rgba(87, 87, 87, 0.08)' }}
          >
            <div>
              <h3 className="text-[22px] lg:text-[38px] leading-[28px] lg:leading-[38px] font-bold mb-4 lg:mb-[16px]">
                {t.reputation.benefitsTitle}
              </h3>
              <p className="text-[14px] lg:text-[18px] leading-[20px] lg:leading-[24px] opacity-80 max-w-full lg:max-w-[397px]">
                {t.reputation.benefitsText1} <span className="font-semibold text-[#FCC71C]">{t.reputation.percent}</span> <span className="font-semibold">{t.reputation.benefitsText2}</span>
              </p>
            </div>
            <div className="lg:flex-shrink-0">
              <AvatarGroup variant="withCheck" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
