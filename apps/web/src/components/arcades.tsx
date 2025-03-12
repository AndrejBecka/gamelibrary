"use client";

import { useEffect, useRef } from "react";
import "./arcades.css";

export function Arcades() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create sprites
    const createSprite = (className: string, count: number) => {
      for (let i = 0; i < count; i++) {
        const element = document.createElement("div");
        element.className = className;

        // Random position
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;

        // Random animation delay
        element.style.animationDelay = `${Math.random() * 5}s`;

        containerRef.current?.appendChild(element);
      }
    };

    // Create multiple instances of each sprite
    createSprite("coin", 5);
    createSprite("ghost", 3);
    createSprite("invader", 4);
    createSprite("tetris l-piece", 3);
    createSprite("pixel-star", 20);

    // Cleanup
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} className="arcade-sprites" />;
}
