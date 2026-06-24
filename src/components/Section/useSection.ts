import { useState, useEffect, useRef, useCallback } from 'react';

import {
  getNextPhase,
  isPortalVisible,
  getFadeClass,
  isDoubleTap,
  isTapNotDrag,
} from './domain/sectionDomain';
import type { SectionPhase } from './domain/sectionDomain.types';
import type { UseSectionParams, UseSectionResult } from './useSection.types';

export const useSection = ({
  isDisabled = false,
  onExpandChange,
}: UseSectionParams): UseSectionResult => {
  const [phase, setPhase] = useState<SectionPhase>('collapsed');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastTapTsRef = useRef<number | null>(null);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (phase === 'expanding') {
      onExpandChange?.(true);
      timerRef.current = setTimeout(
        () => setPhase((prev) => getNextPhase(prev, 'animation-end')),
        500,
      );
    }
    if (phase === 'collapsing') {
      timerRef.current = setTimeout(() => {
        setPhase((prev) => getNextPhase(prev, 'animation-end'));
        onExpandChange?.(false);
      }, 400);
    }

    return (): void => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [phase, onExpandChange]);

  useEffect(
    () => (): void => {
      if (phase === 'expanding' || phase === 'expanded') {
        onExpandChange?.(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const handleOpen = useCallback((): void => {
    if (isDisabled) return;
    setPhase((prev) => getNextPhase(prev, 'expand'));
  }, [isDisabled]);

  const handleCollapse = useCallback((): void => {
    setPhase((prev) => getNextPhase(prev, 'collapse'));
  }, []);

  const handlePointerDown = useCallback((x: number, y: number): void => {
    pointerStartRef.current = { x, y };
  }, []);

  const handlePointerUp = useCallback(
    (x: number, y: number): void => {
      if (!pointerStartRef.current) return;
      const start = pointerStartRef.current;
      pointerStartRef.current = null;

      if (!isTapNotDrag(x - start.x, y - start.y)) return;

      const now = Date.now();
      if (isDoubleTap(lastTapTsRef.current, now)) {
        lastTapTsRef.current = null;
        handleOpen();
      } else {
        lastTapTsRef.current = now;
      }
    },
    [handleOpen],
  );

  return {
    phase,
    isOverlayVisible: isPortalVisible(phase),
    fadeClass: getFadeClass(phase),
    handleOpen,
    handleCollapse,
    handlePointerDown,
    handlePointerUp,
  };
};
