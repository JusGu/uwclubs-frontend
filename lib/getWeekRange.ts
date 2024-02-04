export function getWeekRange(date: Date) {
    const dayOfWeek = date.getDay();
    const startOfWeek = new Date(date);
    const endOfWeek = new Date(date);
  
    startOfWeek.setDate(date.getDate() - dayOfWeek);
    startOfWeek.setHours(0, 0, 0, 0);
  
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);
  
    return { startOfWeek, endOfWeek };
  }