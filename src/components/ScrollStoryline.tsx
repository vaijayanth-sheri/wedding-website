import React, { useEffect, useState } from "react";

/**
 * ScrollStoryline
 * A radiant sacred bridal thread (Kankanam / Kalava) running along the left margin.
 * Incorporates:
 * - Braided dual-tone thread track
 * - Dynamic glowing seed-bead that blooms into an auspicious golden medallion
 * - Glowing pulse trail
 */
export const ScrollStoryline: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let rafId: number;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          const currentProgress = Math.min(1, Math.max(0, window.scrollY / totalHeight));
          setScrollProgress(currentProgress);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="scroll-storyline-track"
      aria-hidden="true"
    >
      {/* Background patterned guidelines */}
      <div className="scroll-storyline-braid" />

      {/* Main active unrolling thread */}
      <div
        className="scroll-storyline-fill"
        style={{
          transform: `scaleY(${scrollProgress})`,
        }}
      />

      {/* Radiant Leading Medallion */}
      <div
        className="scroll-storyline-node"
        style={{
          top: `calc(${scrollProgress * 100}% - 9px)`,
          opacity: scrollProgress > 0.005 ? 1 : 0,
        }}
      >
        <div className="scroll-storyline-core" />
        <div className="scroll-storyline-aura" />
      </div>
    </div>
  );
};
