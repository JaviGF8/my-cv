import { render, screen, act, fireEvent } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import '../../../i18n';

import { SocialFace } from './SocialFace';

const renderFace = (): RenderResult => render(<SocialFace />);

describe('SocialFace', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders "Social" title', () => {
    renderFace();
    expect(screen.getByText('Social')).toBeTruthy();
  });

  it('renders LinkedIn link', () => {
    renderFace();
    expect(screen.getByText('LinkedIn')).toBeTruthy();
  });

  it('renders GitHub link', () => {
    renderFace();
    expect(screen.getByText('GitHub')).toBeTruthy();
  });

  it('overlay shows "Social" after double-click', async () => {
    const { container } = renderFace();
    const wrapper = container.firstElementChild;
    fireEvent.doubleClick(wrapper!);
    await act(async () => {
      vi.advanceTimersByTime(500);
    });
    const dialog = document.body.querySelector('[role="dialog"]');
    expect(dialog).toBeTruthy();
    expect(dialog?.textContent).toContain('Social');
  });
});
