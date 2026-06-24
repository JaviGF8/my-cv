import type { PointerEvent as ReactPointerEvent } from 'react';

import type { Face } from './Cube.types';

export interface UseCubeParams {
  size: number;
  face: Face;
  isDisabled: boolean;
  hasSwipe: boolean;
  onFaceChange?: (face: Face) => void;
}

export interface UseCubeResult {
  cubeTransform: string;
  getFaceTransform: (face: Face) => string;
  frontFace: Face;
  handlePointerCancel: () => void;
  handlePointerDown: (e: ReactPointerEvent) => void;
  handlePointerUp: (e: ReactPointerEvent) => void;
  isMoving: boolean;
}
