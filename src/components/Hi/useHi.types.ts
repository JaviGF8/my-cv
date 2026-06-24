import type { HiPhase } from './domain/hiDomain.types';

export type UseHiParams = {
  onHide?: () => void;
};

export type UseHiResult = {
  phase: HiPhase;
};
