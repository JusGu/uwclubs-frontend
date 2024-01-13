"use client";
import { event } from "../../app/events/models";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LocationTime from "./LocationTime";
import { useRouter } from 'next/navigation';

interface iEventListProps {
  events: event[];
}

export default function EventList({ events }: iEventListProps) {
  const router = useRouter();

  return (
    <ul>
      {events?.map((event) => (
        <li key={event.id} className="mb-4">
          <EventComponent event={event} onClick={() => router.push(`/events/${event.message_id}`)} />
        </li>
      ))}
    </ul>
  );
}


const EventComponent = ({ event, onClick }: { event: event, onClick: () => void }) => {

  return (
    <Card className="cursor-pointer" onClick={onClick}>
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
