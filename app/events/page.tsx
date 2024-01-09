"use client";
import { PostgresChangePayload, event } from "./models";
import EventList from "./eventlist";
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
    guilds ( short_name )
    `);

    // will fix this later not sure why it's not working
    // @ts-ignore
    setEvents(data as event[]);
  };

  useEffect(() => {
    getData();
  }, []);

  // Create a function to handle inserts
  const handleInserts = async (payload: any) => {
    const { new: event } = payload as PostgresChangePayload;
    const { data } = await supabase.from("guilds").select(`
    short_name
    `).eq('id', event.guild_id);
    if (data) {
      event.guilds = data[0];
    }
    setEvents((events) => [...events, event]);
  };

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
    <div className="w-1/2 p-10">
        <h1 className="text-2xl font-bold">Events</h1>
        <EventList events={events} />
    </div>
  );
}
