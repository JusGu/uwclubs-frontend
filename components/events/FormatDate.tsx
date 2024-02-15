import { formatInTimeZone, zonedTimeToUtc } from "date-fns-tz";
import { isToday, isTomorrow } from "date-fns";

interface IFormatDateProps {
  dateString: string;
  timezone?: string;
}

export default function FormatDate(props: IFormatDateProps) {
  const { dateString, timezone = "EST" } = props;
  const date = zonedTimeToUtc(dateString, "America/New_York");

  const dayOfWeek = formatInTimeZone(date, timezone, "EEEEEEEEE");
  const monthAndDay = formatInTimeZone(date, timezone, "MMM d");

  const getPrimaryLabel = (date: Date) => {
    if (isToday(date)) {
      return "Today";
    } else if (isTomorrow(date)) {
      return "Tomorrow";
    }
    return monthAndDay;
  };

  return (
    <div>
      <span className="font-bold">{getPrimaryLabel(date)}{" "}</span>
      <span className="text-muted">{dayOfWeek}</span>
    </div>
  );
}
