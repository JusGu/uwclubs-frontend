import { getWeekDescriptor } from "@/lib/pagination";

interface IEventListNav {
  totalWeeklyEventsCount: number;
  startOfWeek: Date;
}
export default function EventListNav(props: IEventListNav) {
  const { startOfWeek, totalWeeklyEventsCount } = props;
const weekDescriptor = getWeekDescriptor(startOfWeek, totalWeeklyEventsCount);
  return (
    <div className="flex justify-between items-center my-2">
      <h2 className="text-md">
        {weekDescriptor}
      </h2>
    </div>
  );
}
