import { formatDate } from './formatDate';

describe('Date formatter', () => {
  it('returns null when the string can not be parsed', () => {
    const input = 'some wrongly formatted time string';
    const result = formatDate(input);

    expect(result).toBe(null);
  });

  it('correctly identifies the date from the string', () => {
    const input = '2020-10-24T11:31:00-04:00';
    const result = formatDate(input);

    expect(result).toBe('24/10/2020');
  });
});
