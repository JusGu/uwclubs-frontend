export function getWeekRange(date: Date) {
  const dayOfWeek = date.getDay();
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - dayOfWeek);
  startOfWeek.setUTCHours(5, 0, 0, 0); // UTC 5am is EST 12am

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 7);
  endOfWeek.setUTCHours(4, 59, 59, 999); // UTC 4:59:59.999 is EST 11:59:59.999

  return { startOfWeek, endOfWeek };
}