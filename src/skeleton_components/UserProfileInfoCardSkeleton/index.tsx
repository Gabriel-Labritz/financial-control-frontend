import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function UserProfileInfoCardSkeleton() {
  return (
    <Card className="border-none w-full xl:w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Informações da Conta</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-4">
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-full" />
      </CardContent>
      <Separator />
      <CardFooter className="flex flex-col justify-center">
        <Skeleton className="h-8 w-30" />
      </CardFooter>
    </Card>
  );
}
