import { useCallback, useEffect, useRef, useState } from 'react';

import { getInitialFace, getSize } from './domain/mainCubeLayout';
import type { UseMainCubeParams, UseMainCubeResult } from './useMainCube.types';

export const useMainCube = ({ isIntroHidden }: UseMainCubeParams): UseMainCubeResult => {
  const [size] = useState(getSize);
  const [isInitialTransition, setIsInitialTransition] = useState(true);
  const [openCount, setOpenCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (isIntroHidden) {
      timerRef.current = setTimeout(() => setIsInitialTransition(false), 750);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isIntroHidden]);

  const face = getInitialFace(!isInitialTransition);

  const handleExpandChange = useCallback((isOpen: boolean) => {
    setOpenCount((prev) => (isOpen ? prev + 1 : Math.max(0, prev - 1)));
  }, []);

  return {
    face,
    handleExpandChange,
    isFullscreen: openCount > 0,
    isInitialTransition,
    size,
  };
};
