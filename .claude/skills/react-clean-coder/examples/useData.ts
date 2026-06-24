// Data Layer - Data fetching only

type Data = {
  name: string;
  purchases: number;
  returns: number;
};

export const useData = (dataId: string) => {
  const { data, isLoading, error } = useQuery(['data', dataId], () => fetchData(dataId));

  return { data, isLoading, error };
};
