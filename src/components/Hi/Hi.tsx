import type { FC } from 'react';

import type { HiProps } from './Hi.types';
import { useHi } from './useHi';

export const Hi: FC<HiProps> = ({ onHide }) => {
  const { phase } = useHi({ onHide });

  if (phase === 'hidden') return null;

  const fadeClass = phase === 'hiding' ? 'animate-fade-out' : 'animate-fade-in';

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink text-surface ${fadeClass}`}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        <span className="text-primary">
          My C<span className="text-surface font-normal">u</span>V
          <span className="text-surface font-normal">e</span>
        </span>
      </h1>
      <p className="text-xl text-secondary-light">by Javi Fajardo</p>
    </div>
  );
};
