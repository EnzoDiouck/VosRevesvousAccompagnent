// Contenu éditable via l'interface CMS (/admin). Les fichiers sous /content
// sont lus au build (et en dev) grâce à import.meta.glob — toute modification
// faite dans le CMS édite ces mêmes fichiers puis déclenche un rebuild du site.

export type Settings = {
  bookingUrl: string;
  bookingNote: string;
  bookingDetails: string;
  etsyUrl: string;
  instagramUrl: string;
  email: string;
  phone: string;
};

export type Flash = {
  title: string;
  image: string;
  order?: number;
};

export type Realisation = {
  title: string;
  url: string;
  order?: number;
};

export type RealisationWithEmbed = Realisation & { embed: string };

function bySlug<T extends { order?: number }>(modules: Record<string, T>): T[] {
  return Object.values(modules).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

const settingsModules = import.meta.glob<Settings>("/content/settings.json", {
  eager: true,
  import: "default",
});

export const settings: Settings = Object.values(settingsModules)[0] ?? {
  bookingUrl: "",
  bookingNote: "",
  bookingDetails: "",
  etsyUrl: "",
  instagramUrl: "",
  email: "",
  phone: "",
};

const flashModules = import.meta.glob<Flash>("/content/flashs/*.json", {
  eager: true,
  import: "default",
});

export const flashs: Flash[] = bySlug(flashModules);

const realisationModules = import.meta.glob<Realisation>("/content/realisations/*.json", {
  eager: true,
  import: "default",
});

export const realisations: RealisationWithEmbed[] = bySlug(realisationModules).map((r) => ({
  ...r,
  embed: `${r.url.replace(/\/?$/, "/")}embed/captioned/`,
}));
