export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  content: string[];
};

type ArticleJson = Omit<Article, "content"> & { content: string; order?: number };

const articleModules = import.meta.glob<ArticleJson>("/content/articles/*.json", {
  eager: true,
  import: "default",
});

export const articles: Article[] = Object.values(articleModules)
  .sort((a, b) => (b.order ?? 0) - (a.order ?? 0))
  .map((a) => ({
    ...a,
    // Les paragraphes sont séparés par une ligne vide dans le CMS.
    content: a.content.split(/\n\s*\n/).filter(Boolean),
  }));

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
