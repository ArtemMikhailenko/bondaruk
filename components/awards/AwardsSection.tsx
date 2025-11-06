'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/context/LocaleContext';

export function AwardsSection() {
  const { t } = useLocale();

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left card - Запрошений експерт */}
          <div className="bg-white rounded-[24px] shadow-[0_4px_41.5px_rgba(87,87,87,0.08)] p-6 md:p-12 lg:p-[60px] min-h-[256px] md:min-h-[320px] lg:min-h-[389px]">
            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[28px] md:leading-tight font-medium text-[#1D1918] text-center mb-4 md:mb-8 lg:mb-10">
              {t.awards.expertTitle}
            </h3>
            
            <div className="flex items-center justify-center gap-[10px] md:gap-6 lg:gap-[26px] flex-nowrap lg:flex-nowrap">
              {/* Прокидайся */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-[104px] h-[104px] md:w-[140px] md:h-[140px] lg:w-[148px] lg:h-[148px] rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/prokydaysia.png"
                    alt="Прокидайся"
                    width={148}
                    height={148}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-[12px] md:text-base lg:text-lg leading-[12px] md:leading-[26px] font-medium text-[#181818] text-center whitespace-nowrap">
                  {t.awards.prokydaysya}
                </p>
              </div>

              {/* РБК Україна */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-[104px] h-[104px] md:w-[140px] md:h-[140px] lg:w-[148px] lg:h-[148px] rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
                  <Image
                    src="/images/rbk.png"
                    alt="РБК Україна"
                    width={145}
                    height={145}
                    className="object-contain w-[90%] h-[90%]"
                  />
                </div>
                <p className="text-[12px] md:text-base lg:text-lg leading-[12px] md:leading-[26px] font-medium text-[#181818] text-center whitespace-nowrap">
                  {t.awards.rbc}
                </p>
              </div>

              {/* Київ98FM */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-[104px] h-[104px] md:w-[140px] md:h-[140px] lg:w-[148px] lg:h-[148px] rounded-xl md:rounded-2xl overflow-hidden flex items-center justify-center bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
                  <Image
                    src="/images/kyiv.png"
                    alt="Київ98FM"
                    width={145}
                    height={145}
                    className="object-contain w-[90%] h-[90%]"
                  />
                </div>
                <p className="text-[12px] md:text-base lg:text-lg leading-[12px] md:leading-[26px] font-medium text-[#181818] text-center whitespace-nowrap">
                  {t.awards.kyiv98}
                </p>
              </div>
            </div>
          </div>

          {/* Right card - Професійні нагороди */}
          <div className="bg-white rounded-[24px] shadow-[0_4px_41.5px_rgba(87,87,87,0.08)] p-6 md:p-12 lg:p-[60px] min-h-[256px] md:min-h-[320px] lg:min-h-[389px]">
            <h3 className="text-[24px] md:text-[28px] lg:text-[32px] leading-[28px] md:leading-tight font-medium text-[#1D1918] text-center mb-4 md:mb-8 lg:mb-10">
              {t.awards.awardsTitle}
            </h3>
            
            <div className="flex items-center justify-center gap-[18px] md:gap-6 lg:gap-[26px] flex-nowrap lg:flex-nowrap">
              {/* Silver Partner */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-[96px] h-[96px] md:w-[140px] md:h-[140px] lg:w-[148px] lg:h-[148px] rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/silver.png"
                    alt="Silver Partner"
                    width={148}
                    height={148}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-[12px] md:text-base lg:text-lg leading-[12px] md:leading-[26px] font-medium text-[#181818] text-center whitespace-nowrap">
                  {t.awards.silver}
                </p>
              </div>

              {/* Gold Partner */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-[96px] h-[96px] md:w-[140px] md:h-[140px] lg:w-[148px] lg:h-[148px] rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/gold.png"
                    alt="Gold Partner"
                    width={148}
                    height={148}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-[12px] md:text-base lg:text-lg leading-[12px] md:leading-[26px] font-medium text-[#181818] text-center whitespace-nowrap">
                  {t.awards.gold}
                </p>
              </div>

              {/* Platinum Partner */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-[96px] h-[96px] md:w-[140px] md:h-[140px] lg:w-[148px] lg:h-[148px] rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/platinum.png"
                    alt="Platinum Partner"
                    width={148}
                    height={148}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-[12px] md:text-base lg:text-lg leading-[12px] md:leading-[26px] font-medium text-[#181818] text-center whitespace-nowrap">
                  {t.awards.platinum}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
