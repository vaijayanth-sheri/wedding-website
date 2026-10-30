import React, { useState } from "react";
import "../styles/heritage-frames.css";

interface HeroKalyanaTeraPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  objectPosition?: string;
}

/**
 * HeroKalyanaTeraPhoto
 * An authentic interactive wedding reveal inspired by the Telugu "Kalyana Tera" (Sacred Silk Curtain) ritual.
 * The photo is softly visible as a warm silhouette through a sheer silk veil.
 * Touching or clicking the photo triggers a graceful falling screen animation that reveals the couple in full clarity!
 */
export const HeroKalyanaTeraPhoto: React.FC<HeroKalyanaTeraPhotoProps> = ({
  src,
  alt,
  caption,
  objectPosition = "center 20%",
}) => {
  const [isUnveiled, setIsUnveiled] = useState(false);

  const toggleUnveil = () => {
    setIsUnveiled((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleUnveil();
    }
  };

  return (
    <figure style={{ margin: "0 auto", width: "100%", maxWidth: "440px" }}>
      <div
        className={`kalyana-tera-container ${isUnveiled ? "is-unveiled" : "is-veiled"}`}
        onClick={toggleUnveil}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-pressed={isUnveiled}
        aria-label={
          isUnveiled
            ? "Wedding portrait unveiled. Click to draw curtain again."
            : "Wedding portrait veiled with sacred Kalyana Tera. Touch or click to unveil."
        }
      >
        {/* Main Photo (Softly discernible through veil, crystal clear when unveiled) */}
        <img
          src={src}
          alt={alt}
          className="kalyana-tera-photo"
          loading="eager"
          decoding="sync"
          style={{ objectPosition }}
        />

        {/* Kalyana Tera: Translucent Silk Screen that drops downward on touch */}
        <div className="kalyana-tera-screen" aria-hidden={isUnveiled}>
          {/* Subtle Toranam-inspired silk top hem */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "16px",
              right: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px dashed var(--color-antique-gold)",
              paddingBottom: "6px",
              opacity: 0.75,
            }}
          >
            <span style={{ fontSize: "11px", letterSpacing: "0.08em", color: "var(--color-vermilion)", fontWeight: 700 }}>
              కళ్యాణ తెర
            </span>
            <span style={{ fontSize: "11px", letterSpacing: "0.08em", color: "var(--color-antique-gold)", fontStyle: "italic" }}>
              Kalyana Tera
            </span>
          </div>

          {/* Interactive Center Invitation Badge */}
          <div className="kalyana-tera-badge">
            {/* Auspicious golden lotus / sparkle icon */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="14" stroke="var(--color-antique-gold)" strokeWidth="1.2" strokeDasharray="3 3" />
              <path
                d="M16 6C16 11 20 15 25 16C20 17 16 21 16 26C16 21 12 17 7 16C12 15 16 11 16 6Z"
                fill="var(--color-vermilion)"
              />
              <circle cx="16" cy="16" r="2.5" fill="var(--color-white)" />
            </svg>

            <span
              style={{
                fontFamily: "var(--font-display-en)",
                fontSize: "var(--text-lg)",
                fontWeight: 600,
                color: "var(--color-ink)",
                lineHeight: 1.2,
                marginTop: "2px",
              }}
            >
              Touch to Unveil
            </span>

            <span
              className="font-telugu"
              style={{
                fontSize: "var(--text-sm)",
                color: "var(--color-vermilion)",
                fontWeight: 600,
              }}
            >
              శుభ దర్శనం
            </span>

            {/* Subtle falling arrow cue */}
            <div style={{ marginTop: "4px", color: "var(--color-antique-gold)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
          </div>

          {/* Bottom silk hem footer */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              fontSize: "11px",
              color: "var(--color-ink-muted)",
              letterSpacing: "0.04em",
            }}
          >
            Tap anywhere to lower the screen
          </div>
        </div>

        {/* Small floating pill after screen has fallen */}
        {isUnveiled && (
          <div className="kalyana-tera-status" title="Click to veil again">
            <span>✨ శుభ దర్శనం · Tap to re-veil</span>
          </div>
        )}
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: "var(--space-3)",
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
