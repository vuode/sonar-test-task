import { UIEvent } from 'react';

/**
 * Hook for the infinite scroll
 * @param loading variable displaying if the next entries are loading
 * (important -- this var is used to determine if we need to call `loadMore` function,
 * so if you can't guarantee, that it will be false the next time scroll event fires
 * after `loadMore` call, add a throttling mechanism)
 * @param hasMore variable displaying if there are more data available
 * @param loadMore function to call for fetching more data
 * @param threshold percent of the page, after which we need to call `loadMore` function
 * @returns handler for `onScroll` event
 */
export const useScroll = (
  loading: boolean,
  hasMore: boolean,
  loadMore: () => void,
  threshold: number,
) => {
  return (event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    const height = scrollHeight - clientHeight;

    const percent = (scrollTop * 100) / height;

    if (!loading && hasMore && percent > threshold) {
      loadMore();
    }
  };
};
