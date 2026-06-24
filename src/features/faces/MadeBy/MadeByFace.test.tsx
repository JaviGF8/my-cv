import type { RenderResult } from '@testing-library/react';
import { render, screen } from '@testing-library/react';

import '../../../i18n';

import { MadeByFace } from './MadeByFace';

const renderComponent = (): RenderResult => render(<MadeByFace />);

describe('MadeByFace', () => {
  it('renders "Made by Javi Fajardo García" title', () => {
    renderComponent();
    expect(screen.getByText('Made by Javi Fajardo García')).toBeInTheDocument();
  });

  it('renders the GitHub link', () => {
    renderComponent();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://github.com/JaviGF8/my-cv/');
  });
});
