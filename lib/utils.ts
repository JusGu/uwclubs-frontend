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
    console.log(event.start_time, event.title, "Event");
    const newDate = new Date(event.start_time).getTime().toString();
    console.log(newDate, event.title, "EPOCH");
    const date = zonedTimeToUtc(newDate, "America/New_York");
    console.log(date, event.title, "Date");
    const dateKey = formatInTimeZone(date, "America/New_York", "yyyy-MM-dd");
    console.log(dateKey, event.title, "Date Key");
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