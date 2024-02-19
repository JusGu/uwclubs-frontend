export function getWeekRange(date: Date) {
  const dayOfWeek = date.getUTCDay();
  const startOfWeek = new Date(date);
  startOfWeek.setUTCDate(date.getUTCDate() - dayOfWeek);
  startOfWeek.setUTCHours(5, 0, 0, 0); // UTC 5am is EST 12am

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 7);
  endOfWeek.setUTCHours(4, 59, 59, 999); // UTC 4:59:59.999 is EST 11:59:59.999

  return { startOfWeek, endOfWeek };
}