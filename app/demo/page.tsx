"use client";
import PageWrapper from "@/components/shared/PageWrapper";
import { createClient } from "@/utils/supabase/client";
import { IEvent } from "@/app/events/models";
import { useEffect, useState } from "react";
import { formatTime } from "@/lib/datetime";
import EventCard from "@/components/events/EventCard/EventCard";
import TypeWriter from "./typewriter";
import { formatDateDescription } from "@/lib/utils";

export default function Page() {
  const [displayedContent, setDisplayedContent] = useState("");
  const [lastInsertedEvent, setLastInsertedEvent] = useState<IEvent | null>(
    null
  );
  const [detailsToShow, setDetailsToShow] = useState<Array<JSX.Element>>([]);
  const supabase = createClient();

  const getData = async () => {
    const { data } = await supabase
      .from("events")
      .select(
        `
        id,
        title,
        created_at,
        start_time,
        end_time,
        location,
        description,
        guild_id,
        channel_id,
        message_id,
        original_message,
        guilds ( short_name )
      `
      )
      .order("created_at", { ascending: false })
      .limit(1);

    if (data && data.length > 0) {
      // @ts-ignore
      setLastInsertedEvent(data[0]);
      console.log("Last inserted event:", data[0]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  supabase
  .channel("events")
  .on(
    "postgres_changes",
    { event: "INSERT", schema: "public", table: "events" },
    (payload) => {
      console.log("New event inserted:", payload.new);
      getData();
      setDisplayedContent("");
      setDetailsToShow([]);
    }
  )
  .subscribe();

  useEffect(() => {
    if (
      lastInsertedEvent &&
      displayedContent === lastInsertedEvent.original_message
    ) {
      const baseClass = "text-xl animate-fade-in";
      const boldClass = "font-bold";

      const details = [
        <p className={`${baseClass} mt-6`}>Title → <span className={boldClass}>{lastInsertedEvent.title}</span></p>,
        <p key="start" className={baseClass}>
          Start Time → <span className={boldClass}>{formatDateDescription(lastInsertedEvent.start_time)}</span>
        </p>,
        lastInsertedEvent.end_time && (
          <p key="end" className={baseClass}>
            End Time → <span className={boldClass}>{formatTime(lastInsertedEvent.end_time)}</span>
          </p>
        ),
        lastInsertedEvent.location && (
          <p key="location" className={baseClass}>
            Location → <span className={boldClass}>{lastInsertedEvent.location}</span>
          </p>
        ),
        <p key="description" className={`${baseClass} mb-6`}>
          Description → <span className={boldClass}>{lastInsertedEvent.description}</span>
        </p>,
        <div className="animate-fade-in">
          <EventCard event={lastInsertedEvent} />
        </div>,
      ].filter(Boolean); // Filter out any falsey values (e.g., if end_time or location is not present)

      details.forEach((detail, index) => {
        const delay = index === details.length - 1 ? 700 * (index + 1) + 700 : 700 * (index + 1);
        setTimeout(() => {
          setDetailsToShow(
            (prevDetails) => [...prevDetails, detail] as JSX.Element[]
          );
        }, delay); // Increment delay for each detail, except the last one which is set to 1500ms
      });
    }
  }, [displayedContent, lastInsertedEvent]);

  return (
    <PageWrapper>
      <main
        className="max-w-md md:max-w-3xl w-full mx-auto p-4 mt-6"
        style={{ minHeight: "calc(100vh - 220px)" }}
      >
        {lastInsertedEvent && (
          <div>
            {lastInsertedEvent.original_message && (
              <TypeWriter
                content={lastInsertedEvent.original_message}
                speed={25}
                displayedContent={displayedContent}
                setDisplayedContent={setDisplayedContent}
              />
            )}

            {detailsToShow.map((detail) => detail)}
          </div>
        )}
      </main>
    </PageWrapper>
  );
}
