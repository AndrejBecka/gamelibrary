"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { GameCard } from "../cards/card";
import { type Game } from "@prisma/client";
import { CarouselButton } from "./carousel-button";
import { DotPagination } from "./dot-pagination";

interface CarouselSliderProps {
  items: Game[];
}

export function Carousel({ items }: CarouselSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
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

  const handleNext = useCallback(() => {
    setCurrentIndex((state) => {
      const nextIndex = state + itemsPerScreen;
      return nextIndex < items.length ? nextIndex : 0;
    });
  }, [items.length, itemsPerScreen]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((state) => {
      const prevIndex = state - itemsPerScreen;
      return prevIndex >= 0
        ? prevIndex
        : Math.max(items.length - itemsPerScreen, 0);
    });
  }, [items.length, itemsPerScreen]);

  const handleNavigationClick = useCallback(
    (index: number) => {
      setCurrentIndex(index * itemsPerScreen);
    },
    [itemsPerScreen],
  );

  return (
    <div className="group flex flex-col gap-4">
      <div className="relative flex items-center gap-4">
        <CarouselButton
          onClickAction={handlePrev}
          direction="left"
          disabled={currentIndex === 0}
        />

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
                className="hover:z-15 w-1/2 flex-none p-2 transition-transform duration-300 hover:scale-110 sm:w-1/3 lg:w-1/4"
              >
                <GameCard game={item} />
              </div>
            ))}
          </div>
        </div>

        <CarouselButton
          onClickAction={handleNext}
          direction="right"
          disabled={currentIndex >= items.length - itemsPerScreen}
        />
      </div>

      <DotPagination
        items={Math.ceil(items.length / itemsPerScreen)}
        OnClickAction={handleNavigationClick}
        currentIndex={currentIndex}
        itemsPerScreen={itemsPerScreen}
      />
    </div>
  );
}
