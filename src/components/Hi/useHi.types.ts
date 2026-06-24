import type { HiPhase } from './domain/hiDomain.types';

export interface UseHiParams {
  onHide?: () => void;
}

export interface UseHiResult {
  phase: HiPhase;
}
