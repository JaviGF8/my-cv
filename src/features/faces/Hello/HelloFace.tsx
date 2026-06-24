import type { FC } from 'react';

import { Section } from 'components/Section';

import type { HelloFaceProps } from './HelloFace.types';

export const HelloFace: FC<HelloFaceProps> = ({ onExpandChange }) => (
  <Section onExpandChange={onExpandChange} title="Hello :)">
    <div className="flex items-center justify-center h-full">
      <span className="text-2xl">👋</span>
    </div>
  </Section>
);
