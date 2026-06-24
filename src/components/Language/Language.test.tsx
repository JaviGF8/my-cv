import { render, screen, fireEvent } from '@testing-library/react';

import '../../i18n';

import { Language } from './Language';

const renderLanguage = (): ReturnType<typeof render> => render(<Language />);

describe('Language', () => {
  it('renders Español and English buttons', () => {
    renderLanguage();
    expect(screen.getByText('Español')).toBeTruthy();
    expect(screen.getByText('English')).toBeTruthy();
  });

  it('Español button has active styling by default', () => {
    renderLanguage();
    const espBtn = screen.getByText('Español');
    expect(espBtn.className).toContain('bg-primary');
  });

  it('clicking English button changes active state to English', () => {
    renderLanguage();
    const engBtn = screen.getByText('English');
    fireEvent.click(engBtn);
    expect(engBtn.className).toContain('bg-primary');
  });

  it('after clicking English, Español button loses active styling', () => {
    renderLanguage();
    fireEvent.click(screen.getByText('English'));
    const espBtn = screen.getByText('Español');
    expect(espBtn.className).not.toContain('bg-primary');
  });

  it('after clicking Español, it becomes active again', () => {
    renderLanguage();
    fireEvent.click(screen.getByText('English'));
    fireEvent.click(screen.getByText('Español'));
    const espBtn = screen.getByText('Español');
    expect(espBtn.className).toContain('bg-primary');
  });
});
