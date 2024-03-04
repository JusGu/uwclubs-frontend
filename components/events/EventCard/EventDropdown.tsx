
import { IEvent } from "@/app/events/models";
import { Button } from "../../ui/button";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface IEventCardDropdown {
  event: IEvent;
}

export default function EventDropdown(props: IEventCardDropdown) {
  const { event } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[250px]"
        side="left"
        align="start"
        forceMount
      >
        <DropdownMenuGroup>
          <Link
            href={`https://api.uwclubs.com/calendar/?event_id=${event.id}`}
            target="_blank"
          >
            <DropdownMenuItem>Download Event</DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

