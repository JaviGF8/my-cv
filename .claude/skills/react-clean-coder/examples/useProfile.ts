// Use Case Layer - State management and handlers ONLY, NO logic

import { useState } from 'react';
import { useData } from './useData';
import { getDataProfile } from './domain/getDataProfile';

export const useProfile = (dataId: string) => {
  const { data, isLoading, error } = useData(dataId);
  const [showDetails, setShowDetails] = useState(false);

  const { stats, shouldShowVipBadge } = getDataProfile(data);

  const handleToggleDetails = () => setShowDetails(prev => !prev);

  return { data, isLoading, error, stats, shouldShowVipBadge, showDetails, handleToggleDetails };
};
