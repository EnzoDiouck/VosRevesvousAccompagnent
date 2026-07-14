import { settings } from "@/lib/content";

export function SiteFooter() {
  const telHref = `tel:${settings.phone.replace(/[^+\d]/g, "")}`;

  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif italic text-2xl mb-2">Vos Rêves vous Accompagnent</p>
          <p className="text-sm text-ink/60 leading-relaxed max-w-xs">
            Élodie · Artiste tatoueuse aquarelle. Sur rendez-vous uniquement.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-3">Contact</p>
          <p><a href={`mailto:${settings.email}`} className="hover:text-ink/60">{settings.email}</a></p>
          <p><a href={telHref} className="hover:text-ink/60">{settings.phone}</a></p>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-3">Suivez-moi</p>
          <div className="flex gap-4">
            <a href={settings.instagramUrl} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="size-10 grid place-items-center rounded-full border border-border hover:bg-ink hover:text-paper transition-colors">
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href={`mailto:${settings.email}`} aria-label="Email" className="size-10 grid place-items-center rounded-full border border-border hover:bg-ink hover:text-paper transition-colors">
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </a>
          </div>
          <p className="pt-2 text-ink/60">@vosrevesvousaccompagnent</p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-8 flex flex-col sm:flex-row gap-3 justify-between text-[10px] uppercase tracking-[0.2em] text-ink/40">
        <p>© {new Date().getFullYear()} Vos Rêves vous Accompagnent — Élodie</p>
        <div className="flex gap-6">
          <a href="/mentions-legales" className="hover:text-ink">Mentions légales</a>
          <a href="/conditions-utilisation" className="hover:text-ink">Conditions d'utilisation</a>
        </div>
      </div>
    </footer>
  );
}
