export function getWeekRange(date: Date) {
  console.log(`Input date: ${date.toISOString()}`);
  const dayOfWeek = date.getDay();
  console.log(`Day of week: ${dayOfWeek}`);
  const startOfWeek = new Date(date);
  startOfWeek.setDate(date.getDate() - dayOfWeek);
  startOfWeek.setHours(0, 0, 0, 0); // Start of the day
  console.log(`Start of week: ${startOfWeek.toISOString()}`);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  endOfWeek.setHours(23, 59, 59, 999); // End of the day
  console.log(`End of week: ${endOfWeek.toISOString()}`);

  return { startOfWeek, endOfWeek };
}