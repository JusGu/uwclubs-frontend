"use client";

import { IEvent } from "@/app/events/models";
import { Button } from "../../ui/button";
import { getMobileDetect } from "@/lib/utils";
import { Check, Copy, CopyCheck, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCalendarURL, getWebCalendarURL } from "@/lib/api";

interface IEventCardDropdown {
  event: IEvent;
}

export default function ClubEventsDropdown(props: IEventCardDropdown) {
  const { event } = props;
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState("other");

  const detectDevice = () => {
    if (typeof navigator !== "undefined") {
      const { isIos } = getMobileDetect(navigator.userAgent);
      if (isIos()) setDevice("ios");
    }
  };

  useEffect(() => {
    detectDevice();
  }, []);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[250px]"
        side="left"
        align="start"
        forceMount
      >
        <DropdownMenuGroup>
          <Link
            href={getCalendarURL(event.guild_id)}
            target="_blank"
          >
            <DropdownMenuItem>Download Calendar</DropdownMenuItem>
          </Link>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Subscribe to Calendar
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
      <RenderSubscription
        event={event}
        device={device}
        open={open}
        setOpen={setOpen}
      />
    </DropdownMenu>
  );
}

interface IRenderSubscription {
  event: IEvent;
  device: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

function RenderSubscription(props: IRenderSubscription) {
  const { event, device, open, setOpen } = props;
  const [isCopied, setIsCopied] = useState(false);
  const [subscribeClickCount, setSubscribeClickCount] = useState(0);

  const handleSubscribeClick = () => {
    setSubscribeClickCount(prevCount => prevCount + 1);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to Calendar</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={device}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ios">iOS</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          <TabsContent value="ios">
            <Link href={getWebCalendarURL(event.guild_id)} target="_blank">
              <Button size="lg" className="w-full" onClick={handleSubscribeClick}>
                Subscribe to Calendar
              </Button>
            </Link>
            {subscribeClickCount >= 2 && (
              <p className="text-sm mt-2">
                Didn't work? Change tab to "Other" to try manually.
              </p>
            )}
          </TabsContent>
          <TabsContent value="other">
            <div className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="link">Subscription Link</Label>
                <div className="flex flex-1 gap-2 items-center flex-nowrap">
                  <Input
                    id="link"
                    defaultValue={getWebCalendarURL(event.guild_id)}
                    readOnly
                  />
                  <Button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        getWebCalendarURL(event.guild_id)
                      );
                      setIsCopied(true);
                      setTimeout(() => setIsCopied(false), 2000);
                    }}
                    size="icon"
                  >
                    {isCopied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="instructions">Instructions</Label>
                <div className="text-sm text-primary hover:underline">
                  <a
                    href="https://support.google.com/calendar/answer/37100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Calendar
                  </a>
                </div>
                <div className="text-sm text-primary hover:underline">
                  <a
                    href="https://support.apple.com/en-ca/102301"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apple Calendar
                  </a>
                </div>
              </div>
              <div className="space-y-1">
                <Label htmlFor="warning">Warning</Label>
                <p className="text-sm">
                  It might take up to 24 hours for changes to show in your
                  Google Calendar. This is a limitation of Google Calendar.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
