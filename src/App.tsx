import React from "react";
import { weddingData } from "./data/wedding";
import { FloatingParticles } from "./components/FloatingParticles";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { HeroSection } from "./sections/HeroSection";
import { InvitationSection } from "./sections/InvitationSection";
import { WeddingDetailsSection } from "./sections/WeddingDetailsSection";
import { CeremonyScheduleSection } from "./sections/CeremonyScheduleSection";
import { CoupleSection } from "./sections/CoupleSection";
import { VenueSection } from "./sections/VenueSection";
import { ClosingSection } from "./sections/ClosingSection";

export const App: React.FC = () => {
  useScrollReveal();

  return (
    <div className="wedding-app" style={{ position: "relative" }}>
      {/* Ambient background particles (Talambralu & petals drift) */}
      <FloatingParticles />
      {/* Accessible skip link for keyboard & screen reader users */}
      <a href="#main-content" className="skip-link">
        Skip to main invitation content
      </a>

      {/* Lightweight sticky navigation indicator */}
      <nav
        aria-label="Invitation Sections"
        style={{
          position: "sticky",
          top: "var(--space-3)",
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          padding: "0 var(--space-4)",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            pointerEvents: "auto",
            display: "inline-flex",
            alignItems: "center",
            gap: "var(--space-2)",
            backgroundColor: "rgba(248, 245, 239, 0.92)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--color-border-gold)",
            padding: "var(--space-2) var(--space-4)",
            borderRadius: "var(--radius-full)",
            boxShadow: "var(--shadow-sm)",
          }}
        >
          <a
            href="#hero"
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              textDecoration: "none",
              color: "var(--color-ink)",
              padding: "4px 8px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            Top
          </a>
          <span style={{ color: "var(--color-border)" }}>|</span>
          <a
            href="#invitation"
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              textDecoration: "none",
              color: "var(--color-ink)",
              padding: "4px 8px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            Invitation
          </a>
          <span style={{ color: "var(--color-border)" }}>|</span>
          <a
            href="#details"
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              textDecoration: "none",
              color: "var(--color-vermilion)",
              padding: "4px 8px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            Muhurtham
          </a>
          <span style={{ color: "var(--color-border)" }}>|</span>
          <a
            href="#schedule"
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              textDecoration: "none",
              color: "var(--color-ink)",
              padding: "4px 8px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            Schedule
          </a>
          <span style={{ color: "var(--color-border)" }}>|</span>
          <a
            href="#venue"
            style={{
              fontSize: "var(--text-xs)",
              fontWeight: 600,
              textDecoration: "none",
              color: "var(--color-ink)",
              padding: "4px 8px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            Venue
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection data={weddingData} />

      {/* Main Content Area */}
      <main id="main-content">
        <InvitationSection
          hosts={weddingData.familyHosts}
          couple={weddingData.couple}
        />

        <WeddingDetailsSection ceremony={weddingData.mainCeremony} />

        <CeremonyScheduleSection schedule={weddingData.schedule} />

        <CoupleSection
          couple={weddingData.couple}
          photography={weddingData.photography}
        />

        <VenueSection ceremony={weddingData.mainCeremony} />
      </main>

      {/* Closing Section */}
      <ClosingSection closing={weddingData.closing} />
    </div>
  );
};

export default App;
