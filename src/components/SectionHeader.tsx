import React from "react";
import { IkatDivider } from "./DecorativeMotif";

interface SectionHeaderProps {
  title: string;
  subtitleTelugu?: string;
  description?: string;
  alignment?: "center" | "left";
  showDivider?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitleTelugu,
  description,
  alignment = "center",
  showDivider = true,
  className = "",
}) => {
  return (
    <header
      className={`section-header ${className}`}
      style={{
        textAlign: alignment,
        marginBottom: "var(--space-8)",
      }}
    >
      {subtitleTelugu && (
        <div className="section-header-mask">
          <p
            className="font-telugu section-header-line"
            style={{
              color: "var(--color-vermilion)",
              fontSize: "var(--text-lg)",
              fontWeight: 600,
              marginBottom: "var(--space-1)",
            }}
          >
            {subtitleTelugu}
          </p>
        </div>
      )}

      <div className="section-header-mask">
        <h2
          className="section-header-line"
          style={{
            fontFamily: "var(--font-display-en)",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            color: "var(--color-ink)",
            fontWeight: 600,
            letterSpacing: "0.01em",
          }}
        >
          {title}
        </h2>
      </div>

      {description && (
        <p
          style={{
            maxWidth: "600px",
            margin: alignment === "center" ? "var(--space-2) auto 0" : "var(--space-2) 0 0",
            fontSize: "var(--text-base)",
            color: "var(--color-ink-muted)",
          }}
        >
          {description}
        </p>
      )}

      {showDivider && (
        <div style={{ marginTop: "var(--space-1)", marginBottom: "var(--space-2)" }}>
          <IkatDivider />
        </div>
      )}
    </header>
  );
};
