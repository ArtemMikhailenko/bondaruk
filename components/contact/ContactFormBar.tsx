"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/lib/context/LocaleContext";

export function ContactFormBar() {
  const { t } = useLocale();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: hook to API or send to email service
    console.log({ name, phone });
  }

  return (
    <section className="pb-20 -mt-6 sm:-mt-8 md:mt-0 relative z-20">
      <div className="site-container">
  <div className="relative rounded-[20px] md:rounded-[40px] bg-white overflow-hidden panel-shadow min-h-[199px] flex items-center">

          {/* decorative image: top-right on mobile, bottom-left on ≥sm */}
          {/* Mobile (only): top-right */}
          <div className="pointer-events-none absolute right-0 top-0 h-[172px] w-[114px] block sm:hidden">
            <Image src="/images/contact-bar-mobile.png" alt="" fill className="object-cover" />
          </div>
          {/* Desktop/Tablet: bottom-left */}
          <div className="pointer-events-none absolute left-0 bottom-0 h-[172px] w-[84px] hidden sm:block">
            <Image src="/images/contact-bar.png" alt="" fill className="object-cover" />
          </div>

          <form onSubmit={onSubmit} className="relative flex flex-wrap lg:flex-nowrap items-center justify-between gap-4 lg:gap-2 px-3 sm:px-8 lg:px-12 py-6 lg:py-8 w-full">
            {/* title */}
            <div className="flex-1 min-w-[240px] lg:min-w-0">
              <div className="text-[18px] sm:text-[20px] lg:text-[24px] leading-[1.4]">
                <div className="whitespace-nowrap">
                  <span className="font-bold text-[#1d1918]">{t.form.titleQuestion}</span>{' '}{t.form.titleWe}
                </div>
                <div className="whitespace-nowrap">
                  {t.form.titleAnswer} <span className="font-bold text-gradient-green">{t.form.titleFree}</span>
                </div>
              </div>
            </div>

            {/* phone */}
            <div className="flex-none w-full sm:w-[260px] lg:w-[270px]">
              <label htmlFor="cf-phone" className="sr-only">
                {t.form.phonePlaceholder}
              </label>
              <input
                id="cf-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t.form.phonePlaceholder}
                className="w-full h-12 lg:h-[62px] rounded-[14px] lg:rounded-[55px] border border-[#E3E3E3] lg:border-black/60 px-[18px] py-3.5 text-[12px] lg:text-[18px] placeholder:text-[#444] outline-none"
              />
            </div>

            {/* name */}
            <div className="flex-none w-full sm:w-[260px] lg:w-[270px]">
              <label htmlFor="cf-name" className="sr-only">
                {t.form.namePlaceholder}
              </label>
              <input
                id="cf-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.form.namePlaceholder}
                className="w-full h-12 lg:h-[62px] rounded-[14px] lg:rounded-[55px] border border-[#E3E3E3] lg:border-black/60 px-[18px] py-3.5 text-[12px] lg:text-[18px] placeholder:text-[#444] outline-none"
              />
            </div>

            {/* submit */}
            <div className="flex-none w-full sm:w-auto lg:w-[270px]">
              <button
                type="submit"
                className="w-full h-[54px] lg:h-[62px] rounded-[55px] bg-gradient-to-r from-[#FFCF2B] to-[#F7B71E] text-[#1D1918] font-bold text-[16px] lg:text-[18px] whitespace-nowrap"
              >
                {t.form.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
