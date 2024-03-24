import { Clock, MapPin } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { IEvent } from "../../app/events/models";
import { formatTime } from "@/lib/datetime";

function renderTime(start_time: string, end_time: string) {
  if (!end_time) {
    return formatTime(start_time);
  }
  return `${formatTime(start_time)} - ${formatTime(end_time)}`;
}

export default function LocationTime({ event }: { event: IEvent }) {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-2 sm:space-y-0">
      <Alert className="w-full">
        <div className="flex items-center gap-3 text-sm">
          <Clock className="h-5 w-5" />
          {renderTime(event.start_time, event.end_time)}
        </div>
      </Alert>
      {event.location && (
        <Alert className="w-full text-lg">
          <div className="flex items-center gap-3 text-sm">
            <MapPin className="h-5 w-5" />
            {event.location}
          </div>
        </Alert>
      )}
    </div>
  );
}
