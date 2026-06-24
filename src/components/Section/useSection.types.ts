import type { SectionPhase } from './domain/sectionDomain.types';

export interface UseSectionParams {
  isDisabled?: boolean;
  onExpandChange?: (isOpen: boolean) => void;
}

export interface UseSectionResult {
  phase: SectionPhase;
  isOverlayVisible: boolean;
  fadeClass: string;
  handleOpen: () => void;
  handleCollapse: () => void;
  handlePointerDown: (x: number, y: number) => void;
  handlePointerUp: (x: number, y: number) => void;
}
