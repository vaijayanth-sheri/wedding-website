import React from "react";
import { AuspiciousInvocation } from "../data/wedding";

interface AuspiciousBannerProps {
  invocation: AuspiciousInvocation;
  className?: string;
}

export const AuspiciousBanner: React.FC<AuspiciousBannerProps> = ({
  invocation,
  className = "",
}) => {
  if (!invocation.enabled) return null;

  return (
    <div
      className={`auspicious-banner ${className}`}
      role="region"
      aria-label="Auspicious Invocation"
      style={{
        textAlign: "center",
        padding: "var(--space-2) var(--space-4)",
        marginBottom: "var(--space-6)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--space-1)",
        }}
      >
        <span
          className="font-telugu"
          style={{
            color: "var(--color-vermilion)",
            fontSize: "clamp(1.125rem, 2.5vw, 1.35rem)",
            fontWeight: 600,
            letterSpacing: "0.08em",
          }}
        >
          {invocation.telugu}
        </span>

        {invocation.transliteration && (
          <span
            style={{
              fontFamily: "var(--font-display-en)",
              fontSize: "var(--text-sm)",
              letterSpacing: "0.06em",
              color: "var(--color-ink-muted)",
              fontStyle: "italic",
            }}
          >
            {invocation.transliteration}
          </span>
        )}
      </div>
    </div>
  );
};
