"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";
import { event } from "@/app/events/models";

import LocationTime from "./LocationTime";
import EventCardSkeleton from "./EventCardSkeleton";

export default function EventCard({ event_id }: { event_id: string }) {
  const [event, setEvent] = useState<event>();
  const [error, setError] = useState<boolean>(false);
  const supabase = createClient();

  const getData = async () => {
    const { data } = await supabase
      .from("events")
      .select(
        `
      id,
      title,
      start_time,
      end_time,
      location,
      description,
      guild_id,
      channel_id,
      message_id,
      guilds ( short_name )
      `
      )
      .eq("message_id", event_id);

    if (!data || data.length === 0) {
      return setError(true);
    } else {
      // @ts-ignore
      setEvent(data[0] as event);
      console.log(data[0]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getMessageLink = (event: event) => {
    return `discord://discord.com/channels/${event.guild_id}/${event.channel_id}/${event.message_id}`;
  }
  if (error) {
    return <div>Event not found</div>;
  }
  return event ? (
    <Card>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>@{event.guilds.short_name}</CardDescription>
      </CardHeader>
      <CardContent>
        <LocationTime event={event} />

        <p className="mt-4">{event.description}</p>
      </CardContent>
      <CardFooter>
        <a href={getMessageLink(event)} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
        View Original Message
        </a>
      </CardFooter>
    </Card>
  ) : (
    <EventCardSkeleton />
  );
}
