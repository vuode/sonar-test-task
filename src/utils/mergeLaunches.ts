import { LaunchesPastResult } from '../generated';

/**
 * Merge function for launchesPastResult field in typePolicies
 * It's not accounting for the case, when the totalCount changes
 * @param existing data that exist in cache
 * @param incoming data from the recent request
 * @returns merged data
 */
export const mergeLaunches = (
  existing: LaunchesPastResult | undefined = {},
  incoming: LaunchesPastResult,
): LaunchesPastResult => {
  const existingData = existing.data ?? [];
  const incomingData = incoming.data ?? [];
  const mergedData = [...existingData, ...incomingData];

  return {
    result: incoming.result,
    data: mergedData,
  };
};
