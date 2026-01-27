
import { cn } from "../../lib/utils";

interface SkeletonProps {
  className?: string;
}

export const Skeleton = ({ className }: SkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-white/5",
        className
      )}
    />
  );
};

export const SkeletonCard = () => (
  <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-6 space-y-4">
    <Skeleton className="h-40 w-full rounded-2xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-6 w-3/4" />
    </div>
    <div className="flex justify-between items-center pt-4 border-t border-white/5">
      <Skeleton className="h-3 w-20" />
      <Skeleton className="h-10 w-10 rounded-full" />
    </div>
  </div>
);
