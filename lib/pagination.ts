import { format } from "date-fns";
import { getWeekRange } from "./getWeekRange";
import { EventListSearchParams } from "@/app/events/models";
import { differenceInCalendarWeeks, startOfWeek } from "date-fns";
import { zonedTimeToUtc } from 'date-fns-tz'

export const toQueryParams = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};

export const startOfDayESTQueryParam = (dateString: string): Date => {
  const utcTime = zonedTimeToUtc(dateString, "America/New_York");
  return utcTime;
};

export const endOfDayESTQueryParam = (dateString: string): Date => {
  const endOfDay = dateString + "T23:59:59.999Z";
  const utcTime = zonedTimeToUtc(endOfDay, "America/New_York");
  return utcTime;
};

export function getStartAndEndOfWeek(searchParams: EventListSearchParams): {
  startOfWeek: Date;
  endOfWeek: Date;
} {
  const startParam = searchParams.start;
  const endParam = searchParams.end;

  if (startParam && endParam) {
    return {
      startOfWeek: startOfDayESTQueryParam(startParam),
      endOfWeek: endOfDayESTQueryParam(endParam),
    };
  } else {
    const weekRange = getWeekRange(new Date());
    return {
      startOfWeek: weekRange.startOfWeek,
      endOfWeek: weekRange.endOfWeek,
    };
  }
}

export const getNavigationLink = (relativeDate: Date) => {
  const { startOfWeek, endOfWeek } = getWeekRange(relativeDate);
  const start = toQueryParams(startOfWeek);
  const end = toQueryParams(endOfWeek);
  const navigationLink = `/events?start=${start}&end=${end}`;
  return navigationLink;
};

export const weeksAwayFromCurrent = (inputDate: Date): number => {
  const currentDate = new Date();
  const currentWeekStart = startOfWeek(currentDate, { weekStartsOn: 0 });
  const inputWeekStart = startOfWeek(inputDate, { weekStartsOn: 0 });
  return differenceInCalendarWeeks(inputWeekStart, currentWeekStart);
};

const formatEventMessage = (numberOfResults: number, label: string) => {
    if (numberOfResults === 0) return `No events ${label}`;
    
    const plural = numberOfResults !== 1 ? 'events' : 'event';
    return `${numberOfResults} ${plural} ${label}`;
}

export const getWeekDescriptor = (
    inputDate: Date,
    numberOfResults: number
): string => {
    const weeksAway = weeksAwayFromCurrent(inputDate);
    let weekLabel = "";

    switch (weeksAway) {
        case -1:
            weekLabel = 'took place last week';
            break;
        case 0:
            weekLabel = 'occurring this week';
            break;
        case 1:
            weekLabel = 'scheduled for next week';
            break;
        default:
            if(weeksAway < 0)
                weekLabel = `took place ${Math.abs(weeksAway)} weeks ago`;
            else 
                weekLabel = `are currently scheduled for ${weeksAway} weeks from now`;
            break;
    }
    
    return formatEventMessage(numberOfResults, weekLabel);
};