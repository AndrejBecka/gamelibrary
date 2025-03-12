"use client";

import { cn } from "~/lib/utils";

interface DotPaginationProps {
  items: number;
  OnClickAction: (index: number) => void;
  currentIndex: number;
  itemsPerScreen: number;
}

export const DotPagination = ({
  items,
  OnClickAction,
  currentIndex,
  itemsPerScreen,
}: DotPaginationProps) => {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: items }).map((_, index) => (
        <button
          key={index}
          onClick={() => OnClickAction(index)}
          className={cn(
            "h-2 w-2 rounded-full transition-all duration-300",
            Math.floor(currentIndex / itemsPerScreen) === index
              ? "w-4 bg-white"
              : "bg-white/50 hover:bg-white/75",
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};
