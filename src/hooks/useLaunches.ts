import { useState, useMemo, useCallback } from 'react';

import { useLaunchesQuery } from '../generated';

/**
 * Hook for loading launches data
 * @param limit how many entries to load in one fetch
 * @returns object, containing all necessary variables and functions to control entries' fetching
 */
export const useLauches = (limit: number) => {
  const { data, loading, fetchMore } = useLaunchesQuery({
    variables: {
      limit,
      offset: 0,
    },
    notifyOnNetworkStatusChange: true,
  });

  const [currentOffset, setCurrentOffset] = useState(limit);

  const total = useMemo(
    () => data?.launchesPastResult?.result?.totalCount || limit,
    [data?.launchesPastResult?.result?.totalCount, limit],
  );

  const allEntriesLoaded = useMemo(
    () => total > currentOffset,
    [currentOffset, total],
  );

  const entries = useMemo(() => data?.launchesPastResult?.data, [data]);

  const loadMore = useCallback(() => {
    fetchMore({ variables: { offset: currentOffset } });
    setCurrentOffset((previous) => previous + limit);
  }, [currentOffset, fetchMore, limit]);

  return { entries, loading, loadMore, allEntriesLoaded };
};
