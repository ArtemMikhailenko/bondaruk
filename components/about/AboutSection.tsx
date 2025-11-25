"use client";

import Image from "next/image";
import { useLocale } from "@/lib/context/LocaleContext";

function StatCard({
  variant,
  icon,
  value,
  label,
  className = "",
  index = 0,
}: {
  variant: "white" | "green";
  icon: React.ReactNode;
  value: string;
  label: string;
  className?: string;
  index?: number;
}) {
  // Компенсуємо негативний відступ від накладення карток на мобільних
  // Перша картка: 30px, друга: 30px + 16px компенсації, третя: 30px + 32px компенсації
  const topPadding = index === 0 ? "mt-[30px]" : index === 1 ? "mt-[42px] md:mt-[30px]" : "mt-[42px] md:mt-[30px]";
  
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
        
        <div className={`relative z-10 ml-8 md:ml-[82px] ${topPadding}`}>{icon}</div>
        <div className="relative z-10 ml-8 md:ml-[82px] mb-[30px] mt-auto">
          <div className="text-[64px] leading-[1.2] font-semibold">
            {value.includes('%') ? (
              <>
                {value.replace('%', '')}
                <span className="inline-block ml-1 align-baseline text-[0.4em] leading-none">%</span>
              </>
            ) : (
              value
            )}
          </div>
          <div className="-mt-[5px] text-[16px] md:text-[18px] leading-[16px] md:leading-[18px]">{label}</div>
        </div>
      </div>
    );
  }
  
  // Білі картки - однаковий відступ зліва для всіх на мобільних
  return (
    <div 
      className={`rounded-[16px] lg:rounded-[22px] bg-white flex flex-col ${className}`}
      style={{
        boxShadow: '0px 4px 41.5px rgba(87, 87, 87, 0.08)'
      }}
    >
      <div className={`ml-8 md:ml-[84px] ${topPadding}`}>{icon}</div>
      <div className="ml-8 md:ml-[84px] mb-[30px] mt-auto">
        <div className="text-[60px] leading-[1.2] font-semibold">
          {value.includes('%') ? (
            <>
              {value.replace('%', '')}
              <span className="inline-block ml-1 align-baseline text-[0.7em] leading-none">%</span>
            </>
          ) : (
            value
          )}
        </div>
  <div className="-mt-[5px] text-[16px] md:text-[18px] leading-[16px] md:leading-[18px]">{label}</div>
      </div>
    </div>
  );
}

export function AboutSection() {
  const { t } = useLocale();

  return (
  <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="site-container">
  <div className="grid lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-stretch">
          {/* Left column - Tag, Title, Text */}
          <div className="max-w-full lg:max-w-[760px] xl:max-w-[900px]  h-full">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF8F3] px-[14px] md:px-[18px] py-1 mb-4 md:mb-[20px]">
              <span className="inline-block h-1 w-1 md:h-2 md:w-2 rounded-full bg-gradient-to-b from-[#31AA5A] to-[#258A49]" />
              <span className="text-[10px] md:text-[14px] leading-4 md:leading-7 text-[#141414] font-medium">
                {t.about.tag}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-[46px] leading-[52px] md:text-[50px] md:leading-[56px] lg:text-[60px] lg:leading-[68px] xl:text-[70px] xl:leading-[78px] font-medium mb-4 md:mb-6 lg:mb-[25px] lg:whitespace-nowrap">
              {t.about.title}
            </h2>

            <p className="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] mb-[7px]">
              {/* Formatted paragraph with highlights as per design */}
              <span className="font-semibold">{t.about.rich1.leadBold}</span>
              {t.about.rich1.leadRest}
              {" "}
              {t.about.rich1.i}
              <span className="font-semibold">{t.about.rich1.name}</span>
              <span className="font-semibold">{t.about.rich1.roleBefore}</span>
              <span className="font-semibold text-gradient-green">{t.about.rich1.brand}</span>
              {t.about.rich1.roleAfter}
              {" "}
              {t.about.rich1.helpStart}
              <span className="font-semibold">{t.about.rich1.helpBold}</span>
            </p>
            <p className="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] font-light">
              {t.about.paragraph2}
            </p>
          </div>

          {/* Right column - Stats */}
          {/* Mobile: stacked with overlap; Tablet: 2-col grid; Desktop: horizontal row with overlap */}
          <div className="flex flex-col -space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-6 lg:flex lg:flex-row lg:space-y-0 lg:-space-x-12 h-full self-stretch">
            <StatCard
              variant="white"
              icon={<Image src="/icons/icons1.svg" alt="" width={22} height={22} className="w-[22px] h-[22px] md:w-8 md:h-8" />}
              value={t.about.experience.value}
              label={t.about.experience.label}
              index={0}
              className="w-full sm:max-w-[343px] md:w-full md:col-span-1 lg:w-[190px] h-[237px] md:h-[220px] lg:h-[388px] z-30 lg:z-30 flex-shrink-0"
            />
            <StatCard
              variant="white"
              icon={<Image src="/icons/icons2.svg" alt="" width={22} height={22} className="w-[22px] h-[22px] md:w-8 md:h-8" />}
              value={t.about.deals.value}
              label={t.about.deals.label}
              index={1}
              className="w-full sm:max-w-[343px] md:w-full md:col-span-1 lg:w-[300px] h-[237px] md:h-[220px] lg:h-[388px] z-20 lg:z-20 flex-shrink-0"
            />
            <StatCard
              variant="green"
              icon={<Image src="/icons/icons3.svg" alt="" width={22} height={22} className="w-[22px] h-[22px] md:w-8 md:h-8" />}
              value={t.about.savings.value}
              label={t.about.savings.label}
              index={2}
              className="w-full sm:max-w-[343px] md:w-full md:col-span-2 lg:w-[368px] h-[237px] md:h-[240px] lg:h-[388px] z-10 lg:z-10 flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
