import type { FC } from 'react';

import { Icon } from 'components/Icon/Icon';

import type { ButtonProps } from './Button.types';

export const Button: FC<ButtonProps> = ({ children, className = '', icon, text, ...rest }) => (
  <button
    className={`inline-flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors duration-200 hover:opacity-80 ${className}`.trim()}
    type="button"
    {...rest}
  >
    {icon && <Icon icon={icon} />}
    {text && <span>{text}</span>}
    {children}
  </button>
);
