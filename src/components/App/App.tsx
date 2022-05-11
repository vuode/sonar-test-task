import React from 'react';

import Card from '../Card';

import { useLauches } from '../../hooks/useLaunches';

import styles from './App.module.css';

const limit = 10;

const App: React.FC = () => {
  const { entries, loading, loadMore, allEntriesLoaded } = useLauches(limit);

  return (
    <div className='App'>
      {entries &&
        entries.map((entry) => entry && <Card key={entry.id} entry={entry} />)}

      {loading && <div className={styles.loading}>Loading...</div>}

      {!loading && !allEntriesLoaded && (
        <button type='button' onClick={loadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default App;
