export interface Figure {
  slug: string;
  name: string;
  image: string;
  credit?: string;
}

export const figures: Figure[] = [
  {
    slug: "crystal-labeija",
    name: "Crystal LaBeija",
    image: "https://upload.wikimedia.org/wikipedia/en/9/98/Crystal_LaBeija.jpg",
    credit: "The Queen (1968) / Wikipedia",
  },
  {
    slug: "pepper-labeija",
    name: "Pepper LaBeija",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Pepper_LaBeija_Illustration.png",
    credit: "Ilustración / Wikimedia Commons",
  },
  {
    slug: "dorian-corey",
    name: "Dorian Corey",
    image: "https://upload.wikimedia.org/wikipedia/en/4/45/Dorian_Corey.jpg",
    credit: "Paris Is Burning / Wikipedia",
  },
  {
    slug: "willi-ninja",
    name: "Willi Ninja",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Willi_Ninga%2C_NYC%2C_1994.jpg",
    credit: "Marcelo Somos / Wikimedia Commons",
  },
  {
    slug: "angie-xtravaganza",
    name: "Angie Xtravaganza",
    image: "https://upload.wikimedia.org/wikipedia/en/9/9c/Anji-xtravaganza.jpg",
    credit: "Paris Is Burning / Wikipedia",
  },
  {
    slug: "octavia-saint-laurent",
    name: "Octavia Saint Laurent",
    image: "https://upload.wikimedia.org/wikipedia/en/d/d3/Paris_Is_Burnin-OctaviaStLaurent.jpg",
    credit: "Paris Is Burning / Wikipedia",
  },
  {
    slug: "jose-gutierrez-xtravaganza",
    name: "José Gutiérrez Xtravaganza",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Jose_Gutierez_Xtravaganza.jpg",
    credit: "Oliver Dorian / Festival Ambulante / Wikimedia Commons",
  },
  {
    slug: "venus-xtravaganza",
    name: "Venus Xtravaganza",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a4/Venus_Xtravaganza.jpg",
    credit: "Paris Is Burning / Wikipedia",
  },
  {
    slug: "leiomy-maldonado",
    name: "Leiomy Maldonado",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/EbruYildiz_%E2%80%93_Leiomy_Mizrahi_portrait_02.jpg",
    credit: "Ebru Yildiz / Wikimedia Commons",
  },
];

const figureBySlug = new Map(figures.map((f) => [f.slug, f]));

const figureByName = new Map(
  figures.flatMap((f) => [
    [f.name.toLowerCase(), f],
    [f.slug.replace(/-/g, " "), f],
  ]),
);

export function getFigureBySlug(slug: string): Figure | undefined {
  return figureBySlug.get(slug);
}

export function getFigureByName(name: string): Figure | undefined {
  const normalized = name.toLowerCase().trim();
  return (
    figureByName.get(normalized) ??
    figures.find(
      (f) =>
        f.name.toLowerCase().includes(normalized) ||
        normalized.includes(f.name.toLowerCase()),
    )
  );
}
