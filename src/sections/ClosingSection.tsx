import React from "react";
import { ClosingBlessing } from "../data/wedding";
import { IkatDivider, BotanicalPanicle } from "../components/DecorativeMotif";

interface ClosingSectionProps {
  closing: ClosingBlessing;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ closing }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="closing"
      className="section section-warm"
      style={{
        textAlign: "center",
        paddingTop: "var(--space-16)",
        paddingBottom: "var(--space-12)",
        position: "relative",
      }}
    >
      <div className="container-narrow">
        <BotanicalPanicle />

        <div style={{ marginTop: "var(--space-4)", marginBottom: "var(--space-4)" }}>
          <p
            className="font-telugu"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
              color: "var(--color-vermilion)",
              fontWeight: 600,
              marginBottom: "var(--space-2)",
            }}
          >
            {closing.eldersBlessingTelugu}
          </p>

          <p
            style={{
              fontFamily: "var(--font-display-en)",
              fontSize: "clamp(1.25rem, 2.5vw, 1.6rem)",
              fontStyle: "italic",
              color: "var(--color-ink)",
              maxWidth: "520px",
              margin: "0 auto var(--space-4)",
            }}
          >
            "{closing.eldersBlessing}"
          </p>
        </div>

        <IkatDivider />

        <p
          style={{
            fontSize: "var(--text-lg)",
            color: "var(--color-ink)",
            fontWeight: 500,
            marginTop: "var(--space-4)",
          }}
        >
          {closing.signoff}
        </p>

        <p
          className="font-telugu"
          style={{
            fontSize: "var(--text-base)",
            color: "var(--color-ink-muted)",
            marginTop: "var(--space-1)",
          }}
        >
          {closing.signoffTelugu}
        </p>

        {/* Scroll back to top button */}
        <div style={{ marginTop: "var(--space-8)" }}>
          <button
            type="button"
            onClick={scrollToTop}
            className="btn btn-secondary"
            aria-label="Back to top of wedding invitation"
            style={{
              fontSize: "var(--text-xs)",
              padding: "var(--space-2) var(--space-4)",
              minHeight: "40px",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 10L8 6L4 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to Top</span>
          </button>
        </div>

        {/* Colophon & Family attribution */}
        <div
          style={{
            marginTop: "var(--space-10)",
            paddingTop: "var(--space-4)",
            borderTop: "1px solid var(--color-border)",
            fontSize: "var(--text-xs)",
            color: "var(--color-ink-subtle)",
          }}
        >
          <p>
            Hindu Telugu Wedding Celebration · Rooted in Telangana Heritage
          </p>
          <p style={{ marginTop: "4px" }}>
            Invitation text &amp; details are subject to family confirmation.
          </p>
        </div>
      </div>
    </footer>
  );
};
