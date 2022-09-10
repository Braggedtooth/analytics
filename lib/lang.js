import { da, enGB, enUS, fi, sv } from 'date-fns/locale';

export const languages = {
  'da-DK': { label: 'Dansk', dateLocale: da },
  'en-US': { label: 'English (US)', dateLocale: enUS },
  'en-GB': { label: 'English (UK)', dateLocale: enGB },
  'fi-FI': { label: 'Suomi', dateLocale: fi },
  'sv-SE': { label: 'Svenska', dateLocale: sv },
};

export function getDateLocale(locale) {
  return languages[locale]?.dateLocale || sv;
}

export function getTextDirection(locale) {
  return languages[locale]?.dir || 'ltr';
}
