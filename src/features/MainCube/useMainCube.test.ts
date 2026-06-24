import { renderHook, act } from '@testing-library/react';

import { useMainCube } from './useMainCube';

describe('useMainCube', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initial isInitialTransition is true and face is back', () => {
    const { result } = renderHook(() => useMainCube({ isIntroHidden: false }));
    expect(result.current.isInitialTransition).toBe(true);
    expect(result.current.face).toBe('back');
  });

  it('when isIntroHidden=true, after 750ms isInitialTransition becomes false and face becomes front', () => {
    const { result } = renderHook(() => useMainCube({ isIntroHidden: true }));
    act(() => {
      vi.advanceTimersByTime(750);
    });
    expect(result.current.isInitialTransition).toBe(false);
    expect(result.current.face).toBe('front');
  });

  it('initial isFullscreen is false', () => {
    const { result } = renderHook(() => useMainCube({ isIntroHidden: false }));
    expect(result.current.isFullscreen).toBe(false);
  });

  it('handleExpandChange(true) sets isFullscreen to true', () => {
    const { result } = renderHook(() => useMainCube({ isIntroHidden: false }));
    act(() => {
      result.current.handleExpandChange(true);
    });
    expect(result.current.isFullscreen).toBe(true);
  });

  it('handleExpandChange(false) after true restores isFullscreen to false', () => {
    const { result } = renderHook(() => useMainCube({ isIntroHidden: false }));
    act(() => {
      result.current.handleExpandChange(true);
    });
    act(() => {
      result.current.handleExpandChange(false);
    });
    expect(result.current.isFullscreen).toBe(false);
  });

  it('two sections open: isFullscreen stays true after one closes', () => {
    const { result } = renderHook(() => useMainCube({ isIntroHidden: false }));
    act(() => {
      result.current.handleExpandChange(true);
      result.current.handleExpandChange(true);
    });
    act(() => {
      result.current.handleExpandChange(false);
    });
    expect(result.current.isFullscreen).toBe(true);
  });

  it('openCount never goes below 0', () => {
    const { result } = renderHook(() => useMainCube({ isIntroHidden: false }));
    act(() => {
      result.current.handleExpandChange(false);
    });
    expect(result.current.isFullscreen).toBe(false);
  });
});
