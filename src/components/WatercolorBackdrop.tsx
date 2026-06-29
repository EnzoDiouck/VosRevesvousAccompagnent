import { useEffect, useState } from "react";
import bg1 from "@/assets/bg1.jpg.asset.json";
import bg2 from "@/assets/bg2.jpg.asset.json";
import bg3 from "@/assets/bg3.jpg.asset.json";
import bg4 from "@/assets/bg4.jpg.asset.json";
import bg5 from "@/assets/bg5.jpg.asset.json";

/**
 * Real watercolor papers as the page background.
 * Layers cross-fade and drift slightly as the user scrolls.
 */
const layers = [bg1, bg2, bg3, bg4, bg5];

export function WatercolorBackdrop() {
  const [y, setY] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Each layer is "active" for a stretch of scroll, crossfading into the next.
  const stretch = 700; // px per layer
  const progress = y / stretch;

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-paper"
    >
      {layers.map((src, i) => {
        const d = progress - i;
        // smooth crossfade window of ±1
        const opacity = Math.max(0, 1 - Math.abs(d));
        const translateY = d * -40; // gentle parallax
        const scale = 1.02 + Math.abs(d) * 0.04;
        const flip = i % 2 === 1 ? "scaleX(-1)" : "";
        return (
          <img
            key={i}
            src={src.url}
            alt=""
            loading={i === 0 ? "eager" : "lazy"}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{
              opacity,
              transform: `${flip} translate3d(0, ${translateY}px, 0) scale(${scale})`,
              transition: "opacity 120ms linear",
            }}
          />
        );
      })}
      {/* Soft paper veil so text stays readable */}
      <div className="absolute inset-0 bg-paper/55" />
    </div>
  );
}
