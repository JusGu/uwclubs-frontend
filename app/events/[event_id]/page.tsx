import EventCard from "@/components/events/EventCard/EventCard";
import EventCardNav from "@/components/events/EventCard/EventCardNav";
import { createClient } from "@/utils/supabase/server";
import { IEvent } from "@/app/events/models";
import { cookies } from "next/headers";

export default async function Page({ params }: { params: { event_id: string } }) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
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
      guilds ( short_name, description )
      `
    )
    .eq("message_id", params.event_id)
    .is("deleted_at", null);

  //@ts-ignore
  const event = data[0] as IEvent;

  return (
    <div className="w-full">
      <div className="w-full sm:w-1/2 p-3 sm:p-6 mx-auto sm:max-w-2xl">
        <EventCardNav />
        <EventCard event={event} />
      </div>
    </div>
  );
}
