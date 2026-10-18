import React from "react";
import { WeddingData } from "../data/wedding";
import { ToranamMotif, IkatDivider } from "../components/DecorativeMotif";
import { AuspiciousBanner } from "../components/AuspiciousBanner";
import { PlaceholderPhoto } from "../components/PlaceholderPhoto";
import { ChibiNamaste } from "../components/ChibiIllustrations";

interface HeroSectionProps {
  data: WeddingData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { auspiciousInvocation, couple, mainCeremony, photography } = data;

  const isGroomConfirmed = couple.groom.name !== "TO_BE_CONFIRMED";
  const isBrideConfirmed = couple.bride.name !== "TO_BE_CONFIRMED";
  const isDateConfirmed = mainCeremony.date !== "TO_BE_CONFIRMED";

  return (
    <header
      id="hero"
      className="section section-paper"
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "var(--space-12)",
        paddingBottom: "var(--space-16)",
        position: "relative",
      }}
    >
      {/* Mango Leaf Toranam framing */}
      <ToranamMotif />

      {/* Auspicious invocation (family approved) */}
      <AuspiciousBanner invocation={auspiciousInvocation} />

      <div className="container-hero" style={{ textAlign: "center" }}>
        {/* Short invitation lead */}
        <p
          style={{
            fontFamily: "var(--font-display-en)",
            fontSize: "clamp(1.1rem, 2.5vw, 1.35rem)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--color-ink-muted)",
            marginBottom: "var(--space-4)",
          }}
        >
          Wedding Invitation
        </p>

        {/* Telugu script names line */}
        <div
          className="font-telugu"
          style={{
            fontSize: "clamp(1.35rem, 3.5vw, 1.85rem)",
            color: "var(--color-vermilion)",
            marginBottom: "var(--space-2)",
          }}
        >
          <span>{couple.groom.nameTelugu}</span>
          <span style={{ margin: "0 var(--space-3)", color: "var(--color-antique-gold)" }}>
            పరిణయం
          </span>
          <span>{couple.bride.nameTelugu}</span>
        </div>

        {/* English Primary Names Heading */}
        <h1
          style={{
            fontFamily: "var(--font-display-en)",
            fontSize: "clamp(2.75rem, 7vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "var(--color-ink)",
            margin: "0 auto var(--space-4)",
          }}
        >
          <span>
            {isGroomConfirmed ? couple.groom.name : "Groom"}
            {!isGroomConfirmed && <span className="tbc-pill">TBC</span>}
          </span>
          <span
            style={{
              display: "inline-block",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "0.8em",
              color: "var(--color-antique-gold)",
              margin: "0 var(--space-4)",
            }}
          >
            &amp;
          </span>
          <span>
            {isBrideConfirmed ? couple.bride.name : "Bride"}
            {!isBrideConfirmed && <span className="tbc-pill">TBC</span>}
          </span>
        </h1>

        {/* Couple Invitation Sentence */}
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "var(--color-ink-muted)",
            maxWidth: "580px",
            margin: "0 auto var(--space-6)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {couple.invitationLine}
        </p>

        {/* Centered Ikat Divider */}
        <IkatDivider />

        {/* Date and Venue summary banner */}
        <div
          style={{
            display: "inline-flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "var(--space-3)",
            backgroundColor: "var(--color-white)",
            border: "1px solid var(--color-border-gold)",
            padding: "var(--space-3) var(--space-6)",
            borderRadius: "var(--radius-full)",
            boxShadow: "var(--shadow-sm)",
            marginTop: "var(--space-2)",
            marginBottom: "var(--space-8)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-vermilion)",
              }}
            >
              Date:
            </span>
            <span style={{ fontSize: "var(--text-sm)", fontWeight: 600, color: "var(--color-ink)" }}>
              {isDateConfirmed ? mainCeremony.date : "Date to be confirmed"}
            </span>
            {!isDateConfirmed && <span className="tbc-pill">TBC</span>}
          </div>

          <span style={{ color: "var(--color-antique-gold)" }} aria-hidden="true">
            •
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--text-xs)",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--color-leaf)",
              }}
            >
              Location:
            </span>
            <span style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)" }}>
              {mainCeremony.venueAddress}
            </span>
          </div>
        </div>

        {/* Hero Photo Placeholder / Real Portrait */}
        <div style={{ marginTop: "var(--space-4)" }}>
          <PlaceholderPhoto
            aspectRatio="portrait"
            targetPath={photography.heroImage.src}
            altText={photography.heroImage.alt}
            isAvailable={photography.heroImage.isAvailable}
            caption="Provisional hero photo placement (public/images/hero-couple.jpg)"
          />
        </div>

        {/* Chibi Bride & Groom Namaste Greeting */}
        <div style={{ marginTop: "var(--space-6)" }}>
          <ChibiNamaste />
        </div>

        {/* Gentle scroll cue */}
        <div style={{ marginTop: "var(--space-6)" }}>
          <a
            href="#invitation"
            className="btn btn-secondary"
            aria-label="Scroll down to invitation details"
            style={{
              fontSize: "var(--text-xs)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            <span>Read Invitation</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
