import type { ChemicalDefinition } from "../types/chemical";

export const chemicalCatalog: ChemicalDefinition[] = [
  {
    id: "water",
    name: "Distilled Water",
    formula: "H2O",
    state: "liquid",
    color: "#4FC3F7",
    temperature: 25,
    reactsWith: []
  }
];
