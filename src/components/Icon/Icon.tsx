import type { FC } from 'react';

import type { IconProps } from './Icon.types';

export const Icon: FC<IconProps> = ({ className = '', icon }) => (
  <i aria-hidden="true" className={`${icon} ${className}`.trim()} />
);
