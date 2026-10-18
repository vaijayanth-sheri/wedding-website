import React from "react";
import { MainCeremony } from "../data/wedding";
import { SectionHeader } from "../components/SectionHeader";

interface VenueSectionProps {
  ceremony: MainCeremony;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ ceremony }) => {
  const isDirectionsReady =
    ceremony.directionsUrl &&
    ceremony.directionsUrl.length > 0 &&
    !ceremony.directionsUrl.includes("TO_BE_CONFIRMED");

  return (
    <section id="venue" className="section section-paper">
      <div className="container-narrow">
        <SectionHeader
          title="Venue & Directions"
          subtitleTelugu="వేదిక వివరాలు &amp; మార్గము"
          description="How to reach the wedding venue comfortably"
        />

        <div
          style={{
            backgroundColor: "var(--color-white)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-gold)",
            boxShadow: "var(--shadow-card)",
            padding: "var(--space-8)",
            textAlign: "center",
          }}
        >
          {/* Location Pin Icon */}
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--color-vermilion-soft)",
              color: "var(--color-vermilion)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto var(--space-4)",
            }}
            aria-hidden="true"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display-en)",
              fontSize: "var(--text-2xl)",
              color: "var(--color-ink)",
              marginBottom: "var(--space-2)",
            }}
          >
            {ceremony.venueName}
          </h3>

          <p
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-ink-muted)",
              maxWidth: "460px",
              margin: "0 auto var(--space-6)",
              lineHeight: 1.6,
            }}
          >
            {ceremony.venueAddress}
          </p>

          {/* External Google Maps Button */}
          <div style={{ marginBottom: "var(--space-8)" }}>
            {isDirectionsReady ? (
              <a
                href={ceremony.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <span>Open in Google Maps</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            ) : (
              <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "var(--space-2)" }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  disabled
                  style={{ opacity: 0.6, cursor: "not-allowed" }}
                >
                  <span>Google Maps link pending confirmation</span>
                </button>
                <span className="tbc-pill">Map URL TBC</span>
              </div>
            )}
          </div>

          {/* Venue Notes Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "var(--space-4)",
              paddingTop: "var(--space-6)",
              borderTop: "1px solid var(--color-border)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                backgroundColor: "var(--color-paper)",
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-leaf)",
                  marginBottom: "var(--space-1)",
                  fontWeight: 700,
                }}
              >
                Parking &amp; Arrival
              </h4>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)" }}>
                {ceremony.parkingNotes}
              </p>
            </div>

            <div
              style={{
                backgroundColor: "var(--color-paper)",
                padding: "var(--space-4)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-leaf)",
                  marginBottom: "var(--space-1)",
                  fontWeight: 700,
                }}
              >
                Transport &amp; Stay
              </h4>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)" }}>
                {ceremony.travelNotes}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
