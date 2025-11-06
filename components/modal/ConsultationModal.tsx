"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useLocale } from "@/lib/context/LocaleContext";
import { useModal } from "@/lib/context/ModalContext";

export default function ConsultationModal() {
  const { t } = useLocale();
  const { open, close } = useModal();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [touchedName, setTouchedName] = useState(false);
  const [touchedPhone, setTouchedPhone] = useState(false);

  const isPhoneValid = useMemo(() => {
    const d = phone.replace(/\D/g, "");
    return (d.startsWith("380") && d.length === 12) || (d.startsWith("0") && d.length === 10);
  }, [phone]);

  const isValid = useMemo(() => name.trim().length >= 2 && isPhoneValid, [name, isPhoneValid]);

  // close on Esc
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  // prevent scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (open !== "consultation") return null;

  return (
  <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <button aria-label="Close" onClick={close} className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Modal card */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="relative w-[94vw] max-w-[600px] bg-white rounded-[40px] shadow-[0_4px_41.5px_rgba(87,87,87,0.08)] p-5 sm:p-10 md:p-12"
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-5 right-5 grid place-items-center w-10 h-10 rounded-full hover:bg-black/5 transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6l12 12M18 6L6 18" stroke="#1D1918" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Title */}
        <h3
          className="text-[#1D1918] leading-[1.12] md:leading-10 font-bold text-center mt-4 whitespace-nowrap"
          style={{ fontSize: "clamp(13px, 4.2vw, 36px)" }}
        >
          {t.contactSection.title}
        </h3>

        {/* Subtitle with forced line break to match design */}
        <p className="mt-3 md:mt-4 text-center text-[#1D1918] text-[15px] md:text-[18px] leading-[24px] md:leading-[26px] max-w-[520px] mx-auto">
          {t.contactSection.subtitleStart} <span className="font-bold">{t.contactSection.subtitleBold}</span>
          <br />
          <span className="font-bold">{t.contactSection.subtitleBeforeTime}</span> {" "}
          <span className="text-[#31AA5A] font-semibold">{t.contactSection.time}</span>
        </p>

        {/* Form */}
        <form
          className="mt-6 md:mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (!isValid) return;
            close();
          }}
        >
          {/* Name */}
          <div>
            <label className="block text-[14px] leading-[18px] text-black/60 mb-2">{t.contactSection.nameLabel}</label>
            <input
              type="text"
              placeholder={t.contactSection.namePlaceholder}
              className={`w-full h-[56px] rounded-lg px-[18px] text-[16px] placeholder:text-[#D8D8D8] border ${
                touchedName && name.trim().length < 2 ? "border-red-400" : "border-[#d8d8d8]"
              }`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouchedName(true)}
              required
            />
          </div>
          {/* Phone */}
          <div>
            <label className="block text-[14px] leading-[18px] text-black/60 mb-2">{t.contactSection.phoneLabel}</label>
            <input
              type="tel"
              placeholder={t.contactSection.phonePlaceholder}
              className={`w-full h-[56px] rounded-lg px-[18px] text-[16px] placeholder:text-[#D8D8D8] border ${
                touchedPhone && !isPhoneValid ? "border-red-400" : "border-[#d8d8d8]"
              }`}
              inputMode="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouchedPhone(true)}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`mt-4 w-full h-[62px] rounded-[55px] px-4 text-center text-[16px] font-bold transition-colors ${
              isValid
                ? "bg-[#1D1918] text-[#FFD02B] hover:bg-[#141212]"
                : "bg-gradient-to-r from-[#FFCF2B] to-[#F7B71E] text-[#1D1918]"
            }`}
          >
            {t.contactSection.submit}
          </button>
        </form>
      </div>
    </div>
  );
}
