import type { FC } from 'react';

import { Icon } from 'components/Icon';
import { Section } from 'components/Section';

import { useTranslate } from 'i18n';

import type { NetworkData, SocialFaceProps } from './SocialFace.types';

const networks: NetworkData[] = [
  {
    icon: 'fab fa-linkedin',
    link: 'https://linkedin.com/in/javigarciafajardo',
    name: 'LinkedIn',
    username: 'Javier Fajardo García ',
  },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/JaviGF8/',
    name: 'GitHub',
    username: 'JaviGF8',
  },
];

export const SocialFace: FC<SocialFaceProps> = ({ onExpandChange }) => {
  const { t } = useTranslate();

  return (
    <Section className="social-section" onExpandChange={onExpandChange} title={t('social.title')}>
      <div className="space-y-4 mt-4">
        {networks.map((net) => (
          <a
            key={net.name}
            className="flex items-center gap-3 hover:text-secondary no-underline rounded border border-gray-light/30 p-2"
            href={net.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon className="text-xl text-secondary-light " icon={net.icon} />
            <div>
              <p className="font-semibold text-md">{net.name}</p>
              <p className="text-xs">{net.username}</p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};
