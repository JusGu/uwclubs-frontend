import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { getNavigationLink } from "@/lib/pagination";
import Link from "next/link";

interface IEventListFooterNavProps {
  start: Date;
  end: Date;
}

export default function EventListFooterNav(props: IEventListFooterNavProps) {
  const { start, end } = props;
  const nextWeek = new Date(start);
  nextWeek.setDate(nextWeek.getDate() + 7);
  const nextWeekLink = getNavigationLink(nextWeek);
  const prevWeek = new Date(start);
  prevWeek.setDate(prevWeek.getDate() - 7);
  const prevWeekLink = getNavigationLink(prevWeek);
  return (
    <div className="flex justify-between items-center mt-4">
      <Link href={prevWeekLink} passHref>
        <Button variant="outline" className="flex gap-2 p-6 pl-4">
          <ChevronLeft className="h-4 w-4" />
          Previous Week
        </Button>
      </Link>
      <Link href={nextWeekLink} passHref>
        <Button variant="outline" className="flex gap-2 p-6 pr-4">

            Next Week
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
