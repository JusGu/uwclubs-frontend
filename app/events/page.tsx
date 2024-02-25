import EventList from "../../components/events/Eventlist";
import PageTitle from "@/components/shared/PageTitle";
import { EventListSearchParams } from "./models";
import { Input } from "@/components/ui/input";
import SearchPageWrapper from "@/components/events/SearchPageWrapper";

interface IPage {
  searchParams: EventListSearchParams;
}

export default function Page({ searchParams }: IPage) {
  return (
    <SearchPageWrapper>
      <div className="w-full sm:w-1/2 mx-auto px-6 sm:max-w-2xl">
      <EventList searchParams={searchParams} />
      </div>
    </SearchPageWrapper>
  );
}
