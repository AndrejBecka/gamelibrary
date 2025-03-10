"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "~/lib/utils";

interface CarouselButtonProps {
  onClickAction: () => void;
  direction: "left" | "right";
  disabled?: boolean;
}

export const CarouselButton = ({
  onClickAction,
  direction,
  disabled,
}: CarouselButtonProps) => {
  return (
    <button
      onClick={onClickAction}
      disabled={disabled}
      className={cn(
        `neon-button absolute z-20 -translate-x-1/2 rounded-full p-2 px-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 disabled:opacity-0 group-hover:opacity-100`,
        direction === "left" ? "left-10" : "right-0",
        disabled ? "invisible" : "visible",
      )}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-6 w-6 text-white" />
      ) : (
        <ChevronRight className="h-6 w-6 text-white" />
      )}
    </button>
  );
};
