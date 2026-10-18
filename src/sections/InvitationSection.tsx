import React from "react";
import { FamilyHosts, CoupleData } from "../data/wedding";
import { SectionHeader } from "../components/SectionHeader";
import { MugguKnot } from "../components/DecorativeMotif";

interface InvitationSectionProps {
  hosts: FamilyHosts;
  couple: CoupleData;
}

export const InvitationSection: React.FC<InvitationSectionProps> = ({
  hosts,
  couple,
}) => {
  return (
    <section id="invitation" className="section section-warm">
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <SectionHeader
          title="With Joyful Hearts"
          subtitleTelugu="సాదర ఆహ్వానం"
          description="In the presence of elders, family, and cherished friends"
        />

        {/* Telugu traditional invitation lines */}
        <div
          className="font-telugu"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
            lineHeight: 1.8,
            color: "var(--color-vermilion)",
            marginBottom: "var(--space-6)",
          }}
        >
          <p>{hosts.invitationTextTelugu}</p>
        </div>

        {/* English invitation text */}
        <p
          style={{
            fontSize: "var(--text-lg)",
            lineHeight: 1.8,
            color: "var(--color-ink)",
            marginBottom: "var(--space-8)",
          }}
        >
          {hosts.invitationText}
        </p>

        <MugguKnot />

        {/* Family Hosts Card / Framing */}
        <div
          style={{
            backgroundColor: "var(--color-white)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-gold)",
            padding: "var(--space-8) var(--space-6)",
            marginTop: "var(--space-6)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display-en)",
              fontSize: "var(--text-xl)",
              color: "var(--color-ink)",
              marginBottom: "var(--space-4)",
            }}
          >
            Invited by the Families
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "var(--space-6)",
              marginTop: "var(--space-4)",
              textAlign: "center",
            }}
          >
            {/* Groom's Family */}
            <div
              style={{
                padding: "var(--space-4)",
                borderRight: "1px solid var(--color-border)",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-leaf)",
                  fontWeight: 700,
                  marginBottom: "var(--space-2)",
                }}
              >
                Groom's Parents &amp; Family
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display-en)",
                  fontSize: "var(--text-lg)",
                  color: "var(--color-ink)",
                  fontWeight: 600,
                }}
              >
                {couple.groom.parents}
              </p>
              <p className="font-telugu" style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", marginTop: "var(--space-1)" }}>
                {couple.groom.parentsTelugu}
              </p>
            </div>

            {/* Bride's Family */}
            <div style={{ padding: "var(--space-4)" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-xs)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-leaf)",
                  fontWeight: 700,
                  marginBottom: "var(--space-2)",
                }}
              >
                Bride's Parents &amp; Family
              </span>
              <p
                style={{
                  fontFamily: "var(--font-display-en)",
                  fontSize: "var(--text-lg)",
                  color: "var(--color-ink)",
                  fontWeight: 600,
                }}
              >
                {couple.bride.parents}
              </p>
              <p className="font-telugu" style={{ fontSize: "var(--text-sm)", color: "var(--color-ink-muted)", marginTop: "var(--space-1)" }}>
                {couple.bride.parentsTelugu}
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "var(--space-6)",
              paddingTop: "var(--space-4)",
              borderTop: "1px dashed var(--color-border)",
              fontSize: "var(--text-xs)",
              color: "var(--color-ink-subtle)",
            }}
          >
            <span>Formal host names: </span>
            <strong>{hosts.hostsSummary}</strong>
          </div>
        </div>
      </div>
    </section>
  );
};
