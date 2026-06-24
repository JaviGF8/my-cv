import type { ReactNode } from 'react';

export type Face = 'back' | 'bottom' | 'front' | 'left' | 'right' | 'top';

export interface Point {
  x: number;
  y: number;
}

export interface CubeProps {
  backContent?: ReactNode;
  bottomContent?: ReactNode;
  className?: string;
  face?: Face;
  frontContent?: ReactNode;
  hasSwipe?: boolean;
  isDisabled?: boolean;
  leftContent?: ReactNode;
  onFaceChange?: (face: Face) => void;
  rightContent?: ReactNode;
  size: number;
  topContent?: ReactNode;
}
