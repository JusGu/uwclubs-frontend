export const formatTime = (time: string) => {
  const date = new Date(time);
  return date.toLocaleTimeString("en-US", {
    timeZone: "America/New_York",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
};

export const formatDateEST = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    timeZone: "EST",
  });
};

export const getWeekRange = (date: Date) => {
  const dayOfWeek = date.getUTCDay();
  const startOfWeek = new Date(date);
  startOfWeek.setUTCDate(date.getUTCDate() - dayOfWeek);
  startOfWeek.setUTCHours(5, 0, 0, 0); // UTC 5am is EST 12am

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 6);
  endOfWeek.setUTCHours(4, 59, 59, 999); // UTC 4:59:59.999 is EST 11:59:59.999

  return { startOfWeek, endOfWeek };
}
