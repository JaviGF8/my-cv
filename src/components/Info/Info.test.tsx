import { fireEvent, render, screen } from '@testing-library/react';

import '../../i18n';

import { Info } from './Info';

const renderInfo = (): ReturnType<typeof render> => render(<Info />);

describe('Info', () => {
  it('initially shows info icon', () => {
    const { container } = renderInfo();
    const icon = container.querySelector('i.fas.fa-info');
    expect(icon).not.toBeNull();
  });

  it('shows "¿Cómo usarlo?" title text on mouseEnter (default esp locale)', () => {
    const { container } = renderInfo();
    const wrapper = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    expect(screen.getByText(/cómo usarlo/i)).not.toBeNull();
  });

  it('hides text and shows icon again on mouseLeave', () => {
    const { container } = renderInfo();
    const wrapper = container.firstChild as HTMLElement;
    fireEvent.mouseEnter(wrapper);
    fireEvent.mouseLeave(wrapper);
    const icon = container.querySelector('i.fas.fa-info');
    expect(icon).not.toBeNull();
  });
});
