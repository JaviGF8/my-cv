import { renderHook, act } from '@testing-library/react';

import { useHi } from './useHi';

describe('useHi', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initial phase is animating', () => {
    const { result } = renderHook(() => useHi({}));
    expect(result.current.phase).toBe('animating');
  });

  it('after 2000ms phase becomes hiding', () => {
    const { result } = renderHook(() => useHi({}));
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current.phase).toBe('hiding');
  });

  it('after 2500ms phase becomes hidden', () => {
    const { result } = renderHook(() => useHi({}));
    act(() => {
      vi.advanceTimersByTime(2500);
    });
    expect(result.current.phase).toBe('hidden');
  });

  it('onHide is called after 2500ms', () => {
    const onHide = vi.fn();
    renderHook(() => useHi({ onHide }));
    act(() => {
      vi.advanceTimersByTime(2500);
    });
    expect(onHide).toHaveBeenCalledTimes(1);
  });

  it('onHide is NOT called before 2500ms', () => {
    const onHide = vi.fn();
    renderHook(() => useHi({ onHide }));
    act(() => {
      vi.advanceTimersByTime(2499);
    });
    expect(onHide).not.toHaveBeenCalled();
  });
});
