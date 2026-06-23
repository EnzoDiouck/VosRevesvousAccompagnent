import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WatercolorBackdrop } from "@/components/WatercolorBackdrop";
import { articles } from "@/lib/articles";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Journal — Elisa Bloom" },
      { name: "description", content: "Articles, conseils et réflexions sur le tatouage aquarelle." },
    ],
  }),
  component: ArticlesIndex,
});

function ArticlesIndex() {
  return (
    <div className="min-h-screen relative">
      <WatercolorBackdrop />
      <SiteHeader />

      <section className="px-6 pt-20 pb-12 max-w-5xl mx-auto text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-4">Journal</p>
        <h1 className="font-serif text-5xl md:text-6xl italic mb-6">Articles & rituels</h1>
        <p className="text-ink/65 max-w-xl mx-auto leading-relaxed">
          Conseils, coulisses de l'atelier et notes sur le tatouage
          aquarelle. Mis à jour chaque mois.
        </p>
      </section>

      <section className="px-6 pb-24 max-w-5xl mx-auto space-y-12">
        {articles.map((a, i) => (
          <article key={a.slug} className={`grid md:grid-cols-5 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
            <Link to="/articles/$slug" params={{ slug: a.slug }} className="md:col-span-2 block [direction:ltr]">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-black/5 group">
                <img src={a.cover} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Link>
            <div className="md:col-span-3 [direction:ltr]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-3">{a.category} · {a.date}</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
                <Link to="/articles/$slug" params={{ slug: a.slug }} className="hover:italic">{a.title}</Link>
              </h2>
              <p className="text-ink/70 leading-relaxed mb-5">{a.excerpt}</p>
              <Link to="/articles/$slug" params={{ slug: a.slug }} className="text-xs uppercase tracking-widest border-b border-ink/40 pb-0.5 hover:border-ink">
                Lire l'article
              </Link>
            </div>
          </article>
        ))}
      </section>

      <SiteFooter />
    </div>
  );
}
