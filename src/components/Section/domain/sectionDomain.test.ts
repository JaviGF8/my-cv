import {
  getNextPhase,
  isPortalVisible,
  getFadeClass,
  isDoubleTap,
  isTapNotDrag,
} from './sectionDomain';

describe('getNextPhase', () => {
  it('collapsed + expand → expanding', () => {
    expect(getNextPhase('collapsed', 'expand')).toBe('expanding');
  });

  it('expanding + animation-end → expanded', () => {
    expect(getNextPhase('expanding', 'animation-end')).toBe('expanded');
  });

  it('expanded + collapse → collapsing', () => {
    expect(getNextPhase('expanded', 'collapse')).toBe('collapsing');
  });

  it('collapsing + animation-end → collapsed', () => {
    expect(getNextPhase('collapsing', 'animation-end')).toBe('collapsed');
  });

  it('collapsed + collapse → collapsed (no-op)', () => {
    expect(getNextPhase('collapsed', 'collapse')).toBe('collapsed');
  });

  it('collapsed + animation-end → collapsed (no-op)', () => {
    expect(getNextPhase('collapsed', 'animation-end')).toBe('collapsed');
  });

  it('expanded + expand → expanded (no-op)', () => {
    expect(getNextPhase('expanded', 'expand')).toBe('expanded');
  });
});

describe('isPortalVisible', () => {
  it('expanding → true', () => {
    expect(isPortalVisible('expanding')).toBe(true);
  });

  it('expanded → true', () => {
    expect(isPortalVisible('expanded')).toBe(true);
  });

  it('collapsing → true', () => {
    expect(isPortalVisible('collapsing')).toBe(true);
  });

  it('collapsed → false', () => {
    expect(isPortalVisible('collapsed')).toBe(false);
  });
});

describe('getFadeClass', () => {
  it('expanding → animate-fade-in', () => {
    expect(getFadeClass('expanding')).toBe('animate-fade-in');
  });

  it('expanded → animate-fade-in', () => {
    expect(getFadeClass('expanded')).toBe('animate-fade-in');
  });

  it('collapsing → animate-fade-out', () => {
    expect(getFadeClass('collapsing')).toBe('animate-fade-out');
  });

  it('collapsed → empty string', () => {
    expect(getFadeClass('collapsed')).toBe('');
  });
});

describe('isDoubleTap', () => {
  it('null prevTimestamp → false', () => {
    expect(isDoubleTap(null, 100)).toBe(false);
  });

  it('within 300ms → true', () => {
    expect(isDoubleTap(0, 299)).toBe(true);
  });

  it('exactly 300ms → true', () => {
    expect(isDoubleTap(0, 300)).toBe(true);
  });

  it('301ms → false', () => {
    expect(isDoubleTap(0, 301)).toBe(false);
  });
});

describe('isTapNotDrag', () => {
  it('no movement → true', () => {
    expect(isTapNotDrag(0, 0)).toBe(true);
  });

  it('small movement (5,5) → true', () => {
    expect(isTapNotDrag(5, 5)).toBe(true);
  });

  it('large movement (8,8) → false', () => {
    expect(isTapNotDrag(8, 8)).toBe(false);
  });

  it('large x movement → false', () => {
    expect(isTapNotDrag(50, 0)).toBe(false);
  });
});
