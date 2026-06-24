import type { FC } from 'react';

import type { BarProps } from './Bar.types';
import { useBar } from './useBar';

export const Bar: FC<BarProps> = ({ amount, text, totalAmount = 100 }) => {
  const { colorClass, isMounted, percentage } = useBar({ amount, totalAmount });

  return (
    <div className="w-full h-8 bg-gray-lighter rounded overflow-hidden mb-3">
      <div
        className={`h-full ${colorClass} flex items-center px-2 text-xs text-surface font-medium transition-all duration-500 ease-out`}
        style={{ width: `${percentage}%` }}
      >
        {isMounted && (
          <span className="whitespace-nowrap animate-fade-in">
            {text} {Math.round(percentage)}%
          </span>
        )}
      </div>
    </div>
  );
};
