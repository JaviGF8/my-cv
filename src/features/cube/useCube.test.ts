import { renderHook, act } from '@testing-library/react';

import type { Face } from './Cube.types';
import { useCube } from './useCube';

const defaultParams = {
  size: 200,
  face: 'front' as Face,
  isDisabled: false,
  hasSwipe: false,
};

describe('useCube', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('initial frontFace is front when face=front', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams, face: 'front' }));
    expect(result.current.frontFace).toBe('front');
  });

  it('initial frontFace is back when face=back', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams, face: 'back' }));
    expect(result.current.frontFace).toBe('back');
  });

  it('ArrowLeft changes frontFace to left', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams }));
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    });
    expect(result.current.frontFace).toBe('left');
  });

  it('ArrowRight changes frontFace to right', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams }));
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    });
    expect(result.current.frontFace).toBe('right');
  });

  it('ArrowUp from front reveals top face', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams }));
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true }));
    });
    expect(result.current.frontFace).toBe('top');
  });

  it('ArrowDown from front reveals bottom face', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams }));
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    });
    expect(result.current.frontFace).toBe('bottom');
  });

  it('when isDisabled=true, ArrowLeft does not change frontFace', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams, isDisabled: true }));
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    });
    expect(result.current.frontFace).toBe('front');
  });

  it('isMoving becomes true after rotation and false after 500ms', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams }));
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    });
    expect(result.current.isMoving).toBe(true);
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current.isMoving).toBe(false);
  });

  it('ArrowLeft from top face does not stay on top', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams, face: 'top' }));
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    });
    expect(result.current.frontFace).not.toBe('top');
  });

  it('ArrowLeft from bottom face does not stay on bottom', () => {
    const { result } = renderHook(() => useCube({ ...defaultParams, face: 'bottom' }));
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    });
    expect(result.current.frontFace).not.toBe('bottom');
  });

  it('pointer click (no drag) does not rotate', () => {
    const onFaceChange = vi.fn();
    const { result } = renderHook(() => useCube({ ...defaultParams, onFaceChange }));
    act(() => {
      result.current.handlePointerDown({ clientX: 0, clientY: 0 } as React.PointerEvent);
      result.current.handlePointerUp({ clientX: 0, clientY: 0 } as React.PointerEvent);
    });
    expect(onFaceChange).not.toHaveBeenCalled();
  });

  it('drag movement >10px does not rotate when hasSwipe=false', () => {
    const onFaceChange = vi.fn();
    const { result } = renderHook(() => useCube({ ...defaultParams, onFaceChange }));
    act(() => {
      result.current.handlePointerDown({ clientX: 0, clientY: 0 } as React.PointerEvent);
      result.current.handlePointerUp({ clientX: 50, clientY: 0 } as React.PointerEvent);
    });
    expect(onFaceChange).not.toHaveBeenCalled();
  });

  it('swipe >50px left calls onFaceChange with new face when hasSwipe=true', () => {
    const onFaceChange = vi.fn();
    const { result } = renderHook(() =>
      useCube({ ...defaultParams, hasSwipe: true, onFaceChange }),
    );
    act(() => {
      result.current.handlePointerDown({ clientX: 100, clientY: 0 } as React.PointerEvent);
      result.current.handlePointerUp({ clientX: 0, clientY: 0 } as React.PointerEvent);
    });
    expect(onFaceChange).toHaveBeenCalledTimes(1);
    expect(onFaceChange).toHaveBeenCalledWith(expect.any(String));
  });
});
