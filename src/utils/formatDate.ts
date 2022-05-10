/**
 * Date formatter (please, note, it will display the date in your local time, not the original timezone)
 * @param dateISO date string in ISO format
 * @returns
 */
export const formatDate = (dateISO: string) => {
  const date = new Date(dateISO);
  const valid = date.toString() !== 'Invalid Date';

  if (valid) {
    // Date.getMonth() counts from 0, so we need to add 1
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  return null;
};
