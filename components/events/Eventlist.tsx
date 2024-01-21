"use client";
import { event } from "../../app/events/models";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { useState, useEffect } from "react";
import EventPreview from "./EventPreview";
import EventPreviewSkeleton from "./EventPreviewSkeleton";

export default function EventList() {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [events, setEvents] = useState<event[]>([]);
  const supabase = createClient();

  const getData = async () => {
    const { data } = await supabase.from("events").select(`
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
    `).order('start_time', { ascending: true });

    // will fix this later not sure why it's not working
    // @ts-ignore
    setEvents(data as event[]);
  };

  useEffect(() => {
    getData();
    setLoading(false);
  }, []);

  // Listen to inserts
  supabase
    .channel("events")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "events" },
      getData
    )
    .subscribe();

  return loading ? (
    <div className="grid grid-cols-1 gap-4">
      <EventPreviewSkeleton />
      <EventPreviewSkeleton />
      <EventPreviewSkeleton />
    </div>
  ) : (
    <ul>
      {events?.map((event) => (
        <li key={event.id} className="mb-4">
          <EventPreview
            event={event}
            onClick={() => router.push(`/events/${event.message_id}`)}
          />
        </li>
      ))}
    </ul>
  );
}


