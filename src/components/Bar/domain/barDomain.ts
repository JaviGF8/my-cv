import type { BarColor, BarDisplayData } from './barDomain.types';

export type { BarColor, BarDisplayData } from './barDomain.types';

const getColorClass = (percentage: number): BarColor => {
  if (percentage >= 100) return 'bg-primary-darker';
  if (percentage >= 90) return 'bg-primary-dark';
  if (percentage >= 75) return 'bg-primary';
  if (percentage >= 60) return 'bg-secondary-darker';
  if (percentage >= 55) return 'bg-secondary-dark';
  if (percentage >= 40) return 'bg-secondary';
  if (percentage >= 25) return 'bg-accent-darker';
  if (percentage >= 10) return 'bg-accent-dark';
  return 'bg-accent';
};

export const getBarDisplayData = (amount: number, totalAmount: number): BarDisplayData => {
  const percentage = (amount * 100) / totalAmount;
  const colorClass = getColorClass(percentage);
  return { percentage, colorClass };
};
