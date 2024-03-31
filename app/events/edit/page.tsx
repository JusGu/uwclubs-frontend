import EditableEventCard from "@/components/events/EventCard/EditableEventCard";
import EventCardNav from "@/components/events/EventCard/EventCardNav";

export default function Page({ searchParams }: { searchParams: { form: string, secret: string } }) {
  return (
    <div className="w-full">
      <div className="w-full sm:w-1/2 p-3 sm:p-6 mx-auto sm:max-w-2xl">
        <EventCardNav />
        <EditableEventCard event_id={"1215006672997580851"} />
        <p>Form: {searchParams.form}</p>
        <p>Secret: {searchParams.secret}</p>
      </div>
    </div>
  );
}
