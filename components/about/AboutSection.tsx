"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context/LocaleContext";

function CalendarIcon() {
  return (
    <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cal-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#31AA5A" />
          <stop offset="100%" stopColor="#258A49" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="24" height="20" rx="6" stroke="url(#cal-gradient)" strokeWidth="2" />
      <rect x="7" y="13" width="6" height="5" rx="1.5" fill="url(#cal-gradient)" />
      <line x1="8" y1="2" x2="8" y2="8" stroke="url(#cal-gradient)" strokeWidth="2" strokeLinecap="round" />
      <line x1="20" y1="2" x2="20" y2="8" stroke="url(#cal-gradient)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DealsIcon() {
  return (
    <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="deals-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#31AA5A" />
          <stop offset="100%" stopColor="#258A49" />
        </linearGradient>
      </defs>
      <path d="M6 18c3 0 4-3 6-3s3 3 6 3 3-3 6-3" stroke="url(#deals-gradient)" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 10h8l2 2 2-2h12" stroke="url(#deals-gradient)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="9" cy="6" r="2" fill="url(#deals-gradient)" />
      <circle cx="23" cy="6" r="2" fill="url(#deals-gradient)" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wallet-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#31AA5A" />
          <stop offset="100%" stopColor="#258A49" />
        </linearGradient>
      </defs>
      <rect x="2" y="6" width="25" height="17" rx="6" stroke="url(#wallet-gradient)" strokeWidth="2" />
      <circle cx="20.5" cy="14.5" r="1.8" fill="url(#wallet-gradient)" />
    </svg>
  );
}

function StatCard({
  variant,
  icon,
  value,
  label,
  className = "",
}: {
  variant: "white" | "green";
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
}) {
  if (variant === "green") {
    return (
      <div 
        className={`rounded-[16px] lg:rounded-[22px] relative flex flex-col overflow-hidden ${className}`}
        style={{
          boxShadow: '0px 4px 41.5px rgba(87, 87, 87, 0.08)'
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/card-green.png" 
            alt="" 
            fill 
            className="object-cover"
          />
        </div>
        
        <div className="relative z-10 ml-8 md:ml-[82px] mt-[30px]">{icon}</div>
        <div className="relative z-10 ml-8 md:ml-[82px] mb-[30px] mt-auto">
          <div className="text-[64px] leading-[1.2] font-semibold">{value}</div>
          <div className="mt-[14px] text-[16px] md:text-[18px] leading-[16px] md:leading-[18px]">{label}</div>
        </div>
      </div>
    );
  }
  
  // Білі картки мають різні відступи залежно від ширини
  const isSmall = className.includes('w-[190px]');
  const leftPadding = isSmall ? 'ml-9' : 'ml-8 md:ml-[84px]';
  
  return (
    <div 
      className={`rounded-[16px] lg:rounded-[22px] bg-white flex flex-col ${className}`}
      style={{
        boxShadow: '0px 4px 41.5px rgba(87, 87, 87, 0.08)'
      }}
    >
      <div className={`${leftPadding} mt-[30px]`}>{icon}</div>
      <div className={`${leftPadding} mb-[30px] mt-auto`}>
        <div className="text-[64px] leading-[1.2] font-semibold">{value}</div>
        <div className="mt-[14px] text-[16px] md:text-[18px] leading-[16px] md:leading-[18px]">{label}</div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const { t } = useLocale();

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="site-container">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
          {/* Left column - Tag, Title, Text */}
          <div className="max-w-full lg:max-w-[760px] xl:max-w-[900px]">
            {/* Tag */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#EFF8F3] px-[18px] py-1 h-9 mb-4 md:mb-[26px]">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-b from-[#31AA5A] to-[#258A49]" />
              <span className="text-[14px] leading-7 text-[#141414] font-medium">
                {t.about.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[36px] leading-[42px] md:text-[50px] md:leading-[56px] lg:text-[60px] lg:leading-[68px] xl:text-[70px] xl:leading-[78px] font-medium mb-4 md:mb-6 lg:mb-[25px] lg:whitespace-nowrap">
              {t.about.title}
            </h2>

            <p className="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] mb-[7px]">
              {/* Formatted paragraph with highlights as per design */}
              <span className="font-semibold">{t.about.rich1.leadBold}</span>
              {t.about.rich1.leadRest}
              {t.about.rich1.i}
              <span className="font-semibold">{t.about.rich1.name}</span>
              {t.about.rich1.roleBefore}
              <span className="font-semibold text-gradient-green">{t.about.rich1.brand}</span>
              {t.about.rich1.roleAfter}
              {t.about.rich1.helpStart}
              <span className="font-semibold">{t.about.rich1.helpBold}</span>
            </p>
            <p className="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] font-light">
              {t.about.paragraph2}
            </p>
          </div>

          {/* Right column - Stats */}
          <div className="flex flex-col -space-y-4 md:-space-y-6 lg:flex-row lg:space-y-0 lg:-space-x-12 self-start lg:self-end">
            <StatCard
              variant="white"
              icon={<CalendarIcon />}
              value={t.about.experience.value}
              label={t.about.experience.label}
              className="w-full max-w-[343px] md:w-[180px] lg:w-[190px] h-[237px] md:h-[200px] lg:h-[388px] z-30 lg:z-30 flex-shrink-0"
            />
            <StatCard
              variant="white"
              icon={<DealsIcon />}
              value={t.about.deals.value}
              label={t.about.deals.label}
              className="w-full max-w-[343px] md:w-[270px] lg:w-[300px] h-[237px] md:h-[200px] lg:h-[388px] z-20 lg:z-20 flex-shrink-0"
            />
            <StatCard
              variant="green"
              icon={<WalletIcon />}
              value={t.about.savings.value}
              label={t.about.savings.label}
              className="w-full max-w-[343px] md:w-[330px] lg:w-[368px] h-[237px] md:h-[200px] lg:h-[388px] z-10 lg:z-10 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
