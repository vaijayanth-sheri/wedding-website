import React from "react";

interface MotifProps {
  className?: string;
  color?: string;
  ariaHidden?: boolean;
}

/**
 * Pochampally-Ikat-inspired geometric diamond rhythm divider.
 * Clean, modern interpretation of Telangana's handloom weaving patterns.
 */
export const IkatDivider: React.FC<MotifProps> = ({
  className = "",
  color = "var(--color-antique-gold)",
  ariaHidden = true,
}) => {
  return (
    <div
      className={`ikat-divider ${className}`}
      aria-hidden={ariaHidden}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "var(--space-4) 0",
      }}
    >
      <svg
        width="180"
        height="16"
        viewBox="0 0 180 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.85 }}
      >
        {/* Left thin rule */}
        <line x1="0" y1="8" x2="48" y2="8" stroke={color} strokeWidth="0.75" />
        
        {/* Step-down Ikat diamond accents */}
        <path
          d="M56 8L60 4L64 8L60 12Z"
          fill="none"
          stroke={color}
          strokeWidth="0.75"
        />
        <path
          d="M72 8L78 2L84 8L78 14Z"
          fill="none"
          stroke="var(--color-vermilion)"
          strokeWidth="1"
        />
        <circle cx="78" cy="8" r="1.5" fill={color} />
        
        {/* Central double diamond */}
        <path
          d="M90 8L96 2L102 8L96 14Z"
          fill="none"
          stroke="var(--color-vermilion)"
          strokeWidth="1"
        />
        <circle cx="96" cy="8" r="1.5" fill={color} />

        <path
          d="M108 8L114 4L120 8L114 12Z"
          fill="none"
          stroke={color}
          strokeWidth="0.75"
        />

        {/* Right thin rule */}
        <line x1="126" y1="8" x2="180" y2="8" stroke={color} strokeWidth="0.75" />
      </svg>
    </div>
  );
};

/**
 * Restrained Mango-Leaf Toranam framing motif for the Hero greeting.
 */
export const ToranamMotif: React.FC<MotifProps> = ({
  className = "",
  ariaHidden = true,
}) => {
  return (
    <div
      className={`toranam-motif ${className}`}
      aria-hidden={ariaHidden}
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        marginBottom: "var(--space-4)",
      }}
    >
      <svg
        width="220"
        height="28"
        viewBox="0 0 220 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Garland suspension string */}
        <path
          d="M10 8 Q 60 16 110 8 Q 160 16 210 8"
          stroke="var(--color-antique-gold)"
          strokeWidth="0.75"
          fill="none"
        />
        {/* Mango leaf stylized droplets */}
        <path
          d="M35 12 C 33 18 36 24 38 25 C 40 24 43 18 41 12 Z"
          fill="var(--color-leaf)"
          opacity="0.8"
        />
        <path
          d="M72 13 C 70 19 73 25 75 26 C 77 25 80 19 78 13 Z"
          fill="var(--color-leaf)"
          opacity="0.8"
        />
        <path
          d="M108 11 C 105 18 108 26 110 27 C 112 26 115 18 112 11 Z"
          fill="var(--color-leaf-dark)"
        />
        {/* Marigold / Auspicious flower bead */}
        <circle cx="110" cy="9" r="2.5" fill="var(--color-vermilion)" />
        <path
          d="M145 13 C 143 19 146 25 148 26 C 150 25 153 19 151 13 Z"
          fill="var(--color-leaf)"
          opacity="0.8"
        />
        <path
          d="M182 12 C 180 18 183 24 185 25 C 187 24 190 18 188 12 Z"
          fill="var(--color-leaf)"
          opacity="0.8"
        />
      </svg>
    </div>
  );
};

/**
 * Botanical Panicle & Seed Accent.
 * Hints quietly at agriculture, soil, and cultivation without looking technical.
 */
export const BotanicalPanicle: React.FC<MotifProps> = ({
  className = "",
  ariaHidden = true,
}) => {
  return (
    <div
      className={`botanical-accent ${className}`}
      aria-hidden={ariaHidden}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        width="64"
        height="32"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stem arch */}
        <path
          d="M8 24 Q 24 16 56 12"
          stroke="var(--color-leaf)"
          strokeWidth="1"
          strokeLinecap="round"
        />
        {/* Seed grains / leaves budding along stem */}
        <ellipse
          cx="20"
          cy="18"
          rx="3"
          ry="1.5"
          transform="rotate(-25 20 18)"
          fill="none"
          stroke="var(--color-leaf)"
          strokeWidth="0.8"
        />
        <ellipse
          cx="30"
          cy="15"
          rx="3.5"
          ry="1.8"
          transform="rotate(20 30 15)"
          fill="none"
          stroke="var(--color-leaf)"
          strokeWidth="0.8"
        />
        <ellipse
          cx="40"
          cy="13"
          rx="3.5"
          ry="1.8"
          transform="rotate(-20 40 13)"
          fill="none"
          stroke="var(--color-leaf)"
          strokeWidth="0.8"
        />
        <ellipse
          cx="50"
          cy="11"
          rx="3"
          ry="1.5"
          transform="rotate(15 50 11)"
          fill="var(--color-leaf)"
          opacity="0.9"
        />
      </svg>
    </div>
  );
};

/**
 * Muggu / Kolam inspired geometric corner or separator.
 */
export const MugguKnot: React.FC<MotifProps> = ({
  className = "",
  ariaHidden = true,
}) => {
  return (
    <div
      className={`muggu-knot ${className}`}
      aria-hidden={ariaHidden}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "var(--space-3) 0",
      }}
    >
      <svg
        width="48"
        height="24"
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="24" cy="12" r="2" fill="var(--color-antique-gold)" />
        <path
          d="M14 12 C 18 6, 30 6, 34 12 C 30 18, 18 18, 14 12 Z"
          stroke="var(--color-antique-gold)"
          strokeWidth="0.75"
          fill="none"
        />
        <circle cx="10" cy="12" r="1.5" fill="var(--color-antique-gold)" opacity="0.6" />
        <circle cx="38" cy="12" r="1.5" fill="var(--color-antique-gold)" opacity="0.6" />
      </svg>
    </div>
  );
};
