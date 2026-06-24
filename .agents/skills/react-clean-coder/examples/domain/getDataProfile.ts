// Domain Layer - ALL logic lives here

type Data = {
  name: string;
  purchases: number;
  returns: number;
};

type DataProfile = {
  stats: { netPurchases: number; returnRate: number } | null;
  shouldShowVipBadge: boolean;
};

// Private helper functions
const calculateStats = (purchases: number, returns: number) => {
  const netPurchases = purchases - returns;
  const returnRate = purchases > 0 ? (returns / purchases) * 100 : 0;
  return { netPurchases, returnRate };
};

const isVipData = (netPurchases: number) => netPurchases > 1000;

// Public function - single behavior, returns all needed values
export const getDataProfile = (data: Data | null | undefined): DataProfile => {
  if (!data) {
    return { stats: null, shouldShowVipBadge: false };
  }

  const stats = calculateStats(data.purchases, data.returns);
  const shouldShowVipBadge = isVipData(stats.netPurchases);

  return { stats, shouldShowVipBadge };
};
