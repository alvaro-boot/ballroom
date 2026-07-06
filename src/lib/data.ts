export { siteConfig } from "./content/site";
export { historySections, historyFigures } from "./content/history";
export { timelineEvents } from "./content/timeline";
export { legends } from "./content/legends";
export { houses, houseConcepts } from "./content/houses";
export { categories } from "./content/categories";
export { identities } from "./content/identities";
export { blogContent } from "./content/blog";
export {
  documentaries,
  ballroomRegions,
  glossaryTerms,
  cultureTerms,
  blogPosts,
} from "./content/misc";
export { galleryItems } from "./content/gallery";

import { categories } from "./content/categories";
import { identities } from "./content/identities";
import { legends } from "./content/legends";

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getIdentityBySlug(slug: string) {
  return identities.find((i) => i.slug === slug);
}

export function getLegendBySlug(slug: string) {
  return legends.find((l) => l.slug === slug);
}
