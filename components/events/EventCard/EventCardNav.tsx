import { ChevronLeft } from "lucide-react";
import { Button } from "../../ui/button";
import Link from "next/link";
import CopyButton from "../CopyButton";

export default function EventCardNav() {

  return (
    <div className="flex justify-between items-center mb-4">
      <Link href="/events" passHref>
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </Link>
      <CopyButton />

    </div>
  );
}
