export type ExperimentDifficulty = "easy" | "medium" | "hard";

export interface ExperimentStep {
  id: number;
  instruction: string;
  requiredActions: string[];
  validationKey: string;
  expectedValue: unknown;
}

export interface Experiment {
  id: string;
  title: string;
  category: string;
  difficulty: ExperimentDifficulty;
  duration: number;
  requiredEquipment: string[];
  requiredChemicals: string[];
  steps: ExperimentStep[];
  theory: string;
  safetyPrecautions: string[];
  learningOutcomes: string[];
  observationPrompts?: string[];
}

export interface ExperimentCategory {
  id: string;
  name: string;
  experiments: Experiment[];
}
