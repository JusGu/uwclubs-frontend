import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "../ui/card";

export default function EventCardSkeleton() {
  return (
    <Card className="p-4 flex flex-col space-y-2">
      <Skeleton className="w-32 h-12 rounded" />
      <Skeleton className="w-20 h-4 rounded" />
      <Skeleton className="w-full h-4 rounded" />
      <Skeleton className="w-full h-4 rounded mt-2" />
      <Skeleton className="w-3/4 h-4 rounded mt-2" />
      <Skeleton className="w-24 h-4 rounded" />
    </Card>
  );
}
