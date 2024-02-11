import EventList from "../../components/events/Eventlist";
import EventPageTitle from "@/components/events/EventPageTitle";
import { EventListSearchParams } from "./models";

interface IPage {
  searchParams: EventListSearchParams;
}

export default function Page({ searchParams }: IPage) {
  return (
    <div className="w-full">
      <div className="w-full sm:w-1/2 p-6 mx-auto sm:max-w-2xl">
        <EventPageTitle />
        <EventList searchParams={searchParams} />
      </div>
    </div>
  );
}
