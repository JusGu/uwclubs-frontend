import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IEvent } from "@/app/events/models";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";
import { MapPin } from "lucide-react";
import { formatTimePicker } from "@/lib/datetime";

export default async function EditableEventCard({
  event,
}: {
  event: any;
}) {
  const getMessageLink = (event: IEvent) => {
    return `discord://discord.com/channels/${event.guild_id}/${event.channel_id}/${event.message_id}`;
  };

  return (
    <Card>
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-4">
        <Input
          type="text"
          defaultValue={event.title}
          className="text-3xl font-semibold pl-2 pt-6 pb-6 leading-none tracking-tight focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-black"
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-2 sm:space-y-0">
          <Alert className="w-full h-full pt-1.5 pb-1.5 focus-within:ring-1 focus-within:ring-black">
            <div className="flex items-center justify-center gap-3">
              <div className="flex flex-row items-center">
                <Input
                  id="start_time"
                  name="start_time"
                  type="time"
                  defaultValue={formatTimePicker(event.start_time)}
                  className="block border-none focus-visible:ring-none focus-visible:ring-0 pl-0"
                />
                <div>—</div>
                <Input
                  id="end_time"
                  name="end_time"
                  type="time"
                  defaultValue={formatTimePicker(event.end_time)}
                  className="block border-none focus-visible:ring-none focus-visible:ring-0 pr-0"
                />
              </div>
            </div>
          </Alert>
          {event.location && (
            <Alert className="w-full h-full text-lg pt-2.5 pb-2.5 focus-within:ring-1 focus-within:ring-black">
              <div className="flex items-stretch gap-3 text-sm h-full">
                <MapPin className="h-5 w-6 my-auto" />
                <Input
                  type="text"
                  defaultValue={event.location}
                  className="h-full border-none focus-visible:ring-none focus-visible:ring-0 pl-0"
                />
              </div>
            </Alert>
          )}
        </div>
        <Textarea
          defaultValue={event.description}
          className="mt-4 p-2 text-md"
          rows={5}
        />
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
      </CardHeader>
      <CardContent>
        <p>{event.guilds.description}</p>
      </CardContent>
    </Card>
  );
}
