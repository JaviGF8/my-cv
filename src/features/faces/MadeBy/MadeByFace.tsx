import type { FC } from 'react';

import { Section } from 'components/Section';

import { useTranslate } from 'i18n';

import type { MadeByFaceProps } from './MadeByFace.types';

export const MadeByFace: FC<MadeByFaceProps> = ({ onExpandChange }) => {
  const { t } = useTranslate();

  return (
    <Section onExpandChange={onExpandChange} title="Made by Javi García Fajardo">
      <p className="text-sm">{t('info.codeIn')}:</p>
      <a
        className="text-secondary-light hover:text-secondary text-sm"
        href="https://github.com/JaviGF8/my-cv/"
        rel="noopener noreferrer"
        target="_blank"
      >
        https://github.com/JaviGF8/my-cv/
      </a>
    </Section>
  );
};
