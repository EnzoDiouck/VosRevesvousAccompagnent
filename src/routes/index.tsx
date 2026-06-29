import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WatercolorBackdrop } from "@/components/WatercolorBackdrop";

import portrait from "@/assets/portrait.jpg";
import flash1 from "@/assets/falsh1.jpg.asset.json";
import flash2 from "@/assets/flash2.jpg.asset.json";
import flash3 from "@/assets/flash3.jpg.asset.json";
import flash4 from "@/assets/flash4.jpg.asset.json";
import ig1 from "@/assets/ig1.webp.asset.json";
import ig2 from "@/assets/ig2.webp.asset.json";
import ig3 from "@/assets/ig3.webp.asset.json";
import ig4 from "@/assets/ig4.webp.asset.json";
import shop1 from "@/assets/shop-1.jpg";
import shop2 from "@/assets/shop-2.jpg";
import shop3 from "@/assets/shop-3.jpg";
import shop4 from "@/assets/shop-4.jpg";
import shop5 from "@/assets/shop-5.jpg";
import shop6 from "@/assets/shop-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vos Rêves vous Accompagnent — Élodie, tatoueuse aquarelle" },
      { name: "description", content: "Élodie, artiste tatoueuse spécialisée dans le style aquarelle. Réalisations sur mesure, flashes disponibles, prise de rendez-vous en ligne." },
    ],
  }),
  component: HomePage,
});

const realisations = [
  { img: ig1.url, title: "Réalisation récente", url: "https://www.instagram.com/p/DO-XU39DfKB/" },
  { img: ig2.url, title: "Composition aquarelle", url: "https://www.instagram.com/p/DNkPDdaM9jE/" },
  { img: ig3.url, title: "Pièce sur mesure", url: "https://www.instagram.com/p/DKRWce9MNBw/" },
  { img: ig4.url, title: "Projet floral", url: "https://www.instagram.com/p/DJgJr-Ysyr2/" },
];

const flashes = [
  { img: flash1.url, title: "Sauvage", size: "15–20 cm" },
  { img: flash2.url, title: "Chat plumes", size: "12–15 cm" },
  { img: flash3.url, title: "Zèbre éclatant", size: "15 cm" },
  { img: flash4.url, title: "Ange — Respire / Espère", size: "18 cm" },
];

function HomePage() {
  return (
    <div className="min-h-screen relative">
      <WatercolorBackdrop />
      <SiteHeader />

      {/* HERO / ABOUT */}
      <section id="apropos" className="relative px-6 pt-16 pb-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="animate-fade-up order-2 md:order-1">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-6">Élodie · Artiste tatoueuse</p>
            <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] italic mb-8 text-balance">
              Vos rêves<br />vous accompagnent.
            </h1>
            <div className="space-y-5 text-ink/75 leading-relaxed max-w-prose">
              <p>
                Bienvenue dans mon atelier. Je suis Élodie, tatoueuse
                spécialisée dans le style aquarelle — celui des
                pigments qui se diffusent, des transparences qui se
                superposent, des couleurs qui respirent.
              </p>
              <p>
                Mon travail puise dans la peinture sur papier, dans
                la nature et dans vos histoires. Chaque projet
                commence par un échange long et précis : je ne tatoue
                jamais deux fois le même motif.
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
                alt="Portrait d'Élodie, tatoueuse aquarelle"
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

      {/* REALISATIONS — Instagram */}
      <section id="realisations" className="relative px-6 py-20 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-3">Galerie · Instagram</p>
            <h2 className="font-serif text-4xl md:text-5xl">Réalisations</h2>
          </div>
          <a
            href="https://www.instagram.com/vosrevesvousaccompagnent/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs uppercase tracking-widest border-b border-ink/30 hover:border-ink pb-1 self-start sm:self-end"
          >
            Voir plus sur Instagram →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {realisations.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative block overflow-hidden rounded-2xl bg-paper ring-1 ring-black/5"
            >
              <img
                src={r.img}
                alt={r.title}
                loading="lazy"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-paper font-serif italic text-lg">{r.title}</p>
              </div>
            </a>
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
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
                  <img src={f.img} alt={f.title} loading="lazy" className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-serif text-lg leading-tight truncate">{f.title}</p>
                    <p className="text-[11px] text-ink/50 uppercase tracking-wider">{f.size}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOUTIQUE ETSY */}
      <section id="boutique" className="relative px-6 py-24 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-3">Boutique · Etsy</p>
            <h2 className="font-serif text-4xl md:text-5xl italic">L'atelier en objets</h2>
            <p className="text-ink/65 mt-4 max-w-md leading-relaxed">
              Tirages, pins, stickers et textiles peints à la main —
              expédiés via ma boutique Etsy.
            </p>
          </div>
          <a
            href="https://www.etsy.com/shop/vosrevesvousaccompagnent"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 self-start sm:self-end text-xs uppercase tracking-widest border-b border-ink/30 hover:border-ink pb-1"
          >
            Voir la boutique Etsy →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {[
            { img: shop1, title: "Tirage Pivoine A4", tag: "Art print", price: 28 },
            { img: shop2, title: "Pin Monarque émaillé", tag: "Accessoire", price: 14 },
            { img: shop3, title: "Carnet de flashs n°3", tag: "Édition limitée", price: 42 },
            { img: shop4, title: "Tote bag Méduse", tag: "Textile", price: 32 },
            { img: shop5, title: "Pack stickers aquarelle", tag: "Stickers", price: 12 },
            { img: shop6, title: "Tirage Floraison encadré", tag: "Art print · 30×40", price: 95 },
          ].map((p) => (
            <a
              key={p.title}
              href="https://www.etsy.com/shop/vosrevesvousaccompagnent"
              target="_blank"
              rel="noreferrer noopener"
              className="group block"
            >
              <div className="aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-serif text-lg leading-tight truncate group-hover:italic transition-all">{p.title}</p>
                  <p className="text-[11px] text-ink/50 uppercase tracking-wider">{p.tag}</p>
                </div>
                <p className="font-serif text-xl shrink-0">{p.price}€</p>
              </div>
            </a>
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
            Votre demande est partie. Élodie vous répond dans les 48 h à l'adresse indiquée.
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
