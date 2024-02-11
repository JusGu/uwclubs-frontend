import { IWeeklyEvents } from "@/app/events/models";
import { type ClassValue, clsx } from "clsx";
import { formatInTimeZone } from "date-fns-tz";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";

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

export const getDateKey = (date: Date): string => {
  const eventDate = new Date(date);
  eventDate.setHours(0, 0, 0, 0); // Set time to midnight
  const dateKey = eventDate.toLocaleString("en-US", {timeZone: "America/New_York"});
  return dateKey;
}

export function organizeEventsByDate(data: any): IWeeklyEvents {
  const events: IWeeklyEvents = {};

  data.forEach((event: any) => {
    const dateKey = getDateKey(new Date(event.start_time));
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