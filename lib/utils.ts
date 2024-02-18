import { IWeeklyEvents } from "@/app/events/models";
import { type ClassValue, clsx } from "clsx";
import { formatInTimeZone } from "date-fns-tz";
import { twMerge } from "tailwind-merge";
import { formatDateEST } from "@/lib/time";
import { zonedTimeToUtc } from 'date-fns-tz'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateDescription(timestampz: string): string {
  return formatInTimeZone(
    new Date(timestampz),
    "America/New_York",
    "EEE, MMM d, h:mm a"
  );
}

export function organizeEventsByDate(data: any): IWeeklyEvents {
  const events: IWeeklyEvents = {};

  data.forEach((event: any) => {
    console.log(event.start_time, "Event Start Time");
    const date = zonedTimeToUtc(event.start_time, "America/New_York");
    console.log(date, "Date");
    const dateKey = formatInTimeZone(date, "America/New_York", "yyyy-MM-dd");
    console.log(dateKey, "Date Key");
    if (!events[dateKey]) {
      events[dateKey] = []; 
    }
    events[dateKey].push(event);
  });

  return events;
}

export function countTotalEvents(weeklyEvents: IWeeklyEvents): number {
  let totalEvents = 0;
  for (const day in weeklyEvents) {
    totalEvents += weeklyEvents[day as keyof IWeeklyEvents].length;
  }
  return totalEvents;
}