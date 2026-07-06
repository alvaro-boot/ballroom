export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface House {
  name: string;
  slug: string;
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  history: string;
  origin: string;
  judging: string;
  judgesLookFor: string;
  icons: string[];
  tips?: string;
  subcategories?: string[];
}

export interface Legend {
  slug: string;
  name: string;
  house?: string;
  excerpt: string;
  biography: string;
  image?: string;
}

export interface Documentary {
  slug: string;
  title: string;
  year: string;
  description: string;
  history: string;
  whereToWatch?: string;
  influence?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface CultureTerm {
  term: string;
  definition: string;
}
