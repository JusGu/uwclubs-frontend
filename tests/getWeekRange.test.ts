import { getWeekRange } from '../lib/getWeekRange';

describe('getWeekRange', () => {
  const dates = [
    '2024-02-04T05:00:00Z', // Sunday
    '2024-02-05T05:00:00Z', // Monday
    '2024-02-06T05:00:00Z', // Tuesday
    '2024-02-07T05:00:00Z', // Wednesday
    '2024-02-08T05:00:00Z', // Thursday
    '2024-02-09T05:00:00Z', // Friday
    '2024-02-10T05:00:00Z', // Saturday
  ];

  dates.forEach(date => {
    it(`should return correct start and end of week for date ${date}`, () => {
      const testDate = new Date(date);
      const { startOfWeek, endOfWeek } = getWeekRange(testDate);

      expect(startOfWeek.toISOString()).toEqual('2024-02-04T05:00:00.000Z');
      expect(endOfWeek.toISOString()).toEqual('2024-02-11T04:59:59.999Z');
    });
  });
});