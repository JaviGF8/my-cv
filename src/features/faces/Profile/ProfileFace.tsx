import type { FC } from 'react';

import { Bar } from 'components/Bar';
import { Section } from 'components/Section';

import { useTranslate } from 'i18n';

import type { ProfileFaceProps } from './ProfileFace.types';

export const ProfileFace: FC<ProfileFaceProps> = ({ onExpandChange }) => {
  const { t } = useTranslate();

  return (
    <Section className="profile-section" onExpandChange={onExpandChange} title={t('profile.title')}>
      <p className="mb-3 text-sm">{t('profile.header')}</p>
      <Bar amount={85} text="React" />
      <Bar amount={80} text="Typescript" />
      <Bar amount={75} text="Jest" />
      <Bar amount={60} text="Cypress" />
      <Bar amount={85} text="HTML" />
      <Bar amount={85} text="CSS" />
      <Bar amount={60} text="Node" />
      <Bar amount={60} text="Mongo" />
      <Bar amount={65} text="Vite" />
      <Bar amount={50} text="NextJs" />
      <Bar amount={50} text="React Native" />
      <Bar amount={50} text="GraphQL" />
      <Bar amount={30} text="Angular" />
      <Bar amount={40} text="Java" />
      <p className="mt-3 text-sm">{t('profile.text')}</p>
      <p className="mt-2 text-sm">{t('profile.text2')}</p>
    </Section>
  );
};
