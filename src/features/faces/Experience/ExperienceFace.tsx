import type { FC } from 'react';

import { Section } from 'components/Section';

import { useTranslate } from 'i18n';

import type { CompanyData, ExperienceFaceProps } from './ExperienceFace.types';

export const ExperienceFace: FC<ExperienceFaceProps> = ({ onExpandChange }) => {
  const { t } = useTranslate();

  const companies: CompanyData[] = [
    {
      name: 'Syngenta',
      role: t('experience.syngenta.role'),
      place: 'Sevilla',
      start: '01/2023',
      end: '06/2026',
      technologies: t('experience.syngenta.technologies'),
    },
    {
      name: 'Cyferd',
      role: t('experience.cyferd.role'),
      place: 'Sevilla',
      start: '08/2022',
      end: '01/2023',
      technologies: t('experience.cyferd.technologies'),
    },
    {
      name: 'Plexus Technologies',
      role: t('experience.plexus2.role'),
      place: 'Palma de Mallorca / Sevilla',
      start: '07/2020',
      end: '07/2022',
      technologies: t('experience.plexus2.technologies'),
    },
    {
      name: 'Wozzo',
      role: t('experience.wozzo.role'),
      place: 'Palma de Mallorca',
      start: '09/2017',
      end: '07/2020',
      technologies: t('experience.wozzo.technologies'),
    },
    {
      name: 'Plexus Technologies',
      role: t('experience.plexus.role'),
      place: 'Palma de Mallorca',
      start: '08/2016',
      end: '09/2017',
      technologies: t('experience.plexus.technologies'),
    },
    {
      name: 'GMV',
      role: t('experience.gmv.role'),
      place: 'Sevilla',
      start: '09/2015',
      end: '08/2016',
      technologies: t('experience.gmv.technologies'),
    },
    {
      name: 'Oesía Networks',
      role: t('experience.oesia.role'),
      place: 'Sevilla',
      start: '06/2015',
      end: '08/2015',
      technologies: t('experience.oesia.technologies'),
    },
    {
      name: 'Atos',
      role: t('experience.atos.role'),
      place: 'Sevilla',
      start: '08/2013',
      end: '06/2015',
      technologies: t('experience.atos.technologies'),
    },
  ];

  return (
    <Section
      className="experience-section"
      onExpandChange={onExpandChange}
      title={t('experience.title')}
    >
      <div className="space-y-3">
        {companies.map((company) => (
          <div
            key={`${company.name}-${company.start}`}
            className="border-b border-gray-light/30 pb-2 last:border-0"
          >
            <p className="font-semibold text-sm">{company.name}</p>
            <p className="text-xs text-gray-light">
              {company.start} - {company.end}
            </p>
            <p className="text-xs">{company.role}</p>
            <p className="text-xs text-gray-light">{company.place}</p>
            <p className="text-xs italic text-secondary-light">{company.technologies}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
