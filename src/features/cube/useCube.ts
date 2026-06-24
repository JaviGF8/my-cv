import { useState, useEffect, useCallback, useRef } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';

import type { Face, Point } from './Cube.types';
import { buildCubeTransformFromOrientation, buildFaceTransform } from './domain/cubeGeometry';
import { getDirectionFromKey, getSwipeDirection, isClickNotDrag } from './domain/cubeInput';
import { anglesForFace, getFrontFace, rotateViewer } from './domain/orientation';
import type { Orientation } from './domain/orientation.types';
import type { UseCubeParams, UseCubeResult } from './useCube.types';

export const useCube = ({
  face,
  hasSwipe,
  isDisabled,
  onFaceChange,
  size,
}: UseCubeParams): UseCubeResult => {
  const [orientation, setOrientation] = useState<Orientation>(() => anglesForFace(face));
  const [isMoving, setIsMoving] = useState(false);
  const pointerStartRef = useRef<Point | null>(null);
  const movingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setOrientation(anglesForFace(face));
  }, [face]);

  const applyRotation = useCallback(
    (newOrientation: Orientation) => {
      setOrientation(newOrientation);
      setIsMoving(true);
      const newFace = getFrontFace(newOrientation);
      onFaceChange?.(newFace);
    },
    [onFaceChange],
  );

  useEffect(() => {
    movingTimerRef.current = setTimeout(() => setIsMoving(false), 500);
    return () => {
      if (movingTimerRef.current) clearTimeout(movingTimerRef.current);
    };
  }, [orientation]);

  useEffect(() => {
    if (isDisabled) return;

    const onKeyDown = (e: KeyboardEvent): void => {
      if (isMoving) return;
      const direction = getDirectionFromKey(e.key);
      if (direction) {
        applyRotation(rotateViewer(orientation, direction));
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [orientation, isDisabled, isMoving, applyRotation]);

  const handlePointerDown = useCallback(
    (e: ReactPointerEvent) => {
      if (isDisabled || isMoving) return;
      pointerStartRef.current = { x: e.clientX, y: e.clientY };
    },
    [isDisabled, isMoving],
  );

  const handlePointerUp = useCallback(
    (e: ReactPointerEvent) => {
      if (isDisabled || !pointerStartRef.current) return;

      const end: Point = { x: e.clientX, y: e.clientY };
      const start = pointerStartRef.current;
      pointerStartRef.current = null;

      if (isClickNotDrag(start, end)) return;

      if (isMoving) return;

      if (hasSwipe) {
        const direction = getSwipeDirection(start, end);
        if (direction) {
          applyRotation(rotateViewer(orientation, direction));
        }
      }
    },
    [orientation, isDisabled, isMoving, hasSwipe, applyRotation],
  );

  const handlePointerCancel = useCallback(() => {
    pointerStartRef.current = null;
  }, []);

  const cubeTransform = buildCubeTransformFromOrientation(orientation, size);
  const frontFace = getFrontFace(orientation);

  const getFaceTransform = useCallback((f: Face) => buildFaceTransform(f, size), [size]);

  return {
    cubeTransform,
    frontFace,
    getFaceTransform,
    handlePointerCancel,
    handlePointerDown,
    handlePointerUp,
    isMoving,
  };
};
