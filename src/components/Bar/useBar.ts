import { useState, useEffect, useRef } from 'react';

import { getBarDisplayData } from './domain/barDomain';
import type { UseBarParams, UseBarResult } from './useBar.types';

export const useBar = ({ amount, totalAmount }: UseBarParams): UseBarResult => {
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setIsMounted(true), 100);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const { colorClass, percentage } = getBarDisplayData(amount, totalAmount);

  return {
    percentage: isMounted ? percentage : 0,
    colorClass,
    isMounted,
  };
};
