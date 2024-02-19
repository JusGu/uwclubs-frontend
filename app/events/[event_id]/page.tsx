import EventCard from "@/components/events/EventCard";
import EventCardNav from "@/components/events/EventCardNav";

export default function Page({ params }: { params: { event_id: string } }) {
  return (
    <div className="w-full">
      <div className="w-full sm:w-1/2 p-6 mx-auto sm:max-w-2xl">
        <EventCardNav />
        <EventCard event_id={params.event_id} />
      </div>
    </div>
  );
}
