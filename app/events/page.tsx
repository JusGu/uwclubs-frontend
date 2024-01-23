import Timeline from "@/components/events/Timeline";
import EventList from "../../components/events/Eventlist";
import EventPageTitle from "@/components/events/EventPageTitle";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full sm:w-1/2 p-6 mx-auto sm:max-w-2xl">
        <EventPageTitle />
        <div className="flex w-full justify-items-stretch">
          <Timeline />
          <div className="w-full">
            <h2 className={"text-2xl font-bold mb-4"}>Today</h2>
            <EventList />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
