import { millisecondsToMinutesSeconds, toDateFormat } from '../../utils';

describe('Date Utils', () => {
  describe('toDateFormat', () => {
    test('should convert date string to "dd/mm/yyyy" format', () => {
      const dateString = '2022-06-30';
      const expected = '30/06/2022';
      const convertedDate = toDateFormat(dateString);
      expect(convertedDate).toBe(expected);
    });
  });

  describe('millisecondsToMinutesSeconds', () => {
    test('should convert milliseconds to "mm:ss" format', () => {
      const milliseconds = 90000;
      const expected = '1:30';
      const convertedTime = millisecondsToMinutesSeconds(milliseconds);
      expect(convertedTime).toBe(expected);
    });

    test('should handle single-digit seconds', () => {
      const milliseconds = 45000;
      const expected = '0:45';
      const convertedTime = millisecondsToMinutesSeconds(milliseconds);
      expect(convertedTime).toBe(expected);
    });
  });
});
