import {
  getDirectionFromKey,
  getSwipeDirection,
  isClickNotDrag,
  isDoubleActivation,
} from './cubeInput';

describe('getDirectionFromKey', () => {
  it('ArrowLeft → left', () => {
    expect(getDirectionFromKey('ArrowLeft')).toBe('left');
  });

  it('ArrowRight → right', () => {
    expect(getDirectionFromKey('ArrowRight')).toBe('right');
  });

  it('ArrowUp → up', () => {
    expect(getDirectionFromKey('ArrowUp')).toBe('up');
  });

  it('ArrowDown → down', () => {
    expect(getDirectionFromKey('ArrowDown')).toBe('down');
  });

  it('unknown key → null', () => {
    expect(getDirectionFromKey('a')).toBeNull();
  });

  it('empty string → null', () => {
    expect(getDirectionFromKey('')).toBeNull();
  });
});

describe('getSwipeDirection — same direction as keys', () => {
  it('moved right (positive x) → right', () => {
    expect(getSwipeDirection({ x: 0, y: 0 }, { x: 60, y: 0 })).toBe('right');
  });

  it('moved left (negative x) → left', () => {
    expect(getSwipeDirection({ x: 0, y: 0 }, { x: -60, y: 0 })).toBe('left');
  });

  it('moved down (positive y) → down', () => {
    expect(getSwipeDirection({ x: 0, y: 0 }, { x: 0, y: 60 })).toBe('down');
  });

  it('moved up (negative y) → up', () => {
    expect(getSwipeDirection({ x: 0, y: 0 }, { x: 0, y: -60 })).toBe('up');
  });

  it('below threshold → null', () => {
    expect(getSwipeDirection({ x: 0, y: 0 }, { x: 30, y: 0 })).toBeNull();
  });

  it('dominant Y axis (down) → down', () => {
    expect(getSwipeDirection({ x: 0, y: 0 }, { x: 60, y: 80 })).toBe('down');
  });

  it('dominant X axis (right) → right', () => {
    expect(getSwipeDirection({ x: 0, y: 0 }, { x: 80, y: 60 })).toBe('right');
  });
});

describe('isClickNotDrag', () => {
  it('distance ~7 (5,5) → true', () => {
    expect(isClickNotDrag({ x: 0, y: 0 }, { x: 5, y: 5 })).toBe(true);
  });

  it('distance ~11.3 (8,8) → false', () => {
    expect(isClickNotDrag({ x: 0, y: 0 }, { x: 8, y: 8 })).toBe(false);
  });

  it('no movement → true', () => {
    expect(isClickNotDrag({ x: 0, y: 0 }, { x: 0, y: 0 })).toBe(true);
  });
});

describe('isDoubleActivation', () => {
  it('null prevTimestamp → false', () => {
    expect(isDoubleActivation(null, 100)).toBe(false);
  });

  it('within 300ms → true', () => {
    expect(isDoubleActivation(0, 299)).toBe(true);
  });

  it('exactly 300ms → true', () => {
    expect(isDoubleActivation(0, 300)).toBe(true);
  });

  it('301ms → false', () => {
    expect(isDoubleActivation(0, 301)).toBe(false);
  });
});
