import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logo from "@/assets/logo.jpg";

const navItems = [
  { label: "Accueil", to: "/", hash: "" },
  { label: "À propos", to: "/", hash: "#apropos" },
  { label: "Réalisations", to: "/", hash: "#realisations" },
  { label: "Flash", to: "/", hash: "#flash" },
  { label: "Boutique", to: "/", hash: "#boutique" },
  { label: "Rendez-vous", to: "/", hash: "#rdv" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Logo Vos Rêves vous Accompagnent"
            className="h-12 w-auto object-contain"
          />
          <span className="hidden sm:block leading-tight">
            <span className="block font-serif italic text-xl">Vos Rêves vous Accompagnent</span>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-ink/50">Élodie · Artiste tatoueuse</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.hash ? item.hash : item.to}
              className="text-ink/70 hover:text-ink transition-colors"
              onClick={(e) => {
                if (item.hash && window.location.pathname === "/") {
                  e.preventDefault();
                  document.querySelector(item.hash)?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <div className={`w-6 h-px bg-ink mb-1.5 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <div className={`w-6 h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-px bg-ink mt-1.5 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-paper/95 backdrop-blur-md border-t border-border/60 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.hash ? item.hash : item.to}
              className="block font-serif text-2xl"
              onClick={(e) => {
                setOpen(false);
                if (item.hash && window.location.pathname === "/") {
                  e.preventDefault();
                  setTimeout(() => document.querySelector(item.hash!)?.scrollIntoView({ behavior: "smooth" }), 50);
                }
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
