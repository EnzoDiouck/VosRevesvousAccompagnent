import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WatercolorBackdrop } from "@/components/WatercolorBackdrop";
import { flashs, realisations, settings } from "@/lib/content";

import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vos Rêves vous Accompagnent — Élodie, tatoueuse aquarelle" },
      { name: "description", content: "Élodie, artiste tatoueuse spécialisée dans le style aquarelle. Réalisations sur mesure, flashes disponibles, prise de rendez-vous en ligne." },
    ],
  }),
  component: HomePage,
});

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
            href={settings.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-xs uppercase tracking-widest border-b border-ink/30 hover:border-ink pb-1 self-start sm:self-end"
          >
            Voir plus sur Instagram →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {realisations.map((r) => (
            <article
              key={r.url}
              className="relative overflow-hidden rounded-2xl bg-paper ring-1 ring-black/5"
            >
              <iframe
                title={r.title}
                src={r.embed}
                loading="lazy"
                className="w-full h-[460px] bg-white"
                allowTransparency={true}
                allowFullScreen
              />
            </article>
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
            {flashs.map((f) => (
              <article key={f.title} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
                  <img src={f.image} alt={f.title} loading="lazy" className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-serif text-lg leading-tight truncate">{f.title}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOUTIQUE ETSY */}
      <section id="boutique" className="relative px-6 py-24 max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-3">Boutique · Etsy</p>
          <h2 className="font-serif text-4xl md:text-5xl italic mb-5">Boutique Etsy</h2>
          <a
            href={settings.etsyUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Voir le produit Etsy
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      {/* BOOKING */}
      <section id="rdv" className="relative px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-3">Réservation</p>
            <h2 className="font-serif text-4xl md:text-5xl italic mb-6">Prendre rendez-vous</h2>
            <p className="text-ink/70 leading-relaxed mb-8 max-w-md">
              Choisissez un créneau directement dans l'agenda ci-contre et
              décrivez votre projet. Je reviens vers vous rapidement avec un
              devis et une proposition de séance.
            </p>

            <div className="p-5 rounded-2xl bg-paper/60 border border-border space-y-2 text-sm">
              <p className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> {settings.bookingNote}</p>
              <p className="text-ink/60">{settings.bookingDetails}</p>
            </div>
          </div>

          <BookingCalendar />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function BookingCalendar() {
  if (!settings.bookingUrl) {
    return (
      <div className="bg-paper rounded-3xl p-8 md:p-10 border border-border shadow-xl shadow-black/5 text-center space-y-5">
        <p className="font-serif italic text-2xl">Réservation en ligne bientôt disponible</p>
        <p className="text-ink/65 max-w-xs mx-auto">
          En attendant, écrivez-moi directement pour décrire votre projet et
          convenir ensemble d'un créneau.
        </p>
        <a
          href={`mailto:${settings.email}`}
          className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          M'écrire par email
          <span aria-hidden>→</span>
        </a>
      </div>
    );
  }

  return (
    <div className="bg-paper rounded-3xl overflow-hidden border border-border shadow-xl shadow-black/5">
      <iframe
        src={settings.bookingUrl}
        title="Prendre rendez-vous"
        className="w-full h-[720px] border-0"
      />
    </div>
  );
}
