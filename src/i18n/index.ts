import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import eng from './locales/eng';
import esp from './locales/esp';
import useTranslate from './useTranslate';

const resources = {
  eng: {
    translation: { ...eng },
  },
  esp: {
    translation: { ...esp },
  },
};

const languages = [
  { label: 'English', value: 'eng' },
  { label: 'Español', value: 'esp' },
];

const DEFAULT_LANGUAGE = 'esp';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
      order: ['localStorage', 'navigator'],
    },
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false,
    },
    resources,
    supportedLngs: ['eng', 'esp'],
  });

export { DEFAULT_LANGUAGE, i18n, languages, resources, useTranslate };
