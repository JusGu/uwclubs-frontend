import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import LocationTime from "./LocationTime";
import { event } from "../../app/events/models";

export default function EventPreview({
    event,
    onClick,
  }: {
    event: event;
    onClick: () => void;
  }) {
    return (
      <Card className="cursor-pointer hover:border-gray-400 hover:brightness-95 relative overflow-hidden z-10 pl-3" onClick={onClick}>
        <div className="absolute h-full w-3 bg-primary z-0 top-0 left-0" />
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>@{event.guilds.short_name}</CardDescription>
        </CardHeader>
        <CardContent>
          <LocationTime event={event} />
        </CardContent>
      </Card>
    );
  };