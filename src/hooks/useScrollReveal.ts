import { useEffect } from "react";

/**
 * useScrollReveal
 * Observes all elements with the `.reveal` class using the native
 * IntersectionObserver API and applies `.is-revealed` when they enter the viewport.
 * Configured with a deeper viewport threshold so the user clearly witnesses the
 * entrance animation occurring as they scroll.
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".reveal");

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -70px 0px", // Waits until element is visibly inside viewport before revealing
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
