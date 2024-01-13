"use client";
import { event } from "./models";
import EventList from "../../components/events/Eventlist";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
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
    `);

    // will fix this later not sure why it's not working
    // @ts-ignore
    setEvents(data as event[]);
  };

  useEffect(() => {
    getData();
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

  return (
    <div className="w-full sm:w-1/2 p-6">
      <h1 className="text-2xl font-bold">Events</h1>
      <EventList events={events} />
    </div>
  );
}
