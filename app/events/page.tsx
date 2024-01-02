"use client";
import { PostgresChangePayload, event } from "./models";
import EventList from "./eventlist";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Page() {
  const [events, setEvents] = useState<event[]>([]);
  const supabase = createClient();

  useEffect(() => {
    const getData = async () => {
      const { data } = await supabase.from("events").select();
      setEvents(data as event[]);
    };
    getData();
  }, []);
  // Create a function to handle inserts
  const handleInserts = (payload: any) => {
    const { new: event } = payload as PostgresChangePayload;
    console.log("New event", event);
    setEvents((events) => [...events, event]);
  };

  // Listen to inserts
  supabase
    .channel("events")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "events" },
      handleInserts
    )
    .subscribe();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-6 max-w-sm mx-auto rounded-xl">
        <h1 className="text-2xl font-bold">Events</h1>
        <EventList events={events} />
      </div>
    </div>
  );
}
