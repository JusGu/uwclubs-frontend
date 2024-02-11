import { formatInTimeZone } from "date-fns-tz";
import { isToday, isTomorrow } from "date-fns";

interface IFormatDateProps {
  dateString: string;
  timezone?: string;
}

export default function FormatDate(props: IFormatDateProps) {
  const { dateString, timezone = "EST" } = props;
  const date = new Date(dateString);

  const dayOfWeek = formatInTimeZone(date, timezone, "EEEEEEEEE");
  const monthAndDay = formatInTimeZone(date, timezone, "MMM d");
  const fullDate = formatInTimeZone(date, timezone, "MMM d, EEE");

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
