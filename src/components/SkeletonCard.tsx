import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex space-y-3 w-4/5 items-center justify-evenly gap-4 lg:w-[90%] lg:flex-col">
      <Skeleton className="h-full w-3/6 rounded-xl p-10 lg:w-[90%]" />
      <div className="space-y-6 w-3/6 p-10 lg:w-full">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-9 w-full" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-8 w-full" />
      </div>
    </div>
  );
}
