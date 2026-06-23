import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WatercolorBackdrop } from "@/components/WatercolorBackdrop";
import { articles } from "@/lib/articles";

import portrait from "@/assets/portrait.jpg";
import tattoo1 from "@/assets/tattoo-1.jpg";
import tattoo2 from "@/assets/tattoo-2.jpg";
import tattoo3 from "@/assets/tattoo-3.jpg";
import tattoo4 from "@/assets/tattoo-4.jpg";
import flash1 from "@/assets/flash-1.jpg";
import flash2 from "@/assets/flash-2.jpg";
import flash3 from "@/assets/flash-3.jpg";
import flash4 from "@/assets/flash-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elisa Bloom — Tatouages aquarelle sur mesure" },
      { name: "description", content: "Artiste tatoueuse spécialisée dans le style aquarelle. Réalisations sur mesure, flashes disponibles, prise de rendez-vous en ligne." },
    ],
  }),
  component: HomePage,
});

type Realisation = {
  img: string;
  title: string;
  style: string;
  size: "S" | "M" | "L";
  price: number;
  aspect: string;
};

const realisations: Realisation[] = [
  { img: tattoo1, title: "Pivoine de printemps", style: "Floral", size: "M", price: 350, aspect: "aspect-[3/4]" },
  { img: tattoo2, title: "L'envol", style: "Animal", size: "S", price: 180, aspect: "aspect-square" },
  { img: tattoo3, title: "Géométrie liquide", style: "Abstrait", size: "M", price: 220, aspect: "aspect-square" },
  { img: tattoo4, title: "Lune cosmique", style: "Cosmos", size: "L", price: 400, aspect: "aspect-[3/4]" },
];

const flashes = [
  { img: flash1, title: "Méduse Éthérée", size: "12–15 cm", price: 250 },
  { img: flash2, title: "Monarque Pastel", size: "8 cm", price: 150 },
  { img: flash3, title: "Baleine Bleue", size: "10–14 cm", price: 220 },
  { img: flash4, title: "Bouquet Sauvage", size: "15 cm", price: 290 },
];

const filters = ["Tout", "Floral", "Animal", "Abstrait", "Cosmos"] as const;
type Filter = (typeof filters)[number];

function HomePage() {
  const [filter, setFilter] = useState<Filter>("Tout");
  const filtered = filter === "Tout" ? realisations : realisations.filter((r) => r.style === filter);

  return (
    <div className="min-h-screen relative">
      <WatercolorBackdrop />
      <SiteHeader />

      {/* HERO / ABOUT */}
      <section id="apropos" className="relative px-6 pt-16 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="animate-fade-up order-2 md:order-1">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-6">L'artiste · Paris</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] italic mb-8 text-balance">
              L'art de la peau,<br />peint à l'eau.
            </h1>
            <div className="space-y-5 text-ink/75 leading-relaxed max-w-prose">
              <p>
                Bienvenue. Je m'appelle Elisa, et je tatoue depuis huit ans
                dans le style aquarelle — celui des pigments qui se
                diffusent, des transparences qui se superposent, des
                couleurs qui respirent.
              </p>
              <p>
                Mon travail puise dans la peinture sur papier, dans les
                jardins botaniques et dans les ciels d'orage. Chaque
                projet commence par un échange long et précis : je ne
                tatoue jamais deux fois le même motif.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#rdv" className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Prendre rendez-vous
                <span aria-hidden>→</span>
              </a>
              <a href="#realisations" className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-medium border border-ink/20 hover:border-ink/60 transition-colors">
                Voir les réalisations
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 animate-fade-up" style={{ animationDelay: "150ms" }}>
            <div className="relative">
              <div className="absolute -inset-3 bg-paper/40 rounded-[2rem] -rotate-2" />
              <img
                src={portrait}
                alt="Portrait d'Elisa, tatoueuse aquarelle"
                width={800}
                height={1000}
                className="relative w-full aspect-[4/5] object-cover rounded-[1.75rem] ring-1 ring-black/5 shadow-2xl shadow-black/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-paper px-5 py-3 rounded-2xl shadow-lg shadow-black/5 border border-border">
                <p className="font-serif italic text-lg">"L'encre est mon eau."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REALISATIONS */}
      <section id="realisations" className="relative px-6 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-3">Galerie</p>
            <h2 className="font-serif text-4xl md:text-5xl">Réalisations</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 text-xs uppercase tracking-widest rounded-full border transition-colors ${
                  filter === f
                    ? "bg-ink text-paper border-ink"
                    : "border-border text-ink/60 hover:border-ink/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((r, i) => (
            <figure
              key={r.title}
              className={`group relative overflow-hidden rounded-2xl bg-paper ring-1 ring-black/5 ${i % 3 === 1 ? "md:translate-y-8" : ""}`}
            >
              <img
                src={r.img}
                alt={r.title}
                loading="lazy"
                className={`w-full ${r.aspect} object-cover transition-transform duration-700 group-hover:scale-105`}
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-paper/70 text-[10px] uppercase tracking-widest mb-1">{r.style} · {r.size}</p>
                <div className="flex items-end justify-between gap-3">
                  <p className="font-serif italic text-paper text-xl leading-tight">{r.title}</p>
                  <p className="font-serif text-paper text-2xl whitespace-nowrap">{r.price}€</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FLASH */}
      <section id="flash" className="relative px-6 py-24 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-3">Disponibles à la réservation</p>
            <h2 className="font-serif text-4xl md:text-5xl italic mb-4">Flashes du moment</h2>
            <p className="text-ink/60">
              Dessins uniques, tatoués une seule fois. Réservez celui qui
              vous appelle — taille et placement adaptables.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {flashes.map((f) => (
              <article key={f.title} className="group">
                <div className="aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
                  <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-serif text-lg leading-tight truncate">{f.title}</p>
                    <p className="text-[11px] text-ink/50 uppercase tracking-wider">{f.size}</p>
                  </div>
                  <p className="font-serif text-xl shrink-0">{f.price}€</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="relative px-6 py-24 max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-3">Journal</p>
            <h2 className="font-serif text-4xl md:text-5xl">Articles</h2>
          </div>
          <Link to="/articles" className="text-xs uppercase tracking-widest text-ink/60 hover:text-ink hidden sm:inline">
            Tous les articles →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article key={a.slug} className="group">
              <Link to="/articles/$slug" params={{ slug: a.slug }} className="block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-5 ring-1 ring-black/5">
                  <img src={a.cover} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-2">{a.category} · {a.date}</p>
                <h3 className="font-serif text-2xl leading-snug mb-2 group-hover:italic transition-all">{a.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed line-clamp-3 mb-3">{a.excerpt}</p>
                <span className="text-xs uppercase tracking-widest border-b border-ink/30 group-hover:border-ink pb-0.5">
                  Lire la suite
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* BOOKING */}
      <section id="rdv" className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-3">Réservation</p>
            <h2 className="font-serif text-4xl md:text-5xl italic mb-6">Prendre rendez-vous</h2>
            <p className="text-ink/70 leading-relaxed mb-8 max-w-md">
              Choisissez une date qui vous convient et décrivez votre
              projet. Je reviens vers vous sous 48 h avec un devis et une
              proposition de séance.
            </p>

            <MiniCalendar />

            <div className="mt-8 p-5 rounded-2xl bg-paper/60 border border-border space-y-2 text-sm">
              <p className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Agenda ouvert pour <strong className="font-medium">mai — juillet 2026</strong></p>
              <p className="text-ink/60">Séances de 1 h à 6 h. Acompte de 30 % à la réservation.</p>
            </div>
          </div>

          <BookingForm />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function MiniCalendar() {
  const today = new Date();
  const month = today.toLocaleString("fr-FR", { month: "long", year: "numeric" });
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const [selected, setSelected] = useState<number | null>(null);

  const availableDays = new Set([3, 5, 10, 12, 17, 19, 24, 26]);

  return (
    <div className="bg-paper rounded-2xl border border-border p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <p className="font-serif text-lg capitalize">{month}</p>
        <div className="flex gap-1">
          <button className="size-8 grid place-items-center rounded-full hover:bg-muted" aria-label="Précédent">‹</button>
          <button className="size-8 grid place-items-center rounded-full hover:bg-muted" aria-label="Suivant">›</button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-[10px] uppercase text-ink/40 mb-2 text-center">
        {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => <div key={i}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm">
        {Array.from({ length: offset }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const available = availableDays.has(day);
          const isSelected = selected === day;
          return (
            <button
              key={day}
              disabled={!available}
              onClick={() => setSelected(day)}
              className={`aspect-square rounded-full text-sm transition-colors ${
                isSelected
                  ? "bg-ink text-paper"
                  : available
                  ? "bg-accent/50 hover:bg-accent text-ink font-medium"
                  : "text-ink/25 cursor-not-allowed"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function BookingForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="bg-paper rounded-3xl p-8 md:p-10 border border-border shadow-xl shadow-black/5"
    >
      {sent ? (
        <div className="text-center py-12 space-y-3">
          <p className="font-serif italic text-3xl">Merci.</p>
          <p className="text-ink/65 max-w-xs mx-auto">
            Votre demande est partie. Je vous réponds dans les 48 h à l'adresse indiquée.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          <Field label="Nom & Prénom" required>
            <input type="text" required className="form-input" />
          </Field>
          <Field label="Email" required>
            <input type="email" required className="form-input" />
          </Field>
          <Field label="Type de prestation">
            <select className="form-input bg-transparent">
              <option>Projet sur mesure</option>
              <option>Réservation d'un flash</option>
              <option>Retouche / consultation</option>
            </select>
          </Field>
          <Field label="Description du projet" required>
            <textarea rows={4} required className="form-input resize-none" placeholder="Inspirations, palette, références…" />
          </Field>
          <div className="grid grid-cols-2 gap-5">
            <Field label="Taille (cm)">
              <input type="text" className="form-input" placeholder="ex. 15" />
            </Field>
            <Field label="Zone du corps">
              <input type="text" className="form-input" placeholder="ex. avant-bras" />
            </Field>
          </div>
          <button type="submit" className="w-full mt-3 bg-ink text-paper py-4 rounded-xl text-xs uppercase tracking-[0.25em] font-medium hover:opacity-90 transition-opacity">
            Envoyer la demande
          </button>
          <p className="text-[11px] text-ink/40 text-center">
            En envoyant ce formulaire vous acceptez d'être recontacté·e par email.
          </p>
        </div>
      )}

      <style>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: 0;
          border-bottom: 1px solid color-mix(in oklab, currentColor 12%, transparent);
          padding: 0.5rem 0;
          font-size: 0.95rem;
          color: inherit;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus {
          border-bottom-color: currentColor;
        }
      `}</style>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-1.5 block">
        {label}{required && <span className="text-ink/30"> *</span>}
      </span>
      {children}
    </label>
  );
}
