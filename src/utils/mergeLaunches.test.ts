import { LaunchesPastResult } from '../generated';

import { mergeLaunches } from './mergeLaunches';

describe('Merge function for launchesPastResults', () => {
  it('works when there are no existing data', () => {
    const existing = undefined;
    const incoming: LaunchesPastResult = {
      result: {
        totalCount: 109,
      },
      data: [],
    };

    const result = mergeLaunches(existing, incoming);

    expect(result).toMatchObject({
      result: {
        totalCount: 109,
      },
      data: [],
    });
  });

  it('replaces totalCount with the one from incoming data', () => {
    const existing: LaunchesPastResult = {
      result: {
        totalCount: 105,
      },
      data: [],
    };
    const incoming: LaunchesPastResult = {
      result: {
        totalCount: 109,
      },
      data: [],
    };

    const result = mergeLaunches(existing, incoming);

    expect(result).toMatchObject({
      result: {
        totalCount: 109,
      },
      data: [],
    });
  });

  it('correctly merges the data property', () => {
    const existing: LaunchesPastResult = {
      result: {
        totalCount: 109,
      },
      data: [
        {
          mission_name: 'First',
        },
        {
          mission_name: 'Second',
        },
      ],
    };
    const incoming: LaunchesPastResult = {
      result: {
        totalCount: 109,
      },
      data: [
        {
          mission_name: 'Third',
        },
        {
          mission_name: 'Fourth',
        },
      ],
    };

    const result = mergeLaunches(existing, incoming);

    expect(result).toMatchObject({
      result: {
        totalCount: 109,
      },
      data: [
        {
          mission_name: 'First',
        },
        {
          mission_name: 'Second',
        },
        {
          mission_name: 'Third',
        },
        {
          mission_name: 'Fourth',
        },
      ],
    });
  });
});
