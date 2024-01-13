import { Calendar, MapPin } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";
import { event } from "../../app/events/models";

const formatTime = (time: string) => {
    const date = new Date(time);
    return date.toLocaleTimeString("en-US", {
      timeZone: "EST",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
  };

  const getMonthDate = (time: string) => {
    const date = new Date(time);
    return (
      date.toDateString().split(" ")[1] +
      " " +
      date.toDateString().split(" ")[2]
    );
  };

export default function LocationTime({ event }: { event: event }) {
    return (
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-2 sm:space-y-0">
        <Alert className="w-full">
          <Calendar className="h-4 w-4" />
          <AlertTitle>{getMonthDate(event.start_time)}</AlertTitle>
          <AlertDescription>
            {formatTime(event.start_time)} - {formatTime(event.end_time)}
          </AlertDescription>
        </Alert>
        {event.location && (
          <Alert className="w-full">
            <MapPin className="h-4 w-4" />
            <AlertTitle>Location</AlertTitle>
            <AlertDescription>{event.location}</AlertDescription>
          </Alert>
        )}
      </div>
    )
}