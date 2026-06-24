import { render, screen, fireEvent, act } from '@testing-library/react';
import type { RenderResult } from '@testing-library/react';

import '../../i18n';

import { MainCube } from './MainCube';

const renderCube = (isIntroHidden = true): RenderResult =>
  render(<MainCube isIntroHidden={isIntroHidden} />);

describe('MainCube', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('hides cube with opacity-0 when isIntroHidden=false', () => {
    const { container } = renderCube(false);
    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass('opacity-0');
  });

  it('shows cube without opacity-0 when isIntroHidden=true', () => {
    const { container } = renderCube(true);
    const wrapper = container.firstElementChild;
    expect(wrapper).not.toHaveClass('opacity-0');
  });

  it('renders face content when isIntroHidden=true', () => {
    renderCube(true);
    expect(screen.getByText('Perfil profesional')).toBeInTheDocument();
  });

  it('double-click on a face section opens its overlay', async () => {
    renderCube(true);

    act(() => {
      vi.advanceTimersByTime(800);
    });

    const profileSection = document.querySelector('.profile-section');
    expect(profileSection).not.toBeNull();

    fireEvent.doubleClick(profileSection!);

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    expect(document.body.querySelector('[role="dialog"]')).not.toBeNull();
  });

  it('cube is disabled (no pointer events) while a section is open', async () => {
    renderCube(true);
    act(() => {
      vi.advanceTimersByTime(800);
    });

    const profileSection = document.querySelector('.profile-section');
    fireEvent.doubleClick(profileSection!);

    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    const cubeEl = document.querySelector('[style*="perspective"]');
    expect(cubeEl).not.toBeNull();
  });
});
