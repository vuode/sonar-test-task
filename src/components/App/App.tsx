import React, { useMemo, useState } from 'react';

import Card from '../Card';

import { useLaunchesQuery } from '../../generated';

import styles from './App.module.css';

const limit = 10;

const App: React.FC = () => {
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
    [data],
  );

  const entries = useMemo(() => data?.launchesPastResult?.data, [data]);

  return (
    <div className='App'>
      {entries &&
        entries.map((entry) => entry && <Card key={entry.id} entry={entry} />)}

      {loading && <div className={styles.loading}>Loading...</div>}

      {!loading && total > currentOffset && (
        <button
          type='button'
          onClick={() => {
            fetchMore({ variables: { offset: currentOffset } });
            setCurrentOffset((previous) => previous + limit);
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default App;
