"use client";
import { useState } from "react";
import { event } from "./models";
import { SupabaseClient } from "@supabase/supabase-js";

interface iEventListProps {
    events: event[]
}

export default function EventList({ events }: iEventListProps) {
  
    return (
        <ul>
          {events?.map((event) => (
            <li key={event.id} className="mb-4">
              <EventComponent event={event} />
            </li>
          ))}
        </ul>
    )
}

const EventComponent = ({ event }: { event: event }) => {
    const formatTime = (time: string) => {
      const date = new Date(time);
      return date.toTimeString().split(" ")[0];
    }
    return (
      <div className="p-4 bg-white rounded-lg">
        <h2 className="mb-2 text-xl font-bold text-gray-700">{event.title}</h2>
        <p className="text-gray-600">
          Start Time: {formatTime(event.start_time)}
        </p>
        <p className="text-gray-600">End Time: {formatTime(event.end_time)}</p>
        <p className="text-gray-600">Location: {event.location}</p>
        {event.link && (
          <a href={event.link} className="text-blue-500 hover:underline">
            Event Link
          </a>
        )}
      </div>
    );
  };