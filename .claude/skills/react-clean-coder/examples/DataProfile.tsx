// UI Layer - Only JSX and presentation conditionals
import type { FC } from 'react';

import { useProfile } from './useProfile';

export const DataProfile: FC<{ userId: string }> = ({ userId }) => {
  const { data, isLoading, stats, shouldShowVipBadge, showDetails, handleToggleDetails } =
    useProfile(userId);

  if (isLoading) {
    return <Spinner />;
  }
  if (!data) {
    return <EmptyState />;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      {shouldShowVipBadge && <VipBadge />}
      {stats && <Stats purchases={stats.netPurchases} returnRate={stats.returnRate} />}
      <button onClick={handleToggleDetails}>Toggle Details</button>
      {showDetails && <DataDetails data={data} />}
    </div>
  );
};
