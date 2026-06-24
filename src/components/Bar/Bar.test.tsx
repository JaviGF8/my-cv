import { render, screen, act } from '@testing-library/react';

import { Bar } from './Bar';

describe('Bar', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('initially renders the bar container', () => {
    const { container } = render(<Bar amount={80} text="TypeScript" />);
    expect(container.querySelector('div')).not.toBeNull();
  });

  it('shows label text with percentage after 100ms', () => {
    render(<Bar amount={80} text="TypeScript" />);
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(screen.getByText(/TypeScript/)).not.toBeNull();
    expect(screen.getByText(/80%/)).not.toBeNull();
  });
});
