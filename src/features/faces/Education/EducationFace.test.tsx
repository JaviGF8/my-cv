import { render, screen, fireEvent, act } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import '../../../i18n';

import { EducationFace } from './EducationFace';

const renderComponent = (): RenderResult => render(<EducationFace />);

describe('EducationFace', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders education title in Spanish', () => {
    renderComponent();
    expect(screen.getByText('Formación académica')).toBeInTheDocument();
  });

  it('renders certifications section title in Spanish', () => {
    renderComponent();
    expect(screen.getByText('Certificaciones')).toBeInTheDocument();
  });

  it('renders Universidad de Sevilla', () => {
    renderComponent();
    expect(screen.getByText('Universidad de Sevilla')).toBeInTheDocument();
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
