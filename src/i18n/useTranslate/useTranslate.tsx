import { enGB as eng, es as esp } from 'date-fns/locale';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

import type { UseTranslationProps } from './useTranslate.types';

const locales = {
  eng,
  esp,
};

const useTranslate = (): UseTranslationProps => {
  const { i18n, t } = useTranslation();

  return { changeLanguage, currentLanguage: i18n.language, locales, t };
};

export default useTranslate;
