import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function ExpensesByCategoryCardSkeleton() {
  return (
    <Card className="border-none">
      <CardHeader>
        <CardDescription>
          <Skeleton className="h-3 w-32" />
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Skeleton className="w-sm h-14" />
        <Skeleton className="w-64 h-14" />
        <Skeleton className="w-full h-14" />
        <Skeleton className="w-52 h-14" />
      </CardContent>
    </Card>
  );
}
