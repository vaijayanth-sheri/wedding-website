import React from "react";
import { CoupleData, PhotographyConfig } from "../data/wedding";
import { SectionHeader } from "../components/SectionHeader";
import { BotanicalPanicle } from "../components/DecorativeMotif";
import { HeritageArchFrame } from "../components/HeritageArchFrame";
import { ChibiWalking } from "../components/ChibiIllustrations";

interface CoupleSectionProps {
  couple: CoupleData;
  photography: PhotographyConfig;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({
  couple,
  photography,
}) => {
  const { story, groom, bride } = couple;

  if (!story.enabled) {
    return null;
  }

  return (
    <section id="roots-and-growth" className="section section-sage">
      <div className="container">
        <div className="reveal">
          <SectionHeader
            title={story.headline}
            subtitleTelugu="ప్రేమానుబంధం · సంస్కృతి"
            description="A shared devotion to learning, tradition, and the fertile land of Telangana"
          />
        </div>

        {/* Royal Heritage Arched Diptych: Couple Portrait & Agricultural Roots Duo */}
        <div
          className="reveal stagger-1"
          style={{
            margin: "var(--space-4) auto var(--space-12)",
            maxWidth: "880px",
          }}
        >
          {/* Subtle auspicious connecting bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "var(--space-3)",
              marginBottom: "var(--space-8)",
            }}
          >
            <span style={{ height: "1px", width: "50px", backgroundColor: "var(--color-border-gold)" }} />
            <span
              style={{
                fontFamily: "var(--font-display-en)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-vermilion)",
                fontWeight: 700,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                border: "1px solid var(--color-border-gold)",
                padding: "3px 12px",
                borderRadius: "var(--radius-full)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              Two Souls · One Sacred Soil
            </span>
            <span style={{ height: "1px", width: "50px", backgroundColor: "var(--color-border-gold)" }} />
          </div>

          {/* Side-by-side Dual Arched Temple Frames */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "var(--space-8)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Frame 1: The Couple Portrait (02-couple-portrait.jpg) */}
            <HeritageArchFrame
              src={photography.couplePortrait.src}
              alt={photography.couplePortrait.alt}
              title="The Couple"
              titleTelugu="నూతన దంపతులు"
              caption={photography.couplePortrait.caption}
              objectPosition="center 15%"
            />

            {/* Frame 2: Agricultural Heritage & Fertile Fields (05-agriculture-theme.jpg) */}
            <HeritageArchFrame
              src={photography.agricultureTheme.src}
              alt={photography.agricultureTheme.alt}
              title="Rooted in the Soil"
              titleTelugu="హరిత సౌభాగ్యం"
              caption={photography.agricultureTheme.caption}
              objectPosition="center 20%"
            />
          </div>
        </div>

        {/* Narrative Content Card */}
        <div
          className="reveal stagger-2 card-interactive"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(6px)",
            padding: "var(--space-8) var(--space-6)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid rgba(83, 104, 77, 0.3)",
            boxShadow: "var(--shadow-card)",
            maxWidth: "760px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "var(--space-2)" }}>
            <ChibiWalking />
          </div>

          <div style={{ marginBottom: "var(--space-3)" }}>
            <BotanicalPanicle />
          </div>

          <h3
            style={{
              fontFamily: "var(--font-display-en)",
              fontSize: "var(--text-2xl)",
              color: "var(--color-ink)",
              marginBottom: "var(--space-4)",
              fontWeight: 600,
            }}
          >
            Growing from Deep Roots
          </h3>

          {story.descriptionTelugu && (
            <p
              className="font-telugu"
              style={{
                color: "var(--color-leaf-dark)",
                fontSize: "var(--text-base)",
                marginBottom: "var(--space-3)",
                lineHeight: 1.7,
                maxWidth: "600px",
                margin: "0 auto var(--space-3)",
              }}
            >
              {story.descriptionTelugu}
            </p>
          )}

          <p
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.8,
              color: "var(--color-ink)",
              maxWidth: "640px",
              margin: "0 auto var(--space-6)",
            }}
          >
            {story.description}
          </p>

          {/* Research & Background notes */}
          <div
            style={{
              paddingTop: "var(--space-4)",
              borderTop: "1px dashed rgba(83, 104, 77, 0.3)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-2)",
              fontSize: "var(--text-xs)",
              color: "var(--color-ink-muted)",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            <div>
              <strong style={{ color: "var(--color-leaf-dark)" }}>Groom's Specialization: </strong>
              <span>{groom.researchField}</span>
            </div>
            <div>
              <strong style={{ color: "var(--color-leaf-dark)" }}>Bride's Specialization: </strong>
              <span>{bride.researchField}</span>
            </div>
            <div style={{ fontStyle: "italic", marginTop: "var(--space-1)" }}>
              <span>Theme inspiration: {story.botanicalTheme}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
