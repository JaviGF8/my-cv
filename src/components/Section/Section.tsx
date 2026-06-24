import type { FC } from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Button } from 'components/Button';

import type { SectionProps } from './Section.types';
import { useSection } from './useSection';

export const Section: FC<SectionProps> = ({
  children,
  className = '',
  isDisabled = false,
  onExpandChange,
  title,
}) => {
  const {
    fadeClass,
    handleCollapse,
    handleOpen,
    handlePointerDown,
    handlePointerUp,
    isOverlayVisible,
  } = useSection({ isDisabled, onExpandChange });

  useEffect(() => {
    if (!isOverlayVisible) return;

    const onKeyDown = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') handleCollapse();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOverlayVisible, handleCollapse]);

  return (
    <>
      <div
        className={`h-full w-full overflow-hidden p-4 animate-fade-in ${className}`.trim()}
        onDoubleClick={handleOpen}
        onPointerDown={(e) => handlePointerDown(e.clientX, e.clientY)}
        onPointerUp={(e) => handlePointerUp(e.clientX, e.clientY)}
      >
        {title && <h2 className="text-lg font-semibold mb-2">{title}</h2>}
        {children}
      </div>

      {isOverlayVisible &&
        createPortal(
          <div
            aria-modal="true"
            className={`fixed inset-0 z-50 bg-ink text-surface overflow-auto p-6 ${fadeClass} ${className}`.trim()}
            role="dialog"
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex justify-between items-center mb-4">
                {title && <h2 className="text-2xl font-semibold">{title}</h2>}
                <Button
                  className="text-surface hover:text-primary-light"
                  icon="fas fa-times"
                  onClick={handleCollapse}
                />
              </div>
              {children}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};
