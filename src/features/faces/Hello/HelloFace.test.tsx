import { render, screen } from '@testing-library/react';

import { HelloFace } from './HelloFace';

describe('HelloFace', () => {
  it('renders "Hello :)" title', () => {
    render(<HelloFace />);
    expect(screen.getByText('Hello :)')).toBeTruthy();
  });

  it('renders wave emoji 👋', () => {
    render(<HelloFace />);
    expect(screen.getByText('👋')).toBeTruthy();
  });
});
