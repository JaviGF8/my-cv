import { render, screen, fireEvent, act } from '@testing-library/react';

import { Section } from './Section';

describe('Section', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('renders children in collapsed state', () => {
    render(
      <Section>
        <p>Child content</p>
      </Section>,
    );
    expect(screen.getByText('Child content')).toBeTruthy();
  });

  it('renders title in collapsed state when provided', () => {
    render(
      <Section title="My Title">
        <p>content</p>
      </Section>,
    );
    expect(screen.getByText('My Title')).toBeTruthy();
  });

  it('does not render overlay in document.body by default', () => {
    render(
      <Section title="Test">
        <p>content</p>
      </Section>,
    );
    const dialog = document.body.querySelector('[role="dialog"]');
    expect(dialog).toBeFalsy();
  });

  it('double-click opens overlay in document.body', async () => {
    const { container } = render(
      <Section title="Test">
        <p>content</p>
      </Section>,
    );
    const wrapper = container.firstElementChild;
    fireEvent.doubleClick(wrapper!);
    await act(async () => {
      vi.advanceTimersByTime(500);
    });
    const dialog = document.body.querySelector('[role="dialog"]');
    expect(dialog).toBeTruthy();
  });

  it('title appears in overlay after double-click', async () => {
    const { container } = render(
      <Section title="Overlay Title">
        <p>content</p>
      </Section>,
    );
    const wrapper = container.firstElementChild;
    fireEvent.doubleClick(wrapper!);
    await act(async () => {
      vi.advanceTimersByTime(500);
    });
    const dialog = document.body.querySelector('[role="dialog"]');
    expect(dialog?.textContent).toContain('Overlay Title');
  });

  it('close button in overlay collapses after fade', async () => {
    const onExpandChange = vi.fn();
    const { container } = render(
      <Section onExpandChange={onExpandChange} title="Test">
        <p>content</p>
      </Section>,
    );
    const wrapper = container.firstElementChild;
    fireEvent.doubleClick(wrapper!);
    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    const dialog = document.body.querySelector('[role="dialog"]');
    const closeBtn = dialog?.querySelector('button');
    expect(closeBtn).toBeTruthy();
    fireEvent.click(closeBtn!);

    await act(async () => {
      vi.advanceTimersByTime(400);
    });
    expect(onExpandChange).toHaveBeenCalledWith(false);
  });

  it('pressing Escape collapses after fade', async () => {
    const onExpandChange = vi.fn();
    const { container } = render(
      <Section onExpandChange={onExpandChange} title="Test">
        <p>content</p>
      </Section>,
    );
    const wrapper = container.firstElementChild;
    fireEvent.doubleClick(wrapper!);
    await act(async () => {
      vi.advanceTimersByTime(500);
    });

    fireEvent.keyDown(document, { key: 'Escape' });
    await act(async () => {
      vi.advanceTimersByTime(400);
    });
    expect(onExpandChange).toHaveBeenCalledWith(false);
  });
});
