import splashPink from "@/assets/splash-pink.png";
import splashBlue from "@/assets/splash-blue.png";
import splashOrange from "@/assets/splash-orange.png";

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border/60 overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-64 pointer-events-none">
        <img src={splashPink} alt="" loading="lazy" className="absolute -bottom-16 left-0 w-72 opacity-70 mix-blend-multiply" />
        <img src={splashBlue} alt="" loading="lazy" className="absolute -bottom-10 left-1/3 w-80 opacity-60 mix-blend-multiply" />
        <img src={splashOrange} alt="" loading="lazy" className="absolute -bottom-20 right-0 w-72 opacity-65 mix-blend-multiply" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-12 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-serif italic text-3xl mb-3">Elisa Bloom</p>
          <p className="text-sm text-ink/60 leading-relaxed max-w-xs">
            Atelier de tatouage aquarelle. Sur rendez-vous uniquement.
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-3">Contact</p>
          <p><a href="mailto:hello@elisabloom.fr" className="hover:text-ink/60">hello@elisabloom.fr</a></p>
          <p><a href="tel:+33600000000" className="hover:text-ink/60">+33 6 00 00 00 00</a></p>
          <p className="text-ink/60">14 rue des Pigments, Paris</p>
        </div>

        <div className="text-sm space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-3">Suivez-moi</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="size-10 grid place-items-center rounded-full border border-border hover:bg-ink hover:text-paper transition-colors">
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
            </a>
            <a href="#" aria-label="Pinterest" className="size-10 grid place-items-center rounded-full border border-border hover:bg-ink hover:text-paper transition-colors">
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 10c0-2 1.5-3 3-3s3 1 3 3-1.5 3-3 3"/></svg>
            </a>
            <a href="#" aria-label="Email" className="size-10 grid place-items-center rounded-full border border-border hover:bg-ink hover:text-paper transition-colors">
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-8 flex flex-col sm:flex-row gap-3 justify-between text-[10px] uppercase tracking-[0.2em] text-ink/40">
        <p>© {new Date().getFullYear()} Elisa Bloom — Tous droits réservés</p>
        <p>Mentions légales · SIRET 000 000 000 00000</p>
      </div>
    </footer>
  );
}
