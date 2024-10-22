import { IWeeklyEvents } from "@/app/events/models";
import { type ClassValue, clsx } from "clsx";
import { formatInTimeZone } from "date-fns-tz";
import { twMerge } from "tailwind-merge";
export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));

export const formatDateDescription = (timestampz: string, format: string = "EEE, MMM d, h:mm a"): string => {
  return formatInTimeZone(
    new Date(timestampz),
    "America/New_York",
    format
  );
};

export const organizeEventsByDate = (data: any): IWeeklyEvents => {
  const events: IWeeklyEvents = {};

  data.forEach((event: any) => {
    const dateKey = formatInTimeZone(
      event.start_time,
      "America/New_York",
      "yyyy-MM-dd"
    );
    if (!events[dateKey]) {
      events[dateKey] = [];
    }
    events[dateKey].push(event);
  });

  return events;
};

export const countTotalEvents = (weeklyEvents: IWeeklyEvents): number => {
  let totalEvents = 0;
  for (const day in weeklyEvents) {
    totalEvents += weeklyEvents[day as keyof IWeeklyEvents].length;
  }
  return totalEvents;
};

export const getMobileDetect = (userAgent: NavigatorID["userAgent"]) => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isMac = () => Boolean(userAgent.match(/Mac/i));
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
  return {
    isWindows,
    isAndroid,
    isIos,
    isMac,
  };
};
