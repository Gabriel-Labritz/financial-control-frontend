import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BalanceCardSkeleton() {
  return (
    <Card className="border-none w-full max-w-[600px]">
      <CardContent className="flex items-center gap-4">
        <Skeleton className="h-32 w-32 shrink-0" />
        <div className="flex flex-col items-center gap-6">
          <div>
            <Skeleton className="h-3 w-22" />
            <Skeleton className="h-12 w-44 mt-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
