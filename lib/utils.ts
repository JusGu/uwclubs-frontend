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
