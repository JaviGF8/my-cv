import type { SectionAction, SectionPhase } from './sectionDomain.types';

export type { SectionAction, SectionPhase } from './sectionDomain.types';

const DOUBLE_TAP_WINDOW_MS = 300;
const TAP_MOVE_THRESHOLD = 10;

export const getNextPhase = (current: SectionPhase, action: SectionAction): SectionPhase => {
  if (action === 'expand' && current === 'collapsed') return 'expanding';
  if (action === 'animation-end' && current === 'expanding') return 'expanded';
  if (action === 'collapse' && current === 'expanded') return 'collapsing';
  if (action === 'animation-end' && current === 'collapsing') return 'collapsed';
  return current;
};

export const isPortalVisible = (phase: SectionPhase): boolean =>
  phase === 'expanding' || phase === 'expanded' || phase === 'collapsing';

export const getFadeClass = (phase: SectionPhase): string => {
  if (phase === 'expanding' || phase === 'expanded') return 'animate-fade-in';
  if (phase === 'collapsing') return 'animate-fade-out';
  return '';
};

export const isDoubleTap = (prevTs: number | null, nowTs: number): boolean => {
  if (prevTs === null) return false;
  return nowTs - prevTs <= DOUBLE_TAP_WINDOW_MS;
};

export const isTapNotDrag = (moveX: number, moveY: number): boolean => {
  const distance = Math.sqrt(moveX * moveX + moveY * moveY);
  return distance < TAP_MOVE_THRESHOLD;
};
