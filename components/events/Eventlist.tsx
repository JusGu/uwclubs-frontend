import { event } from "../../app/events/models";
import { createClient } from "@/utils/supabase/server";
import EventPreview from "./EventPreview";
import EventPreviewSkeleton from "./EventPreviewSkeleton";
import { cookies } from "next/headers";

export default async function EventList() {
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
    guilds ( short_name )
    `
    )
    .order("start_time", { ascending: true });

  // @ts-ignore
  const events = data as event[];

  return events.length === 0 ? (
    <div className="grid grid-cols-1 gap-4">
      <EventPreviewSkeleton />
      <EventPreviewSkeleton />
      <EventPreviewSkeleton />
    </div>
  ) : (
      <ul>
        {events?.map((event) => (
          <li key={event.id} className="mb-4">
            <EventPreview event={event} />
          </li>
        ))}
      </ul>
  );
}
