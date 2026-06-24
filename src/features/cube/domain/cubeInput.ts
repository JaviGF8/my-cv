import type { Point } from '../Cube.types';

import type { Direction } from './orientation.types';

export type { Direction };

const SWIPE_THRESHOLD = 50;
const CLICK_THRESHOLD = 10;
const DOUBLE_CLICK_WINDOW_MS = 300;

export const getDirectionFromKey = (key: string): Direction | null => {
  switch (key) {
    case 'ArrowLeft':
      return 'left';
    case 'ArrowRight':
      return 'right';
    case 'ArrowUp':
      return 'up';
    case 'ArrowDown':
      return 'down';
    default:
      return null;
  }
};

export const getSwipeDirection = (start: Point, end: Point): Direction | null => {
  const diffX = end.x - start.x;
  const diffY = end.y - start.y;
  const absX = Math.abs(diffX);
  const absY = Math.abs(diffY);

  if (absX < SWIPE_THRESHOLD && absY < SWIPE_THRESHOLD) return null;

  if (absX >= absY) {
    return diffX > 0 ? 'right' : 'left';
  }
  return diffY > 0 ? 'down' : 'up';
};

export const isClickNotDrag = (start: Point, end: Point): boolean => {
  const distance = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
  return distance < CLICK_THRESHOLD;
};

export const isDoubleActivation = (prevTimestamp: number | null, nowTimestamp: number): boolean => {
  if (prevTimestamp === null) return false;
  return nowTimestamp - prevTimestamp <= DOUBLE_CLICK_WINDOW_MS;
};
