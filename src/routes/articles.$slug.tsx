import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WatercolorBackdrop } from "@/components/WatercolorBackdrop";
import { getArticle, articles } from "@/lib/articles";

export const Route = createFileRoute("/articles/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => ({
    meta: loaderData?.article
      ? [
          { title: `${loaderData.article.title} — Elisa Bloom` },
          { name: "description", content: loaderData.article.excerpt },
          { property: "og:title", content: loaderData.article.title },
          { property: "og:description", content: loaderData.article.excerpt },
          { property: "og:image", content: loaderData.article.cover },
        ]
      : [],
  }),
  component: ArticleDetail,
});

function ArticleDetail() {
  const { article } = Route.useLoaderData();
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen relative">
      <WatercolorBackdrop />
      <SiteHeader />

      <article className="px-6 pt-16 pb-20 max-w-3xl mx-auto">
        <Link to="/articles" className="text-xs uppercase tracking-widest text-ink/50 hover:text-ink inline-flex items-center gap-2 mb-10">
          ← Tous les articles
        </Link>

        <p className="text-[11px] uppercase tracking-[0.25em] text-ink/40 mb-4">
          {article.category} · {article.date}
        </p>
        <h1 className="font-serif text-4xl md:text-6xl italic leading-[1.05] mb-10 text-balance">
          {article.title}
        </h1>

        <div className="aspect-[16/10] overflow-hidden rounded-3xl ring-1 ring-black/5 mb-12">
          <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-ink/80 font-serif">
          <p className="text-2xl italic text-ink first-line:tracking-wide">
            {article.excerpt}
          </p>
          {article.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      {others.length > 0 && (
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <p className="font-serif italic text-2xl mb-8">À lire ensuite</p>
          <div className="grid md:grid-cols-2 gap-8">
            {others.map((a) => (
              <Link key={a.slug} to="/articles/$slug" params={{ slug: a.slug }} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-4 ring-1 ring-black/5">
                  <img src={a.cover} alt={a.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-2">{a.category}</p>
                <h3 className="font-serif text-2xl group-hover:italic">{a.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}
