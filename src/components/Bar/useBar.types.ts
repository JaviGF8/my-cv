export type UseBarParams = {
  amount: number;
  totalAmount: number;
};

export type UseBarResult = {
  colorClass: string;
  isMounted: boolean;
  percentage: number;
};
