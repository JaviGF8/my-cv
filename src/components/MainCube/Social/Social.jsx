import React from 'react';
import Section from '../../Section';
import { translate } from '../../../utils/translator';
import Network from './Network';

const networks = [
  {
    icon: 'fab fa-linkedin',
    link: 'https://linkedin.com/in/javigarciafajardo',
    name: 'LinkedIn',
    username: 'Javier García Fajardo',
  },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/JaviGF8/',
    name: 'GitHub',
    username: 'JaviGF8',
  },
];

const Social = ({ ...rest }) => (
  <Section {...rest} title={translate('social.title')} className="social-section">
    {networks.map((net) => (
      <Network key={net.name} {...net} />
    ))}
  </Section>
);

export default Social;
