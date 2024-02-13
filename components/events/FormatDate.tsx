import { formatInTimeZone } from "date-fns-tz";
import { isToday, isTomorrow } from "date-fns";

interface IFormatDateProps {
  dateString: string;
  timezone?: string;
}

export default function FormatDate(props: IFormatDateProps) {
  console.log("FormatDate props:", props);
  const { dateString, timezone = "EST" } = props;
  console.log("dateString:", dateString, "timezone:", timezone);
  const date = new Date(dateString);
  console.log("Parsed date:", date);

  const dayOfWeek = formatInTimeZone(date, timezone, "EEEEEEEEE");
  console.log("Formatted dayOfWeek:", dayOfWeek);
  const monthAndDay = formatInTimeZone(date, timezone, "MMM d");
  console.log("Formatted monthAndDay:", monthAndDay);

  const getPrimaryLabel = (date: Date) => {
    console.log("getPrimaryLabel called with date:", date);
    if (isToday(date)) {
      console.log("Date is today");
      return "Today";
    } else if (isTomorrow(date)) {
      console.log("Date is tomorrow");
      return "Tomorrow";
    }
    console.log("Returning monthAndDay for date:", monthAndDay);
    return monthAndDay;
  };

  return (
    <div>
      <span className="font-bold">{getPrimaryLabel(date)}{" "}</span>
      <span className="text-muted">{dayOfWeek}</span>
    </div>
  );
}
