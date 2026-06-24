import { renderHook, act } from '@testing-library/react';

import { useSection } from './useSection';

describe('useSection', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('initial phase is collapsed and isOverlayVisible is false', () => {
    const { result } = renderHook(() => useSection({}));
    expect(result.current.phase).toBe('collapsed');
    expect(result.current.isOverlayVisible).toBe(false);
  });

  it('handleOpen transitions phase to expanding and isOverlayVisible to true', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handleOpen();
    });
    expect(result.current.phase).toBe('expanding');
    expect(result.current.isOverlayVisible).toBe(true);
  });

  it('after 500ms phase becomes expanded', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handleOpen();
    });
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current.phase).toBe('expanded');
  });

  it('handleCollapse after expanded transitions to collapsing', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handleOpen();
    });
    act(() => {
      vi.advanceTimersByTime(500);
    });
    act(() => {
      result.current.handleCollapse();
    });
    expect(result.current.phase).toBe('collapsing');
  });

  it('after 400ms collapsing, phase becomes collapsed', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handleOpen();
    });
    act(() => {
      vi.advanceTimersByTime(500);
    });
    act(() => {
      result.current.handleCollapse();
    });
    act(() => {
      vi.advanceTimersByTime(400);
    });
    expect(result.current.phase).toBe('collapsed');
  });

  it('onExpandChange called with true when expanding starts', () => {
    const onExpandChange = vi.fn();
    const { result } = renderHook(() => useSection({ onExpandChange }));
    act(() => {
      result.current.handleOpen();
    });
    expect(onExpandChange).toHaveBeenCalledWith(true);
  });

  it('onExpandChange called with false after collapsing completes', () => {
    const onExpandChange = vi.fn();
    const { result } = renderHook(() => useSection({ onExpandChange }));
    act(() => {
      result.current.handleOpen();
    });
    act(() => {
      vi.advanceTimersByTime(500);
    });
    act(() => {
      result.current.handleCollapse();
    });
    act(() => {
      vi.advanceTimersByTime(400);
    });
    expect(onExpandChange).toHaveBeenCalledWith(false);
  });

  it('isDisabled=true makes handleOpen a no-op', () => {
    const { result } = renderHook(() => useSection({ isDisabled: true }));
    act(() => {
      result.current.handleOpen();
    });
    expect(result.current.phase).toBe('collapsed');
  });

  it('double pointer-tap within 300ms calls handleOpen', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handlePointerDown(0, 0);
      result.current.handlePointerUp(0, 0);
    });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    act(() => {
      result.current.handlePointerDown(0, 0);
      result.current.handlePointerUp(0, 0);
    });
    expect(result.current.phase).toBe('expanding');
  });

  it('single pointer-tap does not open', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handlePointerDown(0, 0);
      result.current.handlePointerUp(0, 0);
    });
    expect(result.current.phase).toBe('collapsed');
  });

  it('pointer tap with movement >10px does not register as tap', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handlePointerDown(0, 0);
      result.current.handlePointerUp(50, 0);
    });
    act(() => {
      vi.advanceTimersByTime(100);
    });
    act(() => {
      result.current.handlePointerDown(0, 0);
      result.current.handlePointerUp(50, 0);
    });
    expect(result.current.phase).toBe('collapsed');
  });

  it('fadeClass is animate-fade-in when phase=expanding', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handleOpen();
    });
    expect(result.current.fadeClass).toBe('animate-fade-in');
  });

  it('fadeClass is animate-fade-out when phase=collapsing', () => {
    const { result } = renderHook(() => useSection({}));
    act(() => {
      result.current.handleOpen();
    });
    act(() => {
      vi.advanceTimersByTime(500);
    });
    act(() => {
      result.current.handleCollapse();
    });
    expect(result.current.fadeClass).toBe('animate-fade-out');
  });
});
