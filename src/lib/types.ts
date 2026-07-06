export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  detail?: string;
}

export interface HistorySection {
  title: string;
  paragraphs: string[];
}

export interface House {
  name: string;
  slug: string;
  description: string;
  founded?: string;
  founder?: string;
  paragraphs: string[];
}

export interface HouseConcept {
  title: string;
  paragraphs: string[];
}

export interface Category {
  slug: string;
  name: string;
  tagline: string;
  group: CategoryGroup;
  whoCanWalk?: string[];
  history: string[];
  origin: string[];
  judging: string[];
  judgesLookFor: string[];
  icons: string[];
  tips?: string[];
  subcategories?: string[];
}

export type CategoryGroup =
  | "belleza"
  | "runway"
  | "vogue"
  | "realness"
  | "moda"
  | "cuerpo"
  | "sex-siren"
  | "performance"
  | "otros";

export interface Identity {
  slug: string;
  name: string;
  abbreviation?: string;
  figure?: "FF" | "MF" | "OTA";
  tagline: string;
  description: string[];
  canWalk?: string[];
  history: string[];
  relatedCategories: string[];
}

export interface Legend {
  slug: string;
  name: string;
  house?: string;
  excerpt: string;
  biography: string;
  biographyParagraphs: string[];
  image?: string;
}

export interface Documentary {
  slug: string;
  title: string;
  year: string;
  description: string;
  youtubeId?: string;
  posterImage?: string;
  history: string[];
  whereToWatch?: string;
  influence: string[];
}

export interface GalleryItem {
  slug: string;
  title: string;
  year: string;
  category: string;
  image: string;
  credit?: string;
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
