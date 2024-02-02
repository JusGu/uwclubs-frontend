import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createClient } from "@/utils/supabase/server";
import { event } from "@/app/events/models";
import { cookies } from "next/headers";
import LocationTime from "./LocationTime";

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
      guilds ( short_name )
      `
    )
    .eq("message_id", event_id);

  //@ts-ignore
  const event = data[0] as event;

  const getMessageLink = (event: event) => {
    return `discord://discord.com/channels/${event.guild_id}/${event.channel_id}/${event.message_id}`;
  };
  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        <CardDescription>@{event.guilds.short_name}</CardDescription>
      </CardHeader>
      <CardContent>
        <LocationTime event={event} />
        <p className="mt-4">{event.description}</p>
      </CardContent>
      <CardFooter>
        <a
          href={getMessageLink(event)}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Original Message
        </a>
      </CardFooter>
    </Card>
  );
}
