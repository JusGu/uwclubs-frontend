import EventList from "../../components/events/Eventlist";

export default function Page() {


  return (
    <div className="w-full sm:w-1/2 p-6">
      <h1 className="text-2xl font-bold mb-4">Events</h1>
      <EventList />
    </div>
  );
}
