import { getSize, getInitialFace } from './mainCubeLayout';

describe('getSize', () => {
  it('800x600 → 480 (height is min)', () => {
    Object.defineProperty(window, 'innerWidth', { value: 800, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', {
      value: 600,
      writable: true,
      configurable: true,
    });
    expect(getSize()).toBe(480);
  });

  it('600x800 → 480 (width is min)', () => {
    Object.defineProperty(window, 'innerWidth', { value: 600, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', {
      value: 800,
      writable: true,
      configurable: true,
    });
    expect(getSize()).toBe(480);
  });

  it('500x500 → 400', () => {
    Object.defineProperty(window, 'innerWidth', { value: 500, writable: true, configurable: true });
    Object.defineProperty(window, 'innerHeight', {
      value: 500,
      writable: true,
      configurable: true,
    });
    expect(getSize()).toBe(400);
  });
});

describe('getInitialFace', () => {
  it('true → front', () => {
    expect(getInitialFace(true)).toBe('front');
  });

  it('false → back', () => {
    expect(getInitialFace(false)).toBe('back');
  });
});
