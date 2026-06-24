export type BarColor =
  | 'bg-accent-dark'
  | 'bg-accent-darker'
  | 'bg-accent'
  | 'bg-primary-dark'
  | 'bg-primary-darker'
  | 'bg-primary'
  | 'bg-secondary-dark'
  | 'bg-secondary-darker'
  | 'bg-secondary';

export interface BarDisplayData {
  colorClass: BarColor;
  percentage: number;
}
