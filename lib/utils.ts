import { IWeeklyEvents } from "@/app/events/models";
import { type ClassValue, clsx } from "clsx";
import { formatInTimeZone } from "date-fns-tz";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import { formatDateEST } from "@/lib/time";

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
    console.log(event.start_time, "event start time\n\n\nASDSADAS\n\n\n")
    const midnight = new Date(event.start_time)
    const dateKey = formatDateEST(midnight);
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