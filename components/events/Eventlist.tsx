import { IEvent } from "../../app/events/models";
import { createClient } from "@/utils/supabase/server";
import EventPreview from "./EventPreview";
import { cookies } from "next/headers";
import { getWeekRange } from "@/lib/getWeekRange";
import { countTotalEvents, organizeEventsByWeekday } from "@/lib/utils";
import Timeline from "./Timeline";
import TimelineTop from "./TimelineTop";

export default async function EventList() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { startOfWeek, endOfWeek } = getWeekRange(new Date());

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
    .gte("start_time", startOfWeek.toISOString())
    .lte("start_time", endOfWeek.toISOString())
    .is("deleted_at", null)
    .order("start_time", { ascending: true });

  const weeklyEvents = organizeEventsByWeekday(data);
  const totalWeeklyEventsCount = countTotalEvents(weeklyEvents);
  console.log(weeklyEvents, totalWeeklyEventsCount);

  return !weeklyEvents || totalWeeklyEventsCount === 0 ? (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-lg">No events this week</h1>
    </div>
  ) : (
    <div>
      {Object.entries(weeklyEvents).map(([day, events]) => (
        <div key={day} className="flex w-full justify-items-stretch">
          {day === "saturday" ? <Timeline /> : <TimelineTop />}
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-4">
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </h2>
            <ul>
              {events.map((event: IEvent) => (
                <li key={event.id} className="mb-4">
                  <EventPreview event={event} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
