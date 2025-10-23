import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function MonthyCardOverviewSkeleton() {
  return (
    <Card className="flex-1 border-none">
      <CardHeader>
        <CardDescription className="text-sm font-medium text-muted-foreground select-none">
          <Skeleton className="h-3 w-28" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-[300px] w-full" />
      </CardContent>
    </Card>
  );
}
