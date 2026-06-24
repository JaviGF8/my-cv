import type { Face } from '../Cube.types';

import type { Orientation } from './orientation.types';

export const buildCubeTransformFromOrientation = (
  orientation: Orientation,
  size: number,
): string => {
  const half = size / 2;
  const [r00, r01, r02, r10, r11, r12, r20, r21, r22] = orientation;

  const m = [r00, r10, r20, 0, r01, r11, r21, 0, r02, r12, r22, 0, 0, 0, 0, 1];

  return `translateZ(-${half}px) matrix3d(${m.join(',')})`;
};

export const buildFaceTransform = (face: Face, size: number): string => {
  const half = size / 2;
  const transforms: Record<Face, string> = {
    front: `rotateX(0deg) translateZ(${half}px)`,
    back: `rotateX(180deg) rotateZ(180deg) translateZ(${half}px)`,
    right: `rotateY(90deg) translateZ(${half}px)`,
    left: `rotateY(-90deg) translateZ(${half}px)`,
    top: `rotateX(90deg) translateZ(${half}px)`,
    bottom: `rotateX(-90deg) translateZ(${half}px)`,
  };
  return transforms[face];
};
