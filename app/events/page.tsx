import EventList from "../../components/events/Eventlist";
import PageTitle from "@/components/shared/PageTitle";
import { EventListSearchParams } from "./models";

interface IPage {
  searchParams: EventListSearchParams;
}

export default function Page({ searchParams }: IPage) {
  return (
    <div className="w-full sm:w-1/2 py-6 mx-auto sm:max-w-2xl">
      <PageTitle title="Events" logo />
      <EventList searchParams={searchParams} />
    </div>
  );
}
