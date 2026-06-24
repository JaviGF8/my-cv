import { render } from '@testing-library/react';

import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders a <nav> element', () => {
    const { container } = render(<Navbar />);
    expect(container.querySelector('nav')).not.toBeNull();
  });

  it('renders "My CuVe" text (letters may be split across spans)', () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector('nav');
    expect(nav?.textContent).toContain('My CuVe');
  });

  it('renders "Javi Fajardo"', () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector('nav');
    expect(nav?.textContent).toContain('Javi Fajardo');
  });
});
