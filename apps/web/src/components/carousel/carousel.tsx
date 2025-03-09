"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GameCard } from "../cards/card";
import { type Game } from "@prisma/client";
import { cn } from "~/lib/utils";
import { CarouselButton } from "./carousel-button";

interface CarouselSliderProps {
  items: Game[];
}

export function Carousel({ items }: CarouselSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [itemsPerScreen, setItemsPerScreen] = useState(4);

  useEffect(() => {
    const updateItemsPerScreen = () => {
      if (window.innerWidth < 640) setItemsPerScreen(2);
      else if (window.innerWidth < 1024) setItemsPerScreen(3);
      else setItemsPerScreen(4);
    };

    updateItemsPerScreen();
    window.addEventListener("resize", updateItemsPerScreen);
    return () => window.removeEventListener("resize", updateItemsPerScreen);
  }, []);

  const handleNext = () => {
    const nextIndex = currentIndex + itemsPerScreen;
    if (nextIndex < items.length) {
      setCurrentIndex(nextIndex);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - itemsPerScreen;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    } else {
      setCurrentIndex(Math.max(items.length - itemsPerScreen, 0)); // Go to end
    }
  };

  return (
    <div
      className="group flex flex-col gap-4"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative flex items-center gap-4">
        {/* Left Arrow */}
        <CarouselButton
          onClick={handlePrev}
          direction="left"
          disabled={currentIndex === 0}
        />

        {/* Carousel Container */}
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsPerScreen}%)`,
            }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className={`w-1/2 flex-none p-2 transition-transform duration-300 sm:w-1/3 lg:w-1/4 ${isHovering ? "hover:z-15 hover:scale-110" : ""}`}
              >
                <GameCard game={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <CarouselButton
          onClick={handleNext}
          direction="right"
          disabled={currentIndex >= items.length - itemsPerScreen}
        />
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: Math.ceil(items.length / itemsPerScreen) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsPerScreen)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / itemsPerScreen) === index
                  ? "w-4 bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ),
        )}
      </div>
    </div>
  );
}
