import type { ChemicalDefinition } from "../types/chemical";

export const chemicalCatalog: ChemicalDefinition[] = [
  {
    id: "water",
    name: "Distilled Water",
    formula: "H2O",
    state: "liquid",
    color: "#4FC3F7",
    temperature: 25,
    unit: "ml",
    defaultAmount: 1000,
    reactsWith: []
  },
  {
    id: "ice",
    name: "Crushed Ice",
    formula: "H2O(s)",
    state: "solid",
    color: "#E0F2FE",
    temperature: 0,
    unit: "g",
    defaultAmount: 200,
    reactsWith: []
  },
  {
    id: "hydrochloric-acid",
    name: "Hydrochloric Acid (0.1 M)",
    formula: "HCl",
    state: "liquid",
    color: "#F87171",
    temperature: 25,
    unit: "ml",
    defaultAmount: 250,
    hazards: ["Corrosive", "Irritant"],
    reactsWith: [
      {
        reactant2: "sodium-hydroxide",
        products: ["sodium-chloride", "water"],
        type: "combination",
        energy: "exothermic",
        observableChanges: ["Temperature rises", "Indicator changes color"],
        animation: "neutralization"
      }
    ]
  },
  {
    id: "sodium-hydroxide",
    name: "Sodium Hydroxide (0.1 M)",
    formula: "NaOH",
    state: "liquid",
    color: "#BFDBFE",
    temperature: 25,
    unit: "ml",
    defaultAmount: 250,
    hazards: ["Corrosive"],
    reactsWith: [
      {
        reactant2: "hydrochloric-acid",
        products: ["sodium-chloride", "water"],
        type: "combination",
        energy: "exothermic",
        observableChanges: ["Temperature rises", "Indicator turns colorless"],
        animation: "neutralization"
      }
    ]
  },
  {
    id: "phenolphthalein",
    name: "Phenolphthalein Indicator",
    formula: "C20H14O4",
    state: "liquid",
    color: "#F9A8D4",
    temperature: 25,
    unit: "drops",
    defaultAmount: 40,
    hazards: ["Irritant"],
    reactsWith: []
  },
  {
    id: "copper-sulfate-solution",
    name: "Copper Sulfate Solution",
    formula: "CuSO4",
    state: "liquid",
    color: "#3B82F6",
    temperature: 25,
    unit: "ml",
    defaultAmount: 200,
    hazards: ["Toxic"],
    reactsWith: [
      {
        reactant2: "iron-nail",
        products: ["iron(ii)-sulfate", "copper"],
        type: "displacement",
        energy: "exothermic",
        observableChanges: ["Color fades", "Brown copper coating forms"],
        animation: "displacement"
      }
    ]
  },
  {
    id: "iron-nail",
    name: "Polished Iron Nail",
    formula: "Fe",
    state: "solid",
    color: "#9CA3AF",
    temperature: 25,
    unit: "g",
    defaultAmount: 20,
    reactsWith: [
      {
        reactant2: "copper-sulfate-solution",
        products: ["iron(ii)-sulfate", "copper"],
        type: "displacement",
        energy: "exothermic",
        observableChanges: ["Copper deposition on nail", "Solution turns pale green"],
        animation: "displacement"
      }
    ]
  }
];
