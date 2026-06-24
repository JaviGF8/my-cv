import type { Face } from 'features/cube/Cube.types';

export interface UseMainCubeParams {
  isIntroHidden: boolean;
}

export interface UseMainCubeResult {
  face: Face;
  handleExpandChange: (isOpen: boolean) => void;
  isFullscreen: boolean;
  isInitialTransition: boolean;
  size: number;
}
