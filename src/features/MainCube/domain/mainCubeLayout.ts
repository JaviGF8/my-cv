import type { Face } from 'features/cube/Cube.types';

export const getSize = (): number => {
  const { innerHeight, innerWidth } = window;
  return Math.min(innerWidth, innerHeight) * 0.8;
};

export const getInitialFace = (isIntroComplete: boolean): Face =>
  isIntroComplete ? 'front' : 'back';
