export type Locale = 'uk' | 'ru' | 'en';

export const locales: Locale[] = ['uk', 'ru', 'en'];

export const defaultLocale: Locale = 'uk';

export const localeNames: Record<Locale, string> = {
  uk: 'UA',
  ru: 'RU',
  en: 'EN',
};
