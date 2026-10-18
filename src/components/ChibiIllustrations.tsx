import React from "react";
import "../styles/chibi.css";

type StickerName = "namaste" | "invitation-scroll" | "puja" | "talambralu" | "walking" | "blessings";

interface StickerProps {
  className?: string;
}

const STICKER_META: Record<StickerName, { alt: string; ratio: "portrait" | "wide" }> = {
  namaste: { alt: "Illustration of a Telugu bride and groom greeting with namaste", ratio: "portrait" },
  "invitation-scroll": { alt: "Illustration of a Telugu bride and groom presenting a blank invitation scroll", ratio: "portrait" },
  puja: { alt: "Illustration of a Telugu bride and groom in prayer beside a sacred fire", ratio: "wide" },
  talambralu: { alt: "Illustration of a Telugu bride and groom celebrating Talambralu", ratio: "wide" },
  walking: { alt: "Illustration of a Telugu bride and groom walking hand in hand", ratio: "portrait" },
  blessings: { alt: "Illustration of a Telugu bride and groom receiving blessings", ratio: "portrait" },
};

const WeddingSticker: React.FC<StickerProps & { name: StickerName; animation: string }> = ({ name, animation, className = "" }) => {
  const { alt, ratio } = STICKER_META[name];
  return (
    <div className={`chibi-wrapper ${animation} ${className}`}>
      <img className={`wedding-sticker wedding-sticker--${ratio}`} src={`/images/stickers/${name}.png`} alt={alt} draggable={false} decoding="async" />
    </div>
  );
};

export const ChibiNamaste: React.FC<StickerProps> = (props) => <WeddingSticker name="namaste" animation="chibi-float" {...props} />;
export const ChibiScroll: React.FC<StickerProps> = (props) => <WeddingSticker name="invitation-scroll" animation="chibi-sway chibi-scroll-glow" {...props} />;
export const ChibiPuja: React.FC<StickerProps> = (props) => <WeddingSticker name="puja" animation="chibi-breathe" {...props} />;
export const ChibiTalambralu: React.FC<StickerProps> = (props) => <WeddingSticker name="talambralu" animation="chibi-float" {...props} />;
export const ChibiWalking: React.FC<StickerProps> = (props) => <WeddingSticker name="walking" animation="chibi-sway" {...props} />;
export const ChibiBlessings: React.FC<StickerProps> = (props) => <WeddingSticker name="blessings" animation="chibi-breathe" {...props} />;
