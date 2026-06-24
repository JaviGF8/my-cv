import type { Face } from '../Cube.types';

import type { Direction, Orientation } from './orientation.types';

export type { Direction, Orientation };

export const IDENTITY: Orientation = [1, 0, 0, 0, 1, 0, 0, 0, 1];

const matMul = (a: Orientation, b: Orientation): Orientation => [
  a[0] * b[0] + a[1] * b[3] + a[2] * b[6],
  a[0] * b[1] + a[1] * b[4] + a[2] * b[7],
  a[0] * b[2] + a[1] * b[5] + a[2] * b[8],

  a[3] * b[0] + a[4] * b[3] + a[5] * b[6],
  a[3] * b[1] + a[4] * b[4] + a[5] * b[7],
  a[3] * b[2] + a[4] * b[5] + a[5] * b[8],

  a[6] * b[0] + a[7] * b[3] + a[8] * b[6],
  a[6] * b[1] + a[7] * b[4] + a[8] * b[7],
  a[6] * b[2] + a[7] * b[5] + a[8] * b[8],
];

const ROTATE_LEFT: Orientation = [0, 0, -1, 0, 1, 0, 1, 0, 0];
const ROTATE_RIGHT: Orientation = [0, 0, 1, 0, 1, 0, -1, 0, 0];
const ROTATE_UP: Orientation = [1, 0, 0, 0, 0, -1, 0, 1, 0];
const ROTATE_DOWN: Orientation = [1, 0, 0, 0, 0, 1, 0, -1, 0];

const DIRECTION_MATRIX: Record<Direction, Orientation> = {
  left: ROTATE_LEFT,
  right: ROTATE_RIGHT,
  up: ROTATE_UP,
  down: ROTATE_DOWN,
};

export const rotateViewer = (orientation: Orientation, direction: Direction): Orientation =>
  matMul(DIRECTION_MATRIX[direction], orientation);

export const getFrontFace = (orientation: Orientation): Face => {
  const [, , zx, , , zy, , , zz] = orientation;

  if (zz > 0) {
    return 'front';
  }
  if (zz < 0) {
    return 'back';
  }
  if (zx > 0) {
    return 'right';
  }
  if (zx < 0) {
    return 'left';
  }
  if (zy > 0) {
    return 'bottom';
  }
  return 'top';
};

const FACE_ORIENTATIONS: Record<Face, Orientation> = {
  front: IDENTITY,
  back: [-1, 0, 0, 0, 1, 0, 0, 0, -1],
  left: [0, 0, -1, 0, 1, 0, 1, 0, 0],
  right: [0, 0, 1, 0, 1, 0, -1, 0, 0],
  top: [1, 0, 0, 0, 0, 1, 0, -1, 0],
  bottom: [1, 0, 0, 0, 0, -1, 0, 1, 0],
};

export const anglesForFace = (face: Face): Orientation => FACE_ORIENTATIONS[face];

export const straightenCurrentFace = (orientation: Orientation): Orientation =>
  anglesForFace(getFrontFace(orientation));
