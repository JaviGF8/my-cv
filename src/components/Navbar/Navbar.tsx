import type { FC } from 'react';

export const Navbar: FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 bg-ink text-surface shadow-md px-4 py-2">
    <div className="flex items-center gap-2">
      <span className="font-bold text-xl">
        My C<span className="text-primary text-sm font-normal">u</span>V
        <span className="text-primary text-sm font-normal">e</span>
      </span>
      <span className="text-xs">by</span>
      <span className="text-secondary-light text-md">Javi Fajardo</span>
    </div>
  </nav>
);
