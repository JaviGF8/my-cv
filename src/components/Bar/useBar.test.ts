import { renderHook, act } from '@testing-library/react';

import { useBar } from './useBar';

describe('useBar', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('initial isMounted is false and percentage is 0', () => {
    const { result } = renderHook(() => useBar({ amount: 80, totalAmount: 100 }));
    expect(result.current.isMounted).toBe(false);
    expect(result.current.percentage).toBe(0);
  });

  it('after 100ms isMounted becomes true', () => {
    const { result } = renderHook(() => useBar({ amount: 80, totalAmount: 100 }));
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current.isMounted).toBe(true);
  });

  it('after mounting percentage equals (amount/totalAmount)*100', () => {
    const amount = 60;
    const totalAmount = 100;
    const { result } = renderHook(() => useBar({ amount, totalAmount }));
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current.percentage).toBe((amount / totalAmount) * 100);
  });

  it('colorClass includes bg-primary for amount=85 totalAmount=100', () => {
    const { result } = renderHook(() => useBar({ amount: 85, totalAmount: 100 }));
    expect(result.current.colorClass).toBe('bg-primary');
  });
});
