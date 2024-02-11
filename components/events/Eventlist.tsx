import { IEvent } from "../../app/events/models";
import { createClient } from "@/utils/supabase/server";
import EventPreview from "./EventPreview";
import { cookies } from "next/headers";
import { getWeekRange } from "@/lib/getWeekRange";
import { countTotalEvents, organizeEventsByDate } from "@/lib/utils";
import Timeline from "./Timeline";
import TimelineTop from "./TimelineTop";
import FormatDate from "./FormatDate";

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

  const weeklyEvents = organizeEventsByDate(data);
  const totalWeeklyEventsCount = countTotalEvents(weeklyEvents);

  return !weeklyEvents || totalWeeklyEventsCount === 0 ? (
    <div className="grid grid-cols-1 gap-4">
      <h1 className="text-lg">No events this week</h1>
    </div>
  ) : (
    <div>
      <h2 className="mb-4 text-md">
        {totalWeeklyEventsCount} events this week
      </h2>
      {Object.entries(weeklyEvents).map(([date, events], index, array) => (
        <div key={date} className="flex w-full justify-items-stretch">
          {index === array.length - 1 ? <Timeline /> : <TimelineTop />}
          <div className="w-full">
            <h2 className="text-xl font-bold mb-4">
              <FormatDate dateString={date} />
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
