import { Skeleton } from "@/components/ui/skeleton";

export default function UserProfileAvatarSkeleton() {
  return (
    <div className="flex justify-center items-center gap-4">
      <div>
        <Skeleton className="size-22 rounded-full" />
      </div>
      <div className="hidden md:flex flex-col gap-2">
        <Skeleton className="h-6 w-30" />
        <Skeleton className="h-3 w-40" />
      </div>
    </div>
  );
}
