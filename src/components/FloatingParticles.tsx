import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  wobbleSpeed: number;
  wobbleDistance: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "rice" | "petal" | "leaf";
  color: string;
}

/**
 * FloatingParticles
 * Subtle, sparse cultural drift in front of the page (pointer-events: none).
 * Gently calibrated: small delicate sizes, quiet translucency (22%–35%),
 * and sparse presence (16 particles total) to ensure the invitation remains
 * the absolute primary focus without any distraction.
 */
export const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect user's reduced-motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Muted, tasteful celebration palette
    const colors = {
      talambraluGold: "#DF9F28",
      talambraluSoftYellow: "#ECC45E",
      marigoldSaffron: "#D86B32",
      marigoldSoftRed: "#A8362D",
      botanicalLeaf: "#53684D",
    };

    // Kept sparse (16 particles across full screen)
    const particleCount = 16;
    const particles: Particle[] = [];

    const particleTypes: Array<"rice" | "petal" | "leaf"> = [
      "rice",
      "rice",
      "rice",
      "petal",
      "petal",
      "leaf",
    ];

    for (let i = 0; i < particleCount; i++) {
      const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
      let color = colors.talambraluGold;

      if (type === "rice") {
        color = Math.random() > 0.5 ? colors.talambraluGold : colors.talambraluSoftYellow;
      } else if (type === "petal") {
        color = Math.random() > 0.5 ? colors.marigoldSaffron : colors.marigoldSoftRed;
      } else {
        color = colors.botanicalLeaf;
      }

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Small, delicate scale (no longer oversized)
        size: type === "rice" ? Math.random() * 2 + 3.5 : Math.random() * 2.5 + 5.5,
        speedY: Math.random() * 0.3 + 0.18, // Slow, calm descent
        speedX: (Math.random() - 0.5) * 0.25,
        wobbleSpeed: Math.random() * 0.012 + 0.008,
        wobbleDistance: Math.random() * 0.8 + 0.4,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.016,
        opacity: Math.random() * 0.14 + 0.22, // Translucent: 22% to 36%
        type,
        color,
      });
    }

    // Drawing: Delicate Talambralu rice grains
    const drawRice = (c: CanvasRenderingContext2D, p: Particle) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);
      c.beginPath();
      c.ellipse(0, 0, p.size * 0.5, p.size * 1.3, 0, 0, Math.PI * 2);
      c.fillStyle = p.color;
      c.globalAlpha = p.opacity;
      c.fill();
      c.restore();
    };

    // Drawing: Delicate Marigold petals
    const drawPetal = (c: CanvasRenderingContext2D, p: Particle) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);
      c.beginPath();
      c.moveTo(0, -p.size);
      c.bezierCurveTo(p.size * 0.75, -p.size * 0.3, p.size * 0.75, p.size * 0.5, 0, p.size);
      c.bezierCurveTo(-p.size * 0.75, p.size * 0.5, -p.size * 0.75, -p.size * 0.3, 0, -p.size);
      c.fillStyle = p.color;
      c.globalAlpha = p.opacity;
      c.fill();
      c.restore();
    };

    // Drawing: Small Botanical leaf
    const drawLeaf = (c: CanvasRenderingContext2D, p: Particle) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);
      c.beginPath();
      c.moveTo(0, -p.size * 1.1);
      c.quadraticCurveTo(p.size * 0.65, 0, 0, p.size * 1.1);
      c.quadraticCurveTo(-p.size * 0.65, 0, 0, -p.size * 1.1);
      c.fillStyle = p.color;
      c.globalAlpha = p.opacity;
      c.fill();
      c.restore();
    };

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Calm, lazy descent with gentle trigonometric wobble
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(tick * p.wobbleSpeed + i) * p.wobbleDistance;
        p.rotation += p.rotationSpeed;

        // Wrap around smoothly when falling past screen borders
        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) {
          p.x = -20;
        } else if (p.x < -20) {
          p.x = width + 20;
        }

        if (p.type === "rice") {
          drawRice(ctx, p);
        } else if (p.type === "petal") {
          drawPetal(ctx, p);
        } else {
          drawLeaf(ctx, p);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 40,
      }}
    />
  );
};
