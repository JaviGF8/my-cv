import React from 'react';
import Section from '../../Section';
import { translate } from '../../../utils/translator';
import Company from './Company';

const companies = [
  {
    name: 'Plexus Technologies',
    role: translate('experience.plexus2.role'),
    place: 'Palma de Mallorca / Sevilla',
    start: '07/2020',
    end: translate('experience.present'),
    technologies: translate('experience.plexus2.technologies'),
  },
  {
    name: 'Wozzo',
    role: translate('experience.wozzo.role'),
    place: 'Palma de Mallorca',
    start: '09/2017',
    end: '07/2020',
    technologies: translate('experience.wozzo.technologies'),
  },
  {
    name: 'Plexus Technologies',
    role: translate('experience.plexus.role'),
    place: 'Palma de Mallorca',
    start: '08/2016',
    end: '09/2017',
    technologies: translate('experience.plexus.technologies'),
  },
  {
    name: 'GMV',
    role: translate('experience.gmv.role'),
    place: 'Sevilla',
    start: '09/2015',
    end: '08/2016',
    technologies: translate('experience.gmv.technologies'),
  },
  {
    name: 'Oesía Networks',
    role: translate('experience.oesia.role'),
    place: 'Sevilla',
    start: '06/2015',
    end: '08/2015',
    technologies: translate('experience.oesia.technologies'),
  },
  {
    name: 'Atos',
    role: translate('experience.atos.role'),
    place: 'Sevilla',
    start: '08/2013',
    end: '06/2015',
    technologies: translate('experience.atos.technologies'),
  },
];

const Experience = ({ ...rest }) => (
  <Section {...rest} title={translate('experience.title')} className="experience-section">
    {companies.map((company) => (
      <Company key={company.name} {...company} />
    ))}
  </Section>
);

export default Experience;
