"use client";

import { useEffect, useState, useRef } from "react";

const COLORS = [
  "#F97316", // brand-orange
  "#EC4899", // brand-pink
  "#8B5CF6", // brand-purple
  "#F59E0B"  // brand-yellow
];

export default function MouseEffect() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Track coordinates of 6 trailing points
  const pointsRef = useRef<{ x: number; y: number }[]>(
    Array(6).fill({ x: 0, y: 0 })
  );

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Animation Loop
    let animFrameId: number;
    const updatePosition = () => {
      // 1. Update Background Cursor Blob
      const blob = document.getElementById("cursor-blob");
      if (blob) {
        blob.style.transform = `translate(${coords.x - 200}px, ${coords.y - 200}px)`;
      }

      // 2. Update Foreground Cursor Trail
      const points = pointsRef.current;
      points[0] = { x: coords.x, y: coords.y };

      for (let i = 1; i < points.length; i++) {
        const dx = points[i - 1].x - points[i].x;
        const dy = points[i - 1].y - points[i].y;
        points[i] = {
          x: points[i].x + dx * 0.35,
          y: points[i].y + dy * 0.35,
        };
      }

      for (let i = 0; i < points.length; i++) {
        const dot = document.getElementById(`cursor-dot-${i}`);
        if (dot) {
          const baseSize = 12 - i * 1.5;
          const size = isHovered ? baseSize * 1.5 : baseSize;
          dot.style.width = `${size}px`;
          dot.style.height = `${size}px`;
          dot.style.transform = `translate(${points[i].x - size / 2}px, ${points[i].y - size / 2}px)`;
        }
      }

      animFrameId = requestAnimationFrame(updatePosition);
    };

    animFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animFrameId);
    };
  }, [coords.x, coords.y, isHovered]);

  if (!isVisible) return null;

  return (
    <>
      {/* Global Style overrides to hide default cursor */}
      <style jsx global>{`
        @media (pointer: fine) {
          body, a, button, [role="button"], .cursor-pointer {
            cursor: none !important;
          }
        }
      `}</style>

      {/* 1. Background Cursor Blob (Following mouse behind elements) */}
      <div
        id="cursor-blob"
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none select-none z-[-1] transition-transform duration-100 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(255, 255, 255, 0) 70%)`,
        }}
      />

      {/* 2. Foreground Cursor Trail Dots */}
      <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden select-none">
        {Array(6)
          .fill(0)
          .map((_, i) => {
            const color = COLORS[i % COLORS.length];
            return (
              <div
                id={`cursor-dot-${i}`}
                key={i}
                className="fixed top-0 left-0 rounded-full pointer-events-none transition-[width,height] duration-200 ease-out"
                style={{
                  backgroundColor: color,
                  opacity: 1 - i * 0.15,
                  boxShadow: `0 0 10px ${color}80`,
                  zIndex: 9999 - i,
                }}
              />
            );
          })}
      </div>
    </>
  );
}
