"use client";
import { event } from "./models";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Calendar } from "lucide-react";

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
    return date.toLocaleTimeString('en-US',
    {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
  );
  };

  const getMonthDate = (time: string) => {
    const date = new Date(time);
    return date.toDateString().split(" ")[1] + " " + date.toDateString().split(" ")[2];
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{event.title}</CardTitle>
          <CardDescription>@visual-arts</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert>
            <Calendar className="h-4 w-4" />
            <AlertTitle>{getMonthDate(event.start_time)}</AlertTitle>
            <AlertDescription>
              {formatTime(event.start_time)} - {formatTime(event.end_time)}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </>
  );
};
