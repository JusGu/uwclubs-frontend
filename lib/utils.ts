import { IWeeklyEvents } from "@/app/events/models";
import { type ClassValue, clsx } from "clsx";
import { formatInTimeZone } from "date-fns-tz";
import { twMerge } from "tailwind-merge";
import { formatDateEST } from "@/lib/time";
import {utcToZonedTime} from 'date-fns-tz'

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
    const date = new Date(event.start_time);
    const dateKey = date.toLocaleTimeString("en-US", {
      timeZone: "EST",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
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