import { render, screen, fireEvent, act } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import '../../../i18n';

import { ExperienceFace } from './ExperienceFace';

const renderComponent = (): RenderResult => render(<ExperienceFace />);

describe('ExperienceFace', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders experience title in Spanish', () => {
    renderComponent();
    expect(screen.getByText('Experiencia profesional')).toBeInTheDocument();
  });

  it('renders Syngenta company name', () => {
    renderComponent();
    expect(screen.getByText('Syngenta')).toBeInTheDocument();
  });

  it('renders Wozzo company name', () => {
    renderComponent();
    expect(screen.getByText('Wozzo')).toBeInTheDocument();
  });

  it('shows overlay in document.body after double-click', async () => {
    const { container } = renderComponent();
    const wrapper = container.firstElementChild;
    fireEvent.doubleClick(wrapper!);
    await act(async () => {
      vi.advanceTimersByTime(500);
    });
    expect(document.body.querySelector('[role="dialog"]')).not.toBeNull();
  });
});
