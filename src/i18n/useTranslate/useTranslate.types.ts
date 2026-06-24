import type { Locale } from 'date-fns';
import type { TFunction } from 'i18next';

export type TranslateFunction = TFunction;

export type UseTranslationProps = {
  changeLanguage: (key: string) => void;
  currentLanguage: string;
  locales: {
    [key: string]: Locale;
  };
  t: TranslateFunction;
};
