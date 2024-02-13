import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { getWeekRange } from "./getWeekRange";
import { EventListSearchParams } from "@/app/events/models";
import { differenceInCalendarWeeks, startOfWeek } from "date-fns";

export const toQueryParams = (date: Date): string => {
  return format(date, "yyyy-MM-dd");
};

export const startOfDayESTQueryParam = (dateString: string): Date => {
  const date = new Date(dateString + "T00:00:00");
  return new Date(
    formatInTimeZone(date, "America/New_York", "yyyy-MM-dd'T'00:00:00XXX")
  );
};

export const endOfDayESTQueryParam = (dateString: string): Date => {
  const date = new Date(dateString + "T23:59:59");
  return new Date(
    formatInTimeZone(date, "America/New_York", "yyyy-MM-dd'T'23:59:59XXX")
  );
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
  console.log("getNavigationLink called with date:", relativeDate);
  const { startOfWeek, endOfWeek } = getWeekRange(relativeDate);
  console.log("Week range obtained:", startOfWeek, endOfWeek);
  const start = toQueryParams(startOfWeek);
  console.log("Formatted start of week:", start);
  const end = toQueryParams(endOfWeek);
  console.log("Formatted end of week:", end);
  const navigationLink = `/events?start=${start}&end=${end}`;
  console.log("Generated navigation link:", navigationLink);
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
