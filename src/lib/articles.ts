import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  cover: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "preparer-sa-peau-avant-la-seance",
    title: "Préparer sa peau avant la séance",
    excerpt:
      "L'hydratation est la clé d'un pigment qui fuse parfaitement. Voici mes conseils pour préparer votre peau dans les jours qui précèdent votre tatouage aquarelle.",
    date: "12 mars 2026",
    category: "Soin & rituels",
    cover: article1,
    content: [
      "Un tatouage aquarelle demande une peau souple, hydratée et apaisée. Les pigments fluides révèlent leur intensité lorsque la peau accueille l'encre sans tension ni rougeur.",
      "Dans la semaine précédant la séance, j'invite mes client·es à boire au moins 1,5L d'eau par jour, à appliquer une crème neutre matin et soir, et à éviter toute exposition au soleil — un bronzage altère la fidélité des couleurs.",
      "La veille du rendez-vous : pas d'alcool, pas d'aspirine, une bonne nuit de sommeil. Le matin même, un repas complet : la séance peut durer plusieurs heures, votre corps a besoin de tenir.",
    ],
  },
  {
    slug: "comprendre-le-style-aquarelle",
    title: "Comprendre le style aquarelle",
    excerpt:
      "Loin d'être une tendance, l'aquarelle sur peau est une discipline exigeante qui mêle tradition picturale et technique du tatouage moderne. Voici pourquoi.",
    date: "28 février 2026",
    category: "Technique",
    cover: article2,
    content: [
      "L'aquarelle telle que je la pratique s'inspire directement de la peinture sur papier : transparences, superpositions, taches qui se diffusent. Sur la peau, cela demande une lecture précise de chaque pigment.",
      "Contrairement à ce qu'on lit parfois, un tatouage aquarelle bien réalisé vieillit aussi bien qu'un tatouage classique — à condition d'être pensé avec un dessin sous-jacent solide, et non comme une simple éclaboussure.",
    ],
  },
  {
    slug: "du-croquis-au-tatouage",
    title: "Du croquis au tatouage",
    excerpt:
      "Chaque projet commence par une conversation, puis un dessin. Je vous emmène dans les coulisses de la création d'un tatouage sur mesure.",
    date: "14 février 2026",
    category: "Atelier",
    cover: article3,
    content: [
      "Tout commence par un échange : ce que vous voulez raconter, les couleurs qui vous habitent, la zone du corps. Je prends des notes, je dessine devant vous, on ajuste.",
      "Vient ensuite le croquis à l'aquarelle sur papier — c'est l'étape la plus importante. Une fois validé, je transpose le motif sur stencil, puis sur la peau.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
