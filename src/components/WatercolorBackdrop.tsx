import { useEffect, useState } from "react";
import splashPink from "@/assets/splash-pink.png";
import splashBlue from "@/assets/splash-blue.png";
import splashPurple from "@/assets/splash-purple.png";
import splashOrange from "@/assets/splash-orange.png";

/**
 * Fixed-position decorative watercolor splashes.
 * Reacts to scroll: parallax drift, rotation, hue shift between splashes.
 */
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

  // Scroll-driven values
  const t = y * 0.001; // normalized
  const hue = (y * 0.08) % 360;

  const splashes = [
    { src: splashPink,   base: "top-[-5rem] left-[-6rem]",   size: "w-[60vw] max-w-[520px]", speed: -0.25, rot: 0.04,  baseOp: 0.7 },
    { src: splashBlue,   base: "top-[30vh] right-[-8rem]",   size: "w-[65vw] max-w-[600px]", speed: 0.35,  rot: -0.05, baseOp: 0.6 },
    { src: splashOrange, base: "top-[80vh] left-[-5rem]",    size: "w-[55vw] max-w-[500px]", speed: -0.45, rot: 0.06,  baseOp: 0.55 },
    { src: splashPurple, base: "top-[140vh] right-[-4rem]",  size: "w-[60vw] max-w-[560px]", speed: 0.5,   rot: -0.07, baseOp: 0.6 },
    { src: splashPink,   base: "top-[210vh] left-[-8rem]",   size: "w-[65vw] max-w-[600px]", speed: -0.3,  rot: 0.08,  baseOp: 0.55, flipX: true },
    { src: splashBlue,   base: "top-[280vh] right-[-6rem]",  size: "w-[55vw] max-w-[520px]", speed: 0.4,   rot: -0.06, baseOp: 0.55, flipY: true },
    { src: splashOrange, base: "top-[350vh] left-[-4rem]",   size: "w-[60vw] max-w-[540px]", speed: -0.5,  rot: 0.05,  baseOp: 0.55 },
    { src: splashPurple, base: "bottom-0 right-0",           size: "w-[70vw] max-w-[640px]", speed: 0.15,  rot: -0.02, baseOp: 0.6 },
  ];

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ filter: `hue-rotate(${hue}deg)`, transition: "filter 120ms linear" }}
    >
      {splashes.map((s, i) => {
        const translate = y * s.speed * 0.15;
        const rotate = y * s.rot * 0.05;
        const scale = 1 + Math.sin(t + i) * 0.04;
        const op = s.baseOp + Math.sin(t * 2 + i) * 0.1;
        const flip = `${s.flipX ? "scaleX(-1) " : ""}${s.flipY ? "scaleY(-1) " : ""}`;
        return (
          <img
            key={i}
            src={s.src}
            alt=""
            loading="lazy"
            className={`absolute ${s.base} ${s.size} mix-blend-multiply will-change-transform`}
            style={{
              opacity: op,
              transform: `${flip}translate3d(0, ${translate}px, 0) rotate(${rotate}deg) scale(${scale})`,
            }}
          />
        );
      })}
    </div>
  );
}
