"use client";

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
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MapPin } from "lucide-react";
import { formatTimePicker } from "@/lib/datetime";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  start_time: z.string(),
  end_time: z.string(),
  location: z.string().max(25).optional(),
  description: z.string().max(1000).optional(),
});

export default function EditableEventCard({ event }: { event: any }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: event.title,
      start_time: formatTimePicker(event.start_time),
      end_time: formatTimePicker(event.end_time),
      location: event.location,
      description: event.description,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const getMessageLink = (event: IEvent) => {
    return `discord://discord.com/channels/${event.guild_id}/${event.channel_id}/${event.message_id}`;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader className="flex-row items-start justify-between space-y-0 pb-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      className="text-3xl font-semibold pl-2 pt-6 pb-6 leading-none tracking-tight focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-black"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-x-2 sm:space-y-0">
              <Alert className="w-full h-full pt-1.5 pb-1.5 focus-within:ring-1 focus-within:ring-black">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex flex-row items-center">
                    <FormField
                      control={form.control}
                      name="start_time"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id="start_time"
                              type="time"
                              className="block border-none focus-visible:ring-none focus-visible:ring-0 pl-0"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <div>—</div>
                    <FormField
                      control={form.control}
                      name="end_time"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              id="end_time"
                              type="time"
                              className="block border-none focus-visible:ring-none focus-visible:ring-0 pr-0"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </Alert>
              {event.location && (
                <Alert className="w-full h-full text-lg pt-2.5 pb-2.5 focus-within:ring-1 focus-within:ring-black">
                  <div className="flex items-stretch gap-3 text-sm h-full">
                    <MapPin className="h-5 w-6 my-auto flex-shrink-0" />
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="text"
                              className="h-full border-none focus-visible:ring-none focus-visible:ring-0 pl-0"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </Alert>
              )}
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      className="mt-4 p-2 text-md"
                      rows={5}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
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
          <CardContent className="flex justify-end p-4">
            <Button type="submit" className="bg-primary text-white">
              Save
            </Button>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
