'use client';

import Image from 'next/image';
import { useLocale } from '@/lib/context/LocaleContext';
import { useModal } from '@/lib/context/ModalContext';

export function Footer() {
  const { t } = useLocale();
  const { openConsultation } = useModal();

  return (
    <footer className="relative bg-[#1D1918] text-white min-h-[906px] md:min-h-[489px] py-10 md:py-8 min-[1900px]:py-0 min-[1900px]:h-[489px]">
      <div className="max-w-[1920px] mx-auto h-full px-4 lg:px-8 min-[1900px]:px-0">
        {/* Social buttons */}
        <div className="min-[1900px]:absolute min-[1900px]:top-5 min-[1900px]:left-[232px] min-[1900px]:right-[232px] grid grid-cols-2 md:flex gap-3 min-[1900px]:gap-[14px] md:justify-between mb-8 min-[1900px]:mb-0">
          <a href="#" className="group flex items-center justify-center gap-3 lg:gap-4 bg-[#EFF8F3] hover:bg-gradient-to-b hover:from-[#31AA5A] hover:to-[#258A49] rounded-[999px] px-8 md:px-10 lg:px-12 xl:px-16 min-[1900px]:px-[120px] h-[60px] md:h-[72px] transition-all md:flex-1 min-[1900px]:flex-initial">
            <svg width="20" height="20" viewBox="0 0 18 15" fill="none" className="fill-[#1D1918] group-hover:fill-white transition-all md:w-6 md:h-6">
              <path d="M17.8455 0.853344L15.1627 13.8281C14.9627 14.7294 14.4096 14.9631 13.6252 14.5156L9.50957 11.4987L7.51895 13.4044C7.30207 13.6213 7.11895 13.8044 6.69645 13.8044L6.99019 9.61251L14.6565 2.61095C14.984 2.32782 14.5877 2.16876 14.1502 2.45188L4.76895 8.51095L0.703324 7.24719C-0.213738 6.96407 -0.230051 6.33095 0.896886 5.88345L16.7146 0.0106316C17.4877 -0.272493 18.1627 0.168444 17.8455 0.853344Z"/>
            </svg>
            <span className="text-[14px] md:text-base 2xl:text-lg leading-none md:leading-[25px] font-semibold text-[#1D1918] group-hover:text-white whitespace-nowrap transition-all">Telegram</span>
          </a>

          <a href="#" className="group flex items-center justify-center gap-3 lg:gap-4 bg-[#EFF8F3] hover:bg-gradient-to-b hover:from-[#31AA5A] hover:to-[#258A49] rounded-[999px] px-8 md:px-10 lg:px-12 xl:px-16 min-[1900px]:px-[120px] h-[60px] md:h-[72px] transition-all md:flex-1 min-[1900px]:flex-initial">
            <Image src="/icons/viber.svg" alt="Viber" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6 group-hover:brightness-0 group-hover:invert transition-all" />
            <span className="text-[14px] md:text-base min-[1900px]:text-lg leading-none md:leading-[25px] font-semibold text-[#1D1918] group-hover:text-white whitespace-nowrap transition-all">Viber</span>
          </a>

          <a href="#" className="group flex items-center justify-center gap-3 lg:gap-4 bg-[#EFF8F3] hover:bg-gradient-to-b hover:from-[#31AA5A] hover:to-[#258A49] rounded-[999px] px-8 md:px-10 lg:px-12 xl:px-16 min-[1900px]:px-[120px] h-[60px] md:h-[72px] transition-all md:flex-1 min-[1900px]:flex-initial">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="fill-[#1D1918] group-hover:fill-white transition-all md:w-6 md:h-6">
              <path d="M9 0C6.55612 0 6.24924 0.0101812 5.28924 0.054C4.3314 0.0980625 3.67688 0.2505 3.10462 0.4725C2.51362 0.7005 2.01037 1.00463 1.50938 1.50937C1.00462 2.01037 0.7005 2.51362 0.47175 3.10387C0.249375 3.67613 0.0969375 4.33087 0.0540625 5.28862C0.0113437 6.24862 0 6.55562 0 9C0 11.4444 0.0101813 11.7501 0.054 12.7108C0.0980625 13.6684 0.2505 14.3229 0.4725 14.8954C0.7005 15.4864 1.00462 15.9896 1.50937 16.4906C2.01037 16.9954 2.51362 17.3006 3.10387 17.5282C3.67613 17.7502 4.33087 17.9027 5.28862 17.9465C6.24862 17.9903 6.55562 18.0007 9 18.0007C11.4444 18.0007 11.7501 17.9903 12.7108 17.9465C13.6684 17.9027 14.3239 17.7502 14.8964 17.5282C15.4871 17.3006 15.9896 16.9954 16.4906 16.4906C16.9954 15.9896 17.2995 15.4864 17.5282 14.8961C17.7487 14.3229 17.9012 13.6684 17.946 12.7106C17.9893 11.7506 18 11.4444 18 9C18 6.55562 17.9893 6.24937 17.946 5.28937C17.9012 4.33162 17.7487 3.67613 17.5282 3.10462C17.2995 2.51362 16.9954 2.01037 16.4906 1.50937C15.9889 1.00462 15.4864 0.7005 14.8954 0.47175C14.322 0.2505 13.6666 0.0980625 12.7089 0.054C11.7489 0.0101812 11.4429 0 8.9973 0H9.00075H9ZM8.18437 1.62225H9.00075C11.4038 1.62225 11.6888 1.63037 12.6375 1.674C13.5143 1.71412 13.9898 1.86113 14.3081 1.98412C14.7281 2.14838 15.0273 2.34375 15.3421 2.65875C15.6571 2.97375 15.8524 3.27338 16.0171 3.69338C16.1401 4.01113 16.2874 4.48662 16.3272 5.36337C16.3706 6.31212 16.3795 6.59712 16.3795 8.99812C16.3795 11.3991 16.3706 11.6841 16.3272 12.6329C16.2871 13.5096 16.1401 13.9849 16.0171 14.3029C15.8528 14.7229 15.6571 15.0214 15.3421 15.3361C15.0271 15.6511 14.7284 15.8464 14.3081 16.0107C13.9906 16.1344 13.5143 16.2807 12.6375 16.3208C11.6888 16.3642 11.4038 16.3731 9.00075 16.3731C6.59762 16.3731 6.31263 16.3642 5.36387 16.3208C4.48712 16.2801 4.01163 16.1331 3.69313 16.0101C3.27313 15.8458 2.9735 15.6505 2.6585 15.3355C2.3435 15.0205 2.14813 14.7218 1.98387 14.3015C1.86088 13.9838 1.71363 13.5083 1.67387 12.6315C1.63037 11.6828 1.62225 11.3978 1.62225 8.99587C1.62225 6.59413 1.63037 6.31013 1.67387 5.36137C1.71388 4.48463 1.86088 4.00913 1.98387 3.69063C2.14813 3.27063 2.3435 2.971 2.6585 2.656C2.9735 2.341 3.27313 2.14562 3.69313 1.98113C4.01088 1.85738 4.48712 1.71113 5.36387 1.67088C6.20025 1.63287 6.52163 1.622 8.18437 1.62013V1.62225ZM13.8056 3.11738C13.2109 3.11738 12.7291 3.59838 12.7291 4.19362C12.7291 4.78863 13.2109 5.27038 13.8056 5.27038C14.4006 5.27038 14.8824 4.78863 14.8824 4.19362C14.8824 3.59862 14.4006 3.11662 13.8056 3.11662V3.11738ZM9.00075 4.3785C6.44363 4.3785 4.3785 6.44375 4.3785 9.00087C4.3785 11.558 6.44363 13.6221 9.00075 13.6221C11.5579 13.6221 13.6223 11.558 13.6223 9.00087C13.6223 6.44375 11.5578 4.3785 9.00063 4.3785H9.00075ZM9.00075 5.99962C10.6629 5.99962 12.0007 7.33738 12.0007 8.99962C12.0007 10.6619 10.6629 11.9999 9.00075 11.9999C7.33837 11.9999 6.00075 10.6619 6.00075 8.99962C6.00075 7.33738 7.33837 5.99962 9.00075 5.99962Z"/>
            </svg>
            <span className="text-[14px] md:text-base min-[1900px]:text-lg leading-none md:leading-[25px] font-semibold text-[#1D1918] group-hover:text-white whitespace-nowrap transition-all">Instagram</span>
          </a>

          <a href="#" className="group flex items-center justify-center gap-3 lg:gap-4 bg-[#EFF8F3] hover:bg-gradient-to-b hover:from-[#31AA5A] hover:to-[#258A49] rounded-[999px] px-8 md:px-10 lg:px-12 xl:px-16 min-[1900px]:px-[120px] h-[60px] md:h-[72px] transition-all md:flex-1 min-[1900px]:flex-initial">
            <svg width="20" height="20" viewBox="0 0 11 19" fill="none" className="fill-[#1D1918] group-hover:fill-white transition-all md:w-6 md:h-6">
              <path d="M6.5 6V4C6.5 3.44772 6.94772 3 7.5 3H8.5V0H6.5C4.84315 0 3.5 1.34315 3.5 3V6H0.5V9H3.5V18H6.5V9H8.5L9.5 6H6.5Z"/>
            </svg>
            <span className="text-[14px] md:text-base min-[1900px]:text-lg leading-none md:leading-[25px] font-semibold text-[#1D1918] group-hover:text-white whitespace-nowrap transition-all">Facebook</span>
          </a>
        </div>

        {/* Top border */}
        <div className="min-[1900px]:absolute min-[1900px]:top-[102px] left-0 w-full h-px bg-white/5 my-8 md:my-8 min-[1900px]:my-0 rounded-[29px]" />

        {/* Content grid */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 min-[1900px]:gap-0">
          {/* Logo and CTA */}
          <div className="min-[1900px]:absolute min-[1900px]:top-[126px] min-[1900px]:left-[240px]">
            <Image 
              src="/images/logo-foot.png" 
              alt="Bondaruk Partners" 
              width={168} 
              height={48}
              className="md:w-[209px] md:h-[59px]"
            />

            <button type="button" onClick={openConsultation} className="mt-[33px] md:mt-[33px] flex items-center gap-5 w-full max-w-[298px] md:max-w-[371px] h-[52px] md:h-[62px] bg-gradient-to-b from-[#FFCF2B] to-[#F7B91E] rounded-[55px] pl-2 pr-4 md:pr-6 py-2 hover:opacity-90 transition-opacity">
              <div className="w-[36px] h-[36px] md:w-[46px] md:h-[46px] bg-[#1D1918] rounded-full flex items-center justify-center">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" className="md:w-[24px] md:h-[24px]">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#FFD02B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[14px] leading-6 font-extrabold text-[#1D1918] whitespace-nowrap">{t.footer.cta}</span>
            </button>
          </div>

          {/* Two column menu on mobile */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {/* Services Menu */}
            <div className="min-[1900px]:absolute min-[1900px]:top-[144px] min-[1900px]:left-[882px]">
              <p className="text-[14px] md:text-base leading-[14px] md:leading-[25px] text-[#979797] mb-[12px] md:mb-[12px]">{t.footer.servicesTitle}</p>
              <nav className="flex flex-col gap-[10px] md:gap-[10px]">
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.sell}</a>
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.buy}</a>
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.rent}</a>
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.lend}</a>
              </nav>
            </div>

            {/* Navigation Menu */}
            <div className="min-[1900px]:absolute min-[1900px]:top-[144px] min-[1900px]:left-[1157px]">
              <p className="text-[14px] md:text-base leading-[14px] md:leading-[25px] text-[#979797] mb-[12px] md:mb-[12px]">{t.footer.navigationTitle}</p>
              <nav className="flex flex-col gap-[10px] md:gap-[10px]">
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.objects}</a>
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.agents}</a>
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.agency}</a>
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.partners}</a>
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.contacts}</a>
                <a href="#" className="text-[14px] md:text-base leading-[14px] md:leading-[25px] font-semibold text-white hover:text-[#31AA5A] transition-colors">{t.footer.blog}</a>
              </nav>
            </div>
          </div>

          {/* Contacts */}
          <div className="min-[1900px]:absolute min-[1900px]:top-[144px] min-[1900px]:left-[1433px]">
            <p className="text-[14px] md:text-base leading-[14px] md:leading-[25px] text-[#727272] mb-[12px] md:mb-[12px]">{t.footer.contactsTitle}</p>
            
            <div className="flex items-center gap-[14px] mb-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27097 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[16px] md:text-base leading-6 font-medium text-white/80">{t.contact.phone}</span>
            </div>

            <div className="flex items-center gap-[14px] mb-2">
              <Image src="/icons/mail.svg" alt="Email" width={24} height={24} />
              <span className="text-[16px] md:text-base leading-6 font-medium text-white/80">{t.contact.email}</span>
            </div>

            <div className="flex items-center gap-[14px]">
              <Image src="/icons/geo.svg" alt="Address" width={24} height={24} />
              <span className="text-[16px] md:text-base leading-6 font-medium text-white/80">{t.contact.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom border */}
  <div className="min-[1900px]:absolute min-[1900px]:bottom-[71px] left-0 w-full h-px bg-white/5 my-8 md:my-8 min-[1900px]:my-0 rounded-[29px]" />

        {/* Bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 min-[1900px]:absolute min-[1900px]:bottom-[30px] min-[1900px]:left-[240px] min-[1900px]:right-[240px]">
          <a href="#" className="text-[12px] md:text-base leading-[12px] md:leading-[25px] font-semibold text-[#737373] hover:text-white transition-colors">{t.footer.privacy}</a>
          <a href="#" className="text-[12px] md:text-base leading-[12px] md:leading-[25px] font-semibold text-[#737373] hover:text-white transition-colors text-right">{t.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}
