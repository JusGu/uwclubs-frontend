import EventCard from "@/components/events/EventCard";

export default function Page({ params }: { params: {event_id: string } }) {
  console.log(params.event_id);
    return <div className="w-full sm:w-1/2 p-6">
      <EventCard event_id={params.event_id} />
    </div>
  }