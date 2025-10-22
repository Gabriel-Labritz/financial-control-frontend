import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function AnalyticsCardItemSkeleton() {
  return (
    <Card className="border-none">
      <CardHeader className="flex items-center">
        <div className="flex flex-col gap-2">
          <CardTitle>
            <Skeleton className="h-3 w-32" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-8 w-32" />
          </CardDescription>
        </div>
        <Skeleton className="ml-auto size-12" />
      </CardHeader>
    </Card>
  );
}
