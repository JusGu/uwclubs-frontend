import EventList from "../../components/events/Eventlist";
import EventPageTitle from "@/components/events/EventPageTitle";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full sm:w-1/2 p-6 mx-auto sm:max-w-2xl">
        <EventPageTitle />
        <EventList />
      </div>
    </div>
  );
}
