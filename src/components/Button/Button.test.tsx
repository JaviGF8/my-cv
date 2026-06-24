import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('renders a <button> with type="button"', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('renders icon when icon prop passed', () => {
    const { container } = render(<Button icon="fas fa-check" />);
    expect(container.querySelector('i')).not.toBeNull();
  });

  it('renders text when text prop passed', () => {
    render(<Button text="Click me" />);
    expect(screen.getByText('Click me')).not.toBeNull();
  });

  it('renders children', () => {
    render(
      <Button>
        <span>child</span>
      </Button>,
    );
    expect(screen.getByText('child')).not.toBeNull();
  });

  it('calls onClick handler when clicked', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick} text="Click" />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom className', () => {
    render(<Button className="my-class" />);
    expect(screen.getByRole('button').className).toContain('my-class');
  });
});
