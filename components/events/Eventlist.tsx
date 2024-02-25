import { EventListSearchParams, IEvent } from "@/app/events/models";
import { createClient } from "@/utils/supabase/server";
import EventPreview from "./EventPreview";
import { cookies } from "next/headers";
import { countTotalEvents, organizeEventsByDate } from "@/lib/utils";
import Timeline from "./Timeline";
import TimelineTop from "./TimelineTop";
import FormatDate from "./FormatDate";
import EventListNav from "./EventListNav";
import PaginationButton from "./PaginationButton";
import { getStartAndEndOfWeek, getWeekDescriptor } from "@/lib/pagination";
import EventListFooterNav from "./EventListFooterNav";

interface IEventList {
  searchParams: EventListSearchParams;
}
export default async function EventList(props: IEventList) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { startOfWeek, endOfWeek } = getStartAndEndOfWeek(props.searchParams);
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
      <h1 className="text-lg mt-4">
        {getWeekDescriptor(startOfWeek, totalWeeklyEventsCount)}.
      </h1>
      <EventListFooterNav start={startOfWeek} end={endOfWeek} />
    </div>
  ) : (
    <div>
      <EventListNav
        startOfWeek={startOfWeek}
        totalWeeklyEventsCount={totalWeeklyEventsCount}
        isSortSelected={false}
        isFilterSelected={false}
      />
      {Object.entries(weeklyEvents).map(([date, events], index, array) => (
        <div key={date} className="flex w-full justify-items-stretch">
          {index === array.length - 1 ? <Timeline /> : <TimelineTop />}
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                <FormatDate dateString={date} />
              </h2>
              {index === 0 && (
                <PaginationButton start={startOfWeek} end={endOfWeek} />
              )}
            </div>
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
      <EventListFooterNav start={startOfWeek} end={endOfWeek} />
    </div>
  );
}
