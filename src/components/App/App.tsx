import React, { useMemo } from 'react';

import Card from '../Card';

import { useLaunchesQuery } from '../../generated';

const App: React.FC = () => {
  const { data } = useLaunchesQuery({
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  const entries = useMemo(() => data?.launchesPast, [data]);

  return (
    <div className='App'>
      {entries &&
        entries.map((entry) => entry && <Card key={entry.id} entry={entry} />)}
    </div>
  );
};

export default App;
