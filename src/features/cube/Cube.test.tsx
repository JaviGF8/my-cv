import { render, screen, fireEvent, act } from '@testing-library/react';

import { Cube } from './Cube';

describe('Cube', () => {
  it('renders all 6 face content slots', () => {
    render(
      <Cube
        backContent={<span>back-content</span>}
        bottomContent={<span>bottom-content</span>}
        frontContent={<span>front-content</span>}
        leftContent={<span>left-content</span>}
        rightContent={<span>right-content</span>}
        size={300}
        topContent={<span>top-content</span>}
      />,
    );

    expect(screen.getByText('front-content')).toBeInTheDocument();
    expect(screen.getByText('back-content')).toBeInTheDocument();
    expect(screen.getByText('left-content')).toBeInTheDocument();
    expect(screen.getByText('right-content')).toBeInTheDocument();
    expect(screen.getByText('top-content')).toBeInTheDocument();
    expect(screen.getByText('bottom-content')).toBeInTheDocument();
  });

  it('swipe right calls onFaceChange with new face', () => {
    vi.useFakeTimers();
    const onFaceChange = vi.fn();
    const { container } = render(<Cube hasSwipe onFaceChange={onFaceChange} size={300} />);

    const cubeEl = container.querySelector('.absolute.w-full.h-full');
    expect(cubeEl).not.toBeNull();

    act(() => {
      fireEvent.pointerDown(cubeEl!, { clientX: 0, clientY: 0 });
      fireEvent.pointerUp(cubeEl!, { clientX: 100, clientY: 0 });
    });

    expect(onFaceChange).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });

  it('click (no drag) does not call onFaceChange', () => {
    vi.useFakeTimers();
    const onFaceChange = vi.fn();
    const { container } = render(<Cube hasSwipe onFaceChange={onFaceChange} size={300} />);

    const cubeEl = container.querySelector('.absolute.w-full.h-full');
    expect(cubeEl).not.toBeNull();

    act(() => {
      fireEvent.pointerDown(cubeEl!, { clientX: 0, clientY: 0 });
      fireEvent.pointerUp(cubeEl!, { clientX: 0, clientY: 0 });
    });

    expect(onFaceChange).not.toHaveBeenCalled();
    vi.useRealTimers();
  });

  it('inner cube div has touch-action none to enable mobile swipe', () => {
    const { container } = render(<Cube size={300} />);
    const cubeEl = container.querySelector('.absolute.w-full.h-full') as HTMLElement;
    expect(cubeEl).not.toBeNull();
    expect(cubeEl.style.touchAction).toBe('none');
  });

  it('pointercancel after pointerdown does not trigger rotation', () => {
    const onFaceChange = vi.fn();
    const { container } = render(<Cube hasSwipe onFaceChange={onFaceChange} size={300} />);

    const cubeEl = container.querySelector('.absolute.w-full.h-full');
    expect(cubeEl).not.toBeNull();

    act(() => {
      fireEvent.pointerDown(cubeEl!, { clientX: 0, clientY: 0 });
      fireEvent.pointerCancel(cubeEl!);
    });

    expect(onFaceChange).not.toHaveBeenCalled();
  });

  it('arrow key press fires and does not throw', () => {
    const { container } = render(<Cube size={300} />);
    expect(container).toBeTruthy();

    expect(() => {
      fireEvent.keyDown(document, { key: 'ArrowRight' });
      fireEvent.keyDown(document, { key: 'ArrowLeft' });
      fireEvent.keyDown(document, { key: 'ArrowUp' });
      fireEvent.keyDown(document, { key: 'ArrowDown' });
    }).not.toThrow();
  });
});
