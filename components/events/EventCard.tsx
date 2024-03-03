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
import LocationTime from "./LocationTime";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

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
      <CardHeader>
        <CardTitle className="text-3xl">{event.title}</CardTitle>
        <CardDescription>@{event.guilds.short_name}</CardDescription>
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
      <CardFooter>
        <Card className="w-full">
          <CardHeader className="sm:flex-row items-start justify-between space-y-2 sm:space-y-0 flex-wrap pb-4">
            <div>
              <CardDescription className="pb-1.5">Hosted By</CardDescription>
              <CardTitle>@{event.guilds.short_name} </CardTitle>
            </div>
            <Button className="sm:w-fit w-full">
              <Download className="mr-2 h-4 w-4" />
              Export Calendar
            </Button>
          </CardHeader>
          <CardContent>
            <p>{event.guilds.description}</p>
          </CardContent>
        </Card>
      </CardFooter>
    </Card>
  );
}
