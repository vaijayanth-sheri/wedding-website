import React from "react";
import { CoupleData, PhotographyConfig } from "../data/wedding";
import { SectionHeader } from "../components/SectionHeader";
import { BotanicalPanicle } from "../components/DecorativeMotif";
import { PlaceholderPhoto } from "../components/PlaceholderPhoto";

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
        <SectionHeader
          title={story.headline}
          subtitleTelugu="ప్రేమానుబంధం · సంస్కృతి"
          description="A shared devotion to learning, tradition, and the fertile land of Telangana"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--space-8)",
            alignItems: "center",
            maxWidth: "960px",
            margin: "0 auto",
          }}
        >
          {/* Secondary photo placeholder */}
          <div>
            <PlaceholderPhoto
              aspectRatio="square"
              targetPath={photography.storyImage.src}
              altText={photography.storyImage.alt}
              isAvailable={photography.storyImage.isAvailable}
              caption="Secondary couple / story photograph (public/images/couple-story.jpg)"
            />
          </div>

          {/* Narrative Content */}
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(4px)",
              padding: "var(--space-8)",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(83, 104, 77, 0.25)",
              boxShadow: "var(--shadow-card)",
            }}
          >
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
                marginBottom: "var(--space-6)",
              }}
            >
              {story.description}
            </p>

            {/* Research & Background notes (subtle, non-clinical) */}
            <div
              style={{
                paddingTop: "var(--space-4)",
                borderTop: "1px dashed rgba(83, 104, 77, 0.3)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-2)",
                fontSize: "var(--text-xs)",
                color: "var(--color-ink-muted)",
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
      </div>
    </section>
  );
};
