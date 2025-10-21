import { Skeleton } from "@/components/ui/skeleton";

export default function TransactionFormSkeleton() {
  return (
    <div className="space-y-4 p-4">
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-12 w-full" />
      <div className="grid grid-cols-2 gap-2">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
      <Skeleton className="h-20 w-full" />

      <div className="flex justify-end gap-2">
        <Skeleton className="h-10 w-30" />
        <Skeleton className="h-10 w-30" />
      </div>
    </div>
  );
}
