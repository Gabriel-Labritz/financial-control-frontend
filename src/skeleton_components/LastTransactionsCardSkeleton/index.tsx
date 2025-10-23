import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LastTransactionsCardSkeleton() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardDescription className="flex items-center">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="ml-auto h-6 w-32" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="grid gap-2">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </article>
      </CardContent>
    </Card>
  );
}
