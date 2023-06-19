/**
 * Converts a date string to the specified date format.
 * @param dateString - The date string to be converted.
 * @returns The converted date string in the format "dd/mm/yyyy".
 */
export const toDateFormat = (dateString: string): string => {
  const date = new Date(dateString);
  const convertedDate = date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return convertedDate;
};

/**
 * Converts the given number of milliseconds to minutes and seconds format.
 * @param milliseconds - The number of milliseconds to be converted.
 * @returns The converted time in the format "mm:ss".
 */
export const millisecondsToMinutesSeconds = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
