import type { Category, CategoryGroup } from "../../types";
import { coreCategories } from "./core";
import { extraCategories } from "./extra";

const groupBySlug: Record<string, CategoryGroup> = {
  face: "belleza",
  runway: "runway",
  vogue: "vogue",
  realness: "realness",
  "sex-siren": "sex-siren",
  ota: "otros",
  bizarre: "moda",
  body: "cuerpo",
  "hands-performance": "vogue",
  "best-dressed": "moda",
  labels: "moda",
  performance: "performance",
};

export const categories: Category[] = [
  ...coreCategories.map((cat) => ({
    ...cat,
    group: groupBySlug[cat.slug] ?? "otros",
  })),
  ...extraCategories,
];
