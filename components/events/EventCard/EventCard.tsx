import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { IEvent } from "@/app/events/models";
import { cookies } from "next/headers";
import LocationTime from "../LocationTime";
import ClubEventsDropdown from "./ClubEventsDropdown";
import { Separator } from "@/components/ui/separator";
import EventDropdown from "./EventDropdown";

export default async function EventCard({ event_id }: { event_id: string }) {
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
    .eq("message_id", event_id)
    .is("deleted_at", null);

  //@ts-ignore
  const event = data[0] as event;

  const getMessageLink = (event: IEvent) => {
    return `discord://discord.com/channels/${event.guild_id}/${event.channel_id}/${event.message_id}`;
  };
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-4">
        <CardTitle className="text-3xl">{event.title}</CardTitle>
        <EventDropdown event={event} />
      </CardHeader>
      <CardContent>
      <LocationTime event={event} />
        <p className="mt-4">{event.description}</p>
        <div className="mt-4">
          <a
            href={getMessageLink(event)}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline"
          >
            View Original Message
          </a>
        </div>
      </CardContent>
      <Separator className="opacity-50" />
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-4">
        <div>
          <CardDescription className="pb-1.5">Hosted By</CardDescription>
          <CardTitle>@{event.guilds.short_name} </CardTitle>
        </div>
        <ClubEventsDropdown event={event} />
      </CardHeader>
      <CardContent>
        <p>{event.guilds.description}</p>
      </CardContent>
    </Card>
  );
}
