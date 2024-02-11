import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import LocationTime from "./LocationTime";
import { IEvent } from "../../app/events/models";
import Link from "next/link";
import DotsLoader from "./DotsLoader";

export default function EventPreview({ event }: { event: IEvent }) {
  return (
    <Link href={`/events/${event.message_id}`} passHref>
      <Card className="cursor-pointer hover:border-gray-400 hover:brightness-95 relative overflow-hidden z-10 pl-3">
        <div className="absolute h-full w-3 bg-primary z-0 top-0 left-0" />
        <CardHeader>
          <CardTitle className="flex align-items justify-between">
            {event.title}
            <DotsLoader startTime={event.start_time} endTime={event.end_time} />
          </CardTitle>
          <CardDescription>@{event.guilds.short_name}</CardDescription>
        </CardHeader>
        <CardContent>
          <LocationTime event={event} />
        </CardContent>
      </Card>
    </Link>
  );
}
