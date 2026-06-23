import splashPink from "@/assets/splash-pink.png";
import splashBlue from "@/assets/splash-blue.png";
import splashPurple from "@/assets/splash-purple.png";
import splashOrange from "@/assets/splash-orange.png";

/**
 * Fixed-position decorative watercolor splashes.
 * Pronounced, paper-like — sits behind all content.
 */
export function WatercolorBackdrop() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <img
        src={splashPink}
        alt=""
        loading="lazy"
        className="absolute -top-20 -left-24 w-[60vw] max-w-[520px] opacity-70 animate-float-slow mix-blend-multiply"
      />
      <img
        src={splashBlue}
        alt=""
        loading="lazy"
        className="absolute top-[30vh] -right-32 w-[65vw] max-w-[600px] opacity-60 animate-float-slow mix-blend-multiply"
        style={{ animationDelay: "-4s" }}
      />
      <img
        src={splashOrange}
        alt=""
        loading="lazy"
        className="absolute top-[80vh] -left-20 w-[55vw] max-w-[500px] opacity-55 animate-float-slow mix-blend-multiply"
        style={{ animationDelay: "-7s" }}
      />
      <img
        src={splashPurple}
        alt=""
        loading="lazy"
        className="absolute top-[140vh] -right-16 w-[60vw] max-w-[560px] opacity-60 animate-float-slow mix-blend-multiply"
        style={{ animationDelay: "-2s" }}
      />
      <img
        src={splashPink}
        alt=""
        loading="lazy"
        className="absolute top-[210vh] -left-32 w-[65vw] max-w-[600px] opacity-55 animate-float-slow mix-blend-multiply scale-x-[-1]"
        style={{ animationDelay: "-9s" }}
      />
      <img
        src={splashBlue}
        alt=""
        loading="lazy"
        className="absolute top-[280vh] -right-24 w-[55vw] max-w-[520px] opacity-55 animate-float-slow mix-blend-multiply scale-y-[-1]"
        style={{ animationDelay: "-5s" }}
      />
      <img
        src={splashOrange}
        alt=""
        loading="lazy"
        className="absolute bottom-0 right-0 w-[70vw] max-w-[640px] opacity-60 mix-blend-multiply"
      />
    </div>
  );
}
