import type { Face } from 'features/cube/Cube.types';

export type UseMainCubeParams = {
  isIntroHidden: boolean;
};

export type UseMainCubeResult = {
  face: Face;
  handleExpandChange: (isOpen: boolean) => void;
  isFullscreen: boolean;
  isInitialTransition: boolean;
  size: number;
};
