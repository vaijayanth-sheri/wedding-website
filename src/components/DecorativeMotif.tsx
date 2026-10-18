import React from "react";

interface MotifProps {
  className?: string;
  color?: string;
  ariaHidden?: boolean;
}

/**
 * Pochampally-Ikat-inspired geometric diamond rhythm divider.
 * Doubled in visual scale with an eye-catching gold & vermilion shimmer pulse.
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
        padding: "var(--space-6) 0",
      }}
    >
      <svg
        width="340"
        height="32"
        viewBox="0 0 340 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ikat-svg"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        {/* Left prominent rule */}
        <line x1="0" y1="16" x2="90" y2="16" stroke={color} strokeWidth="1.5" />

        {/* Step-down Ikat diamond accents - doubled dimensions */}
        <path
          d="M106 16L114 8L122 16L114 24Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
        <path
          d="M136 16L148 4L160 16L148 28Z"
          fill="none"
          stroke="var(--color-vermilion)"
          strokeWidth="2"
          className="ikat-diamond-pulse"
        />
        <circle cx="148" cy="16" r="3" fill={color} />

        {/* Central grand double diamond */}
        <path
          d="M170 16L182 4L194 16L182 28Z"
          fill="none"
          stroke="var(--color-vermilion)"
          strokeWidth="2"
          className="ikat-diamond-pulse"
        />
        <circle cx="182" cy="16" r="3" fill={color} />

        <path
          d="M208 16L216 8L224 16L216 24Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />

        {/* Right prominent rule */}
        <line x1="240" y1="16" x2="340" y2="16" stroke={color} strokeWidth="1.5" />
      </svg>
    </div>
  );
};

/**
 * Mango-Leaf Toranam welcome garland.
 * Doubled in size with prominent, organic swinging mango leaves and warm glowing marigold.
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
        marginBottom: "var(--space-6)",
        overflow: "visible",
      }}
    >
      <svg
        width="440"
        height="56"
        viewBox="0 0 220 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="toranam-svg"
        style={{ maxWidth: "90vw", height: "auto", overflow: "visible" }}
      >
        {/* Garland suspension string */}
        <path
          d="M10 8 Q 60 16 110 8 Q 160 16 210 8"
          stroke="var(--color-antique-gold)"
          strokeWidth="1.25"
          fill="none"
        />

        {/* Dynamic swaying mango leaves with doubled visual presence */}
        <g className="toranam-leaf-group-1">
          <path
            className="toranam-leaf toranam-leaf-1"
            d="M35 12 C 33 18 36 24 38 25 C 40 24 43 18 41 12 Z"
            fill="var(--color-leaf)"
            opacity="0.9"
          />
        </g>

        <g className="toranam-leaf-group-2">
          <path
            className="toranam-leaf toranam-leaf-2"
            d="M72 13 C 70 19 73 25 75 26 C 77 25 80 19 78 13 Z"
            fill="var(--color-leaf)"
            opacity="0.9"
          />
        </g>

        <g className="toranam-leaf-group-center">
          <path
            className="toranam-leaf toranam-leaf-center"
            d="M108 11 C 105 18 108 26 110 27 C 112 26 115 18 112 11 Z"
            fill="var(--color-leaf-dark)"
          />
        </g>

        {/* Marigold auspicious center flower */}
        <circle
          cx="110"
          cy="9"
          r="3.5"
          fill="var(--color-vermilion)"
          className="toranam-marigold"
        />

        <g className="toranam-leaf-group-3">
          <path
            className="toranam-leaf toranam-leaf-3"
            d="M145 13 C 143 19 146 25 148 26 C 150 25 153 19 151 13 Z"
            fill="var(--color-leaf)"
            opacity="0.9"
          />
        </g>

        <g className="toranam-leaf-group-4">
          <path
            className="toranam-leaf toranam-leaf-4"
            d="M182 12 C 180 18 183 24 185 25 C 187 24 190 18 188 12 Z"
            fill="var(--color-leaf)"
            opacity="0.9"
          />
        </g>
      </svg>
    </div>
  );
};

/**
 * Botanical Panicle & Seed Accent.
 * Doubled in size with prominent wind-flex animation representing Telangana's fertile crops.
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
        padding: "var(--space-2) 0",
      }}
    >
      <svg
        width="128"
        height="64"
        viewBox="0 0 64 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="botanical-svg"
        style={{ overflow: "visible" }}
      >
        {/* Stem arch */}
        <path
          d="M8 24 Q 24 16 56 12"
          stroke="var(--color-leaf-dark)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="botanical-stem"
        />
        {/* Grains budding along stem */}
        <ellipse
          cx="20"
          cy="18"
          rx="3.5"
          ry="1.8"
          transform="rotate(-25 20 18)"
          fill="none"
          stroke="var(--color-leaf)"
          strokeWidth="1.2"
          className="botanical-seed"
        />
        <ellipse
          cx="30"
          cy="15"
          rx="4.2"
          ry="2.2"
          transform="rotate(20 30 15)"
          fill="none"
          stroke="var(--color-leaf)"
          strokeWidth="1.2"
          className="botanical-seed"
        />
        <ellipse
          cx="40"
          cy="13"
          rx="4.5"
          ry="2.2"
          transform="rotate(-20 40 13)"
          fill="none"
          stroke="var(--color-leaf)"
          strokeWidth="1.2"
          className="botanical-seed"
        />
        <ellipse
          cx="50"
          cy="11"
          rx="4"
          ry="2"
          transform="rotate(15 50 11)"
          fill="var(--color-leaf)"
          className="botanical-seed-tip"
        />
      </svg>
    </div>
  );
};

/**
 * Muggu / Kolam inspired geometric separator.
 * Doubled in size with clean geometric linework.
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
        margin: "var(--space-6) 0",
      }}
    >
      <svg
        width="96"
        height="48"
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="muggu-svg"
      >
        <circle cx="24" cy="12" r="2.5" fill="var(--color-antique-gold)" />
        <path
          d="M14 12 C 18 6, 30 6, 34 12 C 30 18, 18 18, 14 12 Z"
          stroke="var(--color-antique-gold)"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="10" cy="12" r="2" fill="var(--color-antique-gold)" opacity="0.8" />
        <circle cx="38" cy="12" r="2" fill="var(--color-antique-gold)" opacity="0.8" />
      </svg>
    </div>
  );
};
