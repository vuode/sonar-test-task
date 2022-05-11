import React from 'react';

import Card from '../Card';

import { useLauches } from '../../hooks/useLaunches';

import styles from './App.module.css';

const limit = 10;

const App: React.FC = () => {
  const { entries, loading, loadMore, hasMore } = useLauches(limit);

  return (
    <div className='App'>
      {entries &&
        entries.map((entry) => entry && <Card key={entry.id} entry={entry} />)}

      {loading && <div className={styles.info}>Loading...</div>}

      {!loading && hasMore && (
        <button type='button' onClick={loadMore}>
          Load more
        </button>
      )}

      {!loading && !hasMore && (
        <div className={styles.info}>End of the feed</div>
      )}
    </div>
  );
};

export default App;
