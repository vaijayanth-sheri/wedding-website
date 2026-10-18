import React from "react";
import { MainCeremony } from "../data/wedding";
import { SectionHeader } from "../components/SectionHeader";

interface WeddingDetailsSectionProps {
  ceremony: MainCeremony;
}

export const WeddingDetailsSection: React.FC<WeddingDetailsSectionProps> = ({
  ceremony,
}) => {
  const isDateConfirmed = ceremony.date !== "TO_BE_CONFIRMED";
  const isMuhurthamConfirmed = !ceremony.muhurthamTime.includes("TO_BE_CONFIRMED");
  const isVenueConfirmed = !ceremony.venueName.includes("TO_BE_CONFIRMED");

  return (
    <section id="details" className="section section-paper">
      <div className="container">
        <div className="reveal">
          <SectionHeader
            title="Ceremony & Muhurtham"
            subtitleTelugu={ceremony.eventTitleTelugu}
            description="Essential date, time, and location information for the auspicious occasion"
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "var(--space-6)",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* 1. Date & Day Card */}
          <div
            className="reveal stagger-1 card-interactive"
            style={{
              backgroundColor: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6)",
              border: "1px solid var(--color-border-gold)",
              boxShadow: "var(--shadow-card)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-vermilion-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "var(--space-3)",
                color: "var(--color-vermilion)",
              }}
              aria-hidden="true"
            >
              {/* Calendar icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>

            <span
              style={{
                fontSize: "var(--text-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-ink-subtle)",
              }}
            >
              Auspicious Date
            </span>

            <h3
              style={{
                fontFamily: "var(--font-display-en)",
                fontSize: "var(--text-2xl)",
                color: "var(--color-ink)",
                margin: "var(--space-2) 0",
              }}
            >
              {ceremony.date}
            </h3>

            {!isDateConfirmed && <span className="tbc-pill">Date TBC</span>}

            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", marginTop: "var(--space-2)" }}>
              {ceremony.dayOfWeek}
            </p>
          </div>

          {/* 2. Muhurtham Card */}
          <div
            className="reveal stagger-2 card-interactive"
            style={{
              backgroundColor: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6)",
              border: "1px solid var(--color-vermilion)",
              boxShadow: "var(--shadow-lifted)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Auspicious highlight pill */}
            <span
              style={{
                position: "absolute",
                top: "-12px",
                backgroundColor: "var(--color-vermilion)",
                color: "var(--color-white)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "2px 12px",
                borderRadius: "var(--radius-full)",
              }}
            >
              సుముహూర్తం · Muhurtham
            </span>

            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-vermilion-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "var(--space-3)",
                marginTop: "var(--space-2)",
                color: "var(--color-vermilion)",
              }}
              aria-hidden="true"
            >
              {/* Clock / Sun icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>

            <span
              style={{
                fontSize: "var(--text-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-ink-subtle)",
              }}
            >
              Sacred Lagna Time
            </span>

            <h3
              style={{
                fontFamily: "var(--font-display-en)",
                fontSize: "var(--text-xl)",
                color: "var(--color-vermilion)",
                margin: "var(--space-2) 0",
              }}
            >
              {ceremony.muhurthamTime}
            </h3>

            {!isMuhurthamConfirmed && <span className="tbc-pill">Time TBC</span>}

            <p className="font-telugu" style={{ fontSize: "var(--text-sm)", color: "var(--color-ink)", marginTop: "var(--space-2)" }}>
              {ceremony.muhurthamTelugu}
            </p>
          </div>

          {/* 3. Venue & City Card */}
          <div
            className="reveal stagger-3 card-interactive"
            style={{
              backgroundColor: "var(--color-white)",
              borderRadius: "var(--radius-lg)",
              padding: "var(--space-6)",
              border: "1px solid var(--color-border-gold)",
              boxShadow: "var(--shadow-card)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-leaf-soft)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "var(--space-3)",
                color: "var(--color-leaf)",
              }}
              aria-hidden="true"
            >
              {/* Map pin icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            <span
              style={{
                fontSize: "var(--text-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-ink-subtle)",
              }}
            >
              Venue
            </span>

            <h3
              style={{
                fontFamily: "var(--font-display-en)",
                fontSize: "var(--text-xl)",
                color: "var(--color-ink)",
                margin: "var(--space-2) 0",
              }}
            >
              {ceremony.venueName}
            </h3>

            {!isVenueConfirmed && <span className="tbc-pill">Venue TBC</span>}

            <p style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", marginTop: "var(--space-2)" }}>
              {ceremony.venueAddress}
            </p>
          </div>
        </div>

        {/* Practical tips bar */}
        <div
          className="reveal stagger-4"
          style={{
            maxWidth: "760px",
            margin: "var(--space-8) auto 0",
            padding: "var(--space-4) var(--space-6)",
            backgroundColor: "var(--color-paper-warm)",
            borderRadius: "var(--radius-md)",
            border: "1px dashed var(--color-border-gold)",
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-4)",
            justifyContent: "space-around",
            fontSize: "var(--text-sm)",
          }}
        >
          <div>
            <strong style={{ color: "var(--color-ink)" }}>Parking: </strong>
            <span style={{ color: "var(--color-ink-muted)" }}>{ceremony.parkingNotes}</span>
          </div>
          <div>
            <strong style={{ color: "var(--color-ink)" }}>Travel: </strong>
            <span style={{ color: "var(--color-ink-muted)" }}>{ceremony.travelNotes}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
