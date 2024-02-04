import { IWeeklyEvents } from "@/app/events/models";
import { type ClassValue, clsx } from "clsx";
import { formatInTimeZone } from "date-fns-tz";
import { twMerge } from "tailwind-merge";

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

export function organizeEventsByWeekday(data: any): IWeeklyEvents {
  const events: IWeeklyEvents = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
  };
  if (!data){
    return events;
  }

  data.forEach((event: any) => {
    const dayOfWeek = new Date(event.start_time).getDay();
    const days: (keyof IWeeklyEvents)[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    events[days[dayOfWeek]].push(event);
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

