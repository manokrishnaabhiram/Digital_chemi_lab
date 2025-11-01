export type ChemicalState = "solid" | "liquid" | "gas";

export type ReactionType = "displacement" | "combination" | "decomposition" | "redox";

export type ReactionEnergy = "exothermic" | "endothermic";

export interface ReactionDefinition {
  reactant2: string;
  products: string[];
  type: ReactionType;
  energy: ReactionEnergy;
  observableChanges: string[];
  animation: string;
}

export interface ChemicalDefinition {
  id: string;
  name: string;
  formula: string;
  state: ChemicalState;
  color: string;
  volume?: number;
  mass?: number;
  concentration?: number;
  temperature: number;
  pH?: number;
  reactsWith: ReactionDefinition[];
}
