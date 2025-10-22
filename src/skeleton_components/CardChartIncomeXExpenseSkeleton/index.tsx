import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CardChartIncomeXExpenseSkeleton() {
  return (
    <Card className="w-full max-w-[500px] border-none">
      <CardHeader className="items-center pb-0">
        <Skeleton className="w-56 h-4" />
      </CardHeader>
      <CardContent className="pb-0 flex justify-center">
        <Skeleton className="w-52 h-[200px]" />
      </CardContent>

      <CardFooter className="flex-col gap-2 text-sm">
        <Skeleton className="h-3 w-52" />
        <Skeleton className="h-10 w-52" />
      </CardFooter>
    </Card>
  );
}
