import React from 'react';

import Card from '../Card';

import { useLauches } from '../../hooks/useLaunches';
import { useScroll } from '../../hooks/useScroll';

import styles from './App.module.css';

const limit = 10;
const threshold = 75;

const App: React.FC = () => {
  const { entries, loading, loadMore, hasMore } = useLauches(limit);
  const scrollHandler = useScroll(loading, hasMore, loadMore, threshold);

  return (
    <div className={styles.scrollable} onScroll={scrollHandler}>
      {entries &&
        entries.map((entry) => entry && <Card key={entry.id} entry={entry} />)}

      {loading && <div className={styles.info}>Loading...</div>}

      {!loading && !hasMore && (
        <div className={styles.info}>End of the feed</div>
      )}
    </div>
  );
};

export default App;
