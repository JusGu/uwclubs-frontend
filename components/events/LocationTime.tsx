import { Clock, MapPin } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { IEvent } from "../../app/events/models";

const formatTime = (time: string) => {
  const date = new Date(time);
  return date.toLocaleTimeString("en-US", {
    timeZone: "EST",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
};

export default function LocationTime({ event }: { event: IEvent }) {
  return (
    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-2 sm:space-y-0">
      <Alert className="w-full">
        {/* <AlertTitle>{getMonthDate(event.start_time)}</AlertTitle> */}
        <div className="flex items-center gap-3">
          <Clock className="h-5 w-5" />
          {formatTime(event.start_time)} - {formatTime(event.end_time)}
        </div>
      </Alert>
      {event.location && (
        <Alert className="w-full">
          {/* <AlertTitle>Location</AlertTitle> */}
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5" />
            {event.location}
          </div>
        </Alert>
      )}
    </div>
  );
}
