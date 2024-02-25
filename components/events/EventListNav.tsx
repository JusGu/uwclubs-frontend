import { getWeekDescriptor } from "@/lib/pagination";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Clock, ALargeSmall, MapPin, Users } from "lucide-react";

interface IEventListNav {
  totalWeeklyEventsCount: number;
  startOfWeek: Date;
  isSortSelected: boolean; // Added prop
  isFilterSelected: boolean; // Added prop
}
export default function EventListNav(props: IEventListNav) {
  const {
    startOfWeek,
    totalWeeklyEventsCount,
    isSortSelected,
    isFilterSelected,
  } = props;
  const weekDescriptor = getWeekDescriptor(startOfWeek, totalWeeklyEventsCount);
  return (
    <div className="flex justify-between items-center my-4">
      <h2 className="text-md">{weekDescriptor}</h2>
      <div className="flex gap-2 items-center">
        <Sort isSortSelected={isSortSelected} /> 
        <Filter isFilterSelected={isFilterSelected} />
      </div>
    </div>
  );
}

function Sort({ isSortSelected }: { isSortSelected: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={isSortSelected ? "default" : "outline"}
          className="h-8"
        >
          Sort
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
        <DropdownMenuItem>
            <ALargeSmall className="mr-2 h-4 w-4 stroke-[2]" />
            Name
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4 stroke-[2]" />
            Club
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Clock className="mr-2 h-4 w-4 stroke-[2]" />
            Start Time
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Clock className="mr-2 h-4 w-4 stroke-[2]" />
            End Time
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MapPin className="mr-2 h-4 w-4 stroke-[2]" />
            Location
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Filter({ isFilterSelected }: { isFilterSelected: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={isFilterSelected ? "default" : "outline"} className="h-8">
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
        <DropdownMenuItem>
            <ALargeSmall className="mr-2 h-4 w-4 stroke-[2]" />
            Name
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4 stroke-[2]" />
            Club
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Clock className="mr-2 h-4 w-4 stroke-[2]" />
            Start Time
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Clock className="mr-2 h-4 w-4 stroke-[2]" />
            End Time
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MapPin className="mr-2 h-4 w-4 stroke-[2]" />
            Location
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
