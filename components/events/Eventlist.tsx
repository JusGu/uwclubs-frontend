"use client";
import { event } from "../../app/events/models";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar, MapPin } from "lucide-react";

interface iEventListProps {
  events: event[];
}

export default function EventList({ events }: iEventListProps) {
  return (
    <ul>
      {events?.map((event) => (
        <li key={event.id} className="mb-4">
          <EventComponent event={event} />
        </li>
      ))}
    </ul>
  );
}

const EventComponent = ({ event }: { event: event }) => {
  const formatTime = (time: string) => {
    const date = new Date(time);
    console.log(date);
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>@{event.guilds.short_name}</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
};
