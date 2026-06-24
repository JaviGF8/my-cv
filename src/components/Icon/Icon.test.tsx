import { render } from '@testing-library/react';

import { Icon } from './Icon';

describe('Icon', () => {
  it('renders an <i> element', () => {
    const { container } = render(<Icon icon="fas fa-check" />);
    expect(container.querySelector('i')).not.toBeNull();
  });

  it('has the icon class when icon prop passed', () => {
    const { container } = render(<Icon icon="fas fa-check" />);
    const el = container.querySelector('i');
    expect(el?.className).toContain('fas fa-check');
  });

  it('appends extra className', () => {
    const { container } = render(<Icon className="extra-class" icon="fas fa-check" />);
    const el = container.querySelector('i');
    expect(el?.className).toContain('extra-class');
  });

  it('has aria-hidden="true"', () => {
    const { container } = render(<Icon icon="fas fa-check" />);
    const el = container.querySelector('i');
    expect(el?.getAttribute('aria-hidden')).toBe('true');
  });
});
