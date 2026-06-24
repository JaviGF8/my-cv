import type { HiPhase } from './hiDomain.types';

export type { HiPhase } from './hiDomain.types';

export const getNextHiPhase = (current: HiPhase): HiPhase => {
  if (current === 'animating') return 'hiding';
  if (current === 'hiding') return 'hidden';
  return current;
};
