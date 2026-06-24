import type { ReactNode } from 'react';

export interface SectionProps {
  children?: ReactNode;
  className?: string;
  isDisabled?: boolean;
  onExpandChange?: (isOpen: boolean) => void;
  title?: string;
}
