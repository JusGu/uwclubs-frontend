import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { getNavigationLink } from "@/lib/pagination";

interface IPaginationButtonProps {
  start: Date;
  end: Date;
}

export default function PaginationButton({
  start,
  end,
}: IPaginationButtonProps) {
  const nextWeek = new Date(start);
  nextWeek.setUTCDate(nextWeek.getUTCDate() + 7);
  const nextWeekLink = getNavigationLink(nextWeek);
  const prevWeek = new Date(start);
  prevWeek.setUTCDate(prevWeek.getUTCDate() - 7);
  const prevWeekLink = getNavigationLink(prevWeek);

  return (
    <div>
      <Link href={prevWeekLink} passHref>
        <Button className="rounded-r-none" variant="outline">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </Link>
      <Link href={nextWeekLink} passHref>
        <Button className="rounded-l-none border-l-0" variant="outline">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}
