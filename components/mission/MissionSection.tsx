'use client';

import { useLocale } from '@/lib/context/LocaleContext';

export function MissionSection() {
  const { t } = useLocale();

  return (
    <section className="site-container py-10 md:py-16 lg:py-20">
      <div className="max-w-[1440px]">
        {/* Content wrapper */}
        <div className="flex flex-col gap-5 md:gap-6 lg:gap-7">
          <h2 className="text-[32px] leading-[40px] md:text-[48px] md:leading-[56px] lg:text-[64px] lg:leading-[72px] font-medium text-[#1D1918]">
            {t.mission.title}
          </h2>
          
          <div className="text-base md:text-lg leading-[24px] md:leading-[26px] text-[#181818]">
            <p className="mb-5 md:mb-7">
              {t.mission.paragraph1}
            </p>
            <p>
              {t.mission.paragraph2}
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 md:mt-12 lg:mt-[60px] w-full md:w-[324px] h-[56px] md:h-[62px] border border-[#1D1918] rounded-[55px] flex items-center justify-center hover:bg-[#1D1918] hover:text-white transition-colors">
          <span className="text-base md:text-lg leading-6 font-bold text-[#1D1918] hover:text-white">
            {t.mission.button}
          </span>
        </button>
      </div>
    </section>
  );
}
