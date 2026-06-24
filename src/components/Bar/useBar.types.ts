export interface UseBarParams {
  amount: number;
  totalAmount: number;
}

export interface UseBarResult {
  colorClass: string;
  isMounted: boolean;
  percentage: number;
}
