import React from "react";
import { WeddingEvent } from "../data/wedding";
import { SectionHeader } from "../components/SectionHeader";

interface CeremonyScheduleSectionProps {
  schedule: WeddingEvent[];
}

export const CeremonyScheduleSection: React.FC<CeremonyScheduleSectionProps> = ({
  schedule,
}) => {
  if (!schedule || schedule.length === 0) {
    return null;
  }

  return (
    <section id="schedule" className="section section-warm">
      <div className="container-narrow">
        <SectionHeader
          title="Celebration Schedule"
          subtitleTelugu="కార్యక్రమ వివరాలు"
          description="Sequence of ceremonies and gatherings celebrating our union"
        />

        <div
          style={{
            position: "relative",
            margin: "0 auto",
            maxWidth: "600px",
          }}
        >
          {/* Vertical timeline spine */}
          <div
            style={{
              position: "absolute",
              top: "24px",
              bottom: "24px",
              left: "20px",
              width: "2px",
              backgroundColor: "var(--color-border-gold)",
            }}
            aria-hidden="true"
          />

          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {schedule.map((event, index) => (
              <li
                key={event.id || index}
                style={{
                  position: "relative",
                  paddingLeft: "52px",
                  marginBottom: "var(--space-8)",
                }}
              >
                {/* Timeline node marker */}
                <div
                  style={{
                    position: "absolute",
                    left: "11px",
                    top: "4px",
                    width: "20px",
                    height: "20px",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--color-white)",
                    border: "2px solid var(--color-vermilion)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  aria-hidden="true"
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "var(--color-vermilion)",
                    }}
                  />
                </div>

                {/* Event Card */}
                <div
                  style={{
                    backgroundColor: "var(--color-white)",
                    borderRadius: "var(--radius-md)",
                    padding: "var(--space-5)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: "var(--space-2)",
                      marginBottom: "var(--space-1)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display-en)",
                        fontSize: "var(--text-lg)",
                        fontWeight: 600,
                        color: "var(--color-ink)",
                      }}
                    >
                      {event.name}
                    </h3>
                    <span
                      className="font-telugu"
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-vermilion)",
                        fontWeight: 600,
                      }}
                    >
                      {event.nameTelugu}
                    </span>
                  </div>

                  {/* Time and Venue pills */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "var(--space-2)",
                      margin: "var(--space-2) 0",
                      fontSize: "var(--text-xs)",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "var(--color-leaf-soft)",
                        color: "var(--color-leaf-dark)",
                        padding: "2px 8px",
                        borderRadius: "var(--radius-sm)",
                        fontWeight: 600,
                      }}
                    >
                      Time: {event.time}
                    </span>
                    <span
                      style={{
                        backgroundColor: "var(--color-paper)",
                        color: "var(--color-ink-muted)",
                        padding: "2px 8px",
                        borderRadius: "var(--radius-sm)",
                      }}
                    >
                      Venue: {event.venue}
                    </span>
                    {!event.isConfirmed && (
                      <span className="tbc-pill">Schedule TBC</span>
                    )}
                  </div>

                  {event.notes && (
                    <p
                      style={{
                        fontSize: "var(--text-sm)",
                        color: "var(--color-ink-muted)",
                        marginTop: "var(--space-2)",
                        lineHeight: 1.5,
                      }}
                    >
                      {event.notes}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
