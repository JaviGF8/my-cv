import { getNextHiPhase } from './hiDomain';
import type { HiPhase } from './hiDomain';

describe('getNextHiPhase', () => {
  it('animating → hiding', () => {
    const phase: HiPhase = 'animating';
    expect(getNextHiPhase(phase)).toBe('hiding');
  });

  it('hiding → hidden', () => {
    const phase: HiPhase = 'hiding';
    expect(getNextHiPhase(phase)).toBe('hidden');
  });

  it('hidden → hidden (terminal)', () => {
    const phase: HiPhase = 'hidden';
    expect(getNextHiPhase(phase)).toBe('hidden');
  });
});
