import React from "react";
import "../styles/heritage-frames.css";

interface HeritageArchFrameProps {
  src: string;
  alt: string;
  title: string;
  titleTelugu: string;
  caption?: string;
  objectPosition?: string;
  className?: string;
}

/**
 * HeritageArchFrame
 * An exquisite Indian Temple Jharokha (Arch) frame inspired by Kakatiya and Telangana royal architecture.
 * Features an arched silhouette, golden filigree corner brackets, an auspicious crown crest, and vibrant hover interactions.
 */
export const HeritageArchFrame: React.FC<HeritageArchFrameProps> = ({
  src,
  alt,
  title,
  titleTelugu,
  caption,
  objectPosition = "center",
  className = "",
}) => {
  return (
    <figure className={`heritage-arch-container ${className}`} style={{ margin: "0 auto", width: "100%", maxWidth: "420px" }}>
      <div className="heritage-arch-frame">
        {/* Crown Crest at the peak of the temple arch */}
        <div className="heritage-arch-crown" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2C12 6 15 9 19 10C15 11 12 14 12 18C12 14 9 11 5 10C9 9 12 6 12 2Z"
              fill="var(--color-vermilion)"
            />
            <circle cx="12" cy="10" r="2" fill="var(--color-antique-gold)" />
          </svg>
        </div>

        {/* Inner Arched Image */}
        <div className="heritage-arch-inner">
          <img
            src={src}
            alt={alt}
            className="heritage-arch-image"
            loading="lazy"
            decoding="async"
            style={{ objectPosition }}
          />
        </div>

        {/* Bottom Left Brass Filigree Corner Bracket */}
        <div className="heritage-corner-bracket bottom-left" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 22 L2 6 Q2 2 6 2 L10 2 M2 22 L22 22 L22 18 Q22 14 18 14" stroke="var(--color-antique-gold)" strokeWidth="1.5" />
            <circle cx="6" cy="18" r="2" fill="var(--color-vermilion)" />
          </svg>
        </div>

        {/* Bottom Right Brass Filigree Corner Bracket */}
        <div className="heritage-corner-bracket bottom-right" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 22 L22 6 Q22 2 18 2 L14 2 M22 22 L2 22 L2 18 Q2 14 6 14" stroke="var(--color-antique-gold)" strokeWidth="1.5" />
            <circle cx="18" cy="18" r="2" fill="var(--color-vermilion)" />
          </svg>
        </div>

        {/* Bottom Floating Ribbon Badge */}
        <div className="heritage-arch-ribbon">
          <span>{title}</span>
          <span style={{ margin: "0 6px", opacity: 0.7 }}>·</span>
          <span className="font-telugu" style={{ fontSize: "0.95em" }}>{titleTelugu}</span>
        </div>
      </div>

      {caption && (
        <figcaption
          style={{
            marginTop: "var(--space-6)",
            fontSize: "var(--text-xs)",
            color: "var(--color-ink-muted)",
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
