import { useState, useEffect, useRef } from 'react';

import { getNextHiPhase } from './domain/hiDomain';
import type { HiPhase } from './domain/hiDomain.types';
import type { UseHiParams, UseHiResult } from './useHi.types';

export const useHi = ({ onHide }: UseHiParams): UseHiResult => {
  const [phase, setPhase] = useState<HiPhase>('animating');
  const timer1Ref = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timer2Ref = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timer1Ref.current = setTimeout(() => setPhase((p) => getNextHiPhase(p)), 2000);
    timer2Ref.current = setTimeout(() => {
      setPhase((p) => getNextHiPhase(p));
      onHide?.();
    }, 2500);
    return () => {
      if (timer1Ref.current) clearTimeout(timer1Ref.current);
      if (timer2Ref.current) clearTimeout(timer2Ref.current);
    };
  }, [onHide]);

  return { phase };
};
