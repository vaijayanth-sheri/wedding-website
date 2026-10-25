import React from "react";

interface MotifProps {
  className?: string;
  color?: string;
  ariaHidden?: boolean;
}

/**
 * Rich, authentic Telangana Agricultural & Heritage Motifs
 * Redesigned with intricate cultural details, multi-layer depth, and living animations.
 */

/**
 * Pochampally-Ikat-inspired geometric diamond rhythm divider.
 * Rich multi-diamond weave structure with temple border geometry and glowing core.
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
        width="420"
        height="36"
        viewBox="0 0 420 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ikat-svg"
        style={{ maxWidth: "100%", height: "auto" }}
      >
        {/* Left prominent rule with delicate accent marks */}
        <line x1="0" y1="18" x2="110" y2="18" stroke={color} strokeWidth="1.5" className="ikat-line-left" />
        <circle cx="110" cy="18" r="2.5" fill={color} />
        
        {/* Step-down Ikat diamond accents & Temple steps */}
        <g className="ikat-diamond-node">
          {/* Outer chevron */}
          <path d="M125 18L135 8L145 18L135 28Z" stroke={color} strokeWidth="1.2" fill="none" opacity="0.8" />
          <circle cx="135" cy="18" r="1.5" fill="var(--color-vermilion)" />
        </g>

        <g className="ikat-diamond-node">
          {/* Middle double diamond */}
          <path d="M155 18L170 3L185 18L170 33Z" stroke="var(--color-vermilion)" strokeWidth="1.75" fill="rgba(141, 48, 40, 0.04)" className="ikat-diamond-pulse" />
          <path d="M161 18L170 9L179 18L170 27Z" stroke={color} strokeWidth="1.2" fill="none" />
          <circle cx="170" cy="18" r="2.5" fill="var(--color-antique-gold)" />
        </g>

        {/* Central grand royal Pochampally medallion */}
        <g className="ikat-diamond-node">
          <path d="M192 18L210 0L228 18L210 36Z" stroke="var(--color-vermilion)" strokeWidth="2" fill="rgba(185, 154, 91, 0.08)" className="ikat-diamond-pulse" />
          <path d="M198 18L210 6L222 18L210 30Z" stroke={color} strokeWidth="1.5" fill="rgba(141, 48, 40, 0.08)" />
          {/* Inner auspicious 8-fold star / bloom */}
          <circle cx="210" cy="18" r="4.5" fill="var(--color-vermilion)" />
          <circle cx="210" cy="18" r="2" fill="var(--color-white)" />
        </g>

        <g className="ikat-diamond-node">
          {/* Mirror Right middle double diamond */}
          <path d="M235 18L250 3L265 18L250 33Z" stroke="var(--color-vermilion)" strokeWidth="1.75" fill="rgba(141, 48, 40, 0.04)" className="ikat-diamond-pulse" />
          <path d="M241 18L250 9L259 18L250 27Z" stroke={color} strokeWidth="1.2" fill="none" />
          <circle cx="250" cy="18" r="2.5" fill="var(--color-antique-gold)" />
        </g>

        <g className="ikat-diamond-node">
          {/* Mirror Right outer chevron */}
          <path d="M275 18L285 8L295 18L285 28Z" stroke={color} strokeWidth="1.2" fill="none" opacity="0.8" />
          <circle cx="285" cy="18" r="1.5" fill="var(--color-vermilion)" />
        </g>

        {/* Right prominent rule with delicate accent marks */}
        <circle cx="310" cy="18" r="2.5" fill={color} />
        <line x1="310" y1="18" x2="420" y2="18" stroke={color} strokeWidth="1.5" className="ikat-line-right" />
      </svg>
    </div>
  );
};

/**
 * Mango-Leaf Toranam welcome garland.
 * Doubled in visual weight with organic mango leaves, leaf veins, marigold blossoms, and auspicious bells.
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
        width="540"
        height="64"
        viewBox="0 0 270 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="toranam-svg"
        style={{ maxWidth: "92vw", height: "auto", overflow: "visible" }}
      >
        {/* Double garland suspension string (braided look) */}
        <path
          className="toranam-garland-path"
          d="M10 8 Q 72 17 135 8 Q 198 17 260 8"
          stroke="var(--color-antique-gold)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M10 10 Q 72 19 135 10 Q 198 19 260 10"
          stroke="var(--color-antique-gold)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          fill="none"
          opacity="0.7"
        />

        {/* Dynamic swaying mango leaves with realistic leaf veins */}
        <g className="toranam-leaf-group-1">
          <path
            className="toranam-leaf toranam-leaf-1"
            d="M42 12 C 39 19 43 27 46 29 C 49 27 53 19 50 12 Z"
            fill="var(--color-leaf)"
            opacity="0.95"
          />
          <path d="M46 13 L46 27" stroke="var(--color-leaf-dark)" strokeWidth="0.6" opacity="0.6" />
          <circle cx="46" cy="11" r="1.5" fill="var(--color-antique-gold)" />
        </g>

        <g className="toranam-leaf-group-2">
          <path
            className="toranam-leaf toranam-leaf-2"
            d="M88 14 C 85 21 89 29 92 31 C 95 29 99 21 96 14 Z"
            fill="var(--color-leaf)"
            opacity="0.95"
          />
          <path d="M92 15 L92 29" stroke="var(--color-leaf-dark)" strokeWidth="0.6" opacity="0.6" />
          {/* Marigold cluster */}
          <circle cx="92" cy="12" r="2" fill="var(--color-vermilion)" />
        </g>

        {/* Center Grand Mango Leaf & Royal Marigold */}
        <g className="toranam-leaf-group-center">
          <path
            className="toranam-leaf toranam-leaf-center"
            d="M132 11 C 128 20 132 29 135 32 C 138 29 142 20 138 11 Z"
            fill="var(--color-leaf-dark)"
          />
          <path d="M135 12 L135 30" stroke="var(--color-paper)" strokeWidth="0.6" opacity="0.5" />
        </g>

        {/* Marigold auspicious center flower with petals */}
        <g className="toranam-marigold">
          <circle cx="135" cy="8.5" r="4.5" fill="#E05A2B" />
          <circle cx="135" cy="8.5" r="2.8" fill="var(--color-vermilion)" />
          <circle cx="135" cy="8.5" r="1.2" fill="#F8C43D" />
        </g>

        <g className="toranam-leaf-group-3">
          <path
            className="toranam-leaf toranam-leaf-3"
            d="M178 14 C 175 21 179 29 182 31 C 185 29 189 21 186 14 Z"
            fill="var(--color-leaf)"
            opacity="0.95"
          />
          <path d="M182 15 L182 29" stroke="var(--color-leaf-dark)" strokeWidth="0.6" opacity="0.6" />
          <circle cx="182" cy="12" r="2" fill="var(--color-vermilion)" />
        </g>

        <g className="toranam-leaf-group-4">
          <path
            className="toranam-leaf toranam-leaf-4"
            d="M224 12 C 221 19 225 27 228 29 C 231 27 235 19 232 12 Z"
            fill="var(--color-leaf)"
            opacity="0.95"
          />
          <path d="M228 13 L228 27" stroke="var(--color-leaf-dark)" strokeWidth="0.6" opacity="0.6" />
          <circle cx="228" cy="11" r="1.5" fill="var(--color-antique-gold)" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Botanical Panicle & Seed Accent (Telangana Agrarian Heritage).
 * Intricate rice/millets panicle with curved stalks, leafy husks, and ripe golden grains.
 * Supports svg line drawing when section is revealed (.is-revealed).
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
        padding: "var(--space-3) 0",
      }}
    >
      <svg
        width="180"
        height="80"
        viewBox="0 0 90 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="botanical-svg"
        style={{ overflow: "visible" }}
      >
        {/* Main sweeping stalk arch */}
        <path
          d="M6 34 Q 30 20 84 10"
          stroke="var(--color-leaf-dark)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="botanical-stem"
        />

        {/* Secondary gentle drooping branch */}
        <path
          d="M24 24 Q 42 26 68 28"
          stroke="var(--color-leaf)"
          strokeWidth="1.2"
          strokeLinecap="round"
          className="botanical-stem"
          opacity="0.75"
        />

        {/* Delicate base leaves wrapping the stalk */}
        <path
          d="M8 35 Q 16 30 22 36 Q 14 38 8 35 Z"
          fill="var(--color-leaf)"
          opacity="0.85"
        />

        {/* Pair of Grains Cluster 1 */}
        <g className="botanical-seed botanical-seed-1">
          <ellipse cx="26" cy="19" rx="5" ry="2.2" transform="rotate(-35 26 19)" fill="rgba(185, 154, 91, 0.25)" stroke="var(--color-antique-gold)" strokeWidth="1.2" />
          <ellipse cx="32" cy="16" rx="5.2" ry="2.4" transform="rotate(25 32 16)" fill="rgba(185, 154, 91, 0.3)" stroke="var(--color-leaf)" strokeWidth="1.2" />
        </g>

        {/* Lower grain branch cluster */}
        <g className="botanical-seed botanical-seed-1">
          <ellipse cx="44" cy="27" rx="4.5" ry="2" transform="rotate(18 44 27)" fill="rgba(185, 154, 91, 0.25)" stroke="var(--color-antique-gold)" strokeWidth="1.1" />
          <ellipse cx="58" cy="29" rx="4.8" ry="2" transform="rotate(12 58 29)" fill="rgba(185, 154, 91, 0.3)" stroke="var(--color-leaf)" strokeWidth="1.1" />
        </g>

        {/* Middle Full Grains Cluster 2 */}
        <g className="botanical-seed botanical-seed-2">
          <ellipse cx="45" cy="14" rx="5.8" ry="2.6" transform="rotate(-28 45 14)" fill="rgba(185, 154, 91, 0.35)" stroke="var(--color-antique-gold)" strokeWidth="1.3" />
          <ellipse cx="54" cy="12" rx="6" ry="2.6" transform="rotate(20 54 12)" fill="rgba(236, 196, 94, 0.4)" stroke="var(--color-leaf)" strokeWidth="1.3" />
        </g>

        {/* Upper Plump Grains Cluster 3 */}
        <g className="botanical-seed botanical-seed-3">
          <ellipse cx="66" cy="10" rx="5.8" ry="2.5" transform="rotate(-15 66 10)" fill="rgba(236, 196, 94, 0.5)" stroke="var(--color-antique-gold)" strokeWidth="1.4" />
          <ellipse cx="75" cy="9" rx="5.5" ry="2.4" transform="rotate(16 75 9)" fill="rgba(236, 196, 94, 0.55)" stroke="var(--color-leaf-dark)" strokeWidth="1.4" />
        </g>

        {/* Auspicious golden rice grain tip with solar seed flourish */}
        <g className="botanical-seed-tip">
          <ellipse cx="84" cy="9" rx="5" ry="2.2" transform="rotate(8 84 9)" fill="var(--color-antique-gold)" stroke="var(--color-vermilion)" strokeWidth="1" />
          <circle cx="89" cy="9" r="1.5" fill="var(--color-vermilion)" />
        </g>
      </svg>
    </div>
  );
};

/**
 * Living Muggu / Rangoli Knot (Traditional Telangana Sacred Floor Art).
 * Redesigned as a genuine 8-petal auspicious lotus-muggu with interconnected loops,
 * dot grid (Chukkala Muggu), and saffron/turmeric color accents.
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
        margin: "var(--space-8) 0",
      }}
    >
      <svg
        width="160"
        height="80"
        viewBox="0 0 160 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="muggu-svg"
        style={{ overflow: "visible" }}
      >
        {/* Subtle geometric guideline square rotated 45 deg */}
        <rect
          x="80"
          y="40"
          width="36"
          height="36"
          rx="4"
          transform="rotate(45 80 40) translate(-18 -18)"
          stroke="var(--color-border-gold)"
          strokeWidth="0.8"
          strokeDasharray="2 3"
          fill="rgba(185, 154, 91, 0.03)"
        />

        {/* Continuous woven knot path (Outer sacred loops) */}
        <path
          d="M 50 40 C 50 20, 80 14, 80 40 C 80 66, 110 60, 110 40 C 110 20, 80 14, 80 40 C 80 66, 50 60, 50 40 Z"
          stroke="var(--color-antique-gold)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          className="muggu-knot-path"
        />

        {/* Crosswise interlocking loop */}
        <path
          d="M 80 15 C 60 15, 54 40, 80 40 C 106 40, 100 65, 80 65 C 60 65, 54 40, 80 40 C 106 40, 100 15, 80 15 Z"
          stroke="var(--color-vermilion)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className="muggu-knot-path-secondary"
          opacity="0.85"
        />

        {/* Central Lotus Seed / Bindu */}
        <circle cx="80" cy="40" r="4.5" fill="var(--color-vermilion)" className="muggu-center-dot" />
        <circle cx="80" cy="40" r="2" fill="var(--color-white)" className="muggu-center-dot" />

        {/* Sacred 4-Directional Dots (Chukkalu) */}
        <circle cx="80" cy="18" r="3" fill="var(--color-antique-gold)" className="muggu-side-dot-top" />
        <circle cx="80" cy="62" r="3" fill="var(--color-antique-gold)" className="muggu-side-dot-bottom" />
        <circle cx="56" cy="40" r="3" fill="var(--color-antique-gold)" className="muggu-side-dot-left" />
        <circle cx="104" cy="40" r="3" fill="var(--color-antique-gold)" className="muggu-side-dot-right" />

        {/* Flanking auspicious flourishes (Diya flame wings) */}
        <g className="muggu-wings" opacity="0.85">
          {/* Left ornamental wing */}
          <path d="M 40 40 Q 24 32 16 40 Q 24 48 40 40" stroke="var(--color-antique-gold)" strokeWidth="1.2" fill="none" />
          <circle cx="16" cy="40" r="2" fill="var(--color-vermilion)" />
          
          {/* Right ornamental wing */}
          <path d="M 120 40 Q 136 32 144 40 Q 136 48 120 40" stroke="var(--color-antique-gold)" strokeWidth="1.2" fill="none" />
          <circle cx="144" cy="40" r="2" fill="var(--color-vermilion)" />
        </g>
      </svg>
    </div>
  );
};
