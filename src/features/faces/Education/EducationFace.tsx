import type { FC } from 'react';

import { Section } from 'components/Section';

import { useTranslate } from 'i18n';

import type { EducationFaceProps, TitleData } from './EducationFace.types';

export const EducationFace: FC<EducationFaceProps> = ({ onExpandChange }) => {
  const { t } = useTranslate();

  const academic: TitleData[] = [
    {
      date: '2006 - 2013',
      expeditor: t('education.university.expeditor'),
      name: t('education.university.title'),
    },
    {
      date: '2012 - 2013',
      expeditor: t('education.erasmus.expeditor'),
      name: t('education.erasmus.title'),
    },
  ];

  const certifications: TitleData[] = [
    {
      date: '11/2025',
      expeditor: t('education.cypress.expeditor'),
      name: t('education.cypress.title'),
    },
    { date: '10/2025', expeditor: t('education.rtl.expeditor'), name: t('education.rtl.title') },
    {
      date: '12/2024',
      expeditor: t('education.kotlin.expeditor'),
      name: t('education.kotlin.title'),
    },
    {
      date: '08/2023',
      expeditor: t('education.nextjs.expeditor'),
      name: t('education.nextjs.title'),
    },
    {
      date: '04/2019',
      expeditor: t('education.react.expeditor'),
      name: t('education.react.title'),
    },
    { date: '03/2018', expeditor: t('education.git.expeditor'), name: t('education.git.title') },
    {
      date: '06/2017',
      expeditor: t('education.angular4.expeditor'),
      name: t('education.angular4.title'),
    },
    {
      date: '06/2017',
      expeditor: t('education.reactBasic.expeditor'),
      name: t('education.reactBasic.title'),
    },
    {
      date: '06/2017',
      expeditor: t('education.typescript.expeditor'),
      name: t('education.typescript.title'),
    },
    {
      date: '06/2017',
      expeditor: t('education.bootstrap.expeditor'),
      name: t('education.bootstrap.title'),
    },
    {
      date: '06/2017',
      expeditor: t('education.jquery.expeditor'),
      name: t('education.jquery.title'),
    },
    {
      date: '11/2016',
      expeditor: t('education.angularjs.expeditor'),
      name: t('education.angularjs.title'),
    },
    {
      date: '03/2016',
      expeditor: t('education.agile.expeditor'),
      name: t('education.agile.title'),
    },
    {
      date: '06/2015',
      expeditor: t('education.android.expeditor'),
      name: t('education.android.title'),
    },
  ];

  return (
    <Section
      className="education-section"
      onExpandChange={onExpandChange}
      title={t('education.title')}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          {academic.map((item) => (
            <div key={item.name} className="border-b border-gray-light/30 pb-1 last:border-0">
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs text-gray-light">{item.expeditor}</p>
              <p className="text-xs text-secondary-light">{item.date}</p>
            </div>
          ))}
        </div>

        <div className="pt-2">
          <h3 className="text-sm font-bold border-b border-secondary-light/30 mb-2 uppercase tracking-wider text-secondary-light">
            {t('education.certificationsTitle')}
          </h3>
          <div className="space-y-2">
            {certifications.map((item) => (
              <div key={item.name} className="border-b border-gray-light/30 pb-1 last:border-0">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-light">{item.expeditor}</p>
                <p className="text-xs text-secondary-light">{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
