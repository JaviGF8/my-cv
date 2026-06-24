import type { FC } from 'react';
import { useState } from 'react';

import { Icon } from 'components/Icon';

import { useTranslate } from 'i18n';

export const Info: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslate();

  return (
    <div
      className="fixed bottom-4 right-4 z-30 bg-secondary text-surface rounded-sm shadow-lg cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible ? (
        <div className="p-4 max-w-xs transition-all duration-300 ">
          <p className="font-semibold text-sm mb-1">{t('info.howToUse')}</p>
          <p className="text-xs text-ink">{t('info.info')}</p>
        </div>
      ) : (
        <div className="w-10 h-10 flex items-center justify-center">
          <Icon icon="fas fa-info" />
        </div>
      )}
    </div>
  );
};
