import React from "react";

interface PlaceholderPhotoProps {
  aspectRatio?: "portrait" | "landscape" | "square";
  targetPath: string;
  altText: string;
  isAvailable?: boolean;
  caption?: string;
  className?: string;
}

export const PlaceholderPhoto: React.FC<PlaceholderPhotoProps> = ({
  aspectRatio = "portrait",
  targetPath,
  altText,
  isAvailable = false,
  caption,
  className = "",
}) => {
  const ratioStyles: Record<string, React.CSSProperties> = {
    portrait: { aspectRatio: "3 / 4", maxHeight: "540px" },
    landscape: { aspectRatio: "16 / 9", maxHeight: "420px" },
    square: { aspectRatio: "1 / 1", maxHeight: "420px" },
  };

  return (
    <figure
      className={`photo-container ${className}`}
      style={{
        margin: "0 auto",
        width: "100%",
        maxWidth: aspectRatio === "portrait" ? "420px" : "680px",
      }}
    >
      <div
        className="photo-frame card-interactive photo-reveal-container"
        style={{
          position: "relative",
          width: "100%",
          ...ratioStyles[aspectRatio],
          backgroundColor: "var(--color-placeholder-bg)",
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          border: "1px solid var(--color-border-gold)",
          boxShadow: "var(--shadow-card)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "var(--space-6)",
          textAlign: "center",
        }}
      >
        {/* Cinematic vertical wipe overlay */}
        <div className="photo-reveal-curtain" aria-hidden="true" />

        {isAvailable ? (
          <img
            src={targetPath}
            alt={altText}
            className="photo-reveal-content"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            role="img"
            aria-label={`${altText} (Placeholder)`}
            className="photo-reveal-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-3)",
              maxWidth: "280px",
            }}
          >
            {/* Subtle decorative botanical watermark */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: 0.4 }}
              aria-hidden="true"
            >
              <rect
                x="4"
                y="4"
                width="40"
                height="40"
                rx="6"
                stroke="var(--color-leaf)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <circle cx="16" cy="16" r="4" fill="var(--color-antique-gold)" />
              <path
                d="M8 36L18 24L28 34L36 26L42 34"
                stroke="var(--color-leaf)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span
              style={{
                fontFamily: "var(--font-display-en)",
                fontSize: "var(--text-lg)",
                color: "var(--color-ink)",
                fontWeight: 600,
              }}
            >
              Couple Photograph
            </span>

            <span className="tbc-pill">
              Photo to be added
            </span>

            <code
              style={{
                display: "block",
                fontFamily: "monospace",
                fontSize: "var(--text-xs)",
                color: "var(--color-ink-subtle)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "2px 6px",
                borderRadius: "var(--radius-sm)",
                wordBreak: "break-all",
              }}
            >
              {targetPath}
            </code>
          </div>
        )}
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: "var(--space-2)",
            fontSize: "var(--text-xs)",
            color: "var(--color-ink-subtle)",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
