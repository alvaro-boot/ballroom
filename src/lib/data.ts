export { siteConfig } from "./content/site";
export { historySections, historyFigures } from "./content/history";
export { timelineEvents } from "./content/timeline";
export { legends } from "./content/legends";
export { houses, houseConcepts } from "./content/houses";
export { categories } from "./content/categories";
export { blogContent } from "./content/blog";
export {
  documentaries,
  ballroomRegions,
  glossaryTerms,
  cultureTerms,
  blogPosts,
} from "./content/misc";

import { categories } from "./content/categories";
import { legends } from "./content/legends";

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getLegendBySlug(slug: string) {
  return legends.find((l) => l.slug === slug);
}
