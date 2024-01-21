import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "../ui/card";

export default function EventPreviewSkeleton() {
  return (
    <Card className="p-4 flex flex-col space-y-2 relative overflow-hidden z-10 pl-14">
        <div className="absolute h-full w-3 bg-primary z-0 left-0 top-0"/>

          <Skeleton className="w-32 h-12 rounded" />
          <Skeleton className="w-20 h-4 rounded" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-full h-4 rounded mt-2" />
        <Skeleton className="w-3/4 h-4 rounded mt-2" />
    </Card>
  );
}