import type { FC } from 'react';

import { languages, useTranslate } from 'i18n';

export const Language: FC = () => {
  const { changeLanguage, currentLanguage } = useTranslate();

  return (
    <div className="fixed top-3 right-4 z-50 flex gap-2">
      {languages.map(({ label, value }) => (
        <button
          key={value}
          className={`px-2 py-1 text-xs rounded ${currentLanguage === value ? 'bg-primary text-surface' : 'bg-gray-lighter text-ink'}`}
          onClick={() => changeLanguage(value)}
          type="button"
        >
          {label}
        </button>
      ))}
    </div>
  );
};
