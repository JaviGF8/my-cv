import { render, screen, act, fireEvent } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import '../../../i18n';

import { ProfileFace } from './ProfileFace';

const renderFace = (): RenderResult => render(<ProfileFace />);

describe('ProfileFace', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders "Perfil profesional" title (default esp locale)', () => {
    renderFace();
    expect(screen.getByText('Perfil profesional')).toBeTruthy();
  });

  it('renders skill bars with bar text visible after mount', () => {
    renderFace();
    act(() => {
      vi.advanceTimersByTime(200);
    });
    expect(screen.getAllByText(/React \d+%/)[0]).toBeTruthy();
  });

  it('overlay not in body by default', () => {
    renderFace();
    const dialog = document.body.querySelector('[role="dialog"]');
    expect(dialog).toBeFalsy();
  });

  it('overlay renders in body with title after double-click', async () => {
    const { container } = renderFace();
    const wrapper = container.firstElementChild;
    fireEvent.doubleClick(wrapper!);
    await act(async () => {
      vi.advanceTimersByTime(500);
    });
    const dialog = document.body.querySelector('[role="dialog"]');
    expect(dialog).toBeTruthy();
    expect(dialog?.textContent).toContain('Perfil profesional');
  });
});
